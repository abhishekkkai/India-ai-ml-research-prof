/**
 * Indian AI Professors Database - Application Logic
 * Requires data.js to be loaded before this script.
 */

// ============================================================================
// 1. STATE MANAGEMENT
// ============================================================================
const AppState = {
    professors: [],
    filteredProfessors: [],
    filters: {
        search: '',
        institute: '',
        domain: '',
        difficulty: '',
        internship: '',
        designation: ''
    },
    viewMode: 'cards', // 'cards' or 'table'
    activeTab: 'tab-all',
    sortConfig: {
        key: 'name',
        direction: 'asc'
    }
};

// ============================================================================
// 2. DOM ELEMENTS
// ============================================================================
const DOM = {
    // Inputs
    searchInput: document.getElementById('global-search'),
    filterInstitute: document.getElementById('filter-institute'),
    filterDomain: document.getElementById('filter-domain'),
    filterDifficulty: document.getElementById('filter-difficulty'),
    filterInternship: document.getElementById('filter-internship'),
    filterDesignation: document.getElementById('filter-designation'),
    
    // Toggles & Displays
    countDisplay: document.getElementById('count-display'),
    viewCardsBtn: document.getElementById('view-cards'),
    viewTableBtn: document.getElementById('view-table'),
    cardsContainer: document.getElementById('view-container-cards'),
    tableContainer: document.getElementById('view-container-table'),
    tableBody: document.querySelector('#professors-table tbody'),
    tableHeaders: document.querySelectorAll('#professors-table th[data-sort]'),
    
    // Tabs
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Exports
    btnExportCsv: document.getElementById('btn-export-csv'),
    btnExportJson: document.getElementById('btn-export-json'),
    
    // Modal
    modal: document.getElementById('detail-modal'),
    modalBody: document.getElementById('modal-body-content'),
    modalClose: document.querySelector('.modal-close'),
    
    // Specific Tab Containers
    domainsContainer: document.getElementById('domains-container'),
    top100Container: document.getElementById('top100-container'),
    roadmapsContainer: document.getElementById('roadmaps-container'),
    templateList: document.getElementById('template-list'),
    templateTitle: document.getElementById('template-title'),
    templateContent: document.getElementById('template-content'),
    btnCopyTemplate: document.getElementById('btn-copy-template')
};

// ============================================================================
// 3. EMAIL TEMPLATES CONFIGURATION
// ============================================================================
const EMAIL_TEMPLATES = [
    {
        id: 'cold-research',
        name: 'Cold Email for Research Internship',
        subject: 'Prospective Research Intern: [Your Name] - [Your University/Year]',
        body: `Dear Prof. [Professor's Last Name],

I am [Your Name], a [Your Year]-year [Your Major] student at [Your University], writing to express my strong interest in your research on [Specific Topic/Paper they wrote].

I recently read your paper "[Title of their paper]" and was particularly fascinated by [specific detail or methodology from paper]. In my own projects, I have explored similar themes, notably when I [briefly mention 1 relevant project/achievement].

Given your lab's focus on [Domain/Area], I would be thrilled to contribute as a research intern this upcoming [Summer/Semester]. I am proficient in [Relevant Skills] and am eager to apply them to your ongoing work.

I have attached my resume and transcript for your review. Would you be open to a brief chat next week to discuss potential opportunities?

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Link to Portfolio/GitHub]
[Your Phone Number]`
    },
    {
        id: 'phd-inquiry',
        name: 'PhD Opportunity Inquiry',
        subject: 'Prospective PhD Student (Fall 202X): [Your Name]',
        body: `Dear Prof. [Professor's Last Name],

I hope this email finds you well. My name is [Your Name], and I am currently completing my [Master's/Bachelor's] at [Your University]. I am planning to apply for the PhD program at [Their Institute] for Fall 202X and am very interested in joining your lab.

My background is in [Your Field], and my previous research has focused on [Your Research Area]. I was particularly inspired by your recent work on [Topic], which aligns perfectly with my research goals of [Your Goals]. 

I have attached my CV, which details my publications and projects. Are you currently accepting new PhD students for the upcoming cycle? If so, I would be grateful for the opportunity to briefly discuss how my background might fit into your lab's future projects.

Thank you for your time.

Sincerely,
[Your Name]
[Link to Google Scholar/Website]`
    },
    {
        id: 'follow-up',
        name: 'Follow-up Email (After 1-2 weeks)',
        subject: 'Re: [Original Subject Line]',
        body: `Dear Prof. [Professor's Last Name],

I hope you are having a productive week. I am following up on my previous email regarding [reason for emailing, e.g., summer research opportunities].

I know this is a busy time of the semester, so I wanted to briefly reiterate my strong interest in your work on [Topic]. I remain very excited about the possibility of contributing to your lab.

Thank you again for your time and consideration. I look forward to hearing from you.

Best regards,
[Your Name]`
    },
    {
        id: 'linkedin-connect',
        name: 'LinkedIn Connection Note',
        subject: '',
        body: `Dear Prof. [Last Name],
I am a [Year] student at [University]. I deeply admire your work on [Topic/Paper]. I am currently exploring [Related Topic] and would love to connect with you and follow your future research updates.`
    }
];

