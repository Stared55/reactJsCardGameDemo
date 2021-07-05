import * as React from 'react';
import { IconName } from 'src/types';
import { iconComponents } from './getIcon';

export interface IconProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = iconComponents[name];

  return <IconComponent />;
};
