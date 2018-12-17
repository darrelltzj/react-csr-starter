import 'dotenv/config';
import express from 'express';
import webpack from 'webpack';
// import proxy from 'express-http-proxy';
import expressStaticGzip from 'express-static-gzip';

import renderer from './utils/renderer';
import configureStore from './utils/store';
import rootSaga from '../client/sagas/index';
import configProdClient from '../../config/webpack.prod';

const app = express();

// PROXY ???
// app.use(
//   '/api',
//   proxy('https://api.github.com', {
//     proxyReqOptDecorator(opts) {
//       opts.headers['x-forwarded-host'] = 'localhost:3000';
//       return opts;
//     },
//   })
// );

webpack([configProdClient])
  .run((err, stats) => {
    console.log('err', err);

    console.log('stats', stats);

    app.use(expressStaticGzip('public', {
      enableBrotli: true,
      orderPreference: ['br', 'gz'],
      index: false,
    }));

    // app.use(express.static('public'));

    app.get('*', (req, res) => {
      const store = configureStore();

      store.runSaga(rootSaga).done.then(() => {
        res.status(200).send(renderer(req, store));
      });

      renderer(req, store);

      store.close();
    });
  });

app.set('PORT', process.env.PORT);

app.listen(app.get('PORT'));
