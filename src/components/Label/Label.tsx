import React from "react";
import { css } from "@stitches/core";
import type { Props } from "./LabelType";
import type { Ref } from "../../utils";
import { theme } from "../../theme";

const Label = React.forwardRef<Ref<HTMLLabelElement>, Props>((props, ref) => {
  const {
    isInverse = false,
    weight = "normal",
    children,
    className = "",
    ...restProps
  } = props;

  const { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, colors } =
    theme;

  const textStyle = css({
    // base
    fontFamily: fonts.inter.value,
    fontSize: fontSizes[11].value,
    lineHeight: lineHeights.normal.value,
    letterSpacing: isInverse
      ? letterSpacings.negSm.value
      : letterSpacings.posSm.value,
    color: colors.black8.value,

    variants: {
      weight: {
        normal: {
          fontWeight: fontWeights.normal.value,
        },
        medium: {
          fontWeight: fontWeights.medium.value,
        },
        bold: {
          fontWeight: fontWeights.bold.value,
        },
      },
    },
  });

  return (
    <label
      className={`${textStyle({ weight: weight })}${
        className && " "
      }${className}`}
      ref={ref}
      {...restProps}
    >
      {children}
    </label>
  );
});

export default Label;
