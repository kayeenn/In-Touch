import "./might_know.css";

export default function Recom_channel() {
  return (
    <div className="Might_know">
      <div className="Might_know_posts">
        <p className="Might_know_title">You might know them:</p>
        <div className="Might_know_channel">
          <p>Cristian Bale</p>
          <img src="Pictures/bale.jpeg" />
        </div>
        <hr />
        <div className="Might_know_channel">
          <p>Kianu Reaves</p>
          <img src="Pictures/kianu.jpg" />
        </div>
        <hr />
        <div className="Might_know_channel">
          <p>Megan Fox</p>
          <img src="Pictures/megan-fox.jpg" />
        </div>
        <hr />
        <div className="Might_know_channel">
          <p>Joseph Joestar</p>
          <img src="Pictures/joseph.jfif" />
        </div>
        <hr />
        <div className="Might_know_channel">
          <p>Patrik</p>
          <img src="Pictures/3ba.jpg" />
        </div>
      </div>
      <footer>
        <p>Information · Help · For Developers</p>
        <p>
          <br />© 2022 IN TOUCH
        </p>
      </footer>
    </div>
  );
}
