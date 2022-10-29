import React from 'react'
import "./Style.css";

const About = () => {
  return (
   
<div className="container my-5">
  <div className="row mx-5">
  <div className="position-relative">
  <div className="position-absolute top-50 start-50" ><h1 className='h1i' >About me</h1></div>
</div></div>
<div className="container">
  <div className="row my-5 mx-5">
    <div className="col my-5 mx-5">
   
    <div className="col my-5 mx-5">
    <img src="https://cdn-icons-png.flaticon.com/512/1508/1508843.png" className="d-block w-100" alt="..." />
    </div>

    {/* button div tag */}

    {/* <div class="container">
  <div class="row my-5">
    <div class="col">
    <button type="button" class="btn btn-success" >Resume</button>
    </div>
    <div class="col">
    <button type="button" class="btn btn-outline-warning" >Let's Connect</button>
    </div>
  </div>
</div>*/}
    </div> 
    <div className="col my-5 mx-5">
    
<h4>
Hey There, I'm Sushma, 
I am from Sangamner. I completed my BCA(Under Science) from Sangamner College , Sangamner in 2021, and currently, I'm pursuing  Msc.(Computer Application) at Modern College of Arts Commerce and Science ,Pune.
I am learing React js and Mongo DB and to developing some projects based on Mern      technology.

</h4>

    </div>
    </div>
  </div>
</div>

  )
}

export default About