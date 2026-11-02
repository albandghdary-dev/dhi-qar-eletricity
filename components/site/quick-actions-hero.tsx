'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { ArrowLeft, CreditCard, Activity, Clock, FileText, Wrench } from 'lucide-react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function QuickActionsHero() {
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
    <div className="w-full bg-gradient-to-b from-blue-900 to-blue-950 p-6 rounded-2xl shadow-xl text-white my-6" dir="rtl">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center">الاستعلام السريع عن الفواتير</h2>
        
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">رقم المشترك</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="أدخل رقم المشترك (مثال: 100001)" 
                value={subscriberNo}
                onChange={(e) => setSubscriberNo(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                onClick={handleSearch}
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3 rounded-xl font-bold transition shadow-md"
              >
                {loading ? 'جاري البحث...' : 'استعلام'}
              </button>
            </div>
          </div>
        </div>

        {bill && (
          <div className="bg-white text-blue-950 p-6 rounded-xl shadow-lg space-y-3">
            <h3 className="font-bold text-lg border-b pb-2">تفاصيل الفاتورة</h3>
            <p><strong>اسم المشترك:</strong> {bill.name}</p>
            <p><strong>المبلغ المطلوب:</strong> <span className="text-blue-600 font-bold">{bill.amount}</span> د.ع</p>
            <p><strong>الحالة:</strong> <span className="text-orange-600 font-bold">{bill.status}</span></p>
          </div>
        )}
      </div>
    </div>
  )
}
