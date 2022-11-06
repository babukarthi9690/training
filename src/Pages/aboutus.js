import { Link } from "react-router-dom";

function AboutusPage(){
    return(
        <div>
            <div style={{textAlign: 'right'}}>
                <Link to='/'>Home</Link>
            </div>
            <div className='HeaderStyle'>About us</div>
        </div>
    );
}

export default AboutusPage;