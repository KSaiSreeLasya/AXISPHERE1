import { Mail, Phone, MapPin, Building } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our AI marketing experts and start your journey to
            exponential growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <form className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                What are your goals?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold-500 px-6 py-3 font-semibold text-white hover:bg-gold-600"
            >
              Schedule My Consultation
            </button>
          </form>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Mail className="h-4 w-4" /> Email
              </div>
              <div className="text-sm text-foreground/80">
                hello@ai-marketing.studio
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Phone className="h-4 w-4" /> Call us
              </div>
              <div className="text-sm text-foreground/80">+91 98765 43210</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <MapPin className="h-4 w-4" /> Visit us
              </div>
              <div className="text-sm text-foreground/80">
                Bengaluru • Mumbai • Delhi
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Building className="h-4 w-4" /> Business Hours
              </div>
              <div className="text-sm text-foreground/80">
                Mon–Sat, 9:30 AM – 7:00 PM IST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
