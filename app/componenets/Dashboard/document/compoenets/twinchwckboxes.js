'use client'

import { useState } from "react";



export default function TwinBoxesCheck(props){




return(
    <>
    <label htmlFor="entry" className="block text-gray-700 text-sm lg:text-base font-semibold mb-2">
<div className="text-2xl text-gray-800 font-bold text-center">{props.question}</div>

</label> <div className="w-full grixx">
    <div className="inline-block radio">
      <input
        name="data2"
        type="radio"
        id="B1"
        hidden="hidden"
        value={props.value1}
        onChange={props.functionn}      />
      <label
        htmlFor="B1"
        className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 mr-10"
      >




<p className="iconL">{props.value1}</p>
      </label>
    </div>
    <div className="inline-block radio">
      <input
        name="data2"
        type="radio"
        id="D1"
        hidden="data"
        value={props.value2}
        onChange={props.functionn}      />
      <label
        htmlFor="D1"
        className="px-2 py-4 rounded-lg flex p-5 text-xl font-bold w-60 h-60 lg:w-140 lg:h-140 lg:ml-20"
      >

<p className="iconL">{props.value2} </p>
</label>
    </div>
  </div>
  </>
)



}