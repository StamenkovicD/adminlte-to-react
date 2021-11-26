import React, {useState, useEffect, useMemo} from 'react'
import MoviesTable from '../../components/movies-table/moviesTable'
import axios from 'axios'

const Movies = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('Spiderman');
    const [search, setSearch] = useState('');

    // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=${query}`);
      setData(result.data);
      console.log(data)
    })();
  }, [query]);

  const columns = useMemo(
    () => [
        {
            // first group - TV Show
            Header: "TV Show",
            // First group columns
            columns: [
              {
                Header: "Name",
                accessor: "show.name"
              },
              {
                Header: "Type",
                accessor: "show.type"
              }
            ]
          },
          {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
              {
                Header: "Language",
                accessor: "show.language"
              },
              {
                Header: "Genre(s)",
                accessor: "show.genres"
              },
              {
                Header: "Runtime",
                accessor: "show.runtime"
              },
              {
                Header: "Status",
                accessor: "show.status"
              }
            ]
          }
    ],
    []
  );

  const updateSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    // e.preventDefault();
    setQuery(search);
    // setSearch('');
  }
  //Two Funcionst into one - Create new route for search
  const handleSubmit = (e) => {
    e.preventDefault()
    // setSearch('');
    getSearch();
  }

    return (
      <div>
          {/* <MoviesTable /> */}
          <div className="content-wrapper">
            <div className='content'>
              <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='serach-bar' 
                    value={search} 
                    onChange={updateSearch} 
                    placeholder='Try "Marvel"'>
                </input>
              </form>
              <MoviesTable columns={columns} data={data} />
            </div>
          </div>
      </div>
    )
}

export default Movies
