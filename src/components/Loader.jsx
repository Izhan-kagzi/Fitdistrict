import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  )
}
