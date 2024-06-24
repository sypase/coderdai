import React from 'react'
import { FaPython, FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava, FaDocker } from 'react-icons/fa'
import { SiDjango, SiDotnet } from 'react-icons/si'

const IconsSection = React.memo(function IconsSection() {
    return (
        <div className="mt-8">
            <p className="text-lg font-semibold mb-4">We specialize in:</p>
            <div className="flex flex-wrap justify-center space-x-4">
                <FaPython className="text-4xl" />
                <FaHtml5 className="text-4xl" />
                <FaCss3Alt className="text-4xl" />
                <SiDjango className="text-4xl" />
                <FaPhp className="text-4xl" />
                <FaJs className="text-4xl" />
                <FaJava className="text-4xl" />
                <SiDotnet className="text-4xl" />
                <FaDocker className="text-4xl" />
            </div>
        </div>
    )
})

export default IconsSection