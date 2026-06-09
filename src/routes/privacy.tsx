import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="bg-ink text-ivory min-h-[100svh] flex flex-col pt-24">
      <Nav />
      <div className="flex-1 mx-auto max-w-4xl px-5 py-12 w-full">
        <h1 className="font-display font-light text-4xl md:text-5xl text-ivory mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-ivory/70 text-[15px] leading-relaxed">
          <p>OBSIDRIX ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and shared when you visit or make a purchase from our website.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Information We Collect</h2>
          <p>When you make a purchase or attempt to make a purchase, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. This is referred to as "Order Information."</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Dropshipping & Third Parties</h2>
          <p>We operate on a dropshipping model. This means that to fulfill your order, we must securely share necessary shipping details (such as your name and delivery address) with our trusted manufacturing and logistics partners. They are bound by strict confidentiality agreements to use your data only for order fulfillment.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">How We Use Your Information</h2>
          <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you and screen our orders for potential risk or fraud.</p>
          
          <h2 className="text-gold text-xl font-display mt-8">Contact Us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at <a href="mailto:obsidrixshop@gmail.com" className="text-gold hover:underline">obsidrixshop@gmail.com</a>.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
