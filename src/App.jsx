import { useState } from "react";
import portrait from "./assets/profilepic.png"
import mentor from "./assets/mentorpic.png"
import speaker from "./assets/speakerpic.png"
import judge from "./assets/hackmesa.png"

export default function VictoriaMacaliWebsiteMockup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [speakerIndex, setSpeakerIndex] = useState(0);
  const [judgeIndex, setJudgeIndex] = useState(0);

  const speakerImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
  ];

  const judgeImages = [
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a"
  ];

  const pinkBtn = "bg-[#EF90C4] text-white hover:opacity-90 transition";

  return (
    <div className="min-h-screen bg-[#F5EFEA] text-[#2E2C39] font-['Poppins'] overflow-x-hidden">

      {/* NAV */}
      <nav className="w-full border-b border-[#7586A2]/20 bg-[#F5EFEA]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div>
            <h3 className="text-3xl md:text-5xl font-semibold text-[#0B2141] mb-10">
              VICTORIA MACALI
            </h3>
              <p className="text-[20spx] tracking-[0.35em] text-[#EF90C4] uppercase">DATA SCIENTIST • AI RESEARCHER</p>
            </div>
          </div>

          <div className="hidden md:flex gap-10 text-sm">
            <a href="#work" className="hover:text-[#EF90C4]">Work</a>
            <a href="#leadership" className="hover:text-[#EF90C4]">Leadership</a>
            <a href="#about" className="hover:text-[#EF90C4]">About</a>
            <a href="#contact" className="hover:text-[#EF90C4]">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* HERO */}
<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <h3 className="text-3xl md:text-5xl font-semibold text-[#0B2141] mb-10">
  Transforming data into intelligent systems and AI strategy.
