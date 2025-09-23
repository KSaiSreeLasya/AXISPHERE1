export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-neutral dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how Axisphere Media Worx ("Axisphere", "we", "us")
            collects, uses, and protects your information when you use our websites,
            products, and services (collectively, the "Services").
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              Contact details you provide, such as name, email address, phone number,
              company, and the message you submit via our contact forms.
            </li>
            <li>
              Usage data collected automatically, including IP address, device/browser information,
              and pages visited.
            </li>
            <li>
              Cookies and similar technologies used to remember preferences and improve performance.
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Operate, maintain, and improve the Services.</li>
            <li>Send administrative messages and updates you request.</li>
            <li>Protect against, investigate, and deter fraudulent activity.</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with service providers
            who help us operate the Services (for example, hosting, analytics, and customer support).
            These providers are bound by obligations to protect your data.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for the purposes described above,
            to comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict
            the processing of your personal information. To exercise these rights, contact us using
            the details below.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable technical and organizational safeguards to protect personal information.
            No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>International Transfers</h2>
          <p>
            Your information may be processed in countries other than your own. When we transfer data,
            we implement appropriate protections.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Services are not directed to children under 13. We do not knowingly collect personal
            information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by
            an updated "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            For questions about this Privacy Policy, contact hello@ai-marketing.studio or write to Axisphere
            Media Worx, Bengaluru, India.
          </p>

          <p className="text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
}
