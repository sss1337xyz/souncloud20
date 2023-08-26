import { ReactNode } from 'react';
import {ThemeProvider} from "styled-components";

import {blackTheme} from "shared/theme/BlackTheme";
import GlobalStyle from "shared/theme/GlobalStyle";



export const withTheme = (component: () => ReactNode) => () =>
    <ThemeProvider theme={blackTheme}>
        <GlobalStyle theme={blackTheme}/>
        {component()}
    </ThemeProvider>;