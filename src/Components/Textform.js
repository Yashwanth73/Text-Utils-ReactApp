import React, { useState } from 'react'
import Description from './Description';

export default function Textform() {
    const [text, setText] = useState("");
    const noofWords = text.split(' ').filter(function (n) { return n !== '' }).length;
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const reverseText = () => {
        let arrText = text.split(" ");
        for (let i = 0; i < arrText.length; i++) {
            arrText[i] = arrText[i].split("").reverse().join("");
        }
        let newText = arrText.join(" ");
        setText(newText);
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
    }
    const downloadText = () => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "Websitename");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    const copyText = () => {
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        alert("Text Copied");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const convertToCapital = () => {
        const wordsarr = text.split(" ");
        for (var i = 0; i < wordsarr.length; i++) {
            wordsarr[i] = wordsarr[i].charAt(0).toUpperCase() + wordsarr[i].slice(1);
        }
        let newText = wordsarr.join(" ");
        setText(newText);
    }
    return (
        <div>

            <div className="container my-4">
                <h2>Enter Your Text Here</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={convertToUpper}>Convert To Upper Case</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={convertToLower}>Convert To Lower Case</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={convertToCapital}>Convert To Capital</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={reverseText}>Reverse Text</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
                    <button type="button" className="btn btn-warning mx-2" onClick={copyText}>Copy Text</button>
                    <button type="button" className="btn btn-warning mx-2" onClick={downloadText}>Download Text</button>

                </div>
                <h2>Your Text Summary</h2>
                <p>{noofWords} words and {text.length} characters and {text.length / 40} lines</p>
                <p>{noofWords * 0.008} minutes to read </p>
                <h2>Preview Text</h2>
                <p>{text}</p>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Is best-text-converter.xyz is a free tool?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Yes. It is a Free Tool.</strong> There is no limit to use it.                         </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
