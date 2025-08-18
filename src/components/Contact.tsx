import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('表单提交成功！我们的顾问将尽快与您联系。');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
                  联系我们
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  准备好开始您的<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                    数字化转型之旅了吗？
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  无论您是想了解更多关于我们的服务，还是需要定制化的解决方案咨询，我们的团队都随时准备为您提供帮助。
                </p>
              </motion.div>
              
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 mb-8"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4 flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">电子邮件</h4>
      <p className="text-slate-600 dark:text-slate-300">contact@bytomdao.co.jp</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4 flex-shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                     <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">电话</h4>
                     <p className="text-slate-600 dark:text-slate-300">+81 70 9107 8886</p>
                   </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl mr-4 flex-shrink-0">
                    <i className="fa-solid fa-map-marker-alt"></i>
                  </div>
                  <div>
                     <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">办公地址</h4>
                     <p className="text-slate-600 dark:text-slate-300">东京都中野区东中野3丁目15-15 K.Bldg 401 〒164-0003</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
               <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">关注我们</h4>
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
                        className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-all duration-300"
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
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">发送咨询信息</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    感兴趣的服务
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">请选择服务类型</option>
                    <option value="ai-consulting">人工智能咨询</option>
                    <option value="web3-consulting">Web3与区块链咨询</option>
                    <option value="digital-transformation">数字化转型战略</option>
                    <option value="custom-development">定制化开发服务</option>
                    <option value="training">技术培训与赋能</option>
                    <option value="other">其他服务</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    咨询内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-base shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      发送中...
                    </>
                  ) : (
                    <>
                      发送咨询信息
                      <i className="fa-solid fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  提交即表示您同意我们的隐私政策和服务条款
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}