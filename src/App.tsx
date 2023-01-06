import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "./theme";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
