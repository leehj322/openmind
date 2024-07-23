import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/@shared/GlobalStyles';
import PageRouter from './PageRouter';
import '../src/styles/@shared/init.css';
import '../src/components/@shared/Button';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <GlobalStyle />
        <PageRouter />
        <Toaster />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
