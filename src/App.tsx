import PrivateRoute from './components/privateRoute/PrivateRoute'
import useAuth from './hooks/useAuth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './router/Authentication'
import Dashboard from './router/Dashboard'
function App (): JSX.Element {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Authentication/>}/>
        <Route element={<PrivateRoute user={user}/>}>
            <Route path="/dashboard/*" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
