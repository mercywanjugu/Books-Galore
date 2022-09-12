import React from 'react'
import "../index.css"



function About() {
    return (
      // <div className="card">
      //   <div className='About'>
      //   <h1 className="header">Making Learning Easier </h1>
      //   <img src="https://cdn.pixabay.com/photo/2013/03/15/07/23/flea-market-93960_960_720.jpg" alt=""></img>
      //   <p>This is an application where books can be posted according their authors and their categories.
      //   </p>
      //   </div>
      // </div>
      <div class="grid md:grid-cols-2 gap-1 place-content-center">
      <div className="hidden md:block my-10 md:ml-10 shadow rounded-sm">
        <img src="https://cdn.pixabay.com/photo/2013/03/15/07/23/flea-market-93960_960_720.jpg" alt=""></img>
           
      </div>
      <form className="my-10 md:mr-10 bg-white shadow rounded-sm px-10 py-5">
     <p className='paragraph'>This is an application where books can be posted according their authors ,genres and gives users 
     the freedom to leave a review on books posted.what can be more fantastic than reading books of one's choice.
     You only need a smart phone or a computer and wifi/bundles to access our fantastic platform.</p>

      </form>
    </div>
    )
  }
  
export default About;