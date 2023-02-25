import { createGlobalStyle } from 'styled-components';

import LatoRegular from './Lato/Lato-Regular.ttf';
import LatoBold from './Lato/Lato-Bold.ttf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold});
    font-weight: 700;
    font-style: normal;
  }
`;