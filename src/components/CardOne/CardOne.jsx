import Button from "../ui/Button/Button";
import { Fade } from "react-awesome-reveal";
import "./CardOne.css";
import { reduceStringLength } from "../../utils";
import { handlImgOnError } from "../../utils";
import { useDispatch } from "react-redux";
import { setSelectedOffer } from "../../store/Actions/selectedOfferAction";
import { showModel } from "../../store/Actions/modelShowAction";
function CardOne({ offer, isAlt }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSelectedOffer(offer));
    dispatch(showModel());
  };

  const renderOsIcon = (os) => {
    switch (os.toLowerCase()) {
      case "android":
        return (
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-android2"
              viewBox="0 0 16 16"
            >
              <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
            </svg>
          </i>
        );
      case "ios":
        return (
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-apple"
              viewBox="0 0 16 16"
            >
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
            </svg>
          </i>
        );
      default:
        return (
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-browser-chrome"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              />
            </svg>
          </i>
        );
    }
  };

  return (
    <Fade direction={isAlt ? "right" : "left" } cascade={true} triggerOnce={true} >
    <div
      className={`cardOne ${
        isAlt ? "cardOne-right" : "cardOne-left"
      } col-lg-8 col-md-10 col-sm-12 col-10 p-2`}
      onClick={() => handleClick()}
    >
      <div
        className={`d-flex flex-column justify-content-between  ${
          isAlt ? "cardOne-content-wrap-right" : ""
        }`}
      >
        <div
          className={`cardOne-image ${
            isAlt ? "cardOne-image-right" : "cardOne-image-left"
          }`}
        >
          <img
            src={offer?.icon}
            alt="card"
            className="img-fluid"
            onError={handlImgOnError}
          />
        </div>
        <div className="cardOne-content px-1 px-md-2 float-start truncate-text">
          <h3 className="cardOne-title">{offer?.name}</h3>
          <p className="text-white ">
            {offer?.short_description.length > 90 ? (
              <>
                {reduceStringLength(offer?.short_description, 90)}
                <span className="read-more ">.....more</span>
              </>
            ) : (
              offer?.short_description ?? "No description"
            )}
          </p>
          <div className="text-white d-flex justify-content-center gap-2 gap-md-3">
            {renderOsIcon(offer?.campaign_os_target)}
            <Button text={`+ ${offer?.amount}`} type="btnUIOne" />
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default CardOne;
