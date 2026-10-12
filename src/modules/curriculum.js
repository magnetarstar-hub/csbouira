const curriculum = [
  {
    id: 'l1',
    label: 'Licence 1',
    shortLabel: 'L1',
    title: 'Foundations',
    summary:
      'Maths, programming basics, and how a computer works at the hardware level.',
    priorities:
      'Algo 1 & 2 first, then Analyse 1 & 2 and Structure machine 1 & 2.',
    semesters: [
      {
        label: 'Semester 1',
        modules: [
          [
            'Analyse 1',
            6,
            'Real numbers, complex numbers, sequences, limits, functions, continuity, derivatives, Taylor formula, and elementary functions.',
            true,
          ],
          [
            'Algèbre 1',
            4,
            'Logic and proof methods, sets and mappings, relations, groups, rings, fields, and polynomials.',
            false,
          ],
          [
            'Algorithmique et structure de données 1',
            7,
            'Algorithms in pseudo-code and C, including variables, loops, arrays, strings, structs, and enums.',
            true,
          ],
          [
            'Structure machine 1',
            5,
            'Number systems, information coding, Boolean algebra, and Karnaugh maps.',
            true,
          ],
          [
            'Logiciels libres',
            2,
            'IT basics and open-source tools: Linux, editors, LibreOffice, collaboration, and contributing.',
            false,
          ],
          [
            'Langue étrangère',
            2,
            'English grammar review and technical vocabulary for computing.',
            false,
          ],
          [
            'Électricité générale',
            4,
            'Electrostatics, Ohm and Kirchhoff laws, Thévenin/Norton, and magnetostatics.',
            false,
          ],
        ],
      },
      {
        label: 'Semester 2',
        modules: [
          [
            'Analyse 2',
            6,
            'Taylor expansions, integrals, first and second-order differential equations, and functions of several variables.',
            true,
          ],
          [
            'Algèbre 2',
            4,
            'Vector spaces, linear maps, matrices, determinants, and solving linear systems.',
            false,
          ],
          [
            'Algorithmique et structure de données 2',
            7,
            'Functions, recursion, files, pointers, dynamic memory, linked lists, stacks, and queues in C.',
            true,
          ],
          [
            'Structure machine 2',
            5,
            'Combinational and sequential circuits, automata, counters, and integrated circuits.',
            true,
          ],
          [
            'Logique mathématique',
            2,
            'Propositional and predicate logic, truth tables, normal forms, and resolution.',
            false,
          ],
          [
            'Introduction à l’intelligence artificielle',
            2,
            'AI concepts, benefits, risks, and responsible use of AI tools for study and research.',
            false,
          ],
          [
            'Électronique fondamentale',
            4,
            'Semiconductors, diodes, transistors, and TTL/CMOS logic technologies.',
            false,
          ],
        ],
      },
    ],
  },
  {
    id: 'l2',
    label: 'Licence 2',
    shortLabel: 'L2',
    title: 'Core Computer Science',
    summary:
      'Become a programmer and learn how systems, data, and languages work.',
    priorities:
      'Algo 3 first, then POO, OS, databases, languages, and architecture.',
    semesters: [
      {
        label: 'Semester 3',
        modules: [
          [
            'Architecture des ordinateurs',
            5,
            'Von Neumann and Harvard models, registers, ALU, addressing modes, 8086 assembly, cache, and multi-core processors.',
            true,
          ],
          [
            'Algorithmique et structure de données 3',
            6,
            'Complexity, sorting, binary trees, search trees, traversals, and graphs.',
            true,
          ],
          [
            'Systèmes d’information',
            4,
            'Enterprise information systems and the MERISE method, including MCD and MCT modeling.',
            false,
          ],
          [
            'Programmation orientée objet 1',
            5,
            'Classes, objects, encapsulation, association, inheritance, and polymorphism in Java.',
            true,
          ],
          [
            'Méthodes numériques',
            4,
            'Floating-point errors, linear systems, eigenvalues, and matrix analysis.',
            false,
          ],
          [
            'Probabilités et statistique 1',
            4,
            'Descriptive statistics, combinatorics, probability, conditional probability, and Bayes.',
            false,
          ],
          [
            'Gestion de projets',
            2,
            'Project life cycles, work breakdown structures, estimation, and network planning.',
            false,
          ],
        ],
      },
      {
        label: 'Semester 4',
        modules: [
          [
            'Système d’exploitation 1',
            5,
            'Processes, threads, scheduling, memory management, paging, segmentation, and virtual memory.',
            true,
          ],
          [
            'Théorie des langages',
            5,
            'Grammars, finite automata, regular expressions, minimization, pushdown automata, and Turing machines.',
            true,
          ],
          [
            'Bases de données',
            5,
            'Relational models, normalization, SQL, joins, aggregates, and relational algebra.',
            true,
          ],
          [
            'Programmation orientée objet 2',
            5,
            'Abstract classes, interfaces, exceptions, I/O streams, GUIs, and event handling.',
            true,
          ],
          [
            'Programmation linéaire',
            4,
            'Optimization models, convex geometry, the simplex method, and dual methods.',
            false,
          ],
          [
            'Probabilités et statistique 2',
            4,
            'Random variables, limit theorems, estimators, confidence intervals, and hypothesis tests.',
            false,
          ],
          [
            'Entrepreneuriat',
            2,
            'Startup ecosystems, idea validation, Business Model Canvas, business plans, and financing.',
            false,
          ],
        ],
      },
    ],
  },
  {
    id: 'l3',
    label: 'Licence 3',
    shortLabel: 'L3',
    title: 'Specialization and Project',
    summary:
      'Networks, software engineering, web, security, AI, and your graduation project.',
    priorities:
      'The Projet first, then the 5-credit modules: networks, compilation, software engineering, web, security, AI, RI, and OS 2.',
    semesters: [
      {
        label: 'Semester 5',
        modules: [
          [
            'Réseaux',
            5,
            'OSI/TCP-IP, IP addressing and subnetting, IPv4/IPv6, routing, TCP/UDP, and application protocols.',
            true,
          ],
          [
            'Compilation',
            5,
            'Lexical and syntax analysis, LL(1), LR, type checking, translation, and code generation.',
            true,
          ],
          [
            'Génie logiciel',
            5,
            'Software life cycles, UML diagrams, and development methods such as RUP and XP.',
            true,
          ],
          [
            'Développement d’applications web',
            5,
            'HTTP, HTML5, CSS3, JavaScript, XML, PHP, databases, sessions, and web services.',
            true,
          ],
          [
            'Outils de programmation scientifique',
            4,
            'Python, R, and scientific tools such as Scilab and Matlab.',
            false,
          ],
          [
            'Théorie des graphes',
            4,
            'Shortest paths, minimum spanning trees, maximum flow, coloring, and Eulerian/Hamiltonian paths.',
            false,
          ],
          [
            'Rédaction scientifique',
            2,
            'Scientific structure, references, writing style, and avoiding plagiarism.',
            false,
          ],
        ],
      },
      {
        label: 'Semester 6',
        modules: [
          [
            'Système d’exploitation 2',
            5,
            'Synchronization, semaphores, inter-process communication, classic problems, and deadlocks.',
            true,
          ],
          [
            'Sécurité informatique',
            5,
            'Security threats, cryptography, hashing, digital signatures, certificates, and PKI.',
            true,
          ],
          [
            'Recherche d’information',
            5,
            'Indexing, retrieval models, search ranking, and precision/recall evaluation.',
            true,
          ],
          [
            'Fondements de l’intelligence artificielle',
            5,
            'Knowledge representation, reasoning, machine learning, neural networks, and clustering.',
            true,
          ],
          [
            'Projet',
            6,
            'Analyze, design, and implement a complete application in a team, then defend the thesis and software.',
            true,
          ],
          [
            'Intelligence métier (BI)',
            2,
            'Data warehouses, ETL, OLAP, dashboards, KPIs, and data mining.',
            false,
          ],
          [
            'Déontologie de l’informatique',
            2,
            'Ethics theories, professional codes, research ethics, and responsible practice.',
            false,
          ],
        ],
      },
    ],
  },
];

