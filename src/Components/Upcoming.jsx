import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const url = process.env.UPCOMING_URL

export function UpcomingEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Assuming data.events contains the array of upcoming events
                setEvents(data.events.slice(0, 6)); // Get only the first three events
            })
            .catch(error => console.error('Error fetching upcoming events:', error));
    }, []);

    return (
        <div className="container mt-5" style={{ marginLeft: '250px' }}>
            <h5 style={{ textAlign: 'start', margin: '0', color: "#1E2022" }}>Upcoming Events { }<FaArrowRightLong /></h5>
            <div className="card-container row mt-3">
                {events.map((event, index) => (
                    <div className='col-md-4' key={index}> {/* Added key prop to the outer div */}
                        <div className="card" style={{ width: '70%', marginBottom: '30px' }}> {/* Decreased the bottom margin */}
                            <div className="card" style={{ position: 'relative', width: '100%', padding: '5px' }}>
                                <img src="https://th.bing.com/th/id/OIP.XJKtapAJ6_YU1jCHLVJV8wHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt={event.eventName} className="card-img-top" />
                                <div className="card-body" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', color: '#989090' }}>
                                    <p className="card-text">{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <button style={{
                                    // padding: '1px',
                                    fontSize: '0.9rem',
                                    border: 'none',
                                    backgroundColor: 'white',
                                    cursor: 'pointer'
                                }}>After note nearly</button>
                                <div className="card-text">
                                    <p style={{ display: 'inline', fontSize: 'o.9rem' }}>{event.cityName}</p>
                                    <p style={{ display: 'inline', marginLeft: '23px', fontSize: 'o.9rem' }}>{event.weather}|{Math.floor(event.distanceKm / 100)}KM</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default UpcomingEvents;