import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
      setShowSearch(false); // close search after submitting
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dropdowns = {
    Jewellery: ["pendants", "Earrings", "Rings", "Chains", "Kanti Malas"],
    Murti: ["Krishna", "Shiva", "Hanuman", "Ganesha", "Lakshmi"],
    Custom: ["Custom-Murti", "Custom-Jewellery"],
    support: ["Help Center", "Returns", "Shipping Info"],
  };

  return (
    <nav
      className={`${
        scrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-yellow-500"
      } fixed top-0 w-full font-bold z-50 transition-all duration-300`}
    >
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center gap-y-3">
        {/* Left - Nav Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium items-center">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/cart">
            <img
              src="src/assets/shopping-cart.png"
              alt="Cart"
              className="h-6 inline"
            />
          </Link>
        </div>

        {/* Center - Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold ${
            scrolled ? "text-yellow-500" : "text-yellow-400"
          } tracking-wide absolute left-1/2 transform -translate-x-1/2`}
        >
          ThE SpIrItUaL TrEnD
        </Link>

        {/* Right - Search & Auth */}
        <div className="flex items-center gap-4">
          {/* Toggleable Search */}
         <div className="relative flex items-center" ref={searchRef}>
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
    className={`transition-all duration-300 ease-in-out px-3 py-1 rounded border border-yellow-500 focus:outline-none text-black bg-white
      ${showSearch ? "w-48 opacity-100 mr-2" : "w-0 opacity-0 p-0 border-none"}
    `}
    style={{ transitionProperty: "width, opacity, padding" }}
    autoFocus={showSearch}
  />

  <button
    onClick={() => setShowSearch((prev) => !prev)}
    className={`text-xl ${
      scrolled ? "text-black" : "text-yellow-500"
    } px-2 py-1 rounded hover:bg-yellow-100 transition`}
    title="Search"
  >
    🔍
  </button>
</div>



          {/* Auth */}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-2xl"
            >
              Logout
            </button>
          ) : (
            <img
              src="/src/assets/user.png"
              alt="User Icon"
              onClick={() => navigate("/Loginpage")}
              className="w-6 h-6 border-yellow-500 cursor-pointer hover:scale-105 transition"
            />
          )}
        </div>
      </div>

      {/* Subnavbar with dropdowns */}
      <div
        className={`${
          scrolled ? "text-black" : "bg-transparent text-yellow-500"
        } py-1 transition-all duration-300`}
      >
        <div className="max-w-5xl mx-auto flex justify-center gap-16 text-lg font-semibold relative">
          {Object.keys(dropdowns).map((key) => (
            <div key={key} className="relative group">
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <FaChevronDown className="text-sm mt-0.5" />
              </button>

              {openDropdown === key && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-md py-2 w-48 z-50">
                  {dropdowns[key].map((item, i) => (
                    <Link
                      key={i}
                      to={`/${key}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-yellow-500 hover:bg-yellow-100 transition"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
