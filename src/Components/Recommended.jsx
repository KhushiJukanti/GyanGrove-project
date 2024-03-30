import React, { useState, useEffect } from 'react';

const url = process.env.RECOMMEND_URL;

export function RecommendedShows() {
    const [recommendedShows, setRecommendedShows] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRecommendedShows(data.slice(0, 8).map(event => ({
                        ...event,
                        imgUrl: event.imgUrl.replace('/view', '/uc') // Replace '/view' with '/uc'
                    })));
                } else if (data && Array.isArray(data.events)) {
                    setRecommendedShows(data.events.slice(0, 8).map(event => ({
                        ...event,
                        imgUrl: event.imgUrl.replace('/view', '/uc') // Replace '/view' with '/uc'
                    })));
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => console.error('Error fetching recommended shows:', error));
    }, []);

    return (
        <div className="container" style={{ marginLeft: '150px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5 style={{ textAlign: 'start', margin: '0', color: "#989090" }}>Recommended Shows</h5>
                <a style={{ color: '#989090', display: 'inline-block', marginRight: '200px' }} href="#" onClick={(e) => { e.preventDefault(); /* Handle click event */ }}>see all</a>
            </div>
            <div className='mt-5' style={{ display: 'flex', overflowX: 'auto', gap: '20px' }}>
                {recommendedShows.map(event => (
                    <div key={event.eventName} style={{ marginBottom: '20px' }}>
                        <div className="card" style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative', width: '250px' }}>
                            <img src={event.imgUrl} alt={event.eventName} style={{ width: '250px', height: '250px' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', color: 'white', width: '100%' }}>
                                <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <button style={{
                                            padding: '0px',
                                            border: 'none',
                                            color: 'white',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem'
                                        }}>Make Agree</button>
                                        <p style={{ display: 'inline', fontSize: '0.8rem', color: '#989090' }}>{event.cityName}</p>
                                    </div>
                                    <div className="card-text">
                                        <p style={{ display: 'inline', fontSize: '0.8rem' }}>{new Date(event.date).toLocaleDateString()}</p>
                                        <p style={{ display: 'inline', fontSize: '0.8rem', color: '#989090' }}>{event.weather} | {Math.floor(event.distanceKm / 100)} km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendedShows;
