import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">Wedding Invitations</h2>

        <button className="admin-btn">
          Admin
        </button>
      </div>
    </nav>
  );
}

export default Navbar;