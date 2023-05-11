import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data:ev } = await supabase.from("event").select();
  const {data: dev } = await supabase.from("deleted_event").select();
  return {
    event: ev ?? [],
    deleted_event: dev ?? [],
  };
}