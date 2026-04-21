import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FooterSimpleReveal from '@/components/sections/footer/FooterSimpleReveal';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsMinimalCards from '@/components/sections/metrics/MetricsMinimalCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamDetailedCards from '@/components/sections/team/TeamDetailedCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Linkedin, Twitter } from "lucide-react";

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="AUDI F1"
      navItems={[
        {
          name: "The Team",
          href: "#team",
        },
        {
          name: "Performance",
          href: "#metrics",
        },
        {
          name: "Technology",
          href: "#features",
        },
        {
          name: "Get Involved",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Join Us",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardBrand
      brand="AUDI F1"
      description="Redefining the pinnacle of motorsport through innovation, precision engineering, and the unrelenting pursuit of victory. Welcome to the future of Formula 1."
      primaryButton={{
        text: "Discover Innovation",
        href: "#features",
      }}
      secondaryButton={{
        text: "Meet the Team",
        href: "#team",
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/a-sleek-high-tech-formula-1-car-in-audi--1776768420937-a9a01748.png"
    />
  </div>

  <div id="team" data-section="team">
      <TeamDetailedCards
      tag="Leadership"
      title="Architects of Victory"
      description="Meet the visionary experts behind Audi's Formula 1 entry."
      members={[
        {
          name: "Andreas Seidl",
          role: "CEO",
          description: "Driving the strategic vision for F1 operations.",
          socialLinks: [
            {
              icon: Linkedin,
              url: "#",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/professional-headshot-of-a-corporate-lea-1776768433145-631f0d9b.png",
        },
        {
          name: "James Key",
          role: "Technical Director",
          description: "Masterminding aerodynamics and chassis development.",
          socialLinks: [
            {
              icon: Linkedin,
              url: "#",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/professional-headshot-of-an-automotive-e-1776768443169-868c12ad.png",
        },
        {
          name: "Nico Hülkenberg",
          role: "Lead Driver",
          description: "Bringing experience and pace to the cockpit.",
          socialLinks: [
            {
              icon: Twitter,
              url: "#",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/professional-headshot-of-a-professional--1776768453355-dbdbb7f9.png",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsMinimalCards
      tag="Capabilities"
      title="Performance at the Limit"
      metrics={[
        {
          value: "1000+",
          description: "HP Target Output",
        },
        {
          value: "350+",
          description: "Top Speed km/h",
        },
        {
          value: "2.5s",
          description: "0-100 km/h acceleration",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesComparison
      tag="Innovation"
      title="Engineering Edge"
      description="How Audi's approach disrupts the standard competition."
      negativeItems={[
        "High drag coefficients",
        "Conventional hybrid cooling",
        "Limited energy recovery",
      ]}
      positiveItems={[
        "Active aerodynamics system",
        "High-efficiency thermal management",
        "Advanced energy recovery systems",
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialTrustCard
      quote="Audi enters F1 not just to participate, but to lead the technological evolution of the sport. The intensity they bring is unparalleled."
      rating={5}
      author="Motorsport Weekly"
      avatars={[
        {
          name: "Editor",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-handsome-business-man-suit_613910-11300.jpg",
        },
        {
          name: "Analyst",
          imageSrc: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",
        },
        {
          name: "Reporter",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3529.jpg",
        },
        {
          name: "Engineer",
          imageSrc: "http://img.b2bpic.net/free-photo/redhead-female-supervisor-dressed-elegant-suit-grey-background_613910-1352.jpg",
        },
        {
          name: "Contributor",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-business-man-suit_613910-2543.jpg",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofMarquee
      tag="Partners"
      title="Global Tech Partners"
      description="Collaborating with the best names in industry to maximize potential."
      names={[
        "Carbon Dynamics",
        "Precision Analytics",
        "TurboCharge Inc",
        "Global Fuel Solutions",
        "Titan Aero",
        "Circuit Connect",
        "Velocity Systems",
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      tag="Information"
      title="Frequently Asked Questions"
      description="Everything you need to know about the transition."
      items={[
        {
          question: "When does Audi enter F1?",
          answer: "Audi officially enters the F1 grid starting in the 2026 season.",
        },
        {
          question: "Where is the HQ located?",
          answer: "The power unit development takes place in Neuburg an der Donau.",
        },
        {
          question: "What is the primary target?",
          answer: "Establishing Audi as a premier contender for race wins and titles by 2028.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/close-up-detail-of-carbon-fiber-f1-car-p-1776768464047-bdb48a55.png"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      tag="Contact"
      title="Join the Journey"
      description="Get official press updates and news directly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      buttonText="Subscribe"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AL5CpmjajJuSS9L1lop92oZb8I/a-futuristic-digital-workstation-showing-1776768474074-3a097d58.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleReveal
      brand="AUDI F1"
      columns={[
        {
          title: "Team",
          items: [
            {
              label: "History",
              href: "#",
            },
            {
              label: "Tech Specs",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Audi F1 Team."
      links={[
        {
          label: "Terms",
          href: "#",
        },
        {
          label: "Privacy",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
