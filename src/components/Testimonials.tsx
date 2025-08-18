import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "张明",
    position: "某金融科技公司 CEO",
    content: "与这家咨询公司合作是我们做过的最佳决策之一。他们的AI解决方案帮助我们将风控效率提升了40%，同时降低了15%的运营成本。团队的专业知识和执行力给我们留下了深刻印象。",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle-aged%20asian%20man%2C%20business%20professional%2C%20confident%20expression&sign=1cb15f13a3b3b351972586d8bffb7e21"
  },
  {
    id: 2,
    name: "李婷",
    position: "某零售集团 数字化总监",
    content: "他们为我们构建的智能推荐系统彻底改变了我们与客户互动的方式。上线三个月内，我们的转化率提升了25%，客户满意度显著提高。他们不仅提供技术方案，还帮助我们培养了内部团队能力。",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle-aged%20asian%20woman%2C%20technology%20executive%2C%20professional%20appearance&sign=4222b5cfc61b9f31f5abb99be28e4557"
  },
  {
    id: 3,
    name: "王建国",
    position: "某制造企业 运营副总裁",
    content: "区块链解决方案帮助我们实现了供应链的全程透明化，大幅降低了欺诈风险和运营成本。团队对制造业的深刻理解让解决方案落地非常顺利，超出了我们的预期。",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=senior%20asian%20man%2C%20manufacturing%20executive%2C%20experienced%20look&sign=f199a48faeee19a2e129f583258e83e9"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-50, 0, 50], [0, 1, 0]);
  const scale = useTransform(x, [-50, 0, 50], [0.8, 1, 0.8]);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Update motion values when active index changes
  useEffect(() => {
    x.set(0);
    setTimeout(() => x.set(50), 2500);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      x.set(0);
    }, 5000);
  }, [activeIndex, x]);
  
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              客户评价
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              客户对我们服务的评价
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              听听我们的客户如何评价我们的AI和Web3咨询服务，以及这些解决方案如何帮助他们实现业务目标。
            </p>
          </motion.div>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            style={{ x, opacity, scale }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-700"
          >
            {/* Quote Icon */}
            <div className="text-5xl text-blue-500/20 mb-6">
              <i className="fa-solid fa-quote-right"></i>
            </div>
            
            {/* Testimonial Content */}
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 italic mb-8">
              {testimonials[activeIndex].content}
            </p>
            
            {/* Client Info */}
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-slate-500 dark:text-slate-400">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}