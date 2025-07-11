import './App.css';
import Layout from "./Components/Layouts/Layout.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Enso from './Components/pages/enso/enso.js';
import Auth from './Components/pages/auth/auth.js';
import InfinityStore  from "./Components/pages/infinityStore/InfinityStore.js";
import Token from './Components/pages/tokenPage/Token.js';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    document.title = "Wear what you want using ai"
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path="infinityStore" element={<InfinityStore />} />
          <Route path="token" element={<Token />} />
        </Route>
          <Route path='enso' element={<Enso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
