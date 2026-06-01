import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Admin from './pages/admin';
import Hr from './pages/Hr';
import Employee from './pages/Employee';
// import ProtectedRoute from "./components/ProtectedRoute"
import RoleProtectedRoute from './components/RoleProtectedRoute';
import { useUserStore } from './store/user';
import LogoutFooter from './components/LogoutFooter';

import { Box, useColorModeValue } from "@chakra-ui/react";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
  const { user } = useUserStore();


  return (
    // <Navbar />
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        
        <Route path="/admin"
          element={<RoleProtectedRoute allowedRole={"admin"}>
            <>
              <Admin />
              <LogoutFooter></LogoutFooter>
            </>
          </RoleProtectedRoute>}
        />

      <Route path="/employee"
          element={<RoleProtectedRoute allowedRole={"employee"}>
            <>
              <Employee />
              <LogoutFooter></LogoutFooter>
            </>
          </RoleProtectedRoute>}
      />

      <Route path="/hr"
          element={<RoleProtectedRoute allowedRole={"hr"}>
            <>
              <Hr />
              <LogoutFooter></LogoutFooter>
            </>
          </RoleProtectedRoute>}
      />
      <Route path="/"
          element={<RoleProtectedRoute allowedRole={null}>
            <>
              <Hr />
              <LogoutFooter></LogoutFooter>
            </>
          </RoleProtectedRoute>}
      />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="/hr" element={<Hr />} /> */}
        {/* <Route path="/employee" element={<Employee />} /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  )
}

export default App
