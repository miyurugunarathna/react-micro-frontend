import Logo from '@internal/icons/logo';
import { Button, buttonVariants } from '@internal/ui/components/button';
import { Input } from '@internal/ui/components/input';
import { cn } from '@internal/ui/util';
import { Link } from '@tanstack/react-router';
import { Heart, ShoppingBag } from 'lucide-react';
import './styles.c.css';

const links = [
  { label: 'New', url: '#' },
  { label: 'Men', url: '#' },
  { label: 'Women', url: '#' },
  { label: 'Kids', url: '#' },
  { label: 'Sports', url: '#' },
];

function Header() {
  return (
    <header className="mx-auto">
      <div className="container grid grid-cols-12 mx-auto items-center min-h-[4.5rem]">
        <div className="col-span-2">
          <div className="w-14 h-14">
            <Logo />
          </div>
        </div>
        <div className="col-span-7 content-center justify-items-center">
          <nav>
            <ul className="flex gap-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.url}
                    className={cn(buttonVariants({ variant: 'link' }), 'p-0')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-3">
          <div className="flex gap-2">
            <Input type="search" name="search" placeholder="Search" />
            <Button variant="secondary" size="icon">
              <Heart />
            </Button>
            <Button variant="secondary" size="icon">
              <ShoppingBag />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
