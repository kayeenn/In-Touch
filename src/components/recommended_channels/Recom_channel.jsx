import "./recom_channel.css";

export default function Recom_channel() {
  return (
    <div className="Recommended_channels">
      <p className="Recomended_channels_title">Recommended Channels:</p>
      <div className="Recommended_channel">
        <img src="Pictures/bb_logo.png" />
        <p>Breaking Bad</p>
      </div>
      <hr />
      <div className="Recommended_channel">
        <img src="Pictures/flag.png" />
        <p>Kazakh News</p>
      </div>
      <hr />
      <div className="Recommended_channel">
        <img src="Pictures/albeni.jpg" />
        <p>Albeni</p>
      </div>
      <hr />
      <div className="Recommended_channel">
        <img src="Pictures/jordan.png" />
        <p>Michael Jordan</p>
      </div>
      <hr />
      <div className="Recommended_channel">
        <img src="Pictures/ramzi.jpg" />
        <p>Gordon Ramzi</p>
      </div>
    </div>
  );
}
