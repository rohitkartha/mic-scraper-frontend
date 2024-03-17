
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
      <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
                src="/apple-touch-icon.png"
                width={50}
                height={50}
                alt="Mic Logo"
            />  
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mic Finder</span>
            </Link>
        </div>
        </nav>
      </>
    );
}
  
  