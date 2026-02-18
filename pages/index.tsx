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

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100" dir="rtl">
        {/* Beautiful gradient background like reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-pink-200/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-300/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-300/20 via-transparent to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-8">
          
          {/* Header */}
          <header className="text-center mb-8">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative z-10">
                יורם פרידמן
              </h1>
              <p className="text-lg text-gray-700 mb-2 relative z-10">סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-sm text-gray-600 relative z-10">מעל 40 שנות ניסיון | זוכה פרס סוכן מצטיין 10 פעמים</p>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Column - Value Proposition */}
              <div className="space-y-6">
                <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
                    😱 85% מהישראלים משלמים על ביטוח כפול!
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 relative z-10">
                    האם גם אתם משלמים יותר מדי? בדיקה מקצועית של סוכן מורשה ללא עלות
                  </p>
                  <div className="backdrop-blur-sm bg-green-100/30 border border-green-300/40 p-4 rounded-xl relative z-10">
                    <p className="text-green-800 font-semibold text-center">
                      "בדיקה חינם. הוזלה אמיתית. שקט למשפחה."
                    </p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">איך זה עובד?</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center">
                      <div className="backdrop-blur-sm bg-blue-500/80 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3 border border-white/20">1</div>
                      <p className="text-gray-700">השאירו פרטים</p>
                    </div>
                    <div className="flex items-center">
                      <div className="backdrop-blur-sm bg-blue-500/80 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3 border border-white/20">2</div>
                      <p className="text-gray-700">אנו בודקים באמצעות הר הביטוח</p>
                    </div>
                    <div className="flex items-center">
                      <div className="backdrop-blur-sm bg-blue-500/80 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3 border border-white/20">3</div>
                      <p className="text-gray-700">אתם מקבלים דוח והמלצות</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">למה לבחור בנו?</h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-center">
                      <span className="text-green-600 ml-2">✓</span>
                      <span className="text-gray-700">עובדים עם כל חברות הביטוח</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 ml-2">✓</span>
                      <span className="text-gray-700">מעל 40 שנות ניסיון בתחום</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 ml-2">✓</span>
                      <span className="text-gray-700">זוכה פרס סוכן מצטיין 10 פעמים</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 ml-2">✓</span>
                      <span className="text-gray-700">שירות מעולה למשפחות ועצמאים</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center relative z-10">
                  בדקו את הביטוח שלכם עכשיו
                </h3>
                <p className="text-gray-600 mb-6 text-center relative z-10">
                  מלאו 3 פרטים פשוטים ונחזור אליכם תוך יום
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-white/50 text-gray-800 placeholder-gray-600"
                      placeholder="הכנסו את השם המלא"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      טלפון נייד *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-white/50 text-gray-800 placeholder-gray-600"
                      placeholder="050-1234567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      אימייל (אופציונלי)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/30 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-white/50 text-gray-800 placeholder-gray-600"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full backdrop-blur-sm bg-green-600/80 hover:bg-green-700/80 border border-white/20 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
                  >
                    בדקו את הביטוח שלי עכשיו
                  </button>
                </form>
                
                <div className="mt-6 text-center relative z-10">
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center backdrop-blur-sm bg-green-500/80 hover:bg-green-600/80 border border-white/20 text-white px-6 py-3 rounded-lg transition duration-200"
                  >
                    <span className="ml-2">💬</span>
                    שלחו הודעת וואטסאפ
                  </a>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 text-center relative z-10">
                  הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <p className="mb-2 text-gray-700 font-medium relative z-10">יורם פרידמן - סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-sm text-gray-600 relative z-10">שעות פעילות: ראשון-חמישי 10:00-18:00</p>
              <p className="text-xs mt-2 text-gray-500 relative z-10">אתר זה פועל בהתאם לכללי רשות שוק ההון, הביטוח והחיסכון</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}