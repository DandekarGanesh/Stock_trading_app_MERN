import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  <div className="container mt-5">
    <div class="row">

        <div className="col-6 p-5 mt-5">
            <h1> {productName} </h1>
            <p> {productDescription} </p>

            <div>
            <a href={tryDemo} style={{textDecoration: 'none', color: 'black'}}>Learn more <i className='fa fa-long-arrow-right'></i> </a>
            </div>

        </div>

         <div className="col-6">
            <img src={imageUrl} alt="" />
        </div>
    </div>
  </div>
)}

export default RightSection;
