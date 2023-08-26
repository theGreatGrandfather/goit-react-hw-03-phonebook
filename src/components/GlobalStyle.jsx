import { injectGlobal } from '@emotion/css'

import 'modern-normalize';

export const GlobalStyles = () => injectGlobal`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
        object-fit: cover;
    }
`;