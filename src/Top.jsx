import React from 'react'
import Card from './Card'
import image1 from './images/pic 1.jpg'
import image2 from './images/pic 2.jpg'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

const Top= () => {

    const data = [
        {
            Quote: 'Positive',
            name: 'There is always light. If only were brave enough to see it. If only were brave enough to be it',
           
        },
        {
            quote: 'love',
            name: 'If you dont love yourself, nobody will Not only that you wont be good at loving anyone else. Loving starts with the self',
            
           
        },
        {
            quote:'Happy',
            name: 'It is only possible to live happily ever after on a daily basis',
           
        },
    ]
    return (
        
        <div  >
          <div>
 {/* <Navbar></Navbar> */}
          <h1 className='animate__animated animate__flash' >Quotations</h1>
          <Link className='text-decoration-none text-white' to='/' >MainPage</Link>
          </div>
         
            <div className=' d-flex '>
            <img className='p-2 bg-white p-8 m-2 ' height='250px' width='00px' src={image1} alt="img1" />
           
            </div>

           <div className=' d-flex  justify-content-around align-items-center'>
           
           <img className='p-2 bg-white p-8 m-2 ' height='350px' width='500' src={image2} alt="img2" />
           
            </div>
            
           


            <div className='d-flex flex-wrap ' >
                {data.map((data) => {
                    return (
                        <div key={data.quote} >
                            <Card data={data} />
                        </div>
                    )
                })}
            </div>

            <marquee>
           
            </marquee> 
        </div>
    )
}

export default Top;