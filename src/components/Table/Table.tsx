import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { i18n } from 'src/locale';
import { palette } from 'src/styles';
import { TableItem } from './TableItem';
import { ITableItem } from './TableItem';

const DUMMY_LIST: ITableItem[] = [
  {
    leftCol: 'Stared55',
    rightCol: 696969
  },
  {
    leftCol: 'Stared55',
    rightCol: 696969
  },
  {
    leftCol: 'Stared55',
    rightCol: 696969
  },
  {
    leftCol: 'Stared55',
    rightCol: 696969
  },
]

export const Table: React.FC = () => {
  
  const tableHeader: ITableItem = {leftCol: i18n.t('table:name') as string, rightCol: i18n.t('table:score') as string}

  return ( 
    <div className={css(styles.tableWrapper)}>
      <TableItem data={tableHeader} key='tableHeader' style={styles.tableHeader}/>
      {DUMMY_LIST.map((item,i) => {
        const isLast = i === DUMMY_LIST.length - 1;
        const isSecond = i % 2;

        return  <TableItem data={item} key={`${i}-${item.leftCol}`} isLast={isLast} style={isSecond && styles.secondRow}/>}
      )}
    </div>
  );
}
const styles = StyleSheet.create({
  tableWrapper: {
    width: '90%',
    justifyContent: 'space-around',
    borderBottom: 'none',
  },
  tableHeader: {
    backgroundColor: palette.blue1
  },
  secondRow:{
    backgroundColor: palette.grey1
  }
})