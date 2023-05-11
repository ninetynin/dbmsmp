import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data:cdata } = await supabase.from("category").select();
  return {
    category: cdata ?? [],
  };
}