import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <div className="w-30 md:w-64 border-l border-gray-200 bg-gray-50">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
