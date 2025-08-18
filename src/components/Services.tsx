import { motion } from 'framer-motion';

// Service card component
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  bgColor, 
  iconBg 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  features: string[];
  bgColor: string;
  iconBg: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group rounded-2xl p-8 border ${bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg} mb-6 text-2xl text-white`}>
        <i className={icon}></i>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a href="#contact" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          了解更多服务详情
          <i className="fa-solid fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium mb-4">
              我们的核心服务
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              AI与Web3咨询解决方案
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              我们提供全方位的咨询服务，帮助企业在数字化转型中把握机遇，应对挑战，实现可持续增长。
            </p>
          </motion.div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Consulting Service */}
          <ServiceCard 
            icon="fa-solid fa-brain" 
            title="AI业务咨询" 
            description="将先进的AI技术集成到您的业务流程中，提升效率，创造新的收入来源，增强客户体验。"
            features={[
              "AI战略规划与路线图制定",
              "机器学习模型开发与部署",
              "自然语言处理与生成式AI应用",
              "数据分析与商业智能解决方案",
              "AI伦理与合规咨询"
            ]}
            bgColor="bg-green-50 dark:bg-green-950/50 border-green-100 dark:border-green-900/30"
            iconBg="bg-gradient-to-r from-green-500 to-green-600"
          />
          
          {/* Web3 Consulting Service */}
          <ServiceCard 
            icon="fa-solid fa-link" 
            title="Web3与区块链咨询" 
            description="探索去中心化技术带来的商业机会，构建安全、透明、高效的区块链解决方案。"
            features={[
              "区块链战略与用例评估",
              "智能合约开发与审计",
              "去中心化应用(DApp)开发",
              "NFT与数字资产策略",
              "Web3合规与监管咨询"
            ]}
            bgColor="bg-green-50 dark:bg-green-950/50 border-green-100 dark:border-green-900/30"
            iconBg="bg-gradient-to-r from-green-500 to-green-600"
          />
        </div>
        
        {/* Additional Services */}
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
          >
            配套专业服务
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-solid fa-laptop-code",
                title: "技术实施",
                description: "从概念到部署的全流程技术实施支持"
              },
              {
                icon: "fa-solid fa-graduation-cap",
                title: "培训赋能",
                description: "定制化培训课程，提升团队技术能力"
              },
              {
                icon: "fa-solid fa-chart-line",
                title: "市场策略",
                description: "数字产品的市场定位与推广策略"
              },
              {
                icon: "fa-solid fa-shield-alt",
                title: "安全审计",
                description: "全面的系统安全评估与漏洞检测"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 text-green-600 dark:text-green-400 text-xl">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}