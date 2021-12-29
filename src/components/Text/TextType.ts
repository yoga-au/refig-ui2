import type { ComponentPropsWithRef } from "react";

type variantsType = "UI11" | "UI12" | "UI13" | "UI14";
type weightType = "normal" | "medium" | "bold";

export interface Props extends ComponentPropsWithRef<"div"> {
  variants?: variantsType;
  weight?: weightType;
  isInverse?: boolean;
}
