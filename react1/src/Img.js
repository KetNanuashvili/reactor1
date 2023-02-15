import './Img.css';
import iconImg from './images/Shape.svg'


function Images(){

    
    // const [isHovering, setIsHovering]= useState(false);

    // function handleMouseEnter() {
    //     setIsHovering(true);
    // }

    // function handleMouseLeave(){
    //     setIsHovering(false);
    // }

    return (
        <div className="picture-div">
            <div className='transitionDiv'></div>
            <img className='iconImg'src={iconImg} alt='iconImg' ></img>
        </div>
    )
}

export default Images;