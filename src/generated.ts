export type MatchOptions = {};
export type MatchSuccess = {
  ok: true;
  patternIndex: number;
  groups?: Record<string, { pathIndexStart: number; pathIndexEnd: number }>;
};
export type MatchFailure = {
  ok: false;
};
export type MatchResult = MatchSuccess | MatchFailure;
export const patterns = ["/users", "/users/:id"] as const;
export function match(path: string, options?: MatchOptions): MatchResult {
  return {
    ok: false,
  };
}
