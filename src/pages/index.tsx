
import {Header} from "~/components/Header.tsx";
import {SideBar} from "~/components/SideBar.tsx";
import {Map} from "~/components/Map.tsx";

export default function Home() {

  return (
    <>
      <Header></Header>
      <div className="flex h-screen">
        <SideBar></SideBar>
        <Map></Map>
      </div>
    </>
  );
}
