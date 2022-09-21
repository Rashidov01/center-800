import { Routes, Route } from "react-router-dom";
import { InDocumentTable } from "./components";
import {
  Home,
  Layout,
  Login,
  Users,
  Documents,
  Archive,
  Info,
  Command,
  Employee,
  Organization,
  Department,
  InDepartment,
  InType,
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
          <Route path="employee" element={<Employee />} />
          <Route path="organization" element={<Organization />} />
          <Route path="department" element={<Department />} />
          <Route path="infodepartment" element={<InDepartment />} />
          <Route path="infodocument" element={<InDocumentTable />} />
          <Route path="infodoctype" element={<InType />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
