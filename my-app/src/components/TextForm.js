import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    // Uppercase covert
    const handleUpClick = () => {
        console.log("Uppercasen was clicked!.." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!..", "success");
    }
    // lowercase covert

    const handleLoClick = () => {
        console.log("lowercase was clicked!.." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!..", "success");

    }


    // Clear Text
    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Clear Text !..", "success");

    }

    // capitalized Text
    const handleCapitalClick = () => {
        console.log("Capitalized Case was clicked!..");
        let newText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalized Text!..", "success");

    }

    // inverse Text
    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Converted to Inverse!..", "success");

    };

    // Copy Text
    const handleCopy = () => {
        console.log("I am Copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy Text!..", "success");
        
    }

    //  Extra Spaces
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove to Extra Space!..", "success");

    }



    const handleOnChange = (event) => {
        console.log("on Change!..");
        setText(event.target.value);
    }






    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8" placeholder='Enter your Text to covert Uppercase end lowercase' ></textarea>
                </div>
                <button className="btn btn-outline-secondary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleCapitalClick}>Capitalized Text</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleinverseclick}>Inverse Text</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-outline-secondary mx-2" onClick={handleExtraSpace}>Remove Extra Space </button>

            </div>

            <div className='container my-4 mb-5' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <div className='d-flex'>
                    <div>
                        <h2>Your Text Summary</h2>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                    </div>
                    <div className='mx-4'>
                        <h2>Preview</h2>
                        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                    </div>
                </div>

            </div>
        </>

    )
}
