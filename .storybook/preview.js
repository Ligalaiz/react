import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks';
import {addParameters} from '@storybook/react';
import 'loki/configure-react';


addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    controls: { expanded: true }
  },
});

