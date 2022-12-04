import RoutesApp from "./Routes/routes";
import { GlobalStyles } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Mini Blog</h1>
      <main>
        <RoutesApp />
      </main>
    </>
  );
}

export default App;
