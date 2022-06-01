import Home from "./components/home";
import Navigation from "./components/navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
