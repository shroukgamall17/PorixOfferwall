import CardThree from "../ui/CardThree/CardThree";
import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Activity.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Activity() {
  const [filterWord, setFilterWord] = useState("all");
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);

  const handlCloseActivity = () => {
    const activity = document.getElementById("activity");
    activity.classList.remove("show-activity");
    activity.classList.add("hide-activity");
  };
  const fetchData = () => {
    axios
      // use /10000/ker00sama as id and userId in url params
      // .get(`https://porix.org/api/GetOffers/${user?.id}/${user?.userId}`)
      .get("/offers.json")
      .then((res) => {
        setData(res.data.offers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <div className="activity-wrapper hide-activity" id="activity">
      <span className="close-activity" onClick={handlCloseActivity} id="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </span>

      {data.length ? (
        <>
          <div className="activity-filter d-flex flex-wrap gap-3 mx-md-4 mx-2 me-4">
            <span
              className="activity-filter-item filter-all"
              onClick={() => setFilterWord("all")}
            >
              All
            </span>
            <span
              className="activity-filter-item"
              onClick={() => setFilterWord("completed")}
            >
              Completed
            </span>
            <span
              className="activity-filter-item"
              onClick={() => setFilterWord("pending")}
            >
              Pending
            </span>
            <span
              className="activity-filter-item"
              onClick={() => setFilterWord("rejected")}
            >
              Rejected
            </span>
          </div>
          <Swiper
            spaceBetween={12}
            grabCursor={true}
            breakpoints={{
              340: {
                slidesPerView: 2,
              },
              760: {
                slidesPerView: 3,
              },
              1060: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map(
              (offer) =>
                (filterWord === "all" || offer.status === filterWord) && (
                  <Fragment key={offer.id}>
                    <SwiperSlide>
                      <div className="activity-card">
                        <CardThree offer={offer} />
                      </div>
                    </SwiperSlide>
                  </Fragment>
                )
            )}
          </Swiper>
        </>
      ) : (
        <p className="text-center my-5 font-weight-bold text-white h2">
          No Activity Found
        </p>
      )}
    </div>
  );
}

export default Activity;
