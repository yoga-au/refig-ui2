import { css } from "@stitches/core";
import { theme } from "../../theme";

const { colors, fonts, fontSizes, fontWeights, lineHeights, letterSpacings } =
  theme;

export const containerStyle = css({
  // base
  padding: "0.5em 1em",
  display: "grid",
  gridTemplateColumns: "12px 1fr",
  gap: "0.5em",
});

export const checkboxStyle = css({
  // base
  appearance: "none",
  boxSizing: "border-box",
  margin: 0,
  width: 12,
  height: 12,
  border: `1px solid ${colors.black8.value}`,
  borderRadius: "2px",
  position: "relative",

  "&:focus": {
    border: `2px solid ${colors.blue.value}`,
    outline: "none",
  },
  "&:checked": {
    backgroundColor: colors.blue.value,
    border: `2px solid ${colors.blue.value}`,
  },
  "&:checked::after": {
    // replace content with correct icon
    content: `url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")`,
    color: "#fff",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-62%)",
  },
  "&:disabled": {
    border: `1px solid ${colors.black3Opaque.value}`,
  },
  "&:disabled:checked": {
    backgroundColor: colors.black3Opaque.value,
    border: `2px solid ${colors.black3Opaque.value}`,
  },
});

export const labelStyle = css({
  // base
  display: "block",
  fontFamily: fonts.inter.value,
  fontSize: fontSizes[11].value,
  lineHeight: lineHeights.normal.value,
  fontWeight: fontWeights.normal.value,
  color: colors.black8Opaque.value,
  marginTop: "-1px",

  variants: {
    inverse: {
      normal: {
        letterSpacing: letterSpacings.posSm.value,
      },
      inverse: {
        letterSpacing: letterSpacings.negSm.value,
      },
    },
  },
});

export const descriptionStyle = css({
  // base
  fontFamily: fonts.inter.value,
  fontSize: fontSizes[11].value,
  lineHeight: lineHeights.normal.value,
  fontWeight: fontWeights.normal.value,
  color: colors.black3Opaque.value,

  variants: {
    inverse: {
      normal: {
        letterSpacing: letterSpacings.posSm.value,
      },
      inverse: {
        letterSpacing: letterSpacings.negSm.value,
      },
    },
    withMargin: {
      normal: {
        marginTop: 0,
      },
      withMargin: {
        marginTop: "0.5em",
      },
    },
  },
});
