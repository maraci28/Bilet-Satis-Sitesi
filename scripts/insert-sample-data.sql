-- Örnek verileri ekle
USE vibetix_db;

-- Sanatçıları ekle
INSERT INTO artists (name, bio, category, image_url) VALUES
('Tarkan', 'Türk pop müziğinin megastarı Tarkan, 1990''larda başlayan kariyeri boyunca hem Türkiye''de hem de uluslararası alanda büyük başarılar elde etmiştir.', 'pop', '/placeholder.svg?height=300&width=300'),
('Duman', 'Türk rock müziğinin efsane grubu Duman, 1999 yılında kurulmuş ve Türk rock sahnesinin en önemli gruplarından biri haline gelmiştir.', 'rock', '/placeholder.svg?height=300&width=300'),
('Mabel Matiz', 'Alternatif pop müziğin yükselen yıldızı Mabel Matiz, özgün tarzı ve etkileyici sesiyle müzik dünyasında kendine özel bir yer edinmiştir.', 'pop', '/placeholder.svg?height=300&width=300'),
('Ceza', 'Türk rap müziğinin efsanesi Ceza, güçlü sözleri ve özgün tarzıyla Türk hip-hop sahnesinin öncülerinden biridir.', 'rap', '/placeholder.svg?height=300&width=300'),
('Sagopa Kajmer', 'Hip-hop kültürünün öncülerinden Sagopa Kajmer, derin sözleri ve felsefi yaklaşımıyla Türk rap müziğine damgasını vurmuştur.', 'rap', '/placeholder.svg?height=300&width=300');

-- Etkinlikleri ekle
INSERT INTO events (title, description, event_date, location, address, category, artist_id, image_url) VALUES
('Tarkan - Harbiye Açıkhava Konseri', 'Türk pop müziğinin megastarı Tarkan, yeni albümü ve en sevilen şarkılarıyla Harbiye Açıkhava''da sizlerle buluşuyor. Muhteşem sahne performansı ve unutulmaz şarkılarıyla dolu bir gece sizi bekliyor.', '2025-07-15 21:00:00', 'İstanbul, Harbiye Açıkhava', 'Harbiye Mah. Taşkışla Cad. No:8, Şişli/İstanbul', 'pop', 1, '/placeholder.svg?height=600&width=1200'),
('Tarkan - Ankara Konseri', 'Tarkan''ın Ankara''daki muhteşem konseri. En sevilen şarkılarıyla unutulmaz bir gece yaşayacaksınız.', '2025-07-20 20:30:00', 'Ankara, Congresium', 'Eskişehir Yolu 7. km, Tepe Prime AVM yanı, Ankara', 'pop', 1, '/placeholder.svg?height=600&width=1200'),
('Duman - Rock Festivali', 'Türk rock müziğinin efsane grubu Duman, ODTÜ Vişnelik''te rock severlerle buluşuyor. Enerjik performans ve hit şarkılarla dolu bir gece.', '2025-07-22 20:00:00', 'Ankara, ODTÜ Vişnelik', 'ODTÜ Kampüsü, Vişnelik Tesisleri, Ankara', 'rock', 2, '/placeholder.svg?height=600&width=1200'),
('Duman - İstanbul Konseri', 'Duman''ın İstanbul''daki özel konseri. Rock müziğin en iyi örnekleriyle dolu unutulmaz bir gece.', '2025-07-28 21:30:00', 'İstanbul, Zorlu PSM', 'Zorlu Center PSM, Levazım Mah. Koru Sok. No:2 Beşiktaş/İstanbul', 'rock', 2, '/placeholder.svg?height=600&width=1200'),
('Mabel Matiz - Yaz Konseri', 'Mabel Matiz''in büyüleyici sesiyle KüçükÇiftlik Park''ta romantik bir yaz gecesi. En sevilen şarkılarıyla unutulmaz anlar.', '2025-07-10 20:30:00', 'İstanbul, KüçükÇiftlik Park', 'Tarabya Mah. Haydar Aliyev Cad. No:64 Sarıyer/İstanbul', 'pop', 3, '/placeholder.svg?height=600&width=1200'),
('Ceza - Rap Gecesi', 'Türk rap müziğinin efsanesi Ceza, Volkswagen Arena''da rap severlerle buluşuyor. Hip-hop kültürünün en iyi örnekleri.', '2025-08-05 22:00:00', 'İstanbul, Volkswagen Arena', 'Huzur Mah. Maslak Ayazağa Cad. No:4 Sarıyer/İstanbul', 'rap', 4, '/placeholder.svg?height=600&width=1200'),
('Sagopa Kajmer - Hip Hop Konseri', 'Sagopa Kajmer''in derin sözleri ve güçlü rap performansıyla Ankara''da unutulmaz bir hip-hop gecesi.', '2025-08-12 21:00:00', 'Ankara, MEB Şura Salonu', 'Emniyet Mah. Milas Sok. No:21 Yenimahalle/Ankara', 'rap', 5, '/placeholder.svg?height=600&width=1200');

