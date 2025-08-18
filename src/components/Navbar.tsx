import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
           <a href="#" className="flex items-center">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/JLink AI-Black_20250817205030.png" 
              alt="JLink AI Logo" 
              className="h-12 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              服务
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              关于我们
            </a>

            <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              联系我们
            </a>
          </nav>
          
          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-sm shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              预约咨询
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 dark:text-slate-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-times text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                服务
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                关于我们
              </a>
              <a 
                href="#expertise" 
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                专业领域
              </a>
              <a 
                href="#testimonials" 
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                客户评价
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                联系我们
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-blue-600/20"
                onClick={toggleMobileMenu}
              >
                预约咨询
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}