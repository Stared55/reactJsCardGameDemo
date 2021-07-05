import * as React from 'react';

import { StyleSheet, css } from 'aphrodite';
import { palette, typography } from 'src/styles';
import { Navigation } from 'src/navigation';

export interface ScreenWrapperProps {
  title: string;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ title, children }) => {
  return (
    <div className={css(typography.flexCentered, styles.wrapper)}>
      <Navigation />
      <div className={css(typography.flexCentered, styles.innerWrapper)}>
        <h2 className={css(typography.flexCentered, styles.header)}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.gey1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  innerWrapper: {
    flexDirection: 'column',
    maxWidth: 722,
    width: '100%',
  },
  header: {
    ...typography.flexCentered,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
});
