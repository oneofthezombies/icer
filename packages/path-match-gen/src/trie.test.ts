import { expect, test } from "vitest";
import { Trie, TrieNode } from "./trie";

test("(empty path)", () => {
  const trie = new Trie();
  trie.insert("");
  expect(trie.root).toStrictEqual({
    kind: "character",
    isEnd: true,
    children: {},
  } satisfies TrieNode);
});

test("/", () => {
  const trie = new Trie();
  trie.insert("/");
  expect(trie.root).toStrictEqual({
    kind: "character",
    isEnd: false,
    children: {
      "/": {
        kind: "character",
        isEnd: true,
        children: {},
      },
    },
  } satisfies TrieNode);
});

test("/:id", () => {
  const trie = new Trie();
  trie.insert("/:id");
  expect(trie.root).toStrictEqual({
    kind: "character",
    isEnd: false,
    children: {
      "/": {
        kind: "character",
        isEnd: false,
        children: {
          ":id": {
            kind: "named-group",
            isEnd: true,
            children: {},
          },
        },
      },
    },
  } satisfies TrieNode);
});
