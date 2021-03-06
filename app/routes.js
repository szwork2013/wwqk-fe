// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  const HomePageViewRoute = {
    name: 'homePageView',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/HomePageView/reducer'),
        System.import('containers/HomePageView/sagas'),
        System.import('containers/HomePageView'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('homePageView', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };

  const CartPageViewRoute = {
    path: '/cart',
    name: 'cartPageView',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/CartPageView/reducer'),
        System.import('containers/CartPageView/sagas'),
        System.import('containers/CartPageView'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('cartPageView', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };

  return [
    {
      path: '/',
      name: 'homePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },

      indexRoute: HomePageViewRoute,

      childRoutes: [CartPageViewRoute]
     }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
