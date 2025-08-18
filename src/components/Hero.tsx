import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 -z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-6">
                引领AI与Web3创新
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">释放</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                  AI与Web3
                </span>
                <span className="block">的商业潜力</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl"
            >
              我们提供前沿的AI和Web3咨询服务，帮助企业把握技术变革机遇，实现数字化转型与创新增长。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a 
                href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-base shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              了解我们的服务
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
              <a 
                href="#expertise" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-slate-200 dark:border-slate-700"
              >
                <i className="fa-solid fa-lightbulb mr-2"></i>
                探索专业领域
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">受到行业领先企业的信任</p>
               <div className="flex justify-center">
                 <img 
                   src="https://lf-code-agent.coze.cn/obj/x-ai-cn/251723308034/attachment/image_20250817195258.png" 
                   alt="Trusted by leading industry enterprises" 
                   className="max-w-full h-auto"
                 />
               </div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-blue-900/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%20and%20Web3%20technology%20concept%2C%20modern%20digital%20illustration%2C%20futuristic%20interface%2C%20professional%20consulting%20services%2C%20data%20visualization%2C%20holographic%20elements&sign=e3b2726a8e8b88a6ff801d8aee2280fb" 
                alt="AI and Web3 Consulting Services" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <i className="fa-solid fa-rocket text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">98%</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">客户满意度</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <i className="fa-solid fa-users text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">50+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">行业专家</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}