import "./App.css";
import { Header } from "./component/Header";
import { ListCountries } from "./component/ListCountries";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ListCountries />
    </div>
  );
};

export default App;
