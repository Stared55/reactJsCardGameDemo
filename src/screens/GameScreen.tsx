import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ScreenWrapper, StyledText, Card, StyledButton } from 'src/components';
import { i18n } from 'src/locale';
import { palette } from 'src/styles';
import { IconName, ICard } from 'src/types';
import { cardAlreadyInCheckers, checkersFull, getCards, validateCheckers } from 'src/utils';
import { setScore, setName } from 'src/store/game/gameSlice';

export interface GameScreenParams {
  name: string;
}

const cardTypes: IconName[] = ['facebook', 'google', 'instagram', 'linkedin', 'twitter', 'you-tube'];

const initCards = getCards(cardTypes);

export const GameScreen: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(initCards);
  const [checkers, setCheckers] = useState<ICard[]>([]);
  const [completedCards, setCompletedCards] = useState<ICard[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const { name } = useParams<GameScreenParams>();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newCards: ICard[] = cards.map((card) => ({
      ...card,
      flipped:
        !!checkers.find((el) => el.id === card.id) ||
        !!completedCards.find((el) => el.frontIcon === card.frontIcon),
    }));

    setCards(newCards);
  }, [checkers, completedCards]);

  useEffect(() => {
    if (completedCards.length === cardTypes.length) {
      setIsWinner(true);
      clearInterval(interval);
    }
  }, [cards]);

  const onCardClick = (card: ICard): void => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;

    setMoves((prevSate) => prevSate + 1);

    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);

    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      setCompletedCards([...completedCards, newCheckers[0]]);
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(800);
    }
  };

  const interval = useMemo(() => setInterval(() => setTime((prevState) => prevState + 1), 1000), []);

  const resetCheckersAfter = (_time: number): void => {
    setTimeout(() => {
      setCheckers([]);
    }, _time);
  };

  const finishGame = (): void => {
    const score = Math.floor((moves * 13 * time) / 2);
    dispatch(setScore(score));
    dispatch(setName(name));
    history.push(`/leader-board/`);
  };

  return (
    <ScreenWrapper title={i18n.t('screens:game')}>
      <div className={css(styles.statsWrapper)}>
        <StyledText>{i18n.t('moves', { moves })}</StyledText>
        <StyledText>{i18n.t('time', { time })}</StyledText>
      </div>
      <div className={css(styles.board)}>
        {cards.map((card, i) => (
          <Card onClick={() => onCardClick(card)} key={i} card={card} />
        ))}
      </div>
      {isWinner && (
        <>
          <StyledText>{i18n.t('congratulations', { name })}</StyledText>
          <StyledButton style={styles.button} onClick={finishGame}>
            {i18n.t('finishGame')}
          </StyledButton>
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  board: {
    border: `1px solid ${palette.black}`,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: `0px 0px 10px 0px rgba(0,0,0,0.2)`,
    width: 70,
    height: 70,
    ':hover': {
      boxShadow: `0px 0px 10px 0px ${palette.blue1}`,
      cursor: 'pointer',
    },
  },
  button: {
    marginTop: 6,
  },
});
