import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/@shared/GlobalStyles';
import PageRouter from './PageRouter';
import { ThemeProvider } from 'styled-components';
import theme from './styles/@shared/theme';
import { ModalProvider } from 'styled-react-modal';
import '../src/styles/@shared/init.css';
import '../src/components/@shared/Button';

function App() {
  const queryClient = new QueryClient();

  const mode = 'light';
  const themeSet = { ...theme.settings, ...theme.modes[mode] };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={themeSet}>
        <ModalProvider>
          <PageRouter />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
