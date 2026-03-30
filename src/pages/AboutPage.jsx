import { useNavigate } from 'react-router-dom';

const VISION = `We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.`;

const MISSION = `We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.`;

const PASSION = `Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.`;

const INDUSTRIES = [
  'Aerospace', 'Agriculture', 'Automotive', 'Chemical', 'Defence Technology',
  'Education', 'Energy & Utilities', 'Entertainment and Media', 'Finance',
  'Food Technology', 'Healthcare', 'Infrastructure', 'Logistics', 'Manufacturing',
  'Ocean Technology', 'Oil and Gas', 'Pharmaceutical', 'Retail', 'Sports',
  'Technology', 'Telecommunication', 'Textile', 'Transportation', 'Travel',
];

const TECH_PILLARS = [
  { icon: '🤖', label: 'Android Developer', skills: 'Java, Kotlin' },
  { icon: '🏗️', label: 'CAD/CAM Designer', skills: 'Solidworks' },
  { icon: '🧪', label: 'DFT Engineer', skills: 'DFT Methodologies, ATPG, JTAG' },
  { icon: '⚡', label: 'FARM-stack Developer', skills: 'FastAPI, ReactJs, MongoDB' },
  { icon: '🔌', label: 'FPGA', skills: 'VHDL, Modelsim, Xilinx Vivado' },
  { icon: '🔧', label: 'Hardware Design & Testing', skills: 'C, Embedded C, RTOS, Kicad' },
  { icon: '🍎', label: 'iOS Developer', skills: 'Swift' },
  { icon: '🧠', label: 'Machine Learning Engineer', skills: 'Python, Keras, OpenCV, Scikit, TensorFlow' },
  { icon: '⚙️', label: 'MEAN-stack Developer', skills: 'AngularJs, NodeJs, MongoDB, ExpressJs' },
  { icon: '💻', label: 'MERN-stack Developer', skills: 'ReactJs, NodeJs, MongoDB, ExpressJs' },
  { icon: '📊', label: 'Physical Design Engineer', skills: 'RTL-to-GDSII Flow, Place and Route, Timing Closure' },
  { icon: '🦾', label: 'Robotics Engineer', skills: 'C++, Python, ROS' },
  { icon: '✅', label: 'Software Tester', skills: 'Automation and Manual Testing' },
  { icon: '🎨', label: 'UX/UI Designer', skills: 'Framer, Figma, Adobe XD, Sketch' },
  { icon: '🔍', label: 'Verification Engineer', skills: 'SystemVerilog, UVM, Functional Coverage' },
  { icon: '🛠️', label: 'VLSI Design Engineer', skills: 'RTL Design, Verilog, Synthesis' },
];

const VisionCard = ({ icon, title, body, color }) => (
  <div className="vmp-card" style={{ '--vmp-color': color }}>
    <div className="vmp-icon">{icon}</div>
    <h3 className="vmp-title" style={{ color }}>{title}</h3>
    <p className="vmp-body">{body}</p>
  </div>
);

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container about-hero-inner">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Products</button>
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            TechBrain Networks — Our Genesis
          </div>
          <h1>
            Revolutionizing the<br />
            <span className="grad">Future of Technology</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 700 }}>
            TechBrain Networks is a leading Software Product Development company specializing in AI,
            IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
          </p>

          <div className="about-metrics">
            {[
              { v: '480+', l: 'Innovative Products' },
              { v: '24', l: 'Global Industries' },
              { v: '30+', l: 'Countries by 2027' },
              { v: '2027', l: 'Global Launch' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="metric-val">{v}</div>
                <div className="metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">Our Ethos</div>
          <h2>480 Products. 24 Industries. One Vision.</h2>
          <p style={{ color: 'var(--c-t2)', fontSize: '1.15rem', lineHeight: 1.9, marginTop: 24 }}>
            We are revolutionizing the future of technology with 480 innovative products spanning 24 industries.
            Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives.
            Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Our Core</div>
            <h2>Vision, Mission & Passion</h2>
          </div>
          <div className="vmp-grid">
            <VisionCard icon="🔭" title="Vision" body={VISION} color="var(--c-a2)" />
            <VisionCard icon="🎯" title="Mission" body={MISSION} color="var(--c-a1)" />
            <VisionCard icon="🔥" title="Passion" body={PASSION} color="#f43f5e" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Technology Stack</div>
            <h2>Our Core Specializations</h2>
            <p>We build for the frontiers of technology — from quantum computers to autonomous satellites.</p>
          </div>
          <div className="tech-grid">
            {TECH_PILLARS.map(({ icon, label, skills }) => (
              <div key={label} className="tech-card">
                <div className="tech-icon">{icon}</div>
                <div className="tech-lbl">{label}</div>
                <div className="tech-skills">{skills}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Industry Coverage</div>
            <h2>24 Industries We Transform</h2>
          </div>
          <div className="ind-grid">
            {INDUSTRIES.map((ind) => (
              <div key={ind} className="ind-chip">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="sec-head">
            <div className="eyebrow">Leadership</div>
            <h2>Meet our Founder</h2>
          </div>

          <div className="founder-card">
            <div className="founder-avatar">
              <div className="founder-avatar-in">R</div>
            </div>
            <div>
              <div className="founder-name">Ramkumar Arunachalam</div>
              <div className="founder-role">Founder & CEO, TechBrain Networks</div>
              <p className="founder-bio">
                A visionary technology entrepreneur, Ramkumar founded TechBrain Networks with
                an audacious goal: to build 480 software products across 24 industries and
                transform how the world interacts with technology. His leadership combines
                deep technical expertise in AI, Quantum Computing, and Space Technology
                with a relentless passion for making advanced innovation accessible globally.
              </p>
              <div className="founder-tags">
                <div className="founder-tag">Visionary</div>
                <div className="founder-tag">Innovator</div>
                <div className="founder-tag">Tech Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="eyebrow">Start Today</div>
          <h2 style={{ marginBottom: 16 }}>Join the TechBrain Revolution</h2>
          <p style={{ color: 'var(--c-t2)', marginBottom: 36, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Explore our full suite of 20 aerospace software platforms and discover how
            TechBrain Aerospace can power your next mission.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>
              Explore Products →
            </button>
            <button className="btn btn-ghost">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
