import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - BhaiyaDigital",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted-foreground">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                BhaiyaDigital ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and otherwise process your personal information in
                connection with our website, services, and business operations.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-3">
                <p>We may collect information about you in various ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, company name, and other
                    contact details you provide voluntarily.
                  </li>
                  <li>
                    <strong>Usage Information:</strong> Information about how you interact with our website, including
                    pages visited, time spent, and referral sources.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Browser type, IP address, operating system, and other technical
                    details.
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your
                    experience and analyze site usage.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <div className="space-y-3">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about our services and updates</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Personalizing your experience on our website</li>
                  <li>Marketing and promotional purposes (with your consent)</li>
                  <li>Analyzing website usage and trends</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. However, we may share
                information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is completely secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <div className="space-y-3">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
                <p className="mt-3">To exercise these rights, please contact us at info@bhaiya.digital.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance user experience and analyze site
                performance. You can control cookie settings through your browser preferences. Disabling cookies may
                affect certain functionalities of our website.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review their privacy policies before providing any personal
                information.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child under 13,
                we will take steps to delete such information and terminate that user's account.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of significant changes by updating the "Last
                updated" date and, if necessary, by email or prominent notice on our website.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg border border-border/50">
                <p className="font-bold text-foreground mb-2">BhaiyaDigital</p>
                <p className="text-sm">Email: info@bhaiya.digital</p>
                <p className="text-sm">Phone: +880 1864-44645</p>
                <p className="text-sm">Location: Banani, Dhaka</p>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Compliance</h2>
              <p className="leading-relaxed">
                This Privacy Policy complies with applicable data protection regulations including but not limited to
                the General Data Protection Regulation (GDPR) and other international privacy standards.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
