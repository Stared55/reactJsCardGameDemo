import { useState, FC, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { ScreenWrapper, StyledText, StyledInput, StyledButton } from 'src/components';
import { i18n } from 'src/locale';

export interface HomeScreenProps {}
 
export const HomeScreen: FC<HomeScreenProps> = () => {
  const [name, setName] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const history = useHistory();

  const handleNameChange = (value: string): void => {
    setName(value)
  }

  const validateName =() => {
    setNameError(name.length < 3  ? i18n.t('validation:nameTooShort') : '') 
  }

  const startGame =() => {
    name.length < 3 ? setNameError(i18n.t('validation:nameTooShort')) : history.push(`/game/${name}`)
  }

  return ( 
    <ScreenWrapper title={i18n.t('screens:home')}>
      <StyledText>{i18n.t('validation:nameLabel')}</StyledText>
      <StyledInput onBlur={validateName} error={nameError} placeholder={i18n.t('validation:namePlaceholder')} value={name} onChange={handleNameChange}/>
      <StyledButton onClick={startGame}>{i18n.t('pressButton')}</StyledButton>
    </ScreenWrapper> 
  );
}
 