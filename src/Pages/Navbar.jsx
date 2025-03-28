import React from "react";

const Navbar = ({link1,link2}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
               {link1}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              {link2}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
