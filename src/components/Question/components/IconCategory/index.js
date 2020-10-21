import PropTypes from "prop-types";
import {
  FaBook,
  FaMusic,
  FaRegLightbulb,
  FaVoteYea,
  FaLaughSquint,
  FaTheaterMasks,
} from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiFillExperiment, AiFillCar } from "react-icons/ai";
import {
  GiAncientSword,
  GiHandOfGod,
  GiJapan,
  GiNinjaHeroicStance,
} from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";
import { CgMathDivide } from "react-icons/cg";
import { MdLocalMovies } from "react-icons/md";
import { BsDisplayFill } from "react-icons/bs";
import { RiMickeyFill } from "react-icons/ri";

export default function IconCategory({ category }) {
  const size = "3em";

  function handleIconCategory(category) {
    switch (category) {
      case "Entertainment: Video Games":
        return <IoLogoGameControllerB size={size} />;
      case "Science & Nature":
        return <AiFillExperiment size={size} />;
      case "History":
        return <GiAncientSword size={size} />;
      case "Vehicles":
        return <AiFillCar size={size} />;
      case "Entertainment: Books":
        return <FaBook size={size} />;
      case "Science: Computers":
        return <HiDesktopComputer size={size} />;
      case "Science: Mathematics":
        return <CgMathDivide size={size} />;
      case "Entertainment: Music":
        return <FaMusic size={size} />;
      case "Entertainment: Film":
        return <MdLocalMovies size={size} />;
      case "General Knowledge":
        return <FaRegLightbulb size={size} />;
      case "Politics":
        return <FaVoteYea size={size} />;
      case "Entertainment: Television":
        return <BsDisplayFill size={size} />;
      case "Entertainment: Comics":
        return <FaLaughSquint size={size} />;
      case "Mythology":
        return <GiHandOfGod size={size} />;
      case "Entertainment: Japanese Anime & Manga":
        return <GiNinjaHeroicStance size={size} />;
      case "Celebrities":
        return <RiMickeyFill size={size} />;
      case "Geography":
        return <GiJapan />;
      case "Entertainment: Musicals & Theatres":
        return <FaTheaterMasks />;
      default:
        return category;
    }
  }

  return <div className="category-icon">{handleIconCategory(category)}</div>;
}

IconCategory.proptypes = {
  category: PropTypes.string.isRequired,
};
