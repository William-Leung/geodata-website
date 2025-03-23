import {useState, useEffect} from 'react'
export default function Air(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Air';
  });

  return(
    <>
    <title>Air</title>
    <h1>Air</h1>
    <p>focus and ... </p>
    </>
  )
}
