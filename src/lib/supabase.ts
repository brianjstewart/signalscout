import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qhlhpbjuxpcjoluewmgl.supabase.co'
const supabaseAnonKey = 'sb_publishable_vzy-6WGb6_akq8o2GW_ViQ_ZvcKsY2f'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
