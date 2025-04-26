import { createClient } from "@supabase/supabase-js";
// import { useNavigate } from "react-router-dom";

const supabase = createClient('https://fyplhsjxcuijmkaoiwbx.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cGxoc2p4Y3Vpam1rYW9pd2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjkxNTAsImV4cCI6MjA2MDQwNTE1MH0.M_u1K6lhA1W75MZ4j4kgxNJNSeM-Thvz-IrCa30bu6Y');

export async function signUp({Name, Email, Password}) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: Email,
            password: Password,
            options: {
                data: {
                    firstName: Name,
                }
            }
        })

        if(data){
            console.log(data);
            alert("Successfull Sign Up")
        }

        if(error) throw error
        return { data };
    } catch (error) {
        console.log(error);
        
    }    
} 
    
export async function logOut() {
    const navigate = useNavigate();
    try {
        const { error } = await supabase.auth.signOut()

        
        if(error) throw error;
    } catch (error) {
        console.log(error);
        
    }
}

export async function signIn({Email,Password}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: Email,
            password: Password,
        })
        if(error) throw error;
        if(data){
            console.log(data);
        }  

        
        return data;
    } catch (error) {
        console.log(error);
        
    }    
}