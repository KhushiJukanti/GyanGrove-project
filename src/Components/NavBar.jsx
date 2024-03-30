import { useState } from 'react'
import { GiSelfLove } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";

export function Navbar() {
    const brandStyle = {
        color: '#ff4200',
        fontSize: '21px',
        fontWeight: 'bold',
    };
    const Button = {
        backgroundColor: 'white',
        border: 'none',
        marginRight: '15px'
    }


    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const toggleSignIn = () => {
        setIsLoggedIn(!isLoggedIn);
    };


    return (
        <div className='container'>
            <nav className="navbar bg-body-tertiary mt-5">
                <div className="container-fluid">
                    <a className="navbar-brand" style={brandStyle}>BookUsNow</a>
                    <button class="navbar-toggler bg-dark" style={{ color: '#fff' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-light"></span>      <span>Categories</span>

                    </button>
                    <input class="form-control" style={{ width: '400px' }} list="datalistOptions" placeholder="Type to search..." />
                    <datalist id="datalistOptions">
                        <option value="DJL Phantom" />
                        <option value="ElectroVibe Fest" />
                        <option value="Beat Bash" />
                        <option value="Disco Daze" />
                        <option value="Funk Fusion" />
                    </datalist>

                    <div>
                        {/* Favorite Button */}
                        <button onClick={toggleFavorite}
                            style={{
                                padding: '5px',
                                border: 'none',
                                backgroundColor: 'white',
                                cursor: 'pointer'
                            }}>
                            <GiSelfLove />{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>

                        {/* Sign-In Button */}
                        <button onClick={toggleSignIn}
                            style={{
                                padding: '5px',
                                margin: '20px',
                                backgroundColor: 'white',
                                border: 'none'

                            }}>
                            {isLoggedIn ? 'Sign Out' : 'Sign In'}
                        </button>
                    </div>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Off Events</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div> <br />



                </div>

                <div className='container-fluid'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <CiLocationOn /> <li style={{ marginLeft: '5px' }} class="breadcrumb-item">Mumbai</li>
                            <li class="breadcrumb-item active" aria-current="page">India</li>
                        </ol>
                    </nav>
                    <div style={{ marginRight: '300px', display: 'flex' }}>
                        <button style={Button}>LiveShows</button>
                        <button style={Button}>Streams</button>
                        <button style={Button}>Movies</button>
                        <button style={Button}>Plays</button>
                        <button style={Button}>Events</button>
                        <button style={Button}>Sports</button>
                        <button style={Button}>Activities</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}
