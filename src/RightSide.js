import google from "./assets/Google__G__Logo.svg.png"
import facebook from "./assets/facebook-512.png"
const RightSide = () => {
    
    
    return (
        <div className="rightSideContent">
            <div className="sighWith">
                <span><h1>Sign in to <a href="" id="logo">DesignIT</a></h1></span>
                <p>with</p>
                <div className="media">
                    <button><img width="35px" src={google} alt="" />Google</button>
                    <button><img width="35px" src={facebook} alt="" />Facebook</button>
                </div>
            </div>
            <form>
                <label>E-mail</label>
                <input type="text" placeholder="@mail.com" autoComplete="false"/>
                <label>Password</label>
                <input type="password" placeholder="password" autoComplete="false"/>
                <div className="sub">
                    <button type="submit">Sign in</button>
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
            <p>&copy;2021 All Rights Reseved</p>
        </div>
    );
}
 
export default RightSide;