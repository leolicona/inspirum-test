import Loging from './components/loging/Loging'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import useAuth from './hooks/useAuth'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App (): JSX.Element {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loging/>}/>
        <Route path="/test" element={<h1>Test route</h1>}/>
        <Route element={<PrivateRoute user={user}/>}>
          <Route path="/" element={<h1>Private</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
