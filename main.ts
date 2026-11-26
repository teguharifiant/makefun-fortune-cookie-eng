// Fortune Cookie Funnies for Engineers — make.fun bounty entry.
//
// Writes one fortune cookie message for a software engineer to
// /output/entry.txt. The message is a single line of at most 120
// characters, deterministic, with no network and no input data.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "A bug you fixed last year will return tomorrow, older, wiser, and in production.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
console.log(
  `Wrote ${FORTUNE.length} characters to ${join(outDir, "entry.txt")}`,
);
