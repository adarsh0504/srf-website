
import React, {useState} from 'react'

const HERO_IMG = 'https://images.unsplash.com/photo-1581090465153-0a2f1b6b0f35?auto=format&fit=crop&w=1400&q=80';
const TEAM_IMG = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80';
const RESEARCH_IMG = 'https://images.unsplash.com/photo-1582719478250-1c9d9e3d2b1a?auto=format&fit=crop&w=1000&q=80';
const CONF_IMG = 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80';

function Nav({onNav}){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo-placeholder.png" alt="SRF logo" className="h-10 w-auto"/>
          <div className="font-semibold text-slate-800">Student Research Forum — KMC Manipal</div>
        </div>
        <nav className="flex items-center gap-3">
          {['Home','Members','ICMR','Conferences','FAQ','Contact'].map(p=> (
            <button key={p} onClick={()=>onNav(p)} className="text-slate-700 hover:text-blue-700 px-3 py-2 rounded-md">{p}</button>
          ))}
          <button onClick={()=>onNav('Subscribe')} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md">Subscribe</button>
        </nav>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="relative">
      <img src={HERO_IMG} alt="Hero" className="w-full h-72 object-cover brightness-90"/>
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 inline-block">
            <h1 className="text-3xl font-bold text-slate-900">Student Research Forum</h1>
            <p className="text-slate-700 mt-2 max-w-2xl">A dedicated forum to help students get oriented, start, and excel in research. We provide workshops, mentorship, and resources for turning ideas into projects.</p>
            <div className="mt-4 flex gap-3">
              <a href="#Members" className="px-4 py-2 bg-blue-600 text-white rounded-md">Meet the Team</a>
              <a href="#ICMR" className="px-4 py-2 border rounded-md">ICMR Resources</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home(){ 
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-700">SRF conducts research orientation workshops year-round, assists students in proposal writing, provides mentorship, and helps with conference and publication support.</p>
          <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li>Workshops on research methodology and biostatistics</li>
            <li>Mentorship and faculty advisor matching</li>
            <li>ICMR-STS guidance and resources</li>
            <li>Conference and publication support</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden shadow">
          <img src={RESEARCH_IMG} alt="research" className="w-full h-64 object-cover"/>
        </div>
      </div>
    </main>
  )
}

