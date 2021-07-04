import { ICard } from "src/components/Card"
import { IconName } from "src/types"

export const shuffleCards = (array: ICard[]): ICard[] => {
  for(let i = 0; i < array.length; i++){
    const randomIdx = Math.floor(Math.random() * array.length)
    const copyCurrent = {...array[i]}
    const copyRandom = {...array[randomIdx]}
    array[i] = copyRandom
    array[randomIdx] = copyCurrent
  }
  return array
}

export const getCards = (cardTypes: IconName[]): ICard[] => {
  const cards: ICard[] = []
  for (let i = 0; i < cardTypes.length; i++) {
    const type = cardTypes[i];
    const id = i+1
    const firstPair: ICard = {
      id,
      flipped: false,
      frontIcon: type,
    }
    const secondPair = {...firstPair, id: id+cardTypes.length}
    cards.push(firstPair);
    cards.push(secondPair);
  }
  
  // return shuffleCards(cards)
  return cards
}

export const validateCheckers = (array: ICard[]): boolean => array.length === 2 && array[0].frontIcon === array[1].frontIcon;

export const cardAlreadyInCheckers = (array: ICard[], card: ICard): boolean => array.length === 1 && array[0].id === card.id;

export const checkersFull = (array: ICard[]): boolean => array.length === 2;