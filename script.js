// Persona data
const personas = {
    steve: {
        name: "Steve Lendal",
        role: "Architect",
        age: 47,
        education: "Bachelor Degree",
        status: "Married with 2 kids",
        occupation: "Architect",
        location: "West Lake Tahoe, CA",
        techLiterate: "Medium",
        quote: "Could AI help me compare these plans and ensure Miles is covered?",
        bio: "Steve is a 47-year-old Architect, married to Anne (a Product Manager at 3M), with two children, Miles (13) and Alexis (10). He is responsible for navigating open enrollment for his family, needing to evaluate and compare 7 different insurance policy options (3 from his firm and 4 from Anne's) to find the perfect balance of cost and coverage. His primary goal is ensuring Miles, who has special needs, maintains uninterrupted access to his necessary specialist doctors. Steve has been adopting AI in his role at work and is curious how AI might help with his healthcare search.",
        coreNeeds: [
            "Network Transparency: Needs a simple way to search specifically for Miles's current specialists across multiple different insurance networks to ensure coverage.",
            "Efficiency: Needs to make this decision quickly without reading hundreds of pages of policy jargon, as he balances a demanding job.",
            "Family Coverage Clarity: Needs to understand exactly what \"special needs therapists\" are covered vs. what is out-of-pocket."
        ],
        frustrations: [
            "Disparate Information: Frustrated that Anne's plan details are in a different portal than his, making manual comparison difficult.",
            "Risk of Disruption: Anxious about the possibility of accidentally choosing a plan that forces them to change Miles's doctors.",
            "Hidden Costs: Fearful of high unexpected bills despite paying high premiums."
        ],
        personality: ["Extrovert", "Analytical", "Outdoorsy", "Adventurous"],
        brands: ["Apple", "Adobe", "REI", "Volvo", "Target"],
        paymentMedium: ["Premium credit cards", "HSA/FSA Debit cards"],
        platform: ["Browser", "Tablet"],
        aiFluency: "Explorer",
        aiFluencyLevel: 3
    },
    "leo-maya": {
        name: "Leo and Maya Torres",
        role: "Co-Owners & Artisans",
        age: 27,
        education: "Bachelors in marketing",
        status: "Married",
        occupation: "Co-Owners & Artisans",
        location: "Gardena, CA",
        techLiterate: "High",
        quote: "I am used to with online service and I usually do my sales from etsy.",
        bio: "Leo and Maya recently left their standard 9-to-5 jobs to pursue their woodworking passion full-time. They rent a townhome in Gardena where they have converted the two-car garage into a wood-turning studio. They sell handcrafted bowls, pens, and vases primarily on Etsy and at local LA craft markets. As first-time business owners, they are adept at social media marketing and inventory management, but they are completely lost regarding benefits. They just aged out of their parents' insurance a year ago and were previously on employer-sponsored plans. Now, facing their first year of full self-employment, they are uninsured and anxious about the potential for injury in the workshop.",
        coreNeeds: [
            "Immediate Health Insurance: They need to purchase health insurance immediately (Open Enrollment or Special Enrollment period) but are paralyzed by choice and jargon. They don't know if they should apply as a \"small business\" (group coverage) or as individuals through Covered California.",
            "Cost Predictability: Their income varies month-to-month based on Etsy sales trends. They need a premium that won't break the bank during slow months.",
            "Catastrophic Protection: Since Leo works with lathes and saws, they are terrified of a hand injury requiring surgery. They prioritize emergency coverage over routine care."
        ],
        frustrations: [
            "\"Group\" vs. \"Individual\" Confusion: They heard rumors that married couples can be a \"group of two\" for business insurance, but they don't know if they qualify in California or if it's cheaper than individual plans.",
            "Income Estimation: The application asks for \"Projected Annual Income.\" Since their business is new, they are guessing. They fear underestimating and owing the IRS, or overestimating and paying too much for premiums.",
            "Network Confusion: Living in Gardena, they are near several major hospital systems (Providence, Kaiser, Torrance Memorial), but they don't know which plans cover which doctors."
        ],
        personality: ["Admin-adverse", "Catastrophizers", "Digitally Expectant", "Tech-savvy"],
        brands: ["Facebook", "YouTube", "Instagram", "Etsy"],
        paymentMedium: ["Credit Card", "Digital Payment"],
        platform: ["Website", "Mobile App", "Smartwatch"],
        aiFluency: "Casual",
        aiFluencyLevel: 1
    },
    emily: {
        name: "Emily Watson",
        role: "UX Designer (laid off)",
        age: 29,
        education: "Bachelors in Design",
        status: "Single",
        occupation: "UX Designer (laid off)",
        location: "San Francisco",
        techLiterate: "High",
        quote: "I am used to with online service and I usually do my online shopping from Instagram.",
        bio: "She currently lives in San Francisco after being laid off from her UX Design role from Big Tech two months ago. She's using this free time to apply for new roles, hang with friends, and doing some traveling. She's on the market for PPO health insurance during this gap time. While her layoff package included COBRA, the monthly price was too expensive ($750/month) as a single. She needs health insurance because she has a recurring breast ultrasound every six months due to a cyst.",
        coreNeeds: [
            "Need to find an insurance plan that meets her needs (recurring ultrasound every six months)",
            "Find a PPO plan that has a reasonable monthly rate to cover her ultrasounds"
        ],
        frustrations: [
            "Comparing the different plans on the market is confusing in terms of the experience and comprehension"
        ],
        personality: ["Introvert", "Thinker", "Spender", "Tech-savvy"],
        brands: ["Facebook", "YouTube", "Instagram", "Everlane", "Uniqlo"],
        paymentMedium: ["Credit Card", "Digital Payment"],
        platform: ["Website", "Mobile App"],
        aiFluency: "Casual",
        aiFluencyLevel: 1
    },
    maria: {
        name: "Maria Rodriguez",
        role: "Family Caregiver",
        age: 52,
        education: "Some College",
        status: "Married",
        occupation: "Family Caregiver",
        location: "San Jose, California",
        techLiterate: "Low-Medium",
        quote: "I love my mother, but some days I feel like I'm fighting the insurance company more than I'm actually caring for her. The system makes it so hard to do what I know is right. I just want to help her live with dignity - why does that have to be so complicated?",
        bio: "Maria is a dedicated and compassionate caregiver with five years of hands-on experience providing comprehensive in-home care for her mother diagnosed with Alzheimer. Her role encompasses a full range of caregiving responsibilities, including assistance with daily living activities, medical care management, and meaningful companionship. She is paid for services through Medicaid. Maria is bilingual (English/Spanish) and lives in the San Jose area.",
        coreNeeds: [
            "Provide high-quality, dignified care that allows her mom to age at home safely",
            "Have clear, accessible care plans and medical information",
            "Reliable communication channel with nurses and doctors"
        ],
        frustrations: [
            "Limited access to mom's medical records and care plans",
            "Spending hours on hold with insurance companies instead of caring for patients",
            "Denied claims for services that were pre-authorized"
        ],
        personality: ["Extrovert", "Compassionate", "Resourceful", "Patient"],
        brands: ["Uno", "Las Estrellas", "Facebook", "YouTube", "Instagram"],
        paymentMedium: ["Cash/Cheque", "Digital Payment"],
        platform: ["Website", "Mobile App"],
        aiFluency: "Avoidant",
        aiFluencyLevel: 0
    },
    tammy: {
        name: "Tammy Caisco",
        role: "Retired",
        age: 65,
        education: "Bachelors in Engineering",
        status: "Married",
        occupation: "Retired",
        location: "Manteca CA",
        techLiterate: "High",
        quote: "We travel all over the country in our RV, so we need insurance that works wherever we go. Medicare is confusing with all its parts - I just want to understand what I'm getting.",
        bio: "Tammy and her Husband Jae have worked for Lawrence Livermore Lab for about 30 years. Although Tammy had to go on disability – workman's comp for the last 8 years due to some neck injuries. Jae is 5 years older than her and has been retired for 2 years. They have a lovely home in Manteca CA but really wouldn't stay in CA if it weren't for their grandchildren. They travel in their RV all over the country and take cruise trips on their free time. Tammy's mom has passed but Dad and brother live in Pennsylvania. Jae and Tammy are big on choice and were not happy that at 65 they had to take Medicare no matter what. They are having to pay about 100 more per person for their insurance on Medicare due to their income. Tammy was on Jae's employer insurance but now is forced to take Medicare. Both were in the Airforce prior to working.",
        coreNeeds: [
            "She wants a good insurance that will help her with her neck issues.",
            "They travel so they want their insurance to be covered anywhere they go.",
            "She needs to enroll in Medicare, Part A is for hospital, part B is for doctors office visits and Part D is for medication."
        ],
        frustrations: [
            "Tammy does not want to go back to Kaiser as they messed up on some surgery.",
            "She is frustrated at all the parts to Medicare and not sure what is what or where to get info.",
            "She'll have to pay $284 she thinks per her income, filing taxes separately. This is 150 more than what she had been paying."
        ],
        personality: ["Traveler", "Independent", "Family-oriented", "Value-conscious"],
        brands: ["Facebook", "HGTV", "Amazon", "DSW"],
        paymentMedium: ["Cash", "Credit", "Digital"],
        platform: ["Website", "Mobile App", "Smartwatch"],
        aiFluency: "Casual",
        aiFluencyLevel: 1
    }
};

