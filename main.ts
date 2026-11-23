import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why it works: the paperless-office mandate defeats itself — the boss
// announces it by printing the anti-print email, one copy for everyone.
// Why this beats the previous version: the contradiction lands in the first
// clause ("announced a paperless office by printing") instead of after a
// slow build-up, and the quoted 'do not print' makes the absurdity concrete
// in fewer words (113 chars vs 131).
const joke =
  "My boss announced a paperless office by printing the 'do not print' email — one copy for everyone at the meeting.";

if (joke.length < 1 || joke.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${joke.length}`);
}
if (joke.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");
