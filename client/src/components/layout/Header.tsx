import { useLocation } from "wouter";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [location] = useLocation();
  
  // Get breadcrumb title based on current path
  const getBreadcrumbTitle = () => {
    const path = location.split("/")[1];
    if (!path) return "Migration";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  
  // Get breadcrumb subtitle based on current path
  const getBreadcrumbSubtitle = () => {
    const pathParts = location.split("/");
    if (pathParts.length > 2 && pathParts[2] === "new") {
      return "New";
    }
    return "List";
  };

  return (
    <header className="bg-white shadow-sm border-b border-[#e5e7eb] px-6 py-3 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden text-[#4b5563] focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars text-lg"></i>
        </button>

        <div className="flex items-center space-x-2">
          <a href="#" className="text-[#1a2a38] hover:text-[#2a3b48] transition-colors">
            <i className="fas fa-info-circle"></i>
          </a>
          <span className="text-[#4b5563] font-medium">{getBreadcrumbTitle()}</span>
          <i className="fas fa-chevron-right text-xs text-[#4b5563]"></i>
          <span className="text-[#4b5563]">{getBreadcrumbSubtitle()}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-[#4b5563] hover:text-[#1a2a38] transition-colors"
          aria-label="Help"
        >
          <i className="fas fa-question-circle"></i>
        </a>
        <a
          href="/settings"
          className="flex items-center space-x-2 text-[#4b5563] hover:text-[#1a2a38] transition-colors"
        >
          <i className="fas fa-user-circle"></i>
          <span className="hidden md:inline text-sm">laharcre@rcvpartners.io</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
