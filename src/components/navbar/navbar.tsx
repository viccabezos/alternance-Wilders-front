import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-gray-500 text-white text-2xl p-4 text-center">
      <p className="text-white">Wilder's Book</p>

      <Link to="/">Home</Link>
      <Link to="/profile">profile</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
