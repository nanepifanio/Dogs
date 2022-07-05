import "./App.css";
import * as styles from "./AppStyles";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <styles.AppContainer>
      <Header />
      <AppRoutes />
      <Footer />
    </styles.AppContainer>
  );
};

export default App;
