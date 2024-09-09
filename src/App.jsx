import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Recommended from "./components/Recommended/Recommended";
import ModalCard from "./components/Modal/modal";
import FlySec from "./components/FlySec/FlySec";
import { useDispatch, useSelector } from "react-redux";
import { hideModel } from "./store/Actions/modelShowAction";
import MyOffers from "./components/MyOffers/MyOffers";
import Loader from "./components/ui/Loader/Loader";
import axios from "axios";
import { setOffers } from "./store/Actions/offersActions";
import { setUser } from "./store/Actions/userActions";

function App() {
  const [os, setOs] = useState("");
  const [loader, setLoader] = useState(true);
  const modalShow = useSelector((state) => state.modalShow);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function detectOS() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("android")) {
      return "android";
    } else if (
      userAgent.includes("iphone") ||
      userAgent.includes("ipad") ||
      userAgent.includes("ipod")
    ) {
      return "ios";
    } else {
      return "all";
    }
  }

  const getUserData = () => {
    const path = window.location.pathname;
    const pathSegments = path.split("/").filter((segment) => segment !== "");
    const id = pathSegments[0];
    const userId = pathSegments[1];

    return { id, userId };
  };

  const fetchOffers = () => {
    axios
      // use /10000/ker00sama as id and userId in url params
      //.get(`https://porix.org/api/GetOffers/${user?.id}/${user?.userId}`)
       .get("/offers.json")
      .then((res) => {
        dispatch(setOffers(res.data.offers));
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    const os = detectOS();
    setOs(os);

    const user = getUserData();
    console.log(user);
    dispatch(setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      fetchOffers();
    }
  }, [user]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2000);
  // }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <Header setOS={setOs} />
      <main className="main container px-0 px-lg-5 col-lg-9">
        <Recommended />
        <MyOffers os={os} />
        <FlySec />
      </main>

      <ModalCard show={modalShow} onHide={() => dispatch(hideModel())} />
    </>
  );
}

export default App;
