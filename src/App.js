import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Search from './Search';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import Home from './Home';
import Two from './Pages/Two';
import Three from './Pages/Three';
import Four from './Pages/Four';
import Five from './Pages/Five';

function App() {

  const[coins, setCoins] = useState([])
  const[search, setSearch] = useState("")

  useEffect(()=>{
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d"
      )

    .then(
      (res)=>{
        setCoins(res.data);
        console.log(res.data);
      }
    )
    .catch(
      (err)=>{
        console.log(err);
      }
    )
  }, []);

  const handleChange =(e)=>{
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter((coin)=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );

  // if (filterCoins.length =! 250){
  //   <Redirect
  // }

  console.log(filterCoins);
    
  return (
    <div className="bg-gray-800 text-white">
      <p className='text-center text-2xl py-5'>Coin List</p>
      <Search change={handleChange} />
      <div> 
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home filter={filterCoins} />} />
          <Route path="/2" element={<Two filter={filterCoins} />} />
          <Route path="/3" element={<Three filter={filterCoins} />} />
          <Route path="/4" element={<Four filter={filterCoins} />} />
          <Route path="/5" element={<Five filter={filterCoins} />} />
      </Routes>

        <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px mb-6 mx-10">
        {/* <li>
        <a href="#" className="block py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        </li> */}
        <li>
        <a className="block py-2 px-3 ml-0 leading-tight rounded-l-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><Link to='/'>1</Link></a>
        </li>
        <li>
        <a className="py-2 px-3 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><Link to='/2'>2</Link></a>
        </li>
        <li>
        <a className="z-10 py-2 px-3 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><Link to='/3'>3</Link></a>
        </li>
        <li>
        <a className="py-2 px-3 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><Link to='/4'>4</Link></a>
        </li>
        <li>
        <a className="block py-2 px-3 leading-tight rounded-r-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><Link to='/5'>5</Link></a>
        </li>
        {/* <li>
        <a href="#" className="block py-2 px-3 leading-tight rounded-r-lg border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        </li> */}
        </ul>
        </nav>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
