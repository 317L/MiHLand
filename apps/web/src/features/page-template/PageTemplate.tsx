import type { PageEntry } from '@/types/page';

export function PageTemplate({ page }: { page: PageEntry }) {
  return (
    <main>
      {page.sections.map((s, idx) => {
        if (s.type === 'hero') {
          return (
            <section key={idx}>
              <h1>{s.title}</h1>
              {s.subtitle ? <p>{s.subtitle}</p> : null}
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
