import {useState, useEffect} from 'react'
export default function Water(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Water';
  });

  return(
    <>
    <title>Water</title>
    <h1>Water</h1>
    <p>focus and ... </p>
    </>
  )
}
