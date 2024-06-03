import Student from "./components/Student";
import Users from "./components/userList";
import "./App.css";
import Products from "./components/Product"
import Navigationbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import NoPage from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from "./components/Authentication";
import UserProfile from "./components/UserProfile";
import "./App.css";
import Todo from "./components/Todo";

const AuthenticatedUserProfile = Authentication(UserProfile);

const App = () => {
  const user = {
    name: "Sumathi Krish",
    email: "sumathi.krish@example.com",
    hobbies: ["coding", "play", "Sleep"],
  };

  const isAuthenticated = true;

  return (
    <div className="App">
      {/* <Student /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route path="productsList" element={<Products />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <AuthenticatedUserProfile isAuthenticated={isAuthenticated} user={user} />
      <Todo />
    </div>
  );
};

export default App;