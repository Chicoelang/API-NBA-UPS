import { supabase } from "../config/supabaseClient.js";

export const CoachModel = {
  async getAll() {
    const { data, error } = await supabase.from("coaches").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("coaches")
      .select("*, teams(name)") // Mengambil nama team relasi
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("coaches")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("coaches")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("coaches").delete().eq("id", id);
    if (error) throw error;
    return { message: "Coach deleted successfully" };
  },
};