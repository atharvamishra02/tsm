import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setShowSearch(false);
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
    Jewellery: ["Pendants", "Earrings", "Rings", "Chains", "Kanti Malas"],
    Murti: ["Krishna", "Shiva", "Hanuman", "Ganesha", "Lakshmi"],
    Custom: ["Custom-Murti", "Custom-Jewellery"],
    Support: ["Help Center", "Returns", "Shipping Info"],
  };

  return (
    <nav
      className={`${
        scrolled
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-yellow-500"
      } fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left - Logo & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Hamburger (Mobile only) */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`text md:text-2xl font-bold tracking-wide ${
              scrolled ? "text-yellow-600" : "text-yellow-500"
            }`}
          >
            The Spiritual Trend
          </Link>
        </div>

        {/* Right - Search + User + Cart */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative" ref={searchRef}>
            <button
              type="button"
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-xl px-2"
            >
              🔍
            </button>

            {showSearch && (
              <div className="absolute top-full mt-2 bg-white rounded shadow-lg p-2 z-50">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="px-3 py-2 rounded border border-yellow-500 text-black w-48"
                />
                <button
                  type="submit"
                  className="ml-2 text-sm font-medium bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Go
                </button>
              </div>
            )}
          </form>

          {/* User */}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded-xl hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          ) : (
            <img
              src="/src/assets/user.png"
              alt="User"
              onClick={() => navigate("/Loginpage")}
              className="w-6 h-6 cursor-pointer hover:scale-105 transition"
            />
          )}

          {/* Cart */}
          <Link to="/cart">
            <img
              src="/src/assets/shopping-cart.png"
              alt="Cart"
              className="h-6 w-6 cursor-pointer hover:scale-110 transition"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center gap-10 py-2 text-base font-medium">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-400">
          About
        </Link>

        {Object.entries(dropdowns).map(([key, items]) => (
          <div key={key} className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              {key}
              <FaChevronDown className="text-xs mt-0.5" />
            </button>
            <div className="absolute hidden group-hover:block top-8 bg-white border rounded-md shadow-lg min-w-[10rem] text-yellow-600">
              {items.map((item) => (
                <Link
                  key={item}
                  to={`/${key.toLowerCase()}/${item
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu (Hamburger Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 shadow-md">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-medium mt-2"
          >
            About
          </Link>

          {Object.entries(dropdowns).map(([key, items]) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex justify-between items-center w-full font-medium py-2"
              >
                {key} <FaChevronDown className="text-sm" />
              </button>
              {openDropdown === key && (
                <div className="ml-4 space-y-1 mt-1">
                  {items.map((item) => (
                    <Link
                      key={item}
                      to={`/${key.toLowerCase()}/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-yellow-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
