import React from 'react';
import Link from 'next/link';

const Id = async (props: any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.id}`);
const res = await url.json();
console.log(res);
  return (
    <div className='text-center text-2xl font-serif bg-slate-300 text-black py-20 m-20'>
     <span className=" h-20 w-20 flex items-center justify-center border-black border-2 rounded-full">{props.params.id}</span>
    <br/>
    <span className="underline">{res.title}</span>
    <br/>
    {res.url}
    <br/>
    {res.thumbnailUrl}

    <Link href='http://localhost:3000'><button className='bg-black text-white w-32 h-12 font-serif font-semibold text-lg rounded-lg m-10'>Go Back</button></Link>
    </div>
  )
}

export default Id