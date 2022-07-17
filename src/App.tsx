import "./App.css";
import * as styles from "./AppStyles";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <styles.AppDiv>
      <Header />
      <styles.AppContainer>
        <AppRoutes />
      </styles.AppContainer>
      <Footer />
    </styles.AppDiv>
  );
};

export default App;
