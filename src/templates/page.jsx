import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent, builder } from '@builder.io/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

builder.init('5e5e61a9038447dca5554259e9fe0a6a');

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
