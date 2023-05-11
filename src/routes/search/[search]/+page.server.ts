// import type { ServerLoadEvent } from '@sveltejs/kit';
// import { supabase } from "$lib/supabaseClient";

// export async function load({ params }: ServerLoadEvent<{ search: string }>) {
//   const { data:sfun, error } = await supabase.rpc('search_event_or_club', { search_text: params.search }).select();
//   return {
//     search: sfun ?? [],
//   };
// }
