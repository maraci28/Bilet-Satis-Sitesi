# XAMPP ile MySQL Veritabanı Kurulum Rehberi

## 1. XAMPP Kurulumu

### XAMPP İndirme ve Kurma
1. [XAMPP resmi sitesinden](https://www.apachefriends.org/download.html) XAMPP'i indirin
2. İndirilen dosyayı çalıştırarak kurulumu tamamlayın
3. Kurulum sırasında Apache, MySQL, PHP ve phpMyAdmin seçeneklerinin seçili olduğundan emin olun

### XAMPP Başlatma
1. XAMPP Control Panel'i açın
2. **Apache** ve **MySQL** servislerini başlatın
3. Her iki servisin de yeşil renkte "Running" durumunda olduğundan emin olun

## 2. Veritabanı Oluşturma

### phpMyAdmin ile Veritabanı Oluşturma
1. Tarayıcınızda `http://localhost/phpmyadmin` adresine gidin
2. Sol menüden "New" (Yeni) butonuna tıklayın
3. Veritabanı adı olarak `vibetix_db` yazın
4. Collation olarak `utf8mb4_unicode_ci` seçin
5. "Create" butonuna tıklayın

### SQL Script ile Tablo Oluşturma
1. phpMyAdmin'de `vibetix_db` veritabanını seçin
2. "SQL" sekmesine tıklayın
3. `scripts/create-database.sql` dosyasındaki SQL kodlarını kopyalayıp yapıştırın
4. "Go" butonuna tıklayarak çalıştırın

### Örnek Verileri Ekleme
1. Yine "SQL" sekmesinde
2. `scripts/insert-sample-data.sql` dosyasındaki SQL kodlarını çalıştırın
3. Verilerin başarıyla eklendiğini kontrol edin

## 3. Backend Konfigürasyonu

### application.properties Ayarları
```properties
# MySQL bağlantı ayarları
spring.datasource.url=jdbc:mysql://localhost:3306/vibetix_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
