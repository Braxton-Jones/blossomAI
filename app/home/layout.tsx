import UserInfo from '@/components/user-info';
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
const cookieStore = cookies()
const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )







export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  return (
    <div className='my-4 flex grow flex-col gap-4 md:flex-row'>
     <UserInfo/>
      {children}
    </div>
  );
}
