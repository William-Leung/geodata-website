import {useState, useEffect} from 'react'
export default function Home(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Home`;
  });

  return(
    <>
      <h1>GeoData Homepage</h1>
      <p> We perform ground-breaking research on local environments and ecosystems </p>

      <p> As the Department of Earth and Atmospheric Science’s only student project team, we have the unique ability to leverage EAS resources and support combined with private funding to perform student-led research in the College of Engineering’s Project Team Program.</p>


      <p> Our Organization </p>
      <p> Find out about our mission, impact, and leadership structure. </p>


    </>
  )
}
