import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { APP_NAME } from 'src/constants';
import { palette, typography } from 'src/styles';

export const Navigation: React.FC = () => {
  return (
    <nav className={css(styles.navigation)}>
      <a
        rel="noreferrer"
        className={css(typography.flexCentered, styles.appName)}
        target="_blank"
        href="https://github.com/Stared55/reactJsCardGameDemo"
      >
        {APP_NAME}
      </a>
    </nav>
  );
};

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxShadow: `0px 5px 10px 0px rgba(0,0,0,0.2)`,
    minHeight: 40,
  },
  appName: {
    fontWeight: 400,
    textDecoration: 'none',
    color: palette.black,
    textAlign: 'center',
    ':hover': {
      color: palette.blue1,
      cursor: 'pointer',
    },
  },
});
