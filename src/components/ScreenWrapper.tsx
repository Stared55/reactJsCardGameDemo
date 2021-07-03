import * as React from 'react';

import { StyleSheet, css, } from 'aphrodite';
import { APP_NAME } from 'src/constants';
import { palette, typography } from 'src/styles';

export interface ScreenWrapperProps {
  
}
 
export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children}) => {
  return (
    <div className={css(typography.flexCentered,styles.wrapper)}>
      <h1 className={css(typography.flexCentered,styles.header)}>{APP_NAME}</h1>
      {children}
    </div> 
  );
}
 
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.gey1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    paddingTop: 20,
  },
  header: {
    ...typography.flexCentered,
    width: '100%',
    marginBottom: 20,
  }
})