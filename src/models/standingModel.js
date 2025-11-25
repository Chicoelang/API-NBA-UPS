import { supabase } from "../config/supabaseClient.js";

export const StandingsModel = {
  async getAll() {
    // Kita join dengan tabel teams agar nama tim muncul
    const { data, error } = await supabase
      .from("standings")
      .select("*, teams(name, city)"); 
    if (error) throw error;
    return data;
  },
  async create(payload) {
    const { data, error } = await supabase.from("standings").insert([payload]).select().single();
    if (error) throw error;
    return data;
  },
  async update(id, payload) {
    const { data, error } = await supabase.from("standings").update(payload).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
  async remove(id) {
    const { error } = await supabase.from("standings").delete().eq("id", id);
    if (error) throw error;
    return { message: "Standings record deleted" };
  }
};