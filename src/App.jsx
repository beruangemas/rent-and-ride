import './App.css'
import SideBar from './components/shared/SideBar'
import NavBar from './components/shared/NavBar'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // Main container
    <div className="flex flex-col min-h-screen">
      
      {/* NavBar Component */}
      <NavBar
        toggleSidebar={toggleSidebar}
        isAdminView={currentPage === "admin"}
        isUserView={currentPage === "user"}
        setCurrentPage={setCurrentPage} // passing the baton to navbar to render login page
      />

      {/* Middle Layout */}
      <div className="flex flex-1 relative">
        
        {/* SideBar: Only render on Admin or User pages */}
        {(currentPage === "admin" || currentPage === "user") && (
          <SideBar 
            isAdminView={currentPage === "admin"} 
            isOpen={isSidebarOpen} 
          />
        )}

        {/* Main Content Area */}
        <main className={`flex flex-col flex-1 p-10 font-sans transition-all duration-300 ${
          /* Dynamic Margin: Prevents content from hiding behind the fixed sidebar on desktop */
          (currentPage === "admin" || currentPage === "user") && isSidebarOpen 
            ? 'md:ml-[280px]' 
            : ''
        }`}>
          
          {/* Cleaned-Up Page Router */}
          {currentPage === "home" && <HomePage />}
          {currentPage === "admin" && <AdminPage />}
          {currentPage === "user" && <UserPage />}
          {currentPage === "login" && <LoginPage setCurrentPage = {setCurrentPage} />}

          {/* Temporary Dev Buttons */}
          <div className="fixed bottom-[70px] left-3 flex gap-3 z-50">
            <button 
              onClick={() => setCurrentPage("home")}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 shadow-md transition-colors"
            > 
              View Homepage
            </button>
            <button 
              onClick={() => setCurrentPage("admin")}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 shadow-md transition-colors"
            > 
              View Admin
            </button>
            <button 
              onClick={() => setCurrentPage("user")}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 shadow-md transition-colors"
            > 
              View User
            </button>
          </div>
          
        </main>
      </div>

      {/* Footer */}
      <footer className="h-[50px] bg-[#50c878] flex items-center justify-center text-[gold] text-lg [text-shadow:1px_1px_2px_black] relative z-50 border-t border-gray-300">
        &copy; 2024 Rent & Ride. All rights reserved.
      </footer>
      
    </div>
  )
}