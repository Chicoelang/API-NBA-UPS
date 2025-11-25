import { supabase } from "../config/supabaseClient.js";

export const PlayerModel = {
  async getAll() {
    const { data, error } = await supabase.from("players").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("players")
      .select("*, teams(name)")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("players")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("players")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("players").delete().eq("id", id);
    if (error) throw error;
    return { message: "Player deleted successfully" };
  },
};