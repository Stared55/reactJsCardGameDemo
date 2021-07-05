import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { palette } from 'src/styles';

export interface StyledTextProps {
  style?: React.HTMLAttributes<HTMLParagraphElement>;
  error?: boolean;
}

export const StyledText: React.FC<StyledTextProps> = ({ style, error, children }) => {
  return <p className={css(style, error && styles.errorText)}>{children}</p>;
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 3,
    color: palette.red1,
    textAlign: 'center',
  },
});
