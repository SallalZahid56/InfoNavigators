// Moves (never deletes) the images listed under "Possibly UNUSED" in audit.txt
// into a backup folder next to your project.
//
//   node move-unused.mjs         -> DRY RUN, only shows what would move
//   node move-unused.mjs --go    -> actually moves the files
//
// To restore everything later, just copy the files back into /public.
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const BACKUP = path.join(ROOT, "..", "unused-backup");
const GO = process.argv.includes("--go");

// Tool logos that Tools.jsx might build dynamically. Kept in place until you
// have checked Tools.jsx. Empty this list once you are sure they are unused.
const KEEP = [
  "ahrefs.png","Buzzsumo-Logo.png","excel.png","excell.jpeg","googlesheets.jpeg",
  "hubspot.svg","hubspott.png","lemlist.png","mailchimp.jpeg","moz.png",
  "pipedrive.webp","python.png","react.png","salesforce.png","scrapyy.png",
  "screaming.jpg","semrush.png","shopify.png","wordpress.webp","zapier.png",
  "zoominfo.png","beautifulsoup.jpg","chatgpt-notion.png",
];

// audit.txt made by PowerShell's ">" is often UTF-16, so detect that
const buf = fs.readFileSync(path.join(ROOT, "audit.txt"));
const text = buf[0] === 0xff && buf[1] === 0xfe ? buf.toString("utf16le") : buf.toString("utf8");

const start = text.indexOf("Possibly UNUSED");
const end = text.indexOf("===== IMAGE TAGS");
if (start < 0) { console.log("Could not find the UNUSED list in audit.txt"); process.exit(1); }
const files = text
  .slice(start, end > 0 ? end : undefined)
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l.startsWith("/"))
  .map((l) => l.slice(1));

let moved = 0, kept = 0, missing = 0;
if (GO) fs.mkdirSync(BACKUP, { recursive: true });
for (const f of files) {
  if (KEEP.includes(f)) { kept++; continue; }
  const from = path.join(PUBLIC, f);
  if (!fs.existsSync(from)) { missing++; continue; }
  if (GO) fs.renameSync(from, path.join(BACKUP, f));
  moved++;
}
console.log(`${GO ? "MOVED" : "WOULD MOVE"}: ${moved} files`);
console.log(`Kept in place (tool logos to check): ${kept}`);
if (missing) console.log(`Not found in /public: ${missing}`);
if (GO) console.log("Backup folder: " + path.resolve(BACKUP));
else console.log("\nThis was a dry run. Run again with --go to move them.");
