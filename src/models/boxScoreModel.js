import { supabase } from "../config/supabaseClient.js";

export const BoxScoreModel = {
  async getAll() {
    // Join dengan tabel players untuk melihat nama pemain
    const { data, error } = await supabase
      .from("box_scores")
      .select("*, players(name, position, teams(name))");
    if (error) throw error;
    return data;
  },
  async getById(id) {
    const { data, error } = await supabase.from("box_scores").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  },
  async create(payload) {
    const { data, error } = await supabase.from("box_scores").insert([payload]).select().single();
    if (error) throw error;
    return data;
  },
  async update(id, payload) {
    const { data, error } = await supabase.from("box_scores").update(payload).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
  async remove(id) {
    const { error } = await supabase.from("box_scores").delete().eq("id", id);
    if (error) throw error;
    return { message: "Box score deleted" };
  }
};