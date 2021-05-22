import * as React from 'react';
import './styles.css';

interface IProps {
  text: string;
}

export const Hello: React.FC<IProps> = (prop) => {
  return <div className="hello">{prop.text}</div>;
};
