import image404 from '../../assets/img/broken-link.png'
import {useLocation} from 'react-router-dom'

const NotFound = (props) => {
    let location = useLocation();
    return (
        <div style={{ textAlign: "center" }}>
            <img src={image404} alt="notFound" style={{height: "125px"}}/>
            <h1> 404 - Not Found...</h1>
        </div>
    );
}

export default NotFound;