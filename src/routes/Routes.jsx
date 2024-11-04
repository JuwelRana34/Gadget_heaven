import {createBrowserRouter} from "react-router-dom";
import App from '../App'
import{Contact, Dashboard, Details, Home, Statistics } from '../pages'


    const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    
                },
                {
                    path: 'Statistics',
                    element: <Statistics />
                },
                {
                    path: 'Dashboard',
                    element: <Dashboard />
                },
                {
                    path: 'Contact',
                    element: <Contact />
                },
                {
                    path: 'Details/:id',
                    element: <Details />
                }
            ]
        }
    ]);
  
  export default router