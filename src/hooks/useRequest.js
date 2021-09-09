import { useEffect, useState } from 'react'

export default function useRequest (request) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      request()
        .then(response => setData(response?.data))
        .catch(e => setError(e.message))
        .finally(() => setLoading(false))

    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, isLoading, error]
}
