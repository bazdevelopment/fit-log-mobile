export const EllipsizeModeType = {
  head: "head", // start of the text is truncated (... is added)
  middle: "middle", // the middle of the text is truncated (... is added)
  tail: "tail", // the end of the text is truncated (... is added)
  clip: "clip", // no text is shown after the limit of the container (... is not added)
} as const;

export type TEllipsizeMode = (typeof EllipsizeModeType)[keyof typeof EllipsizeModeType];
