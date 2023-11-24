import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import "./NiceToHave.scss";
import imgNice from "../../assets/images/wink.avif";

const NiceToHave = () => {
  return (
    <div className="main">
      <Header />
      <section className="main__container nice">
        <h1 className="nice__title">Nice To Have</h1>
        <p className="nice__desc">
          Think of our 'nice to have' features as the sprinkles on top of an
          already delightful ice cream cone—extra sweet, exciting, and coming
          soon!
        </p>
        <img src={imgNice} alt="img" className="nice__img" />
      </section>
      <Nav />
    </div>
  );
};

export default NiceToHave;
