import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black">
      <img className="w-48 px-8 py-2" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
