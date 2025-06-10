import {useState, useEffect} from 'react'
import './Base.css';
import './Recruitment.css';
import teamPhoto from '../assets/images/teamphoto.png';
export default function Recruitment(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Recruitment`;
  });

  return(
    <>
    <div className= 'page'>
      <h1 className='titleHeader'>Recruitment</h1>
      <p>Thank you for your interest in CU Geodata! We recently began our recruitment process for the Spring 2025 semester! Below you can find a link to our team application, which includes a set of short questions to learn more about you. We also hold <a href="https://docs.google.com/spreadsheets/d/1tklDgxedBnjQK8MM15cmxKWhptDZjEs686E5T4I5IoE/edit?gid=1607338661#gid=1607338661" target="_blank" rel="noopener noreferrer">coffee chats</a> if you want to learn more about us!
        Please note that the 
        <b className = 'gpta'> General Project Team Application </b> 
        must be completed in addition to the CU GeoData Application.
      </p>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-hJH-No53xT1Wx4IZA_eUKRsOpr_6ME9ks5nx4YTBbquT0A/closedform" target="_blank" rel="noopener noreferrer">CU GeoData Application Form</a>
      </p>
      <p>
        <a href="https://cornell.ca1.qualtrics.com/jfe/form/SV_cuXl2vYgb5sNPWS" target="_blank" rel="noopener noreferrer" >General Project Team Application </a>
      </p>
        <img src={teamPhoto} alt={'CUGeoData Spring \'25 Team Photo'} className="teamPhoto"></img>
      </div>
    </>
  )
}