// ============================================================================
// 4. MOCK DATA FALLBACK (If data.js is missing/empty)
// ============================================================================
function ensureDataExists() {
    if (typeof window.PROFESSORS_DATA === 'undefined') {
        console.warn('data.js not loaded or missing PROFESSORS_DATA. Using fallback mock data.');
        window.PROFESSORS_DATA = generateMockProfessors(50);
    }
    if (typeof window.DOMAINS === 'undefined') {
        window.DOMAINS = {
            "Computer Vision": { color: "#3b82f6", icon: "fa-eye" },
            "Natural Language Processing": { color: "#10b981", icon: "fa-language" },
            "Reinforcement Learning": { color: "#f59e0b", icon: "fa-robot" },
            "Data Mining": { color: "#8b5cf6", icon: "fa-database" },
            "Core ML/Theory": { color: "#ef4444", icon: "fa-brain" }
        };
    }
    if (typeof window.DOMAIN_ROADMAPS === 'undefined') {
        window.DOMAIN_ROADMAPS = [
            {
                domain: "Computer Vision",
                description: "Teach machines to understand visual data.",
                steps: [
                    "Mathematics (Linear Algebra, Calculus)",
                    "Basic Image Processing (OpenCV)",
                    "Deep Learning Basics (PyTorch/TF)",
                    "CNNs & Architectures (ResNet, YOLO)",
                    "Advanced (Transformers, Diffusion Models)"
                ]
            }
        ];
    }
}

function generateMockProfessors(count) {
    const institutes = ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIIT Hyderabad", "IISc Bangalore"];
    const domains = ["Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Data Mining", "Core ML/Theory"];
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    const yesNo = ["Yes", "No"];
    const designations = ["Assistant Professor", "Associate Professor", "Professor"];
    
    let data = [];
    for(let i=1; i<=count; i++) {
        let domainSelect = domains[Math.floor(Math.random() * domains.length)];
        data.push({
            id: 'prof_' + i,
            name: 'Dr. AI Researcher ' + i,
            institute: institutes[Math.floor(Math.random() * institutes.length)],
            department: "Computer Science",
            designation: designations[Math.floor(Math.random() * designations.length)],
            profile_url: "#",
            lab_website: "#",
            google_scholar: "#",
            dblp: "#",
            github: "#",
            email: `prof${i}@institute.ac.in`,
            research_interests: [domainSelect, "Deep Learning", "AI Safety"].slice(0, Math.floor(Math.random()*3)+1),
            research_keywords: "neural networks, optimization, ai",
            difficulty_level: difficulties[Math.floor(Math.random() * difficulties.length)],
            internship_friendly: yesNo[Math.floor(Math.random() * yesNo.length)],
            domain_cluster: [domainSelect],
            research_explanation: {
                problem: "Making AI models robust and interpretable.",
                why_matters: "Critical for deployment in healthcare and autonomous systems.",
                applications: "Medical imaging, self-driving cars.",
                learning_time: "6-8 months"
            },
            roadmap: {
                skills: "Python, PyTorch, Linear Algebra",
                books: "Deep Learning by Goodfellow",
                papers: "ResNet, Attention is All You Need"
            }
        });
    }
    return data;
}

