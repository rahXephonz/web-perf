import * as React from 'react';
import Link from 'next/link';
import { tw } from 'twind';
import loadable from '@loadable/component';

const LayoutLoadable = loadable(() => import('../components/Layout'));

const IndexPage = () => (
  <LayoutLoadable title="Home | Next.js + TypeScript Example">
    <h1 className={tw('text-2xl text-green-500')}>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </LayoutLoadable>
);

export default IndexPage;
