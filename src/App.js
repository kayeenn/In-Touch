import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/messages" exact element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
