"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimate } from 'framer-motion'
import LoadingButton from '@/components/LoadingButton';
   
  export default function Page() {
    const [fact, setFact] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        getNewFact() // triggers twice in dev mode
    }, [])
    
    function getNewFact() {
        if (isLoading) return;
        setLoading(true)
        fetch(process.env.NEXT_PUBLIC_FACT_API_URL)
        .then((res) => {
            if (!res.ok) return { fact: "Server Error" }
            else return res.json()
        })
        .catch((res) => {
            return { fact: "Network Error" }
        })
        .then((data) => {
            setFact(data.fact)
            animate(scope.current, { x: [0, -8, 0], y: [0, -15, 0], rotate: [-15, -30, -15] }, { duration: 0.4 })
            setLoading(false)
        })
    }

    return (
        <>
        <div className="h-full w-full flex justify-center items-center">
            <div className="rounded-lg w-[36rem] min-h-[15rem] px-16 pt-10 pb-8 shadow-2xl shadow-indigo-900/30 bg-white relative font-varela flex flex-col justify-between">
                <Image ref={scope} width={80} height={80} className="-rotate-[15deg] absolute -top-4 -left-4" src="/quotation_marks.png" alt="Quotation marks"></Image>
                <div className="text-indigo-900 grow flex justify-center items-center">
                    <AnimatePresence>
                        {isLoading ? "" : (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                {fact}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div>
                    <LoadingButton isLoading={isLoading} handleClick={getNewFact}></LoadingButton>
                </div>
            </div>
        </div>
        </>
    )
  }