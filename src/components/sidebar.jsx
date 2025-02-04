import { Link } from "react-router-dom";
import "./sidebar.css";


function Sidebar(){


    return(
        <>
          <div className="sidebar">
            <Link to="/">
                <div className="hamitem">
                <i className="fas fa-home"></i>
                <div className="hamtext">Home</div>
                </div>
                </Link>
                <div className="hamitem">
                <i className="fas fa-play"></i>
                <div className="hamtext">Shorts</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-video"></i>
                <div className="hamtext">Subscriptions</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-history"></i>
                <div className="hamtext">History</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-list"></i>
                <div className="hamtext">Playlists</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-video"></i>
                <div className="hamtext">Your Videos</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-film"></i>
                <div className="hamtext">Your Movies</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-clock"></i>
                <div className="hamtext">Watch Later</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-thumbs-up"></i>
                <div className="hamtext">Liked Videos</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-fire"></i>
                <div className="hamtext">Trending</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-shopping-bag"></i>
                <div className="hamtext">Shopping</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-music"></i>
                <div className="hamtext">Music</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-film"></i>
                <div className="hamtext">Movies</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-gamepad"></i>
                <div className="hamtext">Gameing</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-newspaper"></i>
                <div className="hamtext">News</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-trophy"></i>
                <div className="hamtext">Sports</div>
                </div>
                <div className="hamitem">
                <i className="fas fa-book"></i>
                <div className="hamtext">Courses</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;