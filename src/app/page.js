import Image from "next/image";
import Navbarizq from "./Components/Navbarizq";
import ItemList from "./Components/ItemList";
import Navbarder from "./Components/Navbarder";


export default function Home() {
  return (
    <div className="flex h-screen">
      <Navbarizq />
      <div className="w-screen border">
        <div className="flex">
          <ItemList />
          <Navbarder />
        </div>
      </div>
    </div>
  );
}
