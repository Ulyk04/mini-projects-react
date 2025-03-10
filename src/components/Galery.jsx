import React from 'react'
import '../styles/galery.css'
import { useState } from 'react'

const Galery = () => {

    const[imageurl , setImageurl] = useState("");
    const[images , setImages] = useState([]);

    const addImage = () => {
        if(imageurl.trim() === ""){
            alert("The input line require")
            return;
        }
        setImages([... images , imageurl])
        setImageurl("")
    }

    const deleteImage = (index) => {
        const update = images.filter((_ , i) => i !== index);
        setImages(update);
    }

  return (
    <div className='galery-page'>

        <article className="title-galery">
            <h1>Galery with images </h1>
        </article>

        <article className="desc-galery">
            <input type="text"
            placeholder='Add image URL'
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}/>
            <button onClick={addImage} > ADD </button>

            <div className="src-galery" style={{display: "flex" , flexWrap:"wrap", marginTop: "20px"}} >
                {images.map((url , index) => (
                    <div className="image-galery" key={index}  style={{margin: "10px", textAlign:"center"}} >
                        <img src={url} alt=""  style={{
                            width: "10%" , objectFit: "cover"
                        }} />

                        <button onClick={() => deleteImage(index)} >Remove</button>
                    </div>
                ))}
            </div>
        </article>


    </div>
  )
}

export default Galery