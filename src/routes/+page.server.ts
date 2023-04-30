import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("club").select();
  return {
    club: data ?? [],
  };
}