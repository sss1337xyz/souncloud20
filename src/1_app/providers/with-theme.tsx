import { ReactNode } from 'react';
import {ThemeProvider} from "styled-components";

import {blackTheme} from "6_shared/theme/BlackTheme";
import GlobalStyle from "6_shared/theme/GlobalStyle";

export const withTheme = (component: () => ReactNode) => () =>
    <ThemeProvider theme={blackTheme}>
        <GlobalStyle theme={blackTheme}/>
        {component()}
    </ThemeProvider>;