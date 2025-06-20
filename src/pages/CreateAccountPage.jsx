import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(formData);
      alert(`🎉 Welcome, ${formData.firstName}!`);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center py-35 justify-center bg-amber-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-black p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Create Account
        </h2>

        {error && (
          <p className="text-red-600 text-sm font-semibold mb-3">{error}</p>
        )}

        {["firstName", "lastName", "mobile", "email", "password"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-800 font-semibold mb-1 capitalize">
              {field === "mobile" ? "Mobile Number" : field}
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
