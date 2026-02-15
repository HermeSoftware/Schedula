import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "1200",
      description: "Küçük işletmeler ve freelancerlar için.",
      features: [
        "Aylık 300 Randevu",
        "Temel Takvim Yönetimi",
        "SMS Bildirimleri",
        "Email Desteği"
      ],
      notIncluded: ["AI Özellikleri", "Dinamik Fiyatlandırma", "Gelişmiş Raporlar"],
      highlight: false
    },
    {
      name: "Standart",
      price: "3400",
      description: "Büyüyen klinikler ve salonlar için ideal.",
      features: [
        "Aylık 1000 Randevu",
        "İptal Analizi Motoru",
        "Boşluk Doldurma (Sınırlı)",
        "WhatsApp Bildirimleri",
        "Detaylı Raporlar"
      ],
      notIncluded: ["Dinamik Fiyatlandırma"],
      highlight: true
    },
    {
      name: "Pro",
      price: "5000",
      description: "Tam kapsamlı optimizasyon isteyenler için.",
      features: [
        "Sınırsız Randevu",
        "Tam AI Suite Erişimi",
        "Dinamik Fiyatlandırma",
        "Gelir Tahminleme",
        "Öncelikli Destek"
      ],
      notIncluded: [],
      highlight: false
    },
    {
      name: "Unlimited",
      price: "25000",
      description: "Zincir işletmeler ve özel projeler için.",
      isOneTime: true,
      features: [
        "Çoklu Şube Yönetimi",
        "Özel API Erişimi",
        "Size Özel Hesap Yöneticisi",
        "Özelleştirilmiş Geliştirmeler",
        "7/24 Destek Hattı"
      ],
      notIncluded: [],
      highlight: false
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Şeffaf Fiyatlandırma</h1>
          <p className="text-xl text-gray-500">
            Gizli ücret yok. Taahhüt yok. İşletmenizin büyüklüğüne göre ölçeklenen planlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ 
                y: -12, 
                scale: plan.highlight ? 1.07 : 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-500 ${
                plan.highlight 
                  ? "bg-primary text-white border-primary ring-4 ring-primary/20 shadow-xl z-10" 
                  : "bg-white text-gray-900 border-gray-100 hover:shadow-2xl hover:border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  En Popüler
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-primary"}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">₺{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.isOneTime ? " (Tek Seferlik)" : " /ay"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? "text-accent" : "text-green-600"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm opacity-50">
                    <X className="h-5 w-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/apply">
                <Button 
                  className={`w-full h-12 rounded-xl font-bold transition-all ${
                    plan.highlight 
                      ? "bg-white text-primary hover:bg-gray-100" 
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Planı Seç
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
