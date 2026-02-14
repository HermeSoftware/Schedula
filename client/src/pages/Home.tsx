import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, Calendar, TrendingUp, Users, ShieldCheck, 
  BarChart3, Zap, Clock, Smartphone
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
    whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full text-accent font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Private Beta Yayında</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
              Randevu Değil. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                Gelir Motoru.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
              Schedula, işletmeler için geliştirilmiş akıllı randevu ve gelir optimizasyon sistemidir. Boşlukları doldurur, gelirinizi artırır.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Ön Kayıt Başvurusu <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-2 hover:bg-gray-50">
                Nasıl Çalışır?
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="pt-8 flex items-center space-x-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-accent h-5 w-5" />
                <span>KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-accent h-5 w-5" />
                <span>AI Destekli</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[3rem] -z-10 transform rotate-3"></div>
            
            {/* Abstract UI Elements */}
            {/* Unsplash image used as a "dashboard placeholder" background for the floating cards effect */}
            {/* descriptive comment: abstract futuristic dashboard visualization */}
            <div className="relative w-full h-full p-8">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64 z-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="text-green-600 h-5 w-5" />
                  </div>
                  <span className="text-green-600 font-bold text-sm">+27%</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-gray-500 text-xs uppercase font-semibold">Tahmini Gelir</h3>
                  <p className="text-2xl font-bold text-gray-900">₺142,500</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-72 z-30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Calendar className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Akıllı Doldurma</h4>
                    <p className="text-xs text-gray-500">Otomatik öneri aktif</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-accent w-[75%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Doluluk</span>
                    <span className="font-medium text-gray-900">75%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                 animate={{ scale: [1, 1.02, 1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-8 rounded-3xl shadow-2xl w-80 z-10"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-xl">Bugün</h3>
                    <p className="text-white/60 text-sm">42 Randevu</p>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <Users className="text-white h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <div className="h-2 bg-white/10 rounded w-20"></div>
                      <div className="ml-auto h-2 bg-white/10 rounded w-8"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "+27%", label: "Ortalama Gelir Artışı", icon: TrendingUp },
              { value: "-41%", label: "İptal Oranı Düşüşü", icon: ShieldCheck },
              { value: "+33%", label: "Doluluk Artışı", icon: BarChart3 },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500"
              >
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Sadece Bir Takvim Değil</h2>
            <p className="text-gray-500 text-lg">İşletmenizin görünmeyen potansiyelini açığa çıkarın.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "İptal Analizi Motoru", 
                desc: "Hangi müşterinin gelmeyeceğini %85 doğrulukla tahmin eder ve önlem alır.",
                icon: ShieldCheck
              },
              { 
                title: "Boşluk Doldurma AI", 
                desc: "İptal edilen randevunun yerini en uygun müşteriyle saniyeler içinde doldurur.",
                icon: Zap
              },
              { 
                title: "Dinamik Fiyatlandırma", 
                desc: "Talebe göre fiyatları optimize ederek gelirinizi maksimize eder.",
                icon: TrendingUp
              },
              { 
                title: "Gelir Tahminleme", 
                desc: "Gelecek ay ne kadar kazanacağınızı bugünden net bir şekilde görün.",
                icon: BarChart3
              },
              { 
                title: "Otomatik Sadakat", 
                desc: "Müşteri davranışlarını analiz ederek kişiselleştirilmiş teklifler sunar.",
                icon: Users
              },
              { 
                title: "Akıllı Bildirimler", 
                desc: "Müşterilerinize en doğru zamanda, en doğru kanaldan ulaşır.",
                icon: Smartphone
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group hover:bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-accent/20"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Geleceği Beklemeyin. <br/>Onu Yönetin.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Schedula Private Beta programı sınırlı sayıda işletme için açıldı. 
            Hemen başvurun, erken erişim avantajlarından yararlanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-10 rounded-full text-lg font-bold shadow-xl">
                Hemen Başvurun
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
