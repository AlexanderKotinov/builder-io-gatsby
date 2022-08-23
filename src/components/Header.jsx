import * as React from 'react';
import { Builder, BuilderComponent } from '@builder.io/react'

import * as styles from './Header.module.css';

export const Header = props => {
  return <div className={styles.header}>
    <h2>{props.title}</h2>
    <p className={styles.subheader}>{props.subheader}</p>
  </div>
}

Builder.registerComponent(Header, { 
  name: 'Header',
  inputs: [{ name: 'title', type: 'text' }, { name: 'subheader', type: 'text' }]
})
