import React, { useState } from 'react';
import axios from "axios"

const Child = () =>{
    const [giftName, setGiftName] = useState("")

    const childId = 2
    const handleClick = async (giftName, childId) => {
        const results = await axios.post("http://localhost:4000/giftchild/", {
            nameGift: giftName,
            status_id: 1,
            childId
        })
        console.log(results.data) 
    }

    return (
	  <div className="Child">
			<p>Child</p>
        <p>GiftName: {giftName}</p>
        <input type="text" name="giftName" value={giftName} onChange={(e) => setGiftName(e.target.value)  } />    
       
        <input type="button" value="Add Gift" onClick={() => handleClick(giftName, childId)  } />
      </div>
	)  
}

export default Child