/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button ,Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import dataContext from '../../datacontext/datacontext'


function Products({data , selecet}) {
 const categoryName = useLoaderData()
 const [products, setProduct] = useState([])
 console.log(categoryName)
 console.log(products)
 const {datas} =  useContext(dataContext)

 const handelProducts = (category = datas) => {



  if(category === "All-Products"){
   return setProduct(datas) 
  }else if(category === "Computers"){
     const Computers = datas.filter(data => data.category === category)
     return setProduct( Computers)
  } else if(category === "Phones"){
     const Phones = datas.filter(data => data.category === category)
     return setProduct (Phones)
  }
  else if(category === "Accessories"){
     const Accessories = datas.filter(data => data.category === category)
     return setProduct( Accessories)
  }
  else if(category === "Smart Watches"){
     const Watches = datas.filter(data => data.category === category)
     return setProduct(Watches)
  }
  else if(category === "iPhone"){
     const Iphone = datas.filter((iph) => iph.product_title.includes(category));
     return setProduct (Iphone)
  }

}

useEffect(() => {
  handelProducts(categoryName)
}, [categoryName])



  return (
    <div className='grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '> 


    { products.map(
        (data ) => 
          
            <Card key={data.product_id} className='p-4 flex flex-col  '>
        <CardHeader>
          <img src={data.product_image} className="rounded-t-xl hover:scale-110 transition w-full h-[250px]  origin-center" alt="image"  />
        </CardHeader>

        <CardContent className="space-y-1 flex-grow ">
          <CardTitle >{data.product_title}</CardTitle>
          <CardDescription className='py-3 font-semibold '>
          Price:$ {data.price}

          </CardDescription>
  
        </CardContent>
        <Link  to={`/Details/${data.product_id}`} > <Button className='border-2 rounded-full m-6   text-violet-500  border-violet-500'>View Details</Button></Link>
      </Card>
        )}

    
    
        
        </div>
  )
}

export default Products