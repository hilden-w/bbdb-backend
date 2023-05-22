// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PUBLIC_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYWZ4dmZmbHVwem91c21tY3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3NDY1NDksImV4cCI6MTk5OTMyMjU0OX0.4AOe7FIXD51GL2LTp3FvAypbXAK28gJDhJZiriCrXr4'
const supabase = createClient('https://vpafxvfflupzousmmcqz.supabase.co', PUBLIC_ANON_KEY)



console.log("db test started!")

serve(async (req) => {

  const { data, error } = await supabase
  .from('PLAYER')
  .select('full_name')

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
