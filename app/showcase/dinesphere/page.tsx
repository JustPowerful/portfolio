"use client";

import React from "react";
import Image from "next/image";
import {
  Map,
  MessageCircle,
  Box,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";

// Imports for assets
import arScanningImg from "./assets/3d_object_scanning_and_viewing.png";
import addFoodImg from "./assets/add_food_view.png";
import mapImg from "./assets/nearby_cafes_map.png";
import orderMgmtImg from "./assets/order_management.png";
import paymentImg from "./assets/order_qr_payment.png";
import chatImg from "./assets/restaurant_chatroom.png";
import menuImg from "./assets/restaurant_menu.png";
import restaurantPageImg from "./assets/restaurant_page.png";
import tableLayoutImg from "./assets/table_layout_management.png";

export default function DineSphereShowcase() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-linear-to-b from-[#f8f1e6] via-[#f2e3c8] to-[#fcfcfc] text-[#3d352b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-grid-lg text-[#e0cfa6]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              DineSphere
            </h1>
            <p className="text-xl md:text-2xl text-[#5f564b] leading-relaxed mb-8">
              A connected restaurant platform merging real-time engagement with
              immersive AR dining experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Flutter",
                "Spring Boot",
                "AR Core",
                "PostgreSQL",
                "Real-time Chat",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium backdrop-blur-sm border border-[#b58905]/20 text-[#3d352b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Discovery & Ordering */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Map className="w-6 h-6" />
                <span>Discovery & Ordering</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Find & Explore
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Users can discover nearby cafes and restaurants using an
                interactive map, view detailed restaurant pages, and browse
                menus with ease. The intuitive interface makes finding the
                perfect dining spot seamless.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative">
                <Image
                  height={500}
                  width={500}
                  src={mapImg}
                  alt="Nearby Cafes Map"
                  className="w-full h-auto rounded-xl "
                />
              </div>
              <div className="relative mt-8">
                <Image
                  height={500}
                  width={500}
                  src={restaurantPageImg}
                  alt="Restaurant Page"
                  className="w-full h-auto rounded-xl "
                />
              </div>
              <div className="relative mt-4 col-span-2 md:col-span-1 w-1/2 md:w-full mx-auto">
                <Image
                  height={500}
                  width={500}
                  src={menuImg}
                  alt="Restaurant Menu"
                  className="w-full h-auto rounded-xl "
                />
              </div>
            </div>
          </div>

          {/* Immersive AR */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 relative">
              <Image
                height={500}
                width={500}
                src={arScanningImg}
                alt="AR Food Scanning"
                className="w-full h-auto rounded-xl "
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Box className="w-6 h-6" />
                <span>Immersive Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Visualize Before You Order
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Leveraging AR Core, DineSphere allows users to scan and view 3D
                models of food items directly on their table. This immersive
                feature helps diners make informed choices and adds a layer of
                excitement to the dining experience.
              </p>
            </div>
          </div>

          {/* Social & Real-time */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <MessageCircle className="w-6 h-6" />
                <span>Social Connection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Connect with Diners
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The integrated chat room feature fosters a sense of community,
                allowing diners within the same restaurant to interact, share
                recommendations, and socialize in real-time.
              </p>
            </div>
            <div className="relative max-w-xs mx-auto">
              <Image
                height={500}
                width={500}
                src={chatImg}
                alt="Restaurant Chatroom"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>

          {/* Management & Operations */}
          <div className="bg-[#f8f1e6] rounded-3xl p-8 md:p-16 overflow-hidden relative mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                  <LayoutDashboard className="w-6 h-6" />
                  <span>Restaurant Management</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                  Comprehensive Admin Tools
                </h2>
                <p className="text-[#5f564b] text-lg leading-relaxed">
                  Restaurant owners have access to powerful tools for managing
                  table layouts, tracking orders, and updating menu items. The
                  dashboard provides full control over the restaurant&apos;s
                  digital presence and operations.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Image
                    height={500}
                    width={500}
                    src={tableLayoutImg}
                    alt="Table Layout Management"
                    className="w-full h-auto rounded-lg "
                  />
                </div>
                <div className="relative mt-6">
                  <Image
                    height={500}
                    width={500}
                    src={orderMgmtImg}
                    alt="Order Management"
                    className="w-full h-auto rounded-lg "
                  />
                </div>
                <div className="relative mt-3 col-span-2 md:col-span-1 w-1/2 md:w-full mx-auto">
                  <Image
                    height={500}
                    width={500}
                    src={addFoodImg}
                    alt="Add Food View"
                    className="w-full h-auto rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payments */}
          <div className="flex flex-col items-center">
            <div className="text-center max-w-2xl mb-12">
              <div className="flex items-center justify-center gap-3 text-[#b58905] font-semibold mb-4">
                <CreditCard className="w-6 h-6" />
                <span>Seamless Payments</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b] mb-4">
                QR Code Integration
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Streamlined payment process using QR codes for quick and secure
                transactions directly from the table.
              </p>
            </div>
            <div className="relative max-w-sm mx-auto">
              <Image
                height={500}
                width={500}
                src={paymentImg}
                alt="QR Payment"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
