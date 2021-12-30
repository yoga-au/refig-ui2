import type { ComponentPropsWithRef, ReactNode } from "react";

type weightType = "normal" | "medium" | "bold";

export interface Props extends ComponentPropsWithRef<"label"> {
  children?: ReactNode;

  /**
   * Determine label weight.
   *
   * @enum 'normal' | 'medium' | 'bold'
   * @defaultValue `normal`
   */
  weight?: weightType;

  /**
   * Determine wether text is inversed or not.
   * Inversed means the text is on dark background
   *
   * @defaultValue `false`
   */
  isInverse?: boolean;
}
