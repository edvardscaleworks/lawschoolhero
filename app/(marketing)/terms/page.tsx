import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — LawSchoolHero",
};

export default function TermsPage() {
  return (
    <main className="bg-black">
      <Nav />
      <section className="max-w-3xl mx-auto px-6 md:px-8 pt-40 pb-24">
        <h1
          className="font-serif font-normal mb-3"
          style={{ fontSize: "var(--fluid-4xl)", color: "#ffffff" }}
        >
          Terms of Service
        </h1>
        <p className="mb-16 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Effective March 25, 2026 · Nordgrowth Partners LLC d/b/a LawSchoolHero
        </p>

        <div
          className="flex flex-col gap-10 leading-relaxed text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <Part title="1. Acceptance of Terms">
            <p>
              By accessing or using LawSchoolHero (lawschoolhero.org), you agree to be
              bound by these Terms of Service and our{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Privacy Policy
              </a>
              . If you do not agree, please do not use the platform. These terms
              constitute a legally binding agreement between you and Nordgrowth Partners
              LLC, a Delaware limited liability company doing business as LawSchoolHero
              ("LawSchoolHero," "we," "us," or "our").
            </p>
          </Part>

          <Part title="2. Eligibility">
            <p>
              You must be at least 18 years old to use LawSchoolHero. By using the
              platform, you represent that you meet this requirement. If you are using the
              platform on behalf of an organization, you represent that you have authority
              to bind that organization to these terms.
            </p>
          </Part>

          <Part title="3. Our Services">
            <p>
              LawSchoolHero provides free law school admissions preparation tools,
              including:
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-5 mt-3">
              <li>LSAT Logical Reasoning practice</li>
              <li>LSAT Reading Comprehension practice</li>
              <li>Personal Statement coaching</li>
              <li>Resume Formatting assistance</li>
            </ul>
            <p className="mt-3">
              We also offer optional paid tutoring services. The core prep tools are and
              will remain free. We reserve the right to modify, suspend, or discontinue
              any part of the service with reasonable notice.
            </p>
          </Part>

          <Part title="4. User Accounts">
            <p>
              To access certain features, you must create an account using your email
              address or a Google account. You are responsible for maintaining the
              confidentiality of your account and for all activity that occurs under it.
              Notify us immediately at{" "}
              <a
                href="mailto:hello@lawschoolhero.org"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                hello@lawschoolhero.org
              </a>{" "}
              if you suspect unauthorized access to your account.
            </p>
          </Part>

          <Part title="5. User Content">
            <Subsection title="Your ownership">
              You retain ownership of all content you submit to LawSchoolHero — including
              essay drafts, LSAT answers, and resume materials ("Your Content"). You grant
              us a limited, non-exclusive license to store, process, and display Your
              Content solely to provide the service to you.
            </Subsection>
            <Subsection title="Our use">
              We may use anonymized, aggregated versions of user content to improve our
              tools and product — never in a way that identifies you personally without
              your consent.
            </Subsection>
            <Subsection title="Your responsibility">
              You represent that you own or have the necessary rights to the content you
              submit, and that your content does not violate any third-party rights or
              applicable law.
            </Subsection>
          </Part>

          <Part title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="flex flex-col gap-2 list-disc pl-5 mt-3">
              <li>
                Use the platform for any unlawful purpose or in violation of these terms
              </li>
              <li>
                Scrape, reverse engineer, or attempt to extract source code from the
                platform
              </li>
              <li>
                Submit content that is abusive, defamatory, or infringes on the rights of
                others
              </li>
              <li>
                Misrepresent your identity or affiliation with any person or organization
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the platform or its
                infrastructure
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these
              rules.
            </p>
          </Part>

          <Part title="7. Paid Services — Tutoring">
            <p>
              Tutoring services are subject to additional terms presented at the time of
              purchase, including pricing, cancellation, and refund policies. All payments
              are processed securely through a third-party payment processor. By
              purchasing tutoring, you authorize us to charge the applicable fees to your
              payment method.
            </p>
            <p>
              Refund requests for tutoring sessions must be made within 48 hours of a
              scheduled session that did not occur as agreed. Completed sessions are
              non-refundable.
            </p>
          </Part>

          <Part title="8. Intellectual Property">
            <p>
              All content on LawSchoolHero — including the platform design, prep
              materials, coaching frameworks, and software — is owned by or licensed to
              Nordgrowth Partners LLC. Nothing in these terms grants you a right to use
              our trademarks, logos, or proprietary content outside of using the platform
              as intended.
            </p>
          </Part>

          <Part title="9. Disclaimers">
            <p>
              LawSchoolHero provides educational tools and guidance for informational
              purposes only. We do not guarantee admission to any law school or a
              specific LSAT score improvement. Results vary by individual effort and
              circumstances.
            </p>
            <p>
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
              ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Part>

          <Part title="10. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, NORDGROWTH PARTNERS LLC SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM. OUR TOTAL
              LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE GREATER OF $100 OR THE AMOUNT
              YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </Part>

          <Part title="11. Governing Law and Disputes">
            <p>
              These terms are governed by the laws of the State of Delaware, without
              regard to conflict of law principles. Any dispute arising from these terms
              or your use of the platform shall be resolved exclusively in the state or
              federal courts located in Delaware, and you consent to personal jurisdiction
              there.
            </p>
          </Part>

          <Part title="12. Changes to These Terms">
            <p>
              We may update these Terms of Service from time to time. When we do, we will
              update the effective date at the top of this page. Material changes will be
              communicated via email or a notice on the platform. Continued use of the
              platform after the updated terms take effect constitutes your acceptance of
              the new terms.
            </p>
          </Part>

          <Part title="13. Contact">
            <p>
              Nordgrowth Partners LLC d/b/a LawSchoolHero
              <br />
              hello@lawschoolhero.org
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
