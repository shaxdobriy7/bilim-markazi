import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function MavzuSahifasi({ params }) {
  const { slug, mavzu } = await params

  const { data: fan } = await supabase
    .from("fanlar")
    .select("*")
    .eq("slug", slug)
    .single()

  const { data: mavzuData } = await supabase
    .from("mavzular")
    .select("*")
    .eq("slug", mavzu)
    .single()

  const { data: maqolalar } = await supabase
    .from("maqolalar")
    .select("*")
    .eq("mavzu_id", mavzuData?.id)
    .order("created_at")

  return (
    <main style={{ padding: "32px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "8px", fontSize: "14px", color: "#6b7280", marginBottom: "24px" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Bosh sahifa</Link>
        <span>→</span>
        <Link href={`/fanlar/${slug}`} style={{ color: "#6b7280", textDecoration: "none" }}>{fan?.nom}</Link>
        <span>→</span>
        <span style={{ color: "#111827" }}>{mavzuData?.nom}</span>
      </div>

      <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "32px" }}>
        {mavzuData?.nom}
      </h1>

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
                borderRadius: "12px",
                padding: "20px 24px"
              }}>
                <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#111827" }}>
                  {maqola.sarlavha}
                </h3>
                <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "8px" }}>
                  👁 {maqola.korishlar} ta ko'rish
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{
          background: "white", border: "1px solid #e5e7eb",
          borderRadius: "12px", padding: "40px",
          textAlign: "center", color: "#9ca3af"
        }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>📝</div>
          <p>Bu mavzu bo'yicha hali maqola yo'q</p>
        </div>
      )}
    </main>
  )
}