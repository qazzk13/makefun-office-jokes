import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why it works: the paperless-office mandate defeats itself — the anti-print
// email gets printed for everyone, a self-contradiction anyone who has sat
// through a meeting will recognise instantly.
const joke =
  "My boss wanted a paperless office, so now we print the email telling us not to print emails — one copy for everyone in the meeting.";

if (joke.length < 1 || joke.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${joke.length}`);
}
if (joke.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");
