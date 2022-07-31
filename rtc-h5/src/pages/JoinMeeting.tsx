import React, { ReactNode, useState } from 'react';
import { CameraPreviewer } from '../biz-components/CameraPreviewer';
import { Volume } from '../biz-components/Volume';
import { useDeviceListByType, useInputStream } from '../hooks';
import { Icon } from '../icons';
import { DeviceType } from '../services/device';

import cx from 'classnames'

export function JoinMeeting() {
  const {
    list: cameraList,
    currentId: cameraDeviceId,
    setCurrentId: setCameraDeviceId
  } = useDeviceListByType(DeviceType.camera);

  const {
    list: speakerList,
    currentId: speakerDeviceId,
    setCurrentId: setSpeakerDeviceId,
  } = useDeviceListByType(DeviceType.speaker);

  const {
    list: micList,
    currentId: micDeviceId,
    setCurrentId: setMicDeviceId,
  } = useDeviceListByType(DeviceType.mic);

  const [muteCamera, setMuteCamera] = useState(false);
  const [muteMic, setMuteMic] = useState(true);

  const { stream } = useInputStream({cameraDeviceId, micDeviceId, muteMic, muteCamera});

  return <div>
    <div className='flex justify-center items-center relative' style={{height: '324px'}}>
      <CameraPreviewer stream={stream} />
    </div>
    <Button onClick={() => setMuteCamera(!muteCamera)}>
      <Icon name="camera" className={cx({'text-red-500': muteCamera, 'text-neutral-500': !muteCamera})} />
    </Button>
    <select value={cameraDeviceId} onChange={(e) => setCameraDeviceId(e.target.value)}>
      {cameraList.map(camera => <option key={camera.id} value={camera.id}>{camera.name}</option>)}
    </select>
    <Button onClick={() => setMuteMic(!muteMic)}>
      <Icon name="microphone" className={cx({'text-red-500': muteMic, 'text-neutral-500': !muteMic})} />
    </Button>
    <select value={micDeviceId} onChange={(e) => setMicDeviceId(e.target.value)}>
      {micList.map(mic => <option key={mic.id} value={mic.id}>{mic.name}</option>)}
    </select>
    <select value={speakerDeviceId} onChange={(e) => setSpeakerDeviceId(e.target.value)}>
      {speakerList.map(speaker => <option key={speaker.id} value={speaker.id}>{speaker.name}</option>)}
    </select>
    <Volume stream={stream} />
  </div>;
}

function Button(props: { onClick: () => void; children: ReactNode }) {
  return <button className='hover:bg-slate-300' onClick={props.onClick}>{props.children}</button>
}