// AI Fluency levels
const aiFluencyLevels = ["Avoidant", "Casual", "Comfortable", "Explorer", "Integrated"];

// Persona image mapping
const personaImages = {
    steve: "lendal.png",
    "leo-maya": "torres.png",
    emily: "watson.png",
    maria: "rodriquez.png",
    tammy: "caisco.png"
};

// Get modal elements
const modal = document.getElementById('personaModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Add event listeners to select buttons
document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const personaKey = e.target.getAttribute('data-persona');
        showPersonaDetails(personaKey);
    });
});

// Add click listeners to persona cards
document.querySelectorAll('.persona-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking the button
        if (e.target.classList.contains('select-btn')) return;
        const personaKey = card.getAttribute('data-persona');
        showPersonaDetails(personaKey);
    });
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});

// Deal cards animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.persona-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
});

function showPersonaDetails(personaKey) {
    const persona = personas[personaKey];
    
    let html = `
        <div class="modal-header">
            <div class="modal-header-content">
                <img src="images/${personaImages[personaKey]}" alt="${persona.name}" class="modal-persona-photo">
                <div class="modal-header-text">
                    <h2>${persona.name}</h2>
                    <p class="persona-role">${persona.role}</p>
                </div>
            </div>
        </div>

        <div class="quote-bubble">
            <p>"${persona.quote}"</p>
        </div>

        <div class="modal-section">
            <h3>Demographics</h3>
            <div class="persona-details">
                <div class="detail-row">
                    <span class="label">Age:</span>
                    <span class="value">${persona.age}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Education:</span>
                    <span class="value">${persona.education}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Status:</span>
                    <span class="value">${persona.status}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Occupation:</span>
                    <span class="value">${persona.occupation}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Location:</span>
                    <span class="value">${persona.location}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Tech Literate:</span>
                    <span class="value">${persona.techLiterate}</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Bio</h3>
            <p>${persona.bio}</p>
        </div>

        <div class="modal-section">
            <h3>Core Needs</h3>
            <ul>
                ${persona.coreNeeds.map(need => `<li>${need}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Frustrations</h3>
            <ul>
                ${persona.frustrations.map(frustration => `<li>${frustration}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Personality</h3>
            <div class="persona-tags">
                ${persona.personality.map(trait => `<span class="tag">${trait}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Brands</h3>
            <div class="brands-section">
                ${persona.brands.map(brand => `<span class="brand-item">${brand}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Payment Medium</h3>
            <div class="payment-section">
                ${persona.paymentMedium.map(payment => `<span class="payment-item">${payment}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Platform</h3>
            <div class="platform-section">
                ${persona.platform.map(platform => `<span class="platform-item">${platform}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>AI Fluency</h3>
            <div class="ai-fluency">
                <div class="fluency-scale">
                    ${aiFluencyLevels.map((level, index) => {
                        const isActive = index === persona.aiFluencyLevel;
                        return `
                            <div class="fluency-point ${isActive ? 'active' : ''}" style="position: relative;">
                                ${level}
                                ${isActive ? '<div class="fluency-indicator"></div>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.classList.add('show');
}

