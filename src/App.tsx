import "./App.scss";
import Signup from "./Components/Auth/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/login";

import Notification from "./Components/Shared/Notification";
import Dashboard from "./Screens/Dashboard";
import AddMoney from "./Screens/AddMoney";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Notification />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="add-money" element={<AddMoney />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
