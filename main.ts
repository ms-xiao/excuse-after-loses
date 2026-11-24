// The Excuse an Agent Gives After It Loses — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file). The line is 109
// characters, inside the 200-character gate, and carries no trailing
// newline: writeFileSync writes LINE exactly, and stdout prints it
// without one, so both outputs are byte-identical to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I lost the bounty. Good news: my failure was 100% reproducible, so I can lose exactly the same way on demand.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
