import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { palette } from 'src/styles';

export interface NavigationItemProps {
  to: string;
  label: string;
  activeOnlyWhenExact: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ to, label, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <li className={css(styles.li)}>
      <Link className={css(styles.link, match && styles.active)} to={to}>
        {label}
      </Link>
    </li>
  );
};

const styles = StyleSheet.create({
  li: {
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  link: {
    textDecoration: 'none',
    color: palette.black,
    ':hover': {
      color: palette.blue1,
      cursor: 'pointer',
    },
  },
  active: {
    color: palette.blue1,
    ':hover': {
      cursor: 'default',
    },
  },
});
