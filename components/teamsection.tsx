'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundLines } from './ui/background-lines'
import { TeamTooltip } from './ui/TeamTooltip' 

const TeamSection = () => {
  return (
    <section className='relative py-16 md:py-24'>
      <BackgroundLines>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 text-primary'>Nuestro Equipo</h2>
          <p className='text-lg text-center mb-8 text-muted-foreground'>
            Contamos con un equipo diverso y talentoso, comprometido con la excelencia y la innovación.
          </p>
                <div className="flex items-center justify-center">
                  <TeamTooltip />
                </div>
        </motion.div>
      </BackgroundLines>
    </section>
  )
}

export default TeamSection

