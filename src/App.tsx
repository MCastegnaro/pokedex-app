import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import PokeRoutes from "./routes";

import { GlobalStyle, Wrapper } from "./styles/global";

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    <PokeRoutes />
    <Footer />
  </Wrapper>
);

export default App;
