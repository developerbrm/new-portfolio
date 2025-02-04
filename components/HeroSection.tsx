'use client'

import ParticlesComp from '@/components/Particles'
import useIntersectionObserver from '@/hooks/useInterSectionObserver'
import { useRef, useState } from 'react'

const HeroSection = () => {
  const obeserverRef = useRef<HTMLDivElement>(null)
  const [showParticles, setShowParticles] = useState(false)

  useIntersectionObserver({
    obeserverRef,
    onObservationChange(observer, entry) {
      setShowParticles(entry.intersectionRatio > 0.6)
    },
  })

  return (
    <>
      <section
        ref={obeserverRef}
        className="h-screen w-full bg-linear-to-r from-indigo-400/90 to-indigo-600/90"
      >
        <div className="grid h-screen place-content-center text-white">
          <h1 className="text-6xl font-black">Braham Prakash</h1>

          <p className="mt-2 max-w-prose text-3xl font-semibold">
            I am a software developer and I know FrontEnd Development
          </p>
        </div>
      </section>

      <div
        className={`ease pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000 ${showParticles ? 'opacity-100' : 'opacity-0'}`}
      >
        <ParticlesComp />
      </div>
    </>
  )
}

export default HeroSection
