import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoStapeSdkModule.web.ts
// and on native platforms to ExpoStapeSdkModule.ts
import ExpoStapeSdkModule from './ExpoStapeSdkModule';
import ExpoStapeSdkModuleView from './ExpoStapeSdkModuleView';
import { ChangeEventPayload, ExpoStapeSdkModuleViewProps } from './ExpoStapeSdkModule.types';

// Get the native constant value.
export const PI = ExpoStapeSdkModule.PI;

export function hello(): string {
  return ExpoStapeSdkModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoStapeSdkModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoStapeSdkModule ?? NativeModulesProxy.ExpoStapeSdkModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoStapeSdkModuleView, ExpoStapeSdkModuleViewProps, ChangeEventPayload };
