import { Link } from 'react-router-dom';
import Footer from './Footer';
function Home() {
  const p1Text="The Osaka Lore Project is a historical mapping project, which allows users to view historical map overlays over the city of Osaka with the goal of educating users on the daily lives of Osakans 100 years ago."
  const p1Text2 = "Click the markers in a selected area to see an image and learn about the local history."

  return (
    <div className='homeTopContainer'>
      <div className='side-image left-img'></div>
      <div className='side-image right-img'></div>
      <div className='homepage'>
        <div  className= "site-info">
          <h1 style={{fontSize:"4rem"}}>Osaka Lore Project</h1>
          <p>Discover historical landmarks, and experience daily life in Osaka as it was 100 years ago.</p>
          <Link to="/map">
              <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                Enter Map
              </button>
          </Link>
        </div>
        <div>
          <h2 style={{paddingTop:"2rem"}}>Map Information</h2>
        </div>
        <div className='content-grid'>
          <div className='row'>
            <img src="photos/mapScreenshot.jpg" alt="" />
            <p>{p1Text}</p>
          </div>
          <div className='row reverse'>
            <img src="photos/markerScreenshot.jpg" alt="" />
            <p>{p1Text2}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>    
  );
}

export default Home;