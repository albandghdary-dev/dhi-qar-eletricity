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
    <main className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-900">كهرباء ذي قار - الاستعلام عن الفاتورة</h1>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="أدخل رقم المشترك (مثال: 100001)" 
            value={subscriberNo}
            onChange={(e) => setSubscriberNo(e.target.value)}
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {loading ? 'جاري البحث...' : 'استعلام'}
          </button>
        </div>

        {bill && (
          <div className="p-5 border border-blue-100 rounded-xl bg-blue-50 space-y-3">
            <h3 className="font-bold text-blue-900 text-lg border-b pb-2">تفاصيل الفاتورة</h3>
            <p><strong>اسم المشترك:</strong> {bill.name}</p>
            <p><strong>المبلغ المطلوب:</strong> {bill.amount} د.ع</p>
            <p><strong>الحالة:</strong> <span className="text-orange-600 font-bold">{bill.status}</span></p>
          </div>
        )}
      </div>
    </main>
  )
}
