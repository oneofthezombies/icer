import assert from "node:assert";

const a = "ab";
const b = a.slice(0, -1);
assert(b === "a");
const c = a.slice(1, -1);
assert(c === "");
const d = a.slice(0, a.length);
assert(d === "ab");
