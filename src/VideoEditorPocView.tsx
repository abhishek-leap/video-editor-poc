import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { VideoEditorPocViewProps } from './VideoEditorPoc.types';

const NativeView: React.ComponentType<VideoEditorPocViewProps> =
  requireNativeViewManager('VideoEditorPoc');

export default function VideoEditorPocView(props: VideoEditorPocViewProps) {
  return <NativeView {...props} />;
}
