'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

const inputCls = 'w-full bg-[#F5F4F0] border border-black/15 focus:border-[#0A0A0A] text-sm text-[#0A0A0A] placeholder:text-[#8A8A8A] px-4 py-3 focus:outline-none transition-colors font-sans';
const labelCls = 'font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] block mb-1.5';

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '', email: '', company: '',
    projectType: 'Narrative Film / Co-production',
    budget: '€10,000 – €25,000',
    timeline: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
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
        <h3 className="font-sans font-black text-2xl text-[#0A0A0A]">Inquiry received.</h3>
        <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed">
          Thank you. Maria Lückerath and the She Says Cut studio will review your project details and respond within two business days.
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name:'', email:'', company:'', projectType:'Narrative Film / Co-production', budget:'€10,000 – €25,000', timeline:'', message:'' }); }}
          className="font-sans text-xs tracking-[0.18em] uppercase text-[#8A8A8A] hover:text-[#0A0A0A] underline underline-offset-4 transition-colors mt-2"
        >
          Submit another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="pb-4 border-b border-black/10">
        <h3 className="font-sans font-black text-2xl text-[#0A0A0A]">Commission & Project Inquiry</h3>
        <p className="font-sans text-xs text-[#8A8A8A] mt-1">Narrative co-productions, documentary projects, sensory commercial work.</p>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-xs font-sans">
          <AlertCircle size={15} /><span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="inq-name" className={labelCls}>Full Name <span className="text-[#0A0A0A]">*</span></label>
          <input id="inq-name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Elena Vance" className={inputCls} /></div>
        <div><label htmlFor="inq-email" className={labelCls}>Email <span className="text-[#0A0A0A]">*</span></label>
          <input id="inq-email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="elena@studio.com" className={inputCls} /></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="inq-company" className={labelCls}>Company / Organisation</label>
          <input id="inq-company" type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Atelier Brussels" className={inputCls} /></div>
        <div><label htmlFor="inq-type" className={labelCls}>Project Category</label>
          <select id="inq-type" value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})} className={inputCls}>
            <option>Narrative Film / Co-production</option>
            <option>Documentary Commission</option>
            <option>Branded Film / Commercial</option>
            <option>Sound Design & Visual Essay</option>
            <option>Other Creative Collaboration</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label htmlFor="inq-budget" className={labelCls}>Estimated Budget</label>
          <select id="inq-budget" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className={inputCls}>
            <option>Under €10,000</option>
            <option>€10,000 – €25,000</option>
            <option>€25,000 – €50,000</option>
            <option>€50,000+</option>
          </select>
        </div>
        <div><label htmlFor="inq-timeline" className={labelCls}>Timeline</label>
          <input id="inq-timeline" type="text" value={form.timeline} onChange={e => setForm({...form, timeline: e.target.value})} placeholder="Q4 2025" className={inputCls} /></div>
      </div>

      <div>
        <label htmlFor="inq-message" className={labelCls}>Project Description <span className="text-[#0A0A0A]">*</span></label>
        <textarea id="inq-message" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Share your vision, tone, deliverables, and goals…" className={`${inputCls} resize-y`} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="self-start flex items-center gap-3 bg-[#0A0A0A] text-white hover:bg-[#333] px-8 py-4 font-sans text-[10px] tracking-[0.2em] uppercase font-bold transition-colors disabled:opacity-50"
      >
        {status === 'submitting'
          ? <><Loader2 size={13} className="animate-spin" /><span>Sending…</span></>
          : <><span>Send Inquiry</span><ArrowRight size={13} /></>}
      </button>
    </form>
  );
}
