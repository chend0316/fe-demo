import React from "react"
import cx from 'classnames'

type IconNames = 'camera' | 'microphone'

interface IconProps {
  name: IconNames;
  className?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  let paths: Record<IconNames, any> = {
    camera: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
    microphone: <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  };
  return (<svg xmlns="http://www.w3.org/2000/svg" className={cx("h-6 w-6", props.className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {paths[props.name]}
  </svg>)
}
