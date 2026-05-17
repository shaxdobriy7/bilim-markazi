import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function MaqolalarSahifasi() {
  const { data: maqolalar } = await supabase
    .from("maqolalar")
    .select("*, mavzular(nom), fanlar(nom, slug)")
    .order("created_at", { ascending: false })

  return (
    <main style={{ padding: "48px 32px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#111827", marginBottom: "8px" }}>
          Barcha maqolalar
        </h1>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          {maqolalar?.length || 0} ta maqola mavjud
        </p>
      </div>

      {maqolalar && maqolalar.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {maqolalar.map((maqola) => (
            <Link
              key={maqola.id}
              href={`/maqolalar/${maqola.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
                transition: "box-shadow 0.2s"
              }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    fontSize: "12px", padding: "4px 10px",
                    borderRadius: "20px", background: "#ede9fe",
                    color: "#7c3aed", fontWeight: "500"
                  }}>
                    {maqola.fanlar?.nom}
                  </span>
                  <span style={{
                    fontSize: "12px", padding: "4px 10px",
                    borderRadius: "20px", background: "#f3f4f6",
                    color: "#6b7280", fontWeight: "500"
                  }}>
                    {maqola.mavzular?.nom}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "18px", fontWeight: "700",
                  color: "#111827", marginBottom: "8px"
                }}>
                  {maqola.sarlavha}
                </h3>

                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
                  {maqola.kontent.slice(0, 120).replace(/##|#|\*\*/g, "")}...
                </p>

                <div style={{
                  display: "flex", gap: "16px",
                  marginTop: "16px", fontSize: "13px", color: "#9ca3af"
                }}>
                  <span>👁 {maqola.korishlar} ta ko'rish</span>
                  <span>📅 {new Date(maqola.created_at).toLocaleDateString("uz-UZ")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: "center", padding: "80px",
          background: "white", borderRadius: "16px",
          border: "1px solid #e5e7eb"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>📝</div>
          <p style={{ color: "#6b7280", fontSize: "16px" }}>
            Hali maqolalar yo'q
          </p>
        </div>
      )}
    </main>
  )
}