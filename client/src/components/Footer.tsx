import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSubscribeNewsletter } from "@/hooks/use-applications";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export function Footer() {
  const subscribeMutation = useSubscribeNewsletter();
  
  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(data: InsertSubscriber) {
    subscribeMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">Schedula.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              İşletmeler için geliştirilmiş yapay zeka destekli randevu ve gelir optimizasyon sistemi. Geleceği planlayın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Ürün</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/pricing" className="hover:text-white transition-colors">Fiyatlandırma</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Entegrasyonlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yol Haritası</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Şirket</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="mailto:contact@hermessoftware.net" className="hover:text-white transition-colors">contact@hermessoftware.net</a></li>
              <li><a href="tel:5442577760" className="hover:text-white transition-colors">544 257 77 60</a></li>
              <li><a href="https://hermessoftware.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">hermessoftware.net</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Bülten</h4>
            <p className="text-gray-400 text-sm mb-4">Erken erişim fırsatlarından haberdar olun.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="E-posta adresiniz" 
                            {...field} 
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-accent"
                          />
                          <Button 
                            type="submit" 
                            size="icon" 
                            className="bg-accent hover:bg-accent/90 shrink-0"
                            disabled={subscribeMutation.isPending}
                          >
                            <Send size={18} />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div className="flex flex-col gap-1">
            <p>© 2026 Schedula Inc. Tüm hakları saklıdır.</p>
            <p><strong>Hermes</strong> Software Tarafından Geliştirildi</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
