import React from "react";
import Link from "next/link";

export default async function Home() {
const url = await fetch('https://jsonplaceholder.typicode.com/photos');
const res = await url.json();
console.log(res);
return(
  <main>
    /* eslint-disable react/jsx-key */
    {res.map((photo: any, index: number) => (
      <Link href={`${photo.id}`}>
      <div key={index} className="font-serif text-xl underline bg-red-100">
        
        {photo.id}-&nbsp;
        {photo.title} &nbsp;
        {photo.url} &nbsp;
        {photo.thumbnailUrl}
          
      </div>
      </Link>
    ))}
    /* eslint-enable react/jsx-key */
  </main>
)}
