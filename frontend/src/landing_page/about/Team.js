import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center"> People </h1>
      </div>

      <div className="row p-5 text-muted" style={{lineHeight: '1.8', fontSize: '1.2em'}}>
        <div className="col-6 p-5 text-center">
           <img src="https://media.licdn.com/dms/image/v2/D4D03AQFErAwQdpGVRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720464005753?e=1764201600&v=beta&t=yYV1_7qwNxRCIUI6X2lbuenhUjFvNV6NSCJDDmnlZMw" alt="img" style={{borderRadius: '100%', width: '60%'}} />
           <h4 className='mt-5'> Ganesh Dandekar </h4>
           <h6> Software Developer</h6>
        </div>

        <div className="col-6 p-5">
  <p>
    Hi, I'm <strong>Ganesh Dandekar</strong> — a passionate Full Stack Developer who loves building 
    clean, scalable, and impactful web applications using modern technologies.
  </p>

  <p>
    From <a href="/about" style={{textDecoration: 'none'}}>e-commerce</a> to event management systems, 
    I focus on crafting seamless user experiences and efficient backend logic that bring ideas to life.
  </p>

  <p>
    Connect me: <a href="https://www.linkedin.com/in/ganesh-dandekar/" style={{textDecoration: 'none'}}>LinkedIn</a>
  </p>
</div>

      </div>
    </div>
     );
}

export default Team;