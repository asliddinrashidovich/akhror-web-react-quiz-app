import { createBrowserRouter , RouterProvider } from 'react-router-dom'

// layout
import RoutLayout from './layout/RoutLayout'

// components
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import Quiz from './pages/Quiz'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RoutLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: `/quiz/:title`,
          element: <Quiz/>
        }
      ]
    },
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
