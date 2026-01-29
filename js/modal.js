


let currentEventId = null;


function openModal(eventId, eventName) {
    currentEventId = eventId;
    const modal = document.getElementById('registration-modal');
    const modalContent = document.getElementById('modal-content');
    const modalEventName = document.getElementById('modal-event-name');
    
    if (modal && modalContent) {
        modalEventName.textContent = `You're registering for: ${eventName}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
       
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
        
        
        document.body.style.overflow = 'hidden';
    }
}


function closeModal() {
    const modal = document.getElementById('registration-modal');
    const modalContent = document.getElementById('modal-content');
    
    if (modal && modalContent) {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('registration-modal');
    const closeBtn = document.getElementById('close-modal');
    const registrationForm = document.getElementById('registration-form');
    
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
   
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = registrationForm.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const studentId = inputs[2].value.trim();

    if (!name || !email || !studentId) return;

    const registrations =
        JSON.parse(localStorage.getItem('registrations')) || [];

    registrations.push({
        eventId: currentEventId,
        eventTitle: document.getElementById('modal-event-name').innerText.replace("You're registering for: ", ""),
        name,
        email,
        studentId,
        timestamp: new Date().toLocaleString()
    });

    localStorage.setItem('registrations', JSON.stringify(registrations));

    showSuccessMessage();
    registrationForm.reset();
    setTimeout(closeModal, 1500);
});

    }
});


function showSuccessMessage() {
    const form = document.getElementById('registration-form');
    const originalContent = form.innerHTML;
    
    form.innerHTML = `
        <div class="text-center py-8">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">Registration Successful!</h4>
            <p class="text-gray-600">Check your email for confirmation details.</p>
        </div>
    `;
    
   
    setTimeout(() => {
        form.innerHTML = originalContent;
    }, 2000);
}
