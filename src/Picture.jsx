import React from 'react';

import imge from './images/pic 1.jpg';
import image2 from './images/pic 2.jpg';
import image3 from './images/pic 3.jpg';
import image4 from './images/pic 4.jpg';

import { Link } from 'react-router-dom'
// import Flexbox from './Flexbox/Flexbox';

const Picture = () => {
    return (
        <div className='vh-100' >
            <div className='bg-info d-flex justify-content-around align-items-center' >
                <h1 className=' text-dark text-center p-3' > Quotation Gallery</h1>
                <Link className='text-decoration-none text-dark' to='/' >Home</Link>
            <div className='text-center' >
            </div>
            <ul>
                <img className='p-1 bg-dark  m-1 ' height='20px' src={imge} alt="img1" />
                <img className='p-1 bg-dark  m-1 ' height='20px' src={image2} alt="img1" />
                <img className='p-1 bg-dark  m-1 ' height='20px' src={image3} alt="img1" />
                <img className='p-1 bg-dark  m-1 ' height='20px' src={image4} alt="img1" />
                </ul>
            </div>
            <div className='text-dark mt-5' >
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate, deserunt repellendus aliquam id debitis non quaerat ipsam omnis animi, nobis odio sit porro incidunt molestias inventore aliquid fuga? Facere.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur debitis dolorem. Saepe suscipit corporis id, sequi eaque quaerat. Molestias aperiam voluptates voluptatum saepe! Quasi aperiam explicabo consequuntur dignissimos excepturi?</p>
            </div>
            {/* <Flexbox/> */}
         </div>
    )
    
};

export default Picture;