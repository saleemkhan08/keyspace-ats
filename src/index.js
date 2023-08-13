import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthRoutes = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr?.displayName) {
        setUser(usr);
        navigate(`/admin`);
      } else {
        setUser(null);
        navigate("/auth");
      }
    });
  }, [navigate]);
  return (
    <Routes>
      <Route path={`/auth`} element={<AuthLayout />} />
      {user && <Route path={`/admin`} element={<AdminLayout />} />}
    </Routes>
  );
};

ReactDOM.render(
  <Router>
    <AuthRoutes />
  </Router>,

  document.getElementById("root")
);
