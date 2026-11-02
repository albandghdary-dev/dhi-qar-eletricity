import { createClient } from '@supabase/supabase-js'

// ربط الاتصال بـ Supabase باستخدام مفاتيح المشروع
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// دالة البحث الحقيقية التي تربط الموقع بقاعدة البيانات
const handleSearch = async (subscriberNo: string) => {
  try {
    const { data, error } = await supabase
      .from('bills')
      .select('*')
      .eq('subscriber_no', subscriberNo.trim())
      .single();

    if (error || !data) {
      alert('رقم المشترك غير موجود في قاعدة البيانات');
      return null;
    }

    // إرجاع البيانات الحقيقية (الاسم، المبلغ، الحالة) لعرضها على الموقع
    return data;
  } catch (err) {
    console.error('خطأ في عملية البحث:', err);
    return null;
  }
};
