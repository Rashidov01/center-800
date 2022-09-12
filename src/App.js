import { Routes, Route } from "react-router-dom";
import { About, Home, Layout, Login } from "./pages";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} /> :
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
