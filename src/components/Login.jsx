import Logo from "../images/logo.jpg";
import { useState } from "react";
import { signIn } from "../lib/auth";
import getUser from "../lib/other";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function checkLogin() {
    if (email === "admin123") {
      if (password === "admin123") {
        navigate("/adminDashboard");
        return;
      } else {
        console.log("Password is wrong");
      }
    }
    const resoponse = await signIn({ Email: email, Password: password });
    console.log(resoponse);

    if (resoponse) {
      const user = await getUser();
      console.log(user.email);
      console.log(user.id);
      console.log(user.user_metadata.firstName);
      setEmail("");
      setPassword("");
      const currentUser = {
        name: user.user_metadata.firstName,
        email: user.email,
        userId: user.id,
      };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      if (user) {
        navigate("/dashboard");
      }
    } else {
      console.log("User can not get");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="" src={Logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <button
                onClick={checkLogin}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-black hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account? {""}
            <Link
              to={"/signup"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
