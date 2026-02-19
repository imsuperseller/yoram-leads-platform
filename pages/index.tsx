import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CheckCircle, Star, Shield, Clock, Users, TrendingUp } from 'lucide-react'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const heroAnimation = useAnimation()

  const testimonialRef = useRef(null)
  const testimonialInView = useInView(testimonialRef, { once: true })
  const testimonialAnimation = useAnimation()

  useEffect(() => {
    if (heroInView) {
      heroAnimation.start("visible")
    }
  }, [heroInView, heroAnimation])

  useEffect(() => {
    if (testimonialInView) {
      testimonialAnimation.start("visible")
    }
  }, [testimonialInView, testimonialAnimation])

  return (
    <>
      <Head>
        <title>יורם פרידמן - בדיקת ביטוח חינם | חסכו עד 3,200₪ בשנה</title>
        <meta name="description" content="85% מהישראלים משלמים על ביטוח כפול! בדיקה מקצועית בחינם של סוכן מורשה + 40 שנות ניסיון. הר הביטוח." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="יורם פרידמן - בדיקת ביטוח חינם | חסכו עד 3,200₪" />
        <meta property="og:description" content="85% מהישראלים משלמים על ביטוח כפול. בדיקה מקצועית בחינם עם יורם פרידמן - סוכן מורשה" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl" style={{ fontFamily: 'Heebo, Assistant, sans-serif' }}>
        {/* Floating WhatsApp Button with Advanced Animation */}
        <motion.div 
          className="fixed bottom-6 left-6 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 2
            }
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 15,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a
            href="https://wa.me/972501234567?text=שלום יורם, אני מעוניין בבדיקת ביטוח חינם"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl overflow-hidden group"
            whileHover={{
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
          >
            {/* Animated background pulse */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </motion.a>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* HERO SECTION - Advanced Interactive Design */}
          <motion.section 
            ref={heroRef}
            className="relative bg-gradient-to-bl from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-4 overflow-hidden"
            initial="hidden"
            animate={heroAnimation}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } }
            }}
          >
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Main Value Proposition with Advanced Animations */}
                <div className="space-y-8">
                  {/* Licensed Agent Badge */}
                  <motion.div 
                    className="inline-flex items-center bg-white/20 backdrop-blur-xl rounded-full px-6 py-3 border border-white/30 shadow-2xl"
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full ml-3 shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(255, 193, 7, 0.3)",
                          "0 0 20px rgba(255, 193, 7, 0.6)",
                          "0 0 10px rgba(255, 193, 7, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      בחינם
                    </motion.span>
                    <span className="text-sm font-medium">סוכן ביטוח מורשה #12345</span>
                  </motion.div>

                  {/* Main Headlines with Text Animation */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                      <motion.span 
                        className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        85% מהישראלים
                      </motion.span>
                      <motion.span 
                        className="block mt-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        משלמים על ביטוח{' '}
                        <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">כפול!</span>
                      </motion.span>
                    </h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 mb-4"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      בדיקה מקצועית של סוכן מורשה ב
                      <span className="font-bold bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent"> חינם לחלוטין</span>
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg text-blue-200 flex items-center gap-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <Shield className="w-5 h-5" />
                      גלו כמה אתם יכולים לחסוך • מעל 40 שנות ניסיון • הר הביטוח
                    </motion.p>
                  </motion.div>

                  {/* Interactive Statistics Cards */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                    }}
                  >
                    {[
                      { value: "3,200₪", label: "חיסכון ממוצע בשנה", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
                      { value: "1,000+", label: "לקוחות מרוצים", icon: Users, color: "from-blue-400 to-blue-500" },
                      { value: "24h", label: "זמן מענה", icon: Clock, color: "from-purple-400 to-purple-500" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
                          visible: { opacity: 1, scale: 1, rotateY: 0 }
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          transition: { duration: 0.3 } 
                        }}
                      >
                        <div className={`text-center bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden`}>
                          {/* Animated background gradient */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />
                          
                          <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
                          <div className="text-2xl font-bold text-white relative z-10">{stat.value}</div>
                          <div className="text-sm text-white/90 relative z-10">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right: Premium Form Design */}
                <motion.div 
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, x: 50, rotateY: -15 },
                    visible: { opacity: 1, x: 0, rotateY: 0 }
                  }}
                >
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden">
                    {/* Animated form background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))",
                          "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05))",
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <motion.h2 
                          className="text-3xl font-bold text-gray-800 mb-3"
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(0,0,0,0)",
                              "0 2px 10px rgba(0,0,0,0.1)",
                              "0 0 0px rgba(0,0,0,0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          בדקו את הביטוח שלכם בחינם
                        </motion.h2>
                        <p className="text-gray-600 flex items-center justify-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          3 שדות פשוטים • מענה תוך 24 שעות • ללא התחייבות
                        </p>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {[
                          { name: 'fullName', placeholder: 'שם מלא *', type: 'text', required: true },
                          { name: 'phone', placeholder: 'טלפון נייד *', type: 'tel', required: true },
                          { name: 'email', placeholder: 'אימייל (אופציונלי)', type: 'email', required: false }
                        ].map((field, index) => (
                          <motion.div
                            key={field.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <motion.input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={handleChange}
                              required={field.required}
                              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-800 text-lg font-medium transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                              placeholder={field.placeholder}
                              whileFocus={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                            />
                          </motion.div>
                        ))}
                        
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 text-lg shadow-xl relative overflow-hidden group"
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            boxShadow: [
                              "0 10px 30px rgba(34, 197, 94, 0.2)",
                              "0 15px 40px rgba(34, 197, 94, 0.3)",
                              "0 10px 30px rgba(34, 197, 94, 0.2)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {/* Animated button background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut"
                            }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            בדקו את הביטוח שלי עכשיו
                            <motion.span
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            >
                              🔍
                            </motion.span>
                          </span>
                        </motion.button>
                      </form>
                      
                      <motion.p 
                        className="text-xs text-gray-500 mt-6 text-center flex items-center justify-center gap-1"
                        animate={{
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔒 הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Advanced Testimonials Section */}
          <motion.section 
            ref={testimonialRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
            initial="hidden"
            animate={testimonialAnimation}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 border border-blue-300 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  לקוחות שכבר חוסכים
                </span>
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    name: "דוד כ.", 
                    location: "תל אביב", 
                    quote: "יורם גילה שיש לי שלושה ביטוחי חיים כפולים!", 
                    savings: "₪2,400", 
                    color: "from-green-500 to-emerald-500",
                    avatar: "ד"
                  },
                  { 
                    name: "רחל ל.", 
                    location: "חיפה", 
                    quote: "יורם הראה לי פערים בכיסוי ועזר לי לחסוך.", 
                    savings: "₪1,800", 
                    color: "from-blue-500 to-cyan-500",
                    avatar: "ר"
                  },
                  { 
                    name: "משה א.", 
                    location: "נתניה", 
                    quote: "השירות מעולה! ביטל פוליסות מיותרות.", 
                    savings: "₪3,200", 
                    color: "from-purple-500 to-violet-500",
                    avatar: "מ"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -15 },
                      visible: { opacity: 1, y: 0, rotateX: 0 }
                    }}
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-r-4 border-transparent bg-gradient-to-br from-white to-gray-50 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                      {/* Animated border */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[2px]`}>
                        <div className="bg-white rounded-2xl w-full h-full" />
                      </div>
                      
                      <div className="relative z-10">
                        {/* Star rating */}
                        <motion.div 
                          className="flex gap-1 mb-4"
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </motion.div>
                        
                        <div className="flex items-center mb-6">
                          <motion.div 
                            className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -10, 10, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {testimonial.avatar}
                          </motion.div>
                          <div className="mr-4">
                            <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                          </div>
                        </div>
                        
                        <motion.p 
                          className="text-gray-700 mb-6 text-lg leading-relaxed"
                          initial={{ opacity: 0.8 }}
                          whileInView={{ opacity: 1 }}
                        >
                          "{testimonial.quote}"
                        </motion.p>
                        
                        <motion.div 
                          className={`text-3xl font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          {testimonial.savings} חיסכון בשנה
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Premium CTA Section */}
          <motion.section 
            className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  אל תחכו - בדקו עכשיו!
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                כל יום שאתם מחכים זה כסף שאתם מאבדים על ביטוח מיותר
              </motion.p>
              
              <motion.div 
                className="flex flex-col md:flex-row gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  onClick={() => document.querySelector('form')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-10 py-5 rounded-xl font-bold text-xl shadow-2xl relative overflow-hidden group min-w-[280px]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(255, 193, 7, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">📋 בדיקה חינם עכשיו</span>
                </motion.button>
                
                <motion.a
                  href="https://wa.me/972501234567?text=שלום יורם, אני רוצה בדיקת ביטוח חינם"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 backdrop-blur-sm min-w-[280px]"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(255, 255, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 וואטסאפ מהיר
                </motion.a>
              </motion.div>
            </div>
          </motion.section>

          {/* Premium Footer */}
          <footer className="bg-gradient-to-r from-gray-900 to-slate-900 text-white py-12">
            <motion.div 
              className="max-w-4xl mx-auto px-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="font-bold mb-3 text-xl"
                whileHover={{ scale: 1.02 }}
              >
                יורם פרידמן - סוכן ביטוח מורשה #12345-67890
              </motion.p>
              <p className="text-gray-300 text-lg mb-2">שעות פעילות: ראשון-חמישי 10:00-18:00 | זמין בוואטסאפ 24/7</p>
              <p className="text-gray-400 text-sm">פועל בהתאם לכללי רשות שוק ההון והביטוח</p>
            </motion.div>
          </footer>
        </div>
      </div>
    </>
  )
}