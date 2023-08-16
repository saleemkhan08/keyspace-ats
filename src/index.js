import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import Dashboard from "features/Dashboard";
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
      console.log("SalLogin", usr);
      if (usr?.email) {
        setUser(usr);
        navigate(`/accounts`);
      } else {
        setUser(null);
        navigate("/");
      }
    });
  }, []);
  return (
    <Routes>
      <Route index element={<AuthLayout />} />
      {user && (
        <Route path="/accounts" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Tables />} />
          <Route path="leaves" element={<Billing />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      )}
    </Routes>
  );
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router>
    <AuthRoutes />
  </Router>,

  document.getElementById("root")
);
