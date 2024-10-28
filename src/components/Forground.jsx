import React, { useRef, useState } from 'react'
import Card from './Card'

const Forground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.', filesize: '.9mb', close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.', filesize: '.9mb', close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" }
        },
        {
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing.', filesize: '.9mb', close: true, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        }
    ];
    useState()
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full gap-10 flex flex flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} refrash={ref} />
            ))}
        </div>
    )
}

export default Forground