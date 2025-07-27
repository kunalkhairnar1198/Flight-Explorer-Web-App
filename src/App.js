import { Route, Routes } from 'react-router';

import Adminlayout from './Components/Adminlayout/Adminlayout';
import Layout from './Components/Layout/Layout';
import AuthForm from './Pages/Auth/AuthForm';
import FlightDetailPage from './Pages/User/FlightDetail';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<AuthForm />} path="/" />

      <Route
        element={
          <ProtectedRoute allowedRole={['user', 'admin']}>
            <Layout />
          </ProtectedRoute>
        }
        path="/layout"
      />

      <Route
        element={
          <ProtectedRoute allowedRole={['user', 'admin']}>
            <FlightDetailPage />
          </ProtectedRoute>
        }
        path="/flightdetail/:id"
      />

      <Route
        element={
          <ProtectedRoute allowedRole={['admin']}>
            <Adminlayout />
          </ProtectedRoute>
        }
        path="/admin"
      />
    </Routes>
  );
}

export default App;
