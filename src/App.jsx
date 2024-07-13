import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageRouter from './PageRouter';
import GlobalStyle from './styles/@shared/GlobalStyles';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle>
        <PageRouter />
      </GlobalStyle>
    </QueryClientProvider>
  );
}

export default App;