// ============================================================================
// 5. INITIALIZATION
// ============================================================================
function init() {
    ensureDataExists();
    // Normalize data: convert boolean internship_friendly to "Yes"/"No" strings
    window.PROFESSORS_DATA.forEach(p => {
        if (typeof p.internship_friendly === 'boolean') {
            p.internship_friendly = p.internship_friendly ? 'Yes' : 'No';
        }
        // Ensure research_interests is always an array
        if (!Array.isArray(p.research_interests)) {
            p.research_interests = p.research_interests ? [p.research_interests] : ['Machine Learning'];
        }
        // Ensure domain_cluster is always an array
        if (!Array.isArray(p.domain_cluster)) {
            p.domain_cluster = p.domain_cluster ? [p.domain_cluster] : ['Machine Learning'];
        }
    });
    AppState.professors = [...window.PROFESSORS_DATA];
    AppState.filteredProfessors = [...AppState.professors];
    
    populateFilters();
    attachEventListeners();
    
    // Initial Renders
    updateView();
    renderTabContent();
    renderEmailTemplates();
}

// ============================================================================
// 6. EVENT LISTENERS
// ============================================================================
function attachEventListeners() {
    // Search input with debounce
    DOM.searchInput.addEventListener('input', debounce((e) => {
        AppState.filters.search = e.target.value.toLowerCase();
        applyFilters();
    }, 300));
    
    // Dropdown filters
    [DOM.filterInstitute, DOM.filterDomain, DOM.filterDifficulty, DOM.filterInternship, DOM.filterDesignation].forEach(select => {
        select.addEventListener('change', (e) => {
            const filterKey = e.target.id.replace('filter-', '');
            AppState.filters[filterKey] = e.target.value;
            applyFilters();
        });
    });
    
    // View Toggles
    DOM.viewCardsBtn.addEventListener('click', () => setViewMode('cards'));
    DOM.viewTableBtn.addEventListener('click', () => setViewMode('table'));
    
    // Tabs
    DOM.tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            DOM.tabBtns.forEach(b => b.classList.remove('active'));
            DOM.tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add to clicked
            const target = e.target.dataset.target;
            e.target.classList.add('active');
            document.getElementById(target).classList.add('active');
            AppState.activeTab = target;
            
            // Re-render if necessary
            renderTabContent();
        });
    });
    
    // Table Sorting
    DOM.tableHeaders.forEach(th => {
        th.addEventListener('click', () => {
            const sortKey = th.dataset.sort;
            if (AppState.sortConfig.key === sortKey) {
                AppState.sortConfig.direction = AppState.sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                AppState.sortConfig.key = sortKey;
                AppState.sortConfig.direction = 'asc';
            }
            sortData();
            updateView();
        });
    });
    
    // Exports
    DOM.btnExportCsv.addEventListener('click', exportToCSV);
    DOM.btnExportJson.addEventListener('click', exportToJSON);
    
    // Modal Close
    DOM.modalClose.addEventListener('click', closeModal);
    DOM.modal.addEventListener('click', (e) => {
        if (e.target === DOM.modal) closeModal();
    });
    
    // Copy Template
    DOM.btnCopyTemplate.addEventListener('click', () => {
        const text = DOM.templateContent.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = DOM.btnCopyTemplate.innerHTML;
            DOM.btnCopyTemplate.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
                DOM.btnCopyTemplate.innerHTML = originalText;
            }, 2000);
        });
    });
}

// ============================================================================
// 7. FILTERING & SORTING LOGIC
// ============================================================================
function populateFilters() {
    const institutes = new Set();
    const domains = new Set();
    const designations = new Set();
    
    AppState.professors.forEach(p => {
        if (p.institute) institutes.add(p.institute);
        if (p.designation) designations.add(p.designation);
        if (p.domain_cluster && Array.isArray(p.domain_cluster)) {
            p.domain_cluster.forEach(d => domains.add(d));
        }
    });
    
    populateSelect(DOM.filterInstitute, Array.from(institutes).sort());
    populateSelect(DOM.filterDomain, Array.from(domains).sort());
    populateSelect(DOM.filterDesignation, Array.from(designations).sort());
}

function populateSelect(selectEl, optionsArray) {
    optionsArray.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        selectEl.appendChild(option);
    });
}

