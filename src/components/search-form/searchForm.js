import React from 'react'

const SearchForm = ({placeholder, value, onChange, icon}) => {
    return (
        <div>
            <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                            {icon ? <i className="fa fa-search" /> : null}
                        </button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
