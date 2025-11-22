import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mzwoxsgoosvcvlvpqdva.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16d294c2dvb3N2Y3ZsdnBxZHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3OTE1NTEsImV4cCI6MjA3OTM2NzU1MX0.ipdNU5i90Zyekfz0IZy2zWbUUNzMv3YW6xTw7G20VdY'

export const supabase = createClient(supabaseUrl, supabaseKey)