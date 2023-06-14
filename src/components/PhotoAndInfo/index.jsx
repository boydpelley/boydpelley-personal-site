import "./PhotoAndInfo.css";

import headShotRel from "../../assets/images/boydHeadshot.jpg";

function PhotoAndInfo() {
    return (
        <div className="photoAndInfoWrapper">
            <img src={headShotRel} alt="Headshot of Boyd" className="boydHeadshot"></img>
            <div className="infoWrapper">
                <div className="location">Cape Breton, Nova Scotia</div>
                <div className="studies">Dalhousie University Faculty of Computer Science</div>
                <div className="passions">Music, Programming, Foraging, Coffee</div>
            </div>
        </div>
    )
}

export default PhotoAndInfo;