import * as React from 'react';
import { BasicLayout } from '../../layouts/BasicLayout';
import {Hero} from '../Hero/index';

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
    </BasicLayout>
  )
}

HomeTemplate.displayName = 'HomeTemplate'

export default HomeTemplate;