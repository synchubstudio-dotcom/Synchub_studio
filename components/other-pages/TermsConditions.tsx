import Link from "next/link";

export default function TermsConditions() {
  return (
    <>
      {/* Section - Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Subtitle / Category Label */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="mxd-point-subtitle">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                        />
                      </svg>
                      <span>Legal</span>
                    </p>
                  </div>
                </div>

                {/* Headline Content */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title loading__item">
                        Terms &amp; Conditions
                      </h1>
                      <p className="inner-headline__text t-large t-bright loading__item">
                        Welcome to SyncHUB Studio. These Terms &amp; Conditions govern your access to and use of our website, services, and digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Headline End */}

      {/* Section - Terms Content Start */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Meta details left rail */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="t-small t-muted mb-1">Last Updated</p>
                    <p className="t-small t-bright mb-4">13 November 2026</p>
                    <p className="t-small t-muted mb-1">Enquiries</p>
                    <p className="t-small t-bright">
                      <a
                        href="mailto:hello@synchub.studio"
                        className="t-accent underline-link"
                      >
                        hello@synchub.studio
                      </a>
                    </p>
                  </div>
                </div>

                {/* Article body */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content loading__fade">
                    <div className="mxd-article__content">
                      {/* Overview */}
                      <div id="overview" className="mxd-article__block">
                        <p className="t-large mxd-article__excerpt">
                          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our website,{" "}
                          <Link href="/" className="t-bright">
                            https://synchub.studio/
                          </Link>
                          , and the information and content available through it.
                        </p>
                        <p>
                          By accessing or using our website, you agree to these Terms. If you do not agree, please discontinue using the website.
                        </p>
                        <p>
                          These Terms apply to website use. Specific services provided to clients may also be governed by separate proposals, statements of work, quotations or signed service agreements.
                        </p>
                      </div>



                      {/* 1. About SyncHUB Studio */}
                      <div id="about-synchub-studio" className="mxd-article__block">
                        <h3>1. About SyncHUB Studio</h3>
                        <p>
                          SyncHUB Studio is a creative digital agency offering digital and technology-related services, including:
                        </p>
                        <ul className="article-ul">
                          <li>Website design and development.</li>
                          <li>UI/UX design and digital product design.</li>
                          <li>Custom software development.</li>
                          <li>Branding and visual identity.</li>
                          <li>Digital experiences and creative development.</li>
                          <li>Other digital and technology consulting services.</li>
                        </ul>
                        <p>
                          <strong>Website:</strong>{" "}
                          <Link href="/" className="t-accent underline-link">
                            https://synchub.studio/
                          </Link>
                          <br />
                          <strong>Email:</strong>{" "}
                          <a href="mailto:hello@synchub.studio" className="t-accent underline-link">
                            hello@synchub.studio
                          </a>
                          <br />
                          <strong>Business location:</strong> Vadodara, Gujarat, India
                          <br />
                          <strong>Legal business/operator name:</strong> SyncHUB Studio
                        </p>
                      </div>

                      {/* 2. Acceptance of Terms */}
                      <div id="acceptance-of-terms" className="mxd-article__block">
                        <h3>2. Acceptance of Terms</h3>
                        <p>By accessing, browsing or using this website, you confirm that:</p>
                        <ul className="article-ul">
                          <li>You have read and understood these Terms.</li>
                          <li>You agree to comply with these Terms and applicable laws.</li>
                          <li>You will use the website for lawful purposes.</li>
                          <li>Any information you submit is accurate to the best of your knowledge.</li>
                          <li>
                            If you are accessing the website on behalf of a company or organisation, you confirm that you are authorised to act on its behalf.
                          </li>
                        </ul>
                      </div>

                      {/* 3. Website Use and User Responsibilities */}
                      <div id="website-use" className="mxd-article__block">
                        <h3>3. Website Use and User Responsibilities</h3>
                        <p>You agree not to:</p>
                        <ul className="article-ul">
                          <li>Use the website for unlawful, fraudulent or misleading activities.</li>
                          <li>Attempt to gain unauthorised access to the website, servers or related systems.</li>
                          <li>Introduce malware, malicious scripts or harmful software.</li>
                          <li>Disrupt or interfere with website functionality or security.</li>
                          <li>Copy, scrape, reproduce or commercially exploit website content without permission.</li>
                          <li>Misrepresent your identity or affiliation.</li>
                          <li>Use the website in a manner that violates another person&apos;s rights.</li>
                        </ul>
                        <p>
                          We reserve the right to restrict or suspend access where we reasonably believe these Terms have been violated.
                        </p>
                      </div>

                      {/* 4. Intellectual Property Rights */}
                      <div id="intellectual-property" className="mxd-article__block">
                        <h3>4. Intellectual Property Rights</h3>
                        <p>
                          Unless otherwise stated, all website content and materials are owned by or licensed to SyncHUB Studio. This includes:
                        </p>
                        <ul className="article-ul">
                          <li>Logos and brand elements.</li>
                          <li>Website design and layouts.</li>
                          <li>Graphics, illustrations and visual assets.</li>
                          <li>Text, written content and marketing materials.</li>
                          <li>Portfolio presentations and creative concepts.</li>
                          <li>Website code and other original digital materials.</li>
                        </ul>
                        <p>These materials are protected by applicable intellectual property laws.</p>
                        <p>
                          You may view and access website content for personal or business information purposes. You may not reproduce, distribute, modify, publish, sell or commercially exploit our materials without prior written permission.
                        </p>
                        <p>
                          All third-party trademarks, logos and brand names remain the property of their respective owners.
                        </p>
                      </div>

                      {/* 5. Services and Project Engagements */}
                      <div id="services-engagements" className="mxd-article__block">
                        <h3>5. Services and Project Engagements</h3>
                        <p>
                          Information presented on our website describes our general capabilities and services. It does not constitute a binding offer, guarantee of availability or commitment to undertake a specific project.
                        </p>
                        <p>
                          A project engagement may require a separate written agreement, proposal, quotation or statement of work. Such documents may define:
                        </p>
                        <ul className="article-ul">
                          <li>Project scope and deliverables.</li>
                          <li>Design and development responsibilities.</li>
                          <li>Project milestones and timelines.</li>
                          <li>Pricing and payment schedules.</li>
                          <li>Revision limits and approval procedures.</li>
                          <li>Client responsibilities and dependencies.</li>
                          <li>Intellectual property ownership and licensing.</li>
                          <li>Maintenance, support and warranty arrangements.</li>
                          <li>Cancellation and termination conditions.</li>
                        </ul>
                        <p>
                          Where a separate written agreement exists, its specific provisions will govern the relevant project and will prevail over these website Terms to the extent of any inconsistency.
                        </p>
                      </div>

                      {/* 6. Pricing, Quotations and Payments */}
                      <div id="pricing-payments" className="mxd-article__block">
                        <h3>6. Pricing, Quotations and Payments</h3>
                        <p>
                          Any prices, packages or indicative estimates displayed on our website are for general informational purposes unless expressly identified as a binding offer.
                        </p>
                        <p>
                          Final project pricing will be communicated through an agreed quotation or service agreement. Unless otherwise agreed in writing:
                        </p>
                        <ul className="article-ul">
                          <li>Payments must follow the schedule specified in the approved quotation or agreement.</li>
                          <li>Work may begin after receipt of the agreed advance payment.</li>
                          <li>Additional work outside the approved scope may require a revised quotation.</li>
                          <li>Applicable taxes, duties and transaction charges will be communicated where relevant.</li>
                          <li>Delayed payments may affect project schedules and delivery.</li>
                        </ul>
                        <p>
                          Payment terms, currency, invoicing, late fees and applicable taxes will be governed by the relevant project agreement.
                        </p>
                      </div>

                      {/* 7. Revisions, Approvals and Project Delays */}
                      <div id="revisions-delays" className="mxd-article__block">
                        <h3>7. Revisions, Approvals and Project Delays</h3>
                        <p>
                          Project timelines depend on timely communication, approvals, content, feedback and other required inputs from the client. Unless otherwise agreed:
                        </p>
                        <ul className="article-ul">
                          <li>Revision rounds will be limited to those specified in the project agreement.</li>
                          <li>Additional revisions or changes to approved scope may incur additional charges.</li>
                          <li>Delays in client feedback, approvals or required materials may extend delivery timelines.</li>
                          <li>Significant changes after project approval may require a new scope and estimate.</li>
                        </ul>
                        <p>
                          We will make reasonable efforts to communicate project dependencies and schedule changes.
                        </p>
                      </div>

                      {/* 8. Cancellation and Refunds */}
                      <div id="cancellation-refunds" className="mxd-article__block">
                        <h3>8. Cancellation and Refunds</h3>
                        <p>
                          Cancellation, termination and refund arrangements for individual projects will be specified in the relevant proposal or service agreement. Unless otherwise agreed in writing:
                        </p>
                        <ul className="article-ul">
                          <li>Fees for completed work and approved milestones remain payable.</li>
                          <li>Payments for work already performed or non-recoverable project costs may not be refundable, subject to applicable law and the relevant agreement.</li>
                          <li>Any refundable amount will be assessed against work completed, commitments made and applicable contractual terms.</li>
                        </ul>
                        <p>
                          Nothing in these Terms excludes any mandatory consumer or other legal rights that cannot lawfully be excluded.
                        </p>
                      </div>

                      {/* 9. Client Materials and Responsibilities */}
                      <div id="client-materials" className="mxd-article__block">
                        <h3>9. Client Materials and Responsibilities</h3>
                        <p>
                          Clients may provide content, text, images, logos, documents, credentials and other materials required for a project. You represent that:
                        </p>
                        <ul className="article-ul">
                          <li>You have the necessary rights and permissions to provide those materials.</li>
                          <li>Your materials do not knowingly infringe third-party intellectual property rights.</li>
                          <li>Your instructions and supplied information are accurate and lawful.</li>
                          <li>You will provide required approvals, feedback and project information in a timely manner.</li>
                        </ul>
                        <p>
                          You remain responsible for the legality and accuracy of materials supplied by you, subject to the responsibilities agreed in the project contract.
                        </p>
                      </div>

                      {/* 10. Portfolio and Project Showcases */}
                      <div id="portfolio-showcases" className="mxd-article__block">
                        <h3>10. Portfolio and Project Showcases</h3>
                        <p>
                          We may display completed projects, designs, case studies or other work in our portfolio, website, presentations and marketing materials.
                        </p>
                        <p>
                          The use of client names, confidential information or unpublished project materials will be subject to applicable confidentiality obligations and the relevant project agreement.
                        </p>
                        <p>
                          Where required, we will obtain the appropriate permission before publishing client-confidential materials or identifying a client in a public case study.
                        </p>
                      </div>

                      {/* 11. Confidentiality */}
                      <div id="confidentiality" className="mxd-article__block">
                        <h3>11. Confidentiality</h3>
                        <p>
                          Both parties may receive confidential information during a business or project relationship.
                        </p>
                        <p>
                          Confidential information should not be disclosed to unauthorised third parties or used for purposes outside the relevant engagement, except where disclosure is authorised, legally required or otherwise permitted by the applicable agreement.
                        </p>
                        <p>
                          Any specific confidentiality obligations will be governed by the relevant non-disclosure agreement or service contract.
                        </p>
                      </div>

                      {/* 12. Third-Party Services and Integrations */}
                      <div id="third-party-services" className="mxd-article__block">
                        <h3>12. Third-Party Services and Integrations</h3>
                        <p>
                          Our website or services may reference or integrate with third-party platforms, tools, software, APIs, hosting providers, payment providers or other external services.
                        </p>
                        <p>
                          These services may have their own terms, conditions, pricing, availability and privacy policies. SyncHUB Studio is not responsible for independent third-party products or services beyond responsibilities expressly accepted in a written agreement.
                        </p>
                        <p>
                          Third-party outages, policy changes, pricing changes or service discontinuation may affect project functionality or availability.
                        </p>
                      </div>

                      {/* 13. Website Availability and Accuracy */}
                      <div id="website-availability" className="mxd-article__block">
                        <h3>13. Website Availability and Accuracy</h3>
                        <p>We aim to keep our website accurate, accessible and up to date. However, we do not guarantee that:</p>
                        <ul className="article-ul">
                          <li>The website will always be available without interruption.</li>
                          <li>All website content will be completely accurate or current.</li>
                          <li>The website will be free from errors, defects or technical interruptions.</li>
                          <li>All website functionality will be compatible with every device or browser.</li>
                        </ul>
                        <p>
                          We may modify, suspend, update or discontinue any part of the website without prior notice where reasonably necessary.
                        </p>
                      </div>

                      {/* 14. Disclaimer of Warranties */}
                      <div id="disclaimer-warranties" className="mxd-article__block">
                        <h3>14. Disclaimer of Warranties</h3>
                        <p>
                          To the maximum extent permitted by applicable law, the website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                        </p>
                        <p>
                          We make no warranties or representations, express or implied, regarding the website&apos;s uninterrupted availability, completeness, accuracy, suitability or fitness for a particular purpose.
                        </p>
                        <p>
                          Nothing in this section affects warranties or commitments expressly provided in a separate written client agreement or rights that cannot legally be excluded.
                        </p>
                      </div>

                      {/* 15. Limitation of Liability */}
                      <div id="limitation-liability" className="mxd-article__block">
                        <h3>15. Limitation of Liability</h3>
                        <p>
                          To the maximum extent permitted by applicable law, SyncHUB Studio will not be liable for indirect, incidental, special or consequential losses arising from the use of, or inability to use, this website.
                        </p>
                        <p>
                          This may include loss of profits, business opportunities, data, reputation or anticipated savings.
                        </p>
                        <p>
                          Our liability for a particular project or service will be governed by the applicable written agreement and mandatory legal requirements.
                        </p>
                        <p>
                          Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law, including liability for fraud or wilful misconduct where it cannot lawfully be excluded.
                        </p>
                      </div>

                      {/* 16. Indemnification */}
                      <div id="indemnification" className="mxd-article__block">
                        <h3>16. Indemnification</h3>
                        <p>
                          To the extent permitted by applicable law, you agree to be responsible for losses, claims or expenses arising directly from your unlawful use of the website, your violation of these Terms or your infringement of third-party rights.
                        </p>
                        <p>
                          This provision does not apply to the extent that a claim results from our own breach, negligence or other conduct for which liability cannot lawfully be excluded.
                        </p>
                      </div>

                      {/* 17. Privacy and Personal Information */}
                      <div id="privacy-personal-info" className="mxd-article__block">
                        <h3>17. Privacy and Personal Information</h3>
                        <p>
                          Your use of this website is also subject to our Privacy Policy, which explains how we collect, use, store and protect personal information.
                        </p>
                        <p>
                          Please review our Privacy Policy:{" "}
                          <Link href="/privacy-policy" className="t-accent underline-link">
                            https://synchub.studio/privacy-policy/
                          </Link>
                        </p>
                      </div>

                      {/* 18. Termination and Suspension */}
                      <div id="termination-suspension" className="mxd-article__block">
                        <h3>18. Termination and Suspension</h3>
                        <p>We may suspend or restrict access to the website where necessary to:</p>
                        <ul className="article-ul">
                          <li>Protect the security and integrity of our systems.</li>
                          <li>Prevent unlawful or harmful activities.</li>
                          <li>Address violations of these Terms.</li>
                          <li>Comply with applicable legal obligations.</li>
                          <li>Maintain or update website functionality.</li>
                        </ul>
                        <p>
                          Termination of a website user&apos;s access does not automatically terminate any separate client agreement.
                        </p>
                      </div>

                      {/* 19. Governing Law and Jurisdiction */}
                      <div id="governing-law" className="mxd-article__block">
                        <h3>19. Governing Law and Jurisdiction</h3>
                        <p>
                          These Terms shall be governed by the laws of India, subject to applicable mandatory legal provisions.
                        </p>
                        <p>
                          Subject to applicable law and any dispute resolution mechanism agreed in a separate written contract, courts of competent jurisdiction in Vadodara, Gujarat, India shall have jurisdiction over disputes arising from these Terms.
                        </p>
                      </div>

                      {/* 20. Changes to These Terms */}
                      <div id="changes-to-terms" className="mxd-article__block">
                        <h3>20. Changes to These Terms</h3>
                        <p>
                          We may revise these Terms from time to time to reflect changes in our website, business operations, services or legal requirements.
                        </p>
                        <p>
                          Updated Terms will be published on this page with a revised &ldquo;Last Updated&rdquo; date. Your continued use of the website after updated Terms are published constitutes acceptance of those changes to the extent permitted by applicable law.
                        </p>
                      </div>

                      {/* 21. Severability */}
                      <div id="severability" className="mxd-article__block">
                        <h3>21. Severability</h3>
                        <p>
                          If any provision of these Terms is held to be invalid, unlawful or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
                        </p>
                      </div>

                      {/* 22. Entire Agreement */}
                      <div id="entire-agreement" className="mxd-article__block">
                        <h3>22. Entire Agreement</h3>
                        <p>
                          These Terms govern general access to and use of our website. They do not replace a separate written agreement, proposal or contract governing a specific client engagement.
                        </p>
                      </div>

                      {/* 23. Contact Information */}
                      <div id="contact-information" className="mxd-article__block">
                        <h3>23. Contact Information</h3>
                        <p>If you have questions about these Terms, please contact us:</p>
                        <ul className="article-ul">
                          <li>
                            <strong>Agency:</strong> SyncHUB Studio
                          </li>
                          <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:hello@synchub.studio" className="t-accent underline-link">
                              hello@synchub.studio
                            </a>
                          </li>
                          <li>
                            <strong>Website:</strong>{" "}
                            <Link href="/" className="t-accent underline-link">
                              https://synchub.studio/
                            </Link>
                          </li>
                          <li>
                            <strong>Location:</strong> Vadodara, Gujarat, India
                          </li>
                          <li>
                            <strong>Tagline:</strong> Connecting ideas across the spectrum.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Terms Content End */}
    </>
  );
}

