export default function BentoCatalogue() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
      {/* Item 1 — grand, 2 lignes */}
      <div className="rounded-2xl overflow-hidden row-span-2 aspect-square sm:aspect-auto">
        <img
          src="/catalogue/kora.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 2 — large, 1 colonne */}
      <div className="rounded-2xl overflow-hidden col-span-1 lg:col-span-2 aspect-video sm:aspect-auto">
        <img
          src="/catalogue/Tamtam.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 3 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/catalogue/plate.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 4 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/catalogue/Veste.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 5 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/catalogue/pôt.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 6 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/catalogue/mask.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 7 — large */}
      <div className="rounded-2xl overflow-hidden col-span-1 lg:col-span-2 aspect-video sm:aspect-auto">
        <img
          src="/catalogue/Cut.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 8 — grand, 2 lignes */}
      <div className="rounded-2xl overflow-hidden row-span-2 aspect-square sm:aspect-auto">
        <img
          src="/catalogue/mask2.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 9 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/images/tabouret.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Item 10 */}
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="/images/tam-tam.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
