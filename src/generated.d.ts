export type MatchOptions = {};
export type MatchSuccess = {
    ok: true;
    patternIndex: number;
    groups?: Record<string, {
        pathIndexStart: number;
        pathIndexEnd: number;
    }>;
};
export type MatchFailure = {
    ok: false;
};
export type MatchResult = MatchSuccess | MatchFailure;
export declare const patterns: readonly ["/users", "/users/:id"];
export declare function match(path: string, options?: MatchOptions): MatchResult;
