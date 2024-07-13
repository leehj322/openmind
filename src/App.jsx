import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/@shared/GlobalStyles';
import PageRouter from './PageRouter';
import { ThemeProvider } from 'styled-components';
import theme from './styles/@shared/theme';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle>
        <ThemeProvider theme={theme}>
          <PageRouter />
        </ThemeProvider>
      </GlobalStyle>
    </QueryClientProvider>
  );
}

export default App;
