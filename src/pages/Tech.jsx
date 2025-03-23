import {useState, useEffect} from 'react'
export default function Tech(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Tech';
  });

  return(
    <>
    <title>Tech</title>
    <h1>Tech</h1>
    <p>focus and ... </p>
    </>
  )
}
