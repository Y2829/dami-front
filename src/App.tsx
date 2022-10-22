import ThemeProvider from "./theme";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
