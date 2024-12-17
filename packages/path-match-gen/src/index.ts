/*
TypeSpec, openapi, nextjs route, nextjs app, express "dialect"
validate
transform PatternDefinition은 path를 검증이 되어 있어야 함. segment name 등 포함.
sort?
-> PatternDefinition[]
 */

export type PatternDefinition = {
  path: string;
};
export function generateMatch(definitions: PatternDefinition[]) {
  // validate patterns
  // sort patterns?
  // create trie
}
