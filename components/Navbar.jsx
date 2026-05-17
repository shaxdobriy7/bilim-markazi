"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [foydalanuvchi, setFoydalanuvchi] = useState(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setFoydalanuvchi(data.user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setFoydalanuvchi(session?.user || null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const chiqish = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">

        <Link href="/" style={{ textDecoration: "none" }} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          <span className="font-bold text-gray-900 text-lg">Bilim Markazi</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-500 hover:text-gray-900 text-sm transition-colors" style={{ textDecoration: "none" }}>
            Fanlar
          </Link>
          <Link href="/maqolalar" className="text-gray-500 hover:text-gray-900 text-sm transition-colors" style={{ textDecoration: "none" }}>
            Maqolalar
          </Link>
          <Link href="/haqimizda" className="text-gray-500 hover:text-gray-900 text-sm transition-colors" style={{ textDecoration: "none" }}>
            Haqimizda
          </Link>

          {foydalanuvchi ? (
            <div className="flex items-center gap-3">
              <span style={{ fontSize: "14px", color: "#374151", fontWeight: "500" }}>
                👤 {foydalanuvchi.user_metadata?.full_name || foydalanuvchi.email}
              </span>
              <button
                onClick={chiqish}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  background: "white",
                  color: "#374151",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                Chiqish
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors" style={{ textDecoration: "none" }}>
              Kirish
            </Link>
          )}
        </div>

      </div>
    </nav>
  )
}