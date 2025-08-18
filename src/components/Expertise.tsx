import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

// Expertise data for radar chart
const expertiseData = [
  { subject: '人工智能', A: 90, fullMark: 100 },
  { subject: '机器学习', A: 85, fullMark: 100 },
  { subject: '区块链', A: 88, fullMark: 100 },
  { subject: '智能合约', A: 82, fullMark: 100 },
  { subject: '数据分析', A: 92, fullMark: 100 },
  { subject: '云服务', A: 78, fullMark: 100 },
];

// Industry expertise data
const industries = [
  {
    icon: "fa-solid fa-industry",
    title: "制造业",
    description: "智能工厂、预测性维护、供应链优化"
  },
  {
    icon: "fa-solid fa-bank",
    title: "金融服务",
    description: "智能风控、区块链支付、合规解决方案"
  },
  {
    icon: "fa-solid fa-heartbeat",
    title: "医疗健康",
    description: "医疗数据分析、个性化医疗、健康管理"
  },
  {
    icon: "fa-solid fa-shopping-cart",
    title: "零售电商",
    description: "智能推荐、客户洞察、供应链优化"
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "教育培训",
    description: "个性化学习、智能评测、教育内容生成"
  },
  {
    icon: "fa-solid fa-city",
    title: "政府与公共事业",
    description: "智慧城市、公共服务优化、数据治理"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
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
              专业领域
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              我们的技术专长与行业经验
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              我们在AI和Web3领域拥有深厚的技术积累和丰富的行业经验，能够为不同行业客户提供定制化解决方案。
            </p>
          </motion.div>
        </div>
        
        {/* Expertise Radar Chart & Industries */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">技术能力雷达图</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={expertiseData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 14 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748b' }} />
                  <Radar
                    name="技术能力"
                    dataKey="A"
                    stroke="#4CAF50"
                    fill="#4CAF50"
                    fillOpacity={0.6}
                    animationDuration={1500}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Industry Expertise */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6"
            >
              行业解决方案经验
            </motion.h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              我们深入理解不同行业的业务特点和挑战，能够提供针对性的AI和Web3解决方案，帮助客户实现数字化转型目标。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl mb-4">
                    <i className={industry.icon}></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{industry.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}