const conf = require('./conf/settings');
const appConfig = conf.get('appConfig');
const environment = conf.get('NODE_ENV');

module.exports = [
  { method: 'GET', path: '/{path*}', handler: homePageHandler },
  { method: 'GET', path: '/public/{path*}',
    handler: {
      directory: { path: `${__dirname}/public/` },
    },
  },
];

function homePageHandler(request, reply) {
  const lang = request.lang;
  const attributes = {
    environment,
    apiUrl: conf.get('API_PATH'),
    appConfig: JSON.stringify(appConfig),
    brandName: conf.get('brandName'),
    googleMapAPIKey: conf.get('googleMapAPIKey'),
    lang,
  };
  reply.view('templates/index.html', attributes);
}

