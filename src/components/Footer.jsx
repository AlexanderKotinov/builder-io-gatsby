import * as React from 'react';
import { Builder, BuilderComponent } from '@builder.io/react';

import * as styles from'./Footer.module.css';

export const Footer = props => {
  return <div className={styles.footer}>
    <h3>{props.title}</h3>
    <p className={styles.description}>{props.description}</p>
  </div>
}

Builder.registerComponent(Footer, { 
  name: 'Footer',
  inputs: [{ name: 'title', type: 'text' }, { name: 'description', type: 'text' }]
})
