import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent, builder } from '@builder.io/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

builder.init('9d45f4226f17495a9222c2b8507d4420');

// get content using @builder.io/gatsby plugin
export const pageQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      page(target: { urlPath: $path }) {
        content
      }
    }
  }
`;

// pass content to BuilderComponent
export default function PageTemplate ({ data }) {
  return <BuilderComponent
    content={data.allBuilderModels.page[0].content}
  />
}
