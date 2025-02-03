"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                seturl("");
                setshorturl("");
                console.log(result);
                alert(result.message);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className='mx-auto max-w-xl bg-[#161b2a] my-16 p-12 rounded-lg flex flex-col gap-4 text-white shadow-2xl'>
            <h1 className='font-bold text-2xl p-6 text-[#00eaff]'>
                Generate Your Short URLs
            </h1>
            <div className='flex flex-col gap-8'>
                <input value={url} className='p-4 bg-[#1f2d3d] text-white focus:outline-[#00eaff] py-2 rounded-lg' type='text' placeholder='Enter Your URL' onChange={e => seturl(e.target.value)} />
                <input value={shorturl} className='p-4 bg-[#1f2d3d] text-white focus:outline-[#00eaff] py-2 rounded-lg' type='text' placeholder='Enter your preferred short URL text' onChange={e => setshorturl(e.target.value)} />
                <button onClick={generate} className='bg-[#007bff] hover:bg-[#0056b3] shadow-lg p-3 rounded-lg py-1 font-bold text-white transition duration-300'>Generate</button>
            </div>
            {generated && (
                <>
                    <div className='font-bold text-lg text-[#00eaff]'>Your Link:</div>
                    <code className='break-all text-gray-300'>
                        <Link target="_blank" href={generated} className='text-[#00eaff] hover:underline'>
                            {generated}
                        </Link>
                    </code>
                </>
            )}
        </div>
    );
};

export default Shorten;
