import "./Verse.scss";

const Verse = () => {
  return (
    <div className="verse">
      <div className="verse__container">
        <div className="details">
          <p>image</p>
          <div className="outer">
            <div className="inner">
              <p>username</p>
              <p>full name</p>
            </div>
            <p>time</p>
          </div>
        </div>
        <div>
          <p>what is your fav match</p>
          <p>RF vs ND</p>
        </div>
        <div>Join the discussion</div>
        <div className="likes">
          <p>likes</p>
          <p>comments</p>
          <p>reverse</p>
          <p>share verse</p>
        </div>
      </div>
    </div>
  );
};

export default Verse;
