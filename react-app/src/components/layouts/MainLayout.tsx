import React, {FC, ReactChild} from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div`
  background: #fff;
`;

interface MainLayoutProps {
  children: ReactChild;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
