import { createGlobalStyle } from 'styled-components'


import BoldFont from './assets/fonts/Montserrat-Bold.ttf'
import RegularFont  from './assets/fonts/Montserrat-Regular.ttf'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }

    @font-face {
        font-family: 'bold';
        src: url(${BoldFont});
    }

    @font-face {
        font-family: 'regular';
        src: url(${RegularFont});
    }

`
export default GlobalStyles