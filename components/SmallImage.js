import Image from "next/image";
import topLightLogo from '../public/img/newlightLogo.svg'
import bottomLightLogo from '../public/img/newlightLogo2.svg'

const SmallImage = (props) => {
  return (
    <div className="relative -z-0">
      {props.myImage.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt=""
          className={`${
            image === topLightLogo
              ? "absolute -top-11 -left-12"
              : image === bottomLightLogo
              ? "absolute -bottom-7 -right-5"
              : "relative z-10 min-w-full"
          }`}
        />
      ))}
    </div>
  );
};

export default SmallImage;
