import "./App.css";
import * as styles from "./AppStyles";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserStorage } from "./context/UserContext";

const App = () => {
  return (
    <UserStorage>
      <Header />
      <styles.AppContainer>
        <AppRoutes />
        <Footer />
      </styles.AppContainer>
    </UserStorage>
  );
};

export default App;
