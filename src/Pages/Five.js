import React from 'react'
import Coin from '../Coin';

const Five = ({filter}) => {
    return (
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
                    {filter.slice(200,250).map(coin=>{
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
    )
}

export default Five
