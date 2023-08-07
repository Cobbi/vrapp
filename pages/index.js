import Image from "next/image";
import { Inter } from "next/font/google";
import SplashScreen from "@/src/components/SplashScreen";
import PageTitle from "@/src/components/PageTitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageTitle title="VT Software | A Webbermill Product" />
      <div className="w-full">
        <SplashScreen />
      </div>
    </>
  );
}
