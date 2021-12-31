import type { ComponentPropsWithRef, ReactNode } from "react";

type ButtonVariant =
  | "secondary"
  | "primary"
  | "secondary-destructive"
  | "primary-destructive";

export interface Props extends ComponentPropsWithRef<"button"> {
  children?: ReactNode;

  /**
   * Choose variant for the button
   *
   * @enum 'primary' | 'secondary' | 'primary-destructive' | 'secondary-destructive'
   * @defaultValue 'primary'
   */
  variants?: ButtonVariant;
}
