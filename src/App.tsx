import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { routes } from "./routes";

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
