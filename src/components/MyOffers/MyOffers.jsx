import { useDispatch, useSelector } from "react-redux";
import CardOne from "../CardOne/CardOne";
import SectionHead from "../ui/SectionHead/SectionHead";
import { useEffect, useState } from "react";
import { setSearchOffers } from "../../store/Actions/searchOfferActions";
import icon from "../../assets/images/02.png";

function MyOffers({ os }) {
  const data = useSelector((state) => state.offers);
  const searchOffers = useSelector((state) => state.searchOffers);
  const [offers, setOffers] = useState(data);
  const [topOffers, setTopOffers] = useState([]);
  const [restOffers, setRestOffers] = useState([]);

  const dispatch = useDispatch();

  const handlSortHighest = () => {
    if (searchOffers) {
      const hOffers = [...searchOffers];
      hOffers.sort((a, b) => b.amount - a.amount);
      dispatch(setSearchOffers(hOffers));
    } else {
      const hOffers = [...offers];
      hOffers.sort((a, b) => b.amount - a.amount);
      setOffers(hOffers);
    }
  };

  const handlSortEasiest = () => {
    if (searchOffers) {
      const eOffers = [...searchOffers];
      eOffers.sort(
        (a, b) => b.instructions_array.length - a.instructions_array.length
      );
      dispatch(setSearchOffers(eOffers));
    } else {
      const eOffers = [...offers];
      eOffers.sort(
        (a, b) => b.instructions_array.length - a.instructions_array.length
      );
      setOffers(eOffers);
    }
  };

  const sortByOS = (arr, OS) => {
    console.log(arr);
    setTopOffers(
      arr.filter(
        (item) => item.campaign_os_target.toLowerCase() === OS.toLowerCase()
      )
    );
    setRestOffers(
      arr.filter(
        (item) => item.campaign_os_target.toLowerCase() !== OS.toLowerCase()
      )
    );
  };

  useEffect(() => {
    setOffers(data);
  }, [data]);

  useEffect(() => {
    if (!searchOffers) {
      sortByOS(offers, os);
    }
  }, [os, offers, searchOffers]);

  useEffect(() => {
    if (searchOffers) {
      sortByOS(searchOffers, os);
    }
  }, [os, searchOffers]);

  return (
    <>
      <SectionHead icon={icon}>
        <span className="section-title-text">My Offers </span>
      </SectionHead>
      <div className="myOffers-filter d-flex flex-wrap gap-3 w-100 mb-4">
        <span
          className="myOffers-filter-item"
          onClick={() => {
            handlSortHighest();
          }}
        >
          Highest Paying
        </span>
        <span
          className="myOffers-filter-item"
          onClick={() => {
            handlSortEasiest();
          }}
        >
          Easiest
        </span>
      </div>
      {[...topOffers, ...restOffers].length ? (
        [...topOffers, ...restOffers].map((item, index) => {
          return (
            <div key={item.campaign_id}>
              <CardOne offer={item} isAlt={index % 2} />
              <br />
            </div>
          );
        })
      ) : (
        <p className="text-center my-5 font-weight-bold text-white h2">
         SORRY!! No Offers Found to you, Try again later...
        </p>
      )}
    </>
  );
}

export default MyOffers;
