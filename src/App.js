import './App.css';
import { BannerImg } from './Components/BannerImage';
import { Navbar } from './Components/NavBar';
import UpcomingEvents from './Components/Upcoming';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#ffffff' }}>
      < Navbar/>
      <BannerImg />
      <UpcomingEvents />
      {/* <RecommendedShows /> */}
    </div>
  );
}

export default App;