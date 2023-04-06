import { useState } from 'react';

export default function JobCard({title,location,children}) {
  const [appCounter,setAppCounter] = useState(0);
  
  console.log(appCounter)
  return (
    <div>
        <h1>{title}</h1>
        <p>Location: {location}</p>
        <button onClick={() => setAppCounter(appCounter + 1)}>
          Apply now
        </button>

        {children}
    </div>
  )
}

//do something after a func comp has been rendered
//api, 
