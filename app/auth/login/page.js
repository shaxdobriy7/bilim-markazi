"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [parol, setParol] = useState("")
  const [xato, setXato] = useState("")
  const [yuklanmoqda, setYuklanmoqda] = useState(false)
  const router = useRouter()

  const kirishHandler = async (e) => {
    e.preventDefault()
    setYuklanmoqda(true)
    setXato("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: parol,
    })

    if (error) {
      setXato("Email yoki parol noto'g'ri")
      setYuklanmoqda(false)
    } else {
      router.push("/")
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "24px",
        padding: "40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            width: "56px", height: "56px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "16px",
            margin: "0 auto 16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px"
          }}>🎓</div>
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
            Xush kelibsiz
          </h1>
          <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "14px" }}>
            Bilim Markazi ga kiring
          </p>
        </div>

        <div>
          {xato && (
            <div style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              padding: "12px",
              color: "#dc2626",
              fontSize: "14px",
              marginBottom: "16px"
            }}>
              {xato}
            </div>
          )}

          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Emailni kiriting"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "2px solid #e5e7eb",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", display: "block", marginBottom: "6px" }}>
              Parol
            </label>
            <input
              type="password"
              value={parol}
              onChange={(e) => setParol(e.target.value)}
              placeholder="Parolni kiriting"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "2px solid #e5e7eb",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <button
            onClick={kirishHandler}
            disabled={yuklanmoqda}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              cursor: yuklanmoqda ? "not-allowed" : "pointer",
              opacity: yuklanmoqda ? 0.7 : 1
            }}
          >
            {yuklanmoqda ? "Kirmoqda..." : "Kirish"}
          </button>
        </div>

        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "#6b7280" }}>
          Akkaunt yo'qmi?{" "}
          <Link href="/auth/register" style={{ color: "#667eea", fontWeight: "600", textDecoration: "none" }}>
            Ro'yxatdan o'ting
          </Link>
        </p>
      </div>
    </main>
  )
}