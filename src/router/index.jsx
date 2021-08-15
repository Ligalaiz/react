import Search from '../components/search/components/Search';
import Details from '../components/details/details';
import About from '../components/about/about';
import Error from '../components/error/error';

export const routes = [
  { path: '/', Component: Search, exact: true },
  { path: '/details/card/:id', Component: Details, exact: true },
  { path: '/about', Component: About, exact: true },
  { path: '/error', Component: Error, exact: true },
  { path: '*', Component: Error, exact: false },
];
