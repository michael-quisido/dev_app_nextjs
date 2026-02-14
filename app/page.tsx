import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menuItems = ["Home", "Products", "Reviews", "Blog", "About Us"];

  return (
    <div className="flex min-h-screen flex-col pt-5 pl-5 pr-5">
      <div className="flex flex-col md:flex-row items-start md:justify-between">
        <div className="flex items-center gap-2 pl-[5px] pt-[5px]">
          <Image
            src="/kmcq-cloud-company-white-logo.png"
            alt="KMCQ Company Logo"
            width={157}
            height={0}
            unoptimized
            className="w-[100px] sm:w-[120px] md:w-[157px]"
            style={{ height: 'auto' }}
          />
          <span className="font-ubuntu text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold tracking-wide translate-x-[3px] md:translate-y-[35px]">
            KMCQ COMPANY
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[5px] md:gap-[5px] pt-[15px] md:pt-[45px] pl-[5px]">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="font-ubuntu text-white text-[15px] hover:text-gray-300 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
