import React from 'react'
import { Projects } from '../Constants/Projects'

const Portfolio = () => {
  return (
    <div className='flex flex-col md:flex-row items-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {Projects.map(result =>(
                <div key={result.id}>
                    <div>
                      <p>{result.title}</p>
                      <p>{result.imgurl}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
 
export default Portfolio
