import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/python.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools22 from "/assets/tools/n8n.png";
import Tools21 from "/assets/tools/fastapi.png";
import Tools20 from "/assets/tools/django.png";
import Tools24 from "/assets/tools/docker.png";


export const listTools = [
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Backend & BaaS",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Python",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Django",
    ket: "Framework",
    dad: "2000",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "FastAPI",
    ket: "Framework",
    dad: "2100",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "n8n",
    ket: "Automation & Workflow",
    dad: "2200",
  },
  {
    id: 23,
    gambar: Tools9,
    nama: "AI Tools",
    ket: "AI / Machine Learning",
    dad: "2300",
  },
  {
    id: 24,
    gambar: Tools24,
    nama: "AI Tools",
    ket: "AI / Machine Learning",
    dad: "2300",
  },
];


import project1 from "/assets/proyek/project1.png";
import project2 from "/assets/proyek/project2.png";
import project3 from "/assets/proyek/project3.png";
import project4 from "/assets/proyek/project4.png";

export const listProyek = [


  {
    id: 1,
    image: project1,
    title: "HCP MindDocs",
    subtitle: "An AI-powered platform for document analysis and multi-document chat.",
    fullDescription: "HCP MindDocs is a full-stack AI application combining document processing, AI-powered chat, and intelligent analysis using Retrieval-Augmented Generation (RAG) technology. Built with FastAPI backend and React frontend, it features OCR support, multi-document chat, semantic vector search, and advanced AI-driven insights. The platform helps users analyze and extract knowledge from multiple documents efficiently and accurately.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/simoderyouch/HCP-MindDocs",
    video: "https://www.youtube.com/watch?v=oXHN8-QJCOU",
    dad: "100",
  },
  {
    id: 2,
    image: project4,
    title: "N8N Sentiment Analysis Workflow",
    subtitle: "An automated sentiment analysis workflow deployed on Oracle Cloud.",
    fullDescription: "This project demonstrates a fully automated sentiment analysis workflow running on an Oracle Always Free instance using n8n. The workflow collects user feedback, analyzes sentiment in real-time, and triggers notifications or actions based on results. It highlights seamless integration of cloud infrastructure, automation tools, and data-driven insights to improve monitoring and decision-making.",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    video: "https://youtu.be/CHhI89aXpq0",
    dad: "150",
},
  {
    id: 3,
    image: project2, 
    title: "Invoice Management System",
    subtitle: "A full-stack app for creating, managing, and tracking invoices with email and payment proof features.",
    fullDescription:
      "A comprehensive full-stack invoice management system built with React, Node.js, and MongoDB. This platform allows users to create, send, and manage invoices with features like PDF generation, email notifications, payment tracking, proof uploads, and detailed email engagement metrics. It includes secure JWT-based authentication, modern UI/UX with dark mode, responsive design, and robust admin tools for reviewing payments. Leveraging technologies like Tailwind CSS, Framer Motion, and Puppeteer, it ensures seamless usability and a professional billing workflow.",
    borderColor: "#10B981", // Green color (Tailwind's emerald-500)
    gradient: "linear-gradient(145deg, #10B981, #000)", // Emerald to black
    url: "https://github.com/simoderyouch/invoice-app", // Update to your actual GitHub URL
    demo: "https://invoicewebapp.vercel.app",
    video: "https://youtu.be/7AkMNCxKaNs", // Optional: Replace with actual video if available
    dad: "200", // You can customize this or remove it if not needed
  },
   
  {
    id: 4,
    image: project3, 
    title: "Agence Créative & Digitale",
    subtitle: "Un site vitrine professionnel présentant nos services créatifs et solutions digitales.",
    fullDescription:
      "Un site moderne et interactif conçu pour mettre en valeur une agence créative spécialisée dans la communication visuelle et digitale. Ce site vitrine présente l’ensemble des services proposés : création graphique, motion design, production audiovisuelle, et e-learning. Avec une navigation fluide et une interface claire, il illustre un positionnement professionnel tout en reflétant l’identité de marque. L’expérience utilisateur est optimisée grâce à un design responsive, des animations engageantes et une structure intuitive (Accueil, Services, Portfolio, Expertise & Insights, Contact).",
    borderColor: "#3B82F6", // Bleu Tailwind (blue-500) pour rester cohérent avec une identité pro
    gradient: "linear-gradient(145deg, #3B82F6, #000)", // Bleu vers noir
    demo: "https://eresdtd.com", // Remplacer par ton vrai lien démo
    dad: "200", // Peut être utilisé pour la durée d’animation ou un ID interne
  }
  
  ];
