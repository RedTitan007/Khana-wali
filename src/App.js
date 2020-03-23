import React, {useState,useEffect} from 'react';
import './App.css';
import Recipe from './Components/Recipe/recipe'
import SearchBox from './Components/Search-box/Search-Box'
import SearchFilter from './Components/Search-filter/search-filter'


const App=()=>{
const APP_ID='c2b98cb7'
const API_KEY='f0869bf01680a8472affea83a20507fa'

const[recipes,setRecipes]=useState([])
const[search,setSearch]=useState('')
const[query,setQuery]=useState('chicken')

useEffect(()=>{
getRecipe()
},[query])

const getRecipe=async ()=>{///external data requires some time we are not aware of when it will come so we have to use asynch and await
  const respone=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
 const data=await respone.json()
 setRecipes(data.hits)
 console.log(data.hits)
}

const UpDateSearch=e=>{
  setSearch(e.target.value)//INTIALLY EMPTY AFTER START ENTERING IT WILL SET THE VALUE IN SEARCHBOX
}
const getSearch=e=>{
  e.preventDefault()//Prevent page refresh
  setQuery(search)
}
const filterlogic=e=>{
e.target.classList.toggle('active-filter')
const li=e.target
if(li.classList.contains('active-filter')){
  setQuery(li.innerText)
}
else{
  setQuery('')
}
}

return (
      <div className="App">
        <header className="App-header">
          <h1><a>Khana</a><span>-Wali</span></h1>
        </header>

        <form onSubmit={getSearch} className="search-form">
    <SearchBox update={UpDateSearch} placeholder="Search here Buddy"/>
        </form>

       <div className="search-filter">
<SearchFilter filterlogic={filterlogic}/>
       </div>

        <div className="recipes">
        {
          recipes.map(recipe=>(
             <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/> 
          ))     
        }
        </div>

      </div>
    );
  }
export default App




















//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1><a>Khana</a><span>-Wali</span></h1>
//         </header>
//         <Form getRecipe={this.getRecipe}/>
//       </div>
//     );
//   }
// }