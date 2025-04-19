import { LogOutUser } from "../lib/other";
export default function LogoutButton() {
   async function logOut() {
      LogOutUser();
   } 
  return (
      <section id="logout" className="text-center">
        <button onClick={logOut} className="mt-10 px-6 py-3 bg-red-500 text-white rounded-lg">
          Logout
        </button>
      </section>
    );
  }
  