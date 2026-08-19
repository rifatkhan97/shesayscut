'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, KeyRound } from 'lucide-react';
import { FILMS } from '@/lib/data';

const inputCls = 'w-full bg-[#F5F4F0] border border-black/15 focus:border-[#0A0A0A] text-sm text-[#0A0A0A] placeholder:text-[#8A8A8A] px-4 py-3 focus:outline-none transition-colors font-sans';
const labelCls = 'font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] block mb-1.5';

export default function ScreenerRequestForm() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '',
    filmSlug: FILMS[0]?.slug || 'myopia',
    purpose: 'Festival Programming / Curation',
    screeningDate: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization) {
      setStatus('error'); setErrorMsg('Please complete all required fields.'); return;
    }
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1200);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center py-16 gap-5"
      >
        <CheckCircle2 size={40} className="text-[#0A0A0A]" strokeWidth={1.5} />
        <h3 className="font-sans font-black text-2xl text-[#0A0A0A]">Screener request registered.</h3>
        <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed">
          Upon verification of your credentials, an authorised screener link will be sent to <strong className="text-[#0A0A0A]">{form.email}</strong>.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name:'', email:'', organization:'', filmSlug: FILMS[0]?.slug || 'myopia', purpose:'Festival Programming / Curation', screeningDate:'' }); }}
          className="font-sans text-xs tracking-[0.18em] uppercase text-[#8A8A8A] hover:text-[#0A0A0A] underline underline-offset-4 transition-colors mt-2"
        >
          Request another screener
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="pb-4 border-b border-black/10 flex items-start justify-between">
        <div>
          <h3 className="font-sans font-black text-2xl text-[#0A0A0A]">Gated Film Screener</h3>
          <p className="font-sans text-xs text-[#8A8A8A] mt-1">For festival programmers, curators, distributors, and accredited press.</p>
        </div>
        <KeyRound size={20} className="text-[#8A8A8A] shrink-0 mt-1 hidden sm:block" />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-xs font-sans">
          <AlertCircle size={15} /><span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="scr-name" className={labelCls}>Full Name <span className="text-[#0A0A0A]">*</span></label>
          <input id="scr-name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Marcus Thorne" className={inputCls} /></div>
        <div><label htmlFor="scr-email" className={labelCls}>Institutional Email <span className="text-[#0A0A0A]">*</span></label>
          <input id="scr-email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="m.thorne@festival.org" className={inputCls} /></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="scr-org" className={labelCls}>Institution <span className="text-[#0A0A0A]">*</span></label>
          <input id="scr-org" type="text" required value={form.organization} onChange={e => setForm({...form, organization: e.target.value})} placeholder="Int'l Film Festival Brussels" className={inputCls} /></div>
        <div><label htmlFor="scr-film" className={labelCls}>Requested Film</label>
          <select id="scr-film" value={form.filmSlug} onChange={e => setForm({...form, filmSlug: e.target.value})} className={inputCls}>
            {FILMS.map(f => <option key={f.slug} value={f.slug}>{f.title} ({f.year})</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="scr-purpose" className={labelCls}>Purpose</label>
          <select id="scr-purpose" value={form.purpose} onChange={e => setForm({...form, purpose: e.target.value})} className={inputCls}>
            <option>Festival Programming / Curation</option>
            <option>Press Review / Feature</option>
            <option>Distribution Inquiry</option>
            <option>Cinematheque / Retrospective</option>
          </select>
        </div>
        <div><label htmlFor="scr-date" className={labelCls}>Expected Viewing Date</label>
          <input id="scr-date" type="text" value={form.screeningDate} onChange={e => setForm({...form, screeningDate: e.target.value})} placeholder="October 2025" className={inputCls} /></div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="self-start flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-8 py-4 font-sans text-[10px] tracking-[0.2em] uppercase font-bold transition-all disabled:opacity-50"
      >
        {status === 'submitting'
          ? <><Loader2 size={13} className="animate-spin" /><span>Verifying…</span></>
          : <><span>Request Screener Pass</span><KeyRound size={13} /></>}
      </button>
    </form>
  );
}
