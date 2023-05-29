import React, { useRef, useState } from 'react'

export default function Quote() {
    const [index,setIndex] = useState(0);
    const curr = useRef(0)
    const quotes = [
        'First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.',
        'Java is to JavaScript what car is to carpet. ',
        'Programs must be written for people to read, and only incidentally for machines to execute.',
        'You are my increment operator you make my value increase',
        'First, solve the problem. Then, write the code.',
        'The code you write makes you a programmer. The code you delete makes you a good one. ',
        'The best thing about a boolean is even if you are wrong, you are only off by a bit',
        'Why do programmers prefer dark mode? Because light attracts bugs.',
        'I have a joke on programming, but it only works on my computer.',
        'Software developers like to solve problems. If there are no problems available, they will create their own problems.'
    ];
    const handleClick = (e) =>{
        e.preventDefault();
        setIndex(Math.floor(10 * Math.random()))
        if(index==curr.current){
            handleClick()
        }else{
            curr.current = index;
        }
        console.log(index);
    }
  return (
    <>
        <p className='quote'>{quotes[index]}</p>
        <button onClick={handleClick}>Get another</button>
    </>
  )
}
