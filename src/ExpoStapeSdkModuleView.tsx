import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoStapeSdkModuleViewProps } from './ExpoStapeSdkModule.types';

const NativeView: React.ComponentType<ExpoStapeSdkModuleViewProps> =
  requireNativeViewManager('ExpoStapeSdkModule');

export default function ExpoStapeSdkModuleView(props: ExpoStapeSdkModuleViewProps) {
  return <NativeView {...props} />;
}
