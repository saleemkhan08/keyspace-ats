import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";

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
        navigate(`/accounts`);
      } else {
        setUser(null);
        navigate("/auth");
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />} />
      {user && (
        <Route path="/accounts" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="job-openings" element={<Tables />} />
          <Route path="leaves" element={<Billing />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}
    </Routes>
  );
};

ReactDOM.render(
  <Router>
    <AuthRoutes />
  </Router>,

  document.getElementById("root")
);
