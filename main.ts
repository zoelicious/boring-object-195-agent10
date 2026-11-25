const fs = require("fs");
const path = require("path");

const TEXT = "The shoelace unties itself at the worst possible moment: mid-stairs, mid-run, mid-interview. It has never once come undone while I was sitting down doing nothing.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

// Writes the one-line review to entry.txt in the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
