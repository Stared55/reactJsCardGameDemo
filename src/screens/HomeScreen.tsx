import * as React from 'react';

import { ScreenWrapper } from 'src/components';

export interface HomeScreenProps {}
 
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return ( 
    <ScreenWrapper>
      <p>Hello world</p>
    </ScreenWrapper> 
  );
}
 