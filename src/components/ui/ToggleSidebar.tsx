import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "../ThemeToggle";
import { useEffect, useRef, useState } from "react";

export function ToggleSidebar() {

      const [isOpen, setIsOpen] = useState(false);
      const isMobile = useIsMobile();
      const menuRef = useRef<HTMLDivElement>(null);
      const buttonRef = useRef<HTMLButtonElement>(null);
      
      useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (isOpen &&
            menuRef.current &&
            buttonRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            !buttonRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);

  return (
    <>
        {!isMobile ? (
            <>
            <ThemeToggle className="fixed top-0 right-0 m-4 z-50" />
            <a
                href="https://buymeacoffee.com/saulohan"
                target="_blank"
                rel="noopener noreferrer"
                title='Compre meu café'
            >
                <img src="/images/coffe.png" alt="café" className="w-12 h-12 fixed top-10 right-0 m-4 z-50 transition" />
            </a>  
            </> 
            ) : 
            (
            <>
                <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-10 -translate-y-1/4 right-0 z-50 w-5 h-10 bg-gray-600 text-white rounded-l-lg shadow-lg
                            flex items-center justify-center transition-all duration-300 hover:bg-gray-600"

                aria-label={isOpen ? 'Abrir menu': 'Fechar menu' }
                >
                <span className="text-2xl select-none">
                    {isOpen ? '>' : '<'}
                </span>
                </button>

                <div 
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-20  bg-gray-200 bg-opacity-25 dark:bg-slate-900 dark:bg-opacity-50  shadow-lg p-6 pt-20  transition-transform duration-300 z-40
                    ${isOpen ?  '-translate-x-0' : 'translate-x-full'}`}
                >   
                <div className="">
                <ThemeToggle className="fixed bottom-0 right-0 m-4 z-50" />
                <a
                    href="https://buymeacoffee.com/saulohan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title='Compre meu café'
                >
                    <img src="/images/coffe.png" alt="café" className="w-14 h-14 fixed top-0 right-0 m-4 z-50 transition" />
                </a>    
                </div>     
                </div>
            </>
        )}
    </>
  )
}
