import type { ComponentPropsWithRef } from "react";

type variantsType = "UI11" | "UI12" | "UI13" | "UI14";
type weightType = "normal" | "medium" | "bold";

export interface Props extends ComponentPropsWithRef<"div"> {
  /**
   * Choose text variant based on UI2 Figma Public Design System.
   *
   * @enum 'UI11' | 'UI12' | 'UI13' | 'UI14'
   * @see {@link https://www.figma.com/file/Gj9iMcTbFbHrFq1ZWbDBuyc9/UI2-%E2%80%94%C2%A0Public-Copy} - UI2 Figma Public Design System
   * @defaultValue "UI11"
   */
  variants?: variantsType;

  /**
   * Determine text weight.
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
