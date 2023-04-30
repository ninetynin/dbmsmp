import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("club").select();
  const { regs } = await supabase.from("registration").select();
  return {
    club2: data ?? [],
    reg2: regs ?? [],
  };
}