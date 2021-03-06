//TODO: brand name
// sign out button

import { header, link } from "../styles";
import useAuthState from "../State/AuthState";
function Header() {
  const { handleSignOut } = useAuthState();
  return (
    <div className="row m-0" style={header}>
      <div className="col-lg-11 col-md-9 col-sm-10 col-6 d-flex  align-items-center m-0 p-0">
        <h2 style={{ userSelect: "none" }}>FIRSTLY APPARELS</h2>
      </div>
      <div className="col-lg-1 col-md-3 col-sm-2 col-6 d-flex justify-content-center align-items-center m-0 p-0">
        <p style={{ cursor: "pointer" }} onClick={handleSignOut}>
          Sign Out
        </p>
      </div>
    </div>
  );
}

export default Header;
