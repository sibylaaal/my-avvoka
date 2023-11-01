
'use client'

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditQuestions(props){

const [TextDoc, setTextDoc] = useState('');

const handleChange = (value) => {
  setTextDoc(value)
};
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8081/api/admin/update_question/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        
        
        questionText: e.target.question.value,
        valueType:e.target.type.value,
        texte:TextDoc,
      
      }),      headers: {
        'Content-Type': 'application/json',
      },
    })




      .then((res) => res)
      .then((res) => {
        console.log(res);
        props.questionss(true);
        props.Editquestionss(false);
        props.edited(true)
        // You can update the 'category' state here if needed.
      });
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
    ],
  };
  
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'link',
    'image',
  ];
  

    return(
        <>
        
        <form onSubmit={(e)=>handleSubmit(e)} className="bg-white p-5 -xl-xl ">
        <div className="flex aling-center   mt-5 mb-1 ">
        <span className='text-3xl font-bold text-mycolor py-5 mb-5'>Edit Question</span>



      
    
   
  
         </div>

  <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" htmlFor="grid-last-name">
    question 1
  </label>
  <div className=" space-between ">
    <input
    defaultValue={props.curent.questionText}
      className="appearance-none block mb-5 w-full  bg-gray-200 text-mycolor border border-gray-200 -xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
      type="text"
name="question"
      placeholder="How much children you have?"
    />
<div className="w-full  px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-mycolor text-xs font-bold mb-2" for="grid-first-name">
            Your Content
          </label>

          <ReactQuill defaultValue={props.curent.Texte} onChange={handleChange} modules={modules} formats={formats} />

          <div>
     
    </div>

        </div>
         <select name="type" className="block appearance-none mt-5 w-full bg-gray-200 border border-gray-200 text-mycolor py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
         <option value={props.curent.valueType}>{props.curent.valueType}</option>

              <option value={"Textaria"} >Paragraph</option>
              <option value={"input"} >text</option>
              <option value={"number"}>number</option>
            </select>
 

  </div>
  <div className='flex space-between'>
    <>
    <button      onClick={() => {
            props.questionss(true);
            props.Editquestionss(false);
          }}          className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >cancel</button>
    <button    type="submit"         className={`block w-full rounded-xl bg-mycolor mt-4 py-2 text-white font-semibold mb-2 m-2`}
    >save</button>
    </> 
    
      </div>
</form>

        </>
    )
}