import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/JLink AI-Black_20250817205030.png" 
                alt="JLink AI Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-6">
              领先的AI与Web3咨询服务提供商，助力企业数字化转型，创造商业价值。
            </p>
           <div className="flex space-x-4">
              {[
                { icon: "fa-brands fa-weixin", name: "微信", qrCode: "https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/微信_20250817204757.png" },
                { icon: "fa-brands fa-line", name: "Line", qrCode: "https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/line_20250817204757.png" },
                { icon: "fa-brands fa-linkedin", name: "LinkedIn", qrCode: "https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/LinkedIn_20250817204757.png" },
                { icon: "fa-brands fa-twitter", name: "Twitter", qrCode: "https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/推特_20250817204757.png" }
              ].map((social, index) => (
                <div key={index} className="relative group">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 w-40">
                     <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 w-full">
                       <img 
                         src={social.qrCode} 
                         alt={`${social.name} QR Code`} 
                         className="w-full h-auto aspect-square object-contain"
                       />
                       <p className="text-center text-sm mt-1 text-slate-700 dark:text-slate-300">{social.name}二维码</p>
                     </div>
                     {/* 小三角形指示器 */}
                     <div className="w-4 h-4 bg-white dark:bg-slate-800 border-x-0 border-t-0 border-b-2 border-l-2 border-slate-200 dark:border-slate-700 transform rotate-45 mx-auto -mt-1"></div>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">服务内容</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  AI业务咨询
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  Web3与区块链咨询
                </a>
              </li>
              <li>
              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                数字化转型战略
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                定制化开发服务
              </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  技术培训与赋能
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  首页
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  关于我们
                </a>
              </li>
              <li>

              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                  <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>
                  联系我们
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">联系信息</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-blue-500 mt-1 mr-3"></i><span className="text-slate-400">东京都中野区东中野3丁目15-15 K.Bldg 401 〒164-0003</span>
              </li>
               <li className="flex items-center">
                 <i className="fa-solid fa-phone text-blue-500 mr-3"></i>
                 <span className="text-slate-400">+81 70 9107 8886</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-blue-500 mr-3"></i>
        <span className="text-slate-400">contact@bytomdao.co.jp</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-clock text-blue-500 mr-3"></i>
                <span className="text-slate-400">周一至周五: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
             <p className="text-slate-500 text-sm mb-4 md:mb-0">
               &copy; {currentYear} BytomDAO株式会社 保留所有权利。
             </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">隐私政策</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">服务条款</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}