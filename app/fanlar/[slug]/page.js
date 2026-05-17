import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function FanSahifasi({ params }) {
  const { slug } = await params

  const { data: fan } = await supabase
    .from("fanlar")
    .select("*")
    .eq("slug", slug)
    .single()

  const { data: mavzular } = await supabase
    .from("mavzular")
    .select("*")
    .eq("fan_id", fan?.id)
    .order("tartib")

  if (!fan) {
    return (
      <main style={{ padding: "32px" }}>
        <p>Fan topilmadi</p>
      </main>
    )
  }

  return (
    <main style={{ padding: "32px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#6b7280", fontSize: "14px", textDecoration: "none" }}>
        ← Orqaga
      </Link>

      <div style={{ marginTop: "24px", marginBottom: "32px" }}>
        <div className={fan.rang} style={{
          width: "48px", height: "48px",
          borderRadius: "12px", marginBottom: "16px"
        }}></div>
        <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#111827" }}>
          {fan.nom}
        </h1>
        <p style={{ color: "#6b7280", marginTop: "8px" }}>
          {mavzular?.length || 0} ta mavzu mavjud
        </p>
      </div>

      <div style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #e5e7eb" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#111827" }}>
            Mavzular
          </h2>
        </div>

        {mavzular && mavzular.length > 0 ? (
          <div>
            {mavzular.map((mavzu, index) => (
              <Link
                key={mavzu.id}
                href={`/fanlar/${slug}/${mavzu.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  padding: "16px 24px",
                  borderBottom: index < mavzular.length - 1 ? "1px solid #f3f4f6" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "white"
                }}>
                  <div style={{
                    width: "28px", height: "28px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: "600", color: "#6b7280",
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <span style={{ fontSize: "15px", color: "#111827", flex: 1 }}>
                    {mavzu.nom}
                  </span>
                  <span style={{ color: "#9ca3af", fontSize: "18px" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ padding: "24px", color: "#9ca3af", fontSize: "14px" }}>
            Mavzular hali qo'shilmagan
          </div>
        )}
      </div>
    </main>
  )
}