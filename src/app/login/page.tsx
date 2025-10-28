"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers/AuthProvider";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const { errors } = formState;
  const router = useRouter();
  const auth = useAuth();

  const onSubmit = (data: FormData) => {
    const ok = auth.login(data.email, data.password);
    if (ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials (no API). Use the registered user or register first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-black/10">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email", { required: "Email required" })}
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register("password", { required: "Password required" })}
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-md" type="submit">
            Login
          </button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-green-600 underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
