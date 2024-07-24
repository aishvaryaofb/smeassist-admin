"use client"

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7c3aed',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#006EFA',
            // light: '#F5EBFF',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#47008F',
        },
    },
});

const ThemeProviderWrapper = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ThemeProviderWrapper;
