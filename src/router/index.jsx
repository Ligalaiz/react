import Search from '../components/search/components/Search';
import About from '../components/about/about';

export const routes = [
  { path: '/', Component: Search, exact: true },
  { path: '/about', Component: About, exact: true },
  { path: '*', Component: Error, exact: false },
];
