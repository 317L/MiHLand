import Link from "next/link";
import { getPositions } from "@/lib/directus";

export default async function Home() {
  const positions = await getPositions();

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 40 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ fontSize: 28, fontWeight: 700 }}>mih</div>
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Technologies</a>
          <a href="#">Case studies</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <button style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid #222", background: "#111", color: "#fff" }}>
            Contact
          </button>
        </nav>
      </header>

      <div style={{ borderTop: "1px solid #2a2a2a" }}>
        {positions.map((p) => (
          <div
            key={p.id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 24,
              padding: "22px 0",
              borderBottom: "1px solid #2a2a2a",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{p.title}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {(p.technologies ?? []).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "#dff3c6",
                      color: "#1b1b1b",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 16 }}>{p.location}</div>
              {p.remote ? (
                <div style={{ marginTop: 8 }}>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "#dff3c6",
                      color: "#1b1b1b",
                    }}
                  >
                    remote-friendly
                  </span>
                </div>
              ) : null}
            </div>

            <div style={{ fontSize: 16 }}>{p.employment_type}</div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                href={p.apply_url}
                target="_blank"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 600 }}
              >
                Apply now <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
