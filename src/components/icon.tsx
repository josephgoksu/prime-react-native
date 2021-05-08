import React from 'react';
import { Icon } from '@ui-kitten/components';

export const CustomIcon: React.FC<{ name: string }> = props => (
  <Icon {...props} name={props.name} />
);
