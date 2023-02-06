import './Infos.css';
import img1 from './images/icon-ethereum.svg';
import img2 from './images/icon-clock.svg'

function Info(){
    return(
        <div className="main-div">
            <div className="first-div">
                <img className="small-icons1" src={img1} alt='icon1'></img>
                <h5 className="h5-tag">0.041 ETH</h5>
            </div>
            <div className="first-div second-div">
                <img className="small-icons2" src={img2} alt='icon2'></img>
                <h5 className="h5-tag2">3 days left</h5>
            </div>
        </div>
    )
}
// აქ მაინტერესებს თუ გამოვიყენებ მხოლოდ ერთს ????????????
export default Info;