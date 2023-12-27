const ObjectSize = {
  Tiny: "xs",
  Small: "sm",
  Normal: "md",
  Large: "lg",
  ExtraLarge: "xl",
} as const;

export type ObjectSizeValue = (typeof ObjectSize)[keyof typeof ObjectSize];
