const Sidebar = (props) => {
  return (
    <>
      {/* Sidebar */}
      <ul className={props.style} id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Checklist</div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li
          className={
            document.location.pathname === "/" ? "nav-item active" : "nav-item"
          }
        >
          <a className="nav-link" href="/">
            <i className="bi bi-bookmark-dash-fill"></i>
            <span>About</span>
          </a>
        </li>

        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li
          className={
            document.location.pathname === "/project" ||
            document.location.pathname === "/project-history"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <a className="nav-link" href="/project">
            <i className="bi bi-collection-fill"></i>
            <span>Project</span>
          </a>
        </li>

        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li
          className={
            document.location.pathname === "/customer-info" ||
            document.location.pathname === "/customer-info-history"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <a className="nav-link" href="/customer-info">
            <i className="bi bi-people-fill"></i>
            <span>Customer Info</span>
          </a>
        </li>

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={props.changeStyle}
          ></button>
        </div>
      </ul>
      {/* End of Sidebar */}

      {/* <Footer /> */}
    </>
  );
};

export default Sidebar;
