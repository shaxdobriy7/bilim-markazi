"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [foydalanuvchi, setFoydalanuvchi] = useState(null)
  const [menuOchiq, setMenuOchiq] = useState(false)
  const [dark, setDark] = useState(false)
  const [scroll, setScroll] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      setDark(true)
      document.documentElement.setAttribute("data-theme", "dark")
    }
    supabase.auth.getUser().then(({ data }) => setFoydalanuvchi(data.user))
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setFoydalanuvchi(session?.user || null)
    })
    const onScroll = () => setScroll(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => {
      listener.subscription.unsubscribe()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  const chiqish = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <nav style={{
      background: "var(--nav)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: scroll ? "1px solid var(--border)" : "1px solid transparent",
      padding: "0 32px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: scroll ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.3s ease"
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "68px"
      }}>

        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "40px", height: "40px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "12px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 4px 12px rgba(102,126,234,0.4)"
          }}>🎓</div>
          <span style={{ fontWeight: "800", fontSize: "18px", color: "var(--text)", letterSpacing: "-0.5px" }}>
            Bilim <span style={{ color: "#667eea" }}>Markazi</span>
          </span>
        </Link>

        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Link href="/" className="nav-link">Fanlar</Link>
          <Link href="/maqolalar" className="nav-link">Maqolalar</Link>
          <Link href="/haqimizda" className="nav-link">Haqimizda</Link>

          <button onClick={toggleDark} style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "50px", padding: "8px 14px",
            cursor: "pointer", fontSize: "16px",
            color: "var(--text)", transition: "all 0.2s"
          }}>
            {dark ? "☀️" : "🌙"}
          </button>

          {foydalanuvchi ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: "700", fontSize: "14px"
              }}>
                {(foydalanuvchi.user_metadata?.full_name || foydalanuvchi.email)?.[0]?.toUpperCase()}
              </div>
              <button onClick={chiqish} style={{
                padding: "8px 16px", borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "transparent", color: "var(--text2)",
                fontSize: "14px", cursor: "pointer", transition: "all 0.2s"
              }}>
                Chiqish
              </button>
            </div>
          ) : (
            <Link href="/auth/login" style={{
              textDecoration: "none", padding: "10px 24px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white", fontSize: "14px", fontWeight: "600",
              boxShadow: "0 4px 12px rgba(102,126,234,0.35)",
              transition: "all 0.2s"
            }}>
              Kirish
            </Link>
          )}
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button onClick={toggleDark} className="mobile-menu-btn" style={{
            display: "none", background: "none", border: "none",
            fontSize: "20px", cursor: "pointer"
          }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOchiq(!menuOchiq)} className="mobile-menu-btn" style={{
            display: "none", background: "none", border: "none",
            fontSize: "22px", cursor: "pointer", color: "var(--text)"
          }}>
            {menuOchiq ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOchiq && (
        <div className="animate-slideDown" style={{
          padding: "16px 0 24px",
          borderTop: "1px solid var(--border)",
          display: "flex", flexDirection: "column", gap: "4px"
        }}>
          {["/", "/maqolalar", "/haqimizda"].map((href, i) => (
            <Link key={href} href={href} onClick={() => setMenuOchiq(false)} style={{
              textDecoration: "none", color: "var(--text)",
              fontSize: "15px", fontWeight: "500",
              padding: "12px 8px", borderRadius: "8px"
            }}>
              {["Fanlar", "Maqolalar", "Haqimizda"][i]}
            </Link>
          ))}
          {foydalanuvchi ? (
            <button onClick={chiqish} style={{
              marginTop: "8px", padding: "12px", borderRadius: "8px",
              border: "1px solid var(--border)", background: "transparent",
              color: "var(--text)", fontSize: "15px", cursor: "pointer", textAlign: "left"
            }}>Chiqish</button>
          ) : (
            <Link href="/auth/login" onClick={() => setMenuOchiq(false)} style={{
              textDecoration: "none", marginTop: "8px", padding: "12px",
              borderRadius: "8px", background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white", fontSize: "15px", fontWeight: "600", textAlign: "center"
            }}>Kirish</Link>
          )}
        </div>
      )}
    </nav>
  )
}