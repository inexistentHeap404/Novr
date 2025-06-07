import './App.css';
import Layout from "./Components/Layouts/Layout.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import NovrVision from './Components/pages/novrVision/NovrVision.js';
import Auth from './Components/pages/auth/auth.js';
import AuthLogin from './Components/pages/auth/authLogin.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='novrVision' element={<NovrVision />} />
          <Route path='auth' element={<Auth />} />
          <Route path="authLogin" element={<AuthLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
