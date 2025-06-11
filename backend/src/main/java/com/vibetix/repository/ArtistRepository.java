package com.vibetix.repository;

import com.vibetix.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    
    // Kategori ile sanatçı arama
    List<Artist> findByCategory(String category);
    
    // İsim ile arama (case insensitive)
    @Query("SELECT a FROM Artist a WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Artist> findByNameContainingIgnoreCase(@Param("name") String name);
    
    // Popüler sanatçılar (etkinlik sayısına göre)
    @Query("SELECT a FROM Artist a LEFT JOIN a.events e GROUP BY a ORDER BY COUNT(e) DESC")
    List<Artist> findPopularArtists();
}
