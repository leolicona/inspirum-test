import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Countries, Country } from '../../types/countries.model'

type Error = { error: boolean, message: string } | null

interface CountriesState {
  countries: Country[] | null
  loading: boolean
  error: Error
}

const initialState: CountriesState = {
  countries: null,
  loading: false,
  error: null
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Countries[]>) => {
      const flatData = action.payload?.map((country: Countries): Country => {
        return {
          country: country?.name?.common,
          capital: country?.capital?.[0],
          population: country?.population,
          currency: Object.entries(country?.currencies)?.[0]?.[0],
          continent: country?.continents?.[0]
        }
      })
      state.countries = flatData
    },
    setSortedCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload
    }
  }
})

export const { setCountries, setSortedCountries, setLoading, setError } = countriesSlice.actions
export default countriesSlice.reducer
