import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main className="bg-ink text-ivory min-h-[100svh] flex flex-col pt-24">
      <Nav />
      <div className="flex-1 mx-auto max-w-4xl px-5 py-12 w-full">
        <h1 className="font-display font-light text-4xl md:text-5xl text-ivory mb-8">Cookie Policy</h1>
        <div className="space-y-6 text-ivory/70 text-[15px] leading-relaxed">
          <p>This Cookie Policy explains how OBSIDRIX uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Why do we use cookies?</h2>
          <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our site.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">How can I control cookies?</h2>
          <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
