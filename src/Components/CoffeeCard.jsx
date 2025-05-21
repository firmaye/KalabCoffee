const CoffeeCard = ({ imgURL, changeBigCoffeeImage, bigCoffeeImg }) => {
  const handleClick = () => {
    if (bigCoffeeImg !== imgURL.bigCoffee) {
      changeBigCoffeeImage(imgURL.bigCoffee);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigCoffeeImg === imgURL.bigCoffee
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-hero ">
        <img
          src={imgURL.bigCoffee}
          alt="coffee collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
