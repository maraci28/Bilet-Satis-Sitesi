package com.vibetix.repository;

import com.vibetix.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
    // Kategori ile etkinlik arama
    List<Event> findByCategory(String category);
    
    // Başlık ile arama (case insensitive)
    @Query("SELECT e FROM Event e WHERE LOWER(e.title) LIKE LOWER(CONCAT('%', :title, '%'))")
    List<Event> findByTitleContainingIgnoreCase(@Param("title") String title);
    
    // Sanatçı adı ile arama
    @Query("SELECT e FROM Event e WHERE LOWER(e.artist.name) LIKE LOWER(CONCAT('%', :artistName, '%'))")
    List<Event> findByArtistNameContainingIgnoreCase(@Param("artistName") String artistName);
    
    // Lokasyon ile arama
    @Query("SELECT e FROM Event e WHERE LOWER(e.location) LIKE LOWER(CONCAT('%', :location, '%'))")
    List<Event> findByLocationContainingIgnoreCase(@Param("location") String location);
    
    // Genel arama (başlık, sanatçı, lokasyon)
    @Query("SELECT e FROM Event e WHERE " +
           "LOWER(e.title) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(e.artist.name) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(e.location) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Event> searchEvents(@Param("searchTerm") String searchTerm);
    
    // Tarihe göre sıralama
    @Query("SELECT e FROM Event e ORDER BY e.eventDate ASC")
    List<Event> findAllOrderByEventDate();
}
