import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';

export default class AppDocument extends Document {
  render() {
    const statsFile = path.resolve('.next/loadable-stats.json');

    const chunkExtractor = new ChunkExtractor({
      statsFile,
    });

    return chunkExtractor.collectChunks(
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
