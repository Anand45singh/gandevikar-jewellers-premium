1. Apne project ke upar is fix folder ki files copy-paste (overwrite) karo.
2. Project me ye delete karo:
   next.config.js
   generate-placeholders.js
   components/HeroVideo.tsx
   content/images.ts
   public/images/download.mp4 (purani 33MB wali, naya fix/ wali copy karne ke baad bhi overwrite ho jayegi)
   public/images/hero_poster.png
   public/images/Suvarna_Vruddhi_Yojana.jpg
   public/images/ggj/scroll1.avif
   .next  (poora folder)
3. package.json me:  "dev": "next dev",  "build": "next build"   (--webpack hatao)
4. npm uninstall @tailwindcss/turbopack
5. npm run dev
