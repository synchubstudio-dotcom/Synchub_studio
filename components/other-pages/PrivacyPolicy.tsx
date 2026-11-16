import Link from "next/link";

export default function PrivacyPolicy() {
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
                        Privacy Policy
                      </h1>
                      <p className="inner-headline__text t-large t-bright loading__item">
                        At SyncHUB Studio (&ldquo;SyncHUB Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting your personal information.
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

      {/* Section - Policy Content Start */}
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
                          This Privacy Policy explains how we collect, use, store, disclose and protect information when you visit our website,{" "}
                          <Link href="/" className="t-bright">
                            https://synchub.studio/
                          </Link>
                          , contact us, submit an enquiry or interact with our services.
                        </p>
                        <p>
                          By using our website, you acknowledge that you have read this Privacy Policy.
                        </p>
                      </div>



                      {/* 1. About SyncHUB Studio */}
                      <div id="about-synchub-studio" className="mxd-article__block">
                        <h3>1. About SyncHUB Studio</h3>
                        <p>
                          SyncHUB Studio is a creative digital agency providing digital design, website development, UI/UX design, branding, custom software development and related digital services.
                        </p>
                        <p>For privacy-related enquiries, you can contact us at:</p>
                        <ul className="article-ul">
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
                            <strong>Business location:</strong> Vadodara, Gujarat, India
                          </li>
                          <li>
                            <strong>Legal business/operator name:</strong> SyncHUB Studio
                          </li>
                        </ul>
                      </div>

                      {/* 2. Information We Collect */}
                      <div id="information-we-collect" className="mxd-article__block">
                        <h3>2. Information We Collect</h3>
                        <p>
                          We may collect information that you voluntarily provide when interacting with our website or communicating with us.
                        </p>

                        <h5>2.1 Personal Information</h5>
                        <p>Depending on how you contact us, this may include:</p>
                        <ul className="article-ul">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>Company or organisation name</li>
                          <li>Job title or professional details</li>
                          <li>Project requirements and business information</li>
                          <li>Messages, enquiries and other information you choose to share</li>
                        </ul>

                        <h5>2.2 Technical and Usage Information</h5>
                        <p>
                          When you visit our website, certain technical information may be collected automatically, including:
                        </p>
                        <ul className="article-ul">
                          <li>IP address</li>
                          <li>Browser type and version</li>
                          <li>Device type and operating system</li>
                          <li>Website pages visited</li>
                          <li>Date and time of visits</li>
                          <li>Referring website or source</li>
                          <li>General website interaction and usage information</li>
                        </ul>

                        <h5>2.3 Cookies and Similar Technologies</h5>
                        <p>
                          We may use cookies and similar technologies to support website functionality, understand website usage, remember preferences and improve user experience.
                        </p>
                        <p>The types of cookies that may be used include:</p>
                        <ul className="article-ul">
                          <li>
                            <strong>Essential cookies:</strong> Required for core website functionality.
                          </li>
                          <li>
                            <strong>Analytics cookies:</strong> Help us understand visitor behaviour and website performance.
                          </li>
                          <li>
                            <strong>Preference cookies:</strong> Remember certain user preferences.
                          </li>
                          <li>
                            <strong>Marketing cookies:</strong> May be used to measure or improve marketing activities, where implemented.
                          </li>
                        </ul>
                        <p>
                          Non-essential cookies or tracking technologies will be used in accordance with applicable consent requirements.
                        </p>
                        <p>
                          You can manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.
                        </p>
                      </div>

                      {/* 3. How We Use Your Information */}
                      <div id="how-we-use-information" className="mxd-article__block">
                        <h3>3. How We Use Your Information</h3>
                        <p>We may use collected information for the following purposes:</p>
                        <ul className="article-ul">
                          <li>To respond to enquiries and contact requests.</li>
                          <li>To understand your project requirements.</li>
                          <li>To prepare proposals, quotations and service recommendations.</li>
                          <li>To communicate about potential or ongoing projects.</li>
                          <li>To provide, maintain and improve our website and services.</li>
                          <li>To monitor website performance and troubleshoot technical issues.</li>
                          <li>To maintain business records and communications.</li>
                          <li>To protect our website, systems and business operations.</li>
                          <li>To comply with applicable legal and regulatory obligations.</li>
                          <li>To send relevant business updates or marketing communications where permitted.</li>
                        </ul>
                        <p>
                          We do not intentionally collect more personal information than is reasonably necessary for the relevant purpose.
                        </p>
                      </div>

                      {/* 4. Legal Basis and Consent */}
                      <div id="legal-basis-consent" className="mxd-article__block">
                        <h3>4. Legal Basis and Consent</h3>
                        <p>
                          We process personal information in accordance with applicable data protection and privacy laws.
                        </p>
                        <p>
                          Depending on the circumstances and applicable law, information may be processed based on your consent, your request for services or steps preceding a contract, performance of a contractual obligation, compliance with legal requirements or another legally recognised basis.
                        </p>
                        <p>
                          Where consent is required, you may withdraw it subject to applicable legal requirements. Withdrawal does not affect processing lawfully carried out before withdrawal.
                        </p>
                      </div>

                      {/* 5. How We Share Your Information */}
                      <div id="how-we-share-information" className="mxd-article__block">
                        <h3>5. How We Share Your Information</h3>
                        <p>
                          <strong>We do not sell your personal information.</strong>
                        </p>
                        <p>
                          We may share information with trusted third parties when reasonably necessary to operate our website, communicate with you or provide our services. These may include:
                        </p>
                        <ul className="article-ul">
                          <li>Website hosting and infrastructure providers.</li>
                          <li>Email and communication service providers.</li>
                          <li>Analytics and website performance providers.</li>
                          <li>Security and spam-prevention services.</li>
                          <li>Cloud storage and software service providers.</li>
                          <li>Professional advisers, including legal and accounting advisers.</li>
                          <li>Government authorities or regulatory bodies where legally required.</li>
                        </ul>
                        <p>
                          Third-party providers may process information on our behalf or independently under their own privacy policies and terms. We aim to work with service providers that maintain appropriate safeguards for personal information.
                        </p>
                      </div>

                      {/* 6. International Data Transfers */}
                      <div id="international-transfers" className="mxd-article__block">
                        <h3>6. International Data Transfers</h3>
                        <p>
                          As SyncHUB Studio may work with clients and service providers internationally, personal information may be processed or stored in countries outside your country of residence.
                        </p>
                        <p>
                          Where information is transferred internationally, we will take steps required by applicable law to ensure appropriate protection and safeguards.
                        </p>
                      </div>

                      {/* 7. Data Retention */}
                      <div id="data-retention" className="mxd-article__block">
                        <h3>7. Data Retention</h3>
                        <p>
                          We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy, including:
                        </p>
                        <ul className="article-ul">
                          <li>Responding to enquiries.</li>
                          <li>Managing client relationships and projects.</li>
                          <li>Maintaining contractual and financial records.</li>
                          <li>Resolving disputes.</li>
                          <li>Meeting legal, regulatory and business obligations.</li>
                        </ul>
                        <p>
                          When information is no longer required, we will take reasonable steps to securely delete, anonymise or otherwise dispose of it, subject to applicable retention requirements.
                        </p>
                      </div>

                      {/* 8. Data Security */}
                      <div id="data-security" className="mxd-article__block">
                        <h3>8. Data Security</h3>
                        <p>
                          We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or destruction.
                        </p>
                        <p>
                          These measures may include access controls, secure hosting, encryption where appropriate, software updates and restricted access to information.
                        </p>
                        <p>
                          However, no method of internet transmission or electronic storage can be guaranteed to be completely secure. We cannot guarantee absolute security.
                        </p>
                      </div>

                      {/* 9. Your Privacy Rights */}
                      <div id="your-privacy-rights" className="mxd-article__block">
                        <h3>9. Your Privacy Rights</h3>
                        <p>Subject to applicable law, you may have the right to:</p>
                        <ul className="article-ul">
                          <li>Request information about personal data we process about you.</li>
                          <li>Request correction of inaccurate or incomplete information.</li>
                          <li>Request deletion of personal information where legally permissible.</li>
                          <li>Withdraw consent where processing is based on consent.</li>
                          <li>Raise concerns or submit a privacy-related complaint.</li>
                          <li>Exercise other rights available under applicable data protection laws.</li>
                        </ul>
                        <p>
                          To exercise a privacy right, contact us using the details provided in this policy. We may need to verify your identity before processing certain requests.
                        </p>
                      </div>

                      {/* 10. Third-Party Websites and Services */}
                      <div id="third-party-websites" className="mxd-article__block">
                        <h3>10. Third-Party Websites and Services</h3>
                        <p>
                          Our website may contain links to third-party websites, platforms or services.
                        </p>
                        <p>
                          We do not control the privacy practices, content or security of those external websites. Visiting a third-party website is subject to its own terms and privacy policy. We encourage you to review the privacy policies of external services before providing personal information.
                        </p>
                      </div>

                      {/* 11. Children's Privacy */}
                      <div id="childrens-privacy" className="mxd-article__block">
                        <h3>11. Children&apos;s Privacy</h3>
                        <p>
                          Our website and services are intended primarily for businesses, professionals and general audiences.
                        </p>
                        <p>
                          We do not knowingly collect personal information from children in circumstances where parental consent or other additional safeguards are required by applicable law.
                        </p>
                        <p>
                          If you believe a child has provided personal information to us inappropriately, please contact us so that we can review the matter and take appropriate action.
                        </p>
                      </div>

                      {/* 12. Marketing Communications */}
                      <div id="marketing-communications" className="mxd-article__block">
                        <h3>12. Marketing Communications</h3>
                        <p>
                          We may send relevant business updates, service information or marketing communications where permitted by applicable law.
                        </p>
                        <p>
                          You may opt out of marketing communications by following the unsubscribe instructions in the message or contacting us directly. Opting out of marketing communications will not prevent us from sending essential service-related or transactional communications where necessary.
                        </p>
                      </div>

                      {/* 13. Changes to This Privacy Policy */}
                      <div id="changes-to-policy" className="mxd-article__block">
                        <h3>13. Changes to This Privacy Policy</h3>
                        <p>
                          We may update this Privacy Policy from time to time to reflect changes in our business operations, website functionality, technology or legal requirements.
                        </p>
                        <p>
                          Any revised version will be published on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage visitors to review this page periodically.
                        </p>
                      </div>

                      {/* 14. Contact and Privacy Complaints */}
                      <div id="contact-and-complaints" className="mxd-article__block">
                        <h3>14. Contact and Privacy Complaints</h3>
                        <p>
                          If you have questions, requests or concerns regarding this Privacy Policy or our handling of personal information, please contact us:
                        </p>
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
      {/* Section - Policy Content End */}
    </>
  );
}
