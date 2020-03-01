import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Main = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: calc(100vh - 80px);
  background: #141735;
  color: #fafafb;
`;

export default Main;