function Members(){
  const members = [
    {name:'A. Student', role:'Secretary', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60'},
    {name:'B. Student', role:'Vice-Secretary', img: 'https://images.unsplash.com/photo-1545996124-1b6c1f9d5f3b?auto=format&fit=crop&w=400&q=60'},
    {name:'Dr. Faculty', role:'Faculty Advisor', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60'},
    {name:'C. Student', role:'Coordinator', img: 'https://images.unsplash.com/photo-1520975910028-4c6e8e2f28c5?auto=format&fit=crop&w=400&q=60'}
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Members</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map(m=> (
          <div key={m.name} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group">
            <div className="h-44 bg-gray-100">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-4 text-center">
              <div className="font-medium text-slate-900">{m.name}</div>
              <div className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 mt-2 transition">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ICMR(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">ICMR Resources</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Official Links</h3>
          <ul className="mt-3 list-disc list-inside text-slate-700">
            <li><a href="https://main.icmr.nic.in/" target="_blank" className="text-blue-700 underline">ICMR Official Website</a></li>
            <li><a href="https://main.icmr.nic.in/content/sts" target="_blank" className="text-blue-700 underline">ICMR-STS Page</a></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Guides & Templates</h3>
          <ul className="mt-3 list-disc list-inside text-slate-700">
            <li><a href="#" className="text-blue-700 underline">How to write an STS proposal (template)</a></li>
            <li><a href="#" className="text-blue-700 underline">Sample proposals</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Conferences(){
  const confs = [
    {id:1, date:'2025-10-10', title:'Manipal Research Conclave', dates:'Oct 10-12, 2025', brochure:'#', register:'#', details:'A three-day conference focusing on undergraduate research.'},
    {id:2, date:'2025-11-02', title:'Undergrad Research Symposium', dates:'Nov 2, 2025', brochure:'#', register:'#', details:'Poster sessions and workshops.'}
  ];
  const [sel, setSel] = useState(confs[0]);
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">Conferences</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-xl shadow">
          <img src={CONF_IMG} alt="conferences" className="w-full h-40 object-cover rounded-md mb-4"/>
          <ul className="space-y-2">
            {confs.map(c=> (
              <li key={c.id}>
                <button onClick={()=>setSel(c)} className="text-left w-full px-3 py-2 rounded hover:bg-gray-50">{c.date} - {c.title}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">{sel.title}</h3>
          <p className="text-sm text-slate-600">{sel.dates}</p>
          <p className="mt-3 text-slate-700">{sel.details}</p>
          <div className="mt-4 flex gap-3">
            <a href={sel.brochure} className="px-3 py-2 border rounded">Brochure</a>
            <a href={sel.register} className="px-3 py-2 bg-blue-600 text-white rounded">Register</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ(){ 
  const [form, setForm] = useState({name:'', phone:'', email:'', query:''});
  function submit(e){
    e.preventDefault();
    const subject = encodeURIComponent('SRF Query from '+form.name);
    const body = encodeURIComponent('Name: '+form.name+'\nPhone: '+form.phone+'\nEmail: '+form.email+'\n\nQuery:\n'+form.query);
    window.location.href = `mailto:adarsh0504@yahoo.com?subject=${subject}&body=${body}`;
  }
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">FAQ / Ask a Question</h2>
      <p className="text-slate-600 mb-4">No public questions yet — ask us using the form below.</p>
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow flex flex-col gap-3">
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="p-2 border rounded"/>
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="p-2 border rounded"/>
        <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-2 border rounded"/>
        <textarea required value={form.query} onChange={e=>setForm({...form,query:e.target.value})} rows={5} placeholder="Your question" className="p-2 border rounded"></textarea>
        <div className="flex gap-3 justify-end">
          <button type="button" onClick={()=>setForm({name:'',phone:'',email:'',query:''})} className="px-3 py-2 border rounded">Clear</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Query</button>
        </div>
      </form>
    </section>
  )
}

function Contact(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Secretary</h3>
          <p className="mt-2">Student One</p>
          <p className="text-sm text-slate-600">Email: <a href='mailto:secretary@example.com' className='text-blue-600 underline'>secretary@example.com</a></p>
          <p className="text-sm text-slate-600">Phone: <a href='tel:+911234567890' className='text-blue-600 underline'>+91 12345 67890</a></p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Vice-Secretary</h3>
          <p className="mt-2">Student Two</p>
          <p className="text-sm text-slate-600">Email: <a href='mailto:vicesecretary@example.com' className='text-blue-600 underline'>vicesecretary@example.com</a></p>
          <p className="text-sm text-slate-600">Phone: <a href='tel:+919876543210' className='text-blue-600 underline'>+91 98765 43210</a></p>
        </div>
      </div>
      <div className="mt-6 p-4 text-center text-sm text-slate-600">Committee email: <a href="mailto:adarsh0504@yahoo.com" className="text-blue-600 underline">adarsh0504@yahoo.com</a></div>
    </section>
  )
}

function SubscribeModal({onClose}){
  const [email, setEmail] = useState('');
  function submit(e){ e.preventDefault(); localStorage.setItem('srf_sub', email); const subject=encodeURIComponent('Subscribe SRF'); const body=encodeURIComponent('Please add '+email+' to SRF list'); window.location.href=`mailto:adarsh0504@yahoo.com?subject=${subject}&body=${body}`; onClose(); }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">Subscribe for updates</h3>
        <p className="text-sm text-slate-600 mb-4">We'll notify you by email when new updates are posted.</p>
        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" className="w-full p-2 border rounded mb-4"/>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default function App(){
  const [page, setPage] = useState('Home');
  const [showSub, setShowSub] = useState(false);

  return (
    <div className="min-h-screen">
      <Nav onNav={(p)=>{ if(p==='Subscribe') setShowSub(true); else setPage(p); }} />
      <Hero />
      {page==='Home' && <Home/>}
      {page==='Members' && <Members/>}
      {page==='ICMR' && <ICMR/>}
      {page==='Conferences' && <Conferences/>}
      {page==='FAQ' && <FAQ/>}
      {page==='Contact' && <Contact/>}
      {showSub && <SubscribeModal onClose={()=>setShowSub(false)}/>}
      <footer className="mt-12 bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">© 2025 Student Research Forum — KMC Manipal</div>
      </footer>
    </div>
  )
}
