import { css, StyleSheet } from 'aphrodite';
import React, { HTMLAttributes } from 'react';
import { palette } from 'src/styles';
import { StyledText } from './StyledText';

interface Props {
  onClick: () => void;
  style?: HTMLAttributes<HTMLButtonElement>;
}

export const StyledButton: React.FC<Props> = ({ onClick, children, style }) => {
  return (
    <button type="button" onClick={onClick} className={css(styles.button, style)}>
      <StyledText>{children}</StyledText>
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    border: `2px solid ${palette.black}`,
    borderRadius: 5,
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: palette.transparent,
    cursor: 'pointer',
    textAlign: 'center',
    margin: 12,
    ':hover': {
      border: `2px solid ${palette.blue1}`,
    },
  },
});
