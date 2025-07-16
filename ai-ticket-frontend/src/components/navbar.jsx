import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/finfix-logo.png";

export default function Navbar() {
  const token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="navbar" style={{ backgroundColor: "#191e24" }}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost px-2">
          <img src={logo} alt="FinFix Logo" className="h-14 w-auto" />
        </Link>
      </div>
      <div className="flex gap-2">
        {!token ? (
          <>
            <Link to="/signup" className="btn btn-sm">
              Signup
            </Link>
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          </>
        ) : (
          <>
            <p>Hi, {user?.email}</p>
            {user && user?.role === "admin" ? (
              <Link to="/admin" className="btn btn-sm">
                Admin
              </Link>
            ) : null}
            <button onClick={logout} className="btn btn-sm">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
