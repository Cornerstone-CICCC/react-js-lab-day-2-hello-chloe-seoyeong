import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/login/Login";
import { LoginContextProvider } from "./contexts/login/LoginContextProvider";
import Todos from "./pages/todos/Todos";

const App = () => {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
};

export default App;
