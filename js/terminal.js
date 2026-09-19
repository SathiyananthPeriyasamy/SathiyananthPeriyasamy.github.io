/**
 * Interactive Terminal CLI Widget logic
 */

function initTerminal() {
  const termBody = document.getElementById('terminal-body');
  const termInput = document.getElementById('terminal-input');
  const cmdPills = document.querySelectorAll('.cmd-pill');

  if (!termBody) return;

  const commands = {
    help: `Available commands:
  - <span class="term-highlight">whoami</span>          : Candidate profile overview
  - <span class="term-highlight">skills</span>          : Core AWS & DevOps tech stack
  - <span class="term-highlight">aws-stack</span>        : Specialized AWS services
  - <span class="term-highlight">pipeline</span>         : Automated CI/CD workflow summary
  - <span class="term-highlight">certifications</span>   : AWS Certifications & Degrees
  - <span class="term-highlight">contact</span>          : Email, Phone & LinkedIn links
  - <span class="term-highlight">clear</span>            : Clear terminal output`,

    whoami: `Sathiyananth Periyasamy
Title: Cloud & DevOps Engineer
Summary: Results-driven DevOps Engineer specializing in AWS infrastructure automation, Terraform IaC, Ansible, Jenkins CI/CD, and Docker/Kubernetes container management.
Education: B.E. Computer Science & Engineering (CGPA: 8.68)`,

    skills: `Cloud: AWS (EC2, VPC, IAM, S3, ALB, RDS, Lambda, CloudWatch)
DevOps & CI/CD: Jenkins, Maven, GitHub Webhooks, Git
IaC & Config: Terraform, Ansible
Containers: Docker, Kubernetes
Linux: Ubuntu, Amazon Linux Administration, Bash Shell Scripting
Programming: Bash/Shell, Python`,

    'aws-stack': `AWS Architecture Components:
  [Compute]  : EC2 Auto-Scaling Groups, AWS Lambda
  [Network]  : Custom VPC, Public/Private Subnets, ALB, NAT Gateway, Route 53
  [Storage]  : S3 Buckets, Amazon RDS (Multi-AZ MySQL)
  [Security] : IAM Roles & Policies, Security Groups, NACLs
  [Ops]      : CloudWatch Metrics & Logs, SNS Notifications`,

    pipeline: `CI/CD Execution Stream:
  1. Developer Git Push -> GitHub Repository
  2. GitHub Webhook -> Triggers Jenkins Server
  3. Jenkins Stage 1 -> Maven Build & Unit Test Execution
  4. Jenkins Stage 2 -> Docker Container Image Packaging
  5. Jenkins Stage 3 -> Ansible IaC Execution & Target Server Provisioning
  6. Deployment Stage -> Production Deployment with Zero Downtime`,

    certifications: `[1] AWS DevOps Training Program — Grade "A" (SLA Institute - May 2026)
[2] AWS Certified Cloud Practitioner CLF-C02 (Udemy - Feb 2026)
[3] B.E. Computer Science & Engineering — CGPA: 8.68 (Kongunadu College of Eng.)`,

    contact: `Email    : sathiyananthp@gmail.com
Phone    : +91 6383035708
LinkedIn : https://www.linkedin.com/in/sathiyananth-periyasamy
Location : Tamil Nadu, India`
  };

  function runCommand(cmdText) {
    const cleanCmd = cmdText.trim().toLowerCase();
    
    // Add prompt line
    const promptLine = document.createElement('div');
    promptLine.className = 'term-line';
    promptLine.innerHTML = `<span class="term-prompt">sathiyananth@aws-cloudshell:~$</span> <span class="term-cmd">${cleanCmd}</span>`;
    termBody.appendChild(promptLine);

    if (cleanCmd === 'clear') {
      termBody.innerHTML = '';
      return;
    }

    const outputLine = document.createElement('div');
    outputLine.className = 'term-line term-output';

    if (commands[cleanCmd]) {
      outputLine.innerHTML = commands[cleanCmd].replace(/\n/g, '<br>');
    } else if (cleanCmd === '') {
      outputLine.innerHTML = '';
    } else {
      outputLine.innerHTML = `Command not recognized: '<span class="term-cmd">${cleanCmd}</span>'. Type '<span class="term-highlight">help</span>' for available commands.`;
    }

    termBody.appendChild(outputLine);
    termBody.scrollTop = termBody.scrollHeight;
  }

  // Clickable command pills
  cmdPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      if (cmd) runCommand(cmd);
    });
  });

  // Handle enter key on input if present
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        runCommand(termInput.value);
        termInput.value = '';
      }
    });
  }
}
