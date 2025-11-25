import { supabase } from "../config/supabaseClient.js";

export const TeamModel = {
  async getAll() {
    const { data, error } = await supabase.from("teams").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("teams")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("teams")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("teams").delete().eq("id", id);
    if (error) throw error;
    return { message: "Team deleted successfully" };
  },
};