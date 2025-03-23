import {useState, useEffect} from 'react'
export default function Data(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Data';
  });

  return(
    <>
    <title>Data</title>
    <h1>Data</h1>
    <p>focus and ... </p>
    </>
  )
}
