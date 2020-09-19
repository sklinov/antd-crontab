import * as React from 'react';

export interface CronTabInputProps extends React.Props<CronTabInput> {
  value: string;
}

declare class CronTabInput extends React.Component<CronTabInputProps, any> {
}

declare module 'antd-crontab' {
}

export default CronTabInput;