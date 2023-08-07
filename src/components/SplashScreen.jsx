import { useEffect } from "react";
import { useRouter } from "next/router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay of 4 seconds for the splash screen
    const timer = setTimeout(() => {
      router.push("/login");
    }, 4000);

    // Clean up the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-blue-700">
      <div className="flex">
        <h1 className="text-8xl font-medium text-white">VT Software</h1>
        <span className="mb-12 pl-8 text-2xl text-white">TM</span>
      </div>
      <div className="pt-12">
        <p className="text-[32px] text-white">A Webber Mill Product</p>
      </div>
      <div className="absolute bottom-12 flex items-center">
        <p className="text-5xl text-white pr-4">&copy;</p>
        <span className="text-2xl text-white">Copyrights 2023</span>
      </div>
    </div>
  );
};

export default SplashScreen;
