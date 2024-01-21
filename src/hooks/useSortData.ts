import { useState, useMemo } from 'react'
import type { Country } from '../types/countries.model'

interface Props {
  data: Country[] | null
  fn?: (data: Country[]) => void
}

interface UseSortData {
  sortedData: Country[] | undefined
  setSortedKey: (key: string) => void
}

type SortKey = 'country' | 'capital' | 'population' | 'currency' | 'continent'

const useSortData = ({ data, fn }: Props): UseSortData => {
  const [sortKey, setSortKey] = useState<SortKey>('country')

  const setSortedKey = (key: string): void => {
    setSortKey(key as SortKey)
  }

  const sortedData = useMemo(() => {
    if (data === null || setSortKey === null) return
    const newCountries = [...data]
    console.log('key', sortKey)
    const sorted = newCountries?.sort((a, b) => String(a?.[sortKey]).localeCompare(String(b?.[sortKey])))
    fn?.(sorted)
    return sorted
  }, [sortKey])

  return {
    sortedData,
    setSortedKey
  }
}

export default useSortData
