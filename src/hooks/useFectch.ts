import { useEffect } from 'react'

interface FetchParams {
  url: string
  params?: RequestInit
}

interface Props extends FetchParams {
  setData: (data: []) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: { error: boolean, message: string }) => void
}

interface UseFetch {
  fetchAPI: ({ url, params }: FetchParams) => void
}
export default function useFetch ({ url, params, setData, setLoading, setError }: Props): UseFetch {
  useEffect(() => {
    setLoading(true)
    fetchAPI({ url, params })
  }, [])

  const fetchAPI = ({ url, params }: FetchParams): void => {
    fetch(url, params)
      .then(async (response) => await response.json())
      .then((data) => {
        setData(data)
      })
      .then(() => { setLoading(false) })
      .catch((error) => {
        setError({ error: true, message: error.message })
        setLoading(false)
      })
  }
  return {
    fetchAPI
  }
}
