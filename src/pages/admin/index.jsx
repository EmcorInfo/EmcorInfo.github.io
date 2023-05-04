import React, { useState } from "react";
import CarouselFade from "../../components/carrocel/Carrocel.jsx";
import "./style.css";

export default function Adm() {
    const [imgFile, setImgFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [captionTitle, setCaptionTitle] = useState("");
    const [captionText, setCaptionText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", imgFile);

        fetch("/api/upload", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            const newItem = {
                img: data.url, // url da imagem enviada para o servidor
                alt: imgAlt,
                caption: {
                    title: captionTitle,
                    text: captionText,
                },
            };
            CarouselFade.addNewItem(newItem);
        });
    };

    const handleFileChange = (event) => {
        setImgFile(event.target.files[0]);
        setImgUrl(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <>
            <h1>Adicionar novo slide</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="imgFile">Enviar imagem:</label>
                    <input type="file" id="imgFile" accept="image/*" onChange={handleFileChange} />
                </div>
                <div>
                    <img src={imgUrl} alt="Preview" style={{ maxWidth: "100%", maxHeight: "300px" }} />
                </div>
                <div className="form-group">
                    <label htmlFor="imgAlt">Texto alternativo da imagem:</label>
                    <input type="text" id="imgAlt" value={imgAlt} onChange={(e) => setImgAlt(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="captionTitle">Título da descrição:</label>
                    <input type="text" id="captionTitle" value={captionTitle} onChange={(e) => setCaptionTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="captionText">Texto da descrição:</label>
                    <textarea id="captionText" value={captionText} onChange={(e) => setCaptionText(e.target.value)} />
                </div>
                <button className="form-group" type="submit">Adicionar slide</button>
            </form>
        </>
    );
}