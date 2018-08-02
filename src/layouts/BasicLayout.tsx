import * as React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import LayoutBasis from './LayoutBasis';

export interface IBasicLayoutProps {
  children: any;
}

const Container = styled.main`
`;

export const BasicLayout: React.SFC<IBasicLayoutProps> = props => {
  return (
    <LayoutBasis>
      <Container>{props.children}</Container>
    </LayoutBasis>
  );
};

BasicLayout.displayName = 'BasicLayout';

export default BasicLayout;
