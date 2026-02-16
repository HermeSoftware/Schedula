import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Apply() {
  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      businessName: "",
      sector: "",
      monthlyAppointments: "",
      employeeCount: "",
      email: "",
      phone: "",
      reason: ""
    }
  });

  function onSubmit(data: InsertApplication) {
    const phoneNumber = "905442577760";

    const message = `
📌 Schedula Private Beta Başvuru

🏢 İşletme Adı: ${data.businessName}
🏷️ Sektör: ${data.sector}
📊 Aylık Ortalama Randevu: ${data.monthlyAppointments}
👥 Çalışan Sayısı: ${data.employeeCount}

📧 E-posta: ${data.email}
📱 Telefon: ${data.phone}

📝 Neden Schedula?
${data.reason}
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    form.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Private Beta Başvuru
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Schedula şu anda yalnızca seçili işletmeler için aktif. 
            Aşağıdaki formu doldurarak bekleme listesinde öncelik kazanabilirsiniz.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>İşletme Adı</FormLabel>
                      <FormControl>
                        <Input placeholder="Örn: Estetik Center" className="h-12 bg-gray-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sektör</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50">
                            <SelectValue placeholder="Sektör Seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="health">Sağlık / Klinik</SelectItem>
                          <SelectItem value="beauty">Güzellik / Kuaför</SelectItem>
                          <SelectItem value="consultancy">Danışmanlık</SelectItem>
                          <SelectItem value="education">Eğitim</SelectItem>
                          <SelectItem value="other">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="monthlyAppointments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aylık Ortalama Randevu</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50">
                            <SelectValue placeholder="Seçim Yapın" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-50">0 - 50</SelectItem>
                          <SelectItem value="50-150">50 - 150</SelectItem>
                          <SelectItem value="150-500">150 - 500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Çalışan Sayısı</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-gray-50">
                            <SelectValue placeholder="Seçim Yapın" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 (Solo)</SelectItem>
                          <SelectItem value="2-5">2 - 5</SelectItem>
                          <SelectItem value="6-20">6 - 20</SelectItem>
                          <SelectItem value="20+">20+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>İş E-postası</FormLabel>
                      <FormControl>
                        <Input placeholder="ad@sirket.com" type="email" className="h-12 bg-gray-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="0555 555 55 55" type="tel" className="h-12 bg-gray-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Neden Schedula?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Şu anki en büyük randevu yönetim probleminiz nedir?" 
                        className="min-h-[100px] bg-gray-50 resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 bg-primary text-white text-lg rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Başvuruyu Gönder
              </Button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Başvurarak Hizmet Şartları'nı ve Gizlilik Politikası'nı kabul etmiş olursunuz.
              </p>

            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}