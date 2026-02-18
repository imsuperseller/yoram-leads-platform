import Head from 'next/head'
import { useState } from 'react'

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

  return (
    <>
      <Head>
        <title>יורם פרידמן - סוכן ביטוח מורשה | בדיקה חינם</title>
        <meta name="description" content="בדיקה חינם. הוזלה אמיתית. שקט למשפחה. יורם פרידמן - סוכן ביטוח מורשה עם מעל 40 שנות ניסיון." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="יורם פרידמן - בדיקת ביטוח חינם" />
        <meta property="og:description" content="85% מהישראלים משלמים על ביטוח כפול. בדקו את הביטוח שלכם בחינם עם יורם פרידמן - סוכן מורשה" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100" dir="rtl">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-green-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="relative container mx-auto px-4 py-8">
          
          {/* Header */}
          <header className="text-center mb-12">
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
              {/* Glass effect inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 relative z-10">
                יורם פרידמן
              </h1>
              <p className="text-xl text-gray-700 mb-3 relative z-10">סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-gray-600 relative z-10">מעל 40 שנות ניסיון | זוכה פרס סוכן מצטיין 10 פעמים</p>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Column - Value Proposition Card */}
              <div className="relative">
                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/90 to-blue-600/90 border border-white/20 rounded-[28px] shadow-2xl p-8 text-white relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[28px]"></div>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <span className="text-sm font-medium">⭐ בדיקה חינם</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                    85% מהישראלים
                  </h2>
                  <p className="text-xl mb-6 text-blue-100 relative z-10">
                    משלמים על ביטוח כפול
                  </p>
                  
                  <p className="text-blue-100 mb-8 relative z-10">
                    בדיקה מקצועית של סוכן מורשה ללא עלות. גלו כמה אתם יכולים לחסוך ללא התחייבות.
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8 relative z-10">
                    <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">בדיקת הר הביטוח</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">זיהוי כפילויות</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">המלצות מותאמות</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">מעל 40 שנות ניסיון</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 relative z-10">
                    <p className="text-center font-semibold">
                      "בדיקה חינם. הוזלה אמיתית. שקט למשפחה."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/90 to-emerald-600/90 border border-white/20 rounded-[28px] shadow-2xl p-8 text-white relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[28px]"></div>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <span className="text-sm font-medium">📋 טופס מהיר</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 relative z-10">
                    בדיקה חינם
                  </h3>
                  <p className="text-green-100 mb-8 relative z-10">
                    מלאו 3 פרטים פשוטים ונחזור אליכם תוך יום
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                      <label htmlFor="fullName" className="block text-green-100 font-medium mb-3">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-green-200 transition-all duration-300"
                        placeholder="הכנסו את השם המלא"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-green-100 font-medium mb-3">
                        טלפון נייד *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-green-200 transition-all duration-300"
                        placeholder="050-1234567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-green-100 font-medium mb-3">
                        אימייל (אופציונלי)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-green-200 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg transform hover:scale-[1.02]"
                    >
                      📅 בדקו את הביטוח שלי עכשיו
                    </button>
                  </form>
                  
                  <div className="mt-6 text-center relative z-10">
                    <a
                      href="https://wa.me/972501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <span className="ml-2">💬</span>
                      שלחו הודעת וואטסאפ
                    </a>
                  </div>
                  
                  <p className="text-xs text-green-200 mt-6 text-center relative z-10">
                    הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 relative overflow-hidden">
              {/* Glass effect inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <p className="mb-2 text-gray-700 font-semibold relative z-10">יורם פרידמן - סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-sm text-gray-600 relative z-10">שעות פעילות: ראשון-חמישי 10:00-18:00</p>
              <p className="text-xs mt-2 text-gray-500 relative z-10">אתר זה פועל בהתאם לכללי רשות שוק ההון, הביטוח והחיסכון</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}