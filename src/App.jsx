import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageRouter from './PageRouter';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PageRouter />
    </QueryClientProvider>
  );
}

export default App;
