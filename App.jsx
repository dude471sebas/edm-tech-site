export default function App() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#111', padding: '1.5rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>EDM-TECH</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#555' }}>
          Precision EDM Solutions with Charmilles Robofil 240SL
        </p>
      </header>

      <section style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f3f4f6' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Our Expertise</h2>
          <p>
            At EDM-TECH, we specialize in high-precision electrical discharge machining using the reliable Charmilles Robofil 240SL.
            We serve industries that demand excellence, including aerospace, medical, automotive, and tool & die.
          </p>
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f3f4f6' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Our Machine</h2>
          <p>
            The Charmilles Robofil 240SL offers unbeatable accuracy, repeatability, and surface finish. It's ideal for tight tolerance components
            and complex geometries in both small and large batches.
          </p>
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '1rem', backgroundColor: '#f3f4f6' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Why Choose Us</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
            <li>Fast turnaround</li>
            <li>Competitive pricing</li>
            <li>Experienced EDM specialists</li>
            <li>Reliable customer support</li>
          </ul>
        </div>
      </section>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#666' }}>
        © {new Date().getFullYear()} EDM-TECH. All rights reserved.
      </footer>
    </main>
  );
}