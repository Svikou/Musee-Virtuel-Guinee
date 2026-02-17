export default function Info() {
  const tags = [
    ["Metalogi", "Androgen"],
    ["Tripod", "Pantion"],
    ["Antifiering", "Ontokemi"],
  ];

  return (
    <div className="backdrop-blur-lg bg-[503D2E4D]/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 w-full sm:w-[280px] md:w-[240px] lg:w-[290px] xl:w-[300px] 2xl:w-[320px] mx-auto border-2 border-white/30">
      <div className=" shrink-0">
        {/* Speaker Img */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 border-2 border-white/30 hidden md:block">
          <img
            src="/img-cover.jpg"
            alt="Ensiv polyvision"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Ensiv polyvision
        </h2>

        <div className="space-y-4 text-sm text-white leading-relaxed">
          <p>
            Transfaktisk radiostik. Parapod etnofili, biosion för att förväntis.
            Endovalens barista. Kvasitos telestik. Radiometer konbel för att
            postfaktisk än anacism. Synform köttskatt.
          </p>

          <p>
            Primadiktisk hyperbel halvpudel operaform. Ananetik agnostifaktisk
            teception. Teranomi polyfili. Epidiktisk abtik. Emsion kosläpp
            relog. Smartball polypod.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 p-3 md:p-4 space-y-1.5 md:space-y-2 backdrop-blur-lg bg-white/10 rounded-xl md:px-20 lg:px-10  max-w-fit">
          {tags.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-1.5 md:gap-2 justify-center "
            >
              {row.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-2 py-0.5 md:px-3 md:py-1 rounded-xl text-xs md:text-[12x] whitespace-nowrap ${
                    tagIndex === 0
                      ? "bg-[#4E3B2D] text-white font-medium"
                      : "text-white"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
