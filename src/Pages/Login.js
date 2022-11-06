import { Link } from "react-router-dom";

function LoginPage(){
    return(
        <div style={{width: '100%'}}>
            <div style={{textAlign: 'right'}}>
                <Link to='/'>Home</Link>
            </div>
            <div className='HeaderStyle'>Login</div>
        </div>
    );
}

export default LoginPage;