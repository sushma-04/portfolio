import React from 'react'
import "./Style.css";

const Home = () => {
  return (
    
    <div className="container im">
  <div className="row my-5 mx-5 ">
    <div className="col my-5 mx-5">
    <h1 >Hi ! I am Sushma Shelke</h1>
    <h4 >web developer</h4>

    {/* button div tag */}

    <div class="container ">
  <div class="row my-5">
    <div class="col">
    <button type="button" class="btn btn-outline-success btn1" ><a href="https://drive.google.com/drive/u/0/my-drive" className="a1" >Resume</a></button>
    </div>
    <div class="col">
    <button type="button" class="btn btn-outline-success btn1" ><a href ='./contact' className="a1">Let's Connect</a></button>
    </div>
  </div>
</div>
    </div>
    <div className="col my-5 mx-5">
    <img src="https://media0.giphy.com/media/SAOe8gWe93k26DdyGe/giphy.gif?cid=6c09b9526kv925xcl88vd2wneuhmhn7to2ybl7v2kpdrjcnf&rid=giphy.gif&ct=s.gif" className="d-block w-100" alt="..." />

    
      {/* <img src="https://cdn.dribbble.com/users/72227/screenshots/2595118/media/f082e58bc3e3e99f76f044f9ac4cab43.gif" className="d-block w-100" alt="..." /> */}
    </div>
    </div>
  </div>

  )
}

export default Home