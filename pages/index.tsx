import * as React from 'react';
import Link from 'next/link';
import loadable from '@loadable/component';
import { Autocomplete, TextField } from '@mui/material';

const LayoutLoadable = loadable(() => import('../components/Layout'));

const IndexPage = () => (
  <LayoutLoadable title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </LayoutLoadable>
);

export default IndexPage;
