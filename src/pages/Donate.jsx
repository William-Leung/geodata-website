import {useState, useEffect} from 'react'
export default function Donate(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Donate Page`;
  });

  return(
    <>
      <h1>Donate</h1>
      <p>please give us money</p>
    </>
  )
}