import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=professional%20team%20working%20on%20AI%20and%20Web3%20projects%2C%20modern%20office%20environment%2C%20diverse%20team%2C%20collaborative%20workspace%2C%20high-tech%20%E6%B0%9B%E5%9B%B4&sign=aa0cc2bbf080ed0d3b02ca6c26889da5" 
                alt="Our team of AI and Web3 experts" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">8+</p>
                  <p className="text-sm opacity-90">行业经验</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">200+</p>
                  <p className="text-sm opacity-90">成功项目</p>
                </div>
                 <div className="text-center">
                   <p className="text-3xl font-bold">50+</p>
                   <p className="text-sm opacity-90">技术专家</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm opacity-90">行业领域</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
                关于我们
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                引领数字化转型的<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">
                  创新咨询伙伴
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
               <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                我们是一家专注于AI和Web3技术的前沿咨询公司，我们的使命是帮助企业把握数字化转型机遇，通过创新技术实现业务增长和效率提升。
              </p>
               <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                我们的团队的顾问成员均来自行业内的专家组成，拥有丰富的实战经验和深厚的技术积累，能够为客户提供从战略规划到技术实施的全方位支持。
              </p>
            </motion.div>
            
            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">我们的核心价值观</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "fa-solid fa-lightbulb", title: "创新思维", desc: "勇于探索前沿技术与解决方案" },
                  { icon: "fa-solid fa-handshake", title: "客户至上", desc: "以客户成功为核心衡量标准" },
                  { icon: "fa-solid fa-users", title: "协作共赢", desc: "建立长期战略合作伙伴关系" },
                  { icon: "fa-solid fa-shield", title: "诚信正直", desc: "坚守道德标准与专业操守" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0">
                      <i className={value.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{value.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium text-base shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                联系我们，开启合作
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}