import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — lawschoolhero",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black">
      <Nav />
      <section className="max-w-3xl mx-auto px-6 md:px-8 pt-40 pb-24">
        <h1
          className="font-serif font-normal mb-3"
          style={{ fontSize: "var(--fluid-4xl)", color: "#ffffff" }}
        >
          Privacy Policy
        </h1>
        <p className="mb-16 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Effective March 25, 2026 · Nordgrowth Partners LLC d/b/a LawSchoolHero
        </p>

        <div
          className="flex flex-col gap-10 leading-relaxed text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <Part title="1. Who We Are">
            <p>
              LawSchoolHero is operated by Nordgrowth Partners LLC, a Delaware limited
              liability company doing business as LawSchoolHero ("we," "us," or "our").
              Our platform at lawschoolhero.org offers free law school admissions prep
              tools — including LSAT Logical Reasoning practice, Reading Comprehension
              practice, Personal Statement coaching, and Resume Formatting — along with
              optional paid tutoring services.
            </p>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:info@lawschoolhero.org"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                info@lawschoolhero.org
              </a>
              .
            </p>
          </Part>

          <Part title="2. Information We Collect">
            <Subsection title="Account information">
              When you create an account, we collect your email address. You may sign in
              via a magic link or Google OAuth — in the latter case, Google shares your
              email address and basic profile information (name, profile photo) with us.
            </Subsection>
            <Subsection title="User-generated content">
              To provide our prep tools, we receive and store content you submit: LSAT
              practice answers, essay drafts, resume materials, and any feedback you
              provide on those submissions. This content is used to deliver and improve
              the service, not for advertising.
            </Subsection>
            <Subsection title="Usage analytics">
              We collect information about how you use the platform — pages visited,
              features used, session duration, device type, browser, and IP address. This
              helps us understand what is working and where to improve. We may use
              third-party analytics providers for this purpose (see Section 5).
            </Subsection>
            <Subsection title="Payment information">
              If you purchase tutoring services, your payment is processed by a
              third-party payment processor (such as Stripe). We do not store your full
              credit card number. We receive a transaction record including the last four
              digits of your card, billing name, and transaction amount.
            </Subsection>
          </Part>

          <Part title="3. How We Use Your Information">
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>Create and manage your account</li>
              <li>Deliver and personalize our prep tools and coaching</li>
              <li>Send transactional emails (sign-in links, receipts, service updates)</li>
              <li>
                Send marketing emails — tips, product updates, and promotions — where you
                have not opted out (see Section 7)
              </li>
              <li>Analyze and improve the platform</li>
              <li>Process tutoring payments and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Part>

          <Part title="4. Legal Basis (for EEA/UK Users)">
            <p>
              If you are located in the European Economic Area or United Kingdom, our
              legal bases for processing your data are: (a) performance of our contract
              with you (account creation, service delivery); (b) our legitimate interests
              (analytics, security, improving the service); and (c) your consent
              (marketing emails, which you may withdraw at any time).
            </p>
          </Part>

          <Part title="5. Third-Party Service Providers">
            <p>
              We share your information with vendors who help us operate the platform,
              strictly for that purpose and under confidentiality obligations:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-5 mt-3">
              <li>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Supabase</strong> —
                authentication, database, and backend infrastructure
              </li>
              <li>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>Google</strong> — OAuth
                sign-in (if you choose to use it); governed by Google's privacy policy
              </li>
              <li>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  Analytics providers
                </strong>{" "}
                — usage data to help us understand how the product is used
              </li>
              <li>
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                  Payment processors
                </strong>{" "}
                — billing for paid tutoring services
              </li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties. We do not share
              your data for cross-site advertising.
            </p>
          </Part>

          <Part title="6. Data Retention">
            <p>
              We retain your account and content for as long as your account is active. If
              you delete your account, we will delete or anonymize your personal data
              within 30 days, except where retention is required by law or necessary to
              resolve disputes and enforce agreements.
            </p>
          </Part>

          <Part title="7. Marketing Communications">
            <p>
              You may opt out of marketing emails at any time by clicking "Unsubscribe" in
              any marketing email or emailing us at info@lawschoolhero.org. You will
              still receive transactional emails necessary to operate your account (e.g.,
              sign-in links).
            </p>
          </Part>

          <Part title="8. Your Rights">
            <p>
              Depending on where you live, you may have the right to access, correct,
              delete, or export your personal data. California residents may have
              additional rights under the CCPA, including the right to know what personal
              information we collect and to request deletion. To exercise any of these
              rights, contact us at info@lawschoolhero.org.
            </p>
          </Part>

          <Part title="9. Children's Privacy">
            <p>
              LawSchoolHero is intended for users who are 18 or older. We do not
              knowingly collect personal information from anyone under 18. If you believe
              we have inadvertently collected information from a minor, please contact us
              immediately and we will delete it.
            </p>
          </Part>

          <Part title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              update the effective date at the top of this page. Material changes will be
              communicated via email or a notice on the platform. Continued use of the
              service after a change constitutes your acceptance of the updated policy.
            </p>
          </Part>

          <Part title="11. Contact">
            <p>
              Nordgrowth Partners LLC d/b/a LawSchoolHero
              <br />
              info@lawschoolhero.org
            </p>
          </Part>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Part({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2
        className="font-serif font-normal mb-4"
        style={{ fontSize: "var(--fluid-lg)", color: "#ffffff" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="mb-1 font-medium"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {title}
      </p>
      <p>{children}</p>
    </div>
  );
}
