import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>
        Mark<span className="text-red-500">flix</span>
      </h1>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
