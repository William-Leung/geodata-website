import {useState, useEffect} from 'react'
export default function Members(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Members`;
  });

  return(
    <>
      <h1>Members</h1>
      <p>Team Leads:</p>
      <p>Team Lead, Reserve, + photos</p>
      <p>SubTeam Leads:</p>
      <p>pictures!!</p>
    </>
  )
}