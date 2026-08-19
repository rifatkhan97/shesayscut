'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen:     boolean;
  onClose:    () => void;
  vimeoId?:   string;
  youtubeId?: string;
  videoUrl?:  string;
  title?:     string;
}

export default function VimeoModal({
  isOpen,
  onClose,
  vimeoId,
  youtubeId,
  videoUrl,
  title,
}: VideoModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, handleKey]);

  // Determine iframe source URL
  let embedSrc = '';
  if (youtubeId) {
    embedSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  } else if (vimeoId) {
    embedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
  } else if (videoUrl) {
    embedSrc = videoUrl;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 lg:p-16">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/92 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl bg-[#0A0A0A] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={title ? `Video: ${title}` : 'Film preview'}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60">
                {title || 'Film Preview'}
              </span>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors p-1 focus:outline-none"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>

            {/* 16:9 player frame */}
            <div className="relative w-full aspect-video bg-black">
              {embedSrc ? (
                <iframe
                  src={embedSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                  allowFullScreen
                  title={title || 'Film Player'}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white/50 text-xs font-sans">
                  Video preview unavailable
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
