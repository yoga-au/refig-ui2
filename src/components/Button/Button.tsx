import React from "react";
import { css } from "@stitches/core";
import type { Props } from "./ButtonType";
import type { Ref } from "../../utils";
import { theme } from "../../theme";

const Button = React.forwardRef<Ref<HTMLButtonElement>, Props>((props, ref) => {
  const { variants = "primary", children, ...restProps } = props;

  // theme destructure
  const { colors, fontSizes, fontWeights, lineHeights, letterSpacings, radii } =
    theme;

  const buttonStyle = css({
    // base
    boxSizing: "border-box",
    padding: "0.5rem 1rem",
    fontSize: fontSizes[11].value,
    fontWeight: fontWeights.medium.value,
    lineHeight: lineHeights.normal.value,
    borderRadius: radii.lg.value,
    backgroundColor: "transparent",
    textAlign: "center",
    textDecoration: "none",
    border: "none",
    outline: "none",

    variants: {
      variants: {
        primary: {
          backgroundColor: colors.blue.value,
          color: "White",
          letterSpacing: letterSpacings.negSm.value,
          border: "2px solid transparent",

          "&:focus": {
            border: `2px solid ${colors.black3.value}`,
          },

          "&:disabled": {
            backgroundColor: colors.black3.value,
            letterSpacing: letterSpacings.posSm.value,
          },
        },
        secondary: {
          outline: `1px solid ${colors.black8.value}`,
          color: colors.black8.value,
          letterSpacing: letterSpacings.posSm.value,

          "&:focus": {
            outline: `2px solid ${colors.blue.value}`,
          },

          "&:disabled": {
            outline: `1px solid ${colors.black3.value}`,
            color: colors.black3.value,
          },
        },
        "primary-destructive": {
          backgroundColor: colors.red.value,
          color: "White",
          letterSpacing: letterSpacings.negSm.value,
          border: "2px solid transparent",

          "&:focus": {
            border: `2px solid ${colors.black3.value}`,
          },

          "&:disabled": {
            opacity: 0.4,
          },
        },
        "secondary-destructive": {
          outline: `1px solid ${colors.red.value}`,
          color: colors.red.value,
          letterSpacing: letterSpacings.posSm.value,

          "&:focus": {
            outline: `2px solid ${colors.red.value}`,
          },

          "&:disabled": {
            outline: `1px solid ${colors.red.value}`,
            color: colors.red.value,
            opacity: 0.4,
          },
        },
      },
    },
  });

  return (
    <button
      className={buttonStyle({ variants: variants })}
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
