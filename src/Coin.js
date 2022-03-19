import React from 'react'

const Coin = ({rank, key, name, price, symbol, image, priceChange24h, priceChange7d, priceChange30d}) => {
    return (
        <React.Fragment>
            <tr className='text-center'>
                <td className='p-2'>{rank}</td>
                <td className='p-2'><img className='w-8 m-auto' src={image} alt={name}></img></td>
                <td className='p-2'>{name}</td>
                <td className='p-2'>${price}</td>
                { priceChange24h >0 ? (
                <td className='p-2 text-green-300'>{Number(priceChange24h).toFixed(2)}%</td>
                ) : (
                <td className='p-2 text-red-300'>{Number(priceChange24h).toFixed(2)}%</td>
                )
                }

                { priceChange7d >0 ? (
                <td className='p-2 text-green-300'>{Number(priceChange7d).toFixed(2)}%</td>
                ) : (
                <td className='p-2 text-red-300'>{Number(priceChange7d).toFixed(2)}%</td>
                )
                }

                { priceChange30d >0 ? (
                <td className='p-2 text-green-300'>{Number(priceChange30d).toFixed(2)}%</td>
                ) : (
                <td className='p-2 text-red-300'>{Number(priceChange30d).toFixed(2)}%</td>
                )
                }
            </tr>
            <hr className='w-44 border-gray-800 h-3'/>
        </React.Fragment>
    )
}

export default Coin
