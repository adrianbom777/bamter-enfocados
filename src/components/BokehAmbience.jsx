import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const THROTTLE_MS = 90
const MAX_PARTICLES = 15

function CursorBokeh() {
  const [particles, setParticles] = useState([])
  const lastSpawn = useRef(0)
  const prefersReduced = useReducedMotion()

  const handleMove = useCallback((e) => {
    const now = Date.now()
    if (now - lastSpawn.current < THROTTLE_MS) return
    lastSpawn.current = now

    const size = 8 + Math.random() * 22
    const isBlue = Math.random() > 0.38

    setParticles(prev => {
      const next = [...prev, {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size,
        color: isBlue ? 'var(--blue)' : 'var(--red)',
      }]
      return next.length > MAX_PARTICLES ? next.slice(-MAX_PARTICLES) : next
    })
  }, [])

  useEffect(() => {
    if (prefersReduced) return
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [handleMove, prefersReduced])

  if (prefersReduced) return null

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}
    >
      <AnimatePresence>
        {particles.map(p => (
          <motion.span
            key={p.id}
            style={{
              position: 'absolute',
              left: p.x - p.size / 2,
              top: p.y - p.size / 2,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: p.color,
              filter: `blur(${p.size * 0.45}px)`,
              pointerEvents: 'none',
            }}
            initial={{ opacity: 0.55, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            onAnimationComplete={() =>
              setParticles(prev => prev.filter(x => x.id !== p.id))
            }
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

function AmbientBokeh() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return null
  return (
    <div className="bokeh-ambient" aria-hidden="true">
      <span className="bokeh-b1" />
      <span className="bokeh-b2" />
      <span className="bokeh-b3" />
      <span className="bokeh-b4" />
      <span className="bokeh-b5" />
      <span className="bokeh-b6" />
    </div>
  )
}

export default function BokehAmbience() {
  return (
    <>
      <AmbientBokeh />
      <CursorBokeh />
    </>
  )
}
