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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100" dir="rtl">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header */}
          <header className="text-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                יורם פרידמן
              </h1>
              <p className="text-lg text-blue-700 mb-2">סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-sm text-gray-600">מעל 40 שנות ניסיון | זוכה פרס סוכן מצטיין 10 פעמים</p>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Column - Value Proposition */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    😱 85% מהישראלים משלמים על ביטוח כפול!
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    האם גם אתם משלמים יותר מדי? בדיקה מקצועית של סוכן מורשה ללא עלות
                  </p>
                  <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded">
                    <p className="text-green-800 font-semibold text-center">
                      "בדיקה חינם. הוזלה אמיתית. שקט למשפחה."
                    </p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">איך זה עובד?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">1</div>
                      <p>השאירו פרטים</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">2</div>
                      <p>אנו בודקים באמצעות הר הביטוח</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">3</div>
                      <p>אתם מקבלים דוח והמלצות</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">למה לבחור בנו?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      עובדים עם כל חברות הביטוח
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      מעל 40 שנות ניסיון בתחום
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      זוכה פרס סוכן מצטיין 10 פעמים
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 ml-2">✓</span>
                      שירות מעולה למשפחות ועצמאים
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  בדקו את הביטוח שלכם עכשיו
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  מלאו 3 פרטים פשוטים ונחזור אליכם תוך יום
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
                  >
                    בדקו את הביטוח שלי עכשיו
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-200"
                  >
                    <span className="ml-2">💬</span>
                    שלחו הודעת וואטסאפ
                  </a>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-600">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-2">יורם פרידמן - סוכן ביטוח ופיננסים מורשה</p>
              <p className="text-sm">שעות פעילות: ראשון-חמישי 10:00-18:00</p>
              <p className="text-xs mt-2">אתר זה פועל בהתאם לכללי רשות שוק ההון, הביטוח והחיסכון</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}