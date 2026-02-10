// Typing effect - remove cursor after animation
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    setTimeout(() => {
      typingText.classList.add("typing-done");
    }, 2800); // After typing animation completes
  }
});

// --- Dark Mode Toggle ---
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle theme
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      // Save preference
      const theme = body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }
});

// --- Scroll Progress Indicator ---
window.addEventListener("scroll", function () {
  const scrollProgress = document.getElementById("scrollProgress");
  if (scrollProgress) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    const scrollPercentage =
      (scrollTop / (documentHeight - windowHeight)) * 100;
    scrollProgress.style.width = scrollPercentage + "%";
  }
});

// Active section highlighting in navbar
window.addEventListener("scroll", function () {
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
    const href = link.getAttribute("href");
    // Check if href matches current section or if we're on a different page, highlight based on page
    if (
      href === `#${current}` ||
      (current === "skills" && href === "skills.html")
    ) {
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

// --- Interactive Dashboard with Chart.js ---
let currentChart = null;

const chartData = {
  bar: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($K)",
        data: [32, 45, 38, 52, 48, 61],
        backgroundColor: "rgba(37, 99, 235, 0.8)",
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  },
  line: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth Rate (%)",
        data: [5, 12, 8, 18, 15, 22],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  pie: {
    labels: ["Electronics", "Clothing", "Home & Garden", "Sports", "Books"],
    datasets: [
      {
        label: "Product Mix",
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          "rgba(37, 99, 235, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(239, 68, 68, 0.8)",
          "rgba(139, 92, 246, 0.8)",
        ],
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  },
};

function initChart(type = "bar") {
  const ctx = document.getElementById("dataChart");
  if (!ctx) return;

  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx, {
    type: type,
    data: chartData[type],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            font: {
              family: "'Space Grotesk', sans-serif",
              size: 12,
              weight: "600",
            },
          },
        },
      },
      scales:
        type !== "pie"
          ? {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                  font: {
                    family: "'Inter', sans-serif",
                  },
                },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    family: "'Inter', sans-serif",
                  },
                },
              },
            }
          : {},
    },
  });
}

// Initialize chart on page load
document.addEventListener("DOMContentLoaded", () => {
  initChart("bar");

  // Chart type selector
  const chartSelector = document.getElementById("chartType");
  if (chartSelector) {
    chartSelector.addEventListener("change", (e) => {
      initChart(e.target.value);
    });
  }
});

// --- Learning Timeline Animation ---
document.addEventListener("DOMContentLoaded", () => {
  const learningItems = document.querySelectorAll(".learning-item");

  const learningObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("aos-animate");
          }, index * 150); // Stagger animation
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  learningItems.forEach((item) => {
    learningObserver.observe(item);
  });
});
// --- Counter Animation for Stats ---
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let hasAnimated = false;

  const animateCounter = (element, target) => {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.ceil(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + "+";
      }
    };

    updateCounter();
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute("data-target"));
            animateCounter(stat, target);
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  const statsContainer = document.querySelector(".stats-container");
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }
});

// --- Scroll to Top Button ---
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  // Scroll to top on click
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// --- Keyboard Shortcuts ---
document.addEventListener("DOMContentLoaded", () => {
  const shortcutsHelper = document.getElementById("shortcutsHelper");
  let shortcutsVisible = false;

  // Toggle shortcuts helper with '?' key
  document.addEventListener("keydown", (e) => {
    // Ignore if user is typing in an input/textarea
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    switch (e.key.toLowerCase()) {
      case "h":
        e.preventDefault();
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        break;
      case "s":
        e.preventDefault();
        document
          .getElementById("skills")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "p":
        e.preventDefault();
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "c":
        e.preventDefault();
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "d":
        e.preventDefault();
        // Trigger dark mode toggle
        document.getElementById("darkModeToggle").click();
        break;
      case "?":
        e.preventDefault();
        shortcutsVisible = !shortcutsVisible;
        if (shortcutsVisible) {
          shortcutsHelper.classList.add("visible");
        } else {
          shortcutsHelper.classList.remove("visible");
        }
        break;
      case "escape":
        e.preventDefault();
        shortcutsHelper.classList.remove("visible");
        shortcutsVisible = false;
        // Close any open modals
        const openModal = document.querySelector(".project-modal.active");
        if (openModal) {
          openModal.classList.remove("active");
        }
        break;
    }
  });

  // Hide shortcuts on click outside
  document.addEventListener("click", (e) => {
    if (!shortcutsHelper.contains(e.target) && shortcutsVisible) {
      shortcutsHelper.classList.remove("visible");
      shortcutsVisible = false;
    }
  });
});

// --- Copy to Clipboard Notification ---
function showCopyNotification(message) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById("copyNotification");
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "copyNotification";
    notification.className = "copy-notification";
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Make email clickable with copy functionality
document.addEventListener("DOMContentLoaded", () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const email = link.href.replace("mailto:", "");
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showCopyNotification("Email copied to clipboard!");
        })
        .catch(() => {
          console.log("Copy failed, opening email client...");
        });
    });
  });
});
