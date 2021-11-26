import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table';

import './moviesTable.scss'

const MoviesTable = () => {
    const [movies, setMovies] = useState([]);

    const apiUrl = 'http://www.omdbapi.com/?s=star wars&apikey=cb8cebd0'
    
    useEffect(() => {
        (async () => {
          const result = await axios(`${apiUrl}`);
          setMovies(result.data);
        })();
      }, []);

    

    console.log(movies)

    const data = useMemo(() => 
        [
            {
                "id": 1,
                "title": "TITLE TEXT",
                "price": 10.512
            },
            {
                "id": 2,
                "title": "TITLE TEXT",
                "price": 10.522
            },
            {
                "id": 3,
                "title": "TITLE TEXT",
                "price": 10.52
            }

        ], []
    );

    const columns = useMemo(() => (
        [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Price",
                accessor: "price"
            },
            {
                Header: "Title",
                accessor: "title"
            },
        ]), [])

        const moviesData = useMemo(() => [...movies], [movies])

        const moviesColumns = useMemo(() => movies ? Object.keys(movies).map((key) => {
            return {
                Header: key, accessor: key
            }
        }) : [], [movies]);

    const tableInstance = useTable({ columns: moviesColumns, data: moviesData })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    // useEffect(() => {
    //     fetchMovies();
    // }, []);
   
    return (
        <div className="content-wrapper">
            <div className='content'>

                MOVIES

                <table className='content-table' {...getTableProps()}>
                    <thead>
                    {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {// Loop over the headers in each row
                        headerGroup.headers.map(column => (
                            // Apply the header cell props
                            <th {...column.getHeaderProps()}>
                            {// Render the header
                            column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                        // Apply the row props
                        <tr {...row.getRowProps()}>
                            {// Loop over the rows cells
                            row.cells.map(cell => {
                            // Apply the cell props
                            return (
                                <td {...cell.getCellProps()}>
                                {// Render the cell contents
                                cell.render('Cell')}
                                </td>
                            )
                            })}
                        </tr>
                        )
                    })}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default MoviesTable
