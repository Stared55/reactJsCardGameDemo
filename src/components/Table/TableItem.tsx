import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { StyledText } from 'src/components';
import { palette } from 'src/styles';
import { ITableItem } from 'src/types';

interface Props {
  data: ITableItem;
  isLast?: boolean;
  // eslint-disable-next-line
  style?: React.HTMLAttributes<HTMLDivElement> | {};
}

export const TableItem: React.FC<Props> = ({ data, isLast, style = {} }) => {
  const { leftCol, rightCol } = data;

  return (
    <div className={css(styles.item, style, isLast && styles.lastItem)}>
      <StyledText style={styles.name}>{leftCol}</StyledText>
      <StyledText>{rightCol}</StyledText>
    </div>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    border: `1px solid ${palette.black}`,
    padding: 10,
    borderBottom: 'none',
    width: '100%',
  },
  name: {
    marginRight: 6,
  },
  lastItem: {
    borderBottom: `1px solid ${palette.black}`,
  },
});
