import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Table from './components/Table';
import AddUser from "./pages/AddUserPage";

function App() {
  return (
    <>
          <Routes>
              <Route path="/" element={<Table />}/>
              <Route path="/AddUser" element={<AddUser />}/>
          </Routes>
    </>
  );
}

export default App;