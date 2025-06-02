import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import type { ButtonProps } from '@/components/ui/button';

type ThemeToggleProps = ButtonProps;

const ThemeToggle = ({ className = '', ...props }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setIsDark(!isDark)}
      className={`transition bg-background border-border ${className}`}
      {...props}
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
