import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/@shared/GlobalStyles';
import PageRouter from './PageRouter';
import { ThemeProvider } from 'styled-components';

import '../src/styles/@shared/init.css';
import '../src/components/@shared/Button';
import theme from './styles/@shared/newTheme';

function App() {
  const queryClient = new QueryClient();

  const mode = 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme[mode]}>
        <PageRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
