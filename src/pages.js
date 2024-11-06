
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import Statistics from './Pages/Statistics';
import Details from './Pages/Details';
import NotFund from './Pages/NotFund';
import { useEffect } from 'react';



const DocumentTitle = (title)=>{
    useEffect(()=>{
     document.title = title;
    },[title]);
}
const setLocalDb = (data) => {
  localStorage.setItem('Datas', JSON.stringify(data));
};

const CategoryLoadFun = (category) => {
         return category
         
}

export { Home , Dashboard , Contact ,Statistics, Details,NotFund , DocumentTitle , setLocalDb, CategoryLoadFun}

