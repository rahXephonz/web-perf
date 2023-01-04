import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ChunkExtractor } from '@loadable/server';
import React from 'react';
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
      </Html>,
    );
  }
}
