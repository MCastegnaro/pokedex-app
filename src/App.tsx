import { Header } from "./components/Header";
import PokeRoutes from "./routes";

import { GlobalStyle } from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <PokeRoutes />
  </>
);

export default App;
