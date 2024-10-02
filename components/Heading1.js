const Heading1 = (props) => {
  return (
    <div>
      <h1 className="font-extrabold text-center xl:text-start text-[64px] text-[#1B1B1B]">
        {props.topic}
      </h1>
    </div>
  );
};

export default Heading1;
