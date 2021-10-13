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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d"
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
    <div className="site-style">
      <p className='header-coin'>Coin List</p>
      <Search change={handleChange} />
      <div>
        <table className='m-auto'>
          <thead>
              <tr>
                  <th className='w-1/6'> Img </th>
                  <th className='w-1/6'> Name </th>
                  <th className='w-1/6'> Price (USD)</th>
                  <th className='w-1/6'> 24h </th>
                  <th className='w-1/6'> 7d </th>
                  <th className='w-1/6'> 30d </th>
              </tr>
          </thead>
          <tbody>
            {filterCoins.map(coin=>{
              return(
                <Coin 
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
