import "./post.css";
import React from "react";


const Post = () => {
    return (
        <div className="post">
      <img
        className="postimg"
        src="https://cdn.dribbble.com/users/2321513/screenshots/17247193/media/ff2214271eec424166b2aac261cef59b.png?compress=1&resize=1000x750&vertical=top"
        alt=""
      />
      <div className="postinfo">
          <div className="categories">
              <span className="tech">Tech</span>
              <span className="art">Art</span>
              <span className="write">Write</span>

          </div>
          <span className="posttitle">
              loremigojriugj
          </span>
        <hr/>
        <span className="postdate">1 hour ago</span>

      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      </div>


    );
}
export default Post;