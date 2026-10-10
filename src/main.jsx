import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, MoveUpRight, Instagram, ArrowUp } from 'lucide-react';
import './style.css';

const WHATSAPP_NUMBER = '918957689571'; // Replace with your WhatsApp number, including country code, without + or spaces.
const projects = [
  { no: '01', name: 'The Stillwater Residence', type: 'RESIDENTIAL · LUCKNOW', image: 'photo-1600210492486-724fe5c67fb0', cls: 'project-tall' },
  { no: '02', name: 'A Study in Serenity', type: 'PRIVATE RESIDENCE · DELHI', image: 'photo-1600607687939-ce8a6c25118c', cls: '' },
  { no: '03', name: 'The Olive House', type: 'RESIDENTIAL · NOIDA', image: 'photo-1600566753086-00f18fb6b3ea', cls: '' },
];
const services = [
  ['01', 'Residential Interiors', 'Thoughtful homes shaped around the way you live, rest and connect.'],
  ['02', 'Commercial Spaces', 'Distinctive workspaces and welcoming spaces made for people.'],
  ['03', 'Space Planning', 'Intelligent layouts that make every square foot feel considered.'],
  ['04', 'Styling & Consultation', 'Finishing touches, material direction and expert design guidance.'],
];
function imageUrl(id, width=1200) { return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`; }
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Residential Interiors', message: '' });
  const goTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const submit = (e) => {
    e.preventDefault();
    const text = `Hello Atelier Interiors! I would like to enquire about a project.\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nProject details: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <>
    <header className="header">
      <a className="brand" href="#home" onClick={(e)=>{e.preventDefault();goTo('home')}} aria-label="Atelier Interiors home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ATELIER <small>INTERIORS</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {[['Studio','studio'],['Services','services'],['Projects','projects'],['Approach','approach']].map(([label,id])=><a key={id} href={`#${id}`} onClick={(e)=>{e.preventDefault();goTo(id)}}>{label}</a>)}
        <button className="nav-contact" onClick={()=>goTo('contact')}>Start a project <ArrowUpRight size={15}/></button>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen?'Close menu':'Open menu'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><p className="eyebrow"><span/> INDEPENDENT INTERIOR DESIGN STUDIO</p><h1>Spaces that<br/>feel like <em>you.</em></h1><p className="hero-description">We create considered interiors with a quiet sense of luxury — spaces made to be lived in, remembered and loved.</p><div className="hero-actions"><button className="button button-light" onClick={()=>goTo('projects')}>Explore our work <ArrowUpRight size={17}/></button><button className="text-button" onClick={()=>goTo('studio')}>Meet the studio <ArrowDownRight size={17}/></button></div><div className="hero-note"><span className="note-line"/> <span>DESIGN WITH INTENTION.<br/>DETAIL IN EVERY DECISION.</span></div></div>
        <div className="hero-image-wrap"><img className="hero-image" src={imageUrl('photo-1600210492486-724fe5c67fb0',1500)} alt="Warm, carefully styled contemporary living room"/><div className="image-caption"><span>01 / 03</span><span>THE ART OF SLOW LIVING</span></div><div className="hero-stamp">ATELIER<br/><span>EST. 2020</span></div></div>
        <div className="hero-bottom"><span>LUCKNOW · INDIA</span><span>SCROLL TO DISCOVER <ArrowDownRight size={14}/></span><span>26°50' N — 80°56' E</span></div>
      </section>
      <section className="intro section-pad" id="studio"><div className="section-kicker">01 — THE STUDIO</div><div className="intro-content"><h2>Good design is not<br/>just seen. It is <em>felt.</em></h2><div className="intro-text"><p>We believe a meaningful space begins with listening. Your routines, your rituals, the things you collect and the moments you make — they all shape a place that feels unmistakably yours.</p><p>From the first sketch to the final finishing touch, we bring clarity, craft and care to every detail.</p><button className="underlined-link" onClick={()=>goTo('approach')}>A little about our approach <ArrowUpRight size={16}/></button></div></div><div className="stat-row"><div><strong>06<span>+</span></strong><small>YEARS OF DESIGN</small></div><div><strong>48</strong><small>SPACES TRANSFORMED</small></div><div><strong>12</strong><small>CRAFT PARTNERS</small></div><div className="stat-quote">“A home should tell the story<br/>of the people who live in it.”</div></div></section>
      <section className="services section-pad" id="services"><div className="section-heading"><div><div className="section-kicker">02 — WHAT WE DO</div><h2>Considered from<br/><em>every angle.</em></h2></div><p>From a single thoughtful room to a complete transformation, we make the complex feel effortless.</p></div><div className="service-list">{services.map(([no,title,desc])=><article className="service-item" key={no}><span className="service-no">{no}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={20}/></article>)}</div></section>
      <section className="projects section-pad" id="projects"><div className="section-heading projects-heading"><div><div className="section-kicker">03 — SELECTED WORK</div><h2>Spaces with a<br/><em>story to tell.</em></h2></div><p>A selection of imagined studio projects, each shaped by its own light, texture and way of living.</p></div><div className="project-grid">{projects.map((p)=><article className={`project-card ${p.cls}`} key={p.no}><div className="project-image"><img src={imageUrl(p.image,1000)} alt={`${p.name} interior design project`} loading="lazy"/><span className="project-number">{p.no}</span><button className="project-open" aria-label={`View ${p.name}`} onClick={()=>goTo('contact')}><ArrowUpRight size={19}/></button></div><div className="project-info"><div><h3>{p.name}</h3><p>{p.type}</p></div><span className="project-arrow"><ArrowUpRight size={17}/></span></div></article>)}</div><p className="demo-disclaimer">PORTFOLIO CONCEPT · PROJECT IMAGES ARE VISUAL REFERENCES FOR THIS DEMO</p></section>
      <section className="approach section-pad" id="approach"><div className="approach-image"><img src={imageUrl('photo-1600607687920-4e2a09cf159d',1200)} alt="Natural materials and soft light in a contemporary interior" loading="lazy"/><div className="approach-image-label">MATERIALS · LIGHT · BALANCE</div></div><div className="approach-copy"><div className="section-kicker">04 — OUR APPROACH</div><h2>Less noise.<br/><em>More meaning.</em></h2><p>Great spaces don't happen by accident. Our process keeps the experience personal, collaborative and clear — so you can enjoy the transformation as much as the result.</p><div className="steps"><div><span>01</span><p><b>Listen & Discover</b><small>We learn how you live and what matters most.</small></p></div><div><span>02</span><p><b>Imagine & Design</b><small>We shape the concept, palette and plan together.</small></p></div><div><span>03</span><p><b>Craft & Complete</b><small>We bring the details together with care.</small></p></div></div><button className="button button-light" onClick={()=>goTo('contact')}>Let's talk about your space <ArrowUpRight size={16}/></button></div></section>
      <section className="quote-section"><span className="quote-mark">“</span><blockquote>They understood not just how we wanted our home to look, but how we wanted it to <em>feel.</em></blockquote><div className="quote-attribution"><span/> DEMO TESTIMONIAL · SAMPLE CLIENT</div></section>
      <section className="contact section-pad" id="contact"><div className="contact-intro"><div className="section-kicker">05 — YOUR PROJECT STARTS HERE</div><h2>Have a space<br/>in <em>mind?</em></h2><p>Tell us a little about it. We’d love to hear what you’re imagining.</p><div className="contact-details"><span>LET'S CONNECT</span><a href="mailto:hello@atelier-demo.example">hello@atelier-demo.example <ArrowUpRight size={14}/></a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp enquiry <ArrowUpRight size={14}/></a></div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label></div><div className="form-row"><label>Phone number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91 00000 00000"/></label><label>I'm interested in<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>Residential Interiors</option><option>Commercial Spaces</option><option>Space Planning</option><option>Styling & Consultation</option></select></label></div><label>Tell us about your project<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="A little about the space, your timeline and your ideas..."/></label><button className="button button-light submit-button" type="submit">Send enquiry via WhatsApp <ArrowUpRight size={17}/></button>{sent&&<p className="form-note" role="status">Your enquiry details are ready in WhatsApp. Send the message there to complete your enquiry.</p>}<p className="form-note">Demo form: submitting opens WhatsApp with your details. Replace the sample number in <code>src/main.jsx</code> before publishing.</p></form></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home" onClick={(e)=>{e.preventDefault();goTo('home')}}><span className="brand-mark">A<span>.</span></span><span className="brand-name">ATELIER <small>INTERIORS</small></span></a><p>Thoughtful spaces. Timeless living.</p><div className="footer-right"><a href="#projects" onClick={(e)=>{e.preventDefault();goTo('projects')}}>PROJECTS</a><a href="#contact" onClick={(e)=>{e.preventDefault();goTo('contact')}}>CONTACT</a><a href="#home" onClick={(e)=>{e.preventDefault();goTo('home')}} aria-label="Back to top"><ArrowUp size={15}/></a></div><div className="footer-bottom"><span>© 2026 ATELIER INTERIORS — CONCEPT DEMO</span><span>DESIGNED WITH INTENTION.</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
