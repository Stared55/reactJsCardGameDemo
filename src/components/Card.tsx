import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { Icon } from 'src/components';
import { palette } from 'src/styles';
import { IconName } from 'src/types';
import ReactCardFlip from 'react-card-flip';

export interface CardParams {
  card: ICard;
  onClick: (card: ICard) => void;
}

export interface ICard {
  id: number;
  frontIcon: IconName;
  flipped: boolean;
}

export const Card: React.FC<CardParams> = ({ card, onClick }) => {
  const { flipped, frontIcon } = card;

  const revertCard = () => {
    !flipped && onClick(card);
  };

  return (
    <div onClick={revertCard} className={css(styles.card, !flipped && styles.flipped)}>
      <ReactCardFlip isFlipped={!flipped} flipDirection="horizontal">
        <Icon name={frontIcon} />
        <Icon name="question-mark" />
      </ReactCardFlip>
    </div>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: `0px 0px 10px 0px rgba(0,0,0,0.2)`,
    width: 70,
    height: 70,
    margin: 4,
    border: `1px solid ${palette.black}`,
    ':hover': {
      cursor: 'pointer',
    },
  },
  flipped: {
    backgroundColor: palette.grey1,
  },
});
