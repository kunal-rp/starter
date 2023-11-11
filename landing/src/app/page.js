import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center space-y-[10%] p-5 bg-white">
      <div className="flex flex-row w-full">
        <Image
          width={1500}
          height={300}
          src="/materri_green.png"
          className="max-h-[40px] w-auto"
        />
        <div className="m-auto" />
        <div className=" flex-row hidden md:flex md:space-x-10 items-center ">
          <h2 className="text-lg text-black">Features</h2>
          <h2 className="text-lg text-black">Pricing</h2>
          <h2 className="text-lg text-black">Compare</h2>
        </div>
      </div>
      <div className="flex flex-col w-fit text-black text-center items-center space-y-10 m-5 md:ml-[20%] md:mr-[20%]">
        <h1 className="text-5xl font-medium text-center ">
          A product designing platform built around{" "}
          <span className="underline decoration-primary">procuring</span> &{" "}
          <span className="underline decoration-primary">delivering</span>{" "}
          <span className="text-secondary">materials</span>.
        </h1>
        <h3 className="text-xl">
          Create products with materials as the foundation. Drive product
          development while keeping continuity & logistics in focus.
        </h3>
        <div className="flex flex-row bg-primary p-2 w-fit rounded-xl items-center space-x-2">
          <h3 className="w-fit text-white text-xl rounded-2xl ">
            Request a Demo
          </h3>
          <Image
            width={512}
            height={512}
            src="/laptop.png"
            className="text-white max-h-[20px] w-auto"
          />
        </div>
      </div>
    </main>
  );
}
