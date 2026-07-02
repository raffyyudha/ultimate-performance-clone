"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Check if already logged in via active Supabase session
  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace("/admin/dashboard");
      } else {
        setLoading(false);
      }
    }
    checkSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setPassword("");
    } else {
      router.push("/admin/dashboard");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-4">
            <span className="text-white font-extrabold text-xl">Q</span>
          </div>
          <h1 className="text-2xl font-bold text-black tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Sign in to manage your site content
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="admin-email"
              className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@quatrefitness.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-300"
              autoFocus
              required
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-300"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm hover:bg-gray-900 active:bg-gray-800 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-300 text-xs mt-8">
          Quatre Fitness Group Pte Ltd
        </p>
      </div>
    </div>
  );
}
