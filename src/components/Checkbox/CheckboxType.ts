import type { ComponentPropsWithRef } from "react";

export interface Props extends ComponentPropsWithRef<"input"> {
  /**
   * A unique identifier for checkbox component.
   * Required for tied label and the checkbox to increase click area
   */
  id: string;

  /**
   * Determine wether text is inversed or not.
   * Inversed means the text is on dark background
   *
   * @defaultValue `false`
   */
  isInverse: boolean;

  /**
   * Text that will be rendered as checkbox label
   */
  label: string;

  /**
   * Helpful description of the option which may briefly highlight side effects or conditions of the option.
   */
  description: string;
}
