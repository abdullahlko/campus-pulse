

document.addEventListener('DOMContentLoaded', function() {
    const clubsGrid = document.getElementById('clubs-grid');
    const clubsCount = document.getElementById('clubs-count');
    const searchInput = document.getElementById('club-search');
    const categoryFilter = document.getElementById('category-filter');
    const emptyState = document.getElementById('empty-state');
    
    
    renderClubs(clubsData);
    
   
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterClubs, 300));
    }
    
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterClubs);
    }
    
    
    function filterClubs() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : '';
        
        let filteredClubs = clubsData.filter(club => {
            const matchesSearch = club.name.toLowerCase().includes(searchTerm) ||
                                  club.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || club.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        renderClubs(filteredClubs);
    }
    
    
    function renderClubs(clubs) {
        if (!clubsGrid) return;
        
        
        if (clubsCount) {
            clubsCount.textContent = `Showing ${clubs.length} club${clubs.length !== 1 ? 's' : ''}`;
        }
        
        
        if (clubs.length === 0) {
            clubsGrid.classList.add('hidden');
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }
        
        clubsGrid.classList.remove('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        
        clubsGrid.innerHTML = clubs.map(club => createClubCard(club)).join('');
    }
    
    
    function createClubCard(club) {
    return `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group">
            
            <!-- IMAGE HEADER -->
            <div class="h-32 relative h-24 w-full overflow-hidden">
                <img 
                    src="${club.image}" 
                    alt="${club.name}"
                    class="w-full h-full object-cover"
                >
                <div class="absolute inset-0 bg-black/30"></div>
            </div>

            <div class="p-5">
                <div class="mb-3">
                    <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full capitalize">
                        ${club.category}
                    </span>
                </div>

                <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition">
                    ${club.name}
                </h3>

                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    ${club.description}
                </p>

                <div class="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div class="flex items-center">
                        ${club.members} members
                    </div>
                    <div class="flex items-center">
                        ${club.events} events
                    </div>
                </div>

                <button class="w-full mt-4 bg-primary text-white py-2 rounded-lg font-medium hover:shadow-lg transition text-sm">
                    Join Club
                </button>
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
