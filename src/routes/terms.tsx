import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="bg-ink text-ivory min-h-[100svh] flex flex-col pt-24">
      <Nav />
      <div className="flex-1 mx-auto max-w-4xl px-5 py-12 w-full">
        <h1 className="font-display font-light text-4xl md:text-5xl text-ivory mb-8">Terms of Service</h1>
        <div className="space-y-6 text-ivory/70 text-[15px] leading-relaxed">
          <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Dropshipping & Dynamic Pricing</h2>
          <p>Due to the nature of our dropshipping business model, product availability and pricing are subject to change without prior notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Payment Terms</h2>
          <p>We do not offer Cash on Delivery (COD). All orders must be prepaid through our secure payment gateway before processing begins.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Accuracy of Information</h2>
          <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only.</p>

          <h2 className="text-gold text-xl font-display mt-8">Contact Information</h2>
          <p>Questions about the Terms of Service should be sent to us at <a href="mailto:obsidrixshop@gmail.com" className="text-gold hover:underline">obsidrixshop@gmail.com</a>.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