-- Bilet türlerini ekle
INSERT INTO ticket_types (name, price, description, available, total_quantity, event_id) VALUES
-- Tarkan Harbiye Konseri
('Sahne Önü VIP', 1500.00, 'Sahne önünde ayrıcalıklı alan, özel giriş ve içecek ikramı', 50, 50, 1),
('VIP', 1200.00, 'Ayrıcalıklı oturma alanı ve içecek ikramı', 100, 100, 1),
('Tribün A', 900.00, 'Merkezi tribün, iyi görüş açısı', 200, 200, 1),
('Tribün B', 750.00, 'Yan tribün', 300, 300, 1),
('Arka Alan', 500.00, 'Ayakta alan', 500, 500, 1),

-- Tarkan Ankara Konseri
('VIP', 1000.00, 'Ayrıcalıklı oturma alanı ve içecek ikramı', 80, 80, 2),
('Tribün A', 700.00, 'Merkezi tribün, iyi görüş açısı', 150, 150, 2),
('Tribün B', 500.00, 'Yan tribün', 200, 200, 2),
('Genel', 350.00, 'Genel giriş alanı', 300, 300, 2),

-- Duman Rock Festivali
('Sahne Önü', 800.00, 'Sahne önünde ayakta alan', 100, 100, 3),
('Genel Alan', 500.00, 'Festival alanı genel giriş', 500, 500, 3),
('Öğrenci', 300.00, 'Öğrenci indirimi (öğrenci belgesi gerekli)', 200, 200, 3),

-- Duman İstanbul Konseri
('VIP', 1200.00, 'VIP oturma alanı ve ikramlar', 60, 60, 4),
('Tribün', 800.00, 'Tribün oturma alanı', 200, 200, 4),
('Balkon', 600.00, 'Balkon alanı', 150, 150, 4),
('Genel', 400.00, 'Genel giriş', 300, 300, 4),

-- Mabel Matiz Yaz Konseri
('Sahne Önü', 700.00, 'Sahne önü özel alan', 80, 80, 5),
('Oturma', 500.00, 'Oturma alanı', 150, 150, 5),
('Çim Alan', 350.00, 'Çim alanda ayakta', 300, 300, 5),

-- Ceza Rap Gecesi
('Golden Circle', 900.00, 'Sahne önü özel alan', 100, 100, 6),
('Tribün A', 600.00, 'Alt tribün', 200, 200, 6),
('Tribün B', 400.00, 'Üst tribün', 300, 300, 6),
('Genel', 250.00, 'Genel giriş alanı', 500, 500, 6),

-- Sagopa Kajmer Hip Hop Konseri
('VIP', 500.00, 'VIP oturma alanı', 50, 50, 7),
('Tribün', 350.00, 'Tribün oturma', 150, 150, 7),
('Genel', 200.00, 'Genel giriş', 300, 300, 7);

-- Test kullanıcısı ekle
INSERT INTO users (name, email, password, phone) VALUES
('Demo Kullanıcı', 'demo@biletx.com', 'demo123', '+90 555 123 45 67'),
('Test User', 'test@biletx.com', 'test123', '+90 555 987 65 43');

SELECT 'Veri ekleme tamamlandı!' as status;
SELECT COUNT(*) as artist_count FROM artists;
SELECT COUNT(*) as event_count FROM events;
SELECT COUNT(*) as ticket_type_count FROM ticket_types;
SELECT COUNT(*) as user_count FROM users;
