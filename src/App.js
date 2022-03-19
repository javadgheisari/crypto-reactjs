import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Search from './Search';

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

    
  return (
    <div className="bg-gray-800 text-white">
      <p className='text-center text-2xl py-5'>Coin List</p>
      <Search change={handleChange} />
      <div>
        <table className='m-auto container w-auto'>
          <thead>
              <tr>
                  <th className='w-44'> Rank </th>
                  <th className='w-44'> Img </th>
                  <th className='w-44'> Name </th>
                  <th className='w-44'> Price (USD)</th>
                  <th className='w-44'> 24h </th>
                  <th className='w-44'> 7d </th>
                  <th className='w-44'> 30d </th>
              </tr>
          </thead>
          <tbody>
            {filterCoins.map(coin=>{
              return(
                <Coin
                  rank={coin.market_cap_rank} 
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  image={coin.image}
                  priceChange24h={coin.price_change_percentage_24h_in_currency}
                  priceChange7d={coin.price_change_percentage_30d_in_currency}
                  priceChange30d={coin.price_change_percentage_7d_in_currency}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
