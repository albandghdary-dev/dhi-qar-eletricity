CREATE TABLE bills (
  id SERIAL PRIMARY KEY,
  subscriber_no TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'unpaid'
);

ALTER TABLE bills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON bills FOR SELECT USING (true);

INSERT INTO bills (subscriber_no, name, amount, status)
VALUES 
  ('1001', 'أحمد علي', 45000, 'غير مدفوعة'),
  ('1002', 'حسين كريم', 32500, 'مدفوعة');
