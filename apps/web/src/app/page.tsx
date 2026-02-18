import Link from "next/link";
import { getPositions, type Position } from "@/lib/directus";

export default async function Home() {
  const { positions, debug } = await getPositions({
    debug: process.env.NODE_ENV !== "production",
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "28px 22px",
        background: "#ffffff",
        color: "#111111",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 18,
          }}
        >
          <div style={{ fontWeight: 900, letterSpacing: 0.2, fontSize: 18 }}>
            mih
          </div>

          <nav style={{ display: "flex", gap: 18, opacity: 0.95, fontSize: 14 }}>
            <a href="#" style={{ color: "#111" }}>
              Services
            </a>
            <a href="#" style={{ color: "#111" }}>
              Industries
            </a>
            <a href="#" style={{ color: "#111" }}>
              Technologies
            </a>
            <a href="#" style={{ color: "#111" }}>
              Case studies
            </a>
            <a href="#" style={{ color: "#111" }}>
              About
            </a>
            <a href="#" style={{ color: "#111" }}>
              Careers
            </a>

            <a
              href="#"
              style={{
                marginLeft: 8,
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "rgba(0,0,0,0.04)",
                color: "#111",
                fontWeight: 700,
              }}
            >
              Contact
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.10)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.86), rgba(255,255,255,0.25)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=60') center/cover",
            minHeight: 420,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div style={{ padding: 28, maxWidth: 760 }}>
            <h1 style={{ fontSize: 46, lineHeight: 1.05, fontWeight: 900 }}>
              We build, integrate, and secure mission-critical software.
            </h1>

            <p style={{ marginTop: 14, fontSize: 16, opacity: 0.9, lineHeight: 1.5 }}>
              End-to-end delivery with DevOps & AWS, enterprise integrations, and security by design for regulated industries.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a
                href="#"
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "#b6f36b",
                  color: "#111",
                  fontWeight: 800,
                }}
              >
                Talk to an expert
              </a>

              <a
                href="#"
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,0,0,0.14)",
                  background: "rgba(255,255,255,0.65)",
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                Get an assessment →
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
  <div style={{ textAlign: "center", marginBottom: 40 }}>
    <div style={{ fontSize: 14, opacity: 0.6 }}>Careers</div>
    <h2 style={{ fontSize: 34, fontWeight: 800, marginTop: 6 }}>
      Open roles
    </h2>
    <div style={{ fontSize: 14, opacity: 0.6, marginTop: 6 }}>
      We hire for craft, curiosity, and kindness.
    </div>
  </div>

  {positions.length === 0 ? (
    <div style={{ textAlign: "center", opacity: 0.6 }}>
      No open positions at the moment.
    </div>
  ) : (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      {positions.map((p) => {
        const employment = Array.isArray(p.employment_type)
          ? p.employment_type.join(", ")
          : p.employment_type ?? "";

        const location =
          typeof p.location === "string"
            ? p.location
            : p.location
            ? "Sarajevo"
            : "";

        return (
          <div
            key={p.id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr auto",
              gap: 24,
              alignItems: "center",
              padding: "22px 0",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            {/* TITLE + TECH */}
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>
                {p.title}
              </div>

              {p.technologies?.length ? (
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 10,
                    flexWrap: "wrap",
                  }}
                >
                  {p.technologies.map((t: string) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 999,
                        background: "#e8f6d9",
                        color: "#1a1a1a",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {/* LOCATION */}
            <div style={{ fontSize: 14 }}>
              {location}
              {p.remote ? (
                <div style={{ marginTop: 6 }}>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#e8f6d9",
                      fontWeight: 500,
                    }}
                  >
                    remote-friendly
                  </span>
                </div>
              ) : null}
            </div>

            {/* TYPE */}
            <div style={{ fontSize: 14 }}>
              {employment}
            </div>

            {/* APPLY */}
            <div style={{ textAlign: "right" }}>
              {p.apply_url ? (
                <a
                  href={p.apply_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#111",
                  }}
                >
                  Apply now →
                </a>
              ) : (
                <span style={{ opacity: 0.4 }}>Apply now →</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  )}
</section>


        {/* FOOTER (mini) */}
        <footer style={{ marginTop: 50, paddingTop: 18, borderTop: "1px solid #eee", opacity: 0.85 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <div>© {new Date().getFullYear()} mih</div>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="#">Privacy</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
