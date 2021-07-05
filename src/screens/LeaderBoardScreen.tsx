import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ScreenWrapper, StyledText, Table, StyledButton } from 'src/components';
import { ITableItem } from 'src/components/Table/TableItem';
import { i18n } from 'src/locale';
import { ApplicationState } from 'src/store';
import { clearLeaderBoard, resetName, resetScore, updateLeaderBoard } from 'src/store/game/gameSlice';

export const LeaderBoardScreen: React.FC = () => {
  const { score, name } = useSelector((state: ApplicationState) => state.game);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!score || !name) {
      return history.replace('/');
    }
    const newTableItem: ITableItem = { leftCol: name, rightCol: score };
    dispatch(updateLeaderBoard(newTableItem));
  }, []);

  const clearTable = () => {
    dispatch(clearLeaderBoard());
  };

  const playAgain = () => {
    dispatch(resetName());
    dispatch(resetScore());
    history.replace('/');
  };

  return (
    <ScreenWrapper title={i18n.t('screens:leaderBoard')}>
      <div className={css(styles.panelWrapper)}>
        <StyledText>{i18n.t('score', { score })}</StyledText>
        <StyledButton onClick={clearTable}>{i18n.t('table:clearBoard')}</StyledButton>
        <StyledButton onClick={playAgain}>{i18n.t('playAgain')}</StyledButton>
      </div>
      <Table />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  panelWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    textAlign: 'center',
  },
});
