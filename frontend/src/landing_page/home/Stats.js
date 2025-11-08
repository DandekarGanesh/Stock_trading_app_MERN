import React from 'react';

function Stats() {
    return (  
        <div className="container p-3">
            <div className="row p-5">

                <div className="col-6 p-5">

                    <h1 className='fs-2 mb-5'> Trust with confidence </h1>

                    <h2 className='fs-4'> Customer First Always </h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust stock broker with 3.5 lakh crore worth of equity investments. </p>

                    <h2 className='fs-4'> No spam or gimmiks  </h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust stock broker with 3.5 lakh crore worth of equity investments. </p>

                    <h2 className='fs-4'> The stock brocker universe  </h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust stock broker with 3.5 lakh crore worth of equity investments. </p>

                    <h2 className='fs-4'> Do better with money </h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust stock broker with 3.5 lakh crore worth of equity investments. </p>

                </div>

                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="img" style={{width: '90%'}} />
                    <div className='text-center'>
                        <a href="" className='mx-5' style={{textDecoration: 'none'}}>Explore our products <i className='fa fa-long-arrow-right'></i> </a>
                        <a href="" style={{textDecoration: 'none'}} >Try kite demo <i className='fa fa-long-arrow-right'></i> </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;