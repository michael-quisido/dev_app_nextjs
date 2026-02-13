import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start pt-15 pl-15">
      <div className="flex items-center gap-3 pl-[15px] pt-[15px]">
        <Image
          src="/kmcq-cloud-company-white-logo.png"
          alt="KMCQ Company Logo"
          width={157}
          height={0}
          style={{ height: 'auto' }}
        />
        <span className="font-ubuntu text-white text-[40px] font-normal tracking-wide">
          KMCQ COMPANY
        </span>
      </div>
    </div>
  );
}
