import React from 'react'

const ErrorPage = () => {
    return (
        <div className='mt-5'>
            <h1>404</h1>
            <h2>UH OH! You are lost..</h2>
            <p>The page you are looking for does not exist. How you got here is a mystery</p>
            <button className='bg-primary rounded'>Go back to home </button>
        </div>
    )
}

export default ErrorPage