function applyFilters() {
    const { search, institute, domain, difficulty, internship, designation } = AppState.filters;
    
    AppState.filteredProfessors = AppState.professors.filter(p => {
        // Search Match
        let matchSearch = true;
        if (search) {
            const searchableText = [
                p.name,
                p.institute,
                p.department,
                p.research_keywords,
                ...(p.research_interests || [])
            ].join(' ').toLowerCase();
            matchSearch = searchableText.includes(search);
        }
        
        // Dropdown Matches
        const matchInstitute = institute ? p.institute === institute : true;
        const matchDesignation = designation ? p.designation === designation : true;
        const matchDifficulty = difficulty ? p.difficulty_level === difficulty : true;
        const matchInternship = internship ? p.internship_friendly === internship : true;
        
        const matchDomain = domain ? (p.domain_cluster && p.domain_cluster.includes(domain)) : true;
        
        return matchSearch && matchInstitute && matchDomain && matchDifficulty && matchInternship && matchDesignation;
    });
    
    sortData();
    updateView();
}

function sortData() {
    const { key, direction } = AppState.sortConfig;
    const modifier = direction === 'asc' ? 1 : -1;
    
    AppState.filteredProfessors.sort((a, b) => {
        let valA = a[key] || '';
        let valB = b[key] || '';
        
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        
        if (valA < valB) return -1 * modifier;
        if (valA > valB) return 1 * modifier;
        return 0;
    });
}

// ============================================================================
// 8. RENDERING LOGIC
// ============================================================================
function setViewMode(mode) {
    AppState.viewMode = mode;
    if (mode === 'cards') {
        DOM.viewCardsBtn.classList.add('active');
        DOM.viewTableBtn.classList.remove('active');
        DOM.cardsContainer.classList.remove('hidden');
        DOM.tableContainer.classList.add('hidden');
    } else {
        DOM.viewTableBtn.classList.add('active');
        DOM.viewCardsBtn.classList.remove('active');
        DOM.tableContainer.classList.remove('hidden');
        DOM.cardsContainer.classList.add('hidden');
    }
    updateView();
}

function updateView() {
    DOM.countDisplay.textContent = AppState.filteredProfessors.length;
    
    if (AppState.viewMode === 'cards') {
        renderCards(AppState.filteredProfessors, DOM.cardsContainer);
    } else {
        renderTable(AppState.filteredProfessors);
    }
}

function renderCards(data, container) {
    container.innerHTML = '';
    
    if (data.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">No professors match your criteria.</div>`;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    data.forEach(p => {
        const card = document.createElement('div');
        card.className = 'prof-card glass-panel';
        card.onclick = () => openModal(p);
        
        // Badges HTML
        const diffClass = p.difficulty_level ? `badge-difficulty-${p.difficulty_level.toLowerCase()}` : '';
        const internClass = p.internship_friendly === 'Yes' ? 'badge-internship-yes' : '';
        
        let badgesHtml = '';
        if (p.difficulty_level) badgesHtml += `<span class="badge ${diffClass}">${p.difficulty_level}</span>`;
        if (p.internship_friendly === 'Yes') badgesHtml += `<span class="badge ${internClass}"><i class="fa-solid fa-handshake"></i> Intern Friendly</span>`;
        if (p.domain_cluster && p.domain_cluster[0]) {
            badgesHtml += `<span class="badge badge-domain">${p.domain_cluster[0]}</span>`;
        }
        
        // Tags HTML
        let tagsHtml = '';
        if (p.research_interests && Array.isArray(p.research_interests)) {
            tagsHtml = p.research_interests.slice(0, 3).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('');
            if (p.research_interests.length > 3) tagsHtml += `<span class="tag">+${p.research_interests.length - 3}</span>`;
        }
        
        // Email display
        const emailHtml = (p.email && p.email !== 'Not Publicly Available') 
            ? `<div class="prof-email"><i class="fa-solid fa-envelope"></i> ${escapeHTML(p.email)}</div>` 
            : '';

        card.innerHTML = `
            <div class="card-header">
                <div>
                    <h3 class="prof-name">${escapeHTML(p.name)}</h3>
                    <div class="prof-designation">${escapeHTML(p.designation || 'Professor')}</div>
                </div>
            </div>
            <div class="prof-institute">
                <i class="fa-solid fa-building-columns"></i>
                ${escapeHTML(p.institute)}
            </div>
            ${emailHtml}
            <div class="card-badges">
                ${badgesHtml}
            </div>
            <div class="card-interests">
                ${tagsHtml}
            </div>
        `;
        
        fragment.appendChild(card);
    });
    
    container.appendChild(fragment);
}

function renderTable(data) {
    DOM.tableBody.innerHTML = '';
    
    if (data.length === 0) {
        DOM.tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 2rem;">No results found.</td></tr>`;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    data.forEach(p => {
        const tr = document.createElement('tr');
        
        // Domains string
        const domains = p.domain_cluster ? p.domain_cluster.join(', ') : 'N/A';
        
        // Difficulty Badge
        const diffClass = p.difficulty_level ? `badge-difficulty-${p.difficulty_level.toLowerCase()}` : '';
        const diffHtml = p.difficulty_level ? `<span class="badge ${diffClass}">${p.difficulty_level}</span>` : '-';
        
        tr.innerHTML = `
            <td style="font-weight: 500; color: var(--text-primary);">${escapeHTML(p.name)}</td>
            <td>${escapeHTML(p.institute)}</td>
            <td>${escapeHTML(p.designation || '-')}</td>
            <td>${escapeHTML(domains)}</td>
            <td>${diffHtml}</td>
            <td>
                <button class="btn btn-outline table-action-btn">View Profile</button>
            </td>
        `;
        
        tr.querySelector('button').onclick = () => openModal(p);
        fragment.appendChild(tr);
    });
    
    DOM.tableBody.appendChild(fragment);
}

// ============================================================================
// 9. MODAL LOGIC
// ============================================================================
function openModal(prof) {
    DOM.modalBody.innerHTML = buildModalContent(prof);
    DOM.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    DOM.modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function buildModalContent(p) {
    const isValid = (val) => val && val !== 'Not Publicly Available' && val !== '#';
    
    // Links — only real ones
    const links = [];
    if (isValid(p.email)) links.push(`<a href="mailto:${p.email}" class="social-link"><i class="fa-solid fa-envelope"></i> ${escapeHTML(p.email)}</a>`);
    if (isValid(p.profile_url)) links.push(`<a href="${p.profile_url}" target="_blank" class="social-link"><i class="fa-solid fa-user"></i> Profile</a>`);
    if (isValid(p.google_scholar)) links.push(`<a href="${p.google_scholar}" target="_blank" class="social-link"><i class="fa-brands fa-google-scholar"></i> Google Scholar</a>`);
    if (isValid(p.lab_website)) links.push(`<a href="${p.lab_website}" target="_blank" class="social-link"><i class="fa-solid fa-globe"></i> ${isValid(p.lab_name) ? escapeHTML(p.lab_name) : 'Lab'}</a>`);
    if (isValid(p.dblp)) links.push(`<a href="${p.dblp}" target="_blank" class="social-link"><i class="fa-solid fa-book"></i> DBLP</a>`);
    if (isValid(p.github)) links.push(`<a href="${p.github}" target="_blank" class="social-link"><i class="fa-brands fa-github"></i> GitHub</a>`);
    if (isValid(p.linkedin)) links.push(`<a href="${p.linkedin}" target="_blank" class="social-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`);

    // Research Summary (unique per professor)
    let summaryHtml = '';
    if (p.research_summary) {
        summaryHtml = `
            <div class="detail-section">
                <h3><i class="fa-solid fa-microscope"></i> What They Research</h3>
                <p class="detail-text" style="font-size: 1rem; line-height: 1.7;">${escapeHTML(p.research_summary)}</p>
            </div>
        `;
    } else if (p.research_explanation && p.research_explanation.problem) {
        summaryHtml = `
            <div class="detail-section">
                <h3><i class="fa-solid fa-microscope"></i> What They Research</h3>
                <p class="detail-text" style="font-size: 1rem; line-height: 1.7;">${escapeHTML(p.research_explanation.problem)}</p>
            </div>
        `;
    }

    // Key Papers
    let papersHtml = '';
    if (p.key_papers && p.key_papers.length > 0) {
        const items = p.key_papers.map(paper => `<li style="margin-bottom: 0.5rem;">${escapeHTML(paper)}</li>`).join('');
        papersHtml = `
            <div class="detail-section">
                <h3><i class="fa-solid fa-file-lines"></i> Key Papers to Read</h3>
                <ol class="list-styled" style="padding-left: 1.25rem;">${items}</ol>
            </div>
        `;
    }

    // How to Read Their Research
    let howToReadHtml = '';
    if (p.how_to_read) {
        howToReadHtml = `
            <div class="detail-section" style="background: rgba(96, 165, 250, 0.05); border-radius: 0.75rem; padding: 1.25rem;">
                <h3><i class="fa-solid fa-road"></i> How to Get Into Their Research</h3>
                <p class="detail-text" style="font-size: 0.95rem; line-height: 1.7;">${escapeHTML(p.how_to_read)}</p>
            </div>
        `;
    }

    // Project Based on THEIR Research (unique)
    let projectHtml = '';
    if (p.project_for_you) {
        const proj = p.project_for_you;
        projectHtml = `
            <div class="detail-section" style="background: rgba(16, 185, 129, 0.05); border-radius: 0.75rem; padding: 1.25rem;">
                <h3><i class="fa-solid fa-hammer"></i> Project to Build (Based on Their Research)</h3>
                <h4 style="color: var(--accent-primary); margin-bottom: 0.75rem; font-size: 1.05rem;">${escapeHTML(proj.title || '')}</h4>
                ${proj.description ? `<p class="detail-text" style="line-height: 1.7;">${escapeHTML(proj.description)}</p>` : ''}
                ${proj.tech_stack ? `<p class="detail-text"><strong>Tech Stack:</strong> ${escapeHTML(proj.tech_stack)}</p>` : ''}
            </div>
        `;
    }

    // Research Areas as tags
    let tagsHtml = '';
    if (p.research_interests && p.research_interests.length > 0) {
        tagsHtml = `
            <div class="detail-section">
                <h3><i class="fa-solid fa-tags"></i> Research Areas</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${p.research_interests.map(i => `<span class="tag">${escapeHTML(i)}</span>`).join('')}
                </div>
            </div>
        `;
    }

    return `
        <div class="prof-detail-header">
            <h2>${escapeHTML(p.name)}</h2>
            <div style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 0.5rem;">
                ${escapeHTML(p.designation || 'Professor')} • ${escapeHTML(p.department || 'CS Dept')}
            </div>
            <div style="color: var(--text-primary); font-weight: 500;">
                <i class="fa-solid fa-building-columns" style="color: var(--accent-primary); margin-right: 0.5rem;"></i>
                ${escapeHTML(p.institute)}
            </div>
            <div class="prof-detail-links">
                ${links.join('')}
            </div>
        </div>
        <div class="prof-detail-body" style="display: block;">
            ${summaryHtml}
            ${tagsHtml}
            ${papersHtml}
            ${howToReadHtml}
            ${projectHtml}
        </div>
    `;
}

// ============================================================================
// 10. TABS RENDERING
// ============================================================================
function renderTabContent() {
    if (AppState.activeTab === 'tab-domains') renderDomainsTab();
    if (AppState.activeTab === 'tab-top100') renderTop100Tab();
    if (AppState.activeTab === 'tab-roadmaps') renderRoadmapsTab();
}

function renderDomainsTab() {
    // Group professors by domain
    const domainsMap = {};
    AppState.professors.forEach(p => {
        if (p.domain_cluster) {
            p.domain_cluster.forEach(d => {
                if (!domainsMap[d]) domainsMap[d] = 0;
                domainsMap[d]++;
            });
        }
    });
    
    let html = '';
    for (const [domainName, count] of Object.entries(domainsMap).sort((a,b) => b[1] - a[1])) {
        const meta = window.DOMAINS[domainName] || { icon: 'fa-microchip' };
        html += `
            <div class="domain-card glass-panel">
                <div class="domain-icon"><i class="fa-solid ${meta.icon}"></i></div>
                <h3 style="color: var(--text-primary);">${escapeHTML(domainName)}</h3>
                <div class="domain-count">${count}</div>
                <div style="color: var(--text-secondary); font-size: 0.875rem;">Professors</div>
            </div>
        `;
    }
    DOM.domainsContainer.innerHTML = html;
}

function renderTop100Tab() {
    // Simple mock algorithm to rank: Length of research interests + is intern friendly
    const sorted = [...AppState.professors].sort((a, b) => {
        let scoreA = (a.research_interests ? a.research_interests.length : 0) + (a.internship_friendly === 'Yes' ? 5 : 0);
        let scoreB = (b.research_interests ? b.research_interests.length : 0) + (b.internship_friendly === 'Yes' ? 5 : 0);
        return scoreB - scoreA;
    }).slice(0, 100);
    
    renderCards(sorted, DOM.top100Container);
}

function renderRoadmapsTab() {
    const roadmaps = window.DOMAIN_ROADMAPS;
    if (!roadmaps || (typeof roadmaps === 'object' && Object.keys(roadmaps).length === 0)) {
        DOM.roadmapsContainer.innerHTML = '<div style="padding: 2rem; text-align: center;">No roadmaps available.</div>';
        return;
    }
    
    let html = '';
    // Handle both array format and object format
    const entries = Array.isArray(roadmaps) ? roadmaps : Object.entries(roadmaps).map(([key, val]) => ({domain: key, ...val}));
    
    entries.forEach(rm => {
        // Build timeline from months array
        let timelineHtml = '';
        if (rm.months && Array.isArray(rm.months)) {
            timelineHtml = rm.months.map(m => `
                <div class="roadmap-month">
                    <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem;">Month ${m.month}: ${escapeHTML(m.title)}</h4>
                    <div class="roadmap-topics">${m.topics.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>
                </div>
            `).join('');
        } else if (rm.steps) {
            timelineHtml = rm.steps.map(step => `<div class="step-item">${escapeHTML(step)}</div>`).join('');
        }
        
        // Resources
        const arrayToList = (arr, label) => {
            if (!arr || arr.length === 0) return '';
            const items = (Array.isArray(arr) ? arr : [arr]).map(i => `<li>${escapeHTML(i)}</li>`).join('');
            return `<div style="margin-top: 0.75rem;"><strong style="color: var(--text-secondary);">${label}:</strong><ul class="list-styled">${items}</ul></div>`;
        };
        
        html += `
            <div class="roadmap-card glass-panel">
                <h2 style="color: var(--accent-primary); margin-bottom: 0.5rem;">${escapeHTML(rm.title || rm.domain)} Roadmap</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${escapeHTML(rm.description || '')}</p>
                <div class="roadmap-steps">
                    ${timelineHtml}
                </div>
                ${arrayToList(rm.books, '📚 Books')}
                ${arrayToList(rm.courses, '🎓 Courses')}
                ${arrayToList(rm.repos, '💻 Repos')}
            </div>
        `;
    });
    DOM.roadmapsContainer.innerHTML = html;
}

function renderEmailTemplates() {
    DOM.templateList.innerHTML = '';
    EMAIL_TEMPLATES.forEach((tpl, index) => {
        const li = document.createElement('li');
        li.textContent = tpl.name;
        if (index === 0) li.classList.add('active');
        li.onclick = () => {
            document.querySelectorAll('#template-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            displayTemplate(tpl);
        };
        DOM.templateList.appendChild(li);
    });
    
    // Display first template by default
    if (EMAIL_TEMPLATES.length > 0) {
        displayTemplate(EMAIL_TEMPLATES[0]);
    }
}

function displayTemplate(tpl) {
    DOM.templateTitle.textContent = tpl.name;
    let content = '';
    if (tpl.subject) content += `Subject: ${tpl.subject}\n\n`;
    content += tpl.body;
    DOM.templateContent.textContent = content;
}

// ============================================================================
// 11. EXPORTS
// ============================================================================
function exportToCSV() {
    if (AppState.filteredProfessors.length === 0) {
        alert("No data to export!");
        return;
    }
    
    const headers = ['Name', 'Institute', 'Department', 'Designation', 'Email', 'Difficulty', 'Internship_Friendly', 'Domains'];
    let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
    
    AppState.filteredProfessors.forEach(p => {
        const domains = p.domain_cluster ? p.domain_cluster.join('; ') : '';
        const row = [
            `"${p.name || ''}"`,
            `"${p.institute || ''}"`,
            `"${p.department || ''}"`,
            `"${p.designation || ''}"`,
            `"${p.email || ''}"`,
            `"${p.difficulty_level || ''}"`,
            `"${p.internship_friendly || ''}"`,
            `"${domains}"`
        ];
        csvContent += row.join(",") + "\n";
    });
    
    triggerDownload(csvContent, 'AI_Professors_Export.csv');
}

function exportToJSON() {
    if (AppState.filteredProfessors.length === 0) {
        alert("No data to export!");
        return;
    }
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState.filteredProfessors, null, 2));
    triggerDownload(dataStr, 'AI_Professors_Export.json');
}

function triggerDownload(dataUri, filename) {
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================================================
// 12. UTILITIES
// ============================================================================
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

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Boot the application
document.addEventListener('DOMContentLoaded', init);
