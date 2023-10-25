import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 py-2 inset-x-0 bg-[#131516] border-b border-zinc-300">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-center gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <p className="text-gray-300 text-sm font-medium">Easy Language</p>
        </Link>
      </div>
    </div>
  );
}
