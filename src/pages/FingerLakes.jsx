import {useState, useEffect} from 'react'
export default function FingerLakes(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Finger Lakes`;
  });

  return(
    <>
    <h1>Current Project: Finger Lakes Forecasting via Tethersonde </h1>
    <p>The tethersonde balloon project involves using tethersondes —  radiosondes fixed to tethered balloons that move vertically up or down  at a fixed location — to measure upper air atmospheric data for the  Finger Lakes region. These soundings of the atmosphere will allow for a  more comprehensive understanding of the impacts of variable surface  friction on different atmospheric variables. This will improve weather  forecasting in Ithaca and the Finger Lakes region.
    The balloon will help to predict meteorological events such as wind  gust and precipitation type forecasts. Since the nearest regular  vertical sounding station, via weather balloon radiosonde, is located in  Buffalo, NY, there is a lack of accurate weather information of this  type for Ithaca. Not only can atmospheric conditions vary dramatically  in the distance between Ithaca and Buffalo, the influence that  topographical features such as the gorges, ridges, creeks and lakes that  make up Tompkins County cannot be demonstrated by soundings taken in  Buffalo. Measuring the local low-level environment in a variety of  conditions is scientifically important to understand how the near-Ithaca  boundary layer differs from that measured by the regular soundings of  Buffalo, aiding Ithaca area forecasting and scientific interests.
    A major focus of ours is studying the diurnal wind patterns of the  Finger Lakes region due to the lake source heating effect, including  plotting wind vector diagrams. The goal of this is to create a clear  presentation of these patterns, and eventually use the data from the  tethersonde to characterize the phenomenon in more detail. We have been  designing and printing parts which serve as safety and data reliability  components for the tethersonde. These include the 360° stabilizer which  makes sure that the sensor remains in the correct orientation during  launch, and the safety string guide to ensure that the safety string  does not touch the reel. In terms of circuitry, the sensor is fully  complete. The air team is currently working on linking the Raspberry Pi  module and the computer system to get functional remote sensing  abilities. We also need to design a casing for the sensor circuitry.</p>
    </>
  )
}
