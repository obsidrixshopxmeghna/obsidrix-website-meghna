import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { useState } from "react";
import { X, MousePointer2, Mail, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ZoomableImage({ 
  src, 
  alt, 
  pointerPosition,
  pointerLabel 
}: { 
  src: string; 
  alt: string; 
  pointerPosition?: { top: string; left: string; transform?: string };
  pointerLabel?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="relative cursor-zoom-in rounded-xl overflow-hidden border border-gold/20 group bg-ink/50"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        
        {/* Animated Arrow/Pointer Overlay */}
        {pointerPosition && (
          <div 
            className="absolute z-10 flex flex-col items-center animate-bounce"
            style={{ ...pointerPosition, transform: pointerPosition.transform || 'translate(-50%, -50%)' }}
          >
            <div className="bg-gold text-ink text-xs font-bold px-3 py-1.5 rounded-md mb-2 shadow-[0_0_15px_rgba(255,215,0,0.5)] whitespace-nowrap">
              {pointerLabel}
            </div>
            <MousePointer2 className="text-gold w-8 h-8 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" fill="#F8F8F8" />
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="bg-ink/80 text-ivory px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-ivory/10 shadow-xl">
            Click to Zoom
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-ivory/50 hover:text-ivory transition-colors bg-ink/50 p-2 rounded-full z-[110]"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={src} 
              alt={alt} 
              className="w-full max-w-6xl max-h-[90vh] object-contain rounded-lg shadow-2xl border border-ivory/10" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ContactPage() {
  return (
    <main className="bg-ink text-ivory min-h-[100svh] flex flex-col pt-24">
      <Nav />
      <div className="flex-1 mx-auto max-w-4xl px-5 py-12 w-full">
        <h1 className="font-display font-light text-4xl md:text-5xl text-ivory mb-8">Contact & Support</h1>
        <div className="space-y-12 text-ivory/70 text-[15px] leading-relaxed">
          
          <p className="text-lg">We're here to help. Whether you have a question about an order, our products, or need assistance with a return, our support team is ready.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-ivory/10 rounded-2xl bg-charcoal/30 flex flex-col gap-4">
              <Mail className="w-8 h-8 text-gold" />
              <div>
                <h3 className="text-ivory font-display text-xl mb-1">Email Us</h3>
                <a href="mailto:obsidrixshop@gmail.com" className="text-gold hover:underline">obsidrixshop@gmail.com</a>
                <p className="text-sm mt-2">Expect a response within 24-48 hours.</p>
              </div>
            </div>
            
            <div className="p-6 border border-ivory/10 rounded-2xl bg-charcoal/30 flex flex-col gap-4">
              <Clock className="w-8 h-8 text-gold" />
              <div>
                <h3 className="text-ivory font-display text-xl mb-1">Working Hours</h3>
                <p>Monday - Friday</p>
                <p className="text-sm mt-1 text-gold">10:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>
          </div>
          
          <section className="pt-8 border-t border-ivory/10">
            <h2 className="text-gold text-2xl font-display mb-6">How to Create a Support Ticket</h2>
            <p className="mb-8">For order issues, returns, or refunds, the fastest way to get help is to create a support ticket directly on our portal. Follow these simple steps:</p>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ink font-bold">1</div>
                  <h3 className="text-xl text-ivory font-medium">Log into your account</h3>
                </div>
                <p>Visit obsidrix.online and log in using your registered email address.</p>
                <ZoomableImage 
                  src="/ticket-step-1.png" 
                  alt="Login Screen" 
                  pointerPosition={{ top: '75%', left: '50%' }}
                  pointerLabel="Click LOGIN here"
                />
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ink font-bold">2</div>
                  <h3 className="text-xl text-ivory font-medium">Go to the Support Section</h3>
                </div>
                <p>Once logged in, click on the "SUPPORT" option in the top navigation menu.</p>
                <ZoomableImage 
                  src="/ticket-step-2.png" 
                  alt="Navigation Bar Support Link" 
                  pointerPosition={{ top: '15%', left: '65%' }}
                  pointerLabel="Click SUPPORT"
                />
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ink font-bold">3</div>
                  <h3 className="text-xl text-ivory font-medium">Create a Support Ticket</h3>
                </div>
                <p>On the support page, click the blue "CREATE SUPPORT TICKET" button.</p>
                <ZoomableImage 
                  src="/ticket-step-3.png" 
                  alt="Create Support Ticket Button" 
                  pointerPosition={{ top: '15%', left: '72%' }}
                  pointerLabel="Click CREATE SUPPORT TICKET"
                />
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
