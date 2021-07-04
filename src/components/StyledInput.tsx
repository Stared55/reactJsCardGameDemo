import { FC, HTMLAttributes, useState } from "react";

import { StyleSheet, css } from "aphrodite";
import { palette } from "src/styles";
import { StyledText } from "./StyledText";

interface Props {
  onChange: (_value: string) => void;
  value: string;
  error?: string;
  focused?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  placeholder?: string;
  style?: HTMLAttributes<HTMLInputElement>;
  type?: "submit" | "text" | "number";
}

export const StyledInput: FC<Props> = ({
  error,
  focused = false,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  style,
  type = "text",
  value,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(focused);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <div className={css(styles.wrapper)} >
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          onFocus={handleFocus}
          onChange={(event) => onChange(event.target.value)}
          onBlur={handleBlur}
          type={type}
          className={css(
            styles.input,
            style,
            isFocused && styles.focused,
            !!error && styles.error
          )}
          placeholder={placeholder}
          value={value}
        />
      </label>
      {!!error && <StyledText error>{error}</StyledText>}
    </div>
  );
};
const styles = StyleSheet.create({
  wrapper:{
    marginBottom: 12,
  },
  input: {
    transition: "0.5s",
    margin: 2,
    outline: "none",
    borderRadius: 5,
    backgroundColor: palette.white,
    border: `2px solid ${palette.black}`,
    padding: 6,
    width: 220
  },
  focused: {
    ":focus": {
      border: `2px solid ${palette.blue1}`,
    },
  },
  error: {
    border: `1px solid ${palette.red2}`,
    backgroundColor: palette.red2,
    ":focus": {
      backgroundColor: palette.skin,
      color: palette.red2,
    },
  },
  errorText: {
    marginTop: 3,
    fontSize: 12,
    textTransform: "none",
    color: palette.red1,
  },
});
