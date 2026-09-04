"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="mb-16"
      >
        <div className="flex items-baseline gap-4 mb-4">
          <h1 className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase">Gallery</h1>
          <span className="font-anton text-5xl md:text-7xl text-cbc-blue">/</span>
        </div>
        <p className="text-cbc-grey font-mono text-sm max-w-xl leading-relaxed">
          A visual record of our events, workshops, CTFs, and community gatherings.
        </p>
      </motion.div>

      {images.length === 0 ? (
        <div className="text-cbc-grey font-mono py-12 border-t border-cbc-grey/20">
          No photos found. Drop images into <code className="text-cbc-offwhite">public/gallery</code> to see them here!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square relative overflow-hidden group cursor-crosshair border border-cbc-grey/20"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt="Gallery Event" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-cbc-ink/40 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cbc-ink/95 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-7xl max-h-full"
          >
            <img 
              src={selectedImage} 
              alt="Gallery Fullscreen" 
              className="max-w-full max-h-[85vh] object-contain border border-cbc-grey/30"
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center text-cbc-grey font-mono text-xs uppercase tracking-widest">
              [ CLICK ANYWHERE TO CLOSE ]
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
