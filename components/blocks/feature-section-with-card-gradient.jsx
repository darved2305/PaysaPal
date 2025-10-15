"use client";

import React from "react";

export default function FeatureSectionWithCardGradient({ children }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">{children || <p>Feature section placeholder</p>}</div>
    </section>
  );
}
