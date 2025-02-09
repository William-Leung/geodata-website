import {useState, useEffect} from 'react'
export default function Home(){

  const[count, setCount] = useState(0)



  return(
    <>
    <div className="text-red-500 hover:text-blue-500 text-sm sm:text-3xl md:text-5xl lg:text-7xl">Hello World</div>
    </>
  )
}