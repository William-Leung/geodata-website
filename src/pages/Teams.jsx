import {useState, useEffect} from 'react'
export default function Teams(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Teams';
  });

  return(
    <>
    <title>Teams</title>
    <h1>Teams</h1>
    <p>we have these!</p>
    </>
  )
}
