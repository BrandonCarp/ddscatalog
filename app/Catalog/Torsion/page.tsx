import CatalogLayout from "../../components/CatalogLayout";
import Tor7 from "@/components/TorSprings/Tor7";
import Tor8 from "@/components/TorSprings/Tor8";
import Tor9 from "@/components/TorSprings/Tor9";

export default function TorsionSprings() {
  return (
    <CatalogLayout title="TORSION SPRINGS" pagenum="13">
      <section className="flex flex-col p-3">
        <Tor7 />
        <Tor8 />
        <Tor9 />
      </section>
    </CatalogLayout>
  );
}
