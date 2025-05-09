import avatarImage from "./assets/image-avatar.png";
import mainImage from "./assets/image-equilibrium.jpg";
import iconView from "./assets/icon-view.svg";
import "./App.css";
import "./index";

function App() {
  return (
    <>
      <main className="main">
        <article className="ntf">
          <div className="ntf__image_container">
            <img src={mainImage} alt="" className="ntf__image" />
            <div className="ntf__eye_icon_holder">
              <img src={iconView} alt="" className="text" />
            </div>
          </div>
          <h1 className="ntf__heading">Equilibrium #3429</h1>
          <p className="ntf__description">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="ntf__tech_info">
            <p className="ntf__price">0.041 ETH</p>
            <p className="ntf__days">3 days Left</p>
          </div>
          <hr />
          <div className="ntf__author">
            <img className="ntf__author-image" src={avatarImage} alt="" />
            <p className="ntf__author_text">Creation of</p>
            <span className="ntf__author_text-bold">Jules Wyvern</span>
          </div>
        </article>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/JammiM">James Morrissey</a>.
      </footer>
    </>
  );
}

export default App;
