import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data:cdata } = await supabase.from("club").select();
  // const { data:sfun, error } = await supabase.rpc('search_event_or_club', { search_text: 'acm' }).select();
  return {
    club: cdata ?? [],
    // search: sfun ?? [],
  };
}