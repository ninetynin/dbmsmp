import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data: clubs } = await supabase.from("club").select();
  const { data: regs } = await supabase.from("registration").select(); // use 'data' property to access registration data
  const { data: evnts } = await supabase.from("event").select(); // use 'data' property to access event data
  const { data: advisr } = await supabase.from("advisor").select(); // use 'data' property to access advisor data
  return {
    clubs: clubs ?? [],
    registrations: regs ?? [],
    events: evnts ?? [],
    advisors: advisr ?? [],
  };
}
