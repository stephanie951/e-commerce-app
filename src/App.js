import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.compnent";
import Navigation from "./route/navigation/navigation.component";
import SignIn from "./route/signIn/signIn.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
