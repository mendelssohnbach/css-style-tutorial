import * as React from 'react';

// JSX要素用のスタイル定義（React.CSSProperties形式）
const style: React.CSSProperties = {
  color: 'blue',
  background: '#aaccff',
  padding: '0.5em',
  fontWeight: 'bolder',
  borderRadius: '0.5em',
};

export const Hello: React.FC = () => {
  return <div style={style}>Hello</div>;
};
