// moon-answers-back-781a7ec1: The Moon Finally Answers Back.
// This program writes one line to /output/entry.txt, where the gate
// reads it. The line is the Moon's comeback to everyone who has ever
// stared up at it and wished, howled, or made a late-night promise.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: four billion years of listening, and nobody ever wished
// the Moon a night off. (83 characters, one line, no wasted words.)
// It works because it is the Moon talking, not a poet talking about
// upon. The turn lands at the end — after all that listening, the one
// wish nobody ever made was for the listener. It answers the wishes,
// the howls and the late-night promises in one breath, and it needs
// no explanation: anyone who has ever made a wish on the Moon gets
// the joke at once, and the Moon finally getting to complain back is
// the comeback the bounty asks for.
const LINE =
  'Four billion years of listening, and not one of you has ever wished me a night off.';

if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  console.error('entry must be 1-240 characters of non-whitespace text');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
