'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function BillInquiry() {
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
      alert('رقم المشترك غير موجود');
      setBill(null);
    } else {
      setBill(data);
    }
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-xl font-bold text-center">الاستعلام عن الفاتورة</h2>
      <input 
        type="text" 
        placeholder="أدخل رقم المشترك (6 أرقام)" 
        value={subscriberNo}
        onChange={(e) => setSubscriberNo(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        {loading ? 'جاري البحث...' : 'استعلام'}
      </button>

      {bill && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <p><strong>اسم المشترك:</strong> {bill.name}</p>
          <p><strong>المبلغ المتبقي:</strong> {bill.amount} د.ع</p>
          <p><strong>الحالة:</strong> {bill.status}</p>
        </div>
      )}
    </div>
  )
}
