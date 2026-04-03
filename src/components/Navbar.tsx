import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Guides", href: "#guides" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-primary">iRM</span>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleClick(l.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <button key={l.href} onClick={() => handleClick(l.href)} className="block w-full text-left text-sm text-muted-foreground hover:text-primary">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
