package com.vibetix.config;

import com.vibetix.model.Artist;
import com.vibetix.model.Event;
import com.vibetix.model.TicketType;
import com.vibetix.repository.ArtistRepository;
import com.vibetix.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {
    
    @Autowired
    private ArtistRepository artistRepository;
    
    @Autowired
    private EventRepository eventRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Eğer veri zaten varsa, tekrar ekleme
        if (artistRepository.count() > 0) {
            System.out.println("✅ Veriler zaten mevcut, tekrar yüklenmedi.");
            return;
        }
        
        // Sanatçıları oluştur
        Artist tarkan = new Artist("Tarkan", 
            "Türk pop müziğinin megastarı Tarkan, yeni albümü ve en sevilen şarkılarıyla.", 
            "pop");
        
        Artist duman = new Artist("Duman", 
            "Türk rock müziğinin efsane grubu Duman, enerjik performansları ile.", 
            "rock");
        
        Artist ceza = new Artist("Ceza", 
            "Türk rap müziğinin efsanesi Ceza, güçlü sözleri ve performansı ile.", 
            "rap");
        
        // Sanatçıları kaydet
        tarkan = artistRepository.save(tarkan);
        duman = artistRepository.save(duman);
        ceza = artistRepository.save(ceza);
        
        // Etkinlikleri oluştur
        Event tarkanEvent = new Event(
            "Tarkan - Harbiye Açıkhava Konseri",
            "Türk pop müziğinin megastarı Tarkan, yeni albümü ve en sevilen şarkılarıyla Harbiye Açıkhava'da sizlerle buluşuyor.",
            LocalDateTime.of(2025, 7, 15, 21, 0),
            "İstanbul, Harbiye Açıkhava Tiyatrosu",
            "pop",
            tarkan
        );
        
        Event dumanEvent = new Event(
            "Duman - Rock Festivali",
            "Türk rock müziğinin efsane grubu Duman, ODTÜ Vişnelik'te rock severlerle buluşuyor.",
            LocalDateTime.of(2025, 7, 22, 20, 0),
            "Ankara, ODTÜ Vişnelik",
            "rock",
            duman
        );
        
        Event cezaEvent = new Event(
            "Ceza - Rap Gecesi",
            "Türk rap müziğinin efsanesi Ceza, Volkswagen Arena'da rap severlerle buluşuyor.",
            LocalDateTime.of(2025, 8, 5, 22, 0),
            "İstanbul, Volkswagen Arena",
            "rap",
            ceza
        );
        
        // Etkinlikleri kaydet
        tarkanEvent = eventRepository.save(tarkanEvent);
        dumanEvent = eventRepository.save(dumanEvent);
        cezaEvent = eventRepository.save(cezaEvent);
        
        // Bilet türlerini oluştur (güncellenmiş constructor ile)
        TicketType tarkanVip = new TicketType("VIP", 
            new BigDecimal("1200.00"), 
            "Ayrıcalıklı oturma alanı ve içecek ikramı", 
            100, 100, tarkanEvent);
            
        TicketType tarkanNormal = new TicketType("Normal", 
            new BigDecimal("750.00"), 
            "Genel giriş alanı", 
            500, 500, tarkanEvent);
        
        TicketType dumanVip = new TicketType("Sahne Önü", 
            new BigDecimal("800.00"), 
            "Sahne önünde ayakta alan", 
            100, 100, dumanEvent);
            
        TicketType dumanNormal = new TicketType("Genel Alan", 
            new BigDecimal("500.00"), 
            "Festival alanı genel giriş", 
            500, 500, dumanEvent);
        
        TicketType cezaVip = new TicketType("Golden Circle", 
            new BigDecimal("900.00"), 
            "Sahne önü özel alan", 
            100, 100, cezaEvent);
            
        TicketType cezaNormal = new TicketType("Genel", 
            new BigDecimal("250.00"), 
            "Genel giriş alanı", 
            500, 500, cezaEvent);
        
        System.out.println("✅ Test verileri başarıyla yüklendi!");
        System.out.println("🎵 " + artistRepository.count() + " sanatçı oluşturuldu");
        System.out.println("🎪 " + eventRepository.count() + " etkinlik oluşturuldu");
        System.out.println("🎫 6 bilet türü oluşturuldu");
        System.out.println("🌐 API: http://localhost:8080/api/events");
        System.out.println("🗄️ H2 Console: http://localhost:8080/h2-console");
    }
}
