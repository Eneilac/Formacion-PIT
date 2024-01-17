import { Router, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './routes/Routes'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
