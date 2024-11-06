import {createBrowserRouter} from "react-router-dom";
import App from '../App'
import{CategoryLoadFun, Contact, Dashboard, Details, Home, NotFund, Statistics } from '../pages'
import Products from "../Components/Products/Products";





    const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    children:[
                        {
                            path: '/',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('All-Products'))
                                
                        },
                        {
                            path: 'All-Products',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('All-Products'))
                                
                        },
                        {
                            path: 'Laptops',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('Computers'))
                                
                        },
                        {
                            path: 'Phones',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('Phones'))
                                
                        },
                        {
                            path: 'Accessories',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('Accessories'))
                                
                        },
                        {
                            path: 'Smart-Watches',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('Smart Watches'))
                                
                        },
                        {
                            path: 'Iphone',
                            element: <Products />,
                            loader: ()=>(CategoryLoadFun('iPhone'))
                                
                        }
                    ]
                    
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
                },
                {
                    path: '/*',
                    element: <NotFund />
                }
            ]
        }
    ]);
  
  export default router