import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to VideoEditorPoc.web.ts
// and on native platforms to VideoEditorPoc.ts
import VideoEditorPocModule from './VideoEditorPocModule';
import VideoEditorPocView from './VideoEditorPocView';
import { ChangeEventPayload, VideoEditorPocViewProps } from './VideoEditorPoc.types';

// Get the native constant value.
export const PI = VideoEditorPocModule.PI;

export function hello(): string {
  return VideoEditorPocModule.hello();
}

export async function setValueAsync(value: string) {
  return await VideoEditorPocModule.setValueAsync(value);
}

const emitter = new EventEmitter(VideoEditorPocModule ?? NativeModulesProxy.VideoEditorPoc);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { VideoEditorPocView, VideoEditorPocViewProps, ChangeEventPayload };
