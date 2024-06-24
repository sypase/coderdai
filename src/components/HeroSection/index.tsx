'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPython, FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava, FaDocker } from 'react-icons/fa'
import { SiDjango, SiDotnet } from 'react-icons/si'

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
}

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
}

export function HeroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref) as boolean

    return (
        <motion.section className="w-full pt-[220px] pb-[200px] md:pt-[250px]">
            <motion.div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center h-full justify-center">
                    <motion.div
                        initial="hidden"
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        ref={ref}
                        animate={isInView ? 'show' : 'hidden'}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-2"
                    >
                        <h1 className="font-bold tracking-tighter text-4xl md:text-5xl">
                            We help students with any problems in their{' '}
                            <span className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] dark:from-[#7928CA] dark:to-[#FF0080] bg-clip-text text-transparent">
                                coursework
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[700px] md:text-xl">
                            Join our Discord community and open a ticket for any inquiries or assistance you need. We're here to help!
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        transition={{ duration: 0.6 }}
                        animate={isInView ? 'show' : 'hidden'}
                        viewport={{ once: true }}
                        className="w-full max-w-sm space-y-2"
                    >
                        <div className="flex flex-row md:flex-row md:space-x-2 md:space-y-0 justify-center space-x-2">
                            <Link href="https://discord.gg/qCqVHMsBB9">
                                <Button className="bg-secondary text-primary border-2">Join Discord coderdai</Button>
                            </Link>
                            <Link href="/services">
                                <Button className="border">Our services</Button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        transition={{ duration: 0.8 }}
                        animate={isInView ? 'show' : 'hidden'}
                        viewport={{ once: true }}
                        className="mt-8"
                    >
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
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        transition={{ duration: 1 }}
                        animate={isInView ? 'show' : 'hidden'}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <p className="text-lg font-semibold mb-6">Students of supported colleges:</p>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <div className="flex flex-col items-center">
                                <Image 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqV7cvIj5Y7nwEdhJAmg366jMiAJcTHYM9mg&s" 
                                    alt="Islington College" 
                                    width={100} 
                                    height={100}
                                    className="rounded-full shadow-lg"
                                />
                                <p className="mt-2 text-sm font-medium">Islington College</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdgYSA3pDRxarkQG4g65MqwHfQBRh3povpA&s" 
                                    alt="Herald College" 
                                    width={100} 
                                    height={100}
                                    className="rounded-full shadow-lg"
                                />
                                <p className="mt-2 text-sm font-medium">Herald College</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image 
                                    src="https://theedunepal.ap-south-1.linodeobjects.com/bachelorfairuploads/clients/ismt/logo/130706595-3806114359408336-763145770805229167-n_1630042139.png" 
                                    alt="ISMT College" 
                                    width={100} 
                                    height={100}
                                    className="rounded-full shadow-lg"
                                />
                                <p className="mt-2 text-sm font-medium">ISMT College</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">and more...</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}