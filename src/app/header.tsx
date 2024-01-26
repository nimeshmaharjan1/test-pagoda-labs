'use client';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = ['question-one', 'question-two', 'question-three', 'question-four', 'question-five', 'question-six'];
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="shadow">
      <nav className="container py-4 flex items-center justify-between">
        <div>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {links.map((link) => (
              <Link
                className={cn(
                  'transition-colors capitalize hover:text-foreground/80',
                  pathname === `/${link}` ? 'text-foreground' : 'text-foreground/60'
                )}
                key={link}
                href={link}>
                {link}
              </Link>
            ))}
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Links</SheetTitle>
                  <div className="flex flex-col gap-5 pt-6">
                    {links.map((link) => (
                      <SheetTrigger asChild key={link}>
                        <Link
                          className={cn(
                            'transition-colors capitalize hover:text-foreground/80',
                            pathname === `/${link}` ? 'text-foreground' : 'text-foreground/60'
                          )}
                          href={link}>
                          {link}
                        </Link>
                      </SheetTrigger>
                    ))}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </nav>
    </header>
  );
};

export default Header;
