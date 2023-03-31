const Topbar = (props) => {
    return (
        <>
            {/*  Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/*  Sidebar Toggle (Topbar) */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
                onClick={props.changeStyle}
              >
                <i className="fa fa-bars"></i>
              </button>

              {/*  Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>

                {/*  Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <button
                    className="nav-link dropdown-toggle transparant-btn"
                    id="userDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                     Admin
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt="profile"
                    />
                  </button>
                  {/*  Dropdown - User Information */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a
                      className="dropdown-item"
                      href='#'
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/*  End of Topbar */}
        </>
    )
}

export default Topbar;