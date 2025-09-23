export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-foreground/80 mb-4">
            By using our website and services, you agree to the following terms.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Service</h2>
          <p className="text-foreground/80">
            You agree not to misuse our services or violate applicable laws.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Liability</h2>
          <p className="text-foreground/80">
            We provide services as-is and are not liable for indirect damages arising from their use.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Changes</h2>
          <p className="text-foreground/80">
            We may update these terms. Continued use means you accept the changes.
          </p>
        </div>
      </section>
    </div>
  );
}
