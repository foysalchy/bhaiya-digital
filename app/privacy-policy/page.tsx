'use client'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -top-32 -right-96 w-96 h-96 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full blur-3xl opacity-20" />

      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-12 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: November 13, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {[
            {
              title: '1. Introduction',
              content: 'BhaiyaDigital ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information in connection with our website, services, and business operations.'
            },
            {
              title: '2. Information We Collect',
              content: 'We may collect information about you in various ways:\n• Personal Information: Name, email address, phone number, company name, and other contact details you provide voluntarily.\n• Usage Information: Information about how you interact with our website, including pages visited, time spent, and referral sources.\n• Device Information: Browser type, IP address, operating system, and other technical details.\n• Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze site usage.'
            },
            {
              title: '3. How We Use Your Information',
              content: 'We use the information we collect for the following purposes:\n• Providing and improving our services\n• Communicating with you about our services and updates\n• Responding to your inquiries and providing customer support\n• Personalizing your experience on our website\n• Marketing and promotional purposes (with your consent)\n• Analyzing website usage and trends\n• Complying with legal obligations'
            },
            {
              title: '4. Information Sharing',
              content: 'We do not sell, trade, or rent your personal information to third parties. However, we may share information with:\n• Service providers who assist us in operating our website and conducting our business\n• Legal authorities when required by law\n• Business partners with your consent'
            },
            {
              title: '5. Data Security',
              content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security.'
            },
            {
              title: '6. Your Rights',
              content: 'Depending on your location, you may have the following rights:\n• Access to your personal information\n• Correction of inaccurate data\n• Deletion of your information\n• Restriction of processing\n• Data portability\n• Objection to processing\n\nTo exercise these rights, please contact us at info@bhaiya.digital.'
            },
            {
              title: '7. Cookies and Tracking Technologies',
              content: 'Our website uses cookies and similar tracking technologies to enhance user experience and analyze site performance. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionalities of our website.'
            },
            {
              title: '8. Third-Party Links',
              content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.'
            },
            {
              title: '9. Children\'s Privacy',
              content: 'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate that user\'s account.'
            },
            {
              title: '10. Changes to This Privacy Policy',
              content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by updating the "Last updated" date and, if necessary, by email or prominent notice on our website.'
            },
            {
              title: '11. Contact Us',
              content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:\n\nBhaiyaDigital\nEmail: info@bhaiya.digital\nPhone: +880 1864-44645\nLocation: Banani, Dhaka'
            },
            {
              title: '12. Compliance',
              content: 'This Privacy Policy complies with applicable data protection regulations including but not limited to the General Data Protection Regulation (GDPR) and other international privacy standards.'
            }
          ].map((section, i) => (
            <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-white/80 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl mt-20">
        <nav className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
             <a href="/" className="font-bold text-white hover:text-orange-400 transition">
              Home
            </a>
            <a href="/about" className="font-bold text-white hover:text-orange-400 transition">
              About
            </a>
            <a href="/privacy-policy" className="font-bold text-white hover:text-orange-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="font-bold text-white hover:text-orange-400 transition">
              Terms & Conditions
            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}
