import React from 'react'
import loadingGif from '../loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Data loading</h4>
            <img src={loadingGif} alt="loading data"/>
        </div>
    )
}

export default Loading