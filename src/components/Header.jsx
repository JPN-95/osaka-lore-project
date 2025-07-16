import { Link } from 'react-router-dom';

function Header(props) {
  function gotoLocation(event) {
    const name = event.target.value;
    props.onSelect(name);
  }

  return (
    <div className="header">
      <header>
        <h1>Osaka Lore Project</h1>
        <Link to={"/"}>
        <button style={{padding:".5rem", margin:"1rem"}}>
          Home
        </button>
        </Link>
        <Link to={"/contact"}>
        <button style={{padding:".5rem", margin:"1rem"}}>
          Submit a Location
        </button>
        </Link>
      </header>
    </div>
  );
}

export default Header;