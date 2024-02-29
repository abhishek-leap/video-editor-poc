import * as React from 'react';

import { VideoEditorPocViewProps } from './VideoEditorPoc.types';

export default function VideoEditorPocView(props: VideoEditorPocViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
