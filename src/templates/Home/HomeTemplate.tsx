import * as React from 'react';

import { BasicLayout } from '../../layouts/BasicLayout';
import {Hero} from '../Hero/index';
import AboutMe from '../AboutMe/index';

export interface IHomeTemplateProps {
  meta: {
    title: string;
    description: string;
  }
}

export const HomeTemplate: React.SFC<IHomeTemplateProps> = props => {
  return (
    <BasicLayout>
      <Hero />
      <AboutMe />
    </BasicLayout>
  )
}

HomeTemplate.displayName = 'HomeTemplate'

export default HomeTemplate;