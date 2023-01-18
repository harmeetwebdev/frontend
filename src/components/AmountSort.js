import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const AmountSort = ({ amount, setDicrement, setIncriment }) => (

    <div className='d-flex align-items-center'>
        <h5 className='plus-minus'
            onClick={() => setDicrement()}
        ><AiOutlineMinus /></h5>
        <h5 className='mx-4 my-2'>{amount}</h5>
        <h5 className='plus-minus'
            onClick={() => setIncriment()}
        ><AiOutlinePlus /></h5>
    </div>


)

export default AmountSort