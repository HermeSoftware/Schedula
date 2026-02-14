import { useMutation } from "@tanstack/react-query";
import { api, type InsertApplication, type InsertSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateApplication() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertApplication) => {
      const res = await fetch(api.applications.create.path, {
        method: api.applications.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Something went wrong");
      }
      
      return api.applications.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Başvuru Alındı",
        description: "Private Beta başvurunuz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Hata",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useSubscribeNewsletter() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(api.newsletter.subscribe.path, {
        method: api.newsletter.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Subscription failed");
      }
      
      return api.newsletter.subscribe.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Teşekkürler!",
        description: "Bültenimize başarıyla abone oldunuz.",
      });
    },
    onError: (error) => {
      toast({
        title: "Hata",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
