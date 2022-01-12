import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <div >
                <span className="sidebartitle">ABOUT ME</span>
                <img className="sideimg" src="https://cdn.dribbble.com/users/2552597/screenshots/16027959/media/e797c98515d253f6092d119fd3baf7bd.png?compress=1&resize=1000x750&vertical=top" alt=""/>
                </div>
                <div><p className="aboutme">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p> </div>
                <div>
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
              <li className="sidebarlistitem">Tech</li>
              <li className="sidebarlistitem">Art</li>
              <li className="sidebarlistitem">Write</li>
            </ul>
            </div>
            </div>
            
            
            




</>

    )
}
export default Sidebar;