import {useState, useEffect} from 'react'
export default function SnipeChallenge(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Snipe Challegne';
  });

  return(
    <>
    <title>Snipe Challenge</title>
    <h1>Snipes</h1>
    <p>focus and ... </p>
    </>
  )
}
