/**
 * Main Application JS - Sathiyananth Periyasamy Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  renderProfileInfo();
  renderStats();
  renderSkills();
  renderProjects();
  renderCertificationsAndEdu();
  initNavigation();
  initContactForm();
  if (typeof initTerminal === 'function') initTerminal();
});

/* Render Profile Info */
function renderProfileInfo() {
  const p = portfolioData.profile;
  
  // Set titles and headers
  const heroTitle = document.getElementById('hero-name');
  if (heroTitle) heroTitle.innerHTML = `${p.name}`;
  
  const heroSub = document.getElementById('hero-summary');
  if (heroSub) heroSub.innerText = p.summary;

  const contactEmail = document.getElementById('contact-email-val');
  if (contactEmail) contactEmail.innerHTML = `<a href="mailto:${p.email}">${p.email}</a>`;

  const contactPhone = document.getElementById('contact-phone-val');
  if (contactPhone) contactPhone.innerText = p.phone;

  const contactLinkedin = document.getElementById('contact-linkedin-val');
  if (contactLinkedin) contactLinkedin.innerHTML = `<a href="${p.linkedin}" target="_blank" rel="noopener">linkedin.com/in/sathiyananth-periyasamy</a>`;
}

/* Render Stats */
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(s => `
    <div class="stat-card">
      <div class="stat-val">${s.value}</div>
      <div class="stat-lbl">${s.label}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>
  `).join('');
}

/* Render Skills */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const iconMap = {
    cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19px-11.5 0A5.5 5.5 0 0 1 5.3 8.35A7 7 0 0 1 18.9 7.7a4.5 4.5 0 0 1 3.6 4.3 4.5 4.5 0 0 1-5 7z"/></svg>`,
    'git-branch': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    box: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    'file-code': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`
  };

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-category-card">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${iconMap[cat.icon] || iconMap.cloud}</div>
        <h3 class="skill-cat-title">${cat.category}</h3>
      </div>
      <div class="skill-tags-flex">
        ${cat.items.map(item => `
          <div class="skill-tag">
            <span>${item.name}</span>
            <span class="skill-level-badge">${item.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* Render Projects & Visualizers */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map(proj => {
    let visualizerHTML = '';

    if (proj.diagram) {
      visualizerHTML = `
        <div class="visualizer-container">
          <div class="visualizer-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            ARCHITECTURAL TIERS & SUBNETS
          </div>
          <div class="diagram-tiers-grid">
            ${proj.diagram.map(d => `
              <div class="diagram-tier-card">
                <div class="tier-name">${d.tier}</div>
                <div class="tier-detail">${d.detail}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (proj.steps) {
      visualizerHTML = `
        <div class="visualizer-container">
          <div class="visualizer-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            EVENT-DRIVEN PIPELINE EXECUTION STAGES
          </div>
          <div class="pipeline-steps-grid">
            ${proj.steps.map(s => `
              <div class="pipeline-step-node">
                <div class="step-number">STAGE ${s.step}</div>
                <div class="step-title">${s.title}</div>
                <div class="step-desc">${s.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="project-card">
        <div class="project-header">
          <div>
            <span class="project-type-badge">${proj.type}</span>
            <h3 class="project-title">${proj.title}</h3>
          </div>
          <span style="color: var(--text-faded); font-family: var(--font-mono); font-size: 0.85rem;">${proj.period}</span>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 1.25rem; font-size: 1.05rem;">${proj.summary}</p>
        <div class="project-tech-stack">
          ${proj.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        <ul class="project-bullets">
          ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        ${visualizerHTML}
      </div>
    `;
  }).join('');
}

/* Render Certifications & Education */
function renderCertificationsAndEdu() {
  const certContainer = document.getElementById('certifications-container');
  if (certContainer) {
    certContainer.innerHTML = portfolioData.certifications.map(c => `
      <div class="cert-card">
        <span class="cert-badge">${c.badge}</span>
        <h3 class="cert-title">${c.title}</h3>
        <div class="cert-meta">Issuer: <strong>${c.issuer}</strong> • ${c.date} • <span style="color:var(--emerald-glow)">${c.grade}</span></div>
        <p class="cert-desc">${c.desc}</p>
      </div>
    `).join('');
  }

  const eduContainer = document.getElementById('education-container');
  if (eduContainer) {
    eduContainer.innerHTML = portfolioData.education.map(e => `
      <div class="edu-card">
        <h3 class="edu-degree">${e.degree}</h3>
        <div class="edu-inst">${e.institution}</div>
        <div style="margin-bottom: 0.5rem;"><span class="edu-score">${e.score}</span></div>
        <div style="font-size: 0.85rem; color: var(--text-faded); font-family: var(--font-mono);">${e.period}</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">${e.highlight}</p>
      </div>
    `).join('');
  }
}

/* Init Navigation */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
}

/* Init Contact Form */
function initContactForm() {
  const pills = document.querySelectorAll('.service-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
      form.reset();
    });
  }
}
