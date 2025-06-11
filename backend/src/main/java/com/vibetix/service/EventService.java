package com.vibetix.service;

import com.vibetix.model.Event;
import com.vibetix.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    
    @Autowired
    private EventRepository eventRepository;
    
    // Tüm etkinlikleri getir
    public List<Event> getAllEvents() {
        return eventRepository.findAllOrderByEventDate();
    }
    
    // ID ile etkinlik getir
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }
    
    // Kategori ile etkinlik arama
    public List<Event> getEventsByCategory(String category) {
        return eventRepository.findByCategory(category);
    }
    
    // Genel arama
    public List<Event> searchEvents(String searchTerm) {
        if (searchTerm == null || searchTerm.trim().isEmpty()) {
            return getAllEvents();
        }
        return eventRepository.searchEvents(searchTerm.trim());
    }
    
    // Yeni etkinlik oluştur
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
    
    // Etkinlik güncelle
    public Event updateEvent(Long id, Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.setTitle(eventDetails.getTitle());
            event.setDescription(eventDetails.getDescription());
            event.setEventDate(eventDetails.getEventDate());
            event.setLocation(eventDetails.getLocation());
            event.setCategory(eventDetails.getCategory());
            event.setImageUrl(eventDetails.getImageUrl());
            return eventRepository.save(event);
        }
        return null;
    }
    
    // Etkinlik sil
    public boolean deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
