import React from "react";
import type { Props } from "./CheckboxType";
import type { Ref } from "../../utils";
import {
  containerStyle,
  checkboxStyle,
  labelStyle,
  descriptionStyle,
} from "./CheckboxStyle";

const Checkbox = React.forwardRef<Ref<HTMLInputElement>, Props>(
  (props, ref) => {
    const {
      id,
      label,
      description = "",
      isInverse = false,
      ...checkboxProps
    } = props;

    return (
      <label htmlFor={id} className={containerStyle()}>
        <input
          type="checkbox"
          id={id}
          className={checkboxStyle()}
          ref={ref}
          {...checkboxProps}
        />
        <div>
          <label
            className={labelStyle({
              inverse: isInverse ? "inverse" : "normal",
            })}
            htmlFor={id}
          >
            {label}
          </label>
          <div
            className={descriptionStyle({
              inverse: isInverse ? "inverse" : "normal",
              withMargin: description ? "withMargin" : "normal",
            })}
          >
            {description}
          </div>
        </div>
      </label>
    );
  }
);

export default Checkbox;
