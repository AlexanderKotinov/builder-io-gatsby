import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent, builder } from '@builder.io/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

builder.init('9d45f4226f17495a9222c2b8507d4420');

function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.onePage?.content;

  return <>
    <BuilderComponent name="page" content={page}/>
  </>;
}

export default PageTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }) {
        content
      }
    }
  }
`;
