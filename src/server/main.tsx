import express from 'express';
import React from 'react';
import cors from 'cors';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { store } from '@src/store';
import { renderAppUtils } from '@utils/renderApp.utils';
import { renderTemplateUtils } from '@utils/renderTemplate.utils';

const app = express();

app.use(express.static('dist/client'));
app.use(cors());

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>{renderAppUtils()}</StaticRouter>
    </Provider>,
  );

  res.send(
    renderTemplateUtils({
      cssPath: 'main.css',
      jsPath: 'main.js',
      title: 'SSR',
      content: html,
    }),
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
