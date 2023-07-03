import React from 'react';

import imge from './images/pic 1.jpg';
import image2 from './images/pic 2.jpg';
import image3 from './images/pic 3.jpg';
import image4 from './images/pic 4.jpg';

import { Link } from 'react-router-dom'

const Getstarted = () => {
    return (
        <div className='bg-success vh-1000' >
            <div className='bg-info d-flex justify-content-around align-items-center' >
                <h1 className=' text-dark text-center p-3' > gallery</h1>
                <Link className='text-decoration-none text-dark' to='/' >Home</Link>
            <div className='text-center' >
            </div>
                <img className='p-2 bg-dark p-2 m-1 ' height='250px' src={imge} alt="img1" />
                <img className='p-2 bg-dark p-2 m-1 ' height='250px' src={image2} alt="img1" />
                <img className='p-2 bg-dark p-2 m-1 ' height='250px' src={image3} alt="img1" />
                <img className='p-2 bg-dark p-2 m-1 ' height='250px' src={image4} alt="img1" />
            </div>
            <div className='text-dark mt-5' >
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate, deserunt repellendus aliquam id debitis non quaerat ipsam omnis animi, nobis odio sit porro incidunt molestias inventore aliquid fuga? Facere.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur debitis dolorem. Saepe suscipit corporis id, sequi eaque quaerat. Molestias aperiam voluptates voluptatum saepe! Quasi aperiam explicabo consequuntur dignissimos excepturi?</p>
            </div>
         </div>
    )
    
};

export default Getstarted;