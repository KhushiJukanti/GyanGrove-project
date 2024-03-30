import React from 'react'
import RecommendedShows from './Recommended'
import Banner from './Banner.svg'

export function BannerImg() {
    return (
        <div className='container' style={{ position: 'relative' }}>
            <img style={{ width: '100%', height: 'auto' }} src={Banner} alt='Hi' />
            <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50% )', textAlign: 'center', color: 'white', padding: '10px', width: '100%', marginBottom: '800px' }}>
                <h2 style={{ width: '100%', fontSize: '50px', margin: '0 auto', marginBottom: '10px' }}>Discover Exciting Events Happening <br /> Near You - Stay Tuned for Updates!</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#989090' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, <br /> ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.</p>


            </div>
            <div style={{ position: 'relative', marginTop: '-200px' }}>
                <RecommendedShows />
            </div>
        </div>
    )
}

