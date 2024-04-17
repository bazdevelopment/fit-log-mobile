export const ELLIPSIZE_MODE_TYPE = {
  HEAD: "head", // start of the text is truncated (... is added)
  MIDDLE: "middle", // the middle of the text is truncated (... is added)
  TAIL: "tail", // the end of the text is truncated (... is added)
  CLIP: "clip", // no text is shown after the limit of the container (... is not added)
} as const;

export type TEllipsizeMode = (typeof ELLIPSIZE_MODE_TYPE)[keyof typeof ELLIPSIZE_MODE_TYPE];
