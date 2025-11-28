import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 absolute top-0 left-0 w-full">
      <div>
        <Image
          src={logoImg}
          alt="Logo of the portfolio"
          width={500}
          height={500}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <a>About me</a>
        <a>Experience</a>
        <a>Projects</a>
        <Button>Contact me</Button>
      </div>
    </div>
  );
};

export default Navbar;
