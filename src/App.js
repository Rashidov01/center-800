import { Routes, Route } from "react-router-dom";
import {
  Home,
  Layout,
  Login,
  Users,
  Documents,
  Archive,
  Info,
  Command,
} from "./pages";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} /> :
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="documents" element={<Documents />} />
          <Route path="archive" element={<Archive />} />
          <Route path="info" element={<Info />} />
          <Route path="command" element={<Command />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
