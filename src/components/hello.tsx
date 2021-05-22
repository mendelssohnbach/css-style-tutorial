import * as React from 'react';
import styled from 'styled-components';

// Title コンポーネントの定義
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Hello: React.FC = () => {
  return <Title>Hello</Title>;
};
