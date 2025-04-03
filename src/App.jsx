import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Proposal from "./pages/Proposal.jsx";
import ProposalOverview from "./pages/ProposalOverview.jsx";

function App() {


  return (

    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/proposal" element={<Proposal /> } />
        <Route path="/proposals" element={<ProposalOverview /> } />
      </Routes>

    </>
  )
}

export default App
