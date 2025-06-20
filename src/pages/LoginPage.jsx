import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = login(email, password);
    if (user) {
      alert(`Welcome back, ${user.firstName}!`);
      navigate("/");
    } else {
      alert("Account not found. Please create an account first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-transparent p-8 border border-black rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
          Login
        </h2>

        <label className="block text-yellow-500 font-bold mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          required
        />

        <label className="block text-yellow-500 font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-700 transition-all text-white py-2 rounded-full font-bold mt-4"
        >
          Login
        </button>
      </form>

      <p className="text-sm mt-4 text-black">
        New here?{" "}
        <span
          onClick={() => navigate("/create-account")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Create an account
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