let curriculumReady = false;

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  );

function renderSemester(semester) {
  const credits = semester.modules.reduce(
    (total, [, credit]) => total + credit,
    0,
  );
  return `
    <div class="curriculum-semester">
      <div class="curriculum-semester-head">
        <h3 class="subhead subhead-row mb-0"><i class="fas fa-layer-group text-primary"></i>${semester.label}</h3>
        <span class="pill pill-neutral">${credits} credits</span>
      </div>
      <div class="curriculum-modules">
        ${semester.modules
          .map(
            ([name, credit, description, priority]) => `
          <article class="curriculum-module ${priority ? 'is-priority' : ''}">
            <div class="curriculum-module-top"><h4>${escapeHtml(name)}</h4><span class="pill">${credit} cr</span></div>
            <p>${escapeHtml(description)}</p>
            ${priority ? '<span class="curriculum-priority"><i class="fas fa-bolt"></i> Priority module</span>' : ''}
          </article>`,
          )
          .join('')}
      </div>
    </div>`;
}

export function initCurriculum() {
  const root = document.getElementById('curriculumExplorer');
  const tabs = document.getElementById('curriculumTabs');
  if (!root || !tabs) return;
  let active = curriculum[0];
  const render = () => {
    root.innerHTML = `
      <div class="curriculum-topline">
        <div><p class="eyebrow">Your roadmap</p><h3 class="text-2xl sm:text-3xl font-extrabold mt-1">${escapeHtml(active.title)}</h3><p class="text-base-content/65 mt-2 max-w-2xl">${escapeHtml(active.summary)}</p></div>
        <div class="curriculum-priority-note"><i class="fas fa-compass"></i><span><strong>Where to focus</strong>${escapeHtml(active.priorities)}</span></div>
      </div>
      <div class="curriculum-semesters">${active.semesters.map(renderSemester).join('')}</div>`;
  };
  curriculum.forEach((level) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `curriculum-tab ${level.id === active.id ? 'is-active' : ''}`;
    button.textContent = `${level.shortLabel} · ${level.label}`;
    button.addEventListener('click', () => {
      active = level;
      tabs
        .querySelectorAll('.curriculum-tab')
        .forEach((tab) => tab.classList.toggle('is-active', tab === button));
      render();
    });
    tabs.appendChild(button);
  });
  render();
  curriculumReady = true;
}

export function openCurriculum() {
  if (!curriculumReady) return;
  document.getElementById('curriculumModal')?.showModal();
}

export function closeCurriculum() {
  document.getElementById('curriculumModal')?.close();
}
