import { Spinner } from "react-bootstrap";
import "./Loader.css";
function Loader() {
    return (
      <div className="loader">
        <Spinner animation="border" role="status" >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
}

export default Loader;