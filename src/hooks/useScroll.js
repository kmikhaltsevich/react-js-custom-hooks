import { useEffect, useRef } from 'react'

export default function useScroll (parentRef, childRef, callback) {
  const observer = useRef()

  useEffect(() => {
    const options = { root: parentRef?.current, rootMargin: '0px', threshold: 0 }
    const cb = ([target]) => {
      if (target.isIntersecting) {
        callback()
      }
    }

    observer.current = new IntersectionObserver(cb, options)
    observer.current.observe(childRef.current)

    return function () {
      observer.current.unobserve(childRef.current)
    }
  }, [callback])
}