</h3>
    <div className="flex justify-center md:justify-end">
        <div className="flex justify-center md:justify-end">
            <img
              src={portrait}
              alt="Victoria portrait"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full object-cover border border-[#7586A2]/30 shadow-xl"
            />
        </div>
    </div>

  </div>
</section>

      {/* FEATURED WORK */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-[2.5rem] bg-[#0B2141] text-white p-10 shadow-2xl border border-[#EF90C4]/20">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="flex-1">
              <p className="text-[#EF90C4] uppercase tracking-[0.3em] text-xs mb-4">Featured Writing Sample</p>
              <h3 className="text-3xl mb-4">AI Security Applied to AIxBio Policy</h3>
              <p className="text-white/70">AI governance, security analysis, and dual-use risk research.</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#7586A2]/30 mb-4">
              <iframe
                src="public/vm-research.pdf"
                className="w-full h-64"
              />
            </div>

            <a
              href="/vm-research.pdf"
              target="_blank"
              rel="noreferrer"
              className="block text-center py-3 rounded-2xl bg-[#EF90C4] text-white"
            >
              Open Full PDF
            </a>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white/70 p-6 rounded-2xl border">
              <img
              src={speaker}
              alt="Victoria at SEC Podium"
              className="w-64 h-40 sm:w-80 sm:h-52 md:w-[420px] md:h-64 object-cover rounded-2xl border border-[#7586A2]/30 shadow-xl mx-auto md:mx-0"
            />
            <h3 className="font-semibold">Youth Summit Speaker</h3>
            <a href="https://www.youtube.com/live/Of1g9layXzY?si=RIfz35szz0btD3lf&t=2820" target="_blank" rel="noreferrer" className={`block text-center py-3 mt-4 rounded-2xl ${pinkBtn}`}>Watch Talk ↗</a>
          </div>

          <div className="bg-white/70 p-6 rounded-2xl border">
            <img
              src={judge}
              alt="HackMesa Judges"
              className="w-64 h-40 sm:w-80 sm:h-52 md:w-[420px] md:h-64 object-cover rounded-2xl border border-[#7586A2]/30 shadow-xl mx-auto md:mx-0"
            />
            <h3 className="font-semibold">Hackathon Judge</h3>
              <a href="https://hackmesa.com/#gallery" target="_blank" rel="noreferrer" className={`block text-center py-3 mt-4 rounded-2xl ${pinkBtn}`}>View Event</a>
          </div>

          <div className="bg-white/70 p-6 rounded-2xl border">
              <img
              src={mentor}
              alt="Victoria & Mentees"
              className="w-64 h-40 sm:w-80 sm:h-52 md:w-[420px] md:h-64 object-cover rounded-2xl border border-[#7586A2]/30 shadow-xl mx-auto md:mx-0"
            />
            <h3 className="font-semibold">COE/GenExcel Mentor & Tutor</h3>
            <a className={`block text-center py-3 mt-4 rounded-2xl ${pinkBtn}`} href="#">Learn More</a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="uppercase tracking-[0.3em] text-sm text-[#EF90C4] mb-6">About Me</p>
        <h3 className="text-3xl md:text-5xl font-semibold text-[#0B2141] mb-10">
          Data science, AI policy, and cybersecurity researcher focused on responsible intelligent systems.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* EDUCATION + AWARDS */}
          <div className="space-y-6">
            <div className="p-6 bg-white/70 rounded-2xl border border-[#7586A2]/20">
              <h4 className="font-semibold text-lg mb-2">Pardee RAND School of Public Policy</h4>
              <p>Master's of Technology Policy</p>
              <p className="text-sm text-[#4A4A4A]">Focus: Artificial Intelligence Policy</p>
            </div>

            <div className="p-6 bg-white/70 rounded-2xl border border-[#7586A2]/20">
              <h4 className="font-semibold text-lg mb-2">California State University, Long Beach</h4>
              <p>Bachelor's of Computer Science</p>
              <p className="text-sm text-[#4A4A4A]">Minor: Cybersecurity Applications</p>
            </div>

            <div className="p-6 bg-white/70 rounded-2xl border border-[#7586A2]/20">
              <h4 className="font-semibold text-lg mb-2">Awards and Honors</h4>
              <ul className="text-sm space-y-1 text-[#4A4A4A]">
                <li>President's Honor List 2023</li>
                <li>Dean's Honor List 2022</li>
                <li>Grace Hopper Celebration 2021 Scholarship Recipient</li>
              </ul>
            </div>
          </div>

          {/* CLUBS + AFFILIATIONS */}
          <div className="space-y-6">
            <div className="p-6 bg-white/70 rounded-2xl border border-[#7586A2]/20">
              <h4 className="font-semibold text-lg mb-3">Clubs and Affiliations</h4>

              <p className="font-medium">Women in Computing @ CSULB</p>
              <ul className="text-sm text-[#4A4A4A] ml-4 list-disc space-y-1 mb-4">
                <li>Webmaster (2022 - 2023)</li>
                <li>MarinaHacks Website Committee Lead (2022 - 2023)</li>
                <li>Secretary (2021 - 2022)</li>
                <li>Sponsorship Committee Lead (2021 - 2022)</li>
                <li>Sisterhood Mentor (2020 - 2021)</li>
              </ul>

              <p className="font-medium">Association of Computing Machinery @ CSULB</p>
              <ul className="text-sm text-[#4A4A4A] ml-4 list-disc mb-4">
                <li>BeachHacks Winner (Best Beach Hack 2020)</li>
              </ul>

              <p className="font-medium">Society of Women Engineers @ CSULB</p>
              <p className="text-sm text-[#4A4A4A] mb-2">Active Member</p>

              <p className="font-medium">Society of Hispanic Professional Engineers @ CSULB</p>
              <p className="text-sm text-[#4A4A4A]">Active Member</p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-24">
      <a
  href="mailto:victoriatmacali@gmail.com"
  className={`px-8 py-4 rounded-2xl ${pinkBtn}`}
>
  Contact Me
</a>
      </section>

    </div>
  );
}
