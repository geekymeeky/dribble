import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Teams from './components/Teams'
import AppBar from './components/AppBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/teams/" element={<Teams />}></Route>
          <Route path="/" element={<Banner />}></Route>
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
