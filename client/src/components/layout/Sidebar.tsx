import { Link, useLocation } from "wouter";

// Define navigation items
const primaryNavItems = [
  { label: "MIGRATIONS", icon: "exchange-alt", href: "/migrations" },
  { label: "ESTIMATES", icon: "calculator", href: "/estimates" },
];

const secondaryNavItems = [
  { label: "CONNECTIONS", icon: "plug", href: "/connections" },
  { label: "SETTINGS", icon: "cog", href: "/settings" },
  { label: "HELP & INFORMATION", icon: "question-circle", href: "/help" },
  { label: "POLICY & AGREEMENTS", icon: "file-contract", href: "/policy" },
];

const Sidebar = () => {
  const [location] = useLocation();

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <aside className="sidebar h-full flex flex-col overflow-y-auto">
      <div className="p-4 border-b border-[#2a3b48]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">
            Migration<span className="text-[#e86c34]">Tool</span>
          </span>
        </Link>
        <div className="text-xs text-gray-400">by RevPartners</div>
      </div>

      <nav className="p-2 flex-grow">
        <ul className="space-y-1">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`sidebar-item ${isActive(item.href) ? "active" : ""}`}
              >
                <i className={`fas fa-${item.icon} w-5`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-[#2a3b48] my-4"></div>

        <ul className="space-y-1">
          {secondaryNavItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`sidebar-item ${isActive(item.href) ? "active" : ""}`}
              >
                <i className={`fas fa-${item.icon} w-5`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
