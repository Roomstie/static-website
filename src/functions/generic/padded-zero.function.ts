export const paddedZero = (value: number): string => (
  value < 10
  ? `0${value}`
  : "00"
);
