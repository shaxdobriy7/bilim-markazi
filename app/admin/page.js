"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function AdminPanel() {
  const [fanlar, setFanlar] = useState([])
  const [mavzular, setMavzular] = useState([])
  const [filtrlangan, setFiltrlangan] = useState([])

  // Maqola state lari
  const [sarlavha, setSarlavha] = useState("")
  const [kontent, setKontent] = useState("")
  const [fanId, setFanId] = useState("")
  const [mavzuId, setMavzuId] = useState("")
  const [xabar, setXabar] = useState("")

  // Mavzu state lari
  const [mavzuNomi, setMavzuNomi] = useState("")
  const [mavzuFanId, setMavzuFanId] = useState("")
  const [mavzuXabar, setMavzuXabar] = useState("")

  useEffect(() => {
    supabase.from("fanlar").select("*").order("nom").then(({ data }) => setFanlar(data || []))
    supabase.from("mavzular").select("*").order("nom").then(({ data }) => setMavzular(data || []))
  }, [])

  useEffect(() => {
    if (fanId) {
      setFiltrlangan(mavzular.filter((m) => m.fan_id === parseInt(fanId)))
      setMavzuId("")
    }
  }, [fanId, mavzular])

  const slugYasat = (matn) => {
    return matn.toLowerCase().replace(/ /g, "-").replace(/'/g, "").replace(/[^a-z0-9-]/g, "") + "-" + Date.now()
  }

  const maqolaQosh = async () => {
    if (!sarlavha || !kontent || !fanId || !mavzuId) {
      setXabar("Xato: Barcha maydonlarni to'ldiring!")
      return
    }

    const { error } = await supabase
      .from("maqolalar")
      .insert({
        sarlavha,
        kontent,
        slug: slugYasat(sarlavha),
        fan_id: parseInt(fanId),
        mavzu_id: parseInt(mavzuId),
      })

    if (error) {
      setXabar("Xato: " + error.message)
    } else {
      setXabar("Maqola muvaffaqiyatli qo'shildi!")
      setSarlavha("")
      setKontent("")
      setFanId("")
      setMavzuId("")
    }
  }

  const mavzuQosh = async () => {
    if (!mavzuNomi || !mavzuFanId) {
      setMavzuXabar("Xato: Barcha maydonlarni to'ldiring!")
      return
    }

    const { error } = await supabase
      .from("mavzular")
      .insert({
        nom: mavzuNomi,
        slug: slugYasat(mavzuNomi),
        fan_id: parseInt(mavzuFanId),
      })

    if (error) {
      setMavzuXabar("Xato: " + error.message)
    } else {
      setMavzuXabar("Mavzu muvaffaqiyatli qo'shildi!")
      setMavzuNomi("")
      setMavzuFanId("")
      // Mavzular ro'yxatini yangilash
      supabase.from("mavzular").select("*").order("nom").then(({ data }) => setMavzular(data || []))
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    boxSizing: "border-box"
  }

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    color: "#374151"
  }

  const xabarStyle = (x) => ({
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "24px",
    background: x.startsWith("Xato") ? "#fef2f2" : "#f0fdf4",
    color: x.startsWith("Xato") ? "#dc2626" : "#16a34a",
    border: `1px solid ${x.startsWith("Xato") ? "#fecaca" : "#bbf7d0"}`
  })

  return (
    <main style={{ padding: "32px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px" }}>
        Admin Panel
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "32px", fontSize: "14px" }}>
        Maqola va mavzularni boshqaring
      </p>

      {/* Maqola qo'shish */}
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "32px", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>
          📝 Yangi maqola qo'shish
        </h2>

        {xabar && <div style={xabarStyle(xabar)}>{xabar}</div>}

        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Fan</label>
          <select value={fanId} onChange={(e) => setFanId(e.target.value)} style={inputStyle}>
            <option value="">Fan tanlang...</option>
            {fanlar.map((f) => (
              <option key={f.id} value={f.id}>{f.nom}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Mavzu</label>
          <select
            value={mavzuId}
            onChange={(e) => setMavzuId(e.target.value)}
            disabled={!fanId}
            style={{ ...inputStyle, opacity: !fanId ? 0.5 : 1 }}
          >
            <option value="">Mavzu tanlang...</option>
            {filtrlangan.map((m) => (
              <option key={m.id} value={m.id}>{m.nom}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Sarlavha</label>
          <input
            value={sarlavha}
            onChange={(e) => setSarlavha(e.target.value)}
            placeholder="Maqola sarlavhasi"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={labelStyle}>Kontent (## Sarlavha, **bold** ishlatish mumkin)</label>
          <textarea
            value={kontent}
            onChange={(e) => setKontent(e.target.value)}
            rows={12}
            placeholder="## Kirish

Matn shu yerga..."
            style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace" }}
          />
        </div>

        <button
          onClick={maqolaQosh}
          style={{
            padding: "12px 24px", borderRadius: "8px", border: "none",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white", fontSize: "15px", fontWeight: "600", cursor: "pointer"
          }}
        >
          Maqola qo'shish
        </button>
      </div>

      {/* Mavzu qo'shish */}
      <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "32px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px" }}>
          📚 Yangi mavzu qo'shish
        </h2>

        {mavzuXabar && <div style={xabarStyle(mavzuXabar)}>{mavzuXabar}</div>}

        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Fan</label>
          <select value={mavzuFanId} onChange={(e) => setMavzuFanId(e.target.value)} style={inputStyle}>
            <option value="">Fan tanlang...</option>
            {fanlar.map((f) => (
              <option key={f.id} value={f.id}>{f.nom}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={labelStyle}>Mavzu nomi</label>
          <input
            value={mavzuNomi}
            onChange={(e) => setMavzuNomi(e.target.value)}
            placeholder="Mavzu nomi"
            style={inputStyle}
          />
        </div>

        <button
          onClick={mavzuQosh}
          style={{
            padding: "12px 24px", borderRadius: "8px", border: "none",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white", fontSize: "15px", fontWeight: "600", cursor: "pointer"
          }}
        >
          Mavzu qo'shish
        </button>
      </div>
    </main>
  )
}