import React, { useState } from 'react'


export default function TextForm(props) {
    const uppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const lowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const cleartext = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const copy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const extraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const change = (event) => {
        console.log("on-change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={change} style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
 id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-1 mb-3" onClick={uppercase} >Convert to uppercase</button>
                <button className="btn btn-success mx-1 mb-3" onClick={lowercase} >Convert to lowecase</button>
                <button className="btn btn-success mx-1 mb-3" onClick={cleartext} >Clear text</button>
                <button className="btn btn-success mx-1 mb-3" onClick={copy} >Copy text</button>
                <button className="btn btn-success mx-1 mb-3" onClick={extraspace} >Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p><span className='text-danger'>{text.split(" ").length}</span> words and <span className='text-danger'>{text.length}</span> characters</p>
                <p><span className='text-danger'>{0.008 * text.split(" ").length}</span> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}
