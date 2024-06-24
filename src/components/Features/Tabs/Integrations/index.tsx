'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import styles from './Integrations.module.css'

const options = ['IT', 'BBA']

export function Integrations() {
    const [selectedOption, setSelectedOption] = useState('IT')

    const handleOptionChange = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-6">Choose your program</h2>
            <div className="flex justify-center space-x-4 mb-8">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`px-4 py-2 rounded-md font-semibold ${
                            selectedOption === option
                                ? 'bg-secondary text-primary'
                                : 'bg-primary-foreground text-primary hover:bg-secondary hover:text-primary'
                        }`}
                        onClick={() => handleOptionChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                <div className={styles.responsiveIframeContainer}>
                    {selectedOption === 'IT' ? (
                        <iframe
                            src="https://app.box.com/embed/s/6jjiep0l1sgptw4u2vd7ffc18hyamqo8?sortColumn=date&view=list"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <iframe
                            src="https://app.box.com/embed/s/ueot6vufu4pb63vwvmfqk58g3pk3ehfv?sortColumn=date&view=list"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    )
}