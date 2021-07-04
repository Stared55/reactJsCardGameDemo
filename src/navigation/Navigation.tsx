import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from 'src/constants';
import { i18n } from 'src/locale';
import { palette, typography } from 'src/styles';
import { NavigationItemProps, NavigationItem } from './NavigationItem';

const routesConfig: NavigationItemProps[] = [
  {
    to: '/',
    label: i18n.t('screens:home'),
    activeOnlyWhenExact: true
  },
  {
    to: '/leader-board',
    label: i18n.t('screens:leaderBoard'),
    activeOnlyWhenExact: true
  },
  {
    to: '/game',
    label: i18n.t('screens:game'),
    activeOnlyWhenExact: true
  },
]

interface Props {}

export const Navigation: React.FC<Props> = ({}) => {
  return ( 
    <nav className={css(styles.navigation)}>
      {/* <ul className={css(styles.ul)}> */}
        {/* {routesConfig.map(route => <NavigationItem {...route} /> )} */}
      {/* </ul> */}
      <a className={css(typography.flexCentered,styles.appName)} target="_blank" href="https://github.com/Stared55/reactJsCardGameDemo">{APP_NAME}</a>
    </nav>
  );
}

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxShadow: `0px 5px 10px 0px rgba(0,0,0,0.2)`,
    minHeight: 40
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
  appName:{
    fontWeight: 400,
    textDecoration: 'none',
    color: palette.black,
    textAlign: 'center',
    ":hover" : {
      color: palette.blue1,
      cursor: 'pointer'
    }
  }
})