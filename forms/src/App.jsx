import { RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './routes/Routes'
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <div className="app">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
