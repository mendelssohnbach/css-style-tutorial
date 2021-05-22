import * as React from 'react';
import './styles.css';

export const Hello: React.FC<IProps> = (prop) => {
  return <div className="hello">{prop.text}</div>;
};
