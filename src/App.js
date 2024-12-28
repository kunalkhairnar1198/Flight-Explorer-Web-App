import { Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import AuthForm from "./Pages/Auth/AuthForm";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Adminlayout from "./Components/Adminlayout/Adminlayout";
import FlightDetailPage from "./Pages/User/FlightDetail";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<AuthForm/>}/>
          <Route path="/layout" element={
            <ProtectedRoute allowedRole={['user','admin']}>
              <Layout/>
            </ProtectedRoute>
          }/>

          <Route path="/flightdetail/:id" element={
            <ProtectedRoute allowedRole={['user','admin']}>
              <FlightDetailPage/>
            </ProtectedRoute>
          }/>

          <Route path="/admin" element={
            <ProtectedRoute allowedRole={['admin']}>
              <Adminlayout/>
            </ProtectedRoute>
          }/>

        </Routes>
    </>
  );
}

export default App;
