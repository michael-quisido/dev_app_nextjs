import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start pt-15 pl-15">
      <div className="flex items-center gap-2 pl-[5px] pt-[5px]">
        <Image
          src="/kmcq-cloud-company-white-logo.png"
          alt="KMCQ Company Logo"
          width={157}
          height={0}
          className="w-[100px] sm:w-[120px] md:w-[157px]"
          style={{ height: 'auto' }}
        />
        <span className="font-ubuntu text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold tracking-wide translate-y-[3px]">
          KMCQ COMPANY
        </span>
      </div>
    </div>
  );
}
