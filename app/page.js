"use client"
import React, { useState } from 'react' 


const page = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc ]=useState("")
   const [maintask,setMaintask ]=useState([''])
   const submithandle =(e)=>{
    e.preventDefault()
  setMaintask([...maintask,{title,desc}])
  setTitle("")
  setDesc("")  
 }
 const delethendler=(j)=>{
  let copy=[...maintask]
  copy.splice(j,1)
  setMaintask(copy)
 }
 let task = <h2>No task Availebale </h2>
if(maintask.length>0){
  task=maintask.map((t,j)=>{
return (
 <li key={j} className='flex items-center justify-between '> 
 <div className='flex  justify-between  mb-5 width-2/3' >
 <h5 className=' text-red-600 texy-2xl'>{t.title}</h5>
 <h5 className='text-green-400 text-xl'>{t.desc}</h5>
</div> 
<button className='bg-red-500 text-white  w-20 h-8 border-collapse brightness-150 rounded-xl ' onClick={()=>{
  delethendler(j)
}}>Delete</button>
</li>
)
});
}
  return (
      <>
   <h1 className='bg-black text-white text-center p-5 text-5xl  '>Enter Notes</h1>
   <form onSubmit={submithandle} >
  <input type="text"
  className='text-2xl border-zinc-500  border-2 m-8 px-4 py-2'
  placeholder='Enter the details'
  value={title}
  onChange={(e)=>{
    setTitle(e.target.value)
  }}/>

  <input type="text"
  className='text-2xl border-zinc-500  border-2 m-8 px-4 py-2 '
  placeholder='EnterThe discription'
  value={desc}
  onChange={(p)=>{
    setDesc(p.target.value)
  }}/>
  <button className='bg-black text-white w-20 h-8 border-collapse brightness-150 rounded-xl' >Add+</button>
 </form>
   <hr />
   <div className='p-8 bg-slate-300 h-auto'>
    {task}
   </div>
    </>
    )}
export default page
