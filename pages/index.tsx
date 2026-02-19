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
        <title>יורם פרידמן - בדיקת ביטוח חינם | חסכו עד 3,200₪ בשנה</title>
        <meta name="description" content="85% מהישראלים משלמים על ביטוח כפול! בדיקה מקצועית בחינם של סוכן מורשה + 40 שנות ניסיון. הר הביטוח." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="יורם פרידמן - בדיקת ביטוח חינם | חסכו עד 3,200₪" />
        <meta property="og:description" content="85% מהישראלים משלמים על ביטוח כפול. בדיקה מקצועית בחינם עם יורם פרידמן - סוכן מורשה" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <a
            href="https://wa.me/972501234567?text=שלום יורם, אני מעוניין בבדיקת ביטוח חינם"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>

        <div className="relative">
          {/* HERO SECTION (Above The Fold) - Dominant Section */}
          <section className="bg-gradient-to-bl from-blue-600 to-green-600 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Main Value Proposition */}
                <div className="space-y-8">
                  {/* Licensed Agent Badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full ml-3">בחינם</span>
                    <span className="text-sm font-medium">סוכן ביטוח מורשה #12345</span>
                  </div>

                  {/* Main Headlines */}
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                      <span className="text-yellow-300">85% מהישראלים</span><br />
                      משלמים על ביטוח <span className="text-yellow-300">כפול!</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium opacity-90 mb-4">
                      בדיקה מקצועית של סוכן מורשה ב<span className="font-bold text-yellow-300">חינם לחלוטין</span>
                    </p>
                    <p className="text-lg text-blue-100">
                      גלו כמה אתם יכולים לחסוך • מעל 40 שנות ניסיון • הר הביטוח
                    </p>
                  </div>

                  {/* Social Proof Statistics */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">3,200₪</div>
                      <div className="text-sm opacity-90">חיסכון ממוצע בשנה</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">1,000+</div>
                      <div className="text-sm opacity-90">לקוחות מרוצים</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">24h</div>
                      <div className="text-sm opacity-90">זמן מענה</div>
                    </div>
                  </div>
                </div>

                {/* Right: Lead Capture Form */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      בדקו את הביטוח שלכם בחינם
                    </h2>
                    <p className="text-gray-600">
                      3 שדות פשוטים • מענה תוך 24 שעות • ללא התחייבות
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-800 text-lg"
                        placeholder="שם מלא *"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-800 text-lg"
                        placeholder="טלפון נייד *"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-800 text-lg"
                        placeholder="אימייל (אופציונלי)"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 text-lg shadow-lg"
                    >
                      בדקו את הביטוח שלי עכשיו 🔍
                    </button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    🔒 הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof - Brief Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">לקוחות שכבר חוסכים</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">ד</div>
                    <div className="mr-3">
                      <h4 className="font-bold text-gray-800">דוד כ.</h4>
                      <p className="text-sm text-gray-600">תל אביב</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"יורם גילה שיש לי שלושה ביטוחי חיים כפולים!"</p>
                  <div className="text-2xl font-bold text-green-600">₪2,400 חיסכון בשנה</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">ר</div>
                    <div className="mr-3">
                      <h4 className="font-bold text-gray-800">רחל ל.</h4>
                      <p className="text-sm text-gray-600">חיפה</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"יורם הראה לי פערים בכיסוי ועזר לי לחסוך."</p>
                  <div className="text-2xl font-bold text-blue-600">₪1,800 חיסכון בשנה</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">מ</div>
                    <div className="mr-3">
                      <h4 className="font-bold text-gray-800">משה א.</h4>
                      <p className="text-sm text-gray-600">נתניה</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"השירות מעולה! ביטל פוליסות מיותרות."</p>
                  <div className="text-2xl font-bold text-purple-600">₪3,200 חיסכון בשנה</div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">אל תחכו - בדקו עכשיו!</h2>
              <p className="text-xl mb-8 opacity-90">
                כל יום שאתם מחכים זה כסף שאתם מאבדים על ביטוח מיותר
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => document.querySelector('form')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition duration-300"
                >
                  📋 בדיקה חינם עכשיו
                </button>
                <a
                  href="https://wa.me/972501234567?text=שלום יורם, אני רוצה בדיקת ביטוח חינם"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition duration-300"
                >
                  💬 וואטסאפ מהיר
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="font-bold mb-2">יורם פרידמן - סוכן ביטוח מורשה #12345-67890</p>
              <p className="text-gray-300 text-sm">שעות פעילות: ראשון-חמישי 10:00-18:00 | זמין בוואטסאפ 24/7</p>
              <p className="text-gray-400 text-xs mt-2">פועל בהתאם לכללי רשות שוק ההון והביטוח</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}