
import { RouterProvider } from 'react-router-dom'
import './styles/globalStyles.css'
import router from './routes/route'


function App() {

  return (

      <RouterProvider router={router} />
  )
}

export default App
