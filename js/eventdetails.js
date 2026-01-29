

document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));
    
    if (!eventId) {
        
        window.location.href = 'events.html';
        return;
    }
    
    const event = getEventById(eventId);
    
    if (!event) {
        
        window.location.href = 'events.html';
        return;
    }
    
    const club = getClubById(event.clubId);
    const upcoming = true; 
    const spotsLeft = event.capacity - event.registered;
    
    
    document.title = `${event.title} - CampusPulse`;
    
    
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = event.title;
    }
    
   
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-description').textContent = event.description;
    document.getElementById('event-date').textContent = formatDate(event.date);
    document.getElementById('event-time').textContent = event.time;
    document.getElementById('event-venue').textContent = event.venue;
    document.getElementById('event-capacity').textContent = `${event.registered}/${event.capacity} registered`;
    
    
    const categoryBadge = document.getElementById('event-category');
    categoryBadge.textContent = event.category.charAt(0).toUpperCase() + event.category.slice(1);
    
    
    const statusBadge = document.getElementById('event-status');
    if (upcoming) {
        statusBadge.textContent = 'Upcoming';
        statusBadge.classList.add('bg-green-100', 'text-green-700');
    } else {
        statusBadge.textContent = 'Past Event';
        statusBadge.classList.add('bg-gray-100', 'text-gray-700');
    }
    
    
    const eventImage = document.getElementById('event-image');
    eventImage.innerHTML = `<span class="text-8xl">${event.image}</span>`;
    
    
    document.getElementById('club-name').textContent = club.name;
    document.getElementById('club-avatar').textContent = club.shortName[0];
    
    
    const spotsLeftEl = document.getElementById('spots-left');
    if (spotsLeft > 0) {
        spotsLeftEl.textContent = `${spotsLeft} spots remaining`;
        spotsLeftEl.classList.add('text-primary');
    } else {
        spotsLeftEl.textContent = 'Fully Booked';
        spotsLeftEl.classList.add('text-red-500');
    }
    
   
    const registerBtn = document.getElementById('register-btn');
    if (!upcoming) {
        registerBtn.textContent = 'Event Ended';
        registerBtn.disabled = true;
        registerBtn.classList.remove('from-primary', 'to-secondary', 'hover:shadow-lg', 'hover:scale-105');
        registerBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
    } else if (spotsLeft <= 0) {
        registerBtn.textContent = 'Fully Booked';
        registerBtn.disabled = true;
        registerBtn.classList.remove('from-primary', 'to-secondary', 'hover:shadow-lg', 'hover:scale-105');
        registerBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
    } else {
        registerBtn.addEventListener('click', function() {
            openModal(event.id, event.title);
        });
    }
});
