import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.compnent";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/authentication.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
