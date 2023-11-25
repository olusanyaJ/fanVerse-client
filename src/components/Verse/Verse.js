import "./Verse.scss";
import likes from "../../assets/icons/likes.svg";
import comments from "../../assets/icons/comments.svg";
import reVerses from "../../assets/icons/rts.svg";
import share from "../../assets/icons/share.svg";
import live from "../../assets/icons/liveVerse.svg";
import { Link } from "react-router-dom";

const Verse = ({ userData, posts }) => {
  console.log(userData);
  return (
    <div>
      {posts
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((post) => {
          const realCommentTime = () => {
            const currentDate = new Date();
            const timestampDate = new Date(post.created_at);
            const timeDifference = currentDate - timestampDate;
            const minutesAgo = Math.floor(timeDifference / (1000 * 60));
            const hoursAgo = Math.floor(minutesAgo / 60);
            const daysAgo = Math.floor(hoursAgo / 24);

            if (minutesAgo < 1) {
              return "Just now";
            } else if (minutesAgo === 1) {
              return "1 minute ago";
            } else if (hoursAgo === 1) {
              return "1 hour ago";
            } else if (minutesAgo < 60) {
              return `${minutesAgo} minutes ago`;
            } else if (hoursAgo < 24) {
              return `${hoursAgo} hours ago`;
            } else if (daysAgo === 1) {
              return "1 day ago";
            } else if (daysAgo < 7) {
              return `${daysAgo} days ago`;
            } else if (daysAgo > 7) {
              return `${daysAgo} days ago`;
            } else {
              return timestampDate.toLocaleDateString();
            }
          };

          return (
            <div className="verse">
              <div className="verse__container">
                <div className="verse__details">
                  <img
                    src={post.profile_image_url}
                    alt=""
                    className="verse__img"
                  />
                  <div className="verse__outer">
                    <div className="verse__inner">
                      {/* <p className="verse__full-name">{post.full_name}</p> */}
                      <p className="verse__username">@{post.user_name}</p>
                    </div>
                    <p className="verse__time">
                      {realCommentTime(post.created_at)}
                    </p>
                    <img src={live} alt="" className="verse__live" />
                  </div>
                </div>
                <div className="verse__content">
                  {/* <p className="verse__topic">
                    What is your favourite match of 2023 so far?
                  </p> */}
                  {/* <p className="verse__desc">{post.content}</p> */}
                  {/* this dangerouslySetInnerHTM allows me render an emoji from the
                  db */}
                  <p
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="verse__desc"
                  ></p>
                  <img
                    src={post.content_img}
                    alt=""
                    className="verse__desc--img"
                  />
                </div>
                <p className="verse__discuss">Join the discussion!</p>
                <div className="verse__specs">
                  <Link to="/nice-to-have" className="verse__likes">
                    <img src={likes} alt="" className="verse__icon" />
                    <span className="verse__icon--value">
                      {post.likes_count}K
                    </span>
                  </Link>

                  <Link to="/nice-to-have" className="verse__comments">
                    <img src={reVerses} alt="" className="verse__icon" />
                    <span className="verse__icon--value">
                      {post.comments_count}K
                    </span>
                  </Link>
                  <Link to="/nice-to-have" className="verse__rv">
                    <img src={comments} alt="" className="verse__icon" />
                    <span className="verse__icon--value">
                      {post.replies_count}K
                    </span>
                  </Link>
                  <Link to="/nice-to-have" className="verse__shares">
                    <img src={share} alt="" className="verse__icon" />
                    {/* <span className="verse__icon--value">{post.id}K</span> */}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Verse;
