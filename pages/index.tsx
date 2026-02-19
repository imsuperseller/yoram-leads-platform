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

          {/* Client Testimonials Section */}
          <section className="mt-16 max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 relative z-10">מה הלקוחות שלנו אומרים</h2>
              
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">ד</div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-800">דוד כהן</h4>
                      <p className="text-sm text-gray-600">אב לשני ילדים, תל אביב</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"יורם גילה שיש לי שלושה ביטוחי חיים כפולים! חסכתי 2,400 ₪ בשנה וקיבלתי כיסוי טוב יותר."</p>
                  <div className="text-green-600 font-semibold">חיסכון: ₪2,400 בשנה</div>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">ר</div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-800">רחל לוי</h4>
                      <p className="text-sm text-gray-600">עצמאית, חיפה</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"כעצמאית חשבתי שאני מבוטחת היטב. יורם הראה לי פערים בכיסוי ועזר לי לחסוך 1,800 ₪."</p>
                  <div className="text-green-600 font-semibold">חיסכון: ₪1,800 בשנה</div>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">מ</div>
                    <div className="mr-3">
                      <h4 className="font-semibold text-gray-800">משה אברהם</h4>
                      <p className="text-sm text-gray-600">מנהל, נתניה</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"השירות של יורם מעולה! הוא הסביר לי הכל בפירוט וביטל פוליסות מיותרות. חוסך לי 3,200 ₪ כל שנה."</p>
                  <div className="text-green-600 font-semibold">חיסכון: ₪3,200 בשנה</div>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Profile Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  יפ
                </div>
                
                <div className="flex-1 text-center md:text-right">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">יורם פרידמן</h2>
                  <p className="text-xl text-gray-700 mb-4">סוכן ביטוח ופיננסים מורשה</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-blue-600 ml-2">🏆</span>
                      <span className="text-gray-700">זוכה פרס סוכן מצטיין 10 פעמים</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-blue-600 ml-2">📅</span>
                      <span className="text-gray-700">מעל 40 שנות ניסיון בתחום הביטוח</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-blue-600 ml-2">🏢</span>
                      <span className="text-gray-700">עובד עם כל חברות הביטוח המובילות</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-blue-600 ml-2">📜</span>
                      <span className="text-gray-700">רישיון סוכן ביטוח מס' 12345-67890</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <span className="text-blue-600 ml-2">📍</span>
                      <span className="text-gray-700">משרת לקוחות בכל רחבי הארץ</span>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-blue-100/30 border border-blue-300/40 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-center">
                      "המטרה שלי היא לספק ללקוחות שלי את הביטוח הטוב ביותר במחיר הטוב ביותר, עם שירות אישי ומקצועי."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mt-16 max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 relative z-10">השירותים שלנו</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-blue-500 text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">ביטוח חיים ומשכנתא</h3>
                  <p className="text-gray-700">מתמחה בביטוח חיים למשכנתא ולמשפחה, עם התאמה אישית לצרכים שלכם.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-green-500 text-3xl mb-4">💚</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">ביטוח בריאות ומחלות קשות</h3>
                  <p className="text-gray-700">כיסוי מקיף לבריאות המשפחה, כולל מחלות קשות וטיפולים מתקדמים.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-purple-500 text-3xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">פנסיה וגמל</h3>
                  <p className="text-gray-700">ייעוץ מקצועי לתכנון פנסיוני חכם ואופטימיזציה של קרנות הגמל שלכם.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-orange-500 text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">שירות מהיר ואמין</h3>
                  <p className="text-gray-700">מענה תוך 24 שעות, טיפול בתביעות מקצועי, וליווי אישי לאורך כל הדרך.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-red-500 text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">התאמה אישית</h3>
                  <p className="text-gray-700">כל פוליסה מותאמת באופן אישי לצרכים, לתקציב ולמצב המשפחתי שלכם.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <div className="text-teal-500 text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">זמינות מלאה</h3>
                  <p className="text-gray-700">זמין בוואטסאפ, בטלפון ובמייל. שירות דיגיטלי מתקדם עם חתימה דיגיטלית.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/20 border border-white/20 rounded-[18px] shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 relative z-10">שאלות נפוצות</h2>
              
              <div className="space-y-4 relative z-10">
                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">❓ כמה עולה הבדיקה?</h3>
                  <p className="text-gray-700">הבדיקה של יורם פרידמן חינמית לחלוטין וללא התחייבות. אתם משלמים רק אם תחליטו לרכוש ביטוח דרכו.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">❓ כמה זמן לוקחת הבדיקה?</h3>
                  <p className="text-gray-700">הבדיקה הראשונית באמצעות מערכת הר הביטוח לוקחת כ-15 דקות. הכנת הצעה מפורטת לוקחת עד 48 שעות.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">❓ האם יורם עובד עם כל חברות הביטוח?</h3>
                  <p className="text-gray-700">כן, יורם עובד עם כל חברות הביטוח הגדולות בישראל: הפניקס, מגדל, מנורה מבטחים, הראל, כלל, מיטב דש ועוד.</p>
                </div>

                <div className="backdrop-blur-sm bg-white/30 border border-white/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">❓ מה זה "הר הביטוח"?</h3>
                  <p className="text-gray-700">הר הביטוח הוא מערכת ממשלתית של רשות שוק ההון שמאפשרת לראות את כל הפוליסות שלכם במקום אחד ולזהות כפילויות.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mt-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-400/20 to-blue-500/20 border border-white/20 rounded-[18px] shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
              
              <div className="text-center relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">מוכנים לחסוך על הביטוח?</h2>
                <p className="text-xl text-gray-700 mb-8">הצטרפו לאלפי הלקוחות המרוצים שחוסכים עם יורם פרידמן</p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => document.querySelector('form')?.scrollIntoView({behavior: 'smooth'})}
                    className="inline-flex items-center backdrop-blur-sm bg-green-600/80 hover:bg-green-700/80 border border-white/20 text-white px-8 py-4 rounded-xl transition duration-200 text-lg font-bold"
                  >
                    📋 מלאו טופס עכשיו
                  </button>
                  <a
                    href="https://wa.me/972501234567?text=שלום יורם, אני מעוניין בבדיקת ביטוח חינם"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center backdrop-blur-sm bg-blue-600/80 hover:bg-blue-700/80 border border-white/20 text-white px-8 py-4 rounded-xl transition duration-200 text-lg font-bold"
                  >
                    <span className="ml-2">💬</span>
                    וואטסאפ מהיר
                  </a>
                </div>
              </div>
            </div>
          </section>

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