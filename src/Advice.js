import React from 'react'

const Advice = ({advice, setGetNew, getNew}) => {
  return (
    <div className='card'>
        <h4 className='heading'>{advice}</h4>
        <button 
            className='button'
            onClick={() => {setGetNew(!getNew)}}
        >
            <span>Get a new Advice</span>
        </button>
    </div>
  )
}

export default Advice