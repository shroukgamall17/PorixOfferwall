import "./SectionHead.css";
function SectionHead({ children, icon }) {
  return (
    <div className="section-head mt-5 mb-3">
      <div className="d-flex align-items-center">
        <img className="section-icon" src={icon} alt="" />
        <h2 className="section-title mb-3 font-weight-bold position-relative pl-2">
          {children}
        </h2>
        <div className="roundedPill rounded-circle"></div>
        <div className="line flex-grow-1" style={{ height: "0.3rem" }}></div>
      </div>
    </div>
  );
}

export default SectionHead;
