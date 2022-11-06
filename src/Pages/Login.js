import { Link } from "react-router-dom";

function LoginFun() {
    return (
        <div>
            <div><Link to="/signup">SignUp Here</Link></div>
            <div><Link to="/aboutus">About Here</Link></div>
        </div>
     

    );
}

export default LoginFun;