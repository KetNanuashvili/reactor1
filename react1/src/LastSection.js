import './LastSection.css';
import img3 from './images/image-avatar.png'

function LastSection(){
    return(
        <div className="bottom-div">
            <div className="sircle-div">
                <img className="person-img" src={img3} alt="small-img"></img>
            </div>
            <h6 className="describe">Creation of <span>Jules Wyvern</span></h6>
        </div>
    )
};

export default LastSection;
