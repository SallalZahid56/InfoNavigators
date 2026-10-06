// Run from your project root:  node audit-images.mjs
// After "npm run build" you can also run:  node audit-images.mjs --out
// (--out also searches the built /out folder, which catches images that are
//  only referenced inside data files / bundled code)
// 1) Lists images in /public that no code references (unused candidates)
// 2) Lists every <Image> / <img> tag with its alt text status
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(ROOT, "src");
const IMG_EXT = /\.(png|jpe?g|webp|svg|gif|avif|ico)$/i;
const CODE_EXT = /\.(jsx?|tsx?|css|scss|json|md|mdx)$/i;

function walk(dir, test, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".next" || e.name === "out") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, test, out);
    else if (test.test(e.name)) out.push(p);
  }
  return out;
}

const images = walk(PUBLIC, IMG_EXT);
const codeFiles = [...walk(SRC, CODE_EXT), ...walk(path.join(ROOT, "app"), CODE_EXT)];
const extra = ["next.config.js", "next.config.mjs", "package.json"].map((f) => path.join(ROOT, f)).filter(fs.existsSync);
const allCode = [...codeFiles, ...extra];
let corpus = allCode.map((f) => fs.readFileSync(f, "utf8")).join("\n");

if (process.argv.includes("--out")) {
  const OUT = path.join(ROOT, "out");
  if (!fs.existsSync(OUT)) {
    console.log("No /out folder found. Run npm run build first (needs output: 'export').");
  } else {
    const walkAll = (d, acc = []) => {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const q = path.join(d, e.name);
        if (e.isDirectory()) walkAll(q, acc);
        else if (/\.(html|js|json|txt|css)$/i.test(e.name)) acc.push(q);
      }
      return acc;
    };
    const outFiles = walkAll(OUT);
    corpus += "\n" + outFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");
    console.log("Also searched " + outFiles.length + " files in /out");
  }
}

// ---------- 1. unused images ----------
const KEEP = /^(og-image|logo|favicon|apple-touch-icon|icon|android-chrome|site\.webmanifest)/i;
const used = [], unused = [];
for (const img of images) {
  const rel = "/" + path.relative(PUBLIC, img).split(path.sep).join("/");
  const base = path.basename(img);
  const isUsed =
    corpus.includes(rel) || corpus.includes(base) ||
    corpus.includes(encodeURIComponent(base)) || corpus.includes(base.replace(/ /g, "%20"));
  (isUsed || KEEP.test(base) ? used : unused).push(rel);
}

console.log("\n===== IMAGES IN /public: " + images.length + " =====");
console.log("Used (or protected): " + used.length);
console.log("\nPossibly UNUSED (" + unused.length + "):");
unused.forEach((u) => console.log("  " + u));

// ---------- 2. alt text on every image tag ----------
console.log("\n===== IMAGE TAGS AND ALT TEXT =====");
const BAD = /^(image|photo|picture|img|logo|banner|icon|untitled|)$/i;
let problems = 0;
for (const file of codeFiles.filter((f) => /\.(jsx?|tsx?)$/.test(f))) {
  const text = fs.readFileSync(file, "utf8");
  const re = /<(Image|img)\b[\s\S]*?\/?>/g;
  let m;
  while ((m = re.exec(text))) {
    const tag = m[0];
    const line = text.slice(0, m.index).split("\n").length;
    const src = (tag.match(/src=\{?["'`]([^"'`]+)["'`]/) || [])[1] || "(dynamic src)";
    const altM = tag.match(/alt=(?:"([^"]*)"|'([^']*)'|\{([^}]*)\})/);
    const alt = altM ? (altM[1] ?? altM[2] ?? "{" + altM[3] + "}") : null;
    let status = "OK";
    if (alt === null) status = "MISSING ALT";
    else if (alt === "") status = "EMPTY (ok only if decorative)";
    else if (BAD.test(alt.trim())) status = "TOO GENERIC";
    if (status !== "OK") problems++;
    console.log(`${status.padEnd(30)} ${path.relative(ROOT, file)}:${line}  src=${src}  alt=${JSON.stringify(alt)}`);
  }
}
console.log("\nTags needing attention: " + problems);
