import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={LOGIN_PAGE_BACKGROUND} alt="Login-page-background-image" />
      </div>
    </div>
  );
};

export default Login;
