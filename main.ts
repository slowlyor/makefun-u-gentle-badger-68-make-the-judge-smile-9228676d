// make.fun — "Make the Judge Smile"
// Competition: u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Writes one line (at most 200 characters) about a small good thing that
// happened today to /output/entry.txt. Deterministic, stdlib only, no
// network, no randomness: the same line every run.
//
// The line: a sleepy morning bus, a lady with a durian, and a driver who
// treated her like royalty. Warmth (a small kindness, genuinely felt),
// surprise (the bow, the whole bus laughing), one concrete detail
// (7:10, the durian), told in its own words — no greeting-card phrasing.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "At 7:10 this morning the bus driver held the door for a lady carrying a durian, bowed like she was royalty, and the whole sleepy bus burst out laughing.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Where the entry goes. The grader's sandbox provides /output; allow an
// override only so the program can be validated locally without it.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });

// Exactly the line, no trailing newline: the gate counts every character.
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
