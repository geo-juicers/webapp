import { useEffect, useState } from "react";
import AnimateButton from "./AnimateButton.jsx";
import getTestAnimations from "./helper.js";

function App() {
  const [animations, setAnimations] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:8000/routes')
    .then((response) => response.json())
    .then((data) => {delete data.routes; setAnimations(data);})
    .catch(console.error);
  }, [])

  // useEffect(() => {
  //   setAnimations(getTestAnimations())
  // }, [])
  return (
    <>
    <div className='flex justify-center'>
      <u className='text-black m-10 text-6xl'>Map Animations</u>
    </div>
      { Object.entries(animations).map(([key, value]) => 
        <>
        <div key={key} className="border-2 mx-32 p-5 rounded-lg my-5">
          <u className="text-xl ">{key} Animations:</u>
            <div className="flex flex-wrap justify-start mx-32 my-5 gap-10">
              {
                value.map((item, i) => <AnimateButton key={i} categoryName = {key} animationName = {item} i={i} />)
              }
            </div>
        </div>
          
        </>    
       )
      }
    </>
  )
}

export default App
