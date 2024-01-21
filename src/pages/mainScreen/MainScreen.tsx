import useFetch from '../../hooks/useFectch'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setCountries, setSortedCountries, setLoading, setError } from '../../store/countries/slice'
import TableContainer from '../../components/tableContainer/TableContainer'
import GridElement from '../../components/gridElement/GridElement'
import Tag from '../../components/tag/Tag'
import useSortData from '../../hooks/useSortData'
import style from './mainScreenStyles.module.css'

const headsTable = ['Country', 'Capital', 'Population', 'Currency', 'Continent']
const apiURL = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,continents,population'

function MainScreen (): JSX.Element {
  const dispatch = useAppDispatch()
  const { countries, loading } = useAppSelector((state) => state.countries)

  useFetch({
    url: apiURL,
    setData: (data) => dispatch(setCountries(data)),
    setLoading: (loading) => dispatch(setLoading(loading)),
    setError: (error) => dispatch(setError(error))
  })

  const { setSortedKey } = useSortData({
    data: countries,
    fn: (sortedCountries) => dispatch(setSortedCountries(sortedCountries))
  })

  return (
        <section className={style.coutriesSection }>
          {
            loading !== null && <div>Loading...</div>
          }
          {countries !== null &&
            <TableContainer >
              {
                headsTable?.map((head) => {
                  return (
                        <GridElement key={head}>
                          <Tag className={style.headTags} onClick={() => { setSortedKey(head.toLowerCase()) }}>{head}</Tag>
                        </GridElement>
                  )
                })
              }

            </TableContainer>
          }
          { countries !== null &&
              countries?.map((country) => {
                return (
                      <TableContainer key={country?.country}>
                          <GridElement>
                            <Tag className={style.elemetTag}>Country:</Tag> {country?.country}
                          </GridElement>
                          <GridElement>
                            <Tag className={style.elemetTag}>Capital:</Tag> {country?.capital}
                          </GridElement>
                          <GridElement>
                            <Tag className={style.elemetTag}>Pupulation:</Tag> {country?.population}
                            </GridElement>
                          <GridElement>
                            <Tag className={style.elemetTag}>Currency:</Tag> {country?.currency}
                          </GridElement>
                          <GridElement>
                            <Tag className={style.elemetTag}>Continent:</Tag>{country?.continent}
                          </GridElement>
                      </TableContainer>
                )
              })
          }
        </section>
  )
}

export default MainScreen
