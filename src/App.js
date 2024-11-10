import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MinecraftServerPlans from './assets/inicio';
import Login from './assets/Login';
import Register from './assets/Register';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MinecraftServerPlans />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
);
}

export default App;
