import { useState } from "react"


function Rating({rating}) {
    
    // const [rating , setrating] = useState(4)

    
    
  return (
    <div className="rating pl-2">
        {
            [1 , 2, 3, 4, 5].map((value)=>(
                 <input type="radio" key={value} name="rating-2"  className="mask mask-star-2   bg-orange-400" checked={rating}/>
            ))
        }

 
 


  
</div>
  )
}

export default Rating