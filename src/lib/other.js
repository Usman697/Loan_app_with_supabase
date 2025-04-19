import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://fyplhsjxcuijmkaoiwbx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cGxoc2p4Y3Vpam1rYW9pd2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjkxNTAsImV4cCI6MjA2MDQwNTE1MH0.M_u1K6lhA1W75MZ4j4kgxNJNSeM-Thvz-IrCa30bu6Y');

export default async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user;
}

export async function insertUser({ Name, Email, password }) {
  try {
    const { data, error } = await supabase
      .from("Users")
      .insert({ email: Email, })
      .select();
    if (data) {
      console.log("Data Successfully inserted");

    }

    if (error) throw error;

  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  try {
    const { data, error } = await supabase
      .from('Users')
      .select()
    if (data) {
      console.log(data)
      return {
        success: true,
        data: data,
        message: "User list succesfully Fetch",
      };
    }

    if (error) throw error;

  } catch (error) {
    console.log(error);

  }

}

export async function LogOutUser() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error;
  } catch (error) {
    console.log(error);

  }
}

export async function CheckSession() {
  try {
    const { data, error } = await supabase.auth.getSession()

    if (data) {
      console.log(data);
    }

    if (error) throw error
    return data;
  } catch (error) {
    console.log(error);

  }
}

