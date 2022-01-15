import Details from '../components/details/details';
import { About } from '../components/about/about';
import { Contacts } from '../components/contacts/contacts';
import { Error } from '../components/error/error';

export const routes = [
  { path: 'details/card/:id', element: Details },
  { path: 'about', element: About },
  { path: 'contacts', element: Contacts },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
