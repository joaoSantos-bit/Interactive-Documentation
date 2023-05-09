import React from "react";
import "./SideNavigationBar.css";

const SideNavigationBar = ({ navigationItems }: { navigationItems: any[] }) => {
  return (
    <div className="asideNavigation-wrapper">
      <nav className="asideNavigation">
        {navigationItems.map((navItem: any, index: number) => {
          return (
            <li key={"sideBarNavItem" + index} className="listItem">
              <a href="/">{navItem.contentText}</a>
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNavigationBar;
