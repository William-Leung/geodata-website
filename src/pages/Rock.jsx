import {useState, useEffect} from 'react'
export default function Rock(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Rock';
  });

  return(
    <>
    <title>Rock</title>
    <h1>Rock</h1>
    <p>focus and ... </p>
    </>
  )
}
