import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data:cdata } = await supabase.from("category").select();
  const { data:c2data } = await supabase.from("club").select();
  return {
    category: cdata ?? [],
    club: c2data ?? [],
  };
}