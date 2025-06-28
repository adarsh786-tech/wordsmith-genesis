
import { Button } from "@/components/ui/button";
import { PenTool, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <PenTool className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WordSmith Genesis
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              History
            </a> */}
            <ThemeToggle />
            {/* <Button variant="outline" className="mr-2">
              Sign In
            </Button> */}
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
