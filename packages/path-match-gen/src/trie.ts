/*
"" (empty)
Node { isEnd: true; children: {}}

/
Node { isEnd: false; children: {
    '/': Node { isEnd: true; children: {}}
}}

/:id
Node { isEnd: false; children: {
    '/': Node { isEnd: false; children: {
        ':id': Node { isEnd: true; children: {}}
    }}
}}

/users
Node { isEnd: false; children: {
    '/': Node { isEnd: false; children: {
        'u': Node { isEnd: false; children: {
            's': Node { isEnd: false; children: {
                'e': Node { isEnd: false; children: {
                    'r': Node { isEnd: false; children: {
                        's': Node { isEnd: false; children: {}}
                    }}
                }}
            }}
        }}
    }}
}}

/users/
/users/:userId
/users/:userId/
/users/:userId/books
/users/:userId/books/
/users/:userId/books/:bookId
/users/:userId/books/:bookId/
/users/:userId/books/:bookId/details
 */

const nodeKinds = ["character", "named-group"] as const;
type TrieNodeKind = (typeof nodeKinds)[number];

export type TrieNode = {
  kind: TrieNodeKind;
  isEnd: boolean;
  children: Record<string, TrieNode | undefined>;
};

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = {
      kind: "character",
      isEnd: false,
      children: {},
    };
  }

  insert(path: string): void {
    let node = this.root;
    let pos = 0;

    const update = (nextPos: number, key: string, kind: TrieNodeKind) => {
      let nextNode = node.children[key];
      if (!nextNode) {
        nextNode = {
          kind,
          isEnd: false,
          children: {},
        };
        node.children[key] = nextNode;
      }
      node = nextNode;
      pos = nextPos;
    };

    while (pos < path.length) {
      const ch = path[pos];
      if (ch === ":") {
        const slashPos = path.indexOf("/", pos + 1);
        const nextPos = slashPos === -1 ? path.length : slashPos;
        const key = path.slice(pos, nextPos);
        update(nextPos, key, "named-group");
      } else if (ch === "*") {
        // TODO(harry)
      } else {
        update(pos + 1, ch, "character");
      }
    }

    node.isEnd = true;
  }
}
