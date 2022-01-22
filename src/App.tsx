import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import PokeRoutes from "./routes";

import { GlobalStyle, Wrapper, Content } from "./styles/global";

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    <Content>
      <PokeRoutes />
    </Content>
    <Footer />
  </Wrapper>
);

export default App;
