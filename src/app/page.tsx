import Gallery, { Gallery2, Gallery3 } from "@/components/gallery/Gallery"
import Image from "next/image"
import  bg  from "../../public/page-bg.jpg";
import  Carusel  from "@/components/carusel";
import Protokol  from "../../public/protokol.jpg";
import Qarori  from "../../public/qarori.jpg";
import Nizomi  from "../../public/nizomi.jpg";
import Klinik  from "../../public/klinik.jpg";
import Narxlar  from "../../public/narxlar.jpg";
import { Pop } from "@/components/theme/Popover";
import Link from "next/link";
import { Questions } from "@/components/Questions";
import { About } from "@/components/About";
export default function Home() {
  return (
    <>
    
       <Image 
        className="hidden md:flex"
        width={0}
        height={0}
        src={bg}
        alt="background_picture"/>
          <div className="flex flex-col w-full bg-blue-600 p-4 py-10 sm:px-20 sm:flex-row justify-between items-center">
                    <p className=" text-white"> 
                    <span className="text-4xl font-medium">Biz bilan bog&apos;lanmoqchimisiz?</span>
                     <br/> 
                     <span className="text-lg">Hoziroq bog&apos;laning ! </span>
                     </p>
                    <p className="font-medium text-slate-700  dark:text-white  hover:bg-slate-700 duration-150"><Pop/></p>
                </div>
      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
        <Carusel/>
        <About/>
        <Gallery />
        {/* <Gallery2 /> */}
        
        <Questions/>
        

        <Gallery3 />

      
<h2 className=" pt-8 text-3xl">Meyoriy hujjatlar</h2>
      <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
        <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1MOrcmzP1SAvMn2UugMoCwEQ9ri5ePABn/view?usp=sharing' title="Tashkilot Protokollari">
          <Image src={Protokol} alt={"Protokol"} width={100} height={100}/>
        </Link>
         <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1w8E1ldyYR2DIbVjiOqUQFPH3Vu_fmmYj/view?usp=drive_link' title="Tashkilot qarori">
         <Image src={Qarori} alt={"qaror"} width={100} height={100}/>
        </Link>
         <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/18HkgtgLjzm_hS1ovyLFgPZaeciI7YreM/view?usp=drive_link' title="Tashkilotda bor hizmatlar narxlari">
          <Image src={Narxlar} alt={"narxlar"} width={120} height={120}/>
        </Link>

        <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/19dPYcRh9OFXDuMQl3ZnAe9m28k6Ay3xz/view?usp=drive_link' title="Tashkilot Nizomlari">
          <Image src={Nizomi} alt={"nizomi"} width={120} height={120}/>
        </Link>
        <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1kRB9rWfQ6X8ZzLOmISSBRjfrclRTwkT7/view?usp=drive_link' title="Tashkilot Klinik buyruq">
          <Image src={Klinik} alt={"Klinik"} width={120} height={120}/>
        </Link>
      </section>
      </main>
    </>
   
  )
}
