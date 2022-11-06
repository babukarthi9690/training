import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <div>
            <table style={{width: '100%', height: '100%', textAlign: 'center'}}>
                <tbody>
                    <tr>
                        <td style={{width: '80%'}}></td>
                        <td>
                            <div className='Landingbutton'><Link className='LinkStyle' to='/Login'>Login</Link></div>
                        </td>
                        <td>
                            <div className='Landingbutton'><Link className='LinkStyle' to='/signup'>Signup</Link></div>
                        </td>
                        <td>
                            <div className='Landingbutton'><Link className='LinkStyle' to='/aboutus'>About Us</Link></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LandingPage;