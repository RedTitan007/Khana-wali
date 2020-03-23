import React from 'react'
import './Search.css'


const search=({search,update,placeholder})=>(
    <div>
<input type="text" className="search-bar"  value={search} onChange={update} placeholder={placeholder}/>
<button type="submit" className="search-button">
{/* <i className="fas fa-search"/> */}
Search
</button>
</div>
)

export default search