import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage'
import PropertyDetail from './pages/propertyDetailPage/propertyDetailPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  )
}

export default App
