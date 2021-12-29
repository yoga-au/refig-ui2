// utility type
export type Ref<T extends HTMLElement> = T;

// utility function
export function calcLineHeight(n: number) {
  return Math.ceil((n * 1.3) / 8) * 8;
}

export function calcTracking(n: number) {
  const result = -0.0223 + 0.185 * Math.pow(Math.E, -0.1745 * n);

  return result;
}
