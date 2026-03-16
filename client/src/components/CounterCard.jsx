import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function CounterCard({ target, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    if (isNaN(target)) {
      setCount(target)
      return
    }

    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [inView, target])

  return (
    <div className="impact-card" ref={ref}>
      <h2>{isNaN(target) ? count : count}{suffix}</h2>
      <p>{label}</p>
    </div>
  )
}

export default CounterCard