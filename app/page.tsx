'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function Page() {
  const [subscriberNo, setSubscriberNo] = useState('')
  const [bill, setBill] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!subscriberNo) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('bills')
      .select('*')
      .eq('subscriber_no', subscriberNo.trim())
      .single();

    if (error || !data) {
      alert('رقم المشترك غير موجود في قاعدة البيانات');
      setBill(null);
    } else {
      setBill(data);
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-900">كهرباء ذي قار</h1>
        <p className="text-sm text-gray-500 text-center">الاستعلام السريع عن الفاتورة</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم المشترك</label>
            <input 
              type="text" 
              placeholder="أدخل رقم المشترك (مثال: 100001)" 
              value={subscriberNo}
              onChange={(e) => setSubscriberNo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
            />
          </div>

          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white p-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-md"
          >
            {loading ? 'جاري البحث...' : 'استعلام'}
          </button>
        </div>

        {bill && (
          <div className="mt-6 p-5 border border-blue-100 rounded-xl bg-blue-50 space-y-3">
            <h3 className="font-bold text-blue-900 text-lg border-b border-blue-200 pb-2">تفاصيل الفاتورة</h3>
            <p className="text-gray-700"><strong>اسم المشترك:</strong> {bill.name}</p>
            <p className="text-gray-700"><strong>المبلغ المطلوب:</strong> <span className="text-blue-600 font-bold">{bill.amount}</span> د.ع</p>
            <p className="text-gray-700"><strong>الحالة:</strong> <span className="text-orange-600 font-bold">{bill.status}</span></p>
          </div>
        )}
      </div>
    </main>
  )
}
