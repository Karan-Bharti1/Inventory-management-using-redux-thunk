import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Inventory from './pages/Inventory.jsx'
import RemainingItems from './pages/RemainingItems.jsx'
import RemovedItems from './pages/RemovedItems.jsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'
const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/inventory',
  element:<Inventory/>
},
{
  path:'/remainingItems',
  element:<RemainingItems/>
},
{
  path:'/removedItems',
  element:<RemovedItems/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
      </Provider>

  </StrictMode>,
)
