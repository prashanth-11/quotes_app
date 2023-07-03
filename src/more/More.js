import React from 'react';
import image from "../images/HELLO.jpg";


const More = () => {
  return (
    <div>
      <div class="container">


<div class="swipe">
  <div class="panel" >
  <img src={image} class="card-img" alt="..." />

  </div>
  <div class="panel" data-img="http://payload100.cargocollective.com/1/9/296422/4317770/1%20-%20Landscape%208_o.jpg"></div>
  <div class="panel" data-img="http://payload100.cargocollective.com/1/9/296422/4317770/1%20-%20Landscape%209_o.jpg"></div>
  <div class="panel" data-img="http://payload100.cargocollective.com/1/9/296422/4317770/2-%20Arquitectura%205_o.jpg"></div>
  <div class="panel" data-img="http://payload100.cargocollective.com/1/9/296422/4317770/3%20-%20Interiores%201_o.jpg"></div>
</div>


<div class="info">
  <div class="inner">
    <h3>Simply swipe on any device!</h3>
    <p>Use this buttons or your fingers. No matter what you do, no matter which device you choose, the picture will swipe and swipe again!</p>
  </div>
  <div class="buttons">
    <button class="btn-prev" disabled>&larr;</button>
    <button class="btn-next">&rarr;</button>
  </div>
</div>

</div>


<div class="optional">  
<h3>Lorem ipsum dolor sit amet.</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus asperiores natus minus ab sit. Ipsum iste, doloribus suscipit ducimus ea repudiandae consequatur soluta repellat saepe fuga, velit odit odio facilis, at sunt quis quo molestias quae. Ullam nisi, error facilis nobis maxime numquam quaerat, voluptatibus sit debitis ea quasi incidunt?</p>
</div>




    </div>
  )
}

export default More
