import { useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation()
  console.log(location.movie.video)
  return (
    <div>
      <div className="back">
        <i className="bi bi-backspace"></i>
        <h3>Back</h3>
      </div>
      {location.movie.video ? <video src={location.movie.video} progress={true} autoPlay controls  className="watch" />: "No video available"}
    </div>
  );
}
