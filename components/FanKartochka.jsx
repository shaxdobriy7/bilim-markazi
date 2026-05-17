import Link from "next/link"

export default function FanKartochka({ nom, darslar, rang }) {
  const slug = nom.toLowerCase().replace(/ /g, "-")

  return (
    <Link href={`/fanlar/${slug}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "16px",
        cursor: "pointer",
        transition: "box-shadow 0.2s"
      }}>
        <div className={rang} style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          marginBottom: "12px"
        }}></div>
        <h3 style={{ fontWeight: "600", fontSize: "14px", color: "#111827" }}>{nom}</h3>
        <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{darslar} ta dars</p>
      </div>
    </Link>
  )
}