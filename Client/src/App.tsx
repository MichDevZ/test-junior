import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Table from './components/Table';
import AddUser from "./pages/AddUserPage";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
          <Routes>
              <Route path="/" element={<Table />}/>
              <Route path="/AddUser" element={<AddUser />}/>
              <Route path="/EditUser" element={<EditUser />}/>
          </Routes>
    </>
  );
}

export default App;