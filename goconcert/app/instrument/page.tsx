// 'use client'

// import { createClient } from '@/utils/supabase/client'
// import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/server';


// export default function Page() {
//     const [instruments, setInstruments] = useState<any[] | null>(null)
//     const supabase = createClient()
  
//     useEffect(() => {
//       const getData = async () => {
//         const { data } = await supabase.from('instruments').select()

//         setInstruments(data)
//       }
//       getData()
//     }, [])
  
//     return <pre>{JSON.stringify(instruments, null, 2)}</pre>
//     // pooup
//   }

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}