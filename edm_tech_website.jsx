export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <header className="mb-10">
        <h1 className="text-5xl font-bold tracking-tight">EDM-TECH</h1>
        <p className="text-xl mt-2 text-gray-600">Precision EDM Solutions with Charmilles Robofil 240SL</p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-2xl shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Our Expertise</h2>
          <p>
            At EDM-TECH, we specialize in high-precision electrical discharge machining using the reliable Charmilles Robofil 240SL.
            We serve industries that demand excellence, including aerospace, medical, automotive, and tool & die.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Our Machine</h2>
          <p>
            The Charmilles Robofil 240SL offers unbeatable accuracy, repeatability, and surface finish. It's ideal for tight tolerance components
            and complex geometries in both small and large batches.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
          <ul className="list-disc list-inside">
            <li>Fast turnaround</li>
            <li>Competitive pricing</li>
            <li>Experienced EDM specialists</li>
            <li>Reliable customer support</li>
          </ul>
        </div>
      </section>

      <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EDM-TECH. All rights reserved.
      </footer>
    </main>
  );
}
