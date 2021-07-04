import * as React from 'react';

import { ScreenWrapper, Table} from 'src/components';
import { i18n } from 'src/locale';

export interface LeaderBoardScreenProps {
}
 
export const LeaderBoardScreen: React.FC<LeaderBoardScreenProps> = () => {

  return ( 
    <ScreenWrapper title={i18n.t('screens:leaderBoard')}>
      <Table />
    </ScreenWrapper> 
  );
}
 