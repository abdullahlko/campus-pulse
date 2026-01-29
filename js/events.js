
document.addEventListener('DOMContentLoaded', function() {
    const eventsGrid = document.getElementById('events-grid');
    const eventsCount = document.getElementById('events-count');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const emptyState = document.getElementById('empty-state');
    
   
    renderEvents(eventsData);
    
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterEvents, 300));
    }
    
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }
    
    
    if (statusFilter) {
        statusFilter.addEventListener('change', filterEvents);
    }
    
    
    function filterEvents() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : '';
        const status = statusFilter ? statusFilter.value : '';
        
        let filteredEvents = eventsData.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                                  event.description.toLowerCase().includes(searchTerm) ||
                                  getClubById(event.clubId).name.toLowerCase().includes(searchTerm);
            
            const matchesCategory = !category || event.category === category;
            
            const eventStatus = isUpcoming(event.date) ? 'upcoming' : 'past';
            const matchesStatus = !status || eventStatus === status;
            
            return matchesSearch && matchesCategory && matchesStatus;
        });
        
        renderEvents(filteredEvents);
    }
    
    
    function renderEvents(events) {
        if (!eventsGrid) return;
        
        
        if (eventsCount) {
            eventsCount.textContent = `Showing ${events.length} event${events.length !== 1 ? 's' : ''}`;
        }
        
        
        if (events.length === 0) {
            eventsGrid.classList.add('hidden');
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }
        
        eventsGrid.classList.remove('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        
        eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
        
        
        document.querySelectorAll('.register-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = parseInt(this.dataset.eventId);
                const event = getEventById(eventId);
                openModal(eventId, event.title);
            });
        });
    }
    
    
    function createEventCard(event) {
        const club = getClubById(event.clubId);
        const upcoming = isUpcoming(event.date);
        const spotsLeft = event.capacity - event.registered;
        
        return `
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group">
                <div class="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                    <span class="text-6xl group-hover:scale-110 transition-transform duration-300">${event.image}</span>
                    <div class="absolute top-4 right-4">
                        <span class="px-3 py-1 ${upcoming ? 'bg-green-500' : 'bg-gray-500'} text-white text-xs font-medium rounded-full">
                            ${upcoming ? 'Upcoming' : 'Past'}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full capitalize">
                            ${event.category}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">
                        <a href="event-details.html?id=${event.id}">${event.title}</a>
                    </h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">${event.description}</p>
                    
                    <div class="flex items-center text-sm text-gray-500 mb-4">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        ${formatDate(event.date)}
                    </div>
                    
                    <div class="flex items-center justify-between pt-4 border-t">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-gradient-to-r ${club.gradient} rounded-full flex items-center justify-center text-white text-xs mr-2">
                                ${club.shortName[0]}
                            </div>
                            <span class="text-sm text-gray-600">${club.name}</span>
                        </div>
                    </div>
                    
                    <div class="mt-4 flex items-center justify-between">
                        <div class="text-sm">
                            <span class="${spotsLeft > 20 ? 'text-green-600' : spotsLeft > 0 ? 'text-amber-600' : 'text-red-600'} font-medium">
                                ${spotsLeft > 0 ? `${spotsLeft} spots left` : 'Full'}
                            </span>
                        </div>
                        ${upcoming && spotsLeft > 0 ? `
                            <button data-event-id="${event.id}" class="register-btn bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition">
                                Register
                            </button>
                        ` : upcoming ? `
                            <span class="text-gray-400 text-sm">Registration Closed</span>
                        ` : `
                            <a href="event-details.html?id=${event.id}" class="text-primary text-sm font-medium hover:underline">View Details</a>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
    
   
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
});
