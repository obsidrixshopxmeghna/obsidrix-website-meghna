import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/shipping")({
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <main className="bg-ink text-ivory min-h-[100svh] flex flex-col pt-24">
      <Nav />
      <div className="flex-1 mx-auto max-w-4xl px-5 py-12 w-full">
        <h1 className="font-display font-light text-4xl md:text-5xl text-ivory mb-8">Shipping Policy</h1>
        <div className="space-y-6 text-ivory/70 text-[15px] leading-relaxed">
          <p>At OBSIDRIX, we operate on a streamlined dropshipping model to bring you premium luxury apparel directly from our manufacturing partners.</p>
          <h2 className="text-gold text-xl font-display mt-8">Delivery Timeline</h2>
          <p>Our standard delivery time is <strong className="text-ivory">8 to 15 days</strong>, depending on your specific area and pin code. Please note that exact delivery timelines may vary based on local logistics and transit conditions.</p>
          <h2 className="text-gold text-xl font-display mt-8">Payment Methods</h2>
          <p><strong className="text-ivory">Strictly No Cash on Delivery (COD).</strong> We only accept 100% prepaid orders to ensure secure and seamless processing. All major credit cards, debit cards, UPI, and net banking options are supported through our secure payment gateway.</p>
          <h2 className="text-gold text-xl font-display mt-8">Order Tracking</h2>
          <p>Once your order is dispatched, you will receive a tracking link via email. You can also track your order by logging into your account at <a href="https://obsidrix.online" target="_blank" rel="noreferrer" className="text-gold hover:underline">obsidrix.online</a>.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
