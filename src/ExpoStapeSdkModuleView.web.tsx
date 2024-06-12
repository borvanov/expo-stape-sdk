import * as React from 'react';

import { ExpoStapeSdkModuleViewProps } from './ExpoStapeSdkModule.types';

export default function ExpoStapeSdkModuleView(props: ExpoStapeSdkModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
