import React, { Component, useState, useRef } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import JoditEditor from "jodit-react";
import Calender from './calender';
import fire from './fire';
import {v4 as uuid} from 'uuid';

const AddArt = () => {
    const [title, setTitle] = useState("");
    const [by, setBy] = useState("");
    const editor = useRef(null)
    const [content, setContent] = useState('');
    

    const Upload = async (e) => {
        const file = e.target.files[0];
        const id = uuid();
        const storageRef = fire.storage().ref('images').child(id);
        const imageRef = fire.database().ref('images').child('list');      
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url) => {
        imageRef.push(url);
      });
    };

    const onSubmit = e => { 
       fire.firestore()
       .collection('data')
       .add({
           Title : title,
           By: by
       }).then(res => {        
           console.clear();
           console.log(res);
           alert('Success');
       }).catch(err => {
           alert('error');
       })

       e.preventDefault();
    }

    const config = { 
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    console.log(title);

    return(
        <form classname="box"  class="container border py-3 bg-light px-5">
        <label>Title: </label><br/>
        <input class="mb-3 w-75" 
            value={title}
            onChange={e => setTitle(e.target.value)}/>
        <br/>
        <label>By: </label><br/>
        <input  class="mb-3 w-75"
            value={by}
            onChange={e => setBy(e.target.value)}
        /><br/>
        <label>Date: </label><br/>
        <Calender/><br/><br/>        
        <input type="file" accept="image/*" onChange={Upload} />
      <button onClick={Upload}>Upload</button><br/><br/>
        <label>Detail: </label><br/>
        <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />       
        <button type="button" class="btn btn-outline-secondary mt-2" onClick={onSubmit}>Submit</button>
        </form>
    )
}
export default AddArt;