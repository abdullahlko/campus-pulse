

document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedEvents();
    renderFeaturedClubs();
});


function renderFeaturedEvents() {
    const container = document.getElementById('featured-events');
    if (!container) return;
    
    
    const featuredEvents = eventsData
        .filter(event => isUpcoming(event.date))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);
    
    container.innerHTML = featuredEvents.map(event => {
        const club = getClubById(event.clubId);
        const spotsLeft = event.capacity - event.registered;
        
        return `
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group">
                <div class="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                    <span class="text-6xl group-hover:scale-110 transition-transform duration-300">${event.image}</span>
                    <div class="absolute top-4 right-4">
                        <span class="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                            Upcoming
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
                            <span class="text-sm text-gray-600">${club.shortName}</span>
                        </div>
                        <button data-event-id="${event.id}" data-event-name="${event.title}" 
                                class="register-btn bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
  
    document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.dataset.eventId);
            const eventName = this.dataset.eventName;
            openModal(eventId, eventName);
        });
    });
}


function renderFeaturedClubs() {
    const container = document.getElementById('featured-clubs');
    if (!container) return;
    
    const featuredClubs = [...clubsData]
        .sort((a, b) => b.members - a.members)
        .slice(0, 4);
    
    container.innerHTML = featuredClubs.map(club => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group text-center">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group text-center">
           <div class="h-32 relative h-24 w-full overflow-hidden">
    <img 
        src="${club.image}" 
        alt="${club.name}"
        class="w-full h-full object-cover"
    />
</div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition">${club.name}</h3>
                <p class="text-sm text-gray-500 mb-3">${club.members} members</p>
                <a href="clubs.html" class="text-primary text-sm font-medium hover:underline">Learn More →</a>
            </div>
        </div>
    `).join('');
}
