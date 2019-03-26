import { css } from 'styled-components';

import RobotoBold from '../assets/fonts/Roboto-Bold.WOFF';
import RobotoMedium from '../assets/fonts/Roboto-Medium.WOFF';
import RobotoRegular from '../assets/fonts/Roboto-Regular.WOFF';
import RobotoLight from '../assets/fonts/Roboto-Light.WOFF';
import RobotoThin from '../assets/fonts/Roboto-Thin.WOFF';

const globalFonts = css`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold}) format('woff');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoMedium}) format('woff');
        font-weight: 600;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular}) format('woff');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoLight}) format('woff');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoThin}) format('woff');
        font-weight: 300;
    }
`;

export { globalFonts as default };
