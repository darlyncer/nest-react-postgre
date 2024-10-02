import { FC } from "react";
import img from "../assets/stonksMem.jpg";

const Home: FC = () => {
  return (
    <div>
      <img className="rounded-md mt-11" src={img} alt="img" />
    </div>
  );
};

export default Home;
