// import assets
import HeartLogo from '../assets/heart.svg';

// stateless component for Heart component 
const Heart = (props) => {

    // return the JSX below
    return (
      <div className='heart'>
        <img className='heart-img' src={HeartLogo} alt='heart' />
        <p className='heart-message'>{props.msg}</p>
      </div>
    )
}

export default Heart;