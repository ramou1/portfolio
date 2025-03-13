import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App