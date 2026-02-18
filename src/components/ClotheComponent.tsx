import ClotheSlider from "./ClotheSlider";
import SliderClothes from "./SliderClothes";

const ClotheComponent = () => {
  return (
    <>
      <div className="bg-[#dacfc1c0] py-8 sm:px-4 lg:px-4 w-full sm:w-[420px] md:w-[490px] lg:w-[490px] xl:w-[690px] 2xl:w-[700px] mx-auto rounded-2xl">
        <ClotheSlider />
      </div>
      <div className="-mt-8">
        <SliderClothes />
      </div>
    </>
  );
};

export default ClotheComponent;
