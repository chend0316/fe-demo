import React, { useEffect, useRef } from 'react';

interface CameraPreviewerProps {
  stream: MediaStream;
  speakerDeviceId?: string;
}

export const CameraPreviewer: React.FC<CameraPreviewerProps> = ({stream, speakerDeviceId}) => {
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (stream) {
      videoEl.current.srcObject = stream;
      if (speakerDeviceId) {
          (videoEl.current as any).setSinkId(speakerDeviceId);
      }
    }
  }, [stream, speakerDeviceId]);

  if (stream) {
    return <video className='rounded-lg h-full' ref={videoEl} autoPlay playsInline />
  } else {
    return <div className='rounded-lg bg-slate-300 h-full w-6/12'></div>
  }
};