import { Details } from '@components/Details';
import { About } from '@components/About';
import { Contacts } from '@components/Contacts';
import { Error } from '@src/components/Error';

export const routes = [
  { path: 'details/card/:id', element: Details },
  { path: 'about', element: About },
  { path: 'contacts', element: Contacts },
  { path: 'error', element: Error },
  { path: '*', element: Error },
];
