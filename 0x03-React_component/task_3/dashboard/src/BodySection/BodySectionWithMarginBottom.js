import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';

function BodySectionWithMarginBottom() {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...this.props}/>
    </div>
  );
}

export default BodySectionWithMarginBottom