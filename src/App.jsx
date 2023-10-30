import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DrawerWithNavigation } from "./components/Drawer";
import AuthModal from "./components/auth/AuthModal";
import { selectAuth, setAuthenticated } from "./components/redux/AuthSlices";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Gallery from "./components/Gallery";

function Home() {
  return <div></div>;
}

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Sign In</button>;
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectAuth);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setAuthenticated(token));
    }
  }, [dispatch]);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex-row center-block p-6">
        <DrawerWithNavigation />
        {!isAuthenticated && <LoginButton onClick={handleLoginClick} />}
      </div>
      <div className="flex justify-center">
        {!isAuthenticated && <a href="#Login">Login</a>}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="component" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
      {showModal && <AuthModal closeModal={closeModal} />}
    </>
  );
}

export default App;
