import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function MaqolaSahifasi({ params }) {
  const { slug } = await params

  const { data: maqola } = await supabase
    .from("maqolalar")
    .select("*, mavzular(nom, slug), fanlar(nom, slug)")
    .eq("slug", slug)
    .single()

  if (!maqola) {
    return (
      <main style={{ padding: "32px" }}>
        <p>Maqola topilmadi</p>
      </main>
    )
  }

  return (
    <main style={{ padding: "32px", maxWidth: "800px", margin: "0 auto" }}>

      {/* Breadcrumb */}
      <div style={{ display: "flex", gap: "8px", fontSize: "14px", color: "#6b7280", marginBottom: "24px", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Bosh sahifa</Link>
        <span>→</span>
        <Link href={`/fanlar/${maqola.fanlar?.slug}`} style={{ color: "#6b7280", textDecoration: "none" }}>
          {maqola.fanlar?.nom}
        </Link>
        <span>→</span>
        <Link href={`/fanlar/${maqola.fanlar?.slug}/${maqola.mavzular?.slug}`} style={{ color: "#6b7280", textDecoration: "none" }}>
          {maqola.mavzular?.nom}
        </Link>
        <span>→</span>
        <span style={{ color: "#111827" }}>{maqola.sarlavha}</span>
      </div>

      {/* Sarlavha */}
      <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#111827", lineHeight: "1.3", marginBottom: "16px" }}>
        {maqola.sarlavha}
      </h1>

      <div style={{ display: "flex", gap: "16px", marginBottom: "40px", fontSize: "13px", color: "#6b7280" }}>
        <span>👁 {maqola.korishlar} ta ko'rish</span>
        <span>📅 {new Date(maqola.created_at).toLocaleDateString("uz-UZ")}</span>
      </div>

      {/* Kontent */}
      <div style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "40px",
        fontSize: "16px",
        lineHeight: "1.8",
        color: "#374151"
      }}>
        {maqola.kontent.split("\n").map((qator, i) => {
          if (qator.startsWith("## ")) {
            return <h2 key={i} style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: "24px 0 12px" }}>{qator.replace("## ", "")}</h2>
          }
          if (qator.startsWith("**") && qator.endsWith("**")) {
            return <p key={i} style={{ fontWeight: "600", color: "#111827", margin: "8px 0" }}>{qator.replace(/\*\*/g, "")}</p>
          }
          if (qator === "") {
            return <br key={i} />
          }
          return <p key={i} style={{ margin: "8px 0" }}>{qator}</p>
        })}
      </div>

    </main>
  )
}