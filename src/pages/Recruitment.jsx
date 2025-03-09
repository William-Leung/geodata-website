import {useState, useEffect} from 'react'
export default function Recruitment(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Recruitment`;
  });

  return(
    <>
      <h1>recruitment :D</h1>
      <p> Thank you for your interest in CU Geodata! We recently began our recruitment process for the Spring 2025 semester! Below you can find a link to our team application, which includes a set of short questions to learn more about you. We also hold <a href="https://docs.google.com/spreadsheets/d/1tklDgxedBnjQK8MM15cmxKWhptDZjEs686E5T4I5IoE/edit?gid=1607338661#gid=1607338661" target="_blank" rel="noopener noreferrer" style={{ color: "blue",textDecoration: "underline"}}>coffee chats</a> if you want to learn more about us!

Please note that the General Project Team Application must be completed in addition to the CU GeoData Application. </p>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-hJH-No53xT1Wx4IZA_eUKRsOpr_6ME9ks5nx4YTBbquT0A/closedform" target="_blank" rel="noopener noreferrer" style={{ color: "blue",textDecoration: "underline"}}>CU GeoData Application Form</a>
      </p>
      <p>
        <a href="https://cornell.ca1.qualtrics.com/jfe/form/SV_cuXl2vYgb5sNPWS" target="_blank" rel="noopener noreferrer" style={{ color: "blue",textDecoration: "underline"}}>General Project Team Application </a>
      </p>
    </>
  )
}
