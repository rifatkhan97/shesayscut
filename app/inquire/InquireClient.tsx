'use client';

import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';
import ScreenerRequestForm from '@/components/ScreenerRequestForm';

export default function InquireClient() {
  const [tab, setTab] = useState<'commission' | 'screener'>('commission');

  return (
    <div className="w-full min-h-screen bg-[#F5F4F0]">

      {/* Page header */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-3">
              Initiate Collaboration or Request Access
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] leading-none tracking-tight">
              Inquire
            </h1>
          </div>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed pb-2">
            Commission a narrative film, branded project, or request festival screener access.
          </p>
        </div>
      </header>

      {/* Tab switcher */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10">
        <div className="flex gap-8 border-b border-black/10" role="tablist" aria-label="Inquiry types">
          {(['commission', 'screener'] as const).map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`py-4 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-all relative ${
                tab === t
                  ? 'text-[#0A0A0A] border-b-2 border-[#0A0A0A]'
                  : 'text-[#8A8A8A] hover:text-[#3A3A3A]'
              }`}
            >
              {t === 'commission' ? 'Project & Commission' : 'Festival Screener Pass'}
            </button>
          ))}
        </div>
      </div>

      {/* Form + studio info */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form */}
        <div className="lg:col-span-8">
          {tab === 'commission' ? <InquiryForm /> : <ScreenerRequestForm />}
        </div>

        {/* Studio direct card */}
        <aside className="lg:col-span-4 bg-[#EDECE8] border border-black/8 p-6 sm:p-8 flex flex-col gap-8">
          <h2 className="font-sans font-black text-xl text-[#0A0A0A]">Studio Direct</h2>

          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-start">
              <MapPin size={16} className="text-[#8A8A8A] shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-1">Location</p>
                <p className="font-sans text-sm text-[#0A0A0A] font-semibold">Brussels, Belgium</p>
                <p className="font-sans text-xs text-[#8A8A8A] mt-0.5">European co-productions & global commissions</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Mail size={16} className="text-[#8A8A8A] shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-1">Email</p>
                <a
                  href="mailto:contact@shesayscut.com"
                  className="font-sans text-sm text-[#0A0A0A] underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  contact@shesayscut.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-6 flex flex-col gap-1">
            <p className="font-sans text-sm font-semibold text-[#0A0A0A]">Maria Lückerath</p>
            <p className="font-sans text-xs text-[#8A8A8A]">Director · She Says Cut</p>
            <p className="font-sans text-[10px] text-[#8A8A8A] mt-3 leading-relaxed">
              * Screener requests are subject to festival or publication credential verification.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
