import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const card = ({ data, refrash }) => {
    return (
        <motion.div drag dragConstraints={refrash} whihileDrag="{{ scale: 1.05 }}"  dragTransition={{ bounceStiffness: 100, bounceDamping: 300 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900 text-white px-8 py-8 overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'> {data.desc}</p>

            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='flex justify-between aling-center px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
                        {data.close ? <IoIosClose/> : <LuDownload size="0.9em" color="white" />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-sky-500"} flex justify-center items-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )}
                
            </div>
        </motion.div>
    )
}
export default card
