import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import CalculateContextProvider from "./context/Calculate";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CalculateContextProvider>
          <AppRouter />
        </CalculateContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
