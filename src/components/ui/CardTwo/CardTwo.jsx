import Button from "../Button/Button";
import { handlImgOnError } from "../../../utils";
import "./CardTwo.css";
import { useDispatch } from "react-redux";
import { setSelectedOffer } from "../../../store/Actions/selectedOfferAction";
import { showModel } from "../../../store/Actions/modelShowAction";

function CardTwo({ offer }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSelectedOffer(offer));
    dispatch(showModel());
  };
    return (
      <div className="card-two" onClick={()=>handleClick()}>
        <img src={offer.icon} alt="" width="100%" height="100%" onError={handlImgOnError}/>
        <div className="card-two-btn">
          <Button text={`+ ${offer.amount}`} type="btnUIOne" size={"btnUIsm"} />
        </div>
      </div>
    );
}

export default CardTwo;