import "./App.scss";
import Signup from "./Components/Auth/signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Auth/login";

import Notification from "./Components/Shared/Notification";
import AddMoney from "./Screens/AddMoney";
import Products from "./Screens/Products";
import TransactionTable from "./Screens/Transaction";
import Dashboard from "./Screens/Dashboard";
import { AUTH_USER } from "./Components/Config/config";

function App() {
  const user = JSON.parse(localStorage.getItem(AUTH_USER)!);
  if (!!user) {
    <Navigate to="/signup" />;
  } else {
    <Navigate to="/" />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Notification />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="add-money" element={<AddMoney />} />
          <Route path="products" element={<Products />} />
          <Route path="transaction" element={<TransactionTable />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
