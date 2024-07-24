import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/@shared/GlobalStyles';
import PageRouter from './PageRouter';
import '../src/styles/@shared/init.css';
import '../src/components/@shared/Button';
import DarkModeProvider from './contexts/DarkModeProvider';
import { Toaster } from 'react-hot-toast';
import ThemeToggler from './components/@shared/ThemeToggler';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <DarkModeProvider>
        <ThemeToggler />
        <PageRouter />
        <Toaster />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
