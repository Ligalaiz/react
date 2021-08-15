import Search from '../components/search/components/Search';
import Details from '../components/details/details';
import About from '../components/about/about';
import Contacts from '../components/contacts/contacts';
import Error from '../components/error/error';

export const routes = [
  { path: '/', Component: Search, exact: true },
  { path: '/details/card/:id', Component: Details, exact: true },
  { path: '/about', Component: About, exact: true },
  { path: '/contacts', Component: Contacts, exact: true },
  { path: '/error', Component: Error, exact: true },
  { path: '*', Component: Error, exact: false },
];
