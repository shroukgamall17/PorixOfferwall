// import Button from "../ui/Button/Button";
import { Form } from "react-bootstrap";
import "./NavBar.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchOffers } from "../../store/Actions/searchOfferActions";

function NavBar({ setOS }) {
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const data = useSelector((state) => state.offers);
  function detectOS2() {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.includes("android")) {
            return "android";
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")) {
            return "ios";
        } else {
            return "all";
        }
    }


    const device = detectOS2();
  const handleSearch = (e) => {
      if (e.target.value.trim() === "") {
        dispatch(setSearchOffers(null))
      } else {
       const result = data.filter((offer) => {
         return (
           e.target.value &&
           offer.name.toLowerCase().includes(e.target.value.toLowerCase())
         );
       });
       dispatch(setSearchOffers(result)); 
      }
  }


  return (
    <div className="z-1 mt-5 mx-2 d-flex justify-content-evenly align-items-center">

      <div className="search-wrapper mx-3 position-relative">
        <div className="search position-relative">
          <span className="search-icon">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </i>
          </span>
          <Form.Control
            placeholder="search for offers"
            className="search-input ps-4"
            onChange={handleSearch}
            ref={searchInputRef}
          />
        </div>
      </div>
      <div className="select">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setOS(e.target.value)}
          className="form-selection"
        >
            <option value="all" selected={device === 'all'}>All</option>
            <option value="android" selected={device === 'android'}>Android</option>
            <option value="ios" selected={device === 'ios'}>iOS</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default NavBar;
