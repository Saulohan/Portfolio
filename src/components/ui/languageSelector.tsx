import React, { useState, useRef, useEffect } from "react";
import Flag from "react-world-flags";

const languages = [
  { code: "pt", label: "Português", flagCode: "BR" },
  { code: "en", label: "English", flagCode: "US" },
  { code: "es", label: "Español", flagCode: "ES" },
];

export default function LanguageSelector({ onChangeLanguage }: { onChangeLanguage: (code: string) => void }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [openUp, setOpenUp] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 150;

    if (viewportHeight - rect.bottom < dropdownHeight) {
      setOpenUp(true);
    } else {
      setOpenUp(false);
    }

    setOpen((o) => !o);
  };

  const handleSelect = (lang: typeof languages[0]) => {
    setSelected(lang);
    setOpen(false);
    if (onChangeLanguage) onChangeLanguage(lang.code);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-card text-sm cursor-pointer"
      >
        <Flag code={selected.flagCode} style={{ width: 20, height: 15 }} />
        <span>{selected.label}</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul  className={`absolute right-0 w-40 bg-card border border-border rounded-md shadow-lg z-50 ${openUp ? "bottom-full mb-1" : "mt-1"}`}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Flag code={lang.flagCode} style={{ width: 20, height: 15 }} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}