import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  mrp: number;
  discount: number;
  sizes: string[];
  rating: number;
  reviews: number;
  badge?: string;
};

export const products: Product[] = [
  { id: 1, title: "Men-Kurta, Women-Kurti & Dupatta 3-Piece Set Couple Edit", image: p1, price: 699, mrp: 1299, discount: 48, sizes: ["S","M","L","XL"], rating: 4.5, reviews: 312, badge: "Couple Set" },
  { id: 2, title: "Premium Women's Kurta Set — Black & White Bandhani Print", image: p2, price: 399, mrp: 799, discount: 50, sizes: ["L","XL","XXL","XXS","4XL"], rating: 4.6, reviews: 528 },
  { id: 3, title: "Women's Trending Printed Kurta and Pant", image: p3, price: 399, mrp: 799, discount: 50, sizes: ["S","M","L","XL"], rating: 4.4, reviews: 211, badge: "Trending" },
  { id: 4, title: "Women's Trendy Sleeveless Printed Kurta with Leggings Set", image: p4, price: 399, mrp: 699, discount: 43, sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 644 },
  { id: 5, title: "WOLF Women's Daily Wear Festival Cotton Stylish Kurti", image: p5, price: 599, mrp: 1099, discount: 45, sizes: ["S","M","L","XL"], rating: 4.3, reviews: 178 },
  { id: 6, title: "White Floral Printed Co-Ord Set with Wide-Leg Pants", image: p6, price: 699, mrp: 1399, discount: 50, sizes: ["S","M","L","XXL"], rating: 4.8, reviews: 902, badge: "Bestseller" },
  { id: 7, title: "Floral Printed Cotton Short Kurti", image: p7, price: 380, mrp: 799, discount: 52, sizes: ["M","L","XL"], rating: 4.5, reviews: 256 },
  { id: 8, title: "Premium Printed Short Kurti", image: p8, price: 399, mrp: 699, discount: 43, sizes: ["S","M","L","XL","XXL"], rating: 4.4, reviews: 189 },
  { id: 9, title: "Women's Black Floral Printed Cotton A-Line Short Kurti", image: p9, price: 350, mrp: 799, discount: 58, sizes: ["M","L","XL"], rating: 4.6, reviews: 411 },
  { id: 10, title: "Premium Short Kurti & Women's Topwear", image: p10, price: 299, mrp: 799, discount: 63, sizes: ["S","M","L"], rating: 4.5, reviews: 367, badge: "New" },
  { id: 11, title: "Premium Short Kurti Top", image: p11, price: 399, mrp: 799, discount: 50, sizes: ["S","M","L","XL"], rating: 4.5, reviews: 224 },
  { id: 12, title: "Ethnic Wine Purple Bandi Rayon Short Kurti", image: p12, price: 444, mrp: 899, discount: 51, sizes: ["M","L","XL","XXL"], rating: 4.7, reviews: 510 },
];
