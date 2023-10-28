import { Icons } from "@/components/Icons";
import Subjects from "@/components/Subjects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12 px-2">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
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

        <Subjects />

        <div className="text-sm mt-6">
          <p>If you would like to contact me here are my socials.</p>
          <div className="flex gap-2 justify-center mt-1">
            <a target="_blank" href="https://github.com/umarxd">
              <Icons.githubLogo width={24} height={24} />
            </a>
            <a target="_blank" href="https://twitter.com/eomer___">
              <Icons.twitterLogo width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
