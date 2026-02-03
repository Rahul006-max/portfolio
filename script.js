// Typing effect - remove cursor after animation
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    setTimeout(() => {
      typingText.classList.add("typing-done");
    }, 2800); // After typing animation completes
  }
});

// Navbar scroll effect and active section highlighting
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Highlight active section in navbar
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Simple Form Handler (Prevents refresh and shows toast)
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get button and change text temporarily
      const btn = this.querySelector("button");
      const originalText = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      // Simulate network request
      setTimeout(() => {
        showToast();
        this.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1000);
    });
  }
});

function showToast() {
  const toast = document.getElementById("toast");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
// Project Data
const projectsData = [
  {
    title: "Sales Performance Dashboard",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    problem:
      "The company lacked a unified view of sales performance across regions and products. Decision-makers couldn't easily identify trends or underperforming segments.",
    solution:
      "Built an interactive dashboard using Python, Excel, and Power BI. Cleaned and merged data from multiple sources, created key metrics (conversion rates, revenue trends), and automated daily data refresh pipelines.",
    impact: [
      "Reduced reporting time from 3 days to 2 hours with automation",
      "Identified 15% revenue loss in underperforming products",
      "Enabled data-driven decisions leading to 12% increase in quarterly sales",
      "Created self-service dashboard for 50+ stakeholders",
    ],
    techs: ["Python", "Excel", "Power BI"],
  },
  {
    title: "Mood-Based Movie Recommendation System",
    role: "Data Analyst / Developer",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
    problem:
      "Generic movie recommendations didn't account for user mood, leading to poor engagement. Users wanted contextual suggestions based on how they feel.",
    solution:
      "Extracted movie data using TMDb API, designed mood-based tagging logic using sentiment analysis, and built a recommendation engine that matches movies to user moods using collaborative filtering and content-based methods.",
    impact: [
      "Achieved 78% user satisfaction rate in mood-match accuracy",
      "Increased avg. session time by 40% with personalized picks",
      "Processed 50,000+ movies with automated mood classification",
      "Built scalable API serving 1000+ requests/day",
    ],
    techs: ["Python", "SQL", "APIs", "Machine Learning"],
  },
  {
    title: "RAG Pipeline Optimizer",
    role: "Data Engineer",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    problem:
      "Document retrieval systems were slow and inaccurate. Chunking strategies weren't optimized, resulting in poor context retrieval for AI applications.",
    solution:
      "Designed efficient document ingestion pipelines, implemented smart chunking strategies (semantic, fixed, and sliding window), compared vector databases (Pinecone, Weaviate), and optimized retrieval with hybrid search (semantic + keyword).",
    impact: [
      "Improved retrieval accuracy by 35% with optimized chunking",
      "Reduced query latency from 2.1s to 0.4s",
      "Processed 100,000+ documents with 99.2% uptime",
      "Enabled real-time Q&A over company knowledge base",
    ],
    techs: ["Python", "FastAPI", "Vector DB", "React"],
  },
  {
    title: "Food Waste Redistribution Platform",
    role: "Data Engineer / Analyst",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop",
    problem:
      "Food waste from restaurants and events wasn't efficiently redistributed to those in need. Lack of data on supply and demand led to inefficiencies.",
    solution:
      "Designed data flow for tracking food supply from donors and demand from recipients. Built structured datasets for redistribution logic, analyzed patterns for optimal matching, and created efficiency metrics dashboard.",
    impact: [
      "Redistributed 10,000+ meals in first 6 months",
      "Reduced food waste by 60% for participating restaurants",
      "Matched donors to recipients with 85% efficiency",
      "Saved organizations $50,000+ in waste management costs",
    ],
    techs: ["Node.js", "SQL", "APIs", "Data Modeling"],
  },
  {
    title: "BuzzStop – EV Charging Data Platform",
    role: "Data Engineer / Developer",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    problem:
      "EV drivers struggled to find available charging stations. No centralized platform existed for peer-to-peer charger sharing with real-time availability.",
    solution:
      "Built data infrastructure for EV charging station discovery. Designed peer-to-peer charger data models with real-time availability tracking, integrated mapping APIs, and ensured clean data flow and scalability for growing user base.",
    impact: [
      "Onboarded 500+ charging stations in first quarter",
      "Enabled 5,000+ successful charging sessions",
      "Reduced avg. search time from 15min to 2min",
      "Built scalable architecture handling 10,000+ daily requests",
    ],
    techs: ["APIs", "Databases", "Web Tech", "Geospatial Data"],
  },
];

// Open Project Modal
function openProjectModal(index) {
  const project = projectsData[index];
  const modal = document.getElementById("projectModal");

  // Populate modal content
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalSolution").textContent = project.solution;

  // Populate impact list
  const impactList = document.getElementById("modalImpact");
  impactList.innerHTML = "";
  project.impact.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    impactList.appendChild(li);
  });

  // Populate technologies
  const techsContainer = document.getElementById("modalTechs");
  techsContainer.innerHTML = "";
  project.techs.forEach((tech) => {
    const span = document.createElement("span");
    span.className = "tool-tag";
    span.textContent = tech;
    techsContainer.appendChild(span);
  });

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent body scroll
}

// Close Project Modal
function closeProjectModal(event) {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Restore body scroll
}

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px",
};

const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll(".skill-bar-fill");
      fills.forEach((fill) => {
        fill.style.width = fill.style.width; // Trigger animation
      });
    }
  });
}, observerOptions);

// Observe skill bars container
document.addEventListener("DOMContentLoaded", () => {
  const skillBarsContainer = document.querySelector(".skill-bars-container");
  if (skillBarsContainer) {
    skillBarObserver.observe(skillBarsContainer);
  }
});
