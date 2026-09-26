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
      category: "CI/CD & Automation",
      icon: "git-branch",
      items: [
        "Jenkins",
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
        "Kubernetes (k8s)"
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
