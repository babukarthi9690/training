import { Link } from "react-router-dom";

function SignupPage(){
    return(
        <div>
            <div style={{textAlign: 'right'}}>
                <Link to='/'>Home</Link>
            </div>
            <div className='HeaderStyle'>Signup</div>
        </div>
    );
}

export default SignupPage;