import { pokemonHeaderImg } from "../assets/header.png";

const Header = () => {
  return (
    <>
      <div className="md:w-1/2 sm:w-4/5 sm:px-0 w-full px-1">
        <img className="w-full h-auto" src={pokemonHeaderImg} alt="" />
      </div>
    </>
  );
};

export default Header;
