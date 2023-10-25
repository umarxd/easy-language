import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12">
      <div className="flex flex-col gap-2 justify-center items-center text-center ">
        <Image
          className="mx-auto"
          src="/bongocat.svg"
          width={200}
          height={200}
          alt="Picture of a Bongo Cat"
        />

        <h3 className="">Welcome to Easy Language!</h3>
        <p>
          The purpose of this website is to teach you English. Feel free to use
          a translator if you get stuck as this website is completely in
          English.
        </p>
        <p className="text-sm mt-4">
          If you would like to contact me here are my socials.
        </p>
      </div>
    </div>
  );
}
