import React from "react";
import { css } from "@stitches/core";
import { theme } from "../../theme";
import type { Props } from "./TextType";
import type { Ref } from "../../utils";

const Text = React.forwardRef<Ref<HTMLDivElement>, Props>((props, ref) => {
  const {
    children,
    variants = "UI11",
    weight = "normal",
    isInverse = false,
    className = "",
    ...restProps
  } = props;

  const { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, colors } =
    theme;

  const textStyle = css({
    // base
    fontFamily: fonts.inter.value,
    color: colors.black8.value,

    variants: {
      variants: {
        UI11: {
          fontSize: fontSizes[11].value,
          lineHeight: lineHeights.normal.value,
          letterSpacing: isInverse
            ? letterSpacings.negSm.value
            : letterSpacings.posSm.value,
        },
        UI12: {
          fontSize: fontSizes[12].value,
          lineHeight: lineHeights.normal.value,
          letterSpacing: isInverse
            ? letterSpacings.negMd.value
            : letterSpacings.posMd.value,
        },
        UI13: {
          fontSize: fontSizes[13].value,
          lineHeight: lineHeights.large.value,
          letterSpacing: isInverse
            ? letterSpacings.negLg.value
            : letterSpacings.posLg.value,
        },
        UI14: {
          fontSize: fontSizes[14].value,
          lineHeight: lineHeights.large.value,
          letterSpacing: isInverse
            ? letterSpacings.negXl.value
            : letterSpacings.posXl.value,
        },
      },
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
    <div
      className={`${textStyle({ variants: variants, weight: weight })}${
        className && " "
      }${className}`}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

export default Text;
