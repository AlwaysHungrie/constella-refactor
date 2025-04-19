'use client'

import { useDialogStore } from '@/stores/dialogStore'
import React, { useCallback, useEffect, useRef } from 'react'

// Constants
const STAR_COUNT = {
  MOBILE: 75,
  DESKTOP: 250
}
const STAR_BASE_SPEED = {
  MOBILE: 1.6,
  DESKTOP: 0.8
}
const VANISHING_POINT_PERIOD = 1200
const PROJECTION_CONSTANT = 64
const MAX_Z_DISTANCE = 1000
const IS_MOBILE = typeof window !== 'undefined' && window.innerWidth < 768

interface Star {
  x: number
  y: number
  z: number
  size: number
}

// Memoized function to initialize stars
function initializeStars(width: number, height: number): Star[] {
  const starCount = IS_MOBILE ? STAR_COUNT.MOBILE : STAR_COUNT.DESKTOP
  return Array.from({ length: starCount }, () => ({
    x: (Math.random() - 0.5) * width * 8,
    y: (Math.random() - 0.5) * height * 8,
    z: Math.random() * MAX_Z_DISTANCE,
    size: Math.random() * 0.5 + 0.5,
  }))
}

function resetStar(star: Star, width: number, height: number): void {
  star.z = MAX_Z_DISTANCE
  star.x = (Math.random() - 0.5) * width * 4
  star.y = (Math.random() - 0.5) * height * 4
  star.size = Math.random() * 0.5 + 0.5
}

function drawStar(
  star: Star,
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  vanishX: number,
  vanishY: number
): void {
  const px = (star.x / star.z) * PROJECTION_CONSTANT + canvasWidth / vanishX
  const py = (star.y / star.z) * PROJECTION_CONSTANT + canvasHeight / vanishY
  const psize = (1 - star.z / MAX_Z_DISTANCE) * 3 * star.size

  // Only draw stars that are visible on screen (with a small buffer)
  if (
    px > -psize && 
    px < canvasWidth + psize && 
    py > -psize && 
    py < canvasHeight + psize
  ) {
    const gradient = ctx.createRadialGradient(px, py, 0, px, py, psize)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(px, py, psize, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function StarBackground() {
  const { isOpen } = useDialogStore()
  const isPaused = !!isOpen

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const vanishXRef = useRef(2)
  const vanishYRef = useRef(2)
  const starsRef = useRef<Star[]>([])
  const animationTimeRef = useRef(0)
  const lastTimeRef = useRef(0)
  const isPausedRef = useRef(isPaused)

  // Update the ref when the prop changes
  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  // Setup canvas once on mount
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false })
    if (!ctx) return
    
    ctxRef.current = ctx

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      dimensionsRef.current = { width: canvas.width, height: canvas.height }
      
      // Re-initialize stars on significant dimension changes
      if (starsRef.current.length === 0 || 
          Math.abs(dimensionsRef.current.width - canvas.width) > 200 ||
          Math.abs(dimensionsRef.current.height - canvas.height) > 200) {
        starsRef.current = initializeStars(canvas.width, canvas.height)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Initialize stars
    if (starsRef.current.length === 0) {
      starsRef.current = initializeStars(canvas.width, canvas.height)
    }

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  const updateVanishingPoints = useCallback(() => {
    vanishXRef.current = 2 + Math.sin(animationTimeRef.current / VANISHING_POINT_PERIOD) * 0.5
    vanishYRef.current = 2 + Math.cos((animationTimeRef.current / VANISHING_POINT_PERIOD) * 0.8) * 0.5
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return

    let rafId: number

    const animate = (currentTime: number) => {
      if (!isPausedRef.current && lastTimeRef.current) {
        const deltaTime = currentTime - lastTimeRef.current
        animationTimeRef.current += deltaTime
      }
      lastTimeRef.current = currentTime

      if (!isPausedRef.current) {
        updateVanishingPoints()
      }

      // Clear canvas with better performance than fillRect
      canvas.width = canvas.width

      // Draw all stars
      const { width, height } = dimensionsRef.current
      const stars = starsRef.current
      const vanishX = vanishXRef.current
      const vanishY = vanishYRef.current
      const baseSpeed = IS_MOBILE ? STAR_BASE_SPEED.MOBILE : STAR_BASE_SPEED.DESKTOP

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        
        // Update star position if not paused
        if (!isPausedRef.current) {
          const speed = baseSpeed * (1 + (MAX_Z_DISTANCE - star.z) / MAX_Z_DISTANCE)
          star.z -= speed
          
          if (star.z <= 0) {
            resetStar(star, width, height)
          }
        }

        // Draw the star
        drawStar(star, ctx, width, height, vanishX, vanishY)
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [updateVanishingPoints])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: -1,
      }}
    />
  )
}