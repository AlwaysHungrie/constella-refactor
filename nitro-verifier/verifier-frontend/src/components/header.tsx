import Image from "next/image";
import { ToolMode, TITLE } from "@/config";

export default function Header({ toolMode }: { toolMode: ToolMode }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src="/pineapple.svg" alt="Pineapple" width={58*0.75} height={111*0.75} />
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-4xl font-bebas-neue font-bold mt-6">Pineappl Nitro Verifier</h1>
        <p className="text-lg -mt-2">
          {TITLE[toolMode].description}
        </p>
      </div>
    </div>
  )
}