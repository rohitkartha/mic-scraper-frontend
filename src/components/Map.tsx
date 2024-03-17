
import Image from 'next/image'

export function Map() {

    return (
      <>
        <div className="w-full h-full border">
            <Image 
                src="/map.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} 
                alt="Mic Logo">
            </Image>
        </div>
      </>
    );
}
  