import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'src/locale';
import { ApplicationState } from 'src/store';
import { palette } from 'src/styles';
import { TableItem } from './TableItem';
import * as _ from 'lodash';
import { ITableItem } from 'src/types';

const tableHeader: ITableItem = {
  leftCol: i18n.t('table:name') as string,
  rightCol: i18n.t('table:score') as string,
};

export const Table: React.FC = () => {
  const { leaderBoard } = useSelector((state: ApplicationState) => state.game);
  const isContent = !!leaderBoard && !!leaderBoard.length;
  const sortedList = _.orderBy(leaderBoard, ['rightCol'], ['desc']);

  return (
    <div className={css(styles.tableWrapper)}>
      <TableItem data={tableHeader} key="tableHeader" style={styles.tableHeader} isLast={!isContent} />
      {isContent &&
        sortedList.map((item, i) => {
          const isLast = i === sortedList.length - 1;
          const isSecond = i % 2;

          return (
            <TableItem
              data={item}
              key={`${i}-${item.leftCol}`}
              isLast={isLast}
              style={isSecond && styles.secondRow}
            />
          );
        })}
    </div>
  );
};
const styles = StyleSheet.create({
  tableWrapper: {
    width: '90%',
    justifyContent: 'space-around',
    borderBottom: 'none',
    marginBottom: 12,
  },
  tableHeader: {
    backgroundColor: palette.blue1,
  },
  secondRow: {
    backgroundColor: palette.grey1,
  },
});
