import { match, patterns } from "./generated";

const path = "";
const result = match(path);
if (result.ok) {
  const { patternIndex, groups } = result;
  const pattern = patterns[patternIndex];
  const { pathIndexStart, pathIndexEnd } = (groups ?? {})["id"];
  const id = path.substring(pathIndexStart, pathIndexEnd);
} else {
}
