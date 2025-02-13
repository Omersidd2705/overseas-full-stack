import React, {useState,useEffect} from 'react';

function Findcollege() {
const images =[
    "/slides/first-slide.svg",
    "/slides/second-slide.svg",
    "/slides/third-slide.svg"
];
const[currentIndex,setCurrentIndex]=useState(0);
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
}, [images.length]);
    return (
        <div style={{ display: 'flex', flexDirection: 'row',fontFamily: 'Saywhat', fontWeight: '500' }}>
        <li style={{ listStyleType: 'none', marginRight: '200px',backgroundColor:'rgb(209, 94, 9)',bordersize:'100px',fontFamily: 'Saywhat', fontWeight: '500' }}>
            <h1>Book your 1-1 call with Experts</h1>
            <div className="slideshow-container" >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="mySlides fade"
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <img src={image} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </li>
        <li style={{ listStyleType: 'none', marginRight: '10px',alignContent:'right' }}>
            <div className="h-full bg-white sm:px-12 sm:pt-[51px] design:px-16 2xl:px-20 hd:px-40 rounded-t-xl sm:rounded-xl">
           <label htmlFor="" style={{fontSize: '30px',}}> Degree</label>
           <li>
           <input type="text" placeholder='Degree' style={{fontSize: '30px',margin:'0px 0px 10px 0px'}} />
           </li>
           <li>
           <label htmlFor="" className="emailId" style={{fontSize: '30px',}}>EmailId</label>
           </li>
          <li>
           <input type="text" placeholder='Emailid' style={{fontSize: '30px',margin:'0px 0px 10px 0px'}} />
          </li>
          <li>
           <label htmlFor="" className="emailId" style={{fontSize: '30px',}} >Mobile</label>
           
           <li>
            <input type="text" placeholder=' +91(Mobilenumber)' style={{fontSize: '30px',margin:'0px 0px 10px 0px'}} />

            </li>
          </li>
          <li>
  <label htmlFor="country" className="universities" style={{fontSize: '30px',margin:'0px 0px 10px 0px',fontFamily: 'Saywhat', fontWeight: '500'}}>Universities</label>
  <select id="country" name="country" style={{fontSize: '30px',margin:'0px 0px 10px 0px',fontFamily: 'Saywhat', fontWeight: '500'}}>
    <option value="australia">Select</option>
    <option value="australia">Australia</option>
    <option value="canada">Canada</option>
    <option value="usa">USA</option>
  </select>
</li>

           <button style={{
  color: 'white',
  fontSize: '30px',
  backgroundColor: 'rgb(209, 94, 9)',
  padding: '14px 20px',
  width: '100%',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Saywhat', fontWeight: '500'
}}> Book a slot</button>
            </div>
        </li>
    </div>
)
}

export default Findcollege
