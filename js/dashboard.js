if (!sessionStorage.getItem('demoLoaded')) {
    localStorage.clear();     
    sessionStorage.setItem('demoLoaded', 'true');
}


document.addEventListener('DOMContentLoaded', function() {
   
    const totalEvents = eventsData.length;
    const totalClubs = clubsData.length;
    const totalRegistrations = eventsData.reduce((sum, event) => sum + event.registered, 0);
    const totalMembers = clubsData.reduce((sum, club) => sum + club.members, 0);
    
    
    animateCounter('stat-events', totalEvents);
    animateCounter('stat-clubs', totalClubs);
    animateCounter('stat-registrations', totalRegistrations);
    animateCounter('stat-members', totalMembers);
    
    
    renderRecentEvents();
    
    
    renderTopClubs();
    
   
    renderRecentRegistrations();
    loadRegistrations();

});


function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 1500;
    const steps = 50;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, stepDuration);
}


function renderRecentEvents() {
    const tableBody = document.getElementById('recent-events-table');
    if (!tableBody) return;
    
    
    const recentEvents = [...eventsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    
    tableBody.innerHTML = recentEvents.map(event => {
        const club = getClubById(event.clubId);
        const upcoming = isUpcoming(event.date);
        
        return `
            <tr class="border-b hover:bg-gray-50 transition">
                <td class="py-4">
                    <div class="flex items-center">
                        <span class="text-2xl mr-3">${event.image}</span>
                        <div>
                            <p class="font-medium text-gray-800">${event.title}</p>
                            <p class="text-sm text-gray-500">${event.venue}</p>
                        </div>
                    </div>
                </td>
                <td class="py-4 text-gray-600">${club.name}</td>
                <td class="py-4 text-gray-600">${formatDate(event.date)}</td>
                <td class="py-4">
                    <span class="px-2 py-1 ${upcoming ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'} text-xs font-medium rounded-full">
                        ${upcoming ? 'Upcoming' : 'Past'}
                    </span>
                </td>
                <td class="py-4">
                    <div class="flex items-center">
                        <div class="w-24 bg-gray-200 rounded-full h-2 mr-2">
                            <div class="bg-primary h-2 rounded-full" style="width: ${(event.registered / event.capacity) * 100}%"></div>
                        </div>
                        <span class="text-sm text-gray-600">${event.registered}/${event.capacity}</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}


function renderTopClubs() {
    const container = document.getElementById('top-clubs-list');
    if (!container) return;
    
   
    const topClubs = [...clubsData]
        .sort((a, b) => b.members - a.members)
        .slice(0, 5);
    
    const maxMembers = topClubs[0].members;
    
    container.innerHTML = topClubs.map((club, index) => `
        <div class="flex items-center">
            <span class="w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 text-sm font-medium rounded-full mr-3">
                ${index + 1}
            </span>
            <div class="w-10 h-10 bg-gradient-to-r ${club.gradient} rounded-xl flex items-center justify-center text-white text-lg mr-3">
                ${club.logo}
            </div>
            <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                    <span class="font-medium text-gray-800">${club.name}</span>
                    <span class="text-sm text-gray-500">${club.members} members</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r ${club.gradient} h-2 rounded-full transition-all duration-500" 
                         style="width: ${(club.members / maxMembers) * 100}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}


function renderRecentRegistrations() {
    const container = document.getElementById('recent-registrations');
    if (!container) return;
    
   
    const recentRegs = registrationsData.slice(-5).reverse();
    
    container.innerHTML = recentRegs.map(reg => {
        const event = getEventById(reg.eventId);
        return `
            <div class="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-medium mr-3">
                    ${reg.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="flex-1">
                    <p class="font-medium text-gray-800">${reg.name}</p>
                    <p class="text-sm text-gray-500">Registered for ${event ? event.title : 'Unknown Event'}</p>
                </div>
                <span class="text-xs text-gray-400">${reg.timestamp.split(' ')[0]}</span>
            </div>
        `;
    }).join('');
}
function loadRegistrations() {
    const container = document.getElementById('recent-registrations');
    if (!container) return;

    const registrations =
        JSON.parse(localStorage.getItem('registrations')) || [];

    if (registrations.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm">No registrations yet.</p>`;
        return;
    }

    container.innerHTML = registrations
        .slice(-5)
        .reverse()
        .map(reg => `
            <div class="flex items-center p-3 bg-gray-50 rounded-xl">
                <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                    ${reg.name[0]}
                </div>
                <div class="ml-3">
                    <p class="font-medium">${reg.name}</p>
                    <p class="text-sm text-gray-500">${reg.eventTitle}</p>
                </div>
            </div>
        `)
        .join('');
}
function downloadCSV() {
    const registrations =
        JSON.parse(localStorage.getItem('registrations')) || [];

    if (registrations.length === 0) {
        alert('No registrations to download');
        return;
    }

    let csv = "Event,Name,Email,Student ID,Time\n";
    registrations.forEach(r => {
        csv += `"${r.eventTitle}","${r.name}","${r.email}","${r.studentId}","${r.timestamp}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'event_registrations.csv';
    a.click();
}

