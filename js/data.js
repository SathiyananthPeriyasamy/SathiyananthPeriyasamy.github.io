/**
 * Sathiyananth Periyasamy - Cloud & DevOps Portfolio Data
 */
const portfolioData = {
  profile: {
    name: "Sathiyananth Periyasamy",
    title: "Cloud & DevOps Engineer",
    subtitle: "Cloud Architect // DevOps Engineer // Linux Enthusiast",
    status: "Available for Cloud, DevOps, Linux & IT Infra Roles",
    phone: "+91 6383035708",
    email: "sathiyananthp@gmail.com",
    linkedin: "https://www.linkedin.com/in/sathiyananthp",
    github: "https://github.com/SathiyananthPeriyasamy/SathiyananthPeriyasamy.github.io",
    instagram: "https://www.instagram.com/iamsathiyananth?stkn=YWJpdzdhOXRneWZ3",
    location: "Tamil Nadu, India",
    summary: `Results-driven DevOps Engineer with hands-on experience building and maintaining CI/CD pipelines, automating infrastructure provisioning, and deploying secure, scalable, and highly available systems on AWS. Proficient in Jenkins, Docker, Kubernetes, Ansible, Terraform, Bash, and Python, with a strong focus on infrastructure automation, system reliability, and delivery optimization. A self-starter who takes ownership end-to-end—from pipeline design to production monitoring and troubleshooting.`
  },

  stats: [
    { label: "Cloud Provider", value: "AWS", sub: "VPC, EC2, RDS, ALB, Lambda" },
    { label: "Target Availability", value: "99.9%", sub: "Multi-AZ Auto-Scaling" },
    { label: "Automation", value: "100%", sub: "Terraform, Ansible, Jenkins" },
    { label: "Engineering Degree", value: "8.68 CGPA", sub: "Kongunadu College of Eng." }
  ],

  skills: [
    {
      category: "Cloud Platform (AWS)",
      icon: "cloud",
      items: [
        "Amazon EC2",
        "VPC & Subnets",
        "IAM & Security Groups",
        "Amazon S3",
        "ALB / ELB",
        "Auto Scaling (ASG)",
        "Amazon RDS",
        "AWS CloudWatch",
        "AWS SNS & SQS",
        "AWS Lambda"
      ]
    },
    {
      category: "CI/CD & DevSecOps",
      icon: "git-branch",
      items: [
        "Jenkins",
        "GitHub Actions",
        "SonarQube (SAST)",
        "GitHub Webhooks",
        "Maven",
        "Git & GitHub"
      ]
    },
    {
      category: "Containers & Orchestration",
      icon: "box",
      items: [
        "Docker",
        "Docker Compose",
        "Kubernetes (k8s)",
        "Nginx Reverse Proxy"
      ]
    },
    {
      category: "Infrastructure as Code (IaC)",
      icon: "code",
      items: [
        "Terraform",
        "Ansible"
      ]
    },
    {
      category: "Linux & Networking",
      icon: "terminal",
      items: [
        "Linux Administration",
        "Ubuntu & Amazon Linux",
        "DNS & TCP/IP",
        "Load Balancers & SSH"
      ]
    },
    {
      category: "Scripting & Languages",
      icon: "file-code",
      items: [
        "Bash / Shell Scripting",
        "Python"
      ]
    }
  ],

  projects: [
    {
      id: "netflix-devsecops",
      title: "Netflix Full-Stack & DevSecOps CI/CD Pipeline",
      type: "DEVSECOPS & CLOUD ARCHITECTURE",
      period: "2026",
      github: "https://github.com/SathiyananthPeriyasamy/Netflix-clone-project",
      techStack: ["AWS EC2", "Jenkins CI/CD", "SonarQube SAST", "Docker & Compose", "Nginx", "React 18", "Node.js Express", "MongoDB", "GitHub Actions", "Smoke Testing"],
      summary: "Engineered a production-grade Netflix full-stack application on AWS EC2 featuring multi-stage Docker containerization, SonarQube SAST code quality gates, Nginx reverse proxying, and dual CI/CD pipelines running Jenkins and GitHub Actions.",
      bullets: [
        "Architected an automated dual CI/CD pipeline leveraging Jenkins and GitHub Actions with GitHub Webhook integration for instant build triggers upon code commit.",
        "Integrated SonarQube SAST Server and SonarScanner for static application security testing and automated Quality Gate enforcement prior to deployment.",
        "Built multi-stage Dockerfiles optimizing frontend (Vite/React to Nginx) and backend (Node.js Alpine) images, orchestrating MongoDB, Express API, and Nginx with Docker Compose.",
        "Implemented post-deployment automated smoke testing via curl HTTP health checks against production endpoints to guarantee zero-downtime releases on AWS EC2."
      ],
      steps: [
        { step: "01", title: "Git Push & Webhook", desc: "Developer commits code to GitHub, sending instant webhook payloads to Jenkins and GitHub Actions." },
        { step: "02", title: "SonarQube SAST Gate", desc: "SonarScanner inspects source code for security vulnerabilities, bugs, and enforces Quality Gate PASS status." },
        { step: "03", title: "Docker Containerize", desc: "Jenkins builds lightweight multi-stage Docker images with no-cache flag and pushes to Docker Hub registry." },
        { step: "04", title: "AWS EC2 SSH Deploy", desc: "SSHs into production AWS EC2 instance, prunes old cache, pulls fresh images, and restarts stack via Docker Compose." },
        { step: "05", title: "Live Smoke Testing", desc: "Executes automated HTTP curl health checks on HTTP :80 UI and Express /api/health before completing build." }
      ]
    },
    {
      id: "3-tier-web",
      title: "Highly Available 3-Tier Web Architecture",
      type: "CLOUD INFRASTRUCTURE",
      period: "2026",
      techStack: ["AWS VPC", "EC2", "ALB", "Auto Scaling", "RDS Private Subnet", "NAT Gateway", "Python Flask", "MySQL", "CloudWatch", "SNS", "Bash"],
      summary: "Architected a production-ready, auto-scaling 3-tier web application infrastructure on AWS with automated server provisioning, multi-subnet isolation, and proactive CloudWatch monitoring.",
      bullets: [
        "Architected a highly available, auto-scaling 3-tier AWS infrastructure using custom VPCs, Public/Private Subnets, and Application Load Balancers.",
        "Automated server provisioning with custom Bash scripts and secured Amazon RDS databases in private subnets with restricted security group ingress.",
        "Implemented AWS CloudWatch metrics and SNS notifications for real-time application health monitoring, automated failover, and production troubleshooting."
      ],
      diagram: [
        { tier: "Tier 1: Presentation Tier", detail: "Internet Gateway -> Application Load Balancers (ALB) -> Public Subnets with Bastion Host & Security Groups." },
        { tier: "Tier 2: Application Tier", detail: "Private Subnets -> Auto-Scaling Group (ASG) of EC2 Instances running Python Flask API servers with NAT Gateway egress." },
        { tier: "Tier 3: Database Tier", detail: "Isolated Database Subnets -> Multi-AZ Amazon RDS (MySQL) with automated backups and encrypted volume storage." }
      ]
    },
    {
      id: "cicd-pipeline",
      title: "Automated CI/CD Pipeline Architecture",
      type: "DEVOPS & PIPELINE AUTOMATION",
      period: "2026",
      techStack: ["AWS EC2", "Ansible", "Jenkins", "Docker", "Tomcat", "Maven", "Java", "Git", "GitHub Webhooks", "Bash"],
      summary: "Engineered a zero-touch, event-driven CI/CD pipeline that automates infrastructure configuration via Ansible and delivers containerized Java web apps via Jenkins and Docker.",
      bullets: [
        "Automated AWS EC2 instance configuration and infrastructure provisioning using Ansible playbooks as Infrastructure as Code (IaC).",
        "Engineered an end-to-end Jenkins CI/CD pipeline triggered automatically via GitHub Webhooks upon code commits.",
        "Streamlined application delivery by automating Maven project compilation, automated testing, and Docker containerization for instant deployment."
      ],
      steps: [
        { step: "01", title: "Git Push", desc: "Developer pushes code changes to GitHub repository." },
        { step: "02", title: "Webhook Trigger", desc: "GitHub Webhook sends HTTP POST payload to Jenkins server." },
        { step: "03", title: "Build & Test", desc: "Jenkins triggers Maven to compile Java source code and run unit tests." },
        { step: "04", title: "Dockerize", desc: "Jenkins builds Docker image, tags version, and publishes container image." },
        { step: "05", title: "Ansible Provision", desc: "Ansible executes IaC playbooks to update EC2 targets & security rules." },
        { step: "06", title: "Deploy & Monitor", desc: "Docker container deploys to production EC2 instances with health checks." }
      ]
    }
  ],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Kongunadu College of Engineering and Technology",
      period: "June 2019 – April 2023",
      score: "CGPA: 8.68 / 10",
      highlight: "Graduated with First Class Distinction, specializing in Computer Science, Distributed Systems, and Operating Systems."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Jeivikass Educational Institution",
      period: "June 2018 – April 2019",
      score: "Percentage: 71.6%",
      highlight: "Major in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Leaving Certificate (10th Grade)",
      institution: "Jeivikass Educational Institution",
      period: "June 2016 – April 2017",
      score: "Percentage: 82.8%",
      highlight: "Completed SSLC secondary education with 82.8% aggregate score."
    }
  ],

  certifications: [
    {
      title: "AWS DevOps Training Program",
      issuer: "SLA Institute",
      date: "May 2026",
      grade: "Grade 'A'",
      badge: "AWS DEVOPS PROFESSIONAL",
      desc: "Comprehensive hands-on mastery in AWS Cloud infrastructure, CI/CD pipeline automation, Docker, Kubernetes, Terraform, and Ansible."
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Udemy",
      date: "Feb 2026",
      grade: "Completed",
      badge: "AWS CLOUD PRACTITIONER",
      desc: "Validated fundamental understanding of AWS Cloud concepts, security, compliance, architecture, billing, and core cloud services."
    }
  ]
};
