'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Reports } from './Tabs/Reports'
import { Classifiers } from './Tabs/Classifiers'
import { Integrations } from './Tabs/Integrations'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

const tabs = [
    {
        name: 'Islington College',
        content: Integrations,
        header: 'Islington College Coursework sample'
    },
    {
        name: 'Herald',
        content: Reports,
        header: 'Herald College Coursework sample'
    },
    {
        name: 'ISMT',
        content: Classifiers,
        header: 'ISMT College Coursework sample'
    }
]

export function FeaturesSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref)
    const [activeTab, setActiveTab] = useState('Islington College')

    return (
        <div
            ref={ref}
            className={`min-h-screen flex flex-col justify-center items-center px-4 pt-3 ${
                isInView ? 'fade-in' : ''
            }`}
        >
            <h6 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {tabs.find((tab) => tab.name === activeTab)?.header}
            </h6>
            <p className="mt-6 text-sm"></p>
            <Tabs defaultValue="Islington College" className="w-screen md:w-[800px] min-h-[450px]">
                <TabsList className="flex flex-row w-full grid-cols-3 space-x-3 p-2 bg-transparent">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.name}
                            value={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`relative rounded-full px-3 py-1.5 text-sm font-medium outline-primary-foreground transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: 'transparent'
                            }}
                        >
                            {tab.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className={`flex flex-col space-y-2 ${isInView ? 'fade-in' : ''}`}>
                    {tabs.map((tab) => (
                        <TabsContent key={tab.name} value={tab.name}>
                            <div className="h-[600px] overflow-y-auto m-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{tab.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <tab.content />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>

            <div className="mt-16 w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-center mb-8">Connect With Us</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    <Link
                        href="https://discord.gg/your-discord-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 group-hover:shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Discord</h3>
                            <p className="text-gray-600 dark:text-gray-400">Join our community chat</p>
                        </div>
                    </Link>

                    <Link
                        href="https://www.instagram.com/your-instagram-handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group"
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 group-hover:shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Instagram</h3>
                            <p className="text-gray-600 dark:text-gray-400">Follow for updates</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}