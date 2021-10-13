import React from 'react'
import './Search.css'

const Search = ({change}) => {
    return (
        <React.Fragment>
            <form className='search-form'>
                <div className="input mb-8">
                    <input className="coin-input" onChange={change} placeholder='Search Coin' type='text' />
                </div>
            </form>
        </React.Fragment>
    )
}

export default Search
