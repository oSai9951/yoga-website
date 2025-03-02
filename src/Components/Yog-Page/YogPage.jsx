import React, { useEffect, useState } from 'react'
import YogPageStyle from "./YogPage.module.css"
import axios from "axios"
const YogPage = () => {
  const [poseData, setPoseData] = useState([])

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get("https://yoga-website-2a1bc-default-rtdb.firebaseio.com/poses.json");
      console.log(response.data);
      setPoseData(response.data);
    }
    fetchData();
  }, []);
  
  return (
    <main className={YogPageStyle.mainDiv}>
      <ul className={YogPageStyle.poseCard}> 
        {poseData.map(item => (
          <li key={item.id} className={YogPageStyle.poseData}>
            <div className={YogPageStyle.imageDiv}>
              <img src={item.url_png} placeholder={item.english_name} />
              <p>{item.english_name} pose</p>
            </div>

            <div>
              <ul>
                <li><span>English name: </span>{item.english_name}</li>
                <li><span>Sanskrit name: </span>{item.sanskrit_name}</li>
                <li><span>translation: </span>{item.translation_name}</li>
              </ul>
              <div>
                <p><span>Pose Description: </span>{item.pose_description}</p>
                <ol>
                  {item.pose_benefits
                    .split(".")
                    .filter(benefit => benefit.trim() !== "")
                    .map((benefit, index)=>(
                      <li key={index}>{benefit.trim()}.</li>
                    ))}
                </ol>
              </div>
            </div>
          </li>
        )
        )
        }
      </ul>
    </main>
  )
}

export default YogPage