import Image from "next/image";
import CatalogLayout from "../../components/CatalogLayout";
import Ext7 from "@/components/ExtSprings/Ext7";
import Ext8 from "@/components/ExtSprings/Ext8";

export default function ExtensionSprings() {
  return (
    <CatalogLayout title="EXTENSION SPRINGS" pagenum="1">
      <section className="flex justify-center p-5 space-x-10">
        <div>
          <Ext7 />
        </div>

        <Ext8 />
        <div className="absolute bottom-0 left-0 mb-20">
          <Image
            src={"/images/Extension/extpair.png"}
            alt="springs"
            height={"220"}
            width={"220"}
          />
        </div>
        <div className="absolute bottom-0 right-0 mb-20">
          <Image
            src={"/images/Extension/ext.png"}
            alt="springs"
            height={"320"}
            width={"300"}
            className="rotate-180"
          />
        </div>
      </section>
    </CatalogLayout>
  );
}
