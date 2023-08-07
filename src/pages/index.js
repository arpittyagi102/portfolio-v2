import Image from "next/image"
import bgLight from '../assets/windows-11-light.jpg'

export default function Home(){
  return(
    <>
      <Image 
        alt="Background"
        src={bgLight}
        className="z-0"
        fill
        sizes="100vw"
        style={{
          objectFit:"cover"
        }}
      />
      <div className="w-full bg-gray-800 p-2 absolute  flex align-center justify-center bottom-0 gap-3">
          <img width="32" height="32" src="https://img.icons8.com/color/48/windows-11.png" alt="windows-11"/>
          <img width="32" height="32" src="https://img.icons8.com/color/48/windows-explorer.png" alt="windows-explorer"/>
          <img width="32" height="32" src="https://img.icons8.com/color/48/chrome--v3.png" alt="chrome--v3"/>
          <img width="32" height="32" src="https://img.icons8.com/fluency/48/spotify.png" alt="spotify"/>
          <img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/notion.png" alt="notion"/>
      </div>
    </>
  )
}