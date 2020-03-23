import React from 'react'
import './search-filter.css'

const searchfilter=({filterlogic})=>(
<div>
<ul className="filters">
<li className="filter" onClick={filterlogic}>
    Chapathi
</li>
<li className="filter" onClick={filterlogic}>
    Paratha
</li>
<li className="filter" onClick={filterlogic}>
    Egg
</li>
<li className="filter" onClick={filterlogic}>
    Pasta
</li>
<li className="filter" onClick={filterlogic}>
    Soup
</li>
<li className="filter" onClick={filterlogic}>
    Dessert
</li>
<li className="filter" onClick={filterlogic}>
    Pizza
</li>
<li className="filter" onClick={filterlogic}>
    Salad
</li>
<li className="filter" onClick={filterlogic}>
    Bonda
</li>
</ul>
</div>
)

export default searchfilter