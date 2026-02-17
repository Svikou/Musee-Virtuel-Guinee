import SliderImages from "./SliderImages";
import ImageSlider from "./ImageSlider";

const Galerieimages = () => {
  return (
    <>
      <div className="bg-[#dacfc1c0] py-8 sm:px-4 lg:px-4 w-full sm:w-[420px] md:w-[490px] lg:w-[490px] xl:w-[690px] 2xl:w-[700px] mx-auto rounded-2xl">
        <ImageSlider />
      </div>
      <div className="-mt-8">
        <SliderImages />
      </div>
    </>
  );
};

export default Galerieimages;
