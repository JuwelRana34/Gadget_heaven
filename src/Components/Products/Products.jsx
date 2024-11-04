/* eslint-disable react/prop-types */
import { Button ,Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { Link } from 'react-router-dom'


function Products({data , selecet}) {
console.log(data , selecet)

  return (
    <div className='grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> 


    { selecet.map(
        (data ) => 
          
            <Card key={data.product_id} className='p-4 '>
        <CardHeader>
          <img src={data.product_image} className="rounded-t-xl hover:scale-110 transition" alt="image" width={600} height={300} />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{data.product_title}</CardTitle>
          <CardDescription className='py-3'>
          Price:$ {data.price}

          </CardDescription>

          <Link to={`/Details/${data.product_id}`} > <Button className='border-2 rounded-full  text-violet-500  border-violet-500'>View Details</Button></Link>
        </CardContent>
      </Card>
        )}
    
    
        
        </div>
  )
}

export default Products