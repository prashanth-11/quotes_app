import React from 'react'
import './About.css'
import imge from './images/stock photography colorful.jpg.jpg';
import imge1 from'./images/pin on wallpaper.jpg.jpg';
const About = () => {
  return (
    <>
     <div className='heading'>
        <h1>About Us</h1>
        <p>quotes: Make quotes great again!</p>
     </div> 
     <div className='container'>
        <section className='about'>
            <div className='about-image'>
            <img  src={imge} alt=" " />
            </div>
            <div className='about-content'>
                <h2>We make quotes</h2>
                <p>We've always liked quotes that make sense. We like to read quotes that can inspire and teach us.
                   Because every quote may give you more than one thought. 
                   It gives you different emotions, various experiences. It makes you better all around.
                   We don't want to be a love-quotes-only project. We want you to make modern people love quotes again. 
                   We want you to love quotes as much as we do.
                   We want to make quotes great again.</p>
                   {/* <a href='#' className='read-more'>Read More</a> */}
            </div>
        </section>
        <section className='sudha'>
         <div className='sudha-content'>
            <h2>The Biggest quotes collection</h2>
            <p>We are not just a collection of quotes: we are a very well organized collection, like the National Library,
               a well-kept ledger or US Army supply store. To ensure that we have the biggest quotes collection of all (and this is true),
               we're digging up books, newspapers, magazines and interviews - any source that can give us a good quote. You can easily navigate
               through topics if you want to read about a particular subject. And you can easily find any quote, even if you only remember one or
               two words from the quote.</p>
         </div>
         <div className='sudha-image'>
            <img src={imge1} alt=""/>
         </div>
        </section>
        

     </div>
    </>
  )
}

export default About

