/* =========================================================
   «Чистое будущее начинается с нас» — логика сайта
   Модули:
   1. Утилиты (поиск элементов, форматирование, иконки, уведомления, модальное окно)
   2. Многоязычность (RUS / ENG / KAZ)
   3. Тема, шапка, навигация, мобильное меню, кнопка наверх
   4. Анимации появления и счётчики
   5. Калькулятор «Цена коррупции»
   6. Игра «Взятка или подарок?»
   7. Тест «Знаешь ли ты свои права?»
   8. Карточки «Основные понятия»
   9. Комикс «Зачёт за конверт?»
   9б. Видеоролик
   10. Раздел «Что делать, если…»
   10б. Мастер «Өтініш»
   10в. Сообщение с фото
   11. Шаблоны документов
   12. Карта Казахстана
   13. Стена честности
   14. Графики Chart.js
   15. Формы, FAQ, волонтёрство
   15б. ИИ-помощник
   16. Инициализация
   Переводы на три языка — в разделе 0 «Переводы» в начале файла.
   ========================================================= */

'use strict';

/* =========================================================
   0. ПЕРЕВОДЫ (RUS / ENG / KAZ)
   I18N.ui   — тексты разметки (ключи data-i18n в index.html); русский берётся из HTML.
   I18N.msg  — сообщения JavaScript (уведомления, подписи, кнопки).
   I18N.data — содержимое разделов: игра, тест, понятия, инструкции,
               шаблоны, регионы, стена честности, FAQ, графики.
   ========================================================= */
window.I18N = {
  langs: {
    ru: { locale: 'ru-RU', name: 'Русский', title: 'Таза болашақ — Чистое будущее начинается с нас' },
    en: { locale: 'en-US', name: 'English', title: 'Taza Bolashaq — A Clean Future Starts With Us' },
    kk: { locale: 'kk-KZ', name: 'Қазақша', title: 'Таза болашақ — бізден басталады' }
  },

  /* ---------------------------------------------------------
     1. Статичная разметка
     --------------------------------------------------------- */
  ui: {
    en: {
      'header.homeAria': 'To the home page',
      'header.navAria': 'Main navigation',
      'header.langAria': 'Site language',
      'header.themeAria': 'Toggle theme',
      'header.menuOpen': 'Open menu',
      'brand.name': 'Taza Bolashaq',
      'brand.tag': 'anti-corruption platform',
      'brand.tag2': 'starts with us',
      'nav.home': 'Home',
      'nav.calc': 'Calculator',
      'nav.school': 'College',
      'nav.comic': 'Comic',
      'nav.help': 'What to do',
      'nav.templates': 'Templates',
      'nav.analytics': 'Analytics',
      'nav.community': 'Community',
      'nav.schoolFull': 'Anti-Corruption College',
      'nav.helpFull': 'What to do if…',
      'nav.templatesFull': 'Document templates',
      'nav.analyticsFull': 'Transparency & analytics',
      'nav.report': 'Report corruption: 1424',

      'college.name': 'Zhezkazgan Industrial and Humanitarian College',
      'college.group': 'Group',

      'hero.badge': 'An educational project about honesty and transparency',
      'hero.title1': 'A clean future',
      'hero.title2': 'starts with us',
      'hero.subtitle': 'Together against corruption. Together for a fair society. Know your rights, learn to recognise corruption and act lawfully — step by step.',
      'hero.more': 'Learn more',
      'hero.whatToDo': 'What to do about corruption?',
      'hero.stat1': 'Kazakhstan’s score in the 2025 Corruption Perceptions Index',
      'hero.mln': 'mln+',
      'hero.stat2': 'appeals submitted via eOtinish in 2025',
      'hero.stat3': 'free call centre for reporting corruption',
      'hero.sources': 'Sources: Transparency International (CPI 2025), egov.kz (eOtinish results for 2025), egov.kz “Helplines of government agencies”.',
      'hero.chip1a': 'Transparency',
      'hero.chip1b': 'open data',
      'hero.chip2a': 'The law',
      'hero.chip2b': 'equal for all',
      'hero.chip3a': 'Oversight',
      'hero.chip3b': 'by the public',
      'hero.scrollAria': 'Scroll down',

      'calc.eyebrow': 'Interactive',
      'calc.title': 'The “Cost of Corruption” calculator',
      'calc.text': 'Choose a sector and a bribe amount — and see what society could get for that money instead of it ending up in someone’s pocket.',
      'calc.step1': 'Choose a sector',
      'calc.sphereAria': 'Sector',
      'sphere.education': 'Education',
      'sphere.medicine': 'Healthcare',
      'sphere.roads': 'Roads',
      'sphere.housing': 'Utilities',
      'calc.step2': 'Set the bribe amount',
      'calc.amountAria': 'Bribe amount',
      'calc.scale1': '10K ₸',
      'calc.scale2': '1M ₸',
      'calc.scale3': '100M ₸',
      'calc.step3': 'How often does it happen?',
      'calc.freq1': 'Once',
      'calc.freq12': 'Monthly (×12)',
      'calc.freq100': 'In 100 institutions',
      'calc.btn': 'Calculate',
      'calc.disclaimer': 'All prices are illustrative demo values, not official government data.',
      'calc.emptyTitle': 'Your result will appear here',
      'calc.emptyText': 'Choose a sector, amount and frequency, then press “Calculate”.',
      'calc.total': 'Total loss to society',
      'calc.couldBuy': 'With this money you could buy <b>(each option uses the whole amount)</b>:',
      'calc.otherSpheres': 'The same amount in other sectors',

      'school.eyebrow': 'Learning',
      'school.title': 'Anti-Corruption College',
      'school.text': 'Play, test your knowledge and get to grips with key concepts — short, clear and with real-life examples.',
      'school.tabsAria': 'College sections',
      'school.tabGame': 'Bribe or gift?',
      'school.tabQuiz': 'Do you know your rights?',
      'school.tabConcepts': 'Key concepts',
      'game.situation': 'Situation',
      'common.of': 'of',
      'game.points': 'points',
      'game.bribe': 'Bribe / not acceptable',
      'game.gift': 'Acceptable gift',
      'game.restart': 'Play again',
      'quiz.title': 'Quiz: “Do you know your rights?”',
      'quiz.intro': '12 questions about citizens’ rights when dealing with the police, healthcare providers and government agencies.',
      'quiz.disclaimer': 'This quiz is for education only and is not legal advice. Current laws are published at adilet.zan.kz.',
      'quiz.begin': 'Start the quiz',
      'quiz.question': 'Question',
      'quiz.correctShort': 'correct',
      'quiz.right': 'correct',
      'quiz.wrong': 'wrong',
      'quiz.best': 'best result',
      'quiz.restart': 'Try again',
      'concepts.hint': 'Tap a card to see details and real-life examples.',

      'comic.eyebrow': 'Comic',
      'comic.sectionTitle': 'Damir’s story: “A pass for an envelope?”',
      'comic.sectionText': 'A short story about a choice every student faces. Tap any panel to read the comic panel by panel.',
      'comic.kicker': 'An anti-corruption comic',
      'comic.title': 'A PASS FOR AN ENVELOPE?',
      'comic.stamp': 'EXAMS',
      'comic.p1aria': 'Panel 1',
      'comic.p2aria': 'Panel 2',
      'comic.p3aria': 'Panel 3',
      'comic.p4aria': 'Panel 4',
      'comic.p5aria': 'Panel 5',
      'comic.p6aria': 'Panel 6',
      'comic.p1caption': 'The night before the exam. 03:47.',
      'comic.p1bubble': 'I know NOTHING… I’m done for!',
      'comic.p2caption': 'Next morning, classmate Yerlan:',
      'comic.p2bubble': 'Chill, bro! The whole group is chipping in 20 thousand each — and everyone passes. The group leader will hand it over.',
      'comic.p3caption': 'Damir is studying to be a doctor. And then he thought…',
      'comic.p3bubble': 'And later I’ll treat people… with bought grades?',
      'comic.svgDiagnosis': 'DIAGNOSIS',
      'comic.svgNotes': 'NOTES',
      'comic.p4bubble': 'NO. I’d rather learn it myself.',
      'comic.p4caption': 'The rest of the night — notes and coffee.',
      'comic.svgExam': 'EXAM',
      'comic.svgAnatomy': 'Anatomy',
      'comic.p5caption': 'At the exam.',
      'comic.p5bubble': 'Someone collected money “for the teacher”? The ethics committee already knows. Everyone sits the exam — honestly.',
      'comic.svgRetake': 'RETAKE',
      'comic.svgPassed': 'PASSED',
      'comic.p6caption': 'Damir passed on his own. Yerlan is off to a retake.',
      'comic.p6bubble': 'You can’t buy knowledge. But trouble — easily!',
      'comic.bannerTitle': 'A BRIBE IS NOT A LIFE HACK!',
      'comic.bannerText': 'A bought grade means an empty diploma. See extortion? Report it.',
      'comic.call': 'Call',
      'comic.read': 'Read panel by panel',
      'comic.accentAria': 'Cover colour',
      'comic.accent': 'Cover colour:',

      'help.eyebrow': 'Step-by-step help',
      'help.title': 'What to do if…',
      'help.text': 'Choose a situation and get a clear action plan with verified official contacts.',
      'help.c1424': 'Call centre of the Anti-Corruption Service of the National Security Committee. Free of charge.',
      'help.call': 'Call',
      'help.c115': 'Call centre of the Prosecutor General’s Office — violations of citizens’ rights. Free of charge.',
      'help.c1414': 'Unified contact centre: advice on public services, eGov, eOtinish, mandatory health insurance and free medical care.',
      'help.c112': 'Police and the unified emergency service — if there is a threat to life or health.',
      'help.lEotinish': 'Online appeals to government agencies',
      'help.lEgov': 'Helplines of government agencies',
      'help.lFms': 'Health Insurance Fund — complaints about medical care',
      'help.lAdilet': 'Laws of the Republic of Kazakhstan',
      'help.verified': 'Contacts checked against official publications (egov.kz, gov.kz) as of November 2026. Please confirm they are current on official websites before contacting.',

      'tpl.eyebrow': 'Documents',
      'tpl.title': 'Document templates',
      'tpl.text': 'Fill in your details and the template updates automatically. Then preview, copy or download the document.',
      'tpl.fName': 'Applicant’s full name',
      'tpl.phName': 'Aslan Serikov',
      'tpl.fContact': 'Address / contacts',
      'tpl.phContact': 'Zhezkazgan, … St., tel. …',
      'tpl.fTo': 'To (agency / position)',
      'tpl.phTo': 'Head of …',
      'tpl.fDetails': 'What happened (briefly)',
      'tpl.phDetails': 'Describe the facts: date, place, who, what happened',
      'tpl.view': 'Preview',
      'tpl.copy': 'Copy',
      'tpl.disclaimer': 'Templates are for reference only. To file officially, use eOtinish.kz or contact the relevant agency.',

      'an.eyebrow': 'Openness',
      'an.title': 'Transparency & analytics',
      'an.text': 'A regional map, examples of transparency tools and statistics — with an honest label showing which data is real and which is for demonstration.',
      'an.mapTitle': 'Schematic map of Kazakhstan',
      'an.mapTag': 'Indicators — demo',
      'an.mapAria': 'Schematic map of Kazakhstan’s regions',
      'an.legendOblast': 'Region',
      'an.legendCity': 'City of republican significance',
      'an.legendCollege': 'Our college (Zhezkazgan)',
      'an.regionEmpty': 'Choose a region',
      'an.regionEmptyText': 'Tap a point on the map or pick one from the list.',
      'an.region': 'Region',
      'an.wall': 'Wall of integrity',
      'an.fAll': 'All',
      'an.fProc': 'Procurement',
      'an.fSave': 'Savings',
      'an.fControl': 'Public oversight',
      'an.fInit': 'Initiatives',
      'an.stats': 'Statistics',
      'an.cpiTitle': 'Kazakhstan in the Corruption Perceptions Index',
      'an.cpiSub': 'Score out of 100 (the higher, the lower the perceived corruption)',
      'an.real': 'Real data',
      'an.cpiSource': 'Source: Transparency International, annual Corruption Perceptions Index (2017–2025). The target of Kazakhstan’s Anti-Corruption Policy Concept for 2022–2026 is 47 points.',
      'an.cmpTitle': 'CPI 2025: comparison',
      'an.points': 'Score out of 100',
      'an.cmpSource': 'Source: Transparency International, CPI 2025.',
      'an.topicsTitle': 'Topics of appeals',
      'an.topicsSub': 'Example of how appeals on the platform might be distributed',
      'an.demo': 'Demo data',
      'an.topicsNote': 'Illustrative data to demonstrate the chart. Not official statistics.',

      'cm.eyebrow': 'Together',
      'cm.title': 'Community & feedback',
      'cm.text': 'Share an idea, ask a question or join our volunteers.',
      'cm.formTitle': 'Feedback form',
      'cm.demoWarn': '<b>Demo form.</b> Messages are not sent anywhere and are not an official complaint. To report corruption, call <a href="tel:1424">1424</a> or use <a href="https://eotinish.kz" target="_blank" rel="noopener">eOtinish.kz</a>.',
      'cm.fName': 'Name <small>(optional)</small>',
      'cm.phName': 'What should we call you?',
      'cm.fCategory': 'Category',
      'cm.cat0': '— choose a category —',
      'cm.cat1': 'Question about the project',
      'cm.cat2': 'Idea or suggestion',
      'cm.cat3': 'Bug on the site',
      'cm.cat4': 'Education and quizzes',
      'cm.cat5': 'Other',
      'cm.fMessage': 'Message',
      'cm.phMessage': 'Write your message (at least 10 characters)',
      'cm.send': 'Send',
      'cm.faq': 'Frequently asked questions',

      'vol.eyebrow': 'Volunteering',
      'vol.title': 'Be part of the change',
      'vol.text': 'Help run integrity lessons at the college and in local schools, take part in public monitoring and create useful content.',
      'vol.li1': 'Awareness lessons and quizzes',
      'vol.li2': 'Monitoring access to public services',
      'vol.li3': 'Design, video and social media',
      'vol.count': 'applications saved on this device',
      'vol.fName': 'Name',
      'vol.phName': 'Your name',
      'vol.fCity': 'City',
      'vol.phCity': 'e.g. Zhezkazgan',
      'vol.fAge': 'Age',
      'vol.fDirs': 'Areas (choose any)',
      'vol.d1': 'Education',
      'vol.d2': 'Monitoring',
      'vol.d3': 'Media',
      'vol.d5': 'Events',
      'vol.consent': 'I understand this is a demo form for a student project: data is stored only in my browser and is not sent anywhere.',
      'vol.join': 'Join',

      'footer.about': 'An educational project about fighting corruption, citizens’ rights and transparency. Not a government resource.',
      'footer.college': 'Zhezkazgan Industrial and Humanitarian College · group P-11',
      'footer.nav': 'Navigation',
      'footer.contacts': 'Official contacts',
      'footer.f1424': '1424 — reporting corruption',
      'footer.f115': '115 — Prosecutor General’s Office',
      'footer.f1414': '1414 — Unified contact centre',
      'footer.resources': 'Useful resources',
      'footer.copy': '“A Clean Future Starts With Us”. Student IT project by group P-11, Zhezkazgan Industrial and Humanitarian College.',
      'footer.tech': 'Built with HTML5, CSS3, JavaScript, Chart.js and Lucide Icons.',
      'common.toTop': 'Back to top',
      'common.close': 'Close',
      'nav.video': 'Video',
      'nav.videoFull': 'Video',
      'video.eyebrow': 'Video',
      'video.title': 'An anti-corruption social video',
      'video.text': 'A short video about the choice between easy money and an honest future. The final part was filmed outside our college.',
      'video.aria': 'Anti-corruption social video',
      'video.seek': 'Seek',
      'video.errTitle': 'The video did not load',
      'video.errText': 'Make sure the file anticorruption-video.mp4 is in the same folder as index.html.',
      'video.len': 'Length 0:45',
      'video.format': 'Vertical 9:16',
      'video.place': 'Zhezkazgan',
      'video.chapters': 'Chapters',
      'video.chapHint': 'Tap a chapter to jump to that moment.',
      'video.ctaTitle': 'Made you think?',
      'video.ctaText': 'If you face corruption, report it by calling the free number 1424.',
      "nav.otinish": "Appeal",
      "nav.otinishFull": "Appeal & photo report",
      "ot.eyebrow": "Take action",
      "ot.title": "Report with photos",
      "ot.text": "Report corruption with photos to an official channel — no name needed, and the site removes geotags and phone data from the photos. An official appeal (өтініш) is drafted in the “Document templates” section.",
      "nav.photo": "Photo report",
      "tpl.wizTitle": "Appeal (өтініш) — step by step",
      "hero.groupCode": "P-11",
      "es.eyebrow": "Essays · group P-11",
      "es.title": "Honesty starts with us",
      "es.text": "Three students, three views on building a Kazakhstan free of corruption. Tap a photo to read or listen to the essay.",
      "nav.essays": "Student essays",
      "a11y.open": "Accessibility: version for people with disabilities",
      "a11y.skip": "Skip to main content",
      "a11y.title": "Accessibility",
      "a11y.intro": "Adjust the site to your needs. Everything is saved on this device.",
      "a11y.close": "Close",
      "a11y.sProfiles": "Ready-made profiles",
      "a11y.p.vision": "Low vision",
      "a11y.pd.vision": "Large text, contrast, clear font",
      "a11y.p.blind": "Read aloud",
      "a11y.pd.blind": "The site reads text when you tap it",
      "a11y.p.dyslexia": "Dyslexia",
      "a11y.pd.dyslexia": "Easy font, spacing, reading mask",
      "a11y.p.epilepsy": "No flashing",
      "a11y.pd.epilepsy": "Animations and effects off",
      "a11y.p.focus": "Focus",
      "a11y.pd.focus": "Nothing extra, no pictures",
      "a11y.p.motor": "Motor",
      "a11y.pd.motor": "Large buttons and cursor",
      "a11y.sText": "Text",
      "a11y.lSize": "Text size",
      "a11y.lFont": "Font",
      "a11y.fDefault": "Standard",
      "a11y.fReadable": "Clear",
      "a11y.fEasy": "Easy",
      "a11y.lSpacing": "Spacing",
      "a11y.sp0": "Normal",
      "a11y.sp1": "Wider",
      "a11y.sp2": "Wide",
      "a11y.sColor": "Colour and contrast",
      "a11y.lContrast": "Colour scheme",
      "a11y.cDefault": "Standard",
      "a11y.cHigh": "High contrast",
      "a11y.cWb": "Black on white",
      "a11y.cBw": "White on black",
      "a11y.cYb": "Yellow on black",
      "a11y.t.gray": "Greyscale",
      "a11y.d.gray": "Removes colour from the whole page",
      "a11y.sView": "Perception and control",
      "a11y.t.speak": "Read aloud",
      "a11y.d.speak": "Tap any text and it will be spoken",
      "a11y.t.motion": "Stop animations",
      "a11y.d.motion": "No motion, flashing or smooth scrolling",
      "a11y.t.simple": "Simplified view",
      "a11y.d.simple": "No decorative background or glass effects",
      "a11y.t.noimg": "Hide images",
      "a11y.d.noimg": "Only text remains",
      "a11y.t.links": "Highlight links and buttons",
      "a11y.d.links": "Underlines and a clearly visible focus frame",
      "a11y.t.targets": "Large buttons",
      "a11y.d.targets": "Easier to hit with a finger or mouse",
      "a11y.t.cursor": "Large cursor",
      "a11y.d.cursor": "A big, easy-to-see arrow",
      "a11y.t.guide": "Reading mask",
      "a11y.d.guide": "Dims everything except the line under the cursor",
      "a11y.reset": "Reset all settings",
      "a11y.note": "The site can be used with a keyboard (Tab, Enter, Esc) and with screen readers such as NVDA, VoiceOver and TalkBack.",
      "a11y.stop": "Stop reading",
      "tpl.wizText": "Answer 5 steps and the site will draft an official appeal in Russian or Kazakh. You can copy it, download it and file it on eOtinish.kz.",
      "ot.tabsAria": "How to report",
      "ot.tabWizard": "Appeal (Өтініш)",
      "ot.tabReport": "Report with photos",
      "wiz.back": "Back",
      "wiz.next": "Next",
      "wiz.myTitle": "My appeals",
      "wiz.myTag": "On this device",
      "wiz.approx": "Response dates are counted in working days and do not include public holidays.",
      "rep.title": "Report with photos",
      "rep.badge": "No name",
      "rep.privacy": "The site does not ask for your name and does not store your message on a server. Location tags, phone model and capture date are removed from photos. You send the report yourself — to an official channel.",
      "rep.where": "Where did it happen",
      "rep.phWhere": "e.g. college, room 204",
      "rep.when": "When",
      "rep.what": "What happened",
      "rep.phWhat": "Who, what they demanded, how much, were there witnesses",
      "rep.photos": "Photos (up to 5)",
      "rep.add": "Add photos",
      "rep.addHint": "Tap or drag here · JPG, PNG, HEIC",
      "rep.sendTitle": "How to send",
      "rep.step1": "Copy the report text.",
      "rep.step2": "Save the photos without metadata.",
      "rep.step3": "Open an official channel and send the text and photos.",
      "rep.copyBtn": "Copy text",
      "rep.saveBtn": "Save photos without metadata",
      "rep.chWa": "WhatsApp bot",
      "rep.chTg": "Telegram bot",
      "rep.chCall": "Call centre, free",
      "rep.botNote": "The bots were launched by the Anti-Corruption Agency (WhatsApp in February 2025). Since it joined the National Security Committee in July 2025, check that the bots still work by calling 1424.",
      "rep.anonNote": "Messengers are never fully anonymous: the bot sees your account. The law guarantees confidentiality and protection to people who report corruption.",
      "ai.fab": "AI assistant",
      "ai.title": "AI assistant",
      "ai.clear": "Clear chat",
      "ai.placeholder": "Ask a question…",
      "ai.inputAria": "Question about corruption, your rights or this site",
      "ai.send": "Send",
      "ai.stop": "Stop",
      "ai.note": "AI can make mistakes. This is not legal advice — check anything important with 1424 or eOtinish."
    },

    kk: {
      'header.homeAria': 'Басты бетке',
      'header.navAria': 'Негізгі навигация',
      'header.langAria': 'Сайт тілі',
      'header.themeAria': 'Тақырыпты ауыстыру',
      'header.menuOpen': 'Мәзірді ашу',
      'brand.name': 'Таза болашақ',
      'brand.tag': 'сыбайлас жемқорлыққа қарсы платформа',
      'brand.tag2': 'бізден басталады',
      'nav.home': 'Басты бет',
      'nav.calc': 'Калькулятор',
      'nav.school': 'Колледж',
      'nav.comic': 'Комикс',
      'nav.help': 'Не істеу керек',
      'nav.templates': 'Үлгілер',
      'nav.analytics': 'Талдау',
      'nav.community': 'Қоғамдастық',
      'nav.schoolFull': 'Сыбайлас жемқорлыққа қарсы колледж',
      'nav.helpFull': 'Егер… не істеу керек',
      'nav.templatesFull': 'Құжат үлгілері',
      'nav.analyticsFull': 'Ашықтық және талдау',
      'nav.report': 'Сыбайлас жемқорлық туралы хабарлау: 1424',

      'college.name': 'Жезказганский индустриально-гуманитарный колледж',
      'college.group': 'Топ',

      'hero.badge': 'Адалдық пен ашықтық туралы білім беру жобасы',
      'hero.title1': 'Таза болашақ',
      'hero.title2': 'бізден басталады',
      'hero.subtitle': 'Сыбайлас жемқорлыққа қарсы бірге. Әділ қоғам үшін бірге. Өз құқықтарыңды біл, сыбайлас жемқорлықты тануды үйрен және заң аясында әрекет ет — қадам-қадаммен.',
      'hero.more': 'Толығырақ',
      'hero.whatToDo': 'Сыбайлас жемқорлыққа тап болсаң, не істеу керек?',
      'hero.stat1': '2025 жылғы Сыбайлас жемқорлықты қабылдау индексіндегі Қазақстанның ұпайы',
      'hero.mln': 'млн+',
      'hero.stat2': '2025 жылы eOtinish арқылы берілген өтініштер',
      'hero.stat3': 'сыбайлас жемқорлық фактілері бойынша тегін call-орталық',
      'hero.sources': 'Дереккөздер: Transparency International (СЖҚИ-2025), egov.kz (eOtinish-тің 2025 жылғы қорытындылары), egov.kz «Мемлекеттік органдардың сенім телефондары».',
      'hero.chip1a': 'Ашықтық',
      'hero.chip1b': 'ашық деректер',
      'hero.chip2a': 'Заң',
      'hero.chip2b': 'бәріне бірдей',
      'hero.chip3a': 'Бақылау',
      'hero.chip3b': 'қоғамдық',
      'hero.scrollAria': 'Төмен айналдыру',

      'calc.eyebrow': 'Интерактив',
      'calc.title': '«Сыбайлас жемқорлықтың құны» калькуляторы',
      'calc.text': 'Саланы және пара сомасын таңдаңыз — бұл ақша біреудің қалтасына түспегенде, қоғам не ала алатынын көріңіз.',
      'calc.step1': 'Саланы таңдаңыз',
      'calc.sphereAria': 'Сала',
      'sphere.education': 'Білім беру',
      'sphere.medicine': 'Медицина',
      'sphere.roads': 'Жолдар',
      'sphere.housing': 'ТКШ',
      'calc.step2': 'Пара сомасын көрсетіңіз',
      'calc.amountAria': 'Пара сомасы',
      'calc.scale1': '10 мың ₸',
      'calc.scale2': '1 млн ₸',
      'calc.scale3': '100 млн ₸',
      'calc.step3': 'Бұл қаншалықты жиі болады?',
      'calc.freq1': 'Бір рет',
      'calc.freq12': 'Ай сайын (×12)',
      'calc.freq100': '100 мекемеде',
      'calc.btn': 'Есептеу',
      'calc.disclaimer': 'Барлық бағалар — көрнекілік үшін берілген шартты демо-мәндер, ресми мемлекеттік деректер емес.',
      'calc.emptyTitle': 'Нәтиже осы жерде шығады',
      'calc.emptyText': 'Саланы, соманы және жиілікті таңдап, «Есептеу» батырмасын басыңыз.',
      'calc.total': 'Қоғам үшін жалпы шығын',
      'calc.couldBuy': 'Бұл ақшаға мынаны сатып алуға болар еді <b>(әр нұсқа — бүкіл сомаға)</b>:',
      'calc.otherSpheres': 'Дәл осы сома басқа салаларда',

      'school.eyebrow': 'Оқу',
      'school.title': 'Сыбайлас жемқорлыққа қарсы колледж',
      'school.text': 'Ойнаңыз, біліміңізді тексеріңіз және негізгі ұғымдарды түсініңіз — қысқа, түсінікті әрі өмірлік мысалдармен.',
      'school.tabsAria': 'Колледж бөлімдері',
      'school.tabGame': 'Пара ма, сыйлық па?',
      'school.tabQuiz': 'Құқықтарыңды білесің бе?',
      'school.tabConcepts': 'Негізгі ұғымдар',
      'game.situation': 'Жағдай',
      'common.of': '/',
      'game.points': 'ұпай',
      'game.bribe': 'Пара / жол берілмейді',
      'game.gift': 'Рұқсат етілген сыйлық',
      'game.restart': 'Қайта ойнау',
      'quiz.title': '«Құқықтарыңды білесің бе?» тесті',
      'quiz.intro': 'Полициямен, медициналық мекемелермен және мемлекеттік органдармен қарым-қатынастағы азаматтар құқықтары туралы 12 сұрақ.',
      'quiz.disclaimer': 'Тест білім беру мақсатында жасалған және заңгерлік кеңес болып табылмайды. Заңдардың өзекті мәтіндері — adilet.zan.kz порталында.',
      'quiz.begin': 'Тестті бастау',
      'quiz.question': 'Сұрақ',
      'quiz.correctShort': 'дұрыс',
      'quiz.right': 'дұрыс',
      'quiz.wrong': 'қате',
      'quiz.best': 'үздік нәтиже',
      'quiz.restart': 'Қайта өту',
      'concepts.hint': 'Толық ақпарат пен өмірлік мысалдарды көру үшін карточканы басыңыз.',

      'comic.eyebrow': 'Комикс',
      'comic.sectionTitle': 'Дамирдің оқиғасы: «Сынақ — конвертке ме?»',
      'comic.sectionText': 'Әр студент алдында тұратын таңдау туралы қысқа оқиға. Комиксті кадр бойынша оқу үшін кез келген кадрды басыңыз.',
      'comic.kicker': 'Сыбайлас жемқорлыққа қарсы комикс',
      'comic.title': 'СЫНАҚ — КОНВЕРТКЕ МЕ?',
      'comic.stamp': 'СЕССИЯ',
      'comic.p1aria': '1-кадр',
      'comic.p2aria': '2-кадр',
      'comic.p3aria': '3-кадр',
      'comic.p4aria': '4-кадр',
      'comic.p5aria': '5-кадр',
      'comic.p6aria': '6-кадр',
      'comic.p1caption': 'Емтихан алдындағы түн. 03:47.',
      'comic.p1bubble': 'Мен ЕШТЕҢЕ білмеймін… Бітті менің шаруам!',
      'comic.p2caption': 'Таңертең топтасы Ерлан:',
      'comic.p2bubble': 'Уайымдама, досым! Бүкіл топ 20 мыңнан жинап жатыр — бәрі тапсырады. Староста апарып береді.',
      'comic.p3caption': 'Дамир дәрігерлікке оқиды. Сонда ол ойланып қалды…',
      'comic.p3bubble': 'Сонда мен адамдарды… сатып алынған бағамен емдеймін бе?',
      'comic.svgDiagnosis': 'ДИАГНОЗ',
      'comic.svgNotes': 'КОНСПЕКТ',
      'comic.p4bubble': 'ЖОҚ. Өзім оқып аламын.',
      'comic.p4caption': 'Түннің қалғаны — конспект пен кофе.',
      'comic.svgExam': 'ЕМТИХАН',
      'comic.svgAnatomy': 'Анатомия',
      'comic.p5caption': 'Емтиханда.',
      'comic.p5bubble': 'Біреу «оқытушыға» деп ақша жинады ма? Әдеп комиссиясы бәрін біледі. Бәріміз адал тапсырамыз.',
      'comic.svgRetake': 'ҚАЙТА ТАПСЫРУ',
      'comic.svgPassed': 'ӨТТІ',
      'comic.p6caption': 'Дамир өзі тапсырды. Ерлан — қайта тапсыруға барады.',
      'comic.p6bubble': 'Білімді сатып ала алмайсың. Ал проблеманы — оп-оңай!',
      'comic.bannerTitle': 'ПАРА — ЛАЙФХАК ЕМЕС!',
      'comic.bannerText': 'Сатып алынған баға — бос диплом. Заңсыз ақша жинауды көрсең — хабарла.',
      'comic.call': 'Қоңырау шал',
      'comic.read': 'Кадр бойынша оқу',
      'comic.accentAria': 'Мұқаба түсі',
      'comic.accent': 'Мұқаба түсі:',

      'help.eyebrow': 'Қадамдық көмек',
      'help.title': 'Егер… не істеу керек',
      'help.text': 'Жағдайды таңдаңыз — тексерілген ресми байланыстары бар түсінікті әрекет алгоритмін алыңыз.',
      'help.c1424': 'ҚР ҰҚК Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің call-орталығы. Қоңырау тегін.',
      'help.call': 'Қоңырау шалу',
      'help.c115': 'ҚР Бас прокуратурасының call-орталығы — азаматтар құқықтарының бұзылуы. Қоңырау тегін.',
      'help.c1414': 'Бірыңғай байланыс орталығы: мемлекеттік қызметтер, eGov, eOtinish, МӘМС және тегін медициналық көмек бойынша кеңестер.',
      'help.c112': 'Полиция және бірыңғай шұғыл көмек қызметі — өмірге немесе денсаулыққа қауіп төнсе.',
      'help.lEotinish': 'Мемлекеттік органдарға онлайн өтініш',
      'help.lEgov': 'Мемлекеттік органдардың сенім телефондары',
      'help.lFms': 'ӘМСҚ — медициналық көмекке шағым',
      'help.lAdilet': 'Қазақстан Республикасының заңдары',
      'help.verified': 'Байланыстар 2026 жылғы қарашадағы ресми жарияланымдар (egov.kz, gov.kz) бойынша тексерілді. Жүгінер алдында олардың өзектілігін ресми сайттардан нақтылаңыз.',

      'tpl.eyebrow': 'Құжаттар',
      'tpl.title': 'Құжат үлгілері',
      'tpl.text': 'Деректеріңізді толтырыңыз — үлгі автоматты түрде жаңарады. Содан кейін құжатты қарап шығыңыз, көшіріңіз немесе жүктеп алыңыз.',
      'tpl.fName': 'Өтініш берушінің аты-жөні',
      'tpl.phName': 'Асанов Асан Асанұлы',
      'tpl.fContact': 'Мекенжай / байланыс',
      'tpl.phContact': 'Жезқазған қ., … көш., тел. …',
      'tpl.fTo': 'Кімге (орган / лауазым)',
      'tpl.phTo': '… басшысына',
      'tpl.fDetails': 'Жағдайдың мәні (қысқаша)',
      'tpl.phDetails': 'Фактілерді сипаттаңыз: күні, орны, кім, не болды',
      'tpl.view': 'Қарау',
      'tpl.copy': 'Көшіру',
      'tpl.disclaimer': 'Үлгілер танысу үшін берілген. Ресми түрде беру үшін eOtinish.kz қызметін пайдаланыңыз немесе тиісті органға жүгініңіз.',

      'an.eyebrow': 'Ашықтық',
      'an.title': 'Ашықтық және талдау',
      'an.text': 'Өңірлер картасы, ашықтық құралдарының мысалдары және статистика — қай жерде нақты, қай жерде демонстрациялық деректер екені адал белгіленген.',
      'an.mapTitle': 'Қазақстанның сызба картасы',
      'an.mapTag': 'Көрсеткіштер — демо',
      'an.mapAria': 'Қазақстан өңірлерінің сызба картасы',
      'an.legendOblast': 'Облыс',
      'an.legendCity': 'Республикалық маңызы бар қала',
      'an.legendCollege': 'Біздің колледж (Жезқазған)',
      'an.regionEmpty': 'Өңірді таңдаңыз',
      'an.regionEmptyText': 'Картадағы нүктені басыңыз немесе тізімнен таңдаңыз.',
      'an.region': 'Өңір',
      'an.wall': 'Адалдық қабырғасы',
      'an.fAll': 'Барлығы',
      'an.fProc': 'Сатып алулар',
      'an.fSave': 'Үнемдеу',
      'an.fControl': 'Қоғамдық бақылау',
      'an.fInit': 'Бастамалар',
      'an.stats': 'Статистика',
      'an.cpiTitle': 'Қазақстан Сыбайлас жемқорлықты қабылдау индексінде',
      'an.cpiSub': '100-ден ұпай (неғұрлым жоғары болса, сыбайлас жемқорлық деңгейі соғұрлым төмен қабылданады)',
      'an.real': 'Нақты деректер',
      'an.cpiSource': 'Дереккөз: Transparency International, Corruption Perceptions Index жыл сайынғы шығарылымдары (2017–2025). ҚР Сыбайлас жемқорлыққа қарсы саясатының 2022–2026 жылдарға арналған тұжырымдамасының мақсаты — 47 ұпай.',
      'an.cmpTitle': 'СЖҚИ-2025: салыстыру',
      'an.points': '100-ден ұпай',
      'an.cmpSource': 'Дереккөз: Transparency International, CPI 2025.',
      'an.topicsTitle': 'Өтініштер тақырыбы',
      'an.topicsSub': 'Платформадағы өтініштер құрылымының мысалы',
      'an.demo': 'Демо-деректер',
      'an.topicsNote': 'Диаграмманың жұмысын көрсетуге арналған шартты деректер. Ресми статистика емес.',

      'cm.eyebrow': 'Бірге',
      'cm.title': 'Қоғамдастық және кері байланыс',
      'cm.text': 'Идеяңызбен бөлісіңіз, сұрақ қойыңыз немесе еріктілерге қосылыңыз.',
      'cm.formTitle': 'Кері байланыс формасы',
      'cm.demoWarn': '<b>Демонстрациялық форма.</b> Хабарламалар ешқайда жіберілмейді және ресми шағым болып табылмайды. Сыбайлас жемқорлық туралы хабарлау үшін <a href="tel:1424">1424</a> нөміріне қоңырау шалыңыз немесе <a href="https://eotinish.kz" target="_blank" rel="noopener">eOtinish.kz</a> қызметін пайдаланыңыз.',
      'cm.fName': 'Аты <small>(міндетті емес)</small>',
      'cm.phName': 'Сізге қалай жүгінейік',
      'cm.fCategory': 'Өтініш санаты',
      'cm.cat0': '— санатты таңдаңыз —',
      'cm.cat1': 'Жоба туралы сұрақ',
      'cm.cat2': 'Идея немесе ұсыныс',
      'cm.cat3': 'Сайттағы қате',
      'cm.cat4': 'Білім беру және тесттер',
      'cm.cat5': 'Басқа',
      'cm.fMessage': 'Хабарлама мәтіні',
      'cm.phMessage': 'Хабарлама жазыңыз (кемінде 10 таңба)',
      'cm.send': 'Жіберу',
      'cm.faq': 'Жиі қойылатын сұрақтар',

      'vol.eyebrow': 'Еріктілік',
      'vol.title': 'Өзгерістің бір бөлігі бол',
      'vol.text': 'Колледжде және қала мектептерінде адалдық сабақтарын өткізуге көмектесіңіз, қоғамдық мониторингке қатысыңыз және пайдалы контент жасаңыз.',
      'vol.li1': 'Ағартушылық сабақтар мен квиздер',
      'vol.li2': 'Мемлекеттік қызметтердің қолжетімділігін бақылау',
      'vol.li3': 'Дизайн, бейне және әлеуметтік желілер',
      'vol.count': 'өтінім осы құрылғыда сақталған',
      'vol.fName': 'Аты',
      'vol.phName': 'Атыңыз',
      'vol.fCity': 'Қала',
      'vol.phCity': 'Мысалы, Жезқазған',
      'vol.fAge': 'Жасы',
      'vol.fDirs': 'Бағыттар (бірнешеуін таңдауға болады)',
      'vol.d1': 'Ағарту',
      'vol.d2': 'Мониторинг',
      'vol.d3': 'Медиа',
      'vol.d5': 'Іс-шаралар',
      'vol.consent': 'Бұл оқу демо-формасы екенін түсінемін: деректер тек менің браузерімде сақталады және ешқайда жіберілмейді.',
      'vol.join': 'Қосылу',

      'footer.about': 'Сыбайлас жемқорлыққа қарсы іс-қимыл, азаматтардың құқықтары және ашықтық туралы білім беру жобасы. Мемлекеттік ресурс емес.',
      'footer.college': 'Жезқазған индустриалдық-гуманитарлық колледжі · П-11 тобы',
      'footer.nav': 'Мәзір',
      'footer.contacts': 'Ресми байланыстар',
      'footer.f1424': '1424 — сыбайлас жемқорлық фактілері бойынша',
      'footer.f115': '115 — Бас прокуратура',
      'footer.f1414': '1414 — Бірыңғай байланыс орталығы',
      'footer.resources': 'Пайдалы ресурстар',
      'footer.copy': '«Таза болашақ бізден басталады». Жезқазған индустриалдық-гуманитарлық колледжі П-11 тобының оқу IT-жобасы.',
      'footer.tech': 'HTML5, CSS3, JavaScript, Chart.js және Lucide Icons негізінде жасалған.',
      'common.toTop': 'Жоғарыға',
      'common.close': 'Жабу',
      'nav.video': 'Бейне',
      'nav.videoFull': 'Бейнеролик',
      'video.eyebrow': 'Бейнеролик',
      'video.title': 'Сыбайлас жемқорлыққа қарсы әлеуметтік ролик',
      'video.text': 'Оңай ақша мен адал болашақ арасындағы таңдау туралы қысқа ролик. Соңғы бөлімі біздің колледж ғимаратының алдында түсірілген.',
      'video.aria': 'Сыбайлас жемқорлыққа қарсы әлеуметтік ролик',
      'video.seek': 'Айналдыру',
      'video.errTitle': 'Бейне жүктелмеді',
      'video.errText': 'anticorruption-video.mp4 файлы index.html файлымен бір қалтада тұрғанын тексеріңіз.',
      'video.len': 'Ұзақтығы 0:45',
      'video.format': 'Тік формат 9:16',
      'video.place': 'Жезқазған',
      'video.chapters': 'Ролик бөлімдері',
      'video.chapHint': 'Сол сәтке өту үшін бөлімді басыңыз.',
      'video.ctaTitle': 'Ойландырды ма?',
      'video.ctaText': 'Сыбайлас жемқорлыққа тап болсаңыз — тегін 1424 нөміріне хабарлаңыз.',
      "nav.otinish": "Өтініш",
      "nav.otinishFull": "Өтініш және фотосы бар хабарлама",
      "ot.eyebrow": "Әрекет ету",
      "ot.title": "Фотосы бар хабарлама",
      "ot.text": "Сыбайлас жемқорлық туралы фотосы бар хабарламаны ресми арнаға жіберіңіз — атыңызды жазбайсыз, ал сайт фотодан геобелгілер мен телефон деректерін өшіреді. Ресми өтініш «Құжат үлгілері» бөлімінде дайындалады.",
      "nav.photo": "Фото-хабар",
      "tpl.wizTitle": "Өтініш — қадам бойынша",
      "hero.groupCode": "П-11",
      "es.eyebrow": "Эссе · П-11 тобы",
      "es.title": "Адалдық бізден басталады",
      "es.text": "Үш студент — жемқорлықсыз Қазақстан туралы үш көзқарас. Эссені оқу немесе тыңдау үшін фотоны басыңыз.",
      "nav.essays": "Студенттер эсселері",
      "a11y.open": "Арнайы мүмкіндіктер: мүмкіндігі шектеулі адамдарға арналған нұсқа",
      "a11y.skip": "Негізгі мазмұнға өту",
      "a11y.title": "Арнайы мүмкіндіктер",
      "a11y.intro": "Сайтты өзіңізге ыңғайлап баптаңыз. Барлығы осы құрылғыда сақталады.",
      "a11y.close": "Жабу",
      "a11y.sProfiles": "Дайын профильдер",
      "a11y.p.vision": "Нашар көретіндерге",
      "a11y.pd.vision": "Ірі мәтін, контраст, анық қаріп",
      "a11y.p.blind": "Дауыстап оқу",
      "a11y.pd.blind": "Мәтінді басқанда сайт оқып береді",
      "a11y.p.dyslexia": "Дислексия",
      "a11y.pd.dyslexia": "Жеңіл қаріп, аралықтар, маска",
      "a11y.p.epilepsy": "Жыпылықсыз",
      "a11y.pd.epilepsy": "Анимациялар мен әсерлер өшірілген",
      "a11y.p.focus": "Зейін",
      "a11y.pd.focus": "Артық ештеңе жоқ, суретсіз",
      "a11y.p.motor": "Қимыл",
      "a11y.pd.motor": "Ірі батырмалар мен курсор",
      "a11y.sText": "Мәтін",
      "a11y.lSize": "Мәтін өлшемі",
      "a11y.lFont": "Қаріп",
      "a11y.fDefault": "Қалыпты",
      "a11y.fReadable": "Анық",
      "a11y.fEasy": "Жеңіл",
      "a11y.lSpacing": "Аралықтар",
      "a11y.sp0": "Қалыпты",
      "a11y.sp1": "Кеңірек",
      "a11y.sp2": "Кең",
      "a11y.sColor": "Түс және контраст",
      "a11y.lContrast": "Түс схемасы",
      "a11y.cDefault": "Қалыпты",
      "a11y.cHigh": "Контрастты",
      "a11y.cWb": "Ақ фонда қара",
      "a11y.cBw": "Қара фонда ақ",
      "a11y.cYb": "Қара фонда сары",
      "a11y.t.gray": "Ақ-қара түстер",
      "a11y.d.gray": "Бүкіл беттен түсті алып тастайды",
      "a11y.sView": "Қабылдау және басқару",
      "a11y.t.speak": "Дауыстап оқу",
      "a11y.d.speak": "Кез келген мәтінді басыңыз — ол дыбысталады",
      "a11y.t.motion": "Анимацияны тоқтату",
      "a11y.d.motion": "Қозғалыссыз, жыпылықсыз, баяу айналдырусыз",
      "a11y.t.simple": "Жеңілдетілген көрініс",
      "a11y.d.simple": "Сәндік фон мен шыны әсерлерінсіз",
      "a11y.t.noimg": "Суреттерді жасыру",
      "a11y.d.noimg": "Тек мәтін қалады",
      "a11y.t.links": "Сілтемелер мен батырмаларды белгілеу",
      "a11y.d.links": "Астын сызу және анық фокус жиегі",
      "a11y.t.targets": "Ірі батырмалар",
      "a11y.d.targets": "Саусақпен не тінтуірмен басу оңай",
      "a11y.t.cursor": "Ірі курсор",
      "a11y.d.cursor": "Үлкен, анық көрінетін нұсқар",
      "a11y.t.guide": "Оқуға арналған маска",
      "a11y.d.guide": "Курсор астындағы жолдан басқасын күңгірттейді",
      "a11y.reset": "Барлық баптауларды тастау",
      "a11y.note": "Сайтты пернетақтамен (Tab, Enter, Esc) және NVDA, VoiceOver, TalkBack сияқты экрандық дикторлармен пайдалануға болады.",
      "a11y.stop": "Оқуды тоқтату",
      "tpl.wizText": "5 қадамға жауап беріңіз — сайт орыс немесе қазақ тілінде ресми өтініш құрастырады. Оны көшіріп, жүктеп алып, eOtinish.kz арқылы жіберуге болады.",
      "ot.tabsAria": "Жүгіну тәсілі",
      "ot.tabWizard": "Өтініш",
      "ot.tabReport": "Фотосы бар хабарлама",
      "wiz.back": "Артқа",
      "wiz.next": "Келесі",
      "wiz.myTitle": "Менің өтініштерім",
      "wiz.myTag": "Осы құрылғыда",
      "wiz.approx": "Жауап мерзімі мерекелерді есепке алмай, жұмыс күндерімен есептелген.",
      "rep.title": "Фотосы бар хабарлама",
      "rep.badge": "Атыңызсыз",
      "rep.privacy": "Сайт атыңызды сұрамайды және хабарламаны серверде сақтамайды. Фотолардан геобелгілер, телефон моделі және түсірілген күні өшіріледі. Хабарламаны ресми арнаға өзіңіз жібересіз.",
      "rep.where": "Қай жерде болды",
      "rep.phWhere": "Мысалы, колледж, 204 кабинет",
      "rep.when": "Қашан",
      "rep.what": "Не болды",
      "rep.phWhat": "Кім, не талап етті, қанша сома, куәлер болды ма",
      "rep.photos": "Фото (5-ке дейін)",
      "rep.add": "Фото қосу",
      "rep.addHint": "Басыңыз немесе осында сүйреңіз · JPG, PNG, HEIC",
      "rep.sendTitle": "Қалай жіберу керек",
      "rep.step1": "Хабарлама мәтінін көшіріңіз.",
      "rep.step2": "Фотоларды метадеректерсіз сақтаңыз.",
      "rep.step3": "Ресми арнаны ашып, мәтін мен фотоларды жіберіңіз.",
      "rep.copyBtn": "Мәтінді көшіру",
      "rep.saveBtn": "Фотоларды метадеректерсіз сақтау",
      "rep.chWa": "WhatsApp-бот",
      "rep.chTg": "Telegram-бот",
      "rep.chCall": "Call-орталық, тегін",
      "rep.botNote": "Боттарды Сыбайлас жемқорлыққа қарсы іс-қимыл агенттігі іске қосқан (WhatsApp — 2025 жылғы ақпанда). Агенттік 2025 жылғы шілдеде ҰҚК құрамына қосылғаннан кейін боттардың жұмыс істейтінін 1424 нөмірі арқылы нақтылаңыз.",
      "rep.anonNote": "Мессенджерлерде толық анонимдік жоқ: бот сіздің аккаунтыңызды көреді. Заң сыбайлас жемқорлық туралы хабарлағандарға құпиялылық пен қорғауға кепілдік береді.",
      "ai.fab": "ЖИ-көмекші",
      "ai.title": "ЖИ-көмекші",
      "ai.clear": "Чатты тазалау",
      "ai.placeholder": "Сұрақ қойыңыз…",
      "ai.inputAria": "Сыбайлас жемқорлық, құқықтар немесе сайт туралы сұрақ",
      "ai.send": "Жіберу",
      "ai.stop": "Тоқтату",
      "ai.note": "ЖИ қателесуі мүмкін. Бұл заңгерлік кеңес емес — маңызды мәселені 1424 немесе eOtinish арқылы нақтылаңыз."
    }
  },

  /* ---------------------------------------------------------
     2. Сообщения JavaScript
     --------------------------------------------------------- */
  msg: {
    ru: {
      'lang.changed': 'Язык сайта: русский',
      'theme.light': 'Светлая тема включена',
      'theme.dark': 'Тёмная тема включена',
      'menu.open': 'Открыть меню',
      'menu.close': 'Закрыть меню',
      'calc.ready': 'Расчёт готов',
      'calc.bigLoss': '{sum} ₸ — это серьёзные потери для общества.',
      'calc.smallLoss': '{sum} ₸ — даже небольшие суммы складываются в большие потери.',
      'calc.unit': '≈ {price} ₸ за ед. (демо)',
      'calc.pcs': '{n} шт. (демо-цены)',
      'calc.amountText': '{sum} тенге',
      'calc.units': 'Количество единиц',
      'charts.fallback': 'Графики загружаются из интернета (Chart.js). Проверьте подключение и обновите страницу.',
      'game.correct': 'Верно! +{n} очков',
      'game.bonus': ' (бонус за серию)',
      'game.wrong': 'Неверно. Правильный ответ: {answer}',
      'game.ansBribe': 'взятка / недопустимо',
      'game.ansGift': 'допустимый подарок',
      'game.next': 'Далее',
      'game.showResult': 'Показать результат',
      'game.t90': 'Эксперт по честности!',
      'game.t70': 'Отличный результат!',
      'game.t50': 'Хорошее начало',
      'game.t0': 'Есть над чем поработать',
      'game.finalText': 'Верных ответов: {c} из {t}. Набрано очков: {s}. Главное правило: если подарок связан с ожиданием услуги или решения — это уже не подарок.',
      'game.record': 'Новый рекорд!',
      'game.recordText': 'Вы набрали {s} очков.',
      'game.over': 'Игра завершена',
      'game.overText': 'Ваш рекорд: {s} очков.',
      'quiz.next': 'Следующий вопрос',
      'quiz.showResult': 'Посмотреть результат',
      'quiz.yes': 'Правильно!',
      'quiz.no': 'Неправильно.',
      'quiz.r90': 'Вы отлично знаете свои права!',
      'quiz.r90t': 'Поделитесь этими знаниями с друзьями и близкими — так общество становится сильнее.',
      'quiz.r70': 'Хороший уровень знаний',
      'quiz.r70t': 'Вы уверенно ориентируетесь в большинстве ситуаций. Повторите вопросы с ошибками.',
      'quiz.r40': 'Неплохо, но есть пробелы',
      'quiz.r40t': 'Загляните в раздел «Что делать, если…» — там пошаговые алгоритмы для типичных ситуаций.',
      'quiz.r0': 'Стоит разобраться подробнее',
      'quiz.r0t': 'Знание прав — лучшая защита от коррупции. Изучите разделы сайта и пройдите тест снова.',
      'quiz.done': 'Тест завершён',
      'quiz.doneText': 'Результат: {r} из {t} ({p}%)',
      'quiz.letters': 'АБВГ',
      'concepts.more': 'Подробнее',
      'concepts.what': 'Что это такое',
      'concepts.examples': 'Примеры из жизни',
      'concepts.why': 'Почему это опасно',
      'concepts.law': 'Закон:',
      'concepts.lawsAt': 'Тексты законов — на',
      'help.progress': 'Выполнено: {d} из {n}',
      'help.mark': 'Отметить как выполненное',
      'help.marked': 'Выполнено',
      'help.stepAria': 'Отметить шаг {n}',
      'help.tips': 'Полезные советы',
      'help.warn': 'Дача взятки наказуема так же, как и её получение. Не платите — сообщайте.',
      'help.allDone': 'Все шаги пройдены',
      'help.allDoneText': 'Вы знаете, как действовать в этой ситуации.',
      'tpl.previewSub': 'Предварительный просмотр документа',
      'tpl.print': 'Печать / PDF',
      'tpl.downloadDoc': 'Скачать .DOC',
      'tpl.copied': 'Текст скопирован',
      'tpl.copiedText': 'Вставьте его в документ или обращение.',
      'tpl.copyFail': 'Не удалось скопировать',
      'tpl.copyFailText': 'Выделите текст вручную и нажмите Ctrl+C.',
      'tpl.fileDone': 'Файл скачан',
      'tpl.docDone': 'Документ Word скачан',
      'tpl.docDoneText': '{file} — откройте в Microsoft Word.',
      'tpl.popup': 'Окно печати заблокировано',
      'tpl.popupText': 'Разрешите всплывающие окна для этого сайта.',
      'tpl.pName': 'ФИО полностью',
      'tpl.pContact': 'адрес, телефон, e-mail',
      'tpl.pDetails': 'опишите ситуацию: дата, место, участники, что произошло',
      'tpl.date': 'Дата',
      'tpl.sign': 'Подпись',
      'map.choose': '— выберите регион —',
      'map.typeCity': 'Город республиканского значения',
      'map.typeOblast': 'Область',
      'map.center': 'Административный центр',
      'map.status': 'Статус',
      'map.note': 'Справка',
      'map.new2022': 'Образована в 2022 году',
      'map.college': 'Наш колледж',
      'map.collegeVal': 'ЖИГК, г. Жезказган',
      'map.report': 'Сообщить о коррупции',
      'map.reportVal': '1424 (бесплатно)',
      'map.demo': 'Демо-показатели',
      'map.notReal': 'Не реальные данные',
      'map.m1': 'Индекс открытости (условный)',
      'map.m2': 'Доля услуг онлайн (условно)',
      'map.m3': 'Ответы на обращения в срок (условно)',
      'map.reports': 'Условных обращений на платформе',
      'map.source': 'Сведения об административных центрах — открытые данные. Показатели в жёлтом блоке сгенерированы для демонстрации интерфейса.',
      'map.sea1': 'Каспийское',
      'map.sea2': 'море',
      'wall.real': 'Реальный инструмент',
      'wall.demo': 'Демо-пример',
      'wall.cond': 'Условный пример',
      'wall.more': 'Подробнее',
      'wall.support': 'Поддержать',
      'wall.supported': 'Поддерживаю',
      'wall.thanks': 'Спасибо за поддержку!',
      'wall.thanksText': 'Хорошие практики должны быть заметны.',
      'form.catErr': 'Выберите категорию обращения',
      'form.msgErr': 'Сообщение должно содержать минимум 10 символов',
      'form.check': 'Проверьте форму',
      'form.checkText': 'Заполните обязательные поля.',
      'form.processing': 'Обработка…',
      'form.send': 'Отправить',
      'form.thanks': 'Спасибо, {name}!',
      'form.thanksAnon': 'Спасибо за сообщение!',
      'form.demoSent': 'Это демо-форма: сообщение не отправлено. Для сообщений о коррупции звоните 1424.',
      'vol.nameErr': 'Укажите имя',
      'vol.emailErr': 'Введите корректный email',
      'vol.ageErr': 'Возраст от 14 до 99 лет',
      'vol.consentErr': 'Подтвердите согласие',
      'vol.checkText': 'Некоторые поля заполнены неверно.',
      'vol.dirTitle': 'Выберите направление',
      'vol.dirText': 'Отметьте хотя бы одно направление участия.',
      'vol.welcome': 'Добро пожаловать, {name}!',
      'vol.welcomeText': 'Направления: {dirs}. Демо: заявка сохранена только в этом браузере.',
      'comic.frame': 'Кадр {n} из {t}',
      'comic.prev': 'Предыдущий кадр',
      'comic.next': 'Следующий кадр',
      'comic.readerSub': 'Листайте стрелками ← → или кнопками',
      'comic.end': 'Конец истории',
      'comic.restart': 'С начала',
      'comic.accentSaved': 'Цвет обложки изменён',
      'video.play': 'Смотреть ролик',
      'video.replay': 'Смотреть ещё раз',
      'video.pause': 'Пауза',
      'video.resume': 'Продолжить',
      'video.mute': 'Выключить звук',
      'video.unmute': 'Включить звук',
      'video.full': 'На весь экран',
      'video.goto': 'Перейти к {time}: {title}',
      'video.loading': 'Загрузка видео… {p}%',
      "wiz.q1": "Что вы хотите подать?",
      "wiz.q2": "Кому адресовать?",
      "wiz.q3": "Опишите ситуацию",
      "wiz.q4": "Данные заявителя",
      "wiz.q5": "Ваше обращение готово",
      "wiz.daysNote": "Срок — как правило, до {days} рабочих дней",
      "wiz.fOther": "Название органа",
      "wiz.phOther": "Например, отдел образования района",
      "wiz.fSubject": "Тема (кратко)",
      "wiz.phSubject": "Например, требование денег за зачёт",
      "wiz.fDetails": "Что произошло",
      "wiz.phDetails": "Факты по порядку: кто, что сделал, когда, есть ли свидетели или документы",
      "wiz.fDate": "Дата событий",
      "wiz.fPlace": "Место",
      "wiz.phPlace": "Город, организация, кабинет",
      "wiz.fAttach": "Приложу документы или фото",
      "wiz.fName": "ФИО полностью",
      "wiz.phName": "Иванов Иван Иванович",
      "wiz.fContact": "Телефон или email",
      "wiz.fAddress": "Адрес (необязательно)",
      "wiz.phAddress": "г. Жезказган, ул. …",
      "wiz.fLang": "Язык документа",
      "wiz.langRu": "Русский",
      "wiz.langKk": "Қазақша",
      "wiz.loginNote": "Официальное обращение через eOtinish подаётся от вашего имени: вход через eGov (ЭЦП, QR или Face ID). Чтобы сообщить о коррупции без имени, используйте вкладку «Сообщение с фото».",
      "wiz.errType": "Выберите тип обращения",
      "wiz.errTarget": "Выберите адресата",
      "wiz.errOther": "Укажите название органа",
      "wiz.errSubject": "Укажите тему",
      "wiz.errDetails": "Опишите ситуацию подробнее — минимум 30 символов",
      "wiz.errName": "Укажите ФИО",
      "wiz.errContact": "Укажите телефон или email",
      "wiz.check": "Проверьте поля",
      "wiz.copy": "Копировать",
      "wiz.open": "Открыть eOtinish",
      "wiz.save": "Сохранить в «Мои обращения»",
      "wiz.saved": "Сохранено",
      "tpl.wizBadge": "Пошагово",
      "es.translated": "Перевод с казахского языка",
      "es.studentN": "Студент {n}",
      "es.soon": "Эссе скоро появится",
      "es.placeholderShort": "Фото и эссе будут добавлены.",
      "es.textSoon": "Текст эссе будет добавлен.",
      "es.placeholder": "Здесь будет эссе этого студента (около 100 слов) и его фото.",
      "es.read": "Читать и слушать",
      "es.listen": "Слушать эссе",
      "es.stopListen": "Остановить",
      "es.voiceKk": "Читает казахский голос вашего устройства",
      "es.voiceRu": "Казахского голоса на устройстве нет — читает русский голос, произношение может быть неточным",
      "es.voiceAny": "Читает голос вашего устройства",
      "es.noVoice": "Этот браузер не умеет читать текст вслух",
      "es.audio": "Озвучено нейроголосом (Speko)",
      "es.group": "Группа П-11 · ЖИГК",
      "es.words": "{n} слов",
      "es.prev": "Предыдущее",
      "es.next": "Следующее",
      "a11y.speakOn": "Чтение вслух включено. Нажмите на любой текст.",
      "a11y.noSpeech": "Этот браузер не умеет читать текст вслух",
      "a11y.kkVoice": "Казахского голоса на этом устройстве нет — текст читается русским голосом",
      "a11y.resetDone": "Настройки доступности сброшены",
      "a11y.profileOn": "Профиль включён: {name}",
      "a11y.profileOff": "Профиль выключен",
      "tpl.sectionAppeal": "Обращение (өтініш)",
      "wiz.howTitle": "Что дальше",
      "wiz.how1": "Войдите на eotinish.kz через eGov (ЭЦП, QR или Face ID).",
      "wiz.how2": "Выберите адресата: {target}.",
      "wiz.how3": "Вставьте скопированный текст и приложите файлы.",
      "wiz.how4": "Сохраните номер обращения — по нему видно статус.",
      "wiz.collegeTip": "В колледж обращение можно подать и лично через канцелярию — попросите отметку о регистрации.",
      "wiz.restart": "Новое обращение",
      "wiz.myEmpty": "Здесь появятся сохранённые обращения со сроком ответа. Они хранятся только на этом устройстве.",
      "wiz.draft": "Черновик",
      "wiz.sent": "Подано",
      "wiz.markSent": "Я подал(а)",
      "wiz.view": "Текст",
      "wiz.del": "Удалить",
      "wiz.delConfirm": "Точно удалить?",
      "wiz.deadline": "Ответ до {date}",
      "wiz.left": "осталось {n} раб. дн.",
      "wiz.today": "срок — сегодня",
      "wiz.overdue": "Срок прошёл: можно обжаловать бездействие в вышестоящий орган",
      "wiz.created": "Создано {date}",
      "wiz.toastSaved": "Обращение сохранено",
      "wiz.toastSent": "Отмечено как поданное — срок ответа посчитан",
      "wiz.toastDeleted": "Обращение удалено",
      "rep.gps": "Геометка удалена",
      "rep.device": "Модель телефона удалена",
      "rep.time": "Дата съёмки удалена",
      "rep.clean": "Метаданные очищены",
      "rep.processing": "Обработка…",
      "rep.remove": "Удалить фото",
      "rep.max": "Можно добавить не больше 5 фото",
      "rep.bad": "Не удалось открыть файл: {name}",
      "rep.copied": "Текст скопирован",
      "rep.copiedText": "Вставьте его в чат бота или прочитайте оператору 1424.",
      "rep.needText": "Опишите, что произошло, — минимум 20 символов",
      "rep.noPhotos": "Сначала добавьте фото",
      "rep.saved": "Сохранено фото: {n}",
      "rep.saveFail": "Фото не сохранены",
      "rep.saveHint": "Фото сохраняются по одному — подтвердите каждое.",
      "rep.tTitle": "Сообщение о возможной коррупции",
      "rep.tWhere": "Где",
      "rep.tWhen": "Когда",
      "rep.tWhat": "Что произошло",
      "rep.tPhotos": "Фото: {n} шт., прикреплю отдельно.",
      "rep.tNoName": "Отправлено без указания имени.",
      "rep.notSet": "не указано",
      "ai.welcome": "Здравствуйте! Я помощник сайта «Чистое будущее». Спросите, что делать, если требуют взятку, куда звонить, как подать өтініш или чем подарок отличается от взятки.",
      "ai.statusAi": "Отвечает Claude (ИИ)",
      "ai.statusBasic": "Базовый режим · готовые ответы",
      "ai.statusCheck": "Подключение…",
      "ai.thinking": "Думаю…",
      "ai.stopped": "(остановлено)",
      "ai.errRate": "Слишком много запросов. Попробуйте чуть позже.",
      "ai.errSession": "Сессия claude.ai истекла — войдите снова и повторите вопрос.",
      "ai.errRefused": "На это я не отвечу. Спросите о коррупции, правах граждан или о сайте.",
      "ai.errUpstream": "Связь прервалась. Отправьте вопрос ещё раз.",
      "ai.fallbackNote": "ИИ сейчас недоступен — отвечаю в базовом режиме.",
      "ai.basicHint": "Полный ИИ-режим работает, когда сайт открыт на claude.ai и вы вошли в свой аккаунт. Сейчас я отвечаю готовыми ответами на частые вопросы."
    },

    en: {
      'lang.changed': 'Site language: English',
      'theme.light': 'Light theme on',
      'theme.dark': 'Dark theme on',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'calc.ready': 'Calculation ready',
      'calc.bigLoss': '{sum} ₸ — a serious loss for society.',
      'calc.smallLoss': '{sum} ₸ — even small sums add up to big losses.',
      'calc.unit': '≈ {price} ₸ per unit (demo)',
      'calc.pcs': '{n} pcs (demo prices)',
      'calc.amountText': '{sum} tenge',
      'calc.units': 'Number of units',
      'charts.fallback': 'Charts load from the internet (Chart.js). Check your connection and refresh the page.',
      'game.correct': 'Correct! +{n} points',
      'game.bonus': ' (streak bonus)',
      'game.wrong': 'Not quite. The right answer: {answer}',
      'game.ansBribe': 'bribe / not acceptable',
      'game.ansGift': 'acceptable gift',
      'game.next': 'Next',
      'game.showResult': 'Show result',
      'game.t90': 'Integrity expert!',
      'game.t70': 'Excellent result!',
      'game.t50': 'A good start',
      'game.t0': 'Room to improve',
      'game.finalText': 'Correct answers: {c} of {t}. Points: {s}. The key rule: if a gift comes with the expectation of a favour or decision, it is no longer a gift.',
      'game.record': 'New record!',
      'game.recordText': 'You scored {s} points.',
      'game.over': 'Game over',
      'game.overText': 'Your record: {s} points.',
      'quiz.next': 'Next question',
      'quiz.showResult': 'See result',
      'quiz.yes': 'Correct!',
      'quiz.no': 'Incorrect.',
      'quiz.r90': 'You know your rights very well!',
      'quiz.r90t': 'Share this knowledge with friends and family — that is how society grows stronger.',
      'quiz.r70': 'A good level of knowledge',
      'quiz.r70t': 'You handle most situations confidently. Review the questions you got wrong.',
      'quiz.r40': 'Not bad, but there are gaps',
      'quiz.r40t': 'Take a look at “What to do if…” — it has step-by-step plans for typical situations.',
      'quiz.r0': 'Worth a closer look',
      'quiz.r0t': 'Knowing your rights is the best protection against corruption. Explore the site and try again.',
      'quiz.done': 'Quiz complete',
      'quiz.doneText': 'Result: {r} of {t} ({p}%)',
      'quiz.letters': 'ABCD',
      'concepts.more': 'Learn more',
      'concepts.what': 'What it is',
      'concepts.examples': 'Real-life examples',
      'concepts.why': 'Why it is harmful',
      'concepts.law': 'Law:',
      'concepts.lawsAt': 'Full texts of laws are at',
      'help.progress': 'Done: {d} of {n}',
      'help.mark': 'Mark as done',
      'help.marked': 'Done',
      'help.stepAria': 'Mark step {n}',
      'help.tips': 'Useful tips',
      'help.warn': 'Giving a bribe is punishable just like taking one. Don’t pay — report it.',
      'help.allDone': 'All steps completed',
      'help.allDoneText': 'You know how to act in this situation.',
      'tpl.previewSub': 'Document preview',
      'tpl.print': 'Print / PDF',
      'tpl.downloadDoc': 'Download .DOC',
      'tpl.copied': 'Text copied',
      'tpl.copiedText': 'Paste it into your document or appeal.',
      'tpl.copyFail': 'Could not copy',
      'tpl.copyFailText': 'Select the text manually and press Ctrl+C.',
      'tpl.fileDone': 'File downloaded',
      'tpl.docDone': 'Word document downloaded',
      'tpl.docDoneText': '{file} — open it in Microsoft Word.',
      'tpl.popup': 'Print window blocked',
      'tpl.popupText': 'Allow pop-ups for this site.',
      'tpl.pName': 'full name',
      'tpl.pContact': 'address, phone, e-mail',
      'tpl.pDetails': 'describe the situation: date, place, people involved, what happened',
      'tpl.date': 'Date',
      'tpl.sign': 'Signature',
      'map.choose': '— choose a region —',
      'map.typeCity': 'City of republican significance',
      'map.typeOblast': 'Region',
      'map.center': 'Administrative centre',
      'map.status': 'Status',
      'map.note': 'Note',
      'map.new2022': 'Established in 2022',
      'map.college': 'Our college',
      'map.collegeVal': 'ZhIHC, Zhezkazgan',
      'map.report': 'Report corruption',
      'map.reportVal': '1424 (free)',
      'map.demo': 'Demo indicators',
      'map.notReal': 'Not real data',
      'map.m1': 'Openness index (illustrative)',
      'map.m2': 'Share of services online (illustrative)',
      'map.m3': 'Appeals answered on time (illustrative)',
      'map.reports': 'Illustrative appeals on the platform',
      'map.source': 'Administrative centres are open data. The indicators in the yellow box are generated to demonstrate the interface.',
      'map.sea1': 'Caspian',
      'map.sea2': 'Sea',
      'wall.real': 'Real tool',
      'wall.demo': 'Demo example',
      'wall.cond': 'Illustrative example',
      'wall.more': 'Learn more',
      'wall.support': 'Support',
      'wall.supported': 'Supported',
      'wall.thanks': 'Thanks for your support!',
      'wall.thanksText': 'Good practices deserve to be seen.',
      'form.catErr': 'Choose a category',
      'form.msgErr': 'The message must be at least 10 characters long',
      'form.check': 'Check the form',
      'form.checkText': 'Please fill in the required fields.',
      'form.processing': 'Processing…',
      'form.send': 'Send',
      'form.thanks': 'Thank you, {name}!',
      'form.thanksAnon': 'Thank you for your message!',
      'form.demoSent': 'This is a demo form: the message was not sent. To report corruption, call 1424.',
      'vol.nameErr': 'Enter your name',
      'vol.emailErr': 'Enter a valid email',
      'vol.ageErr': 'Age must be between 14 and 99',
      'vol.consentErr': 'Please confirm',
      'vol.checkText': 'Some fields are filled in incorrectly.',
      'vol.dirTitle': 'Choose an area',
      'vol.dirText': 'Select at least one area of involvement.',
      'vol.welcome': 'Welcome, {name}!',
      'vol.welcomeText': 'Areas: {dirs}. Demo: the application is saved only in this browser.',
      'comic.frame': 'Panel {n} of {t}',
      'comic.prev': 'Previous panel',
      'comic.next': 'Next panel',
      'comic.readerSub': 'Use the ← → arrow keys or the buttons',
      'comic.end': 'The end',
      'comic.restart': 'From the start',
      'comic.accentSaved': 'Cover colour changed',
      'video.play': 'Watch the video',
      'video.replay': 'Watch again',
      'video.pause': 'Pause',
      'video.resume': 'Play',
      'video.mute': 'Mute',
      'video.unmute': 'Unmute',
      'video.full': 'Full screen',
      'video.goto': 'Jump to {time}: {title}',
      'video.loading': 'Loading video… {p}%',
      "wiz.q1": "What would you like to file?",
      "wiz.q2": "Who is it addressed to?",
      "wiz.q3": "Describe the situation",
      "wiz.q4": "Applicant details",
      "wiz.q5": "Your appeal is ready",
      "wiz.daysNote": "Usually within {days} working days",
      "wiz.fOther": "Name of the agency",
      "wiz.phOther": "e.g. district education department",
      "wiz.fSubject": "Subject (briefly)",
      "wiz.phSubject": "e.g. money demanded for a pass",
      "wiz.fDetails": "What happened",
      "wiz.phDetails": "Facts in order: who did what, when, any witnesses or documents",
      "wiz.fDate": "Date of events",
      "wiz.fPlace": "Place",
      "wiz.phPlace": "City, organisation, room",
      "wiz.fAttach": "I will attach documents or photos",
      "wiz.fName": "Full name",
      "wiz.phName": "Aslan Serikov",
      "wiz.fContact": "Phone or email",
      "wiz.fAddress": "Address (optional)",
      "wiz.phAddress": "Zhezkazgan, … St.",
      "wiz.fLang": "Document language",
      "wiz.langRu": "Russian",
      "wiz.langKk": "Kazakh",
      "wiz.loginNote": "An official appeal via eOtinish is filed in your name: you sign in through eGov (EDS, QR or Face ID). To report corruption without your name, use the “Report with photos” tab.",
      "wiz.errType": "Choose the type of appeal",
      "wiz.errTarget": "Choose who it is addressed to",
      "wiz.errOther": "Enter the name of the agency",
      "wiz.errSubject": "Enter a subject",
      "wiz.errDetails": "Describe the situation in more detail — at least 30 characters",
      "wiz.errName": "Enter your full name",
      "wiz.errContact": "Enter a phone number or email",
      "wiz.check": "Check the fields",
      "wiz.copy": "Copy",
      "wiz.open": "Open eOtinish",
      "wiz.save": "Save to “My appeals”",
      "wiz.saved": "Saved",
      "tpl.wizBadge": "Step by step",
      "es.translated": "Translated from Kazakh",
      "es.studentN": "Student {n}",
      "es.soon": "Essay coming soon",
      "es.placeholderShort": "Photo and essay will be added.",
      "es.textSoon": "The essay text will be added.",
      "es.placeholder": "This student’s essay (about 100 words) and photo will appear here.",
      "es.read": "Read & listen",
      "es.listen": "Listen to the essay",
      "es.stopListen": "Stop",
      "es.voiceKk": "Read by your device’s Kazakh voice",
      "es.voiceRu": "No Kazakh voice on this device — a Russian voice reads it, pronunciation may be off",
      "es.voiceAny": "Read by your device’s voice",
      "es.noVoice": "This browser can’t read text aloud",
      "es.audio": "Voiced by an AI voice (Speko)",
      "es.group": "Group P-11 · ZhIGK",
      "es.words": "{n} words",
      "es.prev": "Previous",
      "es.next": "Next",
      "a11y.speakOn": "Read aloud is on. Tap any text.",
      "a11y.noSpeech": "This browser can’t read text aloud",
      "a11y.kkVoice": "No Kazakh voice on this device — a Russian voice is used",
      "a11y.resetDone": "Accessibility settings reset",
      "a11y.profileOn": "Profile on: {name}",
      "a11y.profileOff": "Profile off",
      "tpl.sectionAppeal": "Appeal (өтініш)",
      "wiz.howTitle": "What next",
      "wiz.how1": "Sign in at eotinish.kz through eGov (EDS, QR or Face ID).",
      "wiz.how2": "Choose the recipient: {target}.",
      "wiz.how3": "Paste the copied text and attach your files.",
      "wiz.how4": "Keep the appeal number — it shows the status.",
      "wiz.collegeTip": "You can also hand an appeal to the college office in person — ask for a registration stamp.",
      "wiz.restart": "New appeal",
      "wiz.myEmpty": "Saved appeals with their response dates will appear here. They are stored only on this device.",
      "wiz.draft": "Draft",
      "wiz.sent": "Filed",
      "wiz.markSent": "I filed it",
      "wiz.view": "Text",
      "wiz.del": "Delete",
      "wiz.delConfirm": "Delete for sure?",
      "wiz.deadline": "Reply by {date}",
      "wiz.left": "{n} working days left",
      "wiz.today": "due today",
      "wiz.overdue": "Overdue: you can appeal the inaction to a higher authority",
      "wiz.created": "Created {date}",
      "wiz.toastSaved": "Appeal saved",
      "wiz.toastSent": "Marked as filed — reply date calculated",
      "wiz.toastDeleted": "Appeal deleted",
      "rep.gps": "Location removed",
      "rep.device": "Phone model removed",
      "rep.time": "Capture date removed",
      "rep.clean": "Metadata cleared",
      "rep.processing": "Processing…",
      "rep.remove": "Remove photo",
      "rep.max": "You can add up to 5 photos",
      "rep.bad": "Could not open the file: {name}",
      "rep.copied": "Text copied",
      "rep.copiedText": "Paste it into the bot chat or read it to the 1424 operator.",
      "rep.needText": "Describe what happened — at least 20 characters",
      "rep.noPhotos": "Add photos first",
      "rep.saved": "Photos saved: {n}",
      "rep.saveFail": "Photos were not saved",
      "rep.saveHint": "Photos are saved one at a time — confirm each one.",
      "rep.tTitle": "Report of possible corruption",
      "rep.tWhere": "Where",
      "rep.tWhen": "When",
      "rep.tWhat": "What happened",
      "rep.tPhotos": "Photos: {n}, attached separately.",
      "rep.tNoName": "Sent without stating my name.",
      "rep.notSet": "not stated",
      "ai.welcome": "Hello! I am the assistant of the “Clean Future” site. Ask me what to do if someone demands a bribe, which numbers to call, how to file an appeal or how a gift differs from a bribe.",
      "ai.statusAi": "Answered by Claude (AI)",
      "ai.statusBasic": "Basic mode · ready-made answers",
      "ai.statusCheck": "Connecting…",
      "ai.thinking": "Thinking…",
      "ai.stopped": "(stopped)",
      "ai.errRate": "Too many requests. Please try again a little later.",
      "ai.errSession": "Your claude.ai session has expired — sign in again and repeat the question.",
      "ai.errRefused": "I won’t answer that. Ask about corruption, citizens’ rights or this site.",
      "ai.errUpstream": "The connection dropped. Send your question again.",
      "ai.fallbackNote": "AI is unavailable right now — answering in basic mode.",
      "ai.basicHint": "Full AI mode works when the site is opened on claude.ai and you are signed in. For now I answer common questions with ready-made answers."
    },

    kk: {
      'lang.changed': 'Сайт тілі: қазақша',
      'theme.light': 'Ашық тақырып қосылды',
      'theme.dark': 'Қараңғы тақырып қосылды',
      'menu.open': 'Мәзірді ашу',
      'menu.close': 'Мәзірді жабу',
      'calc.ready': 'Есеп дайын',
      'calc.bigLoss': '{sum} ₸ — бұл қоғам үшін елеулі шығын.',
      'calc.smallLoss': '{sum} ₸ — шағын сомалардың өзі үлкен шығынға айналады.',
      'calc.unit': 'бірлігі ≈ {price} ₸ (демо)',
      'calc.pcs': '{n} дана (демо-бағалар)',
      'calc.amountText': '{sum} теңге',
      'calc.units': 'Бірліктер саны',
      'charts.fallback': 'Графиктер интернеттен жүктеледі (Chart.js). Байланысты тексеріп, бетті жаңартыңыз.',
      'game.correct': 'Дұрыс! +{n} ұпай',
      'game.bonus': ' (серия үшін бонус)',
      'game.wrong': 'Қате. Дұрыс жауап: {answer}',
      'game.ansBribe': 'пара / жол берілмейді',
      'game.ansGift': 'рұқсат етілген сыйлық',
      'game.next': 'Келесі',
      'game.showResult': 'Нәтижені көрсету',
      'game.t90': 'Адалдық сарапшысы!',
      'game.t70': 'Тамаша нәтиже!',
      'game.t50': 'Жақсы бастама',
      'game.t0': 'Әлі де үйренетін нәрсе бар',
      'game.finalText': 'Дұрыс жауаптар: {t}-ден {c}. Жиналған ұпай: {s}. Басты ереже: егер сыйлық қызмет немесе шешім күтумен байланысты болса — ол енді сыйлық емес.',
      'game.record': 'Жаңа рекорд!',
      'game.recordText': 'Сіз {s} ұпай жинадыңыз.',
      'game.over': 'Ойын аяқталды',
      'game.overText': 'Сіздің рекордыңыз: {s} ұпай.',
      'quiz.next': 'Келесі сұрақ',
      'quiz.showResult': 'Нәтижені көру',
      'quiz.yes': 'Дұрыс!',
      'quiz.no': 'Қате.',
      'quiz.r90': 'Сіз өз құқықтарыңызды өте жақсы білесіз!',
      'quiz.r90t': 'Бұл біліммен достарыңызбен және жақындарыңызбен бөлісіңіз — қоғам осылай күшейеді.',
      'quiz.r70': 'Білім деңгейі жақсы',
      'quiz.r70t': 'Сіз көптеген жағдайларда сенімді бағдарлайсыз. Қате жіберген сұрақтарды қайталаңыз.',
      'quiz.r40': 'Жаман емес, бірақ олқылықтар бар',
      'quiz.r40t': '«Егер… не істеу керек» бөлімін қараңыз — онда әдеттегі жағдайларға арналған қадамдық алгоритмдер бар.',
      'quiz.r0': 'Толығырақ түсінген жөн',
      'quiz.r0t': 'Құқықтарды білу — сыбайлас жемқорлықтан ең жақсы қорғаныс. Сайт бөлімдерін оқып, тестті қайта өтіңіз.',
      'quiz.done': 'Тест аяқталды',
      'quiz.doneText': 'Нәтиже: {t}-ден {r} ({p}%)',
      'quiz.letters': 'АӘБВ',
      'concepts.more': 'Толығырақ',
      'concepts.what': 'Бұл не',
      'concepts.examples': 'Өмірлік мысалдар',
      'concepts.why': 'Неге бұл қауіпті',
      'concepts.law': 'Заң:',
      'concepts.lawsAt': 'Заңдардың мәтіндері —',
      'help.progress': 'Орындалды: {n}-ден {d}',
      'help.mark': 'Орындалды деп белгілеу',
      'help.marked': 'Орындалды',
      'help.stepAria': '{n}-қадамды белгілеу',
      'help.tips': 'Пайдалы кеңестер',
      'help.warn': 'Пара беру де, пара алу сияқты жазаланады. Төлемеңіз — хабарлаңыз.',
      'help.allDone': 'Барлық қадам орындалды',
      'help.allDoneText': 'Сіз бұл жағдайда қалай әрекет ету керектігін білесіз.',
      'tpl.previewSub': 'Құжатты алдын ала қарау',
      'tpl.print': 'Басып шығару / PDF',
      'tpl.downloadDoc': '.DOC жүктеу',
      'tpl.copied': 'Мәтін көшірілді',
      'tpl.copiedText': 'Оны құжатқа немесе өтінішке қойыңыз.',
      'tpl.copyFail': 'Көшіру мүмкін болмады',
      'tpl.copyFailText': 'Мәтінді қолмен белгілеп, Ctrl+C басыңыз.',
      'tpl.fileDone': 'Файл жүктелді',
      'tpl.docDone': 'Word құжаты жүктелді',
      'tpl.docDoneText': '{file} — Microsoft Word бағдарламасында ашыңыз.',
      'tpl.popup': 'Басып шығару терезесі бұғатталды',
      'tpl.popupText': 'Осы сайт үшін қалқымалы терезелерге рұқсат беріңіз.',
      'tpl.pName': 'аты-жөні толық',
      'tpl.pContact': 'мекенжай, телефон, e-mail',
      'tpl.pDetails': 'жағдайды сипаттаңыз: күні, орны, қатысушылар, не болды',
      'tpl.date': 'Күні',
      'tpl.sign': 'Қолы',
      'map.choose': '— өңірді таңдаңыз —',
      'map.typeCity': 'Республикалық маңызы бар қала',
      'map.typeOblast': 'Облыс',
      'map.center': 'Әкімшілік орталығы',
      'map.status': 'Мәртебесі',
      'map.note': 'Анықтама',
      'map.new2022': '2022 жылы құрылған',
      'map.college': 'Біздің колледж',
      'map.collegeVal': 'ЖИГК, Жезқазған қ.',
      'map.report': 'Сыбайлас жемқорлық туралы хабарлау',
      'map.reportVal': '1424 (тегін)',
      'map.demo': 'Демо-көрсеткіштер',
      'map.notReal': 'Нақты деректер емес',
      'map.m1': 'Ашықтық индексі (шартты)',
      'map.m2': 'Онлайн қызметтер үлесі (шартты)',
      'map.m3': 'Өтініштерге уақтылы жауап (шартты)',
      'map.reports': 'Платформадағы шартты өтініштер',
      'map.source': 'Әкімшілік орталықтар туралы мәліметтер — ашық деректер. Сары блоктағы көрсеткіштер интерфейсті көрсету үшін жасалған.',
      'map.sea1': 'Каспий',
      'map.sea2': 'теңізі',
      'wall.real': 'Нақты құрал',
      'wall.demo': 'Демо-мысал',
      'wall.cond': 'Шартты мысал',
      'wall.more': 'Толығырақ',
      'wall.support': 'Қолдау',
      'wall.supported': 'Қолдаймын',
      'wall.thanks': 'Қолдауыңызға рақмет!',
      'wall.thanksText': 'Жақсы тәжірибе көзге көрінуі керек.',
      'form.catErr': 'Өтініш санатын таңдаңыз',
      'form.msgErr': 'Хабарлама кемінде 10 таңбадан тұруы керек',
      'form.check': 'Форманы тексеріңіз',
      'form.checkText': 'Міндетті өрістерді толтырыңыз.',
      'form.processing': 'Өңделуде…',
      'form.send': 'Жіберу',
      'form.thanks': 'Рақмет, {name}!',
      'form.thanksAnon': 'Хабарламаңызға рақмет!',
      'form.demoSent': 'Бұл демо-форма: хабарлама жіберілген жоқ. Сыбайлас жемқорлық туралы хабарлау үшін 1424 нөміріне қоңырау шалыңыз.',
      'vol.nameErr': 'Атыңызды жазыңыз',
      'vol.emailErr': 'Дұрыс email енгізіңіз',
      'vol.ageErr': 'Жасы 14-тен 99-ға дейін',
      'vol.consentErr': 'Келісіміңізді растаңыз',
      'vol.checkText': 'Кейбір өрістер қате толтырылған.',
      'vol.dirTitle': 'Бағытты таңдаңыз',
      'vol.dirText': 'Қатысудың кемінде бір бағытын белгілеңіз.',
      'vol.welcome': 'Қош келдіңіз, {name}!',
      'vol.welcomeText': 'Бағыттар: {dirs}. Демо: өтінім тек осы браузерде сақталды.',
      'comic.frame': '{t} кадрдың {n}-сі',
      'comic.prev': 'Алдыңғы кадр',
      'comic.next': 'Келесі кадр',
      'comic.readerSub': '← → бағыттамаларымен немесе батырмалармен парақтаңыз',
      'comic.end': 'Оқиғаның соңы',
      'comic.restart': 'Басынан',
      'comic.accentSaved': 'Мұқаба түсі өзгертілді',
      'video.play': 'Роликті көру',
      'video.replay': 'Қайта көру',
      'video.pause': 'Кідірту',
      'video.resume': 'Жалғастыру',
      'video.mute': 'Дыбысты өшіру',
      'video.unmute': 'Дыбысты қосу',
      'video.full': 'Толық экран',
      'video.goto': '{time} сәтіне өту: {title}',
      'video.loading': 'Бейне жүктелуде… {p}%',
      "wiz.q1": "Не беруді қалайсыз?",
      "wiz.q2": "Кімге жолдаймыз?",
      "wiz.q3": "Жағдайды сипаттаңыз",
      "wiz.q4": "Өтініш берушінің деректері",
      "wiz.q5": "Өтінішіңіз дайын",
      "wiz.daysNote": "Мерзімі — әдетте {days} жұмыс күніне дейін",
      "wiz.fOther": "Органның атауы",
      "wiz.phOther": "Мысалы, аудандық білім бөлімі",
      "wiz.fSubject": "Тақырыбы (қысқаша)",
      "wiz.phSubject": "Мысалы, сынақ үшін ақша талап ету",
      "wiz.fDetails": "Не болды",
      "wiz.phDetails": "Фактілерді ретімен: кім не істеді, қашан, куәлер немесе құжаттар бар ма",
      "wiz.fDate": "Оқиға күні",
      "wiz.fPlace": "Орны",
      "wiz.phPlace": "Қала, ұйым, кабинет",
      "wiz.fAttach": "Құжаттарды немесе фотоларды қоса беремін",
      "wiz.fName": "Аты-жөні толық",
      "wiz.phName": "Асанов Асан Асанұлы",
      "wiz.fContact": "Телефон немесе email",
      "wiz.fAddress": "Мекенжайы (міндетті емес)",
      "wiz.phAddress": "Жезқазған қ., … көш.",
      "wiz.fLang": "Құжат тілі",
      "wiz.langRu": "Орысша",
      "wiz.langKk": "Қазақша",
      "wiz.loginNote": "eOtinish арқылы ресми өтініш сіздің атыңыздан беріледі: eGov арқылы кіресіз (ЭЦҚ, QR немесе Face ID). Сыбайлас жемқорлық туралы атыңызсыз хабарлау үшін «Фотосы бар хабарлама» қойындысын пайдаланыңыз.",
      "wiz.errType": "Өтініш түрін таңдаңыз",
      "wiz.errTarget": "Кімге жолданатынын таңдаңыз",
      "wiz.errOther": "Органның атауын жазыңыз",
      "wiz.errSubject": "Тақырыбын жазыңыз",
      "wiz.errDetails": "Жағдайды толығырақ сипаттаңыз — кемінде 30 таңба",
      "wiz.errName": "Аты-жөніңізді жазыңыз",
      "wiz.errContact": "Телефон немесе email жазыңыз",
      "wiz.check": "Өрістерді тексеріңіз",
      "wiz.copy": "Көшіру",
      "wiz.open": "eOtinish ашу",
      "wiz.save": "«Менің өтініштерім» бөліміне сақтау",
      "wiz.saved": "Сақталды",
      "tpl.wizBadge": "Қадамдық",
      "es.translated": "Қазақ тілінен аударма",
      "es.studentN": "{n}-студент",
      "es.soon": "Эссе жақында шығады",
      "es.placeholderShort": "Фото мен эссе қосылады.",
      "es.textSoon": "Эссе мәтіні қосылады.",
      "es.placeholder": "Мұнда осы студенттің эссесі (шамамен 100 сөз) және фотосы болады.",
      "es.read": "Оқу және тыңдау",
      "es.listen": "Эссені тыңдау",
      "es.stopListen": "Тоқтату",
      "es.voiceKk": "Құрылғыңыздың қазақ дауысы оқиды",
      "es.voiceRu": "Құрылғыда қазақ дауысы жоқ — орыс дауысы оқиды, айтылуы дәл болмауы мүмкін",
      "es.voiceAny": "Құрылғыңыздың дауысы оқиды",
      "es.noVoice": "Бұл браузер мәтінді дауыстап оқи алмайды",
      "es.audio": "Нейродауыспен дыбысталған (Speko)",
      "es.group": "П-11 тобы · ЖИГК",
      "es.words": "{n} сөз",
      "es.prev": "Алдыңғы",
      "es.next": "Келесі",
      "a11y.speakOn": "Дауыстап оқу қосылды. Кез келген мәтінді басыңыз.",
      "a11y.noSpeech": "Бұл браузер мәтінді дауыстап оқи алмайды",
      "a11y.kkVoice": "Бұл құрылғыда қазақ дауысы жоқ — мәтін орыс дауысымен оқылады",
      "a11y.resetDone": "Арнайы мүмкіндік баптаулары тасталды",
      "a11y.profileOn": "Профиль қосылды: {name}",
      "a11y.profileOff": "Профиль өшірілді",
      "tpl.sectionAppeal": "Өтініш",
      "wiz.howTitle": "Әрі қарай не істеу керек",
      "wiz.how1": "eotinish.kz сайтына eGov арқылы кіріңіз (ЭЦҚ, QR немесе Face ID).",
      "wiz.how2": "Адресатты таңдаңыз: {target}.",
      "wiz.how3": "Көшірілген мәтінді қойып, файлдарды тіркеңіз.",
      "wiz.how4": "Өтініш нөмірін сақтаңыз — мәртебесі сол бойынша көрінеді.",
      "wiz.collegeTip": "Колледжге өтінішті кеңсе арқылы да беруге болады — тіркеу белгісін сұраңыз.",
      "wiz.restart": "Жаңа өтініш",
      "wiz.myEmpty": "Мұнда жауап мерзімі көрсетілген сақталған өтініштер шығады. Олар тек осы құрылғыда сақталады.",
      "wiz.draft": "Жоба",
      "wiz.sent": "Берілді",
      "wiz.markSent": "Бердім",
      "wiz.view": "Мәтін",
      "wiz.del": "Жою",
      "wiz.delConfirm": "Шынымен жою?",
      "wiz.deadline": "Жауап {date} дейін",
      "wiz.left": "{n} жұмыс күні қалды",
      "wiz.today": "мерзімі — бүгін",
      "wiz.overdue": "Мерзімі өтті: әрекетсіздікке жоғары органға шағым беруге болады",
      "wiz.created": "{date} құрылды",
      "wiz.toastSaved": "Өтініш сақталды",
      "wiz.toastSent": "Берілді деп белгіленді — жауап мерзімі есептелді",
      "wiz.toastDeleted": "Өтініш жойылды",
      "rep.gps": "Геобелгі өшірілді",
      "rep.device": "Телефон моделі өшірілді",
      "rep.time": "Түсірілген күні өшірілді",
      "rep.clean": "Метадеректер тазартылды",
      "rep.processing": "Өңделуде…",
      "rep.remove": "Фотоны жою",
      "rep.max": "5 фотодан артық қосуға болмайды",
      "rep.bad": "Файлды ашу мүмкін болмады: {name}",
      "rep.copied": "Мәтін көшірілді",
      "rep.copiedText": "Оны бот чатына қойыңыз немесе 1424 операторына оқып беріңіз.",
      "rep.needText": "Не болғанын сипаттаңыз — кемінде 20 таңба",
      "rep.noPhotos": "Алдымен фото қосыңыз",
      "rep.saved": "Сақталған фото: {n}",
      "rep.saveFail": "Фотолар сақталмады",
      "rep.saveHint": "Фотолар бір-бірлеп сақталады — әрқайсысын растаңыз.",
      "rep.tTitle": "Ықтимал сыбайлас жемқорлық туралы хабарлама",
      "rep.tWhere": "Қай жерде",
      "rep.tWhen": "Қашан",
      "rep.tWhat": "Не болды",
      "rep.tPhotos": "Фото: {n} дана, бөлек тіркеймін.",
      "rep.tNoName": "Аты көрсетілмей жіберілді.",
      "rep.notSet": "көрсетілмеген",
      "ai.welcome": "Сәлеметсіз бе! Мен «Таза болашақ» сайтының көмекшісімін. Пара талап етсе не істеу керек, қайда қоңырау шалу керек, өтінішті қалай беру керек немесе сыйлықтың парадан айырмашылығы туралы сұраңыз.",
      "ai.statusAi": "Claude (ЖИ) жауап береді",
      "ai.statusBasic": "Негізгі режим · дайын жауаптар",
      "ai.statusCheck": "Қосылуда…",
      "ai.thinking": "Ойланып жатырмын…",
      "ai.stopped": "(тоқтатылды)",
      "ai.errRate": "Сұраныс тым көп. Сәл кейінірек қайталаңыз.",
      "ai.errSession": "claude.ai сессиясы аяқталды — қайта кіріп, сұрақты қайталаңыз.",
      "ai.errRefused": "Бұған жауап бермеймін. Сыбайлас жемқорлық, азаматтардың құқықтары немесе сайт туралы сұраңыз.",
      "ai.errUpstream": "Байланыс үзілді. Сұрағыңызды қайта жіберіңіз.",
      "ai.fallbackNote": "ЖИ қазір қолжетімсіз — негізгі режимде жауап беремін.",
      "ai.basicHint": "Толық ЖИ режимі сайт claude.ai-да ашылып, аккаунтыңызға кірген кезде жұмыс істейді. Қазір жиі қойылатын сұрақтарға дайын жауап беремін."
    }
  },

  /* Тексты официального обращения (мастер «Өтініш»): язык документа выбирает пользователь — русский или казахский */
  docs: {
    "ru": {
      "to": {
        "college": "Директору Жезказганского индустриально-гуманитарного колледжа",
        "edu": "Руководителю управления образования области",
        "anticor": "В Службу по противодействию коррупции Комитета национальной безопасности Республики Казахстан",
        "prosecutor": "В органы прокуратуры Республики Казахстан",
        "akimat": "Акиму города (района)"
      },
      "heading": {
        "appeal": "ОБРАЩЕНИЕ",
        "complaint": "ЖАЛОБА",
        "proposal": "ПРЕДЛОЖЕНИЕ",
        "request": "ЗАПРОС О ПРЕДОСТАВЛЕНИИ ИНФОРМАЦИИ",
        "corruption": "СООБЩЕНИЕ О ВОЗМОЖНОМ КОРРУПЦИОННОМ ПРАВОНАРУШЕНИИ"
      },
      "intro": {
        "appeal": "Прошу рассмотреть следующий вопрос.",
        "complaint": "Обжалую действия (бездействие) должностного лица.",
        "proposal": "Вношу следующее предложение.",
        "request": "Прошу предоставить информацию по следующему вопросу.",
        "corruption": "Сообщаю о фактах, которые, по моему мнению, содержат признаки коррупционного правонарушения."
      },
      "ask": {
        "appeal": "Прошу рассмотреть обращение и дать письменный ответ в установленный законом срок.",
        "complaint": "Прошу проверить изложенные факты, принять меры по восстановлению моих прав и дать письменный ответ в установленный законом срок.",
        "proposal": "Прошу рассмотреть предложение и сообщить о принятом решении.",
        "request": "Прошу предоставить запрашиваемую информацию в установленный законом срок.",
        "corruption": "Прошу провести проверку изложенных фактов и принять меры в соответствии с законодательством Республики Казахстан. Я предупреждён(а) об ответственности за заведомо ложный донос."
      },
      "labels": {
        "from": "от",
        "contact": "Контакты",
        "address": "Адрес",
        "subject": "Тема",
        "date": "Дата событий",
        "place": "Место",
        "facts": "Суть",
        "attach": "Приложение: документы и фото прикрепляются к обращению.",
        "signDate": "Дата",
        "sign": "Подпись"
      }
    },
    "kk": {
      "to": {
        "college": "Жезқазған индустриалдық-гуманитарлық колледжінің директорына",
        "edu": "Облыстың білім басқармасының басшысына",
        "anticor": "Қазақстан Республикасы Ұлттық қауіпсіздік комитетінің Сыбайлас жемқорлыққа қарсы іс-қимыл қызметіне",
        "prosecutor": "Қазақстан Республикасының прокуратура органдарына",
        "akimat": "Қала (аудан) әкіміне"
      },
      "heading": {
        "appeal": "ӨТІНІШ",
        "complaint": "ШАҒЫМ",
        "proposal": "ҰСЫНЫС",
        "request": "АҚПАРАТ БЕРУ ТУРАЛЫ СҰРАУ",
        "corruption": "ЫҚТИМАЛ СЫБАЙЛАС ЖЕМҚОРЛЫҚ ҚҰҚЫҚ БҰЗУШЫЛЫҚ ТУРАЛЫ ХАБАРЛАМА"
      },
      "intro": {
        "appeal": "Мына мәселені қарауыңызды сұраймын.",
        "complaint": "Лауазымды тұлғаның әрекетіне (әрекетсіздігіне) шағым беремін.",
        "proposal": "Мынадай ұсыныс енгіземін.",
        "request": "Мына мәселе бойынша ақпарат беруіңізді сұраймын.",
        "corruption": "Менің ойымша, сыбайлас жемқорлық құқық бұзушылықтың белгілері бар фактілер туралы хабарлаймын."
      },
      "ask": {
        "appeal": "Өтінішті қарап, заңда белгіленген мерзімде жазбаша жауап беруіңізді сұраймын.",
        "complaint": "Баяндалған фактілерді тексеріп, менің құқықтарымды қалпына келтіру бойынша шаралар қабылдауыңызды және заңда белгіленген мерзімде жазбаша жауап беруіңізді сұраймын.",
        "proposal": "Ұсынысты қарап, қабылданған шешім туралы хабарлауыңызды сұраймын.",
        "request": "Сұралған ақпаратты заңда белгіленген мерзімде беруіңізді сұраймын.",
        "corruption": "Баяндалған фактілер бойынша тексеру жүргізіп, Қазақстан Республикасының заңнамасына сәйкес шаралар қабылдауыңызды сұраймын. Көрінеу жалған сөз жеткізгені үшін жауапкершілік туралы ескертілдім."
      },
      "labels": {
        "from": "Өтініш беруші:",
        "contact": "Байланыс",
        "address": "Мекенжайы",
        "subject": "Тақырыбы",
        "date": "Оқиға күні",
        "place": "Орны",
        "facts": "Мәні",
        "attach": "Қосымша: құжаттар мен фотолар өтінішке тіркеледі.",
        "signDate": "Күні",
        "sign": "Қолы"
      }
    }
  },

  /* ---------------------------------------------------------
     3. Содержимое интерактивных разделов
     --------------------------------------------------------- */
  data: {
    /* ===================== РУССКИЙ ===================== */
    ru: {
      spheres: {
        education: { name: 'Образование', items: ['учебников', 'ноутбуков для студентов', 'интерактивных досок для аудиторий'] },
        medicine: { name: 'Медицина', items: ['автоматических тонометров', 'инвалидных колясок', 'кардиомониторов для больниц'] },
        roads: { name: 'Дороги', items: ['м² ямочного ремонта дорог', 'уличных фонарей', 'безопасных пешеходных переходов'] },
        housing: { name: 'ЖКХ', items: ['энергосберегающих ламп в подъездах', 'скамеек для дворов', 'детских игровых площадок'] }
      },

      game: [
        { title: 'Дорогой подарок преподавателю перед экзаменом', text: 'Родители студента за неделю до экзамена дарят преподавателю новый смартфон «просто в знак уважения».', explain: 'Дорогой подарок накануне экзамена связан с ожиданием выгоды — хорошей оценки. Время, стоимость и влияние преподавателя на результат делают такой «подарок» формой подкупа.' },
        { title: 'Деньги врачу за ускорение процедуры', text: 'Пациент передаёт врачу конверт, чтобы тот поставил его на операцию раньше очереди.', explain: 'Это классическая взятка: деньги передаются за действие в пользу дающего — нарушение очереди. От этого страдают другие пациенты, которые ждут помощи на общих основаниях.' },
        { title: 'Цветы от всей группы', text: 'В День учителя группа вскладчину дарит куратору букет цветов и открытку. Ни о чём не просят, оценки уже выставлены.', explain: 'Символический знак внимания без просьбы об услуге и без связи с решениями преподавателя обычно считается допустимым. Но помните: этические правила многих организаций ограничивают даже такие подарки — лучше уточнить их заранее.' },
        { title: '«Ускорить документы» за доплату', text: 'Сотрудник, принимающий документы, предлагает оформить справку «за пару дней вместо месяца» за наличные мимо кассы и без чека.', explain: 'Официальные платежи всегда проходят через кассу или онлайн-оплату с чеком. Деньги «мимо кассы» за ускорение — это вымогательство взятки. Сообщите об этом по номеру 1424.' },
        { title: 'Книга от друга на день рождения', text: 'Однокурсник дарит тебе интересную книгу на день рождения. Вы дружите, и никто из вас не принимает решений друг за друга.', explain: 'Это обычный личный подарок между друзьями. Здесь нет должностного положения, служебных полномочий и ожидания услуги взамен — значит, нет и коррупции.' },
        { title: '«Благодарность» после экзамена', text: 'Студент после успешной сдачи сессии приносит преподавателю конверт с деньгами «в благодарность за понимание».', explain: 'Вознаграждение за уже совершённое действие — тоже незаконно. Деньги, переданные «после», закрепляют систему, в которой оценки и решения покупаются.' },
        { title: '«Решим без протокола»', text: 'После нарушения правил дорожного движения водителю предлагают «решить вопрос на месте» за сумму меньше официального штрафа.', explain: 'Штраф оплачивается только официально, по постановлению. Предложение «без протокола» за деньги — это взятка, ответственность за которую несут обе стороны.' },
        { title: 'Сувенирная ручка на конференции', text: 'Организаторы открытой конференции раздают всем участникам одинаковые ручки и блокноты с логотипом.', explain: 'Недорогая промо-продукция, которую получают все участники одинаково, не связана с конкретным решением или услугой. Это допустимый сувенир.' },
        { title: 'Контракт для фирмы родственника', text: 'Руководитель отдела участвует в выборе подрядчика и голосует за компанию своего брата, не сообщив о родстве.', explain: 'Это конфликт интересов и протекционизм. Должностное лицо обязано заявить о личной заинтересованности и не участвовать в таком решении.' },
        { title: 'Торт для всего отделения', text: 'После выписки пациент приносит в отделение торт к чаю для всего персонала. Лечение уже завершено, никаких просьб нет.', explain: 'Открытый символический знак благодарности для всего коллектива, не влияющий ни на какие решения, обычно считается допустимым. Деньги, дорогие вещи или подарки «до» лечения — уже нет.' }
      ],

      quiz: [
        { category: 'Полиция', question: 'Сотрудник полиции остановил вас на улице. Что он обязан сделать в первую очередь?', options: ['Сразу потребовать ваш телефон для проверки', 'Представиться, назвать должность и по требованию предъявить служебное удостоверение', 'Ничего объяснять не обязан', 'Попросить оплатить «проверку документов»'], explain: 'Сотрудник полиции должен представиться и объяснить причину обращения. Вы вправе попросить показать служебное удостоверение и запомнить его данные.' },
        { category: 'Полиция', question: 'С какого момента задержанный человек имеет право на помощь адвоката (защитника)?', options: ['Только после решения суда', 'Через трое суток после задержания', 'С момента задержания', 'Только если есть деньги на адвоката'], explain: 'Конституция Республики Казахстан гарантирует право на квалифицированную юридическую помощь с момента задержания. В установленных законом случаях помощь оказывается бесплатно.' },
        { category: 'Полиция', question: 'Обязаны ли вы давать показания против самого себя и своих близких родственников?', options: ['Да, в любом случае', 'Нет, никто не обязан свидетельствовать против себя и близких', 'Да, если об этом попросили письменно', 'Да, если есть другие свидетели'], explain: 'Конституция РК закрепляет, что никто не обязан давать показания против себя самого, супруга (супруги) и близких родственников.' },
        { category: 'Полиция', question: 'Что должны сделать сотрудники при задержании человека?', options: ['Объяснить причину задержания и разъяснить права задержанного', 'Сначала изъять телефон и ничего не объяснять', 'Предложить «договориться»', 'Задержать без оснований «до выяснения»'], explain: 'Задержанному разъясняют основания задержания и его права, в том числе право на защитника и право сообщить о задержании близким.' },
        { category: 'Полиция', question: 'Сотрудник предлагает «решить вопрос без протокола» за деньги. Как поступить правильно?', options: ['Заплатить — так быстрее', 'Предложить сумму поменьше', 'Отказаться, запомнить данные сотрудника и сообщить по номеру 1424', 'Уйти, ничего не сообщая'], explain: 'Дача взятки — уголовно наказуемое деяние для обеих сторон. Правильно отказаться и сообщить о факте в call-центр 1424 Службы по противодействию коррупции.' },
        { category: 'Медицина', question: 'Нужно ли платить за экстренную (скорую) медицинскую помощь в рамках гарантированного объёма?', options: ['Да, всегда', 'Только если нет страховки ОСМС', 'Нет, экстренная помощь входит в гарантированный объём бесплатной медпомощи (ГОБМП)', 'Только ночью'], explain: 'Скорая и экстренная медицинская помощь входит в гарантированный объём бесплатной медицинской помощи. Подробные консультации по ГОБМП и ОСМС — в Едином контакт-центре 1414.' },
        { category: 'Медицина', question: 'Врач требует деньги наличными за услугу, которая положена бесплатно. Что делать?', options: ['Заплатить, чтобы не испортить отношения', 'Отказаться, обратиться к руководству клиники и в ФСМС, а при вымогательстве — в 1424', 'Ничего не делать', 'Пожаловаться в соцсетях вместо официального обращения'], explain: 'Платные услуги оформляются официально, с договором и чеком. Требование денег за бесплатную помощь — нарушение, а вымогательство — повод обратиться в 1424.' },
        { category: 'Медицина', question: 'Имеет ли пациент право получать информацию о своём здоровье и назначенном лечении?', options: ['Нет, это решает только врач', 'Да, в доступной для понимания форме', 'Только за дополнительную плату', 'Только по решению суда'], explain: 'Пациент вправе получать информацию о состоянии своего здоровья, методах лечения и возможных рисках в доступной форме.' },
        { category: 'Медицина', question: 'Как с 1 апреля 2026 года подать жалобу на качество медицинской помощи онлайн?', options: ['Только по телефону 1414', 'Через сайт Фонда социального медицинского страхования (ФСМС) или приложение Qoldau 24/7', 'Через любой мессенджер врача', 'Жалобы на медпомощь не принимаются'], explain: 'С 1 апреля 2026 года жалобы на качество медпомощи подаются онлайн: на сайте ФСМС и в приложении Qoldau 24/7. Номер 1414 остался для консультаций по ГОБМП и ОСМС.' },
        { category: 'Госорганы', question: 'В какой срок, как правило, госорган должен рассмотреть обычное обращение гражданина?', options: ['В течение 1 рабочего дня', 'В течение 15 рабочих дней (жалобы — 20 рабочих дней)', 'В течение года', 'Срок не установлен'], explain: 'По общему правилу обращение рассматривается в течение 15 рабочих дней, жалоба — в течение 20 рабочих дней. В отдельных случаях срок может продлеваться с уведомлением заявителя.' },
        { category: 'Госорганы', question: 'Через какой официальный сервис можно подать обращение в госорган онлайн?', options: ['eOtinish (сайт eotinish.kz, портал eGov.kz, приложение eGov Mobile)', 'Только через личное письмо руководителю', 'Через комментарии в соцсетях', 'Онлайн-подача невозможна'], explain: 'eOtinish — единое «окно» для обращений в госорганы. Также можно обратиться в ЦОН. Статус обращения отслеживается в личном кабинете.' },
        { category: 'Госорганы', question: 'Что гарантирует закон человеку, который сообщил о коррупционном правонарушении?', options: ['Ничего не гарантирует', 'Защиту государства и возможность поощрения', 'Обязательную публикацию его имени', 'Автоматический штраф'], explain: 'Согласно Закону РК «О противодействии коррупции», лицо, сообщившее о коррупционном правонарушении, находится под защитой государства и может быть поощрено.' }
      ],

      concepts: [
        { title: 'Коррупция', short: 'Использование служебного положения ради личной выгоды.', definition: 'Коррупция — это незаконное использование лицами, занимающими должности или выполняющими государственные функции, своих полномочий для получения выгоды для себя или других, а также подкуп таких лиц.', examples: ['<b>Колледж:</b> оценку «ставят» не за знания, а за деньги или подарок.', '<b>Больница:</b> место в очереди на операцию «продаётся» за конверт.', '<b>Госорган:</b> разрешение выдают быстрее тем, кто «отблагодарил».'], harm: 'Коррупция делает услуги дороже и хуже, подрывает доверие к государству и лишает честных людей равных возможностей.', law: 'Основной закон — Закон Республики Казахстан «О противодействии коррупции».' },
        { title: 'Взятка', short: 'Деньги, вещи или услуги за действие или бездействие должностного лица.', definition: 'Взятка — это деньги, ценные бумаги, имущество, услуги или иная выгода, которые получает должностное лицо за действия (бездействие) в пользу дающего — законные или незаконные.', examples: ['<b>Дорога:</b> водитель платит, чтобы не составляли протокол.', '<b>Университет:</b> студент передаёт деньги за зачёт без экзамена.', '<b>Услуги:</b> «доплата» за справку мимо кассы.'], harm: 'Ответственность несёт не только тот, кто берёт, но и тот, кто даёт, а также посредник.', law: 'Получение и дача взятки, посредничество во взяточничестве — уголовные правонарушения по Уголовному кодексу РК.' },
        { title: 'Конфликт интересов', short: 'Личная заинтересованность мешает объективно исполнять обязанности.', definition: 'Конфликт интересов — ситуация, когда личная заинтересованность человека влияет или может повлиять на беспристрастное исполнение им служебных обязанностей.', examples: ['<b>Комиссия:</b> член жюри оценивает работу своего ребёнка.', '<b>Закупки:</b> чиновник выбирает подрядчика, где работает его супруг.', '<b>Кадры:</b> руководитель проводит собеседование с близким другом.'], harm: 'Сам по себе конфликт интересов — ещё не коррупция, но опасная ситуация. Важно вовремя сообщить о нём и отказаться от участия в решении.', law: 'Должностные лица обязаны принимать меры по предотвращению и урегулированию конфликта интересов.' },
        { title: 'Протекционизм', short: 'Продвижение «своих» людей вместо достойных.', definition: 'Протекционизм (кумовство, непотизм) — покровительство родственникам, друзьям или знакомым при приёме на работу, продвижении по службе или распределении ресурсов, вопреки интересам дела.', examples: ['<b>Работа:</b> вакансию отдают племяннику руководителя без конкурса.', '<b>Гранты:</b> поддержку получает проект «знакомых».', '<b>Повышение:</b> карьерный рост зависит от связей, а не от результатов.'], harm: 'Талантливые люди теряют мотивацию, а качество управления падает.', law: 'Законодательство ограничивает совместную службу близких родственников при прямой подчинённости.' },
        { title: 'Откат', short: 'Скрытый «возврат» части суммы контракта тому, кто помог его получить.', definition: 'Откат — неофициальная выплата части денег по договору (например, по госзакупке) должностному лицу, которое обеспечило выбор «нужного» поставщика.', examples: ['<b>Ремонт колледжа:</b> подрядчик завышает смету и возвращает часть суммы чиновнику.', '<b>Закупка оборудования:</b> выигрывает не лучшая цена, а тот, кто «поделился».', '<b>Дороги:</b> работы выполняют хуже, потому что часть бюджета ушла на откат.'], harm: 'Бюджет переплачивает, а качество работ падает — в итоге платит каждый налогоплательщик.', law: 'По сути откат — разновидность взятки или коммерческого подкупа.' }
      ],

      help: [
        {
          title: 'Требуют взятку в учебном заведении', subtitle: 'Колледж, университет, школа',
          intro: 'Преподаватель, сотрудник приёмной комиссии или администрации требует деньги, подарок или услугу за оценку, зачёт или зачисление.',
          steps: [
            { title: 'Не передавайте деньги и сохраняйте спокойствие', text: 'Не соглашайтесь и не предлагайте ничего сами. Вежливо откажитесь — это ваше законное право.' },
            { title: 'Зафиксируйте факты', text: 'Запишите дату, время, место, ФИО и должность, требуемую сумму, имена свидетелей. Сохраните переписку и скриншоты.' },
            { title: 'Сообщите в call-центр 1424', text: 'Позвоните в бесплатный call-центр Службы по противодействию коррупции КНБ РК и опишите ситуацию. Не передавайте деньги «для доказательства» самостоятельно — такие действия проводятся только под контролем правоохранительных органов.' },
            { title: 'Обратитесь к руководству письменно', text: 'Подайте заявление директору или ректору через канцелярию и получите отметку о регистрации (дата и входящий номер).' },
            { title: 'Подайте обращение через eOtinish', text: 'Если вопрос не решён, направьте обращение в уполномоченный орган в сфере образования через eotinish.kz или приложение eGov Mobile.' },
            { title: 'Отслеживайте ответ', text: 'Срок рассмотрения обычного обращения — как правило, 15 рабочих дней. Статус виден в личном кабинете eOtinish.' }
          ],
          tips: ['Будьте точны: факты важнее эмоций.', 'Расскажите родителям или куратору — поддержка важна.', 'Не распространяйте непроверенные обвинения в соцсетях.'],
          links: ['Позвонить 1424', 'eotinish.kz — обращение онлайн']
        },
        {
          title: 'Требуют деньги в медицинском учреждении', subtitle: 'Поликлиника, больница, скорая',
          intro: 'Вас просят заплатить «неофициально» за помощь, которая положена бесплатно, или за ускорение очереди.',
          steps: [
            { title: 'Уточните, положена ли услуга бесплатно', text: 'Скорая и экстренная помощь входят в гарантированный объём бесплатной медпомощи. Консультацию по ГОБМП и ОСМС дают в Едином контакт-центре 1414.' },
            { title: 'Попросите официальное оформление', text: 'Если услуга платная, её оформляют по прейскуранту, с договором и чеком через кассу. Деньги «в карман» — нарушение.' },
            { title: 'Обратитесь к руководству клиники', text: 'Запросите встречу с заведующим отделением или главным врачом либо подайте письменное заявление.' },
            { title: 'Подайте жалобу на качество медпомощи онлайн', text: 'С 1 апреля 2026 года жалобы принимаются на сайте Фонда социального медицинского страхования (fms.kz) и в приложении Qoldau 24/7.' },
            { title: 'При вымогательстве — звоните 1424', text: 'Если требуют деньги за действие или бездействие, сообщите в call-центр Службы по противодействию коррупции.' }
          ],
          tips: ['Если есть угроза жизни — сначала помощь: звоните 103 или 112.', 'Сохраняйте выписки, направления и чеки.', 'Записывайте ФИО и должность сотрудника.'],
          links: ['Позвонить 1424', '1414 — консультации по ГОБМП и ОСМС', 'fms.kz — Фонд медстрахования']
        },
        {
          title: 'Коррупция в государственном органе', subtitle: 'Акимат, ЦОН, инспекции, ведомства',
          intro: 'Должностное лицо затягивает решение, намекает на «благодарность» или требует деньги за услугу.',
          steps: [
            { title: 'Уточните данные сотрудника', text: 'Вежливо попросите назвать ФИО и должность. Запишите дату, время, номер кабинета.' },
            { title: 'Требуйте письменное основание', text: 'Попросите письменно указать, на основании какого документа вам отказывают или требуют оплату. Официальные платежи проходят только через кассу или онлайн с квитанцией.' },
            { title: 'Сообщите о факте коррупции', text: 'Позвоните в call-центр 1424 Службы по противодействию коррупции КНБ РК (звонок бесплатный).' },
            { title: 'Обжалуйте действия в вышестоящий орган', text: 'Подайте жалобу через eOtinish. Срок рассмотрения жалобы — как правило, 20 рабочих дней.' },
            { title: 'При нарушении прав — в прокуратуру', text: 'О нарушении ваших прав можно сообщить в call-центр Генеральной прокуратуры по номеру 115 (бесплатно).' }
          ],
          tips: ['Подавайте обращения письменно — так их невозможно «потерять».', 'Сохраняйте копии всех документов и номера регистрации.', 'Сообщившие о коррупции находятся под защитой государства.'],
          links: ['Позвонить 1424', 'Позвонить 115 — Генпрокуратура', 'Телефоны доверия госорганов (egov.kz)']
        }
      ],

      templates: [
        {
          title: 'Заявление', desc: 'О факте коррупционного правонарушения', defaultTo: 'Руководителю уполномоченного органа', file: 'Zayavlenie',
          heading: ['ЗАЯВЛЕНИЕ', 'о факте коррупционного правонарушения'],
          body: (d) => `${d.to}
от ${d.name}
${d.contact}

ЗАЯВЛЕНИЕ
о факте коррупционного правонарушения

Сообщаю, что ${d.details}

Указанные действия, по моему мнению, содержат признаки коррупционного правонарушения.

Прошу:
1. Провести проверку изложенных фактов.
2. Принять меры в соответствии с законодательством Республики Казахстан.
3. Сообщить мне о результатах рассмотрения заявления в установленный законом срок.

Подтверждающие материалы (при наличии): ____________________

Я предупреждён(а) об ответственности за заведомо ложный донос.

Дата: ${d.date}                    Подпись: ____________`
        },
        {
          title: 'Жалоба', desc: 'На действия (бездействие) должностного лица', defaultTo: 'Руководителю вышестоящего органа', file: 'Zhaloba',
          heading: ['ЖАЛОБА', 'на действия (бездействие) должностного лица'],
          body: (d) => `${d.to}
от ${d.name}
${d.contact}

ЖАЛОБА
на действия (бездействие) должностного лица

Обжалую следующие действия (бездействие) должностного лица: ${d.details}

Считаю, что указанные действия нарушают мои права и законные интересы.

На основании изложенного прошу:
1. Рассмотреть жалобу по существу.
2. Признать действия (бездействие) должностного лица неправомерными.
3. Принять меры по восстановлению моих прав.
4. Направить письменный ответ по указанным контактам.

Приложения: ____________________

Дата: ${d.date}                    Подпись: ____________`
        },
        {
          title: 'Обращение', desc: 'Предложение или отклик в госорган', defaultTo: 'В государственный орган', file: 'Obrashchenie',
          heading: ['ОБРАЩЕНИЕ'],
          body: (d) => `${d.to}
от ${d.name}
${d.contact}

ОБРАЩЕНИЕ

Уважаемый руководитель!

Обращаюсь к Вам по следующему вопросу: ${d.details}

Предлагаю рассмотреть возможность принятия мер, направленных на повышение прозрачности и качества оказания услуг, в том числе:
— размещение информации о порядке и сроках оказания услуг в открытом доступе;
— обеспечение возможности обратной связи для граждан.

Прошу рассмотреть обращение и сообщить о принятом решении в установленный законом срок.

Дата: ${d.date}                    Подпись: ____________`
        },
        {
          title: 'Запрос информации', desc: 'О предоставлении общедоступных сведений', defaultTo: 'Руководителю обладателя информации', file: 'Zapros_informacii',
          heading: ['ЗАПРОС', 'о предоставлении информации'],
          body: (d) => `${d.to}
от ${d.name}
${d.contact}

ЗАПРОС
о предоставлении информации

В соответствии с законодательством Республики Казахстан о доступе к информации прошу предоставить следующие сведения: ${d.details}

Информацию прошу предоставить:
☐ в электронной форме по указанным контактам;
☐ в письменной форме по почтовому адресу.

Дата: ${d.date}                    Подпись: ____________`
        }
      ],

      regions: {
        astana: { name: 'г. Астана', short: 'Астана', center: 'Столица Республики Казахстан' },
        'almaty-city': { name: 'г. Алматы', short: 'Алматы', center: 'Город республиканского значения' },
        shymkent: { name: 'г. Шымкент', short: 'Шымкент', center: 'Город республиканского значения' },
        akmola: { name: 'Акмолинская область', short: 'Акмолинская', center: 'Кокшетау' },
        aktobe: { name: 'Актюбинская область', short: 'Актюбинская', center: 'Актобе' },
        almaty: { name: 'Алматинская область', short: 'Алматинская', center: 'Конаев' },
        atyrau: { name: 'Атырауская область', short: 'Атырауская', center: 'Атырау' },
        abai: { name: 'Абайская область', short: 'Абайская', center: 'Семей' },
        vko: { name: 'Восточно-Казахстанская область', short: 'ВКО', center: 'Усть-Каменогорск' },
        zhambyl: { name: 'Жамбылская область', short: 'Жамбылская', center: 'Тараз' },
        zhetisu: { name: 'Область Жетісу', short: 'Жетісу', center: 'Талдыкорган' },
        zko: { name: 'Западно-Казахстанская область', short: 'ЗКО', center: 'Уральск' },
        karaganda: { name: 'Карагандинская область', short: 'Карагандинская', center: 'Караганда' },
        kostanay: { name: 'Костанайская область', short: 'Костанайская', center: 'Костанай' },
        kyzylorda: { name: 'Кызылординская область', short: 'Кызылординская', center: 'Кызылорда' },
        mangystau: { name: 'Мангистауская область', short: 'Мангистауская', center: 'Актау' },
        pavlodar: { name: 'Павлодарская область', short: 'Павлодарская', center: 'Павлодар' },
        sko: { name: 'Северо-Казахстанская область', short: 'СКО', center: 'Петропавловск' },
        turkestan: { name: 'Туркестанская область', short: 'Туркестанская', center: 'Туркестан' },
        ulytau: { name: 'Область Ұлытау', short: 'Ұлытау', center: 'Жезказган' }
      },

      wall: [
        { title: 'Открытые государственные закупки', text: 'Объявления, участники и итоги госзакупок публикуются на веб-портале государственных закупок — любой гражданин может посмотреть, кто и за сколько выиграл тендер.' },
        { title: 'Электронные торги вместо «бумаги»', text: 'Электронный формат снижает личные контакты заказчика и поставщика — меньше возможностей для сговора и «договорённостей».' },
        { title: 'Конкуренция снижает цену', text: 'Пример: когда в аукционе участвуют 5 поставщиков вместо одного, итоговая цена ремонта колледжа оказывается на 18% ниже стартовой. Сэкономленные средства идут на новые парты.' },
        { title: 'Цифровые услуги без посредников', text: 'Получение справок онлайн через eGov убирает «живую очередь» и посредников — а значит, и поводы для «ускорения за деньги».' },
        { title: 'Открытый диалог с госорганами', text: 'Граждане могут задавать вопросы руководителям госорганов публично и видеть ответы — это делает работу ведомств прозрачнее.' },
        { title: 'Обсуждение законопроектов', text: 'Проекты нормативных актов публикуются для общественного обсуждения — каждый может оставить комментарий до их принятия.' },
        { title: 'Открытые данные', text: 'Государственные наборы данных доступны для скачивания и анализа — журналисты, студенты и разработчики могут проверять цифры сами.' },
        { title: 'Студенческий клуб «Честное поколение»', text: 'Пример инициативы: студенты колледжа проводят квизы о правах для первокурсников и готовят памятки «Куда обращаться». За год — 40 мероприятий.' },
        { title: 'Студенческий мониторинг очередей', text: 'Пример: волонтёры фиксируют время ожидания в учреждениях и публикуют открытый отчёт — руководство меняет график работы окон.' }
      ],

      faq: [
        { q: 'Куда сообщить о факте коррупции?', a: 'В бесплатный call-центр 1424 Службы по противодействию коррупции Комитета национальной безопасности РК, а также письменно — через сервис eOtinish (eotinish.kz, eGov Mobile) или в ЦОН.' },
        { q: 'Отправляет ли форма на этом сайте жалобы в госорганы?', a: 'Нет. Это учебный демонстрационный проект: формы не передают данные ни в какие органы и не являются официальным каналом обращений. Пользуйтесь официальными ресурсами.' },
        { q: 'Защищён ли законом тот, кто сообщил о коррупции?', a: 'Да. По Закону РК «О противодействии коррупции» лицо, сообщившее о коррупционном правонарушении, находится под защитой государства и может быть поощрено.' },
        { q: 'Можно ли подарить преподавателю или врачу подарок?', a: 'Подарок, связанный с ожиданием услуги, оценки или решения, недопустим. Символический знак внимания без каких-либо просьб — иная ситуация, но многие организации ограничивают и такие подарки своими этическими правилами.' },
        { q: 'Отвечает ли тот, кто дал взятку?', a: 'Да. Дача взятки — уголовное правонарушение, как и её получение и посредничество. Закон предусматривает особые условия освобождения от ответственности, например при вымогательстве и добровольном сообщении о факте.' },
        { q: 'В какой срок рассматривают обращения?', a: 'Как правило, обычное обращение — в течение 15 рабочих дней, жалоба — в течение 20 рабочих дней. Статус обращения в eOtinish можно отслеживать в личном кабинете.' },
        { q: 'Откуда взяты данные на сайте?', a: 'Индекс восприятия коррупции — из публикаций Transparency International; контакты — с официальных порталов egov.kz и gov.kz. Все условные показатели помечены как «демо».' }
      ],

      wizard: {
        "steps": [
          "Тип",
          "Адресат",
          "Суть",
          "Заявитель",
          "Готово"
        ],
        "types": [
          {
            "id": "appeal",
            "title": "Обращение",
            "hint": "Вопрос, просьба или сообщение о проблеме",
            "days": 15
          },
          {
            "id": "complaint",
            "title": "Жалоба",
            "hint": "Обжаловать действия или бездействие должностного лица",
            "days": 20
          },
          {
            "id": "proposal",
            "title": "Предложение",
            "hint": "Идея, как улучшить работу организации",
            "days": 15
          },
          {
            "id": "request",
            "title": "Запрос информации",
            "hint": "Получить сведения от органа или организации",
            "days": 15
          },
          {
            "id": "corruption",
            "title": "Сообщение о коррупции",
            "hint": "Взятка, вымогательство, откат, конфликт интересов",
            "days": 15
          }
        ],
        "targets": [
          {
            "id": "college",
            "title": "Руководство колледжа",
            "hint": "Директору ЖИГК — через канцелярию или eOtinish"
          },
          {
            "id": "edu",
            "title": "Управление образования",
            "hint": "Если вопрос не решён в колледже"
          },
          {
            "id": "anticor",
            "title": "Служба по противодействию коррупции КНБ",
            "hint": "Взятки и вымогательство; можно также позвонить 1424"
          },
          {
            "id": "prosecutor",
            "title": "Прокуратура",
            "hint": "Нарушение прав и законов; можно также позвонить 115"
          },
          {
            "id": "akimat",
            "title": "Акимат",
            "hint": "Вопросы города или района"
          },
          {
            "id": "other",
            "title": "Другой орган",
            "hint": "Укажите название сами"
          }
        ]
      },

      kb: {
        "chips": [
          "Требуют взятку — что делать?",
          "Куда звонить?",
          "Подарок или взятка?",
          "Как подать өтініш?"
        ],
        "fallback": "В базовом режиме я отвечаю только на частые вопросы и здесь не нашёл ответа. Спросите иначе или выберите тему ниже. Сообщить о коррупции можно по номеру 1424.",
        "intents": [
          {
            "id": "howto",
            "k": [
              "как дать взятк",
              "сколько дать",
              "кому дать",
              "как передать деньг",
              "как подкуп"
            ],
            "a": "С этим не помогу: дача взятки — уголовное правонарушение для обеих сторон. Если от вас требуют деньги, сообщите по номеру 1424 (бесплатно) — подскажу, как это сделать.",
            "links": [
              "help"
            ]
          },
          {
            "id": "giver",
            "k": [
              "дал взятку",
              "дать взятку",
              "дала взятку",
              "отвечает ли",
              "наказ",
              "ответствен"
            ],
            "a": "Да, дача взятки — уголовное правонарушение, как и её получение и посредничество. Закон предусматривает особые условия освобождения от ответственности, например при вымогательстве и добровольном сообщении о факте. Подробности — в карточке «Взятка» раздела «Колледж антикоррупции».",
            "links": [
              "school"
            ]
          },
          {
            "id": "greet",
            "k": [
              "привет",
              "здравств",
              "салем",
              "добрый день",
              "добрый вечер",
              "доброе утро"
            ],
            "a": "Здравствуйте! Подскажу, как действовать при коррупции, куда звонить и как подать обращение. Выберите тему ниже или задайте вопрос.",
            "links": []
          },
          {
            "id": "thanks",
            "k": [
              "спасибо",
              "рахмет",
              "благодарю"
            ],
            "a": "Пожалуйста! Если появятся вопросы — пишите. Срочно сообщить о коррупции можно по номеру 1424.",
            "links": []
          },
          {
            "id": "college",
            "k": [
              "экзамен",
              "зачет",
              "сесси",
              "оценк",
              "преподават",
              "куратор",
              "колледж",
              "стипенд",
              "диплом"
            ],
            "a": "Если преподаватель или сотрудник колледжа требует деньги или подарок за оценку или зачёт: не платите, запишите дату, место, ФИО и сумму, сообщите руководству колледжа письменно и в 1424. Обращение директору можно составить в разделе «Шаблоны документов» → «Обращение».",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "medical",
            "k": [
              "врач",
              "больниц",
              "поликлин",
              "медиц",
              "скор",
              "лечен",
              "осмс",
              "гобмп"
            ],
            "a": "Скорая и экстренная помощь входят в гарантированный объём бесплатной медпомощи. Консультации по ГОБМП и ОСМС — 1414. Жалобы на качество медпомощи с 1 апреля 2026 года подаются онлайн: на сайте ФСМС (fms.kz) и в приложении Qoldau 24/7. Если требуют деньги — звоните 1424.",
            "links": [
              "help"
            ]
          },
          {
            "id": "police",
            "k": [
              "полиц",
              "задерж",
              "протокол",
              "штраф",
              "адвокат",
              "арест"
            ],
            "a": "Сотрудник полиции должен представиться и объяснить причину обращения. При задержании вы имеете право на адвоката с момента задержания и можете не давать показаний против себя и близких. Предложение «решить без протокола» за деньги — взятка: откажитесь и сообщите в 1424. О нарушении прав — в прокуратуру, 115.",
            "links": [
              "school"
            ]
          },
          {
            "id": "otinish",
            "k": [
              "обращен",
              "өтініш",
              "отиниш",
              "отініш",
              "eotinish",
              "еотиниш",
              "жалоб",
              "заявлен",
              "подать"
            ],
            "a": "В разделе «Шаблоны документов» → «Обращение» есть пошаговый мастер: выберите тип и адресата, опишите ситуацию — сайт составит текст. Затем войдите на eotinish.kz через eGov (ЭЦП, QR или Face ID), вставьте текст и приложите файлы. Обычно обращение рассматривают до 15 рабочих дней, жалобу — до 20.",
            "links": [
              "otinish"
            ]
          },
          {
            "id": "anon",
            "k": [
              "аноним",
              "фото",
              "доказ",
              "снимок",
              "видео",
              "скрыт",
              "без имени"
            ],
            "a": "Во вкладке «Сообщение с фото» можно описать случай и добавить фото: сайт удалит с них геометки и данные телефона и ничего не хранит на сервере. Отправляете вы сами — через WhatsApp-бот 8 777 000 1424, Telegram-бот @antikorkz_bot или звонком на 1424. Полной анонимности в мессенджерах нет, но закон гарантирует конфиденциальность.",
            "links": [
              "report"
            ]
          },
          {
            "id": "contacts",
            "k": [
              "номер",
              "телефон",
              "позвон",
              "звонить",
              "куда обрат",
              "контакт",
              "1424",
              "горяч",
              "115",
              "1414"
            ],
            "a": "Основные номера:\n• 1424 — Служба по противодействию коррупции КНБ (бесплатно);\n• 115 — Генеральная прокуратура, нарушения прав;\n• 1414 — Единый контакт-центр: госуслуги, ОСМС, бесплатная медпомощь;\n• 102 или 112 — если есть угроза жизни.",
            "links": [
              "help"
            ]
          },
          {
            "id": "gift",
            "k": [
              "подар",
              "благодарност",
              "цвет",
              "торт",
              "сувенир"
            ],
            "a": "Если подарок связан с ожиданием услуги, оценки или решения — это уже взятка, даже если его дарят «после». Символический знак внимания без просьб (цветы от всей группы, открытка) обычно допустим, но правила многих организаций ограничивают и такие подарки. Потренируйтесь в игре «Взятка или подарок?».",
            "links": [
              "school"
            ]
          },
          {
            "id": "bribe",
            "k": [
              "взятк",
              "вымога",
              "конверт",
              "требуют деньг",
              "просят деньг",
              "откат"
            ],
            "a": "Не передавайте деньги и сохраняйте спокойствие. Запишите дату, место, ФИО и должность, сумму и имена свидетелей, сохраните переписку. Сообщите в call-центр 1424 (бесплатно) или подайте обращение через eOtinish. Не передавайте деньги «для доказательства» сами — такие действия проводятся только под контролем правоохранительных органов.",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "protect",
            "k": [
              "защит",
              "вознагр",
              "боюсь",
              "страшно",
              "отомст",
              "награ",
              "последств"
            ],
            "a": "По Закону РК «О противодействии коррупции» человек, сообщивший о коррупционном правонарушении, находится под защитой государства и может получить поощрение. Официальные каналы гарантируют конфиденциальность.",
            "links": [
              "help"
            ]
          },
          {
            "id": "stats",
            "k": [
              "индекс",
              "рейтинг",
              "статист",
              "балл",
              "transparency"
            ],
            "a": "В Индексе восприятия коррупции Transparency International за 2025 год Казахстан набрал 38 баллов из 100 и занял 96-е место из 182 стран (в 2024 году — 40 баллов). Цель Концепции антикоррупционной политики на 2022–2026 годы — 47 баллов.",
            "links": [
              "analytics"
            ]
          },
          {
            "id": "terms",
            "k": [
              "что такое",
              "коррупци",
              "конфликт интерес",
              "протекцион",
              "кумовств"
            ],
            "a": "Коррупция — незаконное использование должностных полномочий ради выгоды для себя или других, а также подкуп таких лиц. Взятка, конфликт интересов, протекционизм и откат разобраны с примерами в карточках раздела «Колледж антикоррупции».",
            "links": [
              "school"
            ]
          },
          {
            "id": "site",
            "k": [
              "сайт",
              "проект",
              "кто сделал",
              "групп",
              "п-11",
              "что умеешь",
              "помоги",
              "помощь",
              "раздел"
            ],
            "a": "Это учебный проект группы П-11 Жезказганского индустриально-гуманитарного колледжа. Здесь есть калькулятор цены коррупции, игра и тест о правах, комикс и видео, пошаговые инструкции, мастер өтініш, сообщение с фото, шаблоны документов и аналитика.",
            "links": [
              "calculator",
              "school",
              "otinish"
            ]
          }
        ]
      },

      video: [
        { title: 'Конверт', text: 'Лёгкие деньги кажутся простым решением.' },
        { title: 'Сделка', text: 'Деньги переходят из рук в руки — и время начинает работать против тебя.' },
        { title: 'Отражение', text: 'Треснувшее зеркало: что взятка делает с человеком.' },
        { title: 'Наш выбор', text: 'Студентка у здания колледжа обращается к сверстникам.' }
      ],

            charts: {
        cpiSeries: 'Казахстан, баллы ИВК',
        cpiTarget: 'Цель Концепции на 2026 г. (47)',
        cmpLabels: ['Казахстан', 'Среднемировой', 'Армения', 'Дания'],
        cmpSeries: 'Баллы ИВК-2025',
        topicsLabels: ['Образование', 'Медицина', 'Госуслуги', 'ЖКХ', 'Дороги и транспорт'],
        demo: '(демо)'
      }
    },

    /* ===================== ENGLISH ===================== */
    en: {
      spheres: {
        education: { name: 'Education', items: ['textbooks', 'laptops for students', 'interactive whiteboards for lecture rooms'] },
        medicine: { name: 'Healthcare', items: ['automatic blood pressure monitors', 'wheelchairs', 'cardiac monitors for hospitals'] },
        roads: { name: 'Roads', items: ['m² of pothole repair', 'street lights', 'safe pedestrian crossings'] },
        housing: { name: 'Utilities', items: ['energy-saving stairwell lamps', 'benches for courtyards', 'children’s playgrounds'] }
      },

      game: [
        { title: 'An expensive gift for a lecturer before an exam', text: 'A week before the final exam, a student’s parents give the lecturer a new smartphone “just as a token of respect”.', explain: 'An expensive gift right before an exam comes with an expectation — a good grade. The timing, the value and the lecturer’s influence over the result make this “gift” a form of bribery.' },
        { title: 'Money to a doctor to speed things up', text: 'A patient hands a doctor an envelope to be scheduled for surgery ahead of the queue.', explain: 'This is a classic bribe: money is given for an action that benefits the giver — jumping the queue. Other patients waiting on equal terms suffer as a result.' },
        { title: 'Flowers from the whole group', text: 'On Teachers’ Day the student group chips in for a bouquet and a card for their tutor. They ask for nothing, and grades are already set.', explain: 'A symbolic gesture with no request attached and no link to the lecturer’s decisions is generally acceptable. But remember: many organisations’ ethics rules restrict even such gifts — it’s best to check in advance.' },
        { title: '“Speeding up paperwork” for extra cash', text: 'An official accepting documents offers to issue a certificate “in a couple of days instead of a month” for cash, off the books and without a receipt.', explain: 'Official payments always go through a cashier or online payment with a receipt. Cash “off the books” to speed things up is extortion of a bribe. Report it by calling 1424.' },
        { title: 'A book from a friend for your birthday', text: 'A classmate gives you an interesting book for your birthday. You are friends, and neither of you makes decisions for the other.', explain: 'This is an ordinary personal gift between friends. There is no official position, no authority and no favour expected in return — so there is no corruption.' },
        { title: 'A “thank you” after the exam', text: 'After passing the session, a student brings the lecturer an envelope of money “in gratitude for understanding”.', explain: 'Rewarding an action after the fact is also illegal. Money given “afterwards” reinforces a system where grades and decisions are bought.' },
        { title: '“Let’s skip the report”', text: 'After a traffic violation, a driver is offered to “settle it on the spot” for less than the official fine.', explain: 'Fines are paid only officially, based on a formal decision. An offer to skip the report for money is a bribe, and both sides are liable.' },
        { title: 'A souvenir pen at a conference', text: 'The organisers of an open conference give every participant the same branded pens and notebooks.', explain: 'Inexpensive promotional items that every participant receives equally are not linked to any decision or favour. This is an acceptable souvenir.' },
        { title: 'A contract for a relative’s company', text: 'A department head takes part in choosing a contractor and votes for his brother’s company without disclosing the relationship.', explain: 'This is a conflict of interest and nepotism. An official must declare a personal interest and stay out of such decisions.' },
        { title: 'A cake for the whole ward', text: 'After being discharged, a patient brings a cake for the whole staff to share with tea. Treatment is over and nothing is being asked for.', explain: 'An open, symbolic thank-you for the whole team that influences no decisions is generally acceptable. Money, expensive items or gifts “before” treatment are not.' }
      ],

      quiz: [
        { category: 'Police', question: 'A police officer stops you in the street. What must the officer do first?', options: ['Demand your phone for a check right away', 'Introduce themselves, state their position and show their ID on request', 'Explain nothing at all', 'Ask you to pay for a “document check”'], explain: 'A police officer must introduce themselves and explain why they stopped you. You have the right to ask to see their ID and note its details.' },
        { category: 'Police', question: 'From what moment does a detained person have the right to a lawyer?', options: ['Only after a court decision', 'Three days after detention', 'From the moment of detention', 'Only if they can afford a lawyer'], explain: 'The Constitution of Kazakhstan guarantees the right to qualified legal assistance from the moment of detention. In cases set by law, this assistance is free.' },
        { category: 'Police', question: 'Are you obliged to testify against yourself and your close relatives?', options: ['Yes, in any case', 'No, nobody is obliged to testify against themselves or close relatives', 'Yes, if asked in writing', 'Yes, if there are other witnesses'], explain: 'The Constitution of Kazakhstan states that nobody is obliged to testify against themselves, their spouse or close relatives.' },
        { category: 'Police', question: 'What must officers do when detaining someone?', options: ['Explain the reason for detention and the detainee’s rights', 'Take the phone first and explain nothing', 'Offer to “come to an arrangement”', 'Detain without grounds “until it’s sorted out”'], explain: 'A detainee is told the grounds for detention and their rights, including the right to a lawyer and to inform relatives about the detention.' },
        { category: 'Police', question: 'An officer offers to “skip the report” for money. What is the right thing to do?', options: ['Pay — it’s faster', 'Offer a smaller amount', 'Refuse, note the officer’s details and report it by calling 1424', 'Walk away and tell no one'], explain: 'Giving a bribe is a criminal offence for both sides. The right move is to refuse and report it to the 1424 call centre of the Anti-Corruption Service.' },
        { category: 'Healthcare', question: 'Do you have to pay for emergency medical care within the guaranteed volume?', options: ['Yes, always', 'Only if you have no mandatory health insurance', 'No, emergency care is part of the guaranteed volume of free medical care', 'Only at night'], explain: 'Ambulance and emergency care are part of the guaranteed volume of free medical care. Detailed advice is available at the unified contact centre 1414.' },
        { category: 'Healthcare', question: 'A doctor demands cash for a service that should be free. What should you do?', options: ['Pay so as not to spoil the relationship', 'Refuse, contact the clinic’s management and the Health Insurance Fund, and call 1424 in case of extortion', 'Do nothing', 'Complain on social media instead of filing officially'], explain: 'Paid services are formalised with a contract and a receipt. Demanding money for free care is a violation, and extortion is a reason to call 1424.' },
        { category: 'Healthcare', question: 'Does a patient have the right to information about their health and treatment?', options: ['No, only the doctor decides', 'Yes, in a form they can understand', 'Only for an extra fee', 'Only by court order'], explain: 'A patient has the right to understandable information about their health, treatment options and possible risks.' },
        { category: 'Healthcare', question: 'Since 1 April 2026, how can you file a complaint about the quality of medical care online?', options: ['Only by calling 1414', 'Via the Social Health Insurance Fund website or the Qoldau 24/7 app', 'Through the doctor’s personal messenger', 'Complaints are not accepted'], explain: 'Since 1 April 2026, complaints about the quality of care are filed online: on the Fund’s website and in the Qoldau 24/7 app. The 1414 line remains for advice.' },
        { category: 'Government', question: 'As a rule, how long does a government agency have to consider a regular appeal?', options: ['1 working day', '15 working days (complaints — 20 working days)', 'One year', 'There is no deadline'], explain: 'As a general rule, an appeal is considered within 15 working days and a complaint within 20 working days. In some cases the period may be extended with notice to the applicant.' },
        { category: 'Government', question: 'Which official service lets you submit an appeal to a government agency online?', options: ['eOtinish (eotinish.kz, eGov.kz portal, eGov Mobile app)', 'Only a personal letter to the head', 'Comments on social media', 'Online submission is not possible'], explain: 'eOtinish is a single “window” for appeals to government agencies. You can also apply at a Public Service Centre. The status is tracked in your personal account.' },
        { category: 'Government', question: 'What does the law guarantee to a person who reports a corruption offence?', options: ['Nothing', 'State protection and a possible reward', 'Mandatory publication of their name', 'An automatic fine'], explain: 'Under Kazakhstan’s Law “On Combating Corruption”, a person who reports a corruption offence is protected by the state and may be rewarded.' }
      ],

      concepts: [
        { title: 'Corruption', short: 'Using an official position for personal gain.', definition: 'Corruption is the unlawful use of authority by people who hold office or perform state functions to gain benefits for themselves or others, as well as the bribing of such people.', examples: ['<b>College:</b> a grade is given not for knowledge but for money or a gift.', '<b>Hospital:</b> a place in the surgery queue is “sold” for an envelope.', '<b>Government office:</b> permits are issued faster to those who “show gratitude”.'], harm: 'Corruption makes services more expensive and worse, undermines trust in the state and denies honest people equal opportunities.', law: 'The main law is the Law of the Republic of Kazakhstan “On Combating Corruption”.' },
        { title: 'Bribe', short: 'Money, goods or services for an official’s action or inaction.', definition: 'A bribe is money, securities, property, services or any other benefit an official receives for actions (or inaction) in favour of the giver — whether lawful or unlawful.', examples: ['<b>Road:</b> a driver pays to avoid a traffic report.', '<b>University:</b> a student pays for a pass without an exam.', '<b>Services:</b> an “extra fee” for a certificate, off the books.'], harm: 'Not only the taker is liable, but also the giver and any intermediary.', law: 'Taking and giving bribes and acting as an intermediary are criminal offences under the Criminal Code of Kazakhstan.' },
        { title: 'Conflict of interest', short: 'Personal interest gets in the way of doing the job objectively.', definition: 'A conflict of interest is a situation where a person’s private interest affects, or may affect, the impartial performance of their official duties.', examples: ['<b>Panel:</b> a jury member grades their own child’s work.', '<b>Procurement:</b> an official picks a contractor where their spouse works.', '<b>Hiring:</b> a manager interviews a close friend.'], harm: 'A conflict of interest is not yet corruption, but it is a risky situation. Report it in time and step away from the decision.', law: 'Officials must take measures to prevent and resolve conflicts of interest.' },
        { title: 'Nepotism', short: 'Promoting “your own people” instead of the most deserving.', definition: 'Nepotism (cronyism, favouritism) is patronage of relatives, friends or acquaintances in hiring, promotion or distribution of resources, against the interests of the job.', examples: ['<b>Jobs:</b> a vacancy goes to the boss’s nephew without competition.', '<b>Grants:</b> funding goes to a project run by “acquaintances”.', '<b>Promotion:</b> career growth depends on connections, not results.'], harm: 'Talented people lose motivation and the quality of management drops.', law: 'The law restricts close relatives from working in a direct reporting line.' },
        { title: 'Kickback', short: 'A hidden “return” of part of a contract to whoever helped win it.', definition: 'A kickback is an unofficial payment of part of a contract’s value (for example, in public procurement) to the official who ensured the “right” supplier was chosen.', examples: ['<b>College repairs:</b> a contractor inflates the estimate and returns part of it to an official.', '<b>Equipment purchase:</b> the winner is not the best price but whoever “shared”.', '<b>Roads:</b> work is done worse because part of the budget went on kickbacks.'], harm: 'The budget overpays and quality drops — in the end every taxpayer pays.', law: 'In essence, a kickback is a form of bribery or commercial bribery.' }
      ],

      help: [
        {
          title: 'A bribe is demanded at college', subtitle: 'College, university, school',
          intro: 'A lecturer, admissions officer or administrator demands money, a gift or a favour for a grade, a pass or enrolment.',
          steps: [
            { title: 'Do not hand over money and stay calm', text: 'Do not agree and do not offer anything yourself. Refuse politely — it is your legal right.' },
            { title: 'Record the facts', text: 'Write down the date, time, place, full name and position, the amount demanded and the names of witnesses. Keep messages and screenshots.' },
            { title: 'Call the 1424 call centre', text: 'Call the free call centre of the Anti-Corruption Service and describe the situation. Do not hand over money “as evidence” on your own — such actions are carried out only under the control of law enforcement.' },
            { title: 'Contact the management in writing', text: 'Submit a written statement to the director or rector via the office and get a registration stamp (date and reference number).' },
            { title: 'File an appeal via eOtinish', text: 'If the issue is not resolved, send an appeal to the authorised education agency via eotinish.kz or the eGov Mobile app.' },
            { title: 'Track the response', text: 'A regular appeal is usually considered within 15 working days. The status is visible in your eOtinish account.' }
          ],
          tips: ['Be precise: facts matter more than emotions.', 'Tell your parents or tutor — support matters.', 'Do not spread unverified accusations on social media.'],
          links: ['Call 1424', 'eotinish.kz — online appeal']
        },
        {
          title: 'Money is demanded at a medical facility', subtitle: 'Clinic, hospital, ambulance',
          intro: 'You are asked to pay “unofficially” for care that should be free, or to jump the queue.',
          steps: [
            { title: 'Check whether the service is free', text: 'Ambulance and emergency care are part of the guaranteed volume of free medical care. Advice is available at the unified contact centre 1414.' },
            { title: 'Ask for official paperwork', text: 'If a service is paid, it is formalised by the price list, with a contract and a receipt from the cashier. Money “in a pocket” is a violation.' },
            { title: 'Contact the clinic’s management', text: 'Ask to meet the head of department or the chief doctor, or submit a written statement.' },
            { title: 'File a complaint about care online', text: 'Since 1 April 2026, complaints are accepted on the Social Health Insurance Fund website (fms.kz) and in the Qoldau 24/7 app.' },
            { title: 'In case of extortion — call 1424', text: 'If money is demanded for an action or inaction, report it to the Anti-Corruption Service call centre.' }
          ],
          tips: ['If life is at risk, get help first: call 103 or 112.', 'Keep discharge papers, referrals and receipts.', 'Note the staff member’s name and position.'],
          links: ['Call 1424', '1414 — advice on free care and insurance', 'fms.kz — Health Insurance Fund']
        },
        {
          title: 'Corruption in a government agency', subtitle: 'Akimat, service centre, inspections, ministries',
          intro: 'An official delays a decision, hints at “gratitude” or demands money for a service.',
          steps: [
            { title: 'Get the official’s details', text: 'Politely ask for their full name and position. Note the date, time and office number.' },
            { title: 'Ask for a written basis', text: 'Ask them to state in writing which document is the basis for refusing you or demanding payment. Official payments go only through a cashier or online with a receipt.' },
            { title: 'Report the corruption', text: 'Call the 1424 call centre of the Anti-Corruption Service (free of charge).' },
            { title: 'Appeal to a higher authority', text: 'File a complaint via eOtinish. A complaint is usually considered within 20 working days.' },
            { title: 'If your rights are violated — the prosecutor', text: 'You can report a violation of your rights to the Prosecutor General’s call centre at 115 (free of charge).' }
          ],
          tips: ['Submit appeals in writing so they cannot get “lost”.', 'Keep copies of all documents and registration numbers.', 'People who report corruption are protected by the state.'],
          links: ['Call 1424', 'Call 115 — Prosecutor General', 'Helplines of government agencies (egov.kz)']
        }
      ],

      templates: [
        {
          title: 'Statement', desc: 'Reporting a corruption offence', defaultTo: 'Head of the authorised agency', file: 'Statement',
          heading: ['STATEMENT', 'on a corruption offence'],
          body: (d) => `To: ${d.to}
From: ${d.name}
Contact: ${d.contact}

STATEMENT
on a corruption offence

I hereby report that ${d.details}

In my opinion, these actions show signs of a corruption offence.

I request that you:
1. Investigate the facts described above.
2. Take measures in accordance with the legislation of the Republic of Kazakhstan.
3. Inform me of the outcome within the period established by law.

Supporting materials (if any): ____________________

I am aware of liability for knowingly false reporting.

Date: ${d.date}                    Signature: ____________`
        },
        {
          title: 'Complaint', desc: 'About an official’s action (inaction)', defaultTo: 'Head of the higher authority', file: 'Complaint',
          heading: ['COMPLAINT', 'about an official’s action (inaction)'],
          body: (d) => `To: ${d.to}
From: ${d.name}
Contact: ${d.contact}

COMPLAINT
about an official’s action (inaction)

I am appealing against the following action (inaction) of an official: ${d.details}

I believe these actions violate my rights and legitimate interests.

On the basis of the above, I request that you:
1. Consider this complaint on its merits.
2. Recognise the official’s action (inaction) as unlawful.
3. Take measures to restore my rights.
4. Send a written reply to the contacts provided.

Attachments: ____________________

Date: ${d.date}                    Signature: ____________`
        },
        {
          title: 'Appeal', desc: 'A suggestion or feedback to an agency', defaultTo: 'Government agency', file: 'Appeal',
          heading: ['APPEAL'],
          body: (d) => `To: ${d.to}
From: ${d.name}
Contact: ${d.contact}

APPEAL

Dear Sir or Madam,

I am writing to you regarding the following matter: ${d.details}

I suggest considering measures to improve transparency and the quality of services, including:
— publishing the procedure and deadlines for services in the public domain;
— providing a feedback channel for citizens.

Please consider this appeal and inform me of the decision within the period established by law.

Date: ${d.date}                    Signature: ____________`
        },
        {
          title: 'Information request', desc: 'For publicly available information', defaultTo: 'Head of the information holder', file: 'Information_request',
          heading: ['REQUEST', 'for information'],
          body: (d) => `To: ${d.to}
From: ${d.name}
Contact: ${d.contact}

REQUEST
for information

In accordance with the legislation of the Republic of Kazakhstan on access to information, I request the following information: ${d.details}

Please provide the information:
☐ electronically to the contacts provided;
☐ in writing to my postal address.

Date: ${d.date}                    Signature: ____________`
        }
      ],

      regions: {
        astana: { name: 'Astana', short: 'Astana', center: 'Capital of the Republic of Kazakhstan' },
        'almaty-city': { name: 'Almaty', short: 'Almaty', center: 'City of republican significance' },
        shymkent: { name: 'Shymkent', short: 'Shymkent', center: 'City of republican significance' },
        akmola: { name: 'Akmola Region', short: 'Akmola', center: 'Kokshetau' },
        aktobe: { name: 'Aktobe Region', short: 'Aktobe', center: 'Aktobe' },
        almaty: { name: 'Almaty Region', short: 'Almaty Reg.', center: 'Konaev' },
        atyrau: { name: 'Atyrau Region', short: 'Atyrau', center: 'Atyrau' },
        abai: { name: 'Abai Region', short: 'Abai', center: 'Semey' },
        vko: { name: 'East Kazakhstan Region', short: 'East Kaz.', center: 'Oskemen' },
        zhambyl: { name: 'Zhambyl Region', short: 'Zhambyl', center: 'Taraz' },
        zhetisu: { name: 'Zhetysu Region', short: 'Zhetysu', center: 'Taldykorgan' },
        zko: { name: 'West Kazakhstan Region', short: 'West Kaz.', center: 'Oral' },
        karaganda: { name: 'Karaganda Region', short: 'Karaganda', center: 'Karaganda' },
        kostanay: { name: 'Kostanay Region', short: 'Kostanay', center: 'Kostanay' },
        kyzylorda: { name: 'Kyzylorda Region', short: 'Kyzylorda', center: 'Kyzylorda' },
        mangystau: { name: 'Mangystau Region', short: 'Mangystau', center: 'Aktau' },
        pavlodar: { name: 'Pavlodar Region', short: 'Pavlodar', center: 'Pavlodar' },
        sko: { name: 'North Kazakhstan Region', short: 'North Kaz.', center: 'Petropavl' },
        turkestan: { name: 'Turkistan Region', short: 'Turkistan', center: 'Turkistan' },
        ulytau: { name: 'Ulytau Region', short: 'Ulytau', center: 'Zhezkazgan' }
      },

      wall: [
        { title: 'Open public procurement', text: 'Tenders, bidders and results are published on the public procurement portal — any citizen can see who won a tender and for how much.' },
        { title: 'E-tenders instead of paper', text: 'The electronic format reduces personal contact between buyer and supplier — fewer chances for collusion and “arrangements”.' },
        { title: 'Competition lowers the price', text: 'Example: when 5 suppliers bid instead of one, the final price of a college repair is 18% below the starting price. The savings buy new desks.' },
        { title: 'Digital services without middlemen', text: 'Getting certificates online via eGov removes queues and middlemen — and with them, reasons to “speed things up for money”.' },
        { title: 'Open dialogue with agencies', text: 'Citizens can ask heads of government agencies questions publicly and see the answers — making agencies more transparent.' },
        { title: 'Public discussion of draft laws', text: 'Draft regulations are published for public discussion — anyone can comment before they are adopted.' },
        { title: 'Open data', text: 'Government datasets are available for download and analysis — journalists, students and developers can check the numbers themselves.' },
        { title: '“Honest Generation” student club', text: 'Example initiative: college students run rights quizzes for first-year students and prepare “Where to turn” leaflets. 40 events in a year.' },
        { title: 'Student queue monitoring', text: 'Example: volunteers record waiting times at public offices and publish an open report — management changes the service hours.' }
      ],

      faq: [
        { q: 'Where do I report corruption?', a: 'To the free 1424 call centre of the Anti-Corruption Service of the National Security Committee, or in writing via eOtinish (eotinish.kz, eGov Mobile) or at a Public Service Centre.' },
        { q: 'Does the form on this site send complaints to authorities?', a: 'No. This is a student demo project: the forms do not send data to any authority and are not an official channel for appeals. Please use official resources.' },
        { q: 'Is a person who reports corruption protected by law?', a: 'Yes. Under Kazakhstan’s Law “On Combating Corruption”, a person who reports a corruption offence is protected by the state and may be rewarded.' },
        { q: 'Can I give a gift to a lecturer or doctor?', a: 'A gift linked to an expected favour, grade or decision is not acceptable. A symbolic gesture with no request is a different matter, but many organisations restrict even such gifts in their ethics rules.' },
        { q: 'Is the person who gives a bribe liable?', a: 'Yes. Giving a bribe is a criminal offence, just like taking one or acting as an intermediary. The law provides special conditions for release from liability, for example in cases of extortion and voluntary reporting.' },
        { q: 'How long does it take to consider an appeal?', a: 'As a rule, a regular appeal is considered within 15 working days and a complaint within 20 working days. You can track the status in your eOtinish account.' },
        { q: 'Where does the data on this site come from?', a: 'The Corruption Perceptions Index comes from Transparency International; contacts come from the official portals egov.kz and gov.kz. All illustrative figures are marked “demo”.' }
      ],

      wizard: {
        "steps": [
          "Type",
          "Recipient",
          "Details",
          "Applicant",
          "Done"
        ],
        "types": [
          {
            "id": "appeal",
            "title": "Appeal",
            "hint": "A question, a request or a report of a problem",
            "days": 15
          },
          {
            "id": "complaint",
            "title": "Complaint",
            "hint": "Challenge an official’s action or inaction",
            "days": 20
          },
          {
            "id": "proposal",
            "title": "Suggestion",
            "hint": "An idea to improve how an organisation works",
            "days": 15
          },
          {
            "id": "request",
            "title": "Information request",
            "hint": "Get information from an agency or organisation",
            "days": 15
          },
          {
            "id": "corruption",
            "title": "Corruption report",
            "hint": "A bribe, extortion, a kickback, a conflict of interest",
            "days": 15
          }
        ],
        "targets": [
          {
            "id": "college",
            "title": "College management",
            "hint": "To the director of the college — via the office or eOtinish"
          },
          {
            "id": "edu",
            "title": "Education department",
            "hint": "If the issue was not resolved at the college"
          },
          {
            "id": "anticor",
            "title": "KNB Anti-Corruption Service",
            "hint": "Bribes and extortion; you can also call 1424"
          },
          {
            "id": "prosecutor",
            "title": "Prosecutor’s office",
            "hint": "Violations of rights and laws; you can also call 115"
          },
          {
            "id": "akimat",
            "title": "Akimat",
            "hint": "City or district issues"
          },
          {
            "id": "other",
            "title": "Another agency",
            "hint": "Enter the name yourself"
          }
        ]
      },

      kb: {
        "chips": [
          "Someone demands a bribe — what do I do?",
          "Which numbers should I call?",
          "Gift or bribe?",
          "How do I file an appeal?"
        ],
        "fallback": "In basic mode I only answer common questions, and I didn’t find an answer to this one. Try asking differently or pick a topic below. You can report corruption by calling 1424.",
        "intents": [
          {
            "id": "howto",
            "k": [
              "how to bribe",
              "how much to give",
              "how do i bribe",
              "how to pay off",
              "who to pay"
            ],
            "a": "I can’t help with that: giving a bribe is a criminal offence for both sides. If someone is demanding money from you, report it by calling 1424 (free) — I can explain how.",
            "links": [
              "help"
            ]
          },
          {
            "id": "giver",
            "k": [
              "gave a bribe",
              "give a bribe",
              "liable",
              "punish",
              "responsib",
              "prosecuted"
            ],
            "a": "Yes. Giving a bribe is a criminal offence, just like taking one or acting as an intermediary. The law sets special conditions for release from liability, for example in cases of extortion and voluntary reporting. See the “Bribe” card in the Anti-Corruption College section.",
            "links": [
              "school"
            ]
          },
          {
            "id": "greet",
            "k": [
              " hi ",
              " hello",
              " hey ",
              "good morning",
              "good evening",
              "salem"
            ],
            "a": "Hello! I can tell you how to act when you face corruption, which numbers to call and how to file an appeal. Pick a topic below or ask a question.",
            "links": []
          },
          {
            "id": "thanks",
            "k": [
              "thank",
              "thx",
              "rakhmet"
            ],
            "a": "You’re welcome! Ask any time. To report corruption urgently, call 1424.",
            "links": []
          },
          {
            "id": "college",
            "k": [
              "exam",
              "grade",
              "test",
              "lecturer",
              "teacher",
              "tutor",
              "college",
              "scholarship",
              "diploma"
            ],
            "a": "If a lecturer or college staff member demands money or a gift for a grade or a pass: don’t pay, write down the date, place, name and amount, and report it in writing to the college management and to 1424. You can draft an appeal to the director in “Document templates” → “Appeal”.",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "medical",
            "k": [
              "doctor",
              "hospital",
              "clinic",
              "medical",
              "ambulance",
              "insurance",
              "treatment"
            ],
            "a": "Ambulance and emergency care are part of the guaranteed volume of free medical care. Advice on free care and mandatory insurance: 1414. Since 1 April 2026 complaints about the quality of care are filed online on the Health Insurance Fund site (fms.kz) and in the Qoldau 24/7 app. If money is demanded, call 1424.",
            "links": [
              "help"
            ]
          },
          {
            "id": "police",
            "k": [
              "police",
              "detain",
              "arrest",
              "fine",
              "lawyer",
              "traffic",
              "officer"
            ],
            "a": "A police officer must introduce themselves and explain why they stopped you. If detained, you have the right to a lawyer from the moment of detention and you don’t have to testify against yourself or close relatives. An offer to “skip the report” for money is a bribe: refuse and report it to 1424. For violations of your rights, call the prosecutor’s office at 115.",
            "links": [
              "school"
            ]
          },
          {
            "id": "otinish",
            "k": [
              "appeal",
              "otinish",
              "eotinish",
              "complaint",
              "petition",
              "file a",
              "application"
            ],
            "a": "“Document templates” → “Appeal” has a step-by-step wizard: choose the type and recipient, describe the situation, and the site drafts the text. Then sign in at eotinish.kz through eGov (EDS, QR or Face ID), paste the text and attach files. A regular appeal is usually considered within 15 working days, a complaint within 20.",
            "links": [
              "otinish"
            ]
          },
          {
            "id": "anon",
            "k": [
              "anonym",
              "photo",
              "picture",
              "evidence",
              "video",
              "without my name",
              "hide my"
            ],
            "a": "In the “Report with photos” tab you can describe what happened and add photos: the site removes location tags and phone details from them and stores nothing on a server. You send it yourself — via the WhatsApp bot 8 777 000 1424, the Telegram bot @antikorkz_bot or by calling 1424. Messengers are never fully anonymous, but the law guarantees confidentiality.",
            "links": [
              "report"
            ]
          },
          {
            "id": "contacts",
            "k": [
              "number",
              "phone",
              "call",
              "contact",
              "hotline",
              "1424",
              "115",
              "1414",
              "where to report",
              "where do i report"
            ],
            "a": "Main numbers:\n• 1424 — KNB Anti-Corruption Service (free);\n• 115 — Prosecutor General’s Office, violations of rights;\n• 1414 — Unified contact centre: public services, health insurance, free medical care;\n• 102 or 112 — if there is a threat to life.",
            "links": [
              "help"
            ]
          },
          {
            "id": "gift",
            "k": [
              "gift",
              "present",
              "flowers",
              "cake",
              "souvenir"
            ],
            "a": "If a gift comes with the expectation of a favour, a grade or a decision, it is a bribe, even if it is given “afterwards”. A symbolic gesture with no request (flowers from the whole group, a card) is usually acceptable, but many organisations restrict even such gifts. Practise in the “Bribe or gift?” game.",
            "links": [
              "school"
            ]
          },
          {
            "id": "bribe",
            "k": [
              "bribe",
              "extort",
              "envelope",
              "asking for money",
              "demand money",
              "demanding money",
              "kickback"
            ],
            "a": "Don’t hand over money and stay calm. Write down the date, place, the person’s name and position, the amount and the names of witnesses, and keep any messages. Report it to the 1424 call centre (free) or file an appeal via eOtinish. Don’t hand over money “as evidence” on your own — that is done only under the control of law enforcement.",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "protect",
            "k": [
              "protect",
              "reward",
              "afraid",
              "scared",
              "retaliat",
              "safe"
            ],
            "a": "Under Kazakhstan’s Law “On Combating Corruption”, a person who reports a corruption offence is protected by the state and may be rewarded. Official channels guarantee confidentiality.",
            "links": [
              "help"
            ]
          },
          {
            "id": "stats",
            "k": [
              "index",
              "ranking",
              "statistic",
              "score",
              "transparency",
              "cpi"
            ],
            "a": "In Transparency International’s Corruption Perceptions Index 2025, Kazakhstan scored 38 out of 100 and ranked 96th of 182 countries (40 points in 2024). The target of the 2022–2026 Anti-Corruption Policy Concept is 47 points.",
            "links": [
              "analytics"
            ]
          },
          {
            "id": "terms",
            "k": [
              "what is corruption",
              "corruption mean",
              "conflict of interest",
              "nepotism",
              "definition"
            ],
            "a": "Corruption is the unlawful use of official powers to benefit oneself or others, as well as bribing such people. Bribes, conflicts of interest, nepotism and kickbacks are explained with examples in the cards of the Anti-Corruption College section.",
            "links": [
              "school"
            ]
          },
          {
            "id": "site",
            "k": [
              "site",
              "website",
              "project",
              "who made",
              "group",
              "p-11",
              "what can you",
              "help me",
              "sections"
            ],
            "a": "This is a student project by group P-11 of Zhezkazgan Industrial and Humanitarian College. It has a cost-of-corruption calculator, a game and a rights quiz, a comic and a video, step-by-step guides, an appeal wizard, a photo report, document templates and analytics.",
            "links": [
              "calculator",
              "school",
              "otinish"
            ]
          }
        ]
      },

      video: [
        { title: 'The envelope', text: 'Easy money looks like a simple way out.' },
        { title: 'The deal', text: 'Money changes hands — and time starts working against you.' },
        { title: 'Reflection', text: 'A cracked mirror: what a bribe does to a person.' },
        { title: 'Our choice', text: 'A student outside our college speaks to her peers.' }
      ],

            charts: {
        cpiSeries: 'Kazakhstan, CPI score',
        cpiTarget: 'Concept target for 2026 (47)',
        cmpLabels: ['Kazakhstan', 'Global average', 'Armenia', 'Denmark'],
        cmpSeries: 'CPI 2025 score',
        topicsLabels: ['Education', 'Healthcare', 'Public services', 'Utilities', 'Roads & transport'],
        demo: '(demo)'
      }
    },

    /* ===================== ҚАЗАҚША ===================== */
    kk: {
      spheres: {
        education: { name: 'Білім беру', items: ['оқулық', 'студенттерге арналған ноутбук', 'аудиторияларға арналған интерактивті тақта'] },
        medicine: { name: 'Медицина', items: ['автоматты тонометр', 'мүгедектер арбасы', 'ауруханаларға арналған кардиомонитор'] },
        roads: { name: 'Жолдар', items: ['м² жол шұңқырларын жөндеу', 'көше шамы', 'қауіпсіз жаяу жүргінші өткелі'] },
        housing: { name: 'ТКШ', items: ['кіреберістерге арналған энергия үнемдейтін шам', 'аулаларға арналған орындық', 'балалар ойын алаңы'] }
      },

      game: [
        { title: 'Емтихан алдында оқытушыға қымбат сыйлық', text: 'Емтиханға бір апта қалғанда студенттің ата-анасы оқытушыға «жай ғана құрмет белгісі ретінде» жаңа смартфон сыйлайды.', explain: 'Емтихан қарсаңындағы қымбат сыйлық пайда күтумен — жақсы бағамен байланысты. Уақыты, құны және нәтиженің оқытушыға тәуелділігі мұндай «сыйлықты» параның бір түріне айналдырады.' },
        { title: 'Емдеуді тездету үшін дәрігерге ақша', text: 'Науқас кезексіз операцияға жазылу үшін дәрігерге конверт ұсынады.', explain: 'Бұл — классикалық пара: ақша беруші үшін пайдалы әрекет — кезекті бұзу үшін беріледі. Бұдан жалпы негізде көмек күтіп отырған басқа науқастар зардап шегеді.' },
        { title: 'Бүкіл топтан гүл', text: 'Мұғалімдер күні топ ақша жинап, топ кураторына гүл шоғы мен ашықхат сыйлайды. Ештеңе сұралмайды, бағалар қойылып қойған.', explain: 'Қызмет сұрамайтын және оқытушының шешімдерімен байланысы жоқ символдық ілтипат әдетте рұқсат етілген деп саналады. Бірақ көптеген ұйымдардың әдеп ережелері мұндай сыйлықтарды да шектейді — оны алдын ала нақтылаған жөн.' },
        { title: 'Қосымша ақшаға «құжатты тездету»', text: 'Құжат қабылдайтын қызметкер анықтаманы «бір айдың орнына екі күнде» дайындауды ұсынады — кассадан тыс, қолма-қол ақшаға және түбіртексіз.', explain: 'Ресми төлемдер әрқашан касса арқылы немесе түбіртегі бар онлайн төлеммен жүргізіледі. Тездету үшін «кассадан тыс» ақша — пара талап ету. Бұл туралы 1424 нөміріне хабарлаңыз.' },
        { title: 'Туған күнге досыңнан кітап', text: 'Топтасың туған күніңе қызықты кітап сыйлайды. Сендер доссыңдар, ешқайсың бір-біріңнің орныңа шешім қабылдамайсыңдар.', explain: 'Бұл — достар арасындағы кәдімгі жеке сыйлық. Мұнда лауазымдық жағдай, қызметтік өкілеттік және оның орнына қызмет күту жоқ — демек, сыбайлас жемқорлық та жоқ.' },
        { title: 'Емтиханнан кейінгі «алғыс»', text: 'Сессияны сәтті тапсырған студент оқытушыға «түсіністік үшін алғыс ретінде» ақша салынған конверт әкеледі.', explain: 'Жасалып қойған әрекет үшін сыйақы беру де заңсыз. «Кейін» берілген ақша бағалар мен шешімдер сатып алынатын жүйені нығайтады.' },
        { title: '«Хаттамасыз шешейік»', text: 'Жол жүрісі ережесін бұзғаннан кейін жүргізушіге ресми айыппұлдан аз сомаға «мәселені осы жерде шешуді» ұсынады.', explain: 'Айыппұл тек ресми түрде, қаулы бойынша төленеді. Ақшаға «хаттамасыз» шешу ұсынысы — пара, ол үшін екі тарап та жауап береді.' },
        { title: 'Конференциядағы кәдесый қалам', text: 'Ашық конференцияны ұйымдастырушылар барлық қатысушыға логотипі бар бірдей қаламдар мен блокноттар таратады.', explain: 'Барлық қатысушы бірдей алатын арзан промо-өнім нақты шешіммен немесе қызметпен байланысты емес. Бұл — рұқсат етілген кәдесый.' },
        { title: 'Туысының фирмасына келісімшарт', text: 'Бөлім басшысы мердігерді таңдауға қатысып, туыстығы туралы айтпастан өз ағасының компаниясына дауыс береді.', explain: 'Бұл — мүдделер қақтығысы және протекционизм. Лауазымды тұлға жеке мүдделілігі туралы мәлімдеп, мұндай шешімге қатыспауы тиіс.' },
        { title: 'Бүкіл бөлімге торт', text: 'Ауруханадан шыққаннан кейін науқас бүкіл персоналға шайға торт әкеледі. Емдеу аяқталған, ешқандай өтініш жоқ.', explain: 'Бүкіл ұжымға арналған, ешбір шешімге әсер етпейтін ашық символдық алғыс әдетте рұқсат етілген деп саналады. Ақша, қымбат заттар немесе емдеуге «дейінгі» сыйлықтар — рұқсат етілмейді.' }
      ],

      quiz: [
        { category: 'Полиция', question: 'Полиция қызметкері сізді көшеде тоқтатты. Ол ең алдымен не істеуге міндетті?', options: ['Тексеру үшін бірден телефоныңызды талап ету', 'Өзін таныстырып, лауазымын атау және талап бойынша қызметтік куәлігін көрсету', 'Ештеңе түсіндіруге міндетті емес', '«Құжат тексеру» үшін ақша төлеуді сұрау'], explain: 'Полиция қызметкері өзін таныстырып, жүгіну себебін түсіндіруі тиіс. Сіз қызметтік куәлігін көрсетуді сұрап, оның деректерін есте сақтауға құқылысыз.' },
        { category: 'Полиция', question: 'Ұсталған адам қай сәттен бастап адвокаттың (қорғаушының) көмегіне құқылы?', options: ['Тек сот шешімінен кейін', 'Ұсталғаннан кейін үш тәуліктен соң', 'Ұсталған сәттен бастап', 'Тек адвокатқа ақшасы болса'], explain: 'Қазақстан Республикасының Конституциясы ұсталған сәттен бастап білікті заң көмегін алу құқығына кепілдік береді. Заңда белгіленген жағдайларда көмек тегін көрсетіледі.' },
        { category: 'Полиция', question: 'Сіз өзіңізге және жақын туыстарыңызға қарсы айғақ беруге міндеттісіз бе?', options: ['Иә, кез келген жағдайда', 'Жоқ, ешкім өзіне және жақындарына қарсы айғақ беруге міндетті емес', 'Иә, жазбаша сұраса', 'Иә, басқа куәлер болса'], explain: 'ҚР Конституциясында ешкім өзіне, жұбайына және жақын туыстарына қарсы айғақ беруге міндетті емес екені бекітілген.' },
        { category: 'Полиция', question: 'Адамды ұстаған кезде қызметкерлер не істеуі тиіс?', options: ['Ұстау себебін түсіндіріп, ұсталған адамның құқықтарын түсіндіру', 'Алдымен телефонды алып, ештеңе түсіндірмеу', '«Келісуді» ұсыну', 'Негізсіз «анықталғанша» ұстау'], explain: 'Ұсталған адамға ұстау негіздері мен оның құқықтары, соның ішінде қорғаушыға құқығы және ұсталғаны туралы жақындарына хабарлау құқығы түсіндіріледі.' },
        { category: 'Полиция', question: 'Қызметкер ақшаға «мәселені хаттамасыз шешуді» ұсынады. Қалай дұрыс әрекет ету керек?', options: ['Төлеу — солай тезірек', 'Азырақ сома ұсыну', 'Бас тартып, қызметкердің деректерін есте сақтап, 1424 нөміріне хабарлау', 'Ешкімге айтпай кету'], explain: 'Пара беру — екі тарап үшін де қылмыстық жазаланатын әрекет. Дұрысы — бас тартып, бұл факті туралы Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің 1424 call-орталығына хабарлау.' },
        { category: 'Медицина', question: 'Кепілдік берілген көлем шеңберіндегі шұғыл (жедел) медициналық көмек үшін ақы төлеу керек пе?', options: ['Иә, әрқашан', 'Тек МӘМС сақтандыруы болмаса', 'Жоқ, шұғыл көмек тегін медициналық көмектің кепілдік берілген көлеміне (ТМККК) кіреді', 'Тек түнде'], explain: 'Жедел және шұғыл медициналық көмек тегін медициналық көмектің кепілдік берілген көлеміне кіреді. ТМККК және МӘМС бойынша толық кеңесті 1414 Бірыңғай байланыс орталығы береді.' },
        { category: 'Медицина', question: 'Дәрігер тегін болуы тиіс қызмет үшін қолма-қол ақша талап етеді. Не істеу керек?', options: ['Қарым-қатынасты бұзбау үшін төлеу', 'Бас тартып, клиника басшылығына және ӘМСҚ-ға жүгіну, ал пара талап етілсе — 1424-ке', 'Ештеңе істемеу', 'Ресми өтініштің орнына әлеуметтік желіде шағымдану'], explain: 'Ақылы қызметтер ресми түрде, шартпен және түбіртекпен рәсімделеді. Тегін көмек үшін ақша талап ету — бұзушылық, ал пара талап ету — 1424-ке жүгінуге негіз.' },
        { category: 'Медицина', question: 'Науқастың өз денсаулығы және тағайындалған емі туралы ақпарат алуға құқығы бар ма?', options: ['Жоқ, мұны тек дәрігер шешеді', 'Иә, түсінікті түрде', 'Тек қосымша ақыға', 'Тек сот шешімімен'], explain: 'Науқас өз денсаулығының жай-күйі, емдеу әдістері және ықтимал қауіптер туралы түсінікті түрде ақпарат алуға құқылы.' },
        { category: 'Медицина', question: '2026 жылғы 1 сәуірден бастап медициналық көмек сапасына онлайн шағымды қалай беруге болады?', options: ['Тек 1414 телефоны арқылы', 'Әлеуметтік медициналық сақтандыру қорының (ӘМСҚ) сайты немесе Qoldau 24/7 қосымшасы арқылы', 'Дәрігердің кез келген мессенджері арқылы', 'Медициналық көмекке шағым қабылданбайды'], explain: '2026 жылғы 1 сәуірден бастап медициналық көмек сапасына шағымдар онлайн беріледі: ӘМСҚ сайтында және Qoldau 24/7 қосымшасында. 1414 нөмірі ТМККК мен МӘМС бойынша кеңес беру үшін қалды.' },
        { category: 'Мемлекеттік органдар', question: 'Әдетте мемлекеттік орган азаматтың қарапайым өтінішін қандай мерзімде қарауы тиіс?', options: ['1 жұмыс күні ішінде', '15 жұмыс күні ішінде (шағым — 20 жұмыс күні)', 'Бір жыл ішінде', 'Мерзім белгіленбеген'], explain: 'Жалпы ереже бойынша өтініш 15 жұмыс күні ішінде, шағым 20 жұмыс күні ішінде қаралады. Жекелеген жағдайларда мерзім өтініш берушіге хабарлай отырып ұзартылуы мүмкін.' },
        { category: 'Мемлекеттік органдар', question: 'Мемлекеттік органға онлайн өтінішті қандай ресми сервис арқылы беруге болады?', options: ['eOtinish (eotinish.kz сайты, eGov.kz порталы, eGov Mobile қосымшасы)', 'Тек басшыға жеке хат арқылы', 'Әлеуметтік желідегі пікірлер арқылы', 'Онлайн беру мүмкін емес'], explain: 'eOtinish — мемлекеттік органдарға өтініш берудің бірыңғай «терезесі». Сондай-ақ ХҚКО-ға жүгінуге болады. Өтініштің мәртебесі жеке кабинетте бақыланады.' },
        { category: 'Мемлекеттік органдар', question: 'Сыбайлас жемқорлық құқық бұзушылық туралы хабарлаған адамға заң не кепілдік береді?', options: ['Ешқандай кепілдік бермейді', 'Мемлекеттің қорғауын және көтермелену мүмкіндігін', 'Оның атын міндетті түрде жариялауды', 'Автоматты айыппұлды'], explain: 'ҚР «Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заңына сәйкес сыбайлас жемқорлық құқық бұзушылық туралы хабарлаған адам мемлекеттің қорғауында болады және көтермеленуі мүмкін.' }
      ],

      concepts: [
        { title: 'Сыбайлас жемқорлық', short: 'Қызметтік жағдайды жеке пайда үшін пайдалану.', definition: 'Сыбайлас жемқорлық — лауазымды атқаратын немесе мемлекеттік функцияларды орындайтын адамдардың өз өкілеттіктерін өзі немесе басқалар үшін пайда алу мақсатында заңсыз пайдалануы, сондай-ақ мұндай адамдарды сатып алу.', examples: ['<b>Колледж:</b> баға білім үшін емес, ақша немесе сыйлық үшін «қойылады».', '<b>Аурухана:</b> операция кезегіндегі орын конвертке «сатылады».', '<b>Мемлекеттік орган:</b> рұқсат «алғыс білдіргендерге» тезірек беріледі.'], harm: 'Сыбайлас жемқорлық қызметтерді қымбаттатып, сапасын нашарлатады, мемлекетке деген сенімді әлсіретеді және адал адамдарды тең мүмкіндіктерден айырады.', law: 'Негізгі заң — Қазақстан Республикасының «Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заңы.' },
        { title: 'Пара', short: 'Лауазымды тұлғаның әрекеті немесе әрекетсіздігі үшін ақша, зат немесе қызмет.', definition: 'Пара — лауазымды тұлғаның пара берушінің пайдасына жасаған әрекеті (әрекетсіздігі) үшін алатын ақшасы, бағалы қағаздары, мүлкі, қызметтері немесе өзге де пайдасы — әрекет заңды ма, заңсыз ба, бәрібір.', examples: ['<b>Жол:</b> жүргізуші хаттама толтырмауы үшін ақша төлейді.', '<b>Университет:</b> студент емтихансыз сынақ үшін ақша береді.', '<b>Қызметтер:</b> анықтама үшін кассадан тыс «қосымша төлем».'], harm: 'Тек пара алушы ғана емес, пара беруші мен делдал да жауап береді.', law: 'Пара алу, пара беру және парақорлыққа делдал болу — ҚР Қылмыстық кодексі бойынша қылмыстық құқық бұзушылықтар.' },
        { title: 'Мүдделер қақтығысы', short: 'Жеке мүдделілік міндеттерді әділ атқаруға кедергі келтіреді.', definition: 'Мүдделер қақтығысы — адамның жеке мүдделілігі оның қызметтік міндеттерін бейтарап атқаруына әсер ететін немесе әсер етуі мүмкін жағдай.', examples: ['<b>Комиссия:</b> қазылар алқасының мүшесі өз баласының жұмысын бағалайды.', '<b>Сатып алу:</b> шенеунік жұбайы жұмыс істейтін мердігерді таңдайды.', '<b>Кадрлар:</b> басшы жақын досымен әңгімелесу өткізеді.'], harm: 'Мүдделер қақтығысының өзі әлі сыбайлас жемқорлық емес, бірақ қауіпті жағдай. Ол туралы уақытында хабарлап, шешім қабылдауға қатысудан бас тарту маңызды.', law: 'Лауазымды тұлғалар мүдделер қақтығысының алдын алу және оны реттеу бойынша шаралар қабылдауға міндетті.' },
        { title: 'Протекционизм', short: 'Лайықты адамдардың орнына «өз адамдарын» алға жылжыту.', definition: 'Протекционизм (туысқандық, непотизм) — жұмысқа қабылдау, қызметте жоғарылату немесе ресурстарды бөлу кезінде істің мүддесіне қарсы туыстарына, достарына немесе таныстарына қамқорлық жасау.', examples: ['<b>Жұмыс:</b> бос орын конкурссыз басшының жиеніне беріледі.', '<b>Гранттар:</b> қолдауды «таныстардың» жобасы алады.', '<b>Жоғарылату:</b> мансаптық өсу нәтижеге емес, байланыстарға тәуелді.'], harm: 'Дарынды адамдар ынтасын жоғалтады, ал басқару сапасы төмендейді.', law: 'Заңнама тікелей бағыныстағы жақын туыстардың бірге қызмет етуін шектейді.' },
        { title: 'Откат', short: 'Келісімшартты алуға көмектескен адамға сома бөлігінің жасырын «қайтарымы».', definition: 'Откат — «қажетті» жеткізушінің таңдалуын қамтамасыз еткен лауазымды тұлғаға шарт (мысалы, мемлекеттік сатып алу) бойынша ақшаның бір бөлігін бейресми төлеу.', examples: ['<b>Колледжді жөндеу:</b> мердігер сметаны асырып, соманың бір бөлігін шенеунікке қайтарады.', '<b>Жабдық сатып алу:</b> ең жақсы баға емес, «бөліскен» жеңеді.', '<b>Жолдар:</b> бюджеттің бір бөлігі откатқа кеткендіктен жұмыс сапасыз орындалады.'], harm: 'Бюджет артық төлейді, ал жұмыс сапасы төмендейді — ақыры әр салық төлеуші төлейді.', law: 'Мәні бойынша откат — параның немесе коммерциялық сатып алудың бір түрі.' }
      ],

      help: [
        {
          title: 'Оқу орнында пара талап етсе', subtitle: 'Колледж, университет, мектеп',
          intro: 'Оқытушы, қабылдау комиссиясының немесе әкімшіліктің қызметкері баға, сынақ немесе оқуға қабылдау үшін ақша, сыйлық немесе қызмет талап етеді.',
          steps: [
            { title: 'Ақша бермеңіз және сабыр сақтаңыз', text: 'Келіспеңіз және өзіңіз ештеңе ұсынбаңыз. Сыпайы түрде бас тартыңыз — бұл сіздің заңды құқығыңыз.' },
            { title: 'Фактілерді тіркеңіз', text: 'Күнін, уақытын, орнын, аты-жөні мен лауазымын, талап етілген соманы, куәлердің аттарын жазып алыңыз. Хат алмасу мен скриншоттарды сақтаңыз.' },
            { title: '1424 call-орталығына хабарлаңыз', text: 'ҚР ҰҚК Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің тегін call-орталығына қоңырау шалып, жағдайды сипаттаңыз. «Дәлел үшін» ақшаны өз бетіңізше бермеңіз — мұндай әрекеттер тек құқық қорғау органдарының бақылауымен жүргізіледі.' },
            { title: 'Басшылыққа жазбаша жүгініңіз', text: 'Директорға немесе ректорға кеңсе арқылы арыз беріп, тіркелгені туралы белгі (күні және кіріс нөмірі) алыңыз.' },
            { title: 'eOtinish арқылы өтініш беріңіз', text: 'Мәселе шешілмесе, eotinish.kz немесе eGov Mobile қосымшасы арқылы білім беру саласындағы уәкілетті органға өтініш жіберіңіз.' },
            { title: 'Жауапты бақылаңыз', text: 'Қарапайым өтінішті қарау мерзімі — әдетте 15 жұмыс күні. Мәртебесі eOtinish жеке кабинетінде көрінеді.' }
          ],
          tips: ['Нақты болыңыз: эмоциядан гөрі фактілер маңызды.', 'Ата-анаңызға немесе кураторыңызға айтыңыз — қолдау маңызды.', 'Тексерілмеген айыптауларды әлеуметтік желілерде таратпаңыз.'],
          links: ['1424-ке қоңырау шалу', 'eotinish.kz — онлайн өтініш']
        },
        {
          title: 'Медициналық мекемеде ақша талап етсе', subtitle: 'Емхана, аурухана, жедел жәрдем',
          intro: 'Сізден тегін болуы тиіс көмек үшін немесе кезекті тездету үшін «бейресми» төлеуді сұрайды.',
          steps: [
            { title: 'Қызметтің тегін екенін нақтылаңыз', text: 'Жедел және шұғыл көмек тегін медициналық көмектің кепілдік берілген көлеміне кіреді. ТМККК мен МӘМС бойынша кеңесті 1414 Бірыңғай байланыс орталығы береді.' },
            { title: 'Ресми рәсімдеуді сұраңыз', text: 'Егер қызмет ақылы болса, ол прейскурант бойынша, шартпен және касса арқылы түбіртекпен рәсімделеді. «Қалтаға» берілетін ақша — бұзушылық.' },
            { title: 'Клиника басшылығына жүгініңіз', text: 'Бөлімше меңгерушісімен немесе бас дәрігермен кездесуді сұраңыз немесе жазбаша арыз беріңіз.' },
            { title: 'Медициналық көмек сапасына онлайн шағым беріңіз', text: '2026 жылғы 1 сәуірден бастап шағымдар Әлеуметтік медициналық сақтандыру қорының сайтында (fms.kz) және Qoldau 24/7 қосымшасында қабылданады.' },
            { title: 'Пара талап етілсе — 1424-ке қоңырау шалыңыз', text: 'Егер әрекет немесе әрекетсіздік үшін ақша талап етілсе, Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің call-орталығына хабарлаңыз.' }
          ],
          tips: ['Өмірге қауіп төнсе — алдымен көмек: 103 немесе 112 нөміріне қоңырау шалыңыз.', 'Үзінді көшірмелерді, жолдамалар мен түбіртектерді сақтаңыз.', 'Қызметкердің аты-жөні мен лауазымын жазып алыңыз.'],
          links: ['1424-ке қоңырау шалу', '1414 — ТМККК және МӘМС бойынша кеңес', 'fms.kz — Медициналық сақтандыру қоры']
        },
        {
          title: 'Мемлекеттік органдағы сыбайлас жемқорлық', subtitle: 'Әкімдік, ХҚКО, инспекциялар, ведомстволар',
          intro: 'Лауазымды тұлға шешімді созып, «алғысқа» меңзейді немесе қызмет үшін ақша талап етеді.',
          steps: [
            { title: 'Қызметкердің деректерін нақтылаңыз', text: 'Сыпайы түрде аты-жөні мен лауазымын айтуды сұраңыз. Күнін, уақытын, кабинет нөмірін жазып алыңыз.' },
            { title: 'Жазбаша негізді талап етіңіз', text: 'Сізге қандай құжат негізінде бас тартылатынын немесе төлем талап етілетінін жазбаша көрсетуді сұраңыз. Ресми төлемдер тек касса арқылы немесе түбіртекпен онлайн жүргізіледі.' },
            { title: 'Сыбайлас жемқорлық фактісі туралы хабарлаңыз', text: 'ҚР ҰҚК Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің 1424 call-орталығына қоңырау шалыңыз (қоңырау тегін).' },
            { title: 'Әрекеттерге жоғары органға шағым беріңіз', text: 'eOtinish арқылы шағым беріңіз. Шағымды қарау мерзімі — әдетте 20 жұмыс күні.' },
            { title: 'Құқықтар бұзылса — прокуратураға', text: 'Құқықтарыңыздың бұзылғаны туралы Бас прокуратураның 115 call-орталығына хабарлауға болады (тегін).' }
          ],
          tips: ['Өтініштерді жазбаша беріңіз — сонда оларды «жоғалту» мүмкін емес.', 'Барлық құжаттардың көшірмелерін және тіркеу нөмірлерін сақтаңыз.', 'Сыбайлас жемқорлық туралы хабарлағандар мемлекеттің қорғауында болады.'],
          links: ['1424-ке қоңырау шалу', '115-ке қоңырау шалу — Бас прокуратура', 'Мемлекеттік органдардың сенім телефондары (egov.kz)']
        }
      ],

      templates: [
        {
          title: 'Арыз', desc: 'Сыбайлас жемқорлық құқық бұзушылық фактісі туралы', defaultTo: 'Уәкілетті орган басшысына', file: 'Aryz',
          heading: ['АРЫЗ', 'сыбайлас жемқорлық құқық бұзушылық фактісі туралы'],
          body: (d) => `${d.to}
Арыз беруші: ${d.name}
Байланыс: ${d.contact}

АРЫЗ
сыбайлас жемқорлық құқық бұзушылық фактісі туралы

Хабарлаймын: ${d.details}

Менің ойымша, көрсетілген әрекеттерде сыбайлас жемқорлық құқық бұзушылықтың белгілері бар.

Сұраймын:
1. Баяндалған фактілер бойынша тексеру жүргізуді.
2. Қазақстан Республикасының заңнамасына сәйкес шаралар қабылдауды.
3. Арызды қарау нәтижелері туралы маған заңда белгіленген мерзімде хабарлауды.

Растайтын материалдар (бар болса): ____________________

Көрінеу жалған сөз жеткізгені үшін жауапкершілік туралы ескертілдім.

Күні: ${d.date}                    Қолы: ____________`
        },
        {
          title: 'Шағым', desc: 'Лауазымды тұлғаның әрекетіне (әрекетсіздігіне)', defaultTo: 'Жоғары тұрған орган басшысына', file: 'Shagym',
          heading: ['ШАҒЫМ', 'лауазымды тұлғаның әрекетіне (әрекетсіздігіне)'],
          body: (d) => `${d.to}
Шағым беруші: ${d.name}
Байланыс: ${d.contact}

ШАҒЫМ
лауазымды тұлғаның әрекетіне (әрекетсіздігіне)

Лауазымды тұлғаның келесі әрекетіне (әрекетсіздігіне) шағым беремін: ${d.details}

Көрсетілген әрекеттер менің құқықтарым мен заңды мүдделерімді бұзады деп есептеймін.

Жоғарыда баяндалғанның негізінде сұраймын:
1. Шағымды мәні бойынша қарауды.
2. Лауазымды тұлғаның әрекетін (әрекетсіздігін) заңсыз деп тануды.
3. Менің құқықтарымды қалпына келтіру бойынша шаралар қабылдауды.
4. Жазбаша жауапты көрсетілген байланыстарға жіберуді.

Қосымшалар: ____________________

Күні: ${d.date}                    Қолы: ____________`
        },
        {
          title: 'Өтініш', desc: 'Мемлекеттік органға ұсыныс немесе пікір', defaultTo: 'Мемлекеттік органға', file: 'Otinish',
          heading: ['ӨТІНІШ'],
          body: (d) => `${d.to}
Өтініш беруші: ${d.name}
Байланыс: ${d.contact}

ӨТІНІШ

Құрметті басшы!

Сізге мына мәселе бойынша жүгінемін: ${d.details}

Ашықтықты және қызмет көрсету сапасын арттыруға бағытталған шаралар қабылдау мүмкіндігін қарастыруды ұсынамын, оның ішінде:
— қызмет көрсету тәртібі мен мерзімдері туралы ақпаратты ашық қолжетімді жерде орналастыру;
— азаматтар үшін кері байланыс мүмкіндігін қамтамасыз ету.

Өтінішті қарап, қабылданған шешім туралы заңда белгіленген мерзімде хабарлауыңызды сұраймын.

Күні: ${d.date}                    Қолы: ____________`
        },
        {
          title: 'Ақпарат сұрау', desc: 'Жалпыға қолжетімді мәліметтерді беру туралы', defaultTo: 'Ақпарат иесінің басшысына', file: 'Aqparat_surau',
          heading: ['СҰРАУ', 'ақпарат беру туралы'],
          body: (d) => `${d.to}
Сұрау беруші: ${d.name}
Байланыс: ${d.contact}

СҰРАУ
ақпарат беру туралы

Қазақстан Республикасының ақпаратқа қол жеткізу туралы заңнамасына сәйкес мынадай мәліметтерді беруді сұраймын: ${d.details}

Ақпаратты беруді сұраймын:
☐ электрондық түрде көрсетілген байланыстар бойынша;
☐ жазбаша түрде пошта мекенжайы бойынша.

Күні: ${d.date}                    Қолы: ____________`
        }
      ],

      regions: {
        astana: { name: 'Астана қ.', short: 'Астана', center: 'Қазақстан Республикасының астанасы' },
        'almaty-city': { name: 'Алматы қ.', short: 'Алматы', center: 'Республикалық маңызы бар қала' },
        shymkent: { name: 'Шымкент қ.', short: 'Шымкент', center: 'Республикалық маңызы бар қала' },
        akmola: { name: 'Ақмола облысы', short: 'Ақмола', center: 'Көкшетау' },
        aktobe: { name: 'Ақтөбе облысы', short: 'Ақтөбе', center: 'Ақтөбе' },
        almaty: { name: 'Алматы облысы', short: 'Алматы обл.', center: 'Қонаев' },
        atyrau: { name: 'Атырау облысы', short: 'Атырау', center: 'Атырау' },
        abai: { name: 'Абай облысы', short: 'Абай', center: 'Семей' },
        vko: { name: 'Шығыс Қазақстан облысы', short: 'ШҚО', center: 'Өскемен' },
        zhambyl: { name: 'Жамбыл облысы', short: 'Жамбыл', center: 'Тараз' },
        zhetisu: { name: 'Жетісу облысы', short: 'Жетісу', center: 'Талдықорған' },
        zko: { name: 'Батыс Қазақстан облысы', short: 'БҚО', center: 'Орал' },
        karaganda: { name: 'Қарағанды облысы', short: 'Қарағанды', center: 'Қарағанды' },
        kostanay: { name: 'Қостанай облысы', short: 'Қостанай', center: 'Қостанай' },
        kyzylorda: { name: 'Қызылорда облысы', short: 'Қызылорда', center: 'Қызылорда' },
        mangystau: { name: 'Маңғыстау облысы', short: 'Маңғыстау', center: 'Ақтау' },
        pavlodar: { name: 'Павлодар облысы', short: 'Павлодар', center: 'Павлодар' },
        sko: { name: 'Солтүстік Қазақстан облысы', short: 'СҚО', center: 'Петропавл' },
        turkestan: { name: 'Түркістан облысы', short: 'Түркістан', center: 'Түркістан' },
        ulytau: { name: 'Ұлытау облысы', short: 'Ұлытау', center: 'Жезқазған' }
      },

      wall: [
        { title: 'Ашық мемлекеттік сатып алулар', text: 'Мемлекеттік сатып алулардың хабарландырулары, қатысушылары мен қорытындылары мемлекеттік сатып алу веб-порталында жарияланады — кез келген азамат тендерді кім және қанша сомаға ұтып алғанын көре алады.' },
        { title: 'Қағаздың орнына электрондық сауда', text: 'Электрондық формат тапсырыс беруші мен жеткізушінің жеке байланысын азайтады — сөз байласу мен «келісімдерге» мүмкіндік азаяды.' },
        { title: 'Бәсекелестік бағаны төмендетеді', text: 'Мысал: аукционға бір емес, 5 жеткізуші қатысқанда колледжді жөндеудің қорытынды бағасы бастапқыдан 18%-ға төмен болады. Үнемделген қаражат жаңа партаға жұмсалады.' },
        { title: 'Делдалсыз цифрлық қызметтер', text: 'eGov арқылы анықтамаларды онлайн алу «тірі кезек» пен делдалдарды жояды — демек, «ақшаға тездетуге» себеп те қалмайды.' },
        { title: 'Мемлекеттік органдармен ашық диалог', text: 'Азаматтар мемлекеттік орган басшыларына ашық түрде сұрақ қойып, жауаптарын көре алады — бұл ведомстволардың жұмысын ашық етеді.' },
        { title: 'Заң жобаларын талқылау', text: 'Нормативтік актілердің жобалары қоғамдық талқылауға жарияланады — қабылданғанға дейін әркім пікір қалдыра алады.' },
        { title: 'Ашық деректер', text: 'Мемлекеттік деректер жиынтықтарын жүктеп алып, талдауға болады — журналистер, студенттер мен әзірлеушілер сандарды өздері тексере алады.' },
        { title: '«Адал ұрпақ» студенттік клубы', text: 'Бастама мысалы: колледж студенттері бірінші курс студенттеріне құқықтар туралы квиз өткізіп, «Қайда жүгіну керек» жадынамаларын дайындайды. Бір жылда — 40 іс-шара.' },
        { title: 'Кезектерді студенттік бақылау', text: 'Мысал: еріктілер мекемелердегі күту уақытын тіркеп, ашық есеп жариялайды — басшылық терезелердің жұмыс кестесін өзгертеді.' }
      ],

      faq: [
        { q: 'Сыбайлас жемқорлық фактісі туралы қайда хабарлау керек?', a: 'ҚР Ұлттық қауіпсіздік комитетінің Сыбайлас жемқорлыққа қарсы іс-қимыл қызметінің тегін 1424 call-орталығына, сондай-ақ жазбаша — eOtinish сервисі (eotinish.kz, eGov Mobile) арқылы немесе ХҚКО-да.' },
        { q: 'Бұл сайттағы форма мемлекеттік органдарға шағым жібере ме?', a: 'Жоқ. Бұл — оқу демонстрациялық жобасы: формалар деректерді ешбір органға жібермейді және өтініштердің ресми арнасы болып табылмайды. Ресми ресурстарды пайдаланыңыз.' },
        { q: 'Сыбайлас жемқорлық туралы хабарлаған адам заңмен қорғала ма?', a: 'Иә. ҚР «Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заңына сәйкес сыбайлас жемқорлық құқық бұзушылық туралы хабарлаған адам мемлекеттің қорғауында болады және көтермеленуі мүмкін.' },
        { q: 'Оқытушыға немесе дәрігерге сыйлық беруге бола ма?', a: 'Қызмет, баға немесе шешім күтумен байланысты сыйлыққа жол берілмейді. Ешқандай өтінішсіз символдық ілтипат — басқа жағдай, бірақ көптеген ұйымдар мұндай сыйлықтарды да өз әдеп ережелерімен шектейді.' },
        { q: 'Пара берген адам жауап бере ме?', a: 'Иә. Пара беру — пара алу және делдалдық сияқты қылмыстық құқық бұзушылық. Заң жауаптылықтан босатудың ерекше шарттарын қарастырады, мысалы, пара талап етілген және факті туралы ерікті түрде хабарланған жағдайда.' },
        { q: 'Өтініштер қандай мерзімде қаралады?', a: 'Әдетте қарапайым өтініш — 15 жұмыс күні ішінде, шағым — 20 жұмыс күні ішінде қаралады. eOtinish-тегі өтініштің мәртебесін жеке кабинетте бақылауға болады.' },
        { q: 'Сайттағы деректер қайдан алынған?', a: 'Сыбайлас жемқорлықты қабылдау индексі — Transparency International жарияланымдарынан; байланыстар — egov.kz және gov.kz ресми порталдарынан. Барлық шартты көрсеткіштер «демо» деп белгіленген.' }
      ],

      wizard: {
        "steps": [
          "Түрі",
          "Адресат",
          "Мәні",
          "Өтініш беруші",
          "Дайын"
        ],
        "types": [
          {
            "id": "appeal",
            "title": "Өтініш",
            "hint": "Сұрақ, өтініш немесе мәселе туралы хабар",
            "days": 15
          },
          {
            "id": "complaint",
            "title": "Шағым",
            "hint": "Лауазымды тұлғаның әрекетіне немесе әрекетсіздігіне шағым",
            "days": 20
          },
          {
            "id": "proposal",
            "title": "Ұсыныс",
            "hint": "Ұйымның жұмысын жақсарту идеясы",
            "days": 15
          },
          {
            "id": "request",
            "title": "Ақпарат сұрау",
            "hint": "Органнан немесе ұйымнан мәлімет алу",
            "days": 15
          },
          {
            "id": "corruption",
            "title": "Сыбайлас жемқорлық туралы хабарлама",
            "hint": "Пара, бопсалау, откат, мүдделер қақтығысы",
            "days": 15
          }
        ],
        "targets": [
          {
            "id": "college",
            "title": "Колледж басшылығы",
            "hint": "ЖИГК директорына — кеңсе немесе eOtinish арқылы"
          },
          {
            "id": "edu",
            "title": "Білім басқармасы",
            "hint": "Мәселе колледжде шешілмесе"
          },
          {
            "id": "anticor",
            "title": "ҰҚК Сыбайлас жемқорлыққа қарсы іс-қимыл қызметі",
            "hint": "Пара және бопсалау; 1424 нөміріне де қоңырау шалуға болады"
          },
          {
            "id": "prosecutor",
            "title": "Прокуратура",
            "hint": "Құқықтар мен заңдардың бұзылуы; 115 нөміріне де қоңырау шалуға болады"
          },
          {
            "id": "akimat",
            "title": "Әкімдік",
            "hint": "Қала немесе аудан мәселелері"
          },
          {
            "id": "other",
            "title": "Басқа орган",
            "hint": "Атауын өзіңіз жазыңыз"
          }
        ]
      },

      kb: {
        "chips": [
          "Пара талап етсе не істеу керек?",
          "Қайда қоңырау шалу керек?",
          "Сыйлық па, пара ма?",
          "Өтінішті қалай беремін?"
        ],
        "fallback": "Негізгі режимде мен тек жиі қойылатын сұрақтарға жауап беремін, бұған жауап таппадым. Басқаша сұрап көріңіз немесе төменнен тақырып таңдаңыз. Сыбайлас жемқорлық туралы 1424 нөміріне хабарлауға болады.",
        "intents": [
          {
            "id": "howto",
            "k": [
              "қалай пара бер",
              "қанша бер",
              "кімге бер",
              "қалай ақша бер"
            ],
            "a": "Бұған көмектесе алмаймын: пара беру — екі тарап үшін де қылмыстық құқық бұзушылық. Сізден ақша талап етсе, 1424 нөміріне хабарлаңыз (тегін) — қалай істеу керегін айтып беремін.",
            "links": [
              "help"
            ]
          },
          {
            "id": "giver",
            "k": [
              "пара берген",
              "пара бердім",
              "пара берс",
              "пара беру",
              "жауап бере ме",
              "жаза",
              "жауапкершілік"
            ],
            "a": "Иә. Пара беру — пара алу және делдалдық сияқты қылмыстық құқық бұзушылық. Заң жауаптылықтан босатудың ерекше шарттарын қарастырады, мысалы, пара талап етілген және факті туралы ерікті түрде хабарланған жағдайда. Толығырақ — «Сыбайлас жемқорлыққа қарсы колледж» бөліміндегі «Пара» карточкасында.",
            "links": [
              "school"
            ]
          },
          {
            "id": "greet",
            "k": [
              "сәлем",
              "салем",
              "сәлеметсіз",
              "қайырлы",
              "привет"
            ],
            "a": "Сәлеметсіз бе! Сыбайлас жемқорлыққа тап болғанда қалай әрекет ету керегін, қайда қоңырау шалуды және өтінішті қалай беруді айтып беремін. Төменнен тақырып таңдаңыз немесе сұрақ қойыңыз.",
            "links": []
          },
          {
            "id": "thanks",
            "k": [
              "рақмет",
              "рахмет",
              "спасибо"
            ],
            "a": "Оқасы жоқ! Сұрақтарыңыз болса, жазыңыз. Сыбайлас жемқорлық туралы шұғыл хабарлау үшін — 1424.",
            "links": []
          },
          {
            "id": "college",
            "k": [
              "емтихан",
              "сынақ",
              "сессия",
              "баға",
              "оқытушы",
              "куратор",
              "колледж",
              "стипенд",
              "диплом"
            ],
            "a": "Оқытушы немесе колледж қызметкері баға не сынақ үшін ақша немесе сыйлық талап етсе: төлемеңіз, күнін, орнын, аты-жөнін және соманы жазып алыңыз, колледж басшылығына жазбаша және 1424 нөміріне хабарлаңыз. Директорға өтінішті «Құжат үлгілері» → «Өтініш» бөлімінде дайындауға болады.",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "medical",
            "k": [
              "дәрігер",
              "аурухана",
              "емхана",
              "медицин",
              "жедел",
              "мәмс",
              "тмккк",
              "емдеу"
            ],
            "a": "Жедел және шұғыл көмек тегін медициналық көмектің кепілдік берілген көлеміне кіреді. ТМККК және МӘМС бойынша кеңес — 1414. 2026 жылғы 1 сәуірден бастап медициналық көмек сапасына шағымдар онлайн беріледі: ӘМСҚ сайтында (fms.kz) және Qoldau 24/7 қосымшасында. Ақша талап етсе — 1424.",
            "links": [
              "help"
            ]
          },
          {
            "id": "police",
            "k": [
              "полиция",
              "ұстады",
              "ұстау",
              "хаттама",
              "айыппұл",
              "адвокат",
              "қамау"
            ],
            "a": "Полиция қызметкері өзін таныстырып, жүгіну себебін түсіндіруі тиіс. Ұсталған сәттен бастап адвокатқа құқығыңыз бар және өзіңізге әрі жақындарыңызға қарсы айғақ бермеуге болады. Ақшаға «хаттамасыз шешу» ұсынысы — пара: бас тартып, 1424-ке хабарлаңыз. Құқық бұзылса — прокуратураға, 115.",
            "links": [
              "school"
            ]
          },
          {
            "id": "otinish",
            "k": [
              "өтініш",
              "отиниш",
              "отініш",
              "eotinish",
              "шағым",
              "арыз",
              "жүгін",
              "обращен"
            ],
            "a": "«Құжат үлгілері» → «Өтініш» бөлімінде қадамдық шебер бар: түрі мен адресатты таңдап, жағдайды сипаттаңыз — сайт мәтінді құрастырады. Содан кейін eotinish.kz сайтына eGov арқылы кіріп (ЭЦҚ, QR немесе Face ID), мәтінді қойып, файлдарды тіркеңіз. Әдетте өтініш 15 жұмыс күніне дейін, шағым 20 жұмыс күніне дейін қаралады.",
            "links": [
              "otinish"
            ]
          },
          {
            "id": "anon",
            "k": [
              "аноним",
              "фото",
              "сурет",
              "дәлел",
              "бейне",
              "жасырын",
              "атымсыз"
            ],
            "a": "«Фотосы бар хабарлама» қойындысында жағдайды сипаттап, фото қосуға болады: сайт олардан геобелгілер мен телефон деректерін өшіреді және серверде ештеңе сақтамайды. Хабарламаны өзіңіз жібересіз — WhatsApp-бот 8 777 000 1424, Telegram-бот @antikorkz_bot немесе 1424 нөміріне қоңырау арқылы. Мессенджерлерде толық анонимдік жоқ, бірақ заң құпиялылыққа кепілдік береді.",
            "links": [
              "report"
            ]
          },
          {
            "id": "contacts",
            "k": [
              "нөмір",
              "телефон",
              "қоңырау",
              "хабарлас",
              "байланыс",
              "1424",
              "115",
              "1414"
            ],
            "a": "Негізгі нөмірлер:\n• 1424 — ҰҚК Сыбайлас жемқорлыққа қарсы іс-қимыл қызметі (тегін);\n• 115 — Бас прокуратура, құқықтардың бұзылуы;\n• 1414 — Бірыңғай байланыс орталығы: мемлекеттік қызметтер, МӘМС, тегін медициналық көмек;\n• 102 немесе 112 — өмірге қауіп төнсе.",
            "links": [
              "help"
            ]
          },
          {
            "id": "gift",
            "k": [
              "сыйлық",
              "гүл",
              "торт",
              "кәдесый",
              "алғыс"
            ],
            "a": "Егер сыйлық қызмет, баға немесе шешім күтумен байланысты болса — ол «кейін» берілсе де пара болып саналады. Ешқандай өтінішсіз символдық ілтипат (бүкіл топтан гүл, ашықхат) әдетте рұқсат етіледі, бірақ көптеген ұйымдардың ережелері мұндай сыйлықтарды да шектейді. «Пара ма, сыйлық па?» ойынында жаттығыңыз.",
            "links": [
              "school"
            ]
          },
          {
            "id": "bribe",
            "k": [
              "пара",
              "бопса",
              "конверт",
              "ақша талап",
              "ақша сұра",
              "откат",
              "взятк"
            ],
            "a": "Ақша бермеңіз және сабыр сақтаңыз. Күнін, орнын, аты-жөні мен лауазымын, соманы және куәлердің аттарын жазып алыңыз, хат алмасуды сақтаңыз. 1424 call-орталығына (тегін) хабарлаңыз немесе eOtinish арқылы өтініш беріңіз. «Дәлел үшін» ақшаны өз бетіңізше бермеңіз — мұндай әрекеттер тек құқық қорғау органдарының бақылауымен жүргізіледі.",
            "links": [
              "help",
              "otinish"
            ]
          },
          {
            "id": "protect",
            "k": [
              "қорға",
              "сыйақы",
              "қорқам",
              "қорқып",
              "кек",
              "салдар"
            ],
            "a": "ҚР «Сыбайлас жемқорлыққа қарсы іс-қимыл туралы» Заңына сәйкес сыбайлас жемқорлық құқық бұзушылық туралы хабарлаған адам мемлекеттің қорғауында болады және көтермеленуі мүмкін. Ресми арналар құпиялылыққа кепілдік береді.",
            "links": [
              "help"
            ]
          },
          {
            "id": "stats",
            "k": [
              "индекс",
              "рейтинг",
              "статистика",
              "ұпай",
              "transparency"
            ],
            "a": "Transparency International-дың 2025 жылғы Сыбайлас жемқорлықты қабылдау индексінде Қазақстан 100-ден 38 ұпай жинап, 182 елдің ішінде 96-орын алды (2024 жылы — 40 ұпай). 2022–2026 жылдарға арналған Сыбайлас жемқорлыққа қарсы саясат тұжырымдамасының мақсаты — 47 ұпай.",
            "links": [
              "analytics"
            ]
          },
          {
            "id": "terms",
            "k": [
              "деген не",
              "сыбайлас жемқорлық деген",
              "мүдделер қақтығысы",
              "протекционизм",
              "туысқандық"
            ],
            "a": "Сыбайлас жемқорлық — лауазымдық өкілеттіктерді өзі немесе басқалар үшін пайда алу мақсатында заңсыз пайдалану, сондай-ақ мұндай адамдарды сатып алу. Пара, мүдделер қақтығысы, протекционизм және откат «Сыбайлас жемқорлыққа қарсы колледж» бөліміндегі карточкаларда мысалдармен түсіндірілген.",
            "links": [
              "school"
            ]
          },
          {
            "id": "site",
            "k": [
              "сайт",
              "жоба",
              "кім жасады",
              "п-11",
              "не істей аласың",
              "көмектес",
              "бөлім"
            ],
            "a": "Бұл — Жезқазған индустриалдық-гуманитарлық колледжі П-11 тобының оқу жобасы. Сайтта сыбайлас жемқорлықтың құнын есептейтін калькулятор, құқықтар туралы ойын мен тест, комикс пен бейне, қадамдық нұсқаулықтар, өтініш шебері, фотосы бар хабарлама, құжат үлгілері және талдау бар.",
            "links": [
              "calculator",
              "school",
              "otinish"
            ]
          }
        ]
      },

      video: [
        { title: 'Конверт', text: 'Оңай ақша қарапайым шешім сияқты көрінеді.' },
        { title: 'Келісім', text: 'Ақша қолдан-қолға өтеді — ал уақыт саған қарсы жұмыс істей бастайды.' },
        { title: 'Айна', text: 'Сынған айна: пара адамды қалай өзгертеді.' },
        { title: 'Біздің таңдау', text: 'Колледж ғимаратының алдында студент қыз құрдастарына үндеу тастайды.' }
      ],

            charts: {
        cpiSeries: 'Қазақстан, СЖҚИ ұпайы',
        cpiTarget: 'Тұжырымдаманың 2026 жылғы мақсаты (47)',
        cmpLabels: ['Қазақстан', 'Әлемдік орташа', 'Армения', 'Дания'],
        cmpSeries: 'СЖҚИ-2025 ұпайы',
        topicsLabels: ['Білім беру', 'Медицина', 'Мемлекеттік қызметтер', 'ТКШ', 'Жолдар және көлік'],
        demo: '(демо)'
      }
    }
  }
};


/* ---------- 1. Утилиты ---------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

/** Безопасная работа с localStorage (в приватном режиме может быть недоступен) */
const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* хранилище недоступно — просто не сохраняем */
    }
  }
};

/** Перерисовка иконок Lucide после динамической вставки HTML */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/** Экранирование пользовательского текста перед вставкой в HTML */
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Форматирование чисел по правилам текущего языка */
function formatNumber(value) {
  return new Intl.NumberFormat(i18n.locale()).format(Math.round(value));
}

/** Дата в привычном виде: 04.12.2026 (для английского — 04/12/2026) */
function formatDate(value, lang = i18n.lang) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return lang === 'en' ? `${dd}/${mm}/${d.getFullYear()}` : `${dd}.${mm}.${d.getFullYear()}`;
}

/** Плавная анимация числа */
function animateNumber(element, target, options = {}) {
  const duration = options.duration || 1400;
  const plain = Boolean(options.plain);
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    element.textContent = plain ? String(Math.round(current)) : formatNumber(current);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/** Уведомления (toast) */
const TOAST_ICONS = { success: 'check', error: 'x', info: 'info', warn: 'triangle-alert' };

function showToast(title, message = '', type = 'success', duration = 4200) {
  const container = $('#toasts');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <div class="toast-icon"><i data-lucide="${TOAST_ICONS[type] || 'info'}"></i></div>
    <div>
      <strong>${escapeHTML(title)}</strong>
      ${message ? `<p>${escapeHTML(message)}</p>` : ''}
    </div>
    <span class="toast-bar" style="animation-duration:${duration}ms"></span>`;
  container.appendChild(toast);
  refreshIcons();

  const remove = () => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 350);
  };
  const timer = setTimeout(remove, duration);
  toast.addEventListener('click', () => {
    clearTimeout(timer);
    remove();
  });

  const toasts = $$('.toast', container);
  if (toasts.length > 4) toasts[0].remove();
}

/** Модальное окно */
const modal = {
  element: null,
  content: null,
  lastFocus: null,
  onClose: null,

  init() {
    this.element = $('#modal');
    this.content = $('#modalContent');
    $$('[data-close]', this.element).forEach((el) => el.addEventListener('click', () => this.close()));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isOpen()) this.close();
    });
  },

  isOpen() {
    return this.element.classList.contains('open');
  },

  open(html, options = {}) {
    if (!this.isOpen()) this.lastFocus = document.activeElement;
    this.onClose = options.onClose || null;
    this.element.classList.toggle('modal-wide', Boolean(options.wide));
    this.content.innerHTML = html;
    refreshIcons();
    this.element.classList.add('open');
    this.element.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    const closeButton = $('.modal-close', this.element);
    if (closeButton && !options.keepFocus) closeButton.focus();
  },

  close() {
    this.element.classList.remove('open');
    this.element.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (typeof this.onClose === 'function') this.onClose();
    this.onClose = null;
    if (this.lastFocus && typeof this.lastFocus.focus === 'function') this.lastFocus.focus();
  }
};

/** Копирование в буфер обмена с запасным вариантом */
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    /* переходим к запасному способу */
  }
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch (error) {
    ok = false;
  }
  area.remove();
  return ok;
}

/** Где открыт сайт: на опубликованной странице claude.ai или как обычный файл */
const host = {
  inViewer: Boolean(window.claude && typeof window.claude.use === 'function'),
  downloads: null
};
if (host.inViewer) {
  document.documentElement.classList.add('in-artifact');
  window.claude.use('downloads').then((d) => { host.downloads = d; }).catch(() => {});
}

/** Скачивание файла, сгенерированного в браузере. Возвращает Promise<boolean>. */
function downloadFile(filename, content, mimeType) {
  /* На опубликованной странице прямое скачивание запрещено — файл передаётся через окно подтверждения */
  if (host.inViewer) {
    if (!host.downloads) return Promise.resolve(false);
    return host.downloads.save({ filename, data: content })
      .then(() => true)
      .catch(() => false);
  }
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return Promise.resolve(true);
}

/** Анимация кругового индикатора результата */
function animateRing(ring, label, percent, instant = false) {
  if (instant) {
    ring.style.setProperty('--p', percent);
    label.textContent = `${percent}%`;
    return;
  }
  const start = performance.now();
  const duration = 1200;
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(percent * eased);
    ring.style.setProperty('--p', value);
    label.textContent = `${value}%`;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- 2. Многоязычность ---------- */
const i18n = {
  lang: 'ru',
  supported: ['ru', 'en', 'kk'],
  ruText: new Map(),
  ruHtml: new Map(),
  ruAttr: new Map(),
  listeners: [],

  /* Максимальная ширина надписей внутри SVG, чтобы длинные переводы не вылезали за рамки */
  svgFit: {
    'hero.chip1a': 98, 'hero.chip1b': 98, 'hero.chip2a': 98, 'hero.chip2b': 98, 'hero.chip3a': 88, 'hero.chip3b': 88,
    'comic.svgDiagnosis': 62, 'comic.svgNotes': 92, 'comic.svgExam': 186, 'comic.svgAnatomy': 186,
    'comic.svgRetake': 160, 'comic.svgPassed': 56
  },

  locale() {
    return window.I18N.langs[this.lang].locale;
  },

  /** Сообщение из словаря с подстановкой {переменных} */
  t(key, vars) {
    const dict = window.I18N.msg[this.lang] || window.I18N.msg.ru;
    let text = dict[key] !== undefined ? dict[key] : window.I18N.msg.ru[key];
    if (text === undefined) {
      console.warn(`i18n: нет перевода для «${key}»`);
      return key;
    }
    if (vars) {
      Object.keys(vars).forEach((name) => {
        text = text.split(`{${name}}`).join(vars[name]);
      });
    }
    return text;
  },

  /** Содержимое интерактивных разделов на текущем языке */
  d() {
    return window.I18N.data[this.lang] || window.I18N.data.ru;
  },

  /** Текст статичной разметки: русский берётся из HTML, остальные — из словаря */
  ui(key, ruFallback) {
    if (this.lang === 'ru') return ruFallback;
    const dict = window.I18N.ui[this.lang] || {};
    if (dict[key] === undefined) {
      console.warn(`i18n: нет перевода разметки «${key}» (${this.lang})`);
      return ruFallback;
    }
    return dict[key];
  },

  /** Запоминаем исходные русские тексты при первой загрузке */
  captureRu() {
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (!this.ruText.has(key)) this.ruText.set(key, el.textContent.trim());
    });
    $$('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (!this.ruHtml.has(key)) this.ruHtml.set(key, el.innerHTML.trim());
    });
    [['data-i18n-placeholder', 'placeholder'], ['data-i18n-aria', 'aria-label'], ['data-i18n-title', 'title']].forEach(([attr, target]) => {
      $$(`[${attr}]`).forEach((el) => {
        const key = el.getAttribute(attr);
        const mapKey = `${target}|${key}`;
        if (!this.ruAttr.has(mapKey)) this.ruAttr.set(mapKey, el.getAttribute(target) || '');
      });
    });
  },

  applyStatic() {
    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = this.ui(key, this.ruText.get(key));
    });
    $$('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = this.ui(key, this.ruHtml.get(key));
    });
    [['data-i18n-placeholder', 'placeholder'], ['data-i18n-aria', 'aria-label'], ['data-i18n-title', 'title']].forEach(([attr, target]) => {
      $$(`[${attr}]`).forEach((el) => {
        const key = el.getAttribute(attr);
        el.setAttribute(target, this.ui(key, this.ruAttr.get(`${target}|${key}`)));
      });
    });
    this.fitSvgText();
  },

  /** Сжимает надписи в SVG, если перевод длиннее отведённого места */
  fitSvgText() {
    $$('svg text[data-i18n]').forEach((text) => {
      const max = this.svgFit[text.dataset.i18n];
      if (!max) return;
      text.removeAttribute('textLength');
      text.removeAttribute('lengthAdjust');
      try {
        if (text.getComputedTextLength() > max) {
          text.setAttribute('textLength', String(max));
          text.setAttribute('lengthAdjust', 'spacingAndGlyphs');
        }
      } catch (error) {
        /* элемент ещё не отрисован — пропускаем */
      }
    });
  },

  /** Модули подписываются, чтобы перерисоваться при смене языка */
  onChange(callback) {
    this.listeners.push(callback);
  },

  set(lang, notify = true) {
    if (!this.supported.includes(lang)) lang = 'ru';
    const changed = lang !== this.lang;
    this.lang = lang;
    try {
      localStorage.setItem('cf-lang', lang);
    } catch (error) {
      /* язык просто не запомнится */
    }
    document.documentElement.setAttribute('lang', lang);
    document.title = window.I18N.langs[lang].title;

    $$('.lang-btn').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    this.applyStatic();
    if (changed || !notify) this.listeners.forEach((callback) => callback(lang));
    refreshIcons();
    if (notify && changed) showToast(this.t('lang.changed'), '', 'info', 2200);
  },

  init() {
    this.captureRu();
    let saved = 'ru';
    try {
      saved = localStorage.getItem('cf-lang') || 'ru';
    } catch (error) {
      saved = 'ru';
    }
    this.lang = this.supported.includes(saved) ? saved : 'ru';

    $$('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => this.set(button.dataset.lang));
    });
  },

  /** Первичное применение языка, когда все модули уже подписаны */
  start() {
    this.set(this.lang, false);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => this.fitSvgText());
    }
  }
};

const t = (key, vars) => i18n.t(key, vars);

/* ---------- 3. Тема, шапка, навигация ---------- */
function initTheme() {
  const toggle = $('#themeToggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('cf-theme', next);
    } catch (error) {
      /* тема просто не запомнится */
    }
    showToast(next === 'light' ? t('theme.light') : t('theme.dark'), '', 'info', 2200);
    charts.rebuildAll();
  });
}

function initHeader() {
  const header = $('#header');
  const toTop = $('#toTop');

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const links = $$('.nav-link');
  /* Следим за всеми разделами: если раздел без пункта в меню (главный экран, эссе) — подсветка снимается */
  const sections = $$('main > section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
}

const mobileMenu = {
  burger: null,
  menu: null,

  init() {
    this.burger = $('#burger');
    this.menu = $('#mobileMenu');
    this.burger.addEventListener('click', () => this.setOpen(!this.menu.classList.contains('open')));
    $$('a', this.menu).forEach((link) => link.addEventListener('click', () => this.setOpen(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1400 && this.menu.classList.contains('open')) this.setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.menu.classList.contains('open')) this.setOpen(false);
    });
    i18n.onChange(() => this.updateLabel());
  },

  updateLabel() {
    const open = this.menu.classList.contains('open');
    this.burger.setAttribute('aria-label', open ? t('menu.close') : t('menu.open'));
  },

  setOpen(open) {
    this.burger.classList.toggle('open', open);
    this.menu.classList.toggle('open', open);
    this.burger.setAttribute('aria-expanded', String(open));
    this.menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
    $$('.mobile-nav a', this.menu).forEach((link, index) => {
      link.style.transitionDelay = open ? `${index * 45}ms` : '0ms';
    });
    this.updateLabel();
  }
};

/** Эффект «ряби» на кнопках */
function initRipple() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.btn');
    if (!button || button.disabled) return;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ---------- 4. Появление при скролле и счётчики ---------- */
function initReveal() {
  const elements = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 80}ms`;
    observer.observe(el);
  });
}

function initCounters() {
  const counters = $$('.counter');
  const run = (counter) => {
    animateNumber(counter, Number(counter.dataset.target), {
      plain: counter.dataset.plain === 'true',
      duration: 1800
    });
  };
  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((counter) => observer.observe(counter));
}

/* ---------- 4б. Эссе студентов (главная страница) ----------
   Чтобы добавить эссе: впишите имя, файл фото (лежит рядом с index.html) и текст.
   Пока поле пустое, на сайте показывается заготовка. Эссе выводится на том языке, на котором написано. */
const ESSAYS = [
  { name: "Абдиров Алибек", photo: "essay-1.jpg?v=2", lang: 'kk', audio: 'essay-1.mp3', marks: [0.3, 4.95, 37.39, 67.6, 95.19, 122.85, 148.31, 168.54], title: "Сыбайлас жемқорлық – қоғамның дамуына кедергі", text: "Сыбайлас жемқорлық – қазіргі қоғамдағы ең өзекті мәселелердің бірі. Ол мемлекеттің дамуына, халықтың әл-ауқатына және адамдар арасындағы сенімге кері әсерін тигізеді. Жемқорлық дегеніміз – адамның өз қызметтік орнын немесе мүмкіндігін жеке пайдасы үшін заңсыз пайдалануы. Оған пара алу, пара беру, қызмет бабын асыра пайдалану және таныстық арқылы заңсыз артықшылықтарға ие болу жатады.\n\nБүгінгі таңда көптеген мемлекеттер сыбайлас жемқорлықпен күрес жүргізіп келеді. Себебі жемқорлық бар жерде әділдік болмайды. Мысалы, бір адам өз еңбегімен жетістікке жетуге тырысса, екінші адам пара беру арқылы өз мақсатына оңай жетуі мүмкін. Бұл қоғамдағы теңдік қағидасын бұзады. Сонымен қатар халықтың мемлекеттік мекемелерге деген сенімін төмендетеді.\n\nСыбайлас жемқорлықтың пайда болуына бірнеше себеп бар. Олардың қатарына заңды құрметтемеу, жеке басының пайдасын жоғары қою, жауапкершіліктің төмендігі және бақылаудың жеткіліксіздігі жатады. Кейбір адамдар өз мәселесін заңды жолмен шешудің орнына пара беруді дұрыс деп санайды. Мұндай көзқарас қоғамға үлкен зиян келтіреді.\n\nЖемқорлықпен күрес әрбір азаматтан басталуы керек. Ең алдымен адамдар адалдық пен әділдікті өмірлік қағидаға айналдыруы қажет. Мектептер мен колледждерде жастарға жемқорлықтың зияны туралы түсіндіру маңызды. Себебі жастар – еліміздің болашағы. Егер жас ұрпақ кішкентай кезінен адал болуға үйренсе, болашақта қоғам да өзгереді.\n\nМемлекет тарапынан да көптеген жұмыстар атқарылуы тиіс. Заң талаптарын күшейту, мемлекеттік қызметтердің ашықтығын қамтамасыз ету және азаматтардың құқықтық сауаттылығын арттыру – жемқорлықтың алдын алудың маңызды жолдары. Қазіргі кезде электронды мемлекеттік қызметтердің дамуы да кейбір заңсыз әрекеттерді азайтуға көмектеседі.\n\nМенің ойымша, сыбайлас жемқорлықпен күрес тек құқық қорғау органдарының міндеті емес. Бұл – бүкіл қоғамның ортақ жауапкершілігі. Әр адам өз ісіне адал болып, заңсыз әрекеттерге жол бермеуі керек. Біз пара бермей, пара алмауды өзімізден бастауымыз қажет.\n\nҚорытындылай келе, жемқорлықсыз қоғам құру – барлығымыздың ортақ мақсатымыз. Әділдік пен адалдық үстемдік құрған мемлекет қана дамыған елдердің қатарына қосыла алады. Сондықтан әрбір азамат жемқорлыққа қарсы болып, өз үлесін қосуы тиіс." },
  { name: "Әбдікәрім Аслан", photo: "essay-2.jpg?v=2", lang: 'kk', audio: 'essay-2.mp3', marks: [0.3, 3.81, 22.38, 47.3, 68.08, 90.78, 115.83, 141.49, 162.73], title: "Адалдық – жемқорлыққа қарсы күрестің негізі", text: "Адалдық – адам бойындағы ең маңызды қасиеттердің бірі. Адал адам ешкімді алдамайды, өз міндетін жауапкершілікпен орындайды және заңды құрметтейді. Қоғамда адалдық пен әділдік болмаса, түрлі мәселелер пайда болады. Сол мәселелердің бірі – сыбайлас жемқорлық.\n\nСыбайлас жемқорлық қоғамның барлық саласына кері әсер етуі мүмкін. Мысалы, білім беру саласында парақорлық орын алса, білімді және еңбексүйгіш оқушылар мен студенттер әділетсіздікке тап болады. Ал кейбір адамдар білімсіз болса да, заңсыз жолмен жақсы нәтижеге қол жеткізуі мүмкін. Бұл білім сапасының төмендеуіне және жастардың болашаққа деген сенімінің азаюына әкеледі.\n\nМедицина саласында да жемқорлықтың зияны үлкен. Егер медициналық қызметтерді алу кезінде заңсыз ақша талап етілсе, қарапайым азаматтардың құқықтары бұзылады. Мемлекеттік мекемелерде де жемқорлық орын алса, халықтың мемлекетке деген сенімі төмендейді. Сондықтан әр салада ашықтық пен әділдік болуы өте маңызды.\n\nЖемқорлықтың алдын алу үшін ең алдымен адамның тәрбиесіне көңіл бөлу қажет. Бала кезінен бастап әр адамға адалдық, жауапкершілік және әділдік туралы түсіндірілуі керек. Отбасы мен білім беру мекемелері бұл бағытта маңызды рөл атқарады. Ата-ана баласына дұрыс үлгі көрсетсе, ал мұғалімдер әділдікке тәрбиелесе, жастардың көзқарасы дұрыс қалыптасады.\n\nМенің ойымша, жастардың сыбайлас жемқорлыққа қарсы күрестегі орны ерекше. Себебі еліміздің болашағы бүгінгі жас ұрпақтың қолында. Біз болашақта қандай маман болсақ та, өз жұмысымызды адал атқаруымыз керек. Дәрігер болсақ, барлық науқасқа бірдей қарауымыз қажет. Мұғалім болсақ, оқушыларды әділ бағалауымыз керек. Мемлекеттік қызметкер болсақ, халыққа адал қызмет етуіміз тиіс.\n\nҚазіргі уақытта технологияның дамуы жемқорлықтың алдын алуға жаңа мүмкіндіктер беріп отыр. Мысалы, көптеген мемлекеттік қызметтерді интернет арқылы алуға болады. Бұл азаматтар мен мемлекеттік қызметкерлер арасындағы тікелей байланысты азайтып, қызмет көрсету үдерісінің ашық болуына көмектеседі. Сонымен қатар әрбір азамат өз құқықтарын біліп, заңсыз әрекеттерге тап болған жағдайда тиісті органдарға хабарлауы қажет.\n\nЖемқорлықпен күресуде қоғамның белсенділігі де маңызды. Егер адамдар заңсыз әрекеттерге немқұрайлы қарамаса, мұндай жағдайлардың азаюына мүмкіндік туады. Әр адам өзінен бастап өзгеріс жасауы керек. Пара бермеу, пара алмау және таныстық арқылы заңсыз артықшылық іздемеу – адал қоғамның негізгі қағидалары.\n\nҚорытындылай келе, адалдық – жемқорлыққа қарсы күрестің ең маңызды құралы. Әр азамат әділдік пен жауапкершілікті бағаласа, елімізде сенімді әрі тұрақты қоғам қалыптасады. Менің ойымша, адалдықты таңдау арқылы біз Қазақстанның жарқын болашағына үлес қоса аламыз." },
  { name: "Мұхамбетрахым Ерғазы", photo: "essay-3.jpg?v=2", lang: 'kk', audio: 'essay-3.mp3', marks: [0.3, 5.53, 30.93, 55.17, 81.73, 108.38, 133.67, 159.77, 181.13, 204.14], title: "Жемқорлықсыз Қазақстан – жарқын болашақ кепілі", text: "Қазақстанның болашағы – әрбір азаматтың қолында. Еліміздің дамуы үшін экономика, білім, медицина және басқа да салалар жоғары деңгейде болуы керек. Бірақ осы салалардың дамуына кедергі келтіретін маңызды мәселелердің бірі – сыбайлас жемқорлық. Сондықтан жемқорлықсыз қоғам құру Қазақстан үшін маңызды міндеттердің бірі болып саналады.\n\nСыбайлас жемқорлық дегеніміз – қызметтік мүмкіндіктерді жеке пайда үшін заңсыз пайдалану. Оның кең тараған түрлеріне пара алу, пара беру, қызмет бабын асыра пайдалану және мемлекеттік қаражатты заңсыз иемдену жатады. Мұндай әрекеттер мемлекеттің дамуын тежеп, халықтың тұрмыс сапасына кері әсер етеді.\n\nЖемқорлықтың ең үлкен зияны – қоғамдағы әділдікті бұзуы. Мысалы, жұмысқа орналасу кезінде адамның білімі мен қабілеті емес, ақшасы немесе танысы маңызды болып кетсе, бұл әділетсіздікке әкеледі. Нәтижесінде өз саласын жақсы меңгерген адамдар мүмкіндігін жоғалтады. Ал қоғамға қажетті мамандардың орнына лайықсыз адамдар келуі мүмкін.\n\nЖемқорлық ел экономикасына да үлкен зиян келтіреді. Мемлекет қаражаты халықтың игілігі үшін жұмсалуы тиіс. Ол мектептер, ауруханалар, жолдар және басқа да маңызды нысандар салуға бағытталады. Егер осы қаражат заңсыз пайдаланылса, көптеген жобалар уақытында орындалмайды. Бұл халықтың өмір сапасының төмендеуіне әсер етеді.\n\nСыбайлас жемқорлықпен күресудің бірнеше тиімді жолы бар. Біріншіден, заң алдында барлық азамат тең болуы керек. Адамның қызметіне немесе байлығына қарамастан, заң бұзған әрбір адам жауапкершілікке тартылуы тиіс. Екіншіден, мемлекеттік қызметтердің ашықтығын арттыру қажет. Үшіншіден, халықтың құқықтық сауаттылығын көтеру маңызды.\n\nБұл мәселеде жастардың рөлі ерекше. Қазіргі жастар – ертеңгі мамандар, басшылар және қоғам мүшелері. Егер біз бүгіннен бастап адалдықты таңдасақ, болашақта жемқорлыққа қарсы тұра алатын ұрпақ қалыптастырамыз. Колледждер мен мектептерде осы тақырыпта түрлі кездесулер, пікірталастар және тәрбиелік іс-шаралар өткізу пайдалы.\n\nСонымен қатар интернет пен әлеуметтік желілерді дұрыс пайдалану қажет. Қазіргі уақытта ақпаратты жылдам таратуға мүмкіндік бар. Азаматтар өз құқықтарын біліп, жемқорлықтың зияны туралы ақпараттануы керек. Бірақ кез келген ақпаратты таратқанда оның шынайылығына көз жеткізу маңызды.\n\nМенің ойымша, жемқорлықсыз Қазақстан құру үшін әрбір адам өзінен бастауы қажет. Біз пара беруді де, пара алуды да қалыпты жағдай деп қабылдамауымыз керек. Әрбір істі заңды жолмен шешуге тырысуымыз қажет. Адал еңбек пен білім арқылы жетістікке жету – ең дұрыс жол.\n\nҚорытындылай келе, жемқорлықсыз болашақ құру – тек мемлекеттің емес, бүкіл халықтың міндеті. Әділдік, адалдық және жауапкершілік қоғамның басты құндылықтарына айналуы тиіс. Сонда ғана Қазақстан дамыған, қауіпсіз және әділетті мемлекет бола алады. Мен еліміздің болашағы адал жастардың қолында деп сенемін." }
];

/* Переводы эссе (с казахского) и озвучка на каждом языке: показываются при переключении языка сайта */
const ESSAY_TR = {
  "ru": [
    {
      "title": "Коррупция – препятствие для развития общества",
      "text": "Коррупция – одна из самых острых проблем современного общества. Она негативно влияет на развитие государства, благосостояние народа и доверие между людьми. Коррупция – это незаконное использование человеком своего служебного положения или возможностей ради личной выгоды. К ней относятся получение и дача взятки, злоупотребление служебным положением и получение незаконных преимуществ через знакомства.\n\nСегодня многие государства ведут борьбу с коррупцией. Ведь там, где есть коррупция, нет справедливости. Например, один человек стремится добиться успеха своим трудом, а другой может легко достичь цели с помощью взятки. Это нарушает принцип равенства в обществе. Кроме того, это подрывает доверие народа к государственным учреждениям.\n\nУ коррупции есть несколько причин. Среди них – неуважение к закону, стремление ставить личную выгоду выше всего, низкая ответственность и недостаточный контроль. Некоторые люди считают, что вместо того чтобы решать свои проблемы законным путём, правильнее дать взятку. Такой взгляд наносит обществу большой вред.\n\nБорьба с коррупцией должна начинаться с каждого гражданина. Прежде всего люди должны сделать честность и справедливость своим жизненным принципом. В школах и колледжах важно объяснять молодёжи, чем вредна коррупция. Ведь молодёжь – это будущее нашей страны. Если молодое поколение с детства научится быть честным, в будущем изменится и общество.\n\nМногое должно делать и государство. Ужесточение требований закона, открытость государственных услуг и повышение правовой грамотности граждан – важные способы предупреждения коррупции. Сегодня развитие электронных государственных услуг также помогает сократить некоторые незаконные действия.\n\nПо моему мнению, борьба с коррупцией – обязанность не только правоохранительных органов. Это общая ответственность всего общества. Каждый человек должен честно относиться к своему делу и не допускать незаконных действий. Мы должны начать с себя: не давать и не брать взяток.\n\nПодводя итог, можно сказать, что построение общества без коррупции – наша общая цель. Только государство, в котором господствуют справедливость и честность, может войти в число развитых стран. Поэтому каждый гражданин должен выступать против коррупции и вносить свой вклад.",
      "audio": "essay-1-ru.mp3",
      "marks": [
        0.3,
        4.13,
        33.83,
        56.63,
        78.69,
        102.83,
        124.1,
        143.2
      ]
    },
    {
      "title": "Честность – основа борьбы с коррупцией",
      "text": "Честность – одно из самых важных качеств человека. Честный человек никого не обманывает, ответственно выполняет свои обязанности и уважает закон. Если в обществе нет честности и справедливости, возникают самые разные проблемы. Одна из них – коррупция.\n\nКоррупция может негативно влиять на все сферы общества. Например, если в образовании процветает взяточничество, знающие и трудолюбивые школьники и студенты сталкиваются с несправедливостью. А некоторые люди, даже не имея знаний, могут добиться хорошего результата незаконным путём. Это ведёт к снижению качества образования и к тому, что молодёжь теряет веру в будущее.\n\nВ медицине вред коррупции тоже велик. Если за медицинские услуги требуют незаконные деньги, нарушаются права простых граждан. Если коррупция есть в государственных учреждениях, народ перестаёт доверять государству. Поэтому в каждой сфере очень важны открытость и справедливость.\n\nЧтобы предупредить коррупцию, прежде всего нужно уделять внимание воспитанию. С самого детства каждому нужно объяснять, что такое честность, ответственность и справедливость. Семья и учебные заведения играют в этом важную роль. Если родители показывают ребёнку правильный пример, а учителя воспитывают в нём справедливость, взгляды молодёжи формируются правильно.\n\nПо моему мнению, роль молодёжи в борьбе с коррупцией особенная. Ведь будущее нашей страны – в руках сегодняшнего молодого поколения. Кем бы мы ни стали в будущем, мы должны честно выполнять свою работу. Если станем врачами – одинаково относиться ко всем пациентам. Если станем учителями – справедливо оценивать учеников. Если станем государственными служащими – честно служить народу.\n\nСегодня развитие технологий даёт новые возможности для предупреждения коррупции. Например, многие государственные услуги можно получить через интернет. Это сокращает прямой контакт между гражданами и государственными служащими и делает оказание услуг открытым. Кроме того, каждый гражданин должен знать свои права и, столкнувшись с незаконными действиями, сообщать о них в соответствующие органы.\n\nВ борьбе с коррупцией важна и активность общества. Если люди не будут равнодушны к незаконным действиям, таких случаев станет меньше. Каждый должен начать перемены с себя. Не давать взяток, не брать взяток и не искать незаконных преимуществ через знакомства – главные принципы честного общества.\n\nПодводя итог, можно сказать, что честность – самое важное средство борьбы с коррупцией. Если каждый гражданин будет ценить справедливость и ответственность, в нашей стране сложится надёжное и стабильное общество. По моему мнению, выбирая честность, мы вносим свой вклад в светлое будущее Казахстана.",
      "audio": "essay-2-ru.mp3",
      "marks": [
        0.3,
        3.72,
        21.27,
        45.32,
        63.48,
        85.63,
        110.08,
        134.97,
        154.25
      ]
    },
    {
      "title": "Казахстан без коррупции – залог светлого будущего",
      "text": "Будущее Казахстана – в руках каждого гражданина. Для развития страны экономика, образование, медицина и другие сферы должны быть на высоком уровне. Но одна из главных проблем, мешающих их развитию, – коррупция. Поэтому построение общества без коррупции считается одной из важнейших задач Казахстана.\n\nКоррупция – это незаконное использование служебных возможностей ради личной выгоды. К её распространённым видам относятся получение и дача взятки, злоупотребление служебным положением и незаконное присвоение государственных средств. Такие действия тормозят развитие государства и ухудшают качество жизни людей.\n\nГлавный вред коррупции в том, что она разрушает справедливость в обществе. Например, если при приёме на работу важны не знания и способности человека, а его деньги или знакомства, это ведёт к несправедливости. В итоге люди, хорошо знающие своё дело, теряют возможности. А на место нужных обществу специалистов могут прийти недостойные люди.\n\nКоррупция наносит большой вред и экономике страны. Государственные средства должны расходоваться на благо народа. Они направляются на строительство школ, больниц, дорог и других важных объектов. Если эти средства используются незаконно, многие проекты не выполняются вовремя. Это снижает качество жизни людей.\n\nЕсть несколько эффективных способов борьбы с коррупцией. Во-первых, все граждане должны быть равны перед законом. Независимо от должности или богатства, каждый, кто нарушил закон, должен нести ответственность. Во-вторых, нужно повышать открытость государственных услуг. В-третьих, важно повышать правовую грамотность населения.\n\nОсобая роль в этом принадлежит молодёжи. Сегодняшняя молодёжь – это завтрашние специалисты, руководители и члены общества. Если мы уже сегодня выберем честность, то воспитаем поколение, способное противостоять коррупции. В колледжах и школах полезно проводить на эту тему встречи, дискуссии и воспитательные мероприятия.\n\nКроме того, нужно правильно пользоваться интернетом и социальными сетями. Сегодня информацию можно распространять очень быстро. Граждане должны знать свои права и понимать, чем вредна коррупция. Но, распространяя любую информацию, важно убедиться в её достоверности.\n\nПо моему мнению, чтобы построить Казахстан без коррупции, каждый должен начать с себя. Мы не должны считать нормой ни дачу, ни получение взяток. Мы должны стараться решать любое дело законным путём. Добиваться успеха честным трудом и знаниями – самый правильный путь.\n\nПодводя итог, можно сказать, что построение будущего без коррупции – обязанность не только государства, но и всего народа. Справедливость, честность и ответственность должны стать главными ценностями общества. Только тогда Казахстан сможет стать развитым, безопасным и справедливым государством. Я верю, что будущее нашей страны – в руках честной молодёжи.",
      "audio": "essay-3-ru.mp3",
      "marks": [
        0.3,
        4.83,
        30.32,
        52.42,
        78.97,
        103.07,
        127.17,
        150.41,
        172.3,
        191.93
      ]
    }
  ],
  "en": [
    {
      "title": "Corruption Holds Society Back",
      "text": "Corruption is one of the most pressing problems of modern society. It harms the development of the state, people's well-being and trust between people. Corruption means using one's position or opportunities illegally for personal gain. It includes taking and giving bribes, abuse of office and gaining unlawful advantages through personal connections.\n\nToday many countries are fighting corruption, because where there is corruption, there is no justice. For example, one person tries to succeed through hard work, while another can easily reach the same goal by paying a bribe. This breaks the principle of equality in society. It also undermines people's trust in public institutions.\n\nCorruption has several causes. Among them are disrespect for the law, putting personal gain above everything else, a lack of responsibility and weak oversight. Some people believe that paying a bribe is the right way to solve their problems instead of using legal means. Such an attitude does great harm to society.\n\nThe fight against corruption must begin with every citizen. First of all, people should make honesty and fairness their principles in life. It is important to explain the harm of corruption to young people in schools and colleges, because young people are the future of our country. If the younger generation learns to be honest from childhood, society will change too.\n\nThe state must also do a great deal. Stricter laws, open and transparent public services and better legal literacy among citizens are important ways to prevent corruption. Today the development of electronic public services also helps to reduce some illegal practices.\n\nIn my opinion, fighting corruption is not only the duty of law enforcement agencies. It is the shared responsibility of the whole society. Everyone should be honest in their work and never allow illegal actions. We must start with ourselves: never give and never take bribes.\n\nIn conclusion, building a society without corruption is our common goal. Only a state where justice and honesty prevail can join the ranks of developed countries. That is why every citizen should stand against corruption and do their part.",
      "audio": "essay-1-en.mp3",
      "marks": [
        0.3,
        3.64,
        27.99,
        49.51,
        72.16,
        95.2,
        115.28,
        134.74
      ]
    },
    {
      "title": "Honesty Is the Foundation of the Fight Against Corruption",
      "text": "Honesty is one of the most important human qualities. An honest person does not deceive anyone, fulfils their duties responsibly and respects the law. When a society lacks honesty and fairness, many problems arise. One of them is corruption.\n\nCorruption can harm every area of society. For example, if bribery takes hold in education, knowledgeable and hard-working pupils and students face injustice, while some people without knowledge can get good results illegally. This lowers the quality of education and makes young people lose faith in the future.\n\nCorruption also does great harm in healthcare. If people are asked for illegal payments to receive medical care, the rights of ordinary citizens are violated. If corruption exists in public institutions, people lose trust in the state. That is why openness and fairness are so important in every field.\n\nTo prevent corruption, we must first pay attention to upbringing. From early childhood, everyone should be taught what honesty, responsibility and fairness mean. Families and schools play a key role in this. When parents set the right example and teachers raise children to value fairness, young people develop the right attitudes.\n\nIn my opinion, young people have a special role in the fight against corruption, because the future of our country is in the hands of today's young generation. Whatever profession we choose, we must do our work honestly. If we become doctors, we must treat every patient equally. If we become teachers, we must grade students fairly. If we become civil servants, we must serve the people honestly.\n\nToday technology opens up new ways to prevent corruption. For example, many public services can now be received online. This reduces direct contact between citizens and officials and makes the process of providing services transparent. In addition, every citizen should know their rights and report illegal actions to the proper authorities.\n\nPublic engagement also matters in the fight against corruption. If people do not stay indifferent to illegal actions, such cases will become rarer. Everyone should start the change with themselves. Not giving bribes, not taking bribes and not seeking unfair advantages through connections are the core principles of an honest society.\n\nIn conclusion, honesty is the most important tool in the fight against corruption. If every citizen values fairness and responsibility, a reliable and stable society will take shape in our country. In my opinion, by choosing honesty we can contribute to the bright future of Kazakhstan.",
      "audio": "essay-2-en.mp3",
      "marks": [
        0.3,
        4.58,
        22.65,
        43.87,
        64.91,
        88.1,
        115.73,
        141.32,
        163.91
      ]
    },
    {
      "title": "A Corruption-Free Kazakhstan Is the Key to a Bright Future",
      "text": "The future of Kazakhstan is in the hands of every citizen. For the country to develop, the economy, education, healthcare and other sectors must be at a high level. But one of the main problems holding these sectors back is corruption. That is why building a corruption-free society is one of Kazakhstan's most important goals.\n\nCorruption is the illegal use of one's official position for personal gain. Its most common forms are taking and giving bribes, abuse of office and the illegal appropriation of public funds. Such actions slow down the development of the state and worsen people's quality of life.\n\nThe greatest harm of corruption is that it destroys fairness in society. For example, if getting a job depends not on a person's knowledge and abilities but on their money or connections, this leads to injustice. As a result, people who know their field well lose their chances, and unworthy people may take the place of the specialists society needs.\n\nCorruption also does great damage to the country's economy. Public money must be spent for the good of the people. It goes to building schools, hospitals, roads and other important facilities. If these funds are misused, many projects are not completed on time. This lowers people's quality of life.\n\nThere are several effective ways to fight corruption. First, all citizens must be equal before the law. Regardless of position or wealth, anyone who breaks the law must be held accountable. Second, public services must become more transparent. Third, it is important to improve people's legal literacy.\n\nYoung people have a special role here. Today's young people are tomorrow's specialists, leaders and members of society. If we choose honesty starting today, we will raise a generation that can stand up to corruption. It is useful to hold meetings, debates and educational events on this topic in colleges and schools.\n\nWe should also use the internet and social media wisely. Today information spreads very quickly. Citizens should know their rights and understand the harm of corruption. But before sharing any information, it is important to make sure it is true.\n\nIn my opinion, to build a Kazakhstan without corruption, everyone must start with themselves. We must not accept giving or taking bribes as normal. We should try to resolve every matter legally. Achieving success through honest work and knowledge is the right path.\n\nIn conclusion, building a corruption-free future is the duty not only of the state but of the whole nation. Justice, honesty and responsibility must become the core values of society. Only then can Kazakhstan become a developed, safe and fair country. I believe that the future of our country is in the hands of honest young people.",
      "audio": "essay-3-en.mp3",
      "marks": [
        0.3,
        5.15,
        24.76,
        41.4,
        63.09,
        78.03,
        96.98,
        116.93,
        131.75,
        148.35
      ]
    }
  ]
};
const ESSAY_COLORS = ['linear-gradient(135deg,#22d3ee,#3b82f6)', 'linear-gradient(135deg,#a78bfa,#6366f1)', 'linear-gradient(135deg,#2dd4bf,#0ea5e9)'];

function wordCount(text) {
  return (String(text).trim().match(/[^\s—–-]+/g) || []).length;
}

const essays = {
  init() {
    this.render();
    i18n.onChange(() => {
      this.render();
      /* если эссе открыто — показать его на новом языке, с озвучкой на этом языке */
      if (modal.isOpen() && $('.essay-modal') && this.current != null) {
        this.stop();
        this.open(this.current);
      }
    });
  },

  /** Версия эссе для текущего языка сайта: оригинал (kk) или перевод с озвучкой */
  version(i) {
    const base = ESSAYS[i];
    const lang = i18n.lang;
    const tr = lang !== 'kk' && ESSAY_TR[lang] && ESSAY_TR[lang][i];
    if (tr && base.text.trim()) return { ...tr, lang, translated: true };
    return { title: base.title, text: base.text, audio: base.audio, marks: base.marks, lang: base.lang || 'kk', translated: false };
  },

  item(i) {
    const e = ESSAYS[i];
    const v = this.version(i);
    const n = i + 1;
    return {
      ready: Boolean(e.text.trim()),
      name: e.name.trim() || t('es.studentN', { n }),
      title: v.title.trim() || (e.text.trim() ? '' : t('es.soon')),
      text: v.text.trim(),
      photo: e.photo.trim(),
      initials: e.name.trim() ? e.name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase() : String(n)
    };
  },

  avatar(it, i, big = false) {
    const cls = big ? 'essay-photo essay-photo-lg' : 'essay-photo';
    if (it.photo) return `<span class="${cls}"><img src="${escapeHTML(it.photo)}" alt="${escapeHTML(it.name)}" loading="lazy" /></span>`;
    return `<span class="${cls} essay-photo-empty" style="background:${ESSAY_COLORS[i % 3]}" aria-hidden="true"><b>${escapeHTML(it.initials)}</b><i data-lucide="camera"></i></span>`;
  },

  render() {
    const grid = $('#essayGrid');
    grid.innerHTML = ESSAYS.map((_, i) => {
      const it = this.item(i);
      const preview = it.ready ? it.text.split(/\s+/).slice(0, 14).join(' ').replace(/[.,;:!?–—-]+$/, '') + '…' : t(it.photo ? 'es.textSoon' : 'es.placeholderShort');
      return `
        <button type="button" class="essay-card glass reveal visible" data-essay="${i}" aria-haspopup="dialog">
          ${this.avatar(it, i)}
          <span class="essay-meta">
            <strong>${escapeHTML(it.name)}</strong>
            ${it.title ? `<em>${escapeHTML(it.title)}</em>` : ''}
            <small>${escapeHTML(preview)}</small>
          </span>
          <span class="essay-cta"><i data-lucide="headphones"></i>${escapeHTML(t('es.read'))}</span>
        </button>`;
    }).join('');
    refreshIcons();
    $$('.essay-card', grid).forEach((card) => card.addEventListener('click', () => this.open(Number(card.dataset.essay))));
  },

  open(i) {
    this.current = i;
    this.lastHighlight = null;
    const it = this.item(i);
    const body = it.ready
      ? it.text.split(/\n\s*\n/).map((p) => `<p>${escapeHTML(p.trim())}</p>`).join('')
      : `<div class="alert alert-info"><i data-lucide="info"></i><p>${escapeHTML(t('es.placeholder'))}</p></div>`;
    modal.open(`
      <div class="essay-modal">
        <div class="essay-modal-head">
          ${this.avatar(it, i, true)}
          <div>
            <small class="essay-group">${escapeHTML(t('es.group'))}</small>
            <h2 id="modalTitle">${escapeHTML(it.name)}</h2>
            ${it.title ? `<p class="essay-title">${escapeHTML(it.title)}</p>` : ''}
            ${it.ready && this.version(i).translated ? `<p class="essay-tr-note"><i data-lucide="languages"></i>${escapeHTML(t('es.translated'))}</p>` : ''}
          </div>
        </div>
        ${it.ready ? this.listenBar(i) : ''}
        <div class="essay-text" lang="${this.version(i).lang}">${body}</div>
        ${it.ready ? `<p class="essay-count">${escapeHTML(t('es.words', { n: wordCount(it.text) }))}</p>` : ''}
        <div class="essay-nav">
          <button class="btn btn-sm btn-ghost" type="button" data-essay-go="${(i + 2) % 3}"><i data-lucide="arrow-left"></i>${escapeHTML(t('es.prev'))}</button>
          <button class="btn btn-sm btn-ghost" type="button" data-essay-go="${(i + 1) % 3}">${escapeHTML(t('es.next'))}<i data-lucide="arrow-right"></i></button>
        </div>
      </div>`);
    $$('[data-essay-go]').forEach((b) => b.addEventListener('click', () => {
      this.stop();
      this.open(Number(b.dataset.essayGo));
    }));
    const listen = $('#essayListen');
    if (listen) listen.addEventListener('click', () => (this.speaking ? this.stop() : this.speak(i)));
    const audio = $('#essayAudio');
    if (audio) {
      const marks = this.version(i).marks || [];
      audio.addEventListener('play', () => {
        if (typeof a11y !== 'undefined') a11y.stopSpeaking();
        this.setListenButton(true);
      });
      audio.addEventListener('pause', () => this.setListenButton(false));
      audio.addEventListener('ended', () => this.highlight(-1));
      audio.addEventListener('timeupdate', () => {
        let k = -1;
        marks.forEach((m, n) => { if (audio.currentTime + 0.05 >= m) k = n; });
        this.highlight(k - 1);
      });
    }
    modal.onClose = () => this.stop();
  },

  /* ----- Чтение эссе вслух -----
     Если у эссе есть аудиофайл (поле audio, например запись голоса автора) — показывается плеер.
     Иначе эссе читает синтезатор речи устройства: казахский голос, если он есть, иначе русский. */
  speaking: false,
  lastHighlight: null,

  voiceInfo(lang) {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const find = (code) => voices.find((v) => (v.lang || '').toLowerCase().replace('_', '-').startsWith(code));
    const kk = find(lang);
    if (kk) return { voice: kk, lang: kk.lang, note: 'es.voiceKk' };
    const ru = find('ru');
    if (ru) return { voice: ru, lang: 'ru-RU', note: 'es.voiceRu' };
    return { voice: null, lang: lang === 'kk' ? 'kk-KZ' : lang, note: 'es.voiceAny' };
  },

  listenBar(i) {
    const e = this.version(i);
    if (e.audio) {
      return `<div class="essay-listen essay-listen-audio">
          <button type="button" class="btn btn-primary btn-sm essay-listen-btn" id="essayListen" aria-pressed="false"><i data-lucide="volume-2"></i><span>${escapeHTML(t('es.listen'))}</span></button>
          <span class="essay-listen-note"><i data-lucide="audio-lines"></i>${escapeHTML(t('es.audio'))}</span>
          <audio class="essay-audio" id="essayAudio" controls preload="metadata" src="${escapeHTML(e.audio)}"></audio>
        </div>`;
    }
    const info = this.voiceInfo(e.lang || 'kk');
    if (!info) return `<div class="essay-listen"><span class="essay-listen-note"><i data-lucide="volume-x"></i>${escapeHTML(t('es.noVoice'))}</span></div>`;
    return `<div class="essay-listen">
        <button type="button" class="btn btn-primary btn-sm essay-listen-btn" id="essayListen" aria-pressed="false"><i data-lucide="volume-2"></i><span>${escapeHTML(t('es.listen'))}</span></button>
        <span class="essay-listen-note" id="essayVoiceNote">${escapeHTML(t(info.note))}</span>
      </div>`;
  },

  setListenButton(on) {
    this.speaking = on;
    const btn = $('#essayListen');
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(on));
    btn.classList.toggle('is-playing', on);
    btn.innerHTML = `<i data-lucide="${on ? 'square' : 'volume-2'}"></i><span>${escapeHTML(t(on ? 'es.stopListen' : 'es.listen'))}</span>`;
    refreshIcons();
  },

  highlight(index) {
    if (index === this.lastHighlight) return;
    this.lastHighlight = index;
    $$('.essay-text p').forEach((p, n) => p.classList.toggle('is-reading', n === index));
    const current = $$('.essay-text p')[index];
    if (current) current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  },

  speak(i) {
    const e = this.version(i);
    const audio = $('#essayAudio');
    if (e.audio && audio) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      const playing = audio.play();
      if (playing && playing.catch) playing.catch(() => this.setListenButton(false));
      return;
    }
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (typeof a11y !== 'undefined') a11y.stopSpeaking();
    synth.cancel();
    const info = this.voiceInfo(e.lang || 'kk');
    const note = $('#essayVoiceNote');
    if (note) note.textContent = t(info.note);
    const paragraphs = [e.title, ...e.text.split(/\n\s*\n/)].map((p) => p.trim()).filter(Boolean);
    const queue = [];
    paragraphs.forEach((p, n) => a11y.chunks(p).forEach((piece) => queue.push({ piece, n: n - 1 })));
    this.setListenButton(true);
    queue.forEach((item, k) => {
      const u = new SpeechSynthesisUtterance(item.piece);
      u.lang = info.lang;
      try {
        if (info.voice) u.voice = info.voice;
      } catch (error) {
        /* голос недоступен — остаётся язык по умолчанию */
      }
      u.rate = 0.95;
      u.onstart = () => this.highlight(item.n);
      if (k === queue.length - 1) {
        u.onend = () => this.finish();
        u.onerror = () => this.finish();
      }
      synth.speak(u);
    });
  },

  finish() {
    if (window.speechSynthesis && window.speechSynthesis.speaking) return;
    this.highlight(-1);
    this.setListenButton(false);
  },

  stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    this.highlight(-1);
    this.setListenButton(false);
    $$('.essay-audio').forEach((a) => a.pause());
  }
};

/* ---------- 5. Калькулятор «Цена коррупции» ---------- */
/* ВАЖНО: все цены — условные демонстрационные значения, не официальные данные.
   Названия товаров на трёх языках — в разделе «Переводы» (data.*.spheres). */
const SPHERE_META = {
  education: { color: '#22d3ee', items: [{ price: 4500, icon: 'book-open' }, { price: 280000, icon: 'laptop' }, { price: 1600000, icon: 'presentation' }] },
  medicine: { color: '#60a5fa', items: [{ price: 25000, icon: 'activity' }, { price: 140000, icon: 'accessibility' }, { price: 1300000, icon: 'monitor-dot' }] },
  roads: { color: '#2dd4bf', items: [{ price: 9000, icon: 'construction' }, { price: 380000, icon: 'lamp' }, { price: 2800000, icon: 'footprints' }] },
  housing: { color: '#818cf8', items: [{ price: 12000, icon: 'lightbulb' }, { price: 90000, icon: 'armchair' }, { price: 6500000, icon: 'trees' }] }
};

const calculator = {
  sphere: 'education',
  resultSphere: 'education',
  frequency: 1,
  chart: null,
  lastTotal: 0,
  shown: false,

  /** Слайдер работает по логарифмической шкале: 10 тыс. — 100 млн ₸ */
  sliderToAmount(value) {
    const raw = 10000 * Math.pow(10, (value / 1000) * 4);
    let step;
    if (raw < 100000) step = 1000;
    else if (raw < 1000000) step = 5000;
    else if (raw < 10000000) step = 50000;
    else step = 500000;
    return Math.round(raw / step) * step;
  },

  updateSlider() {
    const slider = $('#amountSlider');
    const amount = this.sliderToAmount(Number(slider.value));
    $('#amountValue').textContent = formatNumber(amount);
    slider.style.setProperty('--fill', `${slider.value / 10}%`);
    slider.setAttribute('aria-valuetext', t('calc.amountText', { sum: formatNumber(amount) }));
  },

  init() {
    $('#amountSlider').addEventListener('input', () => this.updateSlider());
    this.updateSlider();

    $$('.sphere-btn').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.sphere-btn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-checked', 'true');
        this.sphere = button.dataset.sphere;
      });
    });

    $$('#freqGroup .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('#freqGroup .chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        this.frequency = Number(chip.dataset.freq);
      });
    });

    $('#calcBtn').addEventListener('click', () => this.calculate());

    i18n.onChange(() => {
      this.updateSlider();
      if (this.shown) this.renderResult(false);
    });
  },

  calculate() {
    const amount = this.sliderToAmount(Number($('#amountSlider').value));
    this.lastTotal = amount * this.frequency;
    this.resultSphere = this.sphere;
    this.shown = true;

    $('#resultEmpty').classList.add('hidden');
    const body = $('#resultBody');
    body.classList.remove('hidden');
    body.style.animation = 'none';
    void body.offsetWidth; /* перезапуск CSS-анимации */
    body.style.animation = '';

    this.renderResult(true);

    const message = this.lastTotal >= 1000000 ? 'calc.bigLoss' : 'calc.smallLoss';
    showToast(t('calc.ready'), t(message, { sum: formatNumber(this.lastTotal) }), 'success');

    if (window.innerWidth < 1025) {
      $('#calcResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  /** Отрисовка результата; animate=false — при смене языка, без повторной анимации */
  renderResult(animate) {
    const total = this.lastTotal;
    const key = this.resultSphere;
    const meta = SPHERE_META[key];
    const texts = i18n.d().spheres[key];

    if (animate) animateNumber($('#resultTotal'), total, { duration: 1200 });
    else $('#resultTotal').textContent = formatNumber(total);
    $('#resultSphere').textContent = texts.name;

    const itemsContainer = $('#resultItems');
    itemsContainer.innerHTML = meta.items.map((item, index) => {
      const count = Math.floor(total / item.price);
      return `
        <div class="result-item${animate ? '' : ' no-anim'}" style="animation-delay:${index * 120}ms">
          <div class="ri-icon"><i data-lucide="${item.icon}"></i></div>
          <div class="ri-num" data-count="${count}">${animate ? '0' : formatNumber(count)}</div>
          <div class="ri-name">${escapeHTML(texts.items[index])}</div>
          <div class="ri-price">${escapeHTML(t('calc.unit', { price: formatNumber(item.price) }))}</div>
        </div>`;
    }).join('');
    refreshIcons();
    if (animate) {
      $$('.ri-num', itemsContainer).forEach((el, index) => {
        setTimeout(() => animateNumber(el, Number(el.dataset.count), { duration: 1300 }), index * 120);
      });
    }
    this.renderChart(total, animate);
  },

  renderChart(total, animate = true) {
    const canvas = $('#calcChart');
    if (!window.Chart) {
      const box = canvas ? canvas.parentElement : $('.chart-box-sm');
      if (box) box.innerHTML = `<div class="chart-fallback">${escapeHTML(t('charts.fallback'))}</div>`;
      return;
    }
    const theme = charts.themeColors();
    const keys = Object.keys(SPHERE_META);
    const spheres = i18n.d().spheres;
    const labels = keys.map((k) => `${spheres[k].name}: ${spheres[k].items[0]}`);
    const values = keys.map((k) => Math.floor(total / SPHERE_META[k].items[0].price));
    const colors = keys.map((k) => (k === this.resultSphere ? SPHERE_META[k].color : `${SPHERE_META[k].color}66`));

    if (this.chart) this.chart.destroy();
    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: keys.map((k) => spheres[k].name),
        datasets: [{ label: t('calc.units'), data: values, backgroundColor: colors, borderRadius: 10, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: animate ? { duration: 1200, easing: 'easeOutQuart' } : false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => labels[items[0].dataIndex],
              label: (item) => ` ${t('calc.pcs', { n: formatNumber(item.raw) })}`
            }
          }
        },
        scales: {
          x: { grid: { color: theme.grid }, ticks: { color: theme.text, callback: (v) => formatNumber(v) } },
          y: { grid: { display: false }, ticks: { color: theme.text, font: { weight: '700' } } }
        }
      }
    });
  },

  rebuild() {
    if (this.shown) this.renderChart(this.lastTotal, false);
  }
};

/* ---------- 6. Игра «Взятка или подарок?» ---------- */
/* Тексты ситуаций — в разделе «Переводы» (data.*.game), здесь — иконки и правильные ответы */
const GAME_META = [
  { icon: 'smartphone', answer: 'bribe' },
  { icon: 'stethoscope', answer: 'bribe' },
  { icon: 'flower-2', answer: 'gift' },
  { icon: 'file-clock', answer: 'bribe' },
  { icon: 'book-heart', answer: 'gift' },
  { icon: 'banknote', answer: 'bribe' },
  { icon: 'car', answer: 'bribe' },
  { icon: 'pen-line', answer: 'gift' },
  { icon: 'users', answer: 'bribe' },
  { icon: 'cake', answer: 'gift' }
];

const game = {
  order: [],
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  answered: false,
  lastChoice: null,
  lastGained: 0,
  finished: false,

  init() {
    $$('.answer-btn').forEach((button) => button.addEventListener('click', () => this.answer(button.dataset.answer)));
    $('#gameNext').addEventListener('click', () => this.next());
    $('#gameRestart').addEventListener('click', () => this.start());
    this.start(false);
    i18n.onChange(() => this.refresh());
  },

  start(render = true) {
    this.order = GAME_META.map((_, i) => i).sort(() => Math.random() - 0.5).slice(0, 8);
    this.index = 0;
    this.score = 0;
    this.correct = 0;
    this.streak = 0;
    this.answered = false;
    this.finished = false;
    $('#gameTotal').textContent = this.order.length;
    $('#gameScore').textContent = '0';
    $('#gamePlay').classList.remove('hidden');
    $('#gameFinal').classList.add('hidden');
    if (render) this.render();
  },

  meta() {
    return GAME_META[this.order[this.index]];
  },

  text() {
    return i18n.d().game[this.order[this.index]];
  },

  render() {
    this.answered = false;
    $('#gameStep').textContent = this.index + 1;
    $('#gameProgress').style.width = `${(this.index / this.order.length) * 100}%`;
    $('#gameIcon').innerHTML = `<i data-lucide="${this.meta().icon}"></i>`;
    this.fillTexts();
    const situation = $('.situation');
    situation.style.animation = 'none';
    void situation.offsetWidth;
    situation.style.animation = '';
    $$('.answer-btn').forEach((button) => {
      button.disabled = false;
      button.classList.remove('is-correct', 'is-wrong');
    });
    $('#gameFeedback').classList.add('hidden');
    this.renderNextLabel();
    refreshIcons();
  },

  fillTexts() {
    const item = this.text();
    $('#gameTitle').textContent = item.title;
    $('#gameText').textContent = item.text;
  },

  answer(choice) {
    if (this.answered) return;
    this.answered = true;
    this.lastChoice = choice;
    const meta = this.meta();
    const isRight = choice === meta.answer;

    $$('.answer-btn').forEach((button) => {
      button.disabled = true;
      if (button.dataset.answer === meta.answer) button.classList.add('is-correct');
      else if (button.dataset.answer === choice) button.classList.add('is-wrong');
    });

    this.lastGained = 0;
    if (isRight) {
      this.correct += 1;
      this.streak += 1;
      this.lastGained = 10 + (this.streak >= 3 ? 5 : 0);
      this.score += this.lastGained;
    } else {
      this.streak = 0;
    }

    const pill = $('.score-pill', $('#tab-game'));
    $('#gameScore').textContent = this.score;
    pill.classList.remove('bump');
    void pill.offsetWidth;
    pill.classList.add('bump');

    this.renderFeedback();
  },

  renderFeedback() {
    const meta = this.meta();
    const isRight = this.lastChoice === meta.answer;
    const feedback = $('#gameFeedback');
    feedback.classList.remove('hidden', 'ok', 'bad');
    feedback.classList.add(isRight ? 'ok' : 'bad');
    $('#gameVerdictIcon').innerHTML = `<i data-lucide="${isRight ? 'circle-check' : 'circle-x'}"></i>`;
    const rightLabel = meta.answer === 'bribe' ? t('game.ansBribe') : t('game.ansGift');
    $('#gameVerdict').textContent = isRight
      ? t('game.correct', { n: this.lastGained }) + (this.lastGained > 10 ? t('game.bonus') : '')
      : t('game.wrong', { answer: rightLabel });
    $('#gameExplain').textContent = this.text().explain;
    this.renderNextLabel();
    refreshIcons();
  },

  renderNextLabel() {
    $('#gameNext').innerHTML = this.index === this.order.length - 1
      ? `${escapeHTML(t('game.showResult'))}<i data-lucide="flag"></i>`
      : `${escapeHTML(t('game.next'))}<i data-lucide="arrow-right"></i>`;
  },

  next() {
    if (this.index < this.order.length - 1) {
      this.index += 1;
      this.render();
    } else {
      this.finish();
    }
  },

  finish() {
    this.finished = true;
    $('#gameProgress').style.width = '100%';
    $('#gamePlay').classList.add('hidden');
    $('#gameFinal').classList.remove('hidden');
    this.renderFinal(false);

    const best = storage.get('cf-game-best', 0);
    if (this.score > best) {
      storage.set('cf-game-best', this.score);
      showToast(t('game.record'), t('game.recordText', { s: this.score }), 'success');
    } else {
      showToast(t('game.over'), t('game.overText', { s: best }), 'info');
    }
  },

  renderFinal(instant) {
    const total = this.order.length;
    const percent = Math.round((this.correct / total) * 100);
    animateRing($('#gameRing'), $('#gameFinalPercent'), percent, instant);

    let titleKey = 'game.t0';
    if (percent >= 90) titleKey = 'game.t90';
    else if (percent >= 70) titleKey = 'game.t70';
    else if (percent >= 50) titleKey = 'game.t50';

    $('#gameFinalTitle').textContent = t(titleKey);
    $('#gameFinalText').textContent = t('game.finalText', { c: this.correct, t: total, s: this.score });
  },

  /** Смена языка: перерисовываем тексты, не теряя прогресс */
  refresh() {
    if (this.finished) {
      this.renderFinal(true);
      return;
    }
    this.fillTexts();
    if (this.answered) this.renderFeedback();
    else this.renderNextLabel();
    refreshIcons();
  }
};

/* ---------- 7. Тест «Знаешь ли ты свои права?» ---------- */
/* Вопросы на трёх языках — в разделе «Переводы» (data.*.quiz). Номер правильного варианта: */
const QUIZ_CORRECT = [1, 2, 1, 0, 2, 2, 1, 1, 1, 1, 0, 1];

const quiz = {
  index: 0,
  score: 0,
  answered: false,
  lastChoice: null,
  state: 'start',

  init() {
    $('#quizTotal').textContent = QUIZ_CORRECT.length;
    $('#quizBegin').addEventListener('click', () => this.start());
    $('#quizNext').addEventListener('click', () => this.next());
    $('#quizRestart').addEventListener('click', () => this.start());
    i18n.onChange(() => this.refresh());
  },

  questions() {
    return i18n.d().quiz;
  },

  start() {
    this.index = 0;
    this.score = 0;
    this.answered = false;
    this.state = 'play';
    $('#quizScore').textContent = '0';
    $('#quizStart').classList.add('hidden');
    $('#quizResult').classList.add('hidden');
    $('#quizPlay').classList.remove('hidden');
    this.render();
  },

  render(animate = true) {
    const q = this.questions()[this.index];
    if (animate) this.answered = false;
    $('#quizStep').textContent = this.index + 1;
    $('#quizCategory').textContent = q.category;
    $('#quizProgress').style.width = `${(this.index / QUIZ_CORRECT.length) * 100}%`;
    const questionEl = $('#quizQuestion');
    questionEl.textContent = q.question;
    if (animate) {
      questionEl.style.animation = 'none';
      void questionEl.offsetWidth;
      questionEl.style.animation = '';
    }

    const letters = t('quiz.letters');
    $('#quizOptions').innerHTML = q.options.map((option, i) => `
      <button class="quiz-option${animate ? '' : ' no-anim'}" data-index="${i}" style="animation-delay:${i * 70}ms">
        <span class="opt-letter">${letters[i]}</span><span>${escapeHTML(option)}</span>
      </button>`).join('');
    $$('.quiz-option').forEach((button) => button.addEventListener('click', () => this.answer(Number(button.dataset.index))));

    if (this.answered) this.markOptions();
    else $('#quizFeedback').classList.add('hidden');
  },

  answer(choice) {
    if (this.answered) return;
    this.answered = true;
    this.lastChoice = choice;
    if (choice === QUIZ_CORRECT[this.index]) this.score += 1;
    $('#quizScore').textContent = this.score;
    this.markOptions();
  },

  markOptions() {
    const correct = QUIZ_CORRECT[this.index];
    const isRight = this.lastChoice === correct;
    $$('.quiz-option').forEach((button) => {
      const i = Number(button.dataset.index);
      button.disabled = true;
      button.classList.remove('is-correct', 'is-wrong', 'dim');
      if (i === correct) button.classList.add('is-correct');
      else if (i === this.lastChoice) button.classList.add('is-wrong');
      else button.classList.add('dim');
    });

    const feedback = $('#quizFeedback');
    feedback.classList.remove('hidden', 'ok', 'bad');
    feedback.classList.add(isRight ? 'ok' : 'bad');
    $('#quizExplain').innerHTML = `<strong>${escapeHTML(isRight ? t('quiz.yes') : t('quiz.no'))}</strong> ${escapeHTML(this.questions()[this.index].explain)}`;
    $('#quizNext').innerHTML = this.index === QUIZ_CORRECT.length - 1
      ? `${escapeHTML(t('quiz.showResult'))}<i data-lucide="flag"></i>`
      : `${escapeHTML(t('quiz.next'))}<i data-lucide="arrow-right"></i>`;
    refreshIcons();
  },

  next() {
    if (this.index < QUIZ_CORRECT.length - 1) {
      this.index += 1;
      this.render();
    } else {
      this.finish();
    }
  },

  finish() {
    this.state = 'result';
    $('#quizProgress').style.width = '100%';
    $('#quizPlay').classList.add('hidden');
    $('#quizResult').classList.remove('hidden');

    const total = QUIZ_CORRECT.length;
    const percent = Math.round((this.score / total) * 100);
    storage.set('cf-quiz-best', Math.max(storage.get('cf-quiz-best', 0), percent));
    this.renderResult(false);
    showToast(t('quiz.done'), t('quiz.doneText', { r: this.score, t: total, p: percent }), percent >= 70 ? 'success' : 'info');
  },

  renderResult(instant) {
    const total = QUIZ_CORRECT.length;
    const percent = Math.round((this.score / total) * 100);
    animateRing($('#quizRing'), $('#quizPercent'), percent, instant);
    $('#quizRight').textContent = this.score;
    $('#quizWrong').textContent = total - this.score;
    $('#quizBest').textContent = `${storage.get('cf-quiz-best', percent)}%`;

    let key = 'quiz.r0';
    if (percent >= 90) key = 'quiz.r90';
    else if (percent >= 70) key = 'quiz.r70';
    else if (percent >= 40) key = 'quiz.r40';
    $('#quizResultTitle').textContent = t(key);
    $('#quizResultText').textContent = t(`${key}t`);
  },

  refresh() {
    if (this.state === 'play') this.render(false);
    else if (this.state === 'result') this.renderResult(true);
  }
};

/* ---------- Вкладки (колледж, өтініш) ---------- */
function initTabs() {
  $$('[role="tablist"]').forEach((list) => {
    const tabs = $$('.tab', list);
    const panels = tabs.map((tab) => $(`#tab-${tab.dataset.tab}`)).filter(Boolean);
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((other) => {
          other.classList.remove('active');
          other.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        panels.forEach((panel) => panel.classList.remove('active'));
        $(`#tab-${tab.dataset.tab}`).classList.add('active');
      });
    });
  });
}

/* ---------- 8. Основные понятия ---------- */
const CONCEPT_META = [
  { icon: 'scale', gradient: 'linear-gradient(135deg,#22d3ee,#3b82f6)' },
  { icon: 'banknote', gradient: 'linear-gradient(135deg,#f87171,#f59e0b)' },
  { icon: 'git-compare-arrows', gradient: 'linear-gradient(135deg,#a78bfa,#6366f1)' },
  { icon: 'user-round-check', gradient: 'linear-gradient(135deg,#2dd4bf,#0ea5e9)' },
  { icon: 'undo-2', gradient: 'linear-gradient(135deg,#fbbf24,#f97316)' }
];

const concepts = {
  init() {
    this.render();
    i18n.onChange(() => this.render());
  },

  render() {
    const grid = $('#conceptGrid');
    const texts = i18n.d().concepts;
    grid.innerHTML = CONCEPT_META.map((meta, i) => `
      <button class="concept-card" data-index="${i}">
        <div class="concept-icon" style="background:${meta.gradient}"><i data-lucide="${meta.icon}"></i></div>
        <h3>${escapeHTML(texts[i].title)}</h3>
        <p>${escapeHTML(texts[i].short)}</p>
        <span class="concept-more">${escapeHTML(t('concepts.more'))}<i data-lucide="arrow-right"></i></span>
      </button>`).join('');
    refreshIcons();

    $$('.concept-card', grid).forEach((card) => {
      card.addEventListener('click', () => this.open(Number(card.dataset.index)));
    });
  },

  open(index) {
    const meta = CONCEPT_META[index];
    const c = i18n.d().concepts[index];
    modal.open(`
      <div class="modal-hero">
        <div class="concept-icon" style="background:${meta.gradient}"><i data-lucide="${meta.icon}"></i></div>
        <div><h2 id="modalTitle">${escapeHTML(c.title)}</h2><small>${escapeHTML(c.short)}</small></div>
      </div>
      <div class="modal-section"><h4><i data-lucide="book-open"></i>${escapeHTML(t('concepts.what'))}</h4><p>${escapeHTML(c.definition)}</p></div>
      <div class="modal-section"><h4><i data-lucide="lightbulb"></i>${escapeHTML(t('concepts.examples'))}</h4>
        <ul class="example-list">${c.examples.map((e) => `<li>${e}</li>`).join('')}</ul>
      </div>
      <div class="modal-section"><h4><i data-lucide="triangle-alert"></i>${escapeHTML(t('concepts.why'))}</h4><p>${escapeHTML(c.harm)}</p></div>
      <div class="law-note"><b>${escapeHTML(t('concepts.law'))}</b> ${escapeHTML(c.law)} ${escapeHTML(t('concepts.lawsAt'))} <a href="https://adilet.zan.kz" target="_blank" rel="noopener">adilet.zan.kz</a>.</div>
    `);
  }
};

/* ---------- 9. Комикс «Зачёт за конверт?» ---------- */
const comic = {
  page: null,
  panels: [],
  current: 0,
  readerOpen: false,
  ACCENTS: { red: '#D7263D', blue: '#2B59C3', teal: '#1B998B', ink: '#141414' },

  init() {
    this.page = $('#comicPage');
    this.panels = $$('.comic-panel', this.page);
    this.panels.forEach((panel, index) => {
      panel.addEventListener('click', () => this.openReader(index));
    });
    $('#comicRead').addEventListener('click', () => this.openReader(0));

    const savedAccent = storage.get('cf-comic-accent', 'red');
    this.setAccent(this.ACCENTS[savedAccent] ? savedAccent : 'red', false);
    $$('.accent-dot').forEach((dot) => {
      dot.addEventListener('click', () => this.setAccent(dot.dataset.accent, true));
    });

    document.addEventListener('keydown', (event) => {
      if (!this.readerOpen) return;
      if (event.key === 'ArrowRight') this.go(this.current + 1);
      if (event.key === 'ArrowLeft') this.go(this.current - 1);
    });

    i18n.onChange(() => {
      if (this.readerOpen) this.renderReader(false);
    });
  },

  setAccent(name, notify) {
    this.page.dataset.accent = name;
    this.page.style.setProperty('--comic-accent', this.ACCENTS[name]);
    $$('.accent-dot').forEach((dot) => {
      const active = dot.dataset.accent === name;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
    storage.set('cf-comic-accent', name);
    if (notify) showToast(t('comic.accentSaved'), '', 'info', 1800);
  },

  openReader(index) {
    this.current = index;
    this.readerOpen = true;
    this.renderReader(true);
  },

  /** Кадр в просмотрщике — копия кадра со страницы, поэтому язык всегда совпадает */
  renderReader(first) {
    const total = this.panels.length;
    const panel = this.panels[this.current];
    const isLast = this.current === total - 1;
    const html = `
      <div class="comic-reader">
        <div class="reader-head">
          <h2 id="modalTitle">${escapeHTML($('.comic-title', this.page).textContent)}</h2>
          <span class="reader-count">${escapeHTML(t('comic.frame', { n: this.current + 1, t: total }))}</span>
        </div>
        <div class="reader-stage">
          <div class="comic-panel reader-panel" style="${panel.getAttribute('style')}">${panel.innerHTML}</div>
        </div>
        <div class="reader-dots">${this.panels.map((_, i) => `<button class="reader-dot${i === this.current ? ' active' : ''}" data-go="${i}" aria-label="${escapeHTML(t('comic.frame', { n: i + 1, t: total }))}"></button>`).join('')}</div>
        <div class="reader-nav">
          <button class="btn btn-ghost" id="readerPrev" ${this.current === 0 ? 'disabled' : ''}><i data-lucide="arrow-left"></i><span>${escapeHTML(t('comic.prev'))}</span></button>
          ${isLast
            ? `<button class="btn btn-primary" id="readerRestart"><i data-lucide="rotate-ccw"></i><span>${escapeHTML(t('comic.restart'))}</span></button>`
            : `<button class="btn btn-primary" id="readerNext"><span>${escapeHTML(t('comic.next'))}</span><i data-lucide="arrow-right"></i></button>`}
        </div>
        <p class="reader-hint">${escapeHTML(isLast ? t('comic.end') : t('comic.readerSub'))}</p>
      </div>`;
    modal.open(html, { wide: true, keepFocus: !first, onClose: () => { this.readerOpen = false; } });
    this.readerOpen = true;

    const prev = $('#readerPrev');
    const next = $('#readerNext');
    const restart = $('#readerRestart');
    if (prev) prev.addEventListener('click', () => this.go(this.current - 1));
    if (next) next.addEventListener('click', () => this.go(this.current + 1));
    if (restart) restart.addEventListener('click', () => this.go(0));
    $$('.reader-dot').forEach((dot) => dot.addEventListener('click', () => this.go(Number(dot.dataset.go))));
    const focusTarget = next || restart;
    if (focusTarget && !first) focusTarget.focus();
  },

  go(index) {
    if (index < 0 || index >= this.panels.length) return;
    this.current = index;
    this.renderReader(false);
  }
};

/* ---------- 9б. Видеоролик ---------- */
/* Начало каждой главы в секундах — по сменам сцен в ролике. Тексты глав — в разделе «Переводы» (data.*.video). */
const VIDEO_CHAPTERS = [0, 16, 25, 34];

/* iPhone, iPad и Safari проигрывают MP4, только если сервер отдаёт файл частями (HTTP Range, ответ 206).
   Если сервер так не умеет, видео загружается целиком и проигрывается из памяти (blob). */
const IS_APPLE_WEBKIT = (() => {
  const ua = navigator.userAgent || '';
  const iOS = /iP(hone|ad|od)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const safari = /Safari\//.test(ua) && !/(Chrome|Chromium|CriOS|FxiOS|EdgiOS|Edg|OPR|Android)/.test(ua);
  return iOS || safari || window.__forceAppleVideo === true;
})();

const promo = {
  video: null,
  frame: null,
  started: false,
  failed: false,
  probing: false,
  pendingError: false,
  appleChecked: false,
  loadingPct: null,

  init() {
    this.video = $('#promoVideo');
    this.frame = $('#videoFrame');
    if (!this.video) return;
    const v = this.video;

    $('#videoPlay').addEventListener('click', () => this.play());
    v.addEventListener('click', () => this.toggle());
    $('#vcToggle').addEventListener('click', () => this.toggle());
    $('#vcMute').addEventListener('click', () => { v.muted = !v.muted; });
    $('#vcFull').addEventListener('click', () => this.fullscreen());
    ['play', 'pause', 'ended', 'volumechange', 'loadedmetadata'].forEach((name) => v.addEventListener(name, () => this.sync()));
    v.addEventListener('timeupdate', () => this.progress());
    v.addEventListener('loadedmetadata', () => this.renderMarkers());
    document.addEventListener('fullscreenchange', () => this.sync());

    /* Перемотка: перетаскивание по полосе и стрелки на клавиатуре */
    const track = $('#vcTrack');
    const seekTo = (clientX) => {
      const rect = track.getBoundingClientRect();
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      v.currentTime = ratio * this.duration();
      this.progress();
    };
    track.addEventListener('pointerdown', (event) => {
      track.setPointerCapture(event.pointerId);
      seekTo(event.clientX);
      const move = (e) => seekTo(e.clientX);
      const up = () => {
        track.removeEventListener('pointermove', move);
        track.removeEventListener('pointerup', up);
      };
      track.addEventListener('pointermove', move);
      track.addEventListener('pointerup', up);
    });
    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') v.currentTime = Math.min(this.duration(), v.currentTime + 5);
      else if (event.key === 'ArrowLeft') v.currentTime = Math.max(0, v.currentTime - 5);
      else return;
      event.preventDefault();
      this.progress();
    });

    /* Если файл видео не найден — понятное сообщение вместо пустого плеера */
    const fail = () => this.showError();
    v.addEventListener('error', fail);
    const source = $('source', v);
    if (source) source.addEventListener('error', fail);

    /* Для iPhone/Safari заранее проверяем, умеет ли сервер отдавать видео частями */
    if (IS_APPLE_WEBKIT) {
      if ('IntersectionObserver' in window) {
        const near = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            near.disconnect();
            this.prepareApple();
          }
        }, { rootMargin: '1500px 0px' });
        near.observe(this.frame);
      } else {
        this.prepareApple();
      }
    }

    /* Ролик ставится на паузу, когда его прокрутили за пределы экрана */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !v.paused) v.pause();
        });
      }, { threshold: 0.2 }).observe(this.frame);
    }

    this.renderChapters();
    this.sync();
    i18n.onChange(() => {
      this.renderChapters();
      this.sync();
    });
  },

  duration() {
    const d = this.video.duration;
    return Number.isFinite(d) && d > 0 ? d : 44.7;
  },

  fmt(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  },

  /** Проверка Range-запроса; без поддержки 206 — загрузка ролика целиком и проигрывание из памяти */
  async prepareApple() {
    if (this.appleChecked) return;
    this.appleChecked = true;
    const source = $('source', this.video);
    if (!source || !window.fetch) return;
    this.probing = true;
    try {
      const ctl = new AbortController();
      const res = await fetch(source.src, { headers: { Range: 'bytes=0-1' }, signal: ctl.signal });
      if (res.status === 206) {
        ctl.abort();
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      this.frame.classList.add('is-loading');
      this.setLoading(0);
      const total = Number(res.headers.get('Content-Length')) || 0;
      let blob;
      if (res.body && typeof res.body.getReader === 'function' && total) {
        const reader = res.body.getReader();
        const chunks = [];
        let received = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          received += value.length;
          this.setLoading(Math.min(99, Math.round((received / total) * 100)));
        }
        blob = new Blob(chunks, { type: 'video/mp4' });
      } else {
        blob = new Blob([await res.blob()], { type: 'video/mp4' });
      }

      source.remove();
      this.video.src = URL.createObjectURL(blob);
      this.video.load();
      this.failed = false;
      this.pendingError = false;
      $('#videoError').classList.add('hidden');
      $('#videoControls').classList.remove('hidden');
    } catch (error) {
      /* Не получилось — остаётся обычная загрузка */
    } finally {
      this.probing = false;
      this.loadingPct = null;
      this.frame.classList.remove('is-loading');
      if (this.pendingError) {
        this.pendingError = false;
        this.showError();
      }
      this.sync();
    }
  },

  setLoading(percent) {
    this.loadingPct = percent;
    const label = t('video.loading', { p: percent });
    $('.video-play-label', $('#videoPlay')).textContent = label;
    $('#videoPlay').setAttribute('aria-label', label);
  },

  play() {
    if (this.failed || this.probing) return;
    const promise = this.video.play();
    if (promise && typeof promise.catch === 'function') promise.catch(() => {});
  },

  toggle() {
    if (this.video.paused || this.video.ended) this.play();
    else this.video.pause();
  },

  goChapter(index) {
    this.video.currentTime = VIDEO_CHAPTERS[index];
    this.started = true;
    this.play();
    this.progress();
    if (window.innerWidth < 1025) this.frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  currentChapter() {
    const time = this.video.currentTime;
    let index = 0;
    VIDEO_CHAPTERS.forEach((start, i) => {
      if (time >= start - 0.05) index = i;
    });
    return index;
  },

  renderChapters() {
    const items = i18n.d().video;
    $('#chapterList').innerHTML = items.map((chapter, i) => `
      <li>
        <button class="chapter" data-index="${i}" aria-label="${escapeHTML(t('video.goto', { time: this.fmt(VIDEO_CHAPTERS[i]), title: chapter.title }))}">
          <span class="chapter-time">${this.fmt(VIDEO_CHAPTERS[i])}</span>
          <span class="chapter-body"><strong>${escapeHTML(chapter.title)}</strong><small>${escapeHTML(chapter.text)}</small></span>
          <span class="chapter-bar"><i></i></span>
        </button>
      </li>`).join('');
    $$('.chapter').forEach((button) => {
      button.addEventListener('click', () => this.goChapter(Number(button.dataset.index)));
    });
    this.renderMarkers();
    this.progress();
  },

  /** Отметки глав на полосе перемотки */
  renderMarkers() {
    $('#vcChapters').innerHTML = VIDEO_CHAPTERS.slice(1)
      .map((start) => `<i style="left:${(start / this.duration()) * 100}%"></i>`).join('');
  },

  progress() {
    const v = this.video;
    const total = this.duration();
    const now = v.currentTime || 0;
    const percent = (now / total) * 100;
    $('#vcFill').style.width = `${percent}%`;
    const track = $('#vcTrack');
    track.setAttribute('aria-valuenow', String(Math.round(percent)));
    track.setAttribute('aria-valuetext', `${this.fmt(now)} / ${this.fmt(total)}`);
    $('#vcTime').textContent = `${this.fmt(now)} / ${this.fmt(total)}`;

    const current = this.started ? this.currentChapter() : -1;
    $$('.chapter').forEach((button, i) => {
      const start = VIDEO_CHAPTERS[i];
      const end = VIDEO_CHAPTERS[i + 1] || total;
      const ratio = this.started ? Math.min(Math.max((now - start) / (end - start), 0), 1) : 0;
      button.classList.toggle('active', i === current);
      $('.chapter-bar i', button).style.width = `${ratio * 100}%`;
    });
  },

  sync() {
    const v = this.video;
    if (!v.paused) this.started = true;
    this.frame.classList.toggle('is-playing', !v.paused && !v.ended);
    this.frame.classList.toggle('is-started', this.started);
    this.frame.classList.toggle('is-muted', v.muted);

    const overlay = $('#videoPlay');
    overlay.classList.toggle('hidden', this.failed || (this.started && !v.ended));
    if (this.loadingPct !== null) {
      this.setLoading(this.loadingPct);
    } else {
      const label = v.ended ? t('video.replay') : t('video.play');
      $('.video-play-label', overlay).textContent = label;
      overlay.setAttribute('aria-label', label);
    }
    $('#vcToggle').setAttribute('aria-label', v.paused ? t('video.resume') : t('video.pause'));
    $('#vcMute').setAttribute('aria-label', v.muted ? t('video.unmute') : t('video.mute'));
    $('#vcFull').setAttribute('aria-label', t('video.full'));
    this.progress();
  },

  fullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    if (this.frame.requestFullscreen) {
      this.frame.requestFullscreen().catch(() => {});
    } else if (this.video.webkitEnterFullscreen) {
      this.video.webkitEnterFullscreen(); /* iPhone */
    }
  },

  showError() {
    if (this.probing) {
      this.pendingError = true;
      return;
    }
    if (this.failed) return;
    this.failed = true;
    $('#videoError').classList.remove('hidden');
    $('#videoControls').classList.add('hidden');
    $('#videoPlay').classList.add('hidden');
    console.warn('Видео не найдено: положите anticorruption-video.mp4 рядом с index.html.');
  }
};

/* ---------- 10. Что делать, если… ---------- */
const HELP_META = [
  { id: 'education', icon: 'school', links: [{ href: 'tel:1424', icon: 'phone-call' }, { href: 'https://eotinish.kz', icon: 'send' }] },
  { id: 'medicine', icon: 'hospital', links: [{ href: 'tel:1424', icon: 'phone-call' }, { href: 'tel:1414', icon: 'headphones' }, { href: 'https://fms.kz', icon: 'stethoscope' }] },
  { id: 'government', icon: 'landmark', links: [{ href: 'tel:1424', icon: 'phone-call' }, { href: 'tel:115', icon: 'landmark' }, { href: 'https://egov.kz/cms/ru/information/state_agencies/telefoni_doveriya', icon: 'book-user' }] }
];

const helpSection = {
  current: 0,
  done: {},

  init() {
    this.renderTabs();
    this.render();
    i18n.onChange(() => {
      this.renderTabs();
      this.render(false);
    });
  },

  renderTabs() {
    const tabs = $('#situationTabs');
    const texts = i18n.d().help;
    tabs.innerHTML = HELP_META.map((meta, i) => `
      <button class="sit-tab${i === this.current ? ' active' : ''}" data-index="${i}">
        <span class="sit-icon"><i data-lucide="${meta.icon}"></i></span>
        <span><strong>${escapeHTML(texts[i].title)}</strong><small>${escapeHTML(texts[i].subtitle)}</small></span>
      </button>`).join('');
    refreshIcons();
    $$('.sit-tab', tabs).forEach((tab) => {
      tab.addEventListener('click', () => {
        $$('.sit-tab', tabs).forEach((other) => other.classList.remove('active'));
        tab.classList.add('active');
        this.current = Number(tab.dataset.index);
        this.render();
      });
    });
  },

  render(animate = true) {
    const meta = HELP_META[this.current];
    const s = i18n.d().help[this.current];
    const done = this.done[meta.id] || [];
    const wrap = $('#stepsWrap');
    wrap.innerHTML = `
      <div class="steps-head">
        <div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.intro)}</p></div>
        <span class="steps-progress">${escapeHTML(t('help.progress', { d: done.length, n: s.steps.length }))}</span>
      </div>
      <div class="steps-layout">
        <ol class="steps">
          ${s.steps.map((step, i) => `
            <li class="step${done.includes(i) ? ' done' : ''}${animate ? '' : ' no-anim'}" style="animation-delay:${i * 90}ms" data-index="${i}">
              <button class="step-dot" aria-label="${escapeHTML(t('help.stepAria', { n: i + 1 }))}">${done.includes(i) ? '<i data-lucide="check"></i>' : i + 1}</button>
              <div class="step-body">
                <h4>${escapeHTML(step.title)}</h4>
                <p>${escapeHTML(step.text)}</p>
                <button class="step-check"><i data-lucide="${done.includes(i) ? 'circle-check' : 'circle'}"></i>${escapeHTML(done.includes(i) ? t('help.marked') : t('help.mark'))}</button>
              </div>
            </li>`).join('')}
        </ol>
        <aside class="tips-box">
          <h4><i data-lucide="lightbulb"></i>${escapeHTML(t('help.tips'))}</h4>
          <ul>${s.tips.map((tip) => `<li><i data-lucide="check"></i><span>${escapeHTML(tip)}</span></li>`).join('')}</ul>
          <div class="where">
            ${meta.links.map((link, i) => `<a href="${link.href}"${link.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><i data-lucide="${link.icon}"></i>${escapeHTML(s.links[i])}</a>`).join('')}
          </div>
          <div class="warn-line"><i data-lucide="shield-alert"></i><span>${escapeHTML(t('help.warn'))}</span></div>
        </aside>
      </div>`;
    refreshIcons();

    $$('.step', wrap).forEach((stepEl) => {
      const toggle = () => this.toggleStep(Number(stepEl.dataset.index));
      $('.step-dot', stepEl).addEventListener('click', toggle);
      $('.step-check', stepEl).addEventListener('click', toggle);
    });
  },

  toggleStep(index) {
    const meta = HELP_META[this.current];
    const list = this.done[meta.id] || [];
    this.done[meta.id] = list.includes(index) ? list.filter((i) => i !== index) : list.concat(index);
    this.render(false);
    const total = i18n.d().help[this.current].steps.length;
    if (this.done[meta.id].length === total) {
      showToast(t('help.allDone'), t('help.allDoneText'), 'success');
    }
  }
};

/* ---------- 10б. Мастер «Өтініш» ---------- */
/* Тексты шагов — в разделе «Переводы» (data.*.wizard), шаблоны документа — I18N.docs (ru / kk).
   Сохранённые обращения хранятся только в браузере этого устройства. */
const WIZ_TYPE_ICONS = { appeal: 'mail', complaint: 'file-warning', proposal: 'lightbulb', request: 'file-search', corruption: 'shield-alert' };
const WIZ_TARGET_ICONS = { college: 'graduation-cap', edu: 'school', anticor: 'shield', prosecutor: 'scale', akimat: 'building-2', other: 'pencil' };

/** Прибавить n рабочих дней (без суббот и воскресений; праздники не учитываются) */
function addWorkingDays(date, n) {
  const d = new Date(date);
  let added = 0;
  while (added < n) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return d;
}

/** Сколько рабочих дней осталось до даты: -1 — срок прошёл, 0 — сегодня */
function workingDaysLeft(deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(deadline);
  end.setHours(0, 0, 0, 0);
  if (end < today) return -1;
  let n = 0;
  const d = new Date(today);
  while (d < end) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) n += 1;
  }
  return n;
}

/** Текст из словаря разметки (русский берётся из HTML) */
function uiText(key) {
  return i18n.ui(key, i18n.ruText.get(key));
}

const wizard = {
  step: 0,
  state: { type: '', target: '', other: '', subject: '', details: '', date: '', place: '', attach: false, name: '', contact: '', address: '', docLang: 'ru' },
  appeals: [],
  confirmId: null,
  savedText: '',

  init() {
    const saved = storage.get('cf-appeals', []);
    this.appeals = Array.isArray(saved) ? saved : [];
    const draft = storage.get('cf-appeal-draft', null);
    if (draft && typeof draft === 'object') {
      Object.keys(this.state).forEach((key) => {
        if (draft[key] !== undefined) this.state[key] = draft[key];
      });
    } else {
      this.state.docLang = i18n.lang === 'kk' ? 'kk' : 'ru';
    }
    $('#wizBack').addEventListener('click', () => this.go(this.step - 1));
    $('#wizNext').addEventListener('click', () => this.next());
    this.render(false);
    this.renderList();
    i18n.onChange(() => {
      this.render(false);
      this.renderList();
    });
  },

  data() {
    return i18n.d().wizard;
  },

  typeInfo(id = this.state.type) {
    return this.data().types.find((x) => x.id === id);
  },

  targetLabel(id = this.state.target, other = this.state.other) {
    if (id === 'other') return other || '';
    const info = this.data().targets.find((x) => x.id === id);
    return info ? info.title : '';
  },

  saveDraft() {
    storage.set('cf-appeal-draft', this.state);
  },

  validate(step) {
    const s = this.state;
    const errors = {};
    if (step === 0 && !s.type) errors._ = 'wiz.errType';
    if (step === 1) {
      if (!s.target) errors._ = 'wiz.errTarget';
      else if (s.target === 'other' && !s.other.trim()) errors.other = 'wiz.errOther';
    }
    if (step === 2) {
      if (!s.subject.trim()) errors.subject = 'wiz.errSubject';
      if (s.details.trim().length < 30) errors.details = 'wiz.errDetails';
    }
    if (step === 3) {
      if (s.name.trim().length < 3) errors.name = 'wiz.errName';
      if (s.contact.trim().length < 5) errors.contact = 'wiz.errContact';
    }
    return errors;
  },

  next() {
    const errors = this.validate(this.step);
    if (Object.keys(errors).length) {
      this.showErrors(errors);
      return;
    }
    this.go(this.step + 1);
  },

  go(step) {
    if (step < 0 || step > 4) return;
    /* Перейти вперёд можно только через заполненные шаги */
    for (let i = this.step; i < step; i += 1) {
      const errors = this.validate(i);
      if (Object.keys(errors).length) {
        this.step = i;
        this.render();
        this.showErrors(errors);
        return;
      }
    }
    this.step = step;
    this.render();
    this.saveDraft();
    const box = $('#tplWizard .wizard');
    if (box && box.getBoundingClientRect().top < 0) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  showErrors(errors) {
    if (errors._) {
      showToast(t(errors._), '', 'error');
      return;
    }
    Object.keys(errors).forEach((field) => {
      const el = $(`[data-wiz="${field}"]`);
      if (el) setFieldError(el, t(errors[field]));
    });
    showToast(t('wiz.check'), '', 'error');
    const first = $('#wizBody .invalid input, #wizBody .invalid textarea');
    if (first) first.focus();
  },

  option(group, item, icon) {
    const selected = this.state[group] === item.id;
    const days = group === 'type' ? `<span class="opt-days">${escapeHTML(t('wiz.daysNote', { days: item.days }))}</span>` : '';
    return `
      <button type="button" class="opt${selected ? ' selected' : ''}" data-pick="${group}" data-value="${item.id}" aria-pressed="${selected}">
        <span class="opt-icon"><i data-lucide="${icon}"></i></span>
        <span class="opt-text"><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.hint)}</small>${days}</span>
        <span class="opt-check"><i data-lucide="check"></i></span>
      </button>`;
  },

  field(name, label, { type = 'text', placeholder = '', rows = 0, max = 200 } = {}) {
    const value = escapeHTML(this.state[name] || '');
    const control = rows
      ? `<textarea data-wiz="${name}" id="wiz-${name}" rows="${rows}" maxlength="${max}" placeholder="${escapeHTML(placeholder)}">${value}</textarea>`
      : `<input type="${type}" data-wiz="${name}" id="wiz-${name}" maxlength="${max}" placeholder="${escapeHTML(placeholder)}" value="${value}" />`;
    return `<label class="field"><span>${escapeHTML(label)}</span>${control}</label>`;
  },

  step0() {
    return `<h3 class="wiz-q">${escapeHTML(t('wiz.q1'))}</h3>
      <div class="opt-grid">${this.data().types.map((x) => this.option('type', x, WIZ_TYPE_ICONS[x.id])).join('')}</div>`;
  },

  step1() {
    const other = this.state.target === 'other'
      ? this.field('other', t('wiz.fOther'), { placeholder: t('wiz.phOther'), max: 160 })
      : '';
    return `<h3 class="wiz-q">${escapeHTML(t('wiz.q2'))}</h3>
      <div class="opt-grid">${this.data().targets.map((x) => this.option('target', x, WIZ_TARGET_ICONS[x.id])).join('')}</div>
      <div class="wiz-other">${other}</div>`;
  },

  step2() {
    return `<h3 class="wiz-q">${escapeHTML(t('wiz.q3'))}</h3>
      ${this.field('subject', t('wiz.fSubject'), { placeholder: t('wiz.phSubject'), max: 140 })}
      <label class="field"><span>${escapeHTML(t('wiz.fDetails'))}</span>
        <textarea data-wiz="details" id="wiz-details" rows="6" maxlength="3000" placeholder="${escapeHTML(t('wiz.phDetails'))}">${escapeHTML(this.state.details)}</textarea>
        <small class="char-count"><span id="wizCount">${this.state.details.length}</span>/3000</small>
      </label>
      <div class="form-row">
        ${this.field('date', t('wiz.fDate'), { type: 'date', max: 10 })}
        ${this.field('place', t('wiz.fPlace'), { placeholder: t('wiz.phPlace'), max: 160 })}
      </div>
      <label class="consent"><input type="checkbox" data-wiz="attach" id="wiz-attach" ${this.state.attach ? 'checked' : ''} /><span>${escapeHTML(t('wiz.fAttach'))}</span></label>`;
  },

  step3() {
    const lang = this.state.docLang;
    return `<h3 class="wiz-q">${escapeHTML(t('wiz.q4'))}</h3>
      <div class="alert alert-info"><i data-lucide="info"></i><p>${escapeHTML(t('wiz.loginNote'))}</p></div>
      ${this.field('name', t('wiz.fName'), { placeholder: t('wiz.phName'), max: 120 })}
      <div class="form-row">
        ${this.field('contact', t('wiz.fContact'), { placeholder: '+7 7__ ___ __ __', max: 120 })}
        ${this.field('address', t('wiz.fAddress'), { placeholder: t('wiz.phAddress'), max: 160 })}
      </div>
      <div class="field"><span>${escapeHTML(t('wiz.fLang'))}</span>
        <div class="seg" role="group">
          <button type="button" class="seg-btn${lang === 'kk' ? ' active' : ''}" data-pick="docLang" data-value="kk" aria-pressed="${lang === 'kk'}">${escapeHTML(t('wiz.langKk'))}</button>
          <button type="button" class="seg-btn${lang === 'ru' ? ' active' : ''}" data-pick="docLang" data-value="ru" aria-pressed="${lang === 'ru'}">${escapeHTML(t('wiz.langRu'))}</button>
        </div>
      </div>`;
  },

  step4() {
    const doc = this.docText();
    const type = this.typeInfo();
    const target = this.targetLabel();
    const saved = this.savedText === doc;
    return `<h3 class="wiz-q">${escapeHTML(t('wiz.q5'))}</h3>
      <div class="wiz-summary">
        <span class="meta-chip"><i data-lucide="${WIZ_TYPE_ICONS[this.state.type]}"></i>${escapeHTML(type ? type.title : '')}</span>
        <span class="meta-chip"><i data-lucide="${WIZ_TARGET_ICONS[this.state.target]}"></i>${escapeHTML(target)}</span>
        <span class="meta-chip"><i data-lucide="clock-3"></i>${escapeHTML(t('wiz.daysNote', { days: type ? type.days : 15 }))}</span>
      </div>
      <pre class="tpl-preview wiz-preview">${escapeHTML(doc)}</pre>
      <div class="wiz-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-do="copy"><i data-lucide="copy"></i><span>${escapeHTML(t('wiz.copy'))}</span></button>
        <button type="button" class="btn btn-sm btn-ghost" data-do="txt"><i data-lucide="file-down"></i><span>.TXT</span></button>
        <button type="button" class="btn btn-sm btn-ghost" data-do="save" ${saved ? 'disabled' : ''}><i data-lucide="${saved ? 'check' : 'bookmark-plus'}"></i><span>${escapeHTML(saved ? t('wiz.saved') : t('wiz.save'))}</span></button>
        <a class="btn btn-sm btn-primary" href="https://eotinish.kz" target="_blank" rel="noopener"><i data-lucide="external-link"></i><span>${escapeHTML(t('wiz.open'))}</span></a>
      </div>
      <div class="wiz-how">
        <h4>${escapeHTML(t('wiz.howTitle'))}</h4>
        <ol>
          <li>${escapeHTML(t('wiz.how1'))}</li>
          <li>${escapeHTML(t('wiz.how2', { target }))}</li>
          <li>${escapeHTML(t('wiz.how3'))}</li>
          <li>${escapeHTML(t('wiz.how4'))}</li>
        </ol>
        ${this.state.target === 'college' ? `<p class="source-note">${escapeHTML(t('wiz.collegeTip'))}</p>` : ''}
      </div>
      <button type="button" class="btn btn-ghost btn-sm wiz-restart" data-do="restart"><i data-lucide="rotate-ccw"></i><span>${escapeHTML(t('wiz.restart'))}</span></button>`;
  },

  /** Готовый текст обращения на выбранном языке документа (русский или казахский) */
  docText() {
    const s = this.state;
    const lang = s.docLang === 'kk' ? 'kk' : 'ru';
    const D = window.I18N.docs[lang];
    const L = D.labels;
    const to = s.target === 'other' ? s.other.trim() : D.to[s.target];
    const lines = [to, `${L.from} ${s.name.trim()}`, `${L.contact}: ${s.contact.trim()}`];
    if (s.address.trim()) lines.push(`${L.address}: ${s.address.trim()}`);
    lines.push('', D.heading[s.type] || '', `${L.subject}: ${s.subject.trim()}`, '', D.intro[s.type] || '', '');
    if (s.date) lines.push(`${L.date}: ${formatDate(`${s.date}T00:00`, lang)}`);
    if (s.place.trim()) lines.push(`${L.place}: ${s.place.trim()}`);
    if (s.date || s.place.trim()) lines.push('');
    lines.push(`${L.facts}: ${s.details.trim()}`, '', D.ask[s.type] || '');
    if (s.attach) lines.push('', L.attach);
    lines.push('', `${L.signDate}: ${formatDate(new Date(), lang)}                    ${L.sign}: ____________`);
    return lines.join('\n');
  },

  render(animate = true) {
    const steps = this.data().steps;
    $('#wizSteps').innerHTML = steps.map((label, i) => `
      <li class="wiz-step${i === this.step ? ' active' : ''}${i < this.step ? ' done' : ''}">
        <button type="button" data-step="${i}" ${i > this.step ? 'disabled' : ''} ${i === this.step ? 'aria-current="step"' : ''}>
          <span class="ws-num">${i < this.step ? '<i data-lucide="check"></i>' : i + 1}</span>
          <span class="ws-label">${escapeHTML(label)}</span>
        </button>
      </li>`).join('');
    $$('#wizSteps button').forEach((button) => button.addEventListener('click', () => this.go(Number(button.dataset.step))));

    const body = $('#wizBody');
    body.innerHTML = this[`step${this.step}`]();
    body.classList.remove('wiz-anim');
    if (animate) {
      void body.offsetWidth;
      body.classList.add('wiz-anim');
    }
    $('#wizBack').classList.toggle('hidden', this.step === 0);
    $('#wizNext').classList.toggle('hidden', this.step === 4);
    this.bind();
    refreshIcons();
  },

  bind() {
    $$('#wizBody [data-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        this.state[button.dataset.pick] = button.dataset.value;
        this.saveDraft();
        this.render(false);
        if (button.dataset.pick === 'target' && button.dataset.value === 'other') {
          const input = $('#wiz-other');
          if (input) input.focus();
        }
      });
    });
    $$('#wizBody [data-wiz]').forEach((el) => {
      const handler = () => {
        const name = el.dataset.wiz;
        this.state[name] = el.type === 'checkbox' ? el.checked : el.value;
        setFieldError(el, '');
        if (name === 'details') $('#wizCount').textContent = el.value.length;
        this.saveDraft();
      };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });
    $$('#wizBody [data-do]').forEach((button) => {
      button.addEventListener('click', () => this.action(button.dataset.do));
    });
  },

  fileName() {
    return `Otinish_${new Date().toISOString().slice(0, 10)}.txt`;
  },

  async action(name) {
    const doc = this.docText();
    if (name === 'copy') {
      const ok = await copyText(doc);
      if (ok) showToast(t('tpl.copied'), t('tpl.copiedText'), 'success');
      else showToast(t('tpl.copyFail'), t('tpl.copyFailText'), 'error');
    } else if (name === 'txt') {
      const ok = await downloadFile(this.fileName(), `﻿${doc.replace(/\n/g, '\r\n')}`, 'text/plain;charset=utf-8');
      if (ok) showToast(t('tpl.fileDone'), this.fileName(), 'success');
    } else if (name === 'save') {
      if (this.savedText === doc) return;
      this.appeals.unshift({
        id: Date.now().toString(36),
        created: new Date().toISOString(),
        type: this.state.type,
        target: this.state.target,
        other: this.state.other,
        subject: this.state.subject.trim(),
        text: doc,
        status: 'draft'
      });
      this.appeals = this.appeals.slice(0, 30);
      storage.set('cf-appeals', this.appeals);
      this.savedText = doc;
      this.render(false);
      this.renderList();
      showToast(t('wiz.toastSaved'), '', 'success');
    } else if (name === 'restart') {
      const keep = { name: this.state.name, contact: this.state.contact, address: this.state.address, docLang: this.state.docLang };
      this.state = { type: '', target: '', other: '', subject: '', details: '', date: '', place: '', attach: false, ...keep };
      this.savedText = '';
      this.step = 0;
      this.saveDraft();
      this.render();
    }
  },

  renderList() {
    const box = $('#myAppeals');
    if (!this.appeals.length) {
      box.innerHTML = `<div class="ma-empty"><div class="empty-icon"><i data-lucide="inbox"></i></div><p>${escapeHTML(t('wiz.myEmpty'))}</p></div>`;
      refreshIcons();
      return;
    }
    box.innerHTML = this.appeals.map((item) => {
      const type = this.typeInfo(item.type);
      const sent = item.status === 'sent';
      let deadline = '';
      if (sent && item.deadline) {
        const left = workingDaysLeft(item.deadline);
        const date = formatDate(item.deadline);
        let text;
        let cls = 'ok';
        if (left < 0) { text = t('wiz.overdue'); cls = 'late'; }
        else if (left === 0) { text = `${t('wiz.deadline', { date })} · ${t('wiz.today')}`; cls = 'soon'; }
        else { text = `${t('wiz.deadline', { date })} · ${t('wiz.left', { n: left })}`; if (left <= 3) cls = 'soon'; }
        deadline = `<div class="ma-deadline ${cls}"><i data-lucide="calendar-clock"></i><span>${escapeHTML(text)}</span></div>`;
      }
      const confirming = this.confirmId === item.id;
      return `
        <article class="ma-item">
          <div class="ma-top">
            <span class="status-chip ${sent ? 'sent' : 'draft'}">${escapeHTML(sent ? t('wiz.sent') : t('wiz.draft'))}</span>
            <small>${escapeHTML(t('wiz.created', { date: formatDate(item.created) }))}</small>
          </div>
          <strong class="ma-subject">${escapeHTML(item.subject)}</strong>
          <small class="ma-meta">${escapeHTML(type ? type.title : '')} · ${escapeHTML(this.targetLabel(item.target, item.other))}</small>
          ${deadline}
          <div class="ma-actions">
            ${sent ? '' : `<button type="button" class="btn btn-sm btn-primary" data-ma="sent" data-id="${item.id}"><i data-lucide="send"></i><span>${escapeHTML(t('wiz.markSent'))}</span></button>`}
            <button type="button" class="btn btn-sm btn-ghost" data-ma="view" data-id="${item.id}"><i data-lucide="eye"></i><span>${escapeHTML(t('wiz.view'))}</span></button>
            <button type="button" class="btn btn-sm btn-ghost btn-danger${confirming ? ' confirming' : ''}" data-ma="del" data-id="${item.id}"><i data-lucide="trash-2"></i><span>${escapeHTML(confirming ? t('wiz.delConfirm') : t('wiz.del'))}</span></button>
          </div>
        </article>`;
    }).join('');
    refreshIcons();
    $$('#myAppeals [data-ma]').forEach((button) => {
      button.addEventListener('click', () => this.listAction(button.dataset.ma, button.dataset.id));
    });
  },

  listAction(action, id) {
    const item = this.appeals.find((x) => x.id === id);
    if (!item) return;
    if (action === 'sent') {
      const type = this.typeInfo(item.type);
      item.status = 'sent';
      item.sentAt = new Date().toISOString();
      item.deadline = addWorkingDays(new Date(), type ? type.days : 15).toISOString();
      storage.set('cf-appeals', this.appeals);
      this.renderList();
      showToast(t('wiz.toastSent'), '', 'success');
    } else if (action === 'view') {
      modal.open(`
        <div class="modal-hero">
          <div class="concept-icon" style="background:var(--grad-main)"><i data-lucide="file-pen-line"></i></div>
          <div><h2 id="modalTitle">${escapeHTML(item.subject)}</h2><small>${escapeHTML(this.targetLabel(item.target, item.other))}</small></div>
        </div>
        <pre class="tpl-preview">${escapeHTML(item.text)}</pre>
        <div class="tpl-actions" style="margin-top:18px">
          <button class="btn btn-sm btn-primary" id="maCopy"><i data-lucide="copy"></i><span>${escapeHTML(t('wiz.copy'))}</span></button>
        </div>`);
      $('#maCopy').addEventListener('click', async () => {
        const ok = await copyText(item.text);
        if (ok) showToast(t('tpl.copied'), t('tpl.copiedText'), 'success');
        else showToast(t('tpl.copyFail'), t('tpl.copyFailText'), 'error');
      });
    } else if (action === 'del') {
      /* Удаление в два нажатия: диалоги confirm() на опубликованной странице не работают */
      if (this.confirmId !== id) {
        this.confirmId = id;
        this.renderList();
        clearTimeout(this.confirmTimer);
        this.confirmTimer = setTimeout(() => { this.confirmId = null; this.renderList(); }, 4000);
        return;
      }
      clearTimeout(this.confirmTimer);
      this.confirmId = null;
      this.appeals = this.appeals.filter((x) => x.id !== id);
      storage.set('cf-appeals', this.appeals);
      this.renderList();
      showToast(t('wiz.toastDeleted'), '', 'info');
    }
  }
};

/* ---------- 10в. Сообщение с фото ---------- */
/** Какие метаданные есть в JPEG: геолокация, модель телефона, дата съёмки */
async function readExifFlags(file) {
  const flags = { gps: false, device: false, time: false };
  const isJpeg = /jpe?g$/i.test(file.type) || /\.jpe?g$/i.test(file.name);
  if (!isJpeg) return flags;
  const v = new DataView(await file.slice(0, 256 * 1024).arrayBuffer());
  if (v.byteLength < 4 || v.getUint16(0) !== 0xFFD8) return flags;
  let off = 2;
  while (off + 4 <= v.byteLength) {
    const marker = v.getUint16(off);
    if ((marker & 0xFF00) !== 0xFF00) break;
    const len = v.getUint16(off + 2);
    if (marker === 0xFFE1 && off + 10 <= v.byteLength && v.getUint32(off + 4) === 0x45786966) {
      const tiff = off + 10;
      if (tiff + 8 > v.byteLength) break;
      const little = v.getUint16(tiff) === 0x4949;
      const u16 = (p) => v.getUint16(p, little);
      const u32 = (p) => v.getUint32(p, little);
      const readIfd = (start, visit) => {
        if (start + 2 > v.byteLength) return;
        const count = u16(start);
        for (let i = 0; i < count; i += 1) {
          const entry = start + 2 + i * 12;
          if (entry + 12 > v.byteLength) break;
          visit(u16(entry), entry);
        }
      };
      readIfd(tiff + u32(tiff + 4), (tag, entry) => {
        if (tag === 0x010F || tag === 0x0110) flags.device = true;
        if (tag === 0x0132) flags.time = true;
        if (tag === 0x8825) {
          const gps = tiff + u32(entry + 8);
          if (gps + 2 <= v.byteLength && u16(gps) > 0) flags.gps = true;
        }
        if (tag === 0x8769) {
          readIfd(tiff + u32(entry + 8), (sub) => {
            if (sub === 0x9003 || sub === 0x9004) flags.time = true;
          });
        }
      });
      break;
    }
    off += 2 + len;
  }
  return flags;
}

/** Пересохранение фото через canvas: в новый файл попадают только пиксели, без метаданных */
function cleanImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const max = 1920;
      const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const w = Math.round(img.naturalWidth * k);
      const h = Math.round(img.naturalHeight * k);
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('toBlob'))), 'image/jpeg', 0.88);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('decode'));
    };
    img.src = url;
  });
}

function formatKb(bytes) {
  return bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

const report = {
  photos: [],

  init() {
    const input = $('#repPhotos');
    const zone = $('#dropzone');
    input.addEventListener('change', () => {
      this.addFiles(input.files);
      input.value = '';
    });
    ['dragenter', 'dragover'].forEach((name) => zone.addEventListener(name, (event) => {
      event.preventDefault();
      zone.classList.add('drag');
    }));
    ['dragleave', 'drop'].forEach((name) => zone.addEventListener(name, (event) => {
      event.preventDefault();
      zone.classList.remove('drag');
    }));
    zone.addEventListener('drop', (event) => this.addFiles(event.dataTransfer.files));

    const draft = storage.get('cf-report-draft', {});
    ['where', 'when', 'what'].forEach((name) => {
      const el = $(`#rep${name[0].toUpperCase()}${name.slice(1)}`);
      if (draft && typeof draft[name] === 'string') el.value = draft[name];
      el.addEventListener('input', () => {
        if (name === 'what') {
          $('#repCount').textContent = el.value.length;
          if (el.value.trim().length >= 20) setFieldError(el, '');
        }
        storage.set('cf-report-draft', { where: $('#repWhere').value, when: $('#repWhen').value, what: $('#repWhat').value });
        this.updateLink();
      });
    });
    $('#repCount').textContent = $('#repWhat').value.length;
    $('#reportForm').addEventListener('submit', (event) => event.preventDefault());
    $('#repCopy').addEventListener('click', () => this.copy());
    $('#repSave').addEventListener('click', () => this.savePhotos());
    this.updateLink();
    this.renderPhotos();
    i18n.onChange(() => {
      this.renderPhotos();
      this.updateLink();
      clearFormErrors($('#reportForm'));
    });
  },

  ready() {
    return this.photos.filter((p) => p.status === 'ready');
  },

  text() {
    const where = $('#repWhere').value.trim();
    const when = $('#repWhen').value;
    const lines = [
      t('rep.tTitle'),
      '',
      `${t('rep.tWhere')}: ${where || t('rep.notSet')}`,
      `${t('rep.tWhen')}: ${when ? formatDate(`${when}T00:00`) : t('rep.notSet')}`,
      `${t('rep.tWhat')}: ${$('#repWhat').value.trim()}`
    ];
    const n = this.ready().length;
    if (n) lines.push('', t('rep.tPhotos', { n }));
    lines.push('', t('rep.tNoName'));
    return lines.join('\n');
  },

  /** Ссылка WhatsApp сразу содержит текст сообщения (фото прикрепляются в самом чате) */
  updateLink() {
    const enough = $('#repWhat').value.trim().length >= 20;
    $('#chWhatsapp').href = `https://wa.me/77770001424${enough ? `?text=${encodeURIComponent(this.text().slice(0, 1800))}` : ''}`;
  },

  async addFiles(list) {
    const files = Array.from(list || []).filter((f) => /^image\//.test(f.type) || /\.(jpe?g|png|webp|heic|heif)$/i.test(f.name));
    for (const file of files) {
      if (this.photos.length >= 5) {
        showToast(t('rep.max'), '', 'warn');
        break;
      }
      const item = { id: Math.random().toString(36).slice(2), name: file.name, status: 'processing', before: file.size };
      this.photos.push(item);
      this.renderPhotos();
      try {
        item.found = await readExifFlags(file);
        item.blob = await cleanImage(file);
        item.after = item.blob.size;
        item.url = URL.createObjectURL(item.blob);
        item.status = 'ready';
      } catch (error) {
        this.photos = this.photos.filter((p) => p !== item);
        showToast(t('rep.bad', { name: file.name }), '', 'error');
      }
      this.renderPhotos();
      this.updateLink();
    }
  },

  renderPhotos() {
    const grid = $('#photoGrid');
    grid.innerHTML = this.photos.map((p) => {
      if (p.status !== 'ready') {
        return `<div class="photo-card loading"><div class="photo-thumb"><span class="spinner"></span></div><small>${escapeHTML(t('rep.processing'))}</small></div>`;
      }
      const badges = [];
      if (p.found.gps) badges.push(['map-pin-off', t('rep.gps')]);
      if (p.found.device) badges.push(['smartphone', t('rep.device')]);
      if (p.found.time) badges.push(['calendar-x', t('rep.time')]);
      if (!badges.length) badges.push(['shield-check', t('rep.clean')]);
      return `
        <div class="photo-card">
          <div class="photo-thumb"><img src="${p.url}" alt="" /></div>
          <button type="button" class="photo-remove" data-remove="${p.id}" aria-label="${escapeHTML(t('rep.remove'))}"><i data-lucide="x"></i></button>
          <ul class="photo-badges">${badges.map(([icon, label]) => `<li><i data-lucide="${icon}"></i>${escapeHTML(label)}</li>`).join('')}</ul>
          <small class="photo-size">${formatKb(p.before)} → ${formatKb(p.after)}</small>
        </div>`;
    }).join('');
    refreshIcons();
    $$('[data-remove]', grid).forEach((button) => {
      button.addEventListener('click', () => {
        const item = this.photos.find((p) => p.id === button.dataset.remove);
        if (item && item.url) URL.revokeObjectURL(item.url);
        this.photos = this.photos.filter((p) => p !== item);
        this.renderPhotos();
        this.updateLink();
      });
    });
  },

  async copy() {
    const what = $('#repWhat');
    if (what.value.trim().length < 20) {
      setFieldError(what, t('rep.needText'));
      what.focus();
      return;
    }
    const ok = await copyText(this.text());
    if (ok) showToast(t('rep.copied'), t('rep.copiedText'), 'success');
    else showToast(t('tpl.copyFail'), t('tpl.copyFailText'), 'error');
  },

  async savePhotos() {
    const ready = this.ready();
    if (!ready.length) {
      showToast(t('rep.noPhotos'), '', 'warn');
      return;
    }
    if (host.inViewer && ready.length > 1) showToast(t('rep.saveHint'), '', 'info');
    let saved = 0;
    for (let i = 0; i < ready.length; i += 1) {
      const ok = await downloadFile(`photo-${i + 1}.jpg`, ready[i].blob, 'image/jpeg');
      if (ok) saved += 1;
      else if (host.inViewer) break;
    }
    if (saved) showToast(t('rep.saved', { n: saved }), '', 'success');
    else showToast(t('rep.saveFail'), '', 'warn');
  }
};

/* ---------- 11. Шаблоны документов ---------- */
const TEMPLATE_ICONS = ['file-pen-line', 'file-warning', 'mail', 'file-search'];

/** Индекс шаблона «Обращение» (өтініш): вместо простой формы показывается пошаговый мастер */
const APPEAL_TEMPLATE = 2;

const templates = {
  current: APPEAL_TEMPLATE,

  init() {
    this.renderList();
    ['#tplName', '#tplContact', '#tplTo', '#tplDetails'].forEach((id) => {
      $(id).addEventListener('input', () => this.render());
    });
    $('#tplView').addEventListener('click', () => this.preview());
    $('#tplCopy').addEventListener('click', () => this.copy());
    $('#tplTxt').addEventListener('click', () => this.downloadTxt());
    $('#tplDoc').addEventListener('click', () => this.downloadDoc());
    this.render();
    i18n.onChange(() => {
      this.renderList();
      this.render();
    });
  },

  renderList() {
    const list = i18n.d().templates;
    $('#tplList').innerHTML = list.map((tpl, i) => `
      <button class="tpl-item${i === this.current ? ' active' : ''}" data-index="${i}">
        <span class="tpl-ic"><i data-lucide="${TEMPLATE_ICONS[i]}"></i></span>
        <span><strong>${escapeHTML(tpl.title)}${i === APPEAL_TEMPLATE ? ` <em class="tpl-badge">${escapeHTML(t('tpl.wizBadge'))}</em>` : ''}</strong><small>${escapeHTML(tpl.desc)}</small></span>
      </button>`).join('');
    refreshIcons();
    $$('.tpl-item').forEach((item) => {
      item.addEventListener('click', () => {
        this.select(Number(item.dataset.index));
        if (window.innerWidth <= 1024) $('.tpl-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  },

  select(index) {
    this.current = index;
    $$('.tpl-item').forEach((item) => item.classList.toggle('active', Number(item.dataset.index) === index));
    this.render();
  },

  template() {
    return i18n.d().templates[this.current];
  },

  /** Данные из полей; пустые поля заменяются понятными заглушками на текущем языке */
  data(highlight = false) {
    const wrap = (value, placeholder) => {
      if (value) return highlight ? `\u0001${value}\u0002` : value;
      return `[${placeholder}]`;
    };
    return {
      name: wrap($('#tplName').value.trim(), t('tpl.pName')),
      contact: wrap($('#tplContact').value.trim(), t('tpl.pContact')),
      to: wrap($('#tplTo').value.trim(), this.template().defaultTo),
      details: wrap($('#tplDetails').value.trim(), t('tpl.pDetails')),
      date: formatDate(new Date())
    };
  },

  text() {
    return this.template().body(this.data(false));
  },

  render() {
    const isAppeal = this.current === APPEAL_TEMPLATE;
    $('#tplEditor').hidden = isAppeal;
    $('#tplWizard').hidden = !isAppeal;
    const tpl = this.template();
    $('#tplTitle').textContent = tpl.title;
    $('#tplPreview').innerHTML = escapeHTML(tpl.body(this.data(true)))
      .replace(/\u0001/g, '<span class="hl">')
      .replace(/\u0002/g, '</span>');
  },

  preview() {
    const tpl = this.template();
    modal.open(`
      <div class="modal-hero">
        <div class="concept-icon" style="background:var(--grad-main)"><i data-lucide="${TEMPLATE_ICONS[this.current]}"></i></div>
        <div><h2 id="modalTitle">${escapeHTML(tpl.title)}</h2><small>${escapeHTML(t('tpl.previewSub'))}</small></div>
      </div>
      <pre class="tpl-preview">${escapeHTML(this.text())}</pre>
      <div class="tpl-actions" style="margin-top:18px">
        <button class="btn btn-sm btn-ghost" id="modalCopy"><i data-lucide="copy"></i><span>${escapeHTML($('#tplCopy span').textContent)}</span></button>
        <button class="btn btn-sm btn-ghost" id="modalPrint"><i data-lucide="printer"></i><span>${escapeHTML(t('tpl.print'))}</span></button>
        <button class="btn btn-sm btn-primary" id="modalDoc"><i data-lucide="download"></i><span>${escapeHTML(t('tpl.downloadDoc'))}</span></button>
      </div>`);
    $('#modalCopy').addEventListener('click', () => this.copy());
    $('#modalDoc').addEventListener('click', () => this.downloadDoc());
    $('#modalPrint').addEventListener('click', () => this.print());
  },

  async copy() {
    const ok = await copyText(this.text());
    if (ok) showToast(t('tpl.copied'), t('tpl.copiedText'), 'success');
    else showToast(t('tpl.copyFail'), t('tpl.copyFailText'), 'error');
  },

  fileName(ext) {
    return `${this.template().file}.${ext}`;
  },

  downloadTxt() {
    /* BOM нужен, чтобы Блокнот Windows корректно показал кириллицу */
    downloadFile(this.fileName('txt'), `﻿${this.text().replace(/\n/g, '\r\n')}`, 'text/plain;charset=utf-8')
      .then((ok) => { if (ok) showToast(t('tpl.fileDone'), this.fileName('txt'), 'success'); });
  },

  /** Генерация документа Word: HTML-разметка, которую Microsoft Word открывает как .doc */
  downloadDoc() {
    const tpl = this.template();
    const headings = tpl.heading.map((h) => h.trim());
    const paragraphs = this.text().split('\n').map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return '<p>&nbsp;</p>';
      const isHeading = headings.includes(trimmed);
      return `<p style="${isHeading ? 'text-align:center;font-weight:bold;' : ''}">${escapeHTML(line)}</p>`;
    }).join('\n');

    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40" lang="${i18n.lang}">
<head><meta charset="utf-8"><title>${escapeHTML(tpl.title)}</title>
<style>
  @page { size: 21cm 29.7cm; margin: 2cm 1.5cm 2cm 3cm; }
  body { font-family: 'Times New Roman', serif; font-size: 14pt; line-height: 1.5; }
  p { margin: 0; }
</style></head>
<body>${paragraphs}</body></html>`;
    downloadFile(this.fileName('doc'), `﻿${html}`, 'application/msword')
      .then((ok) => { if (ok) showToast(t('tpl.docDone'), t('tpl.docDoneText', { file: this.fileName('doc') }), 'success'); });
  },

  print() {
    const win = window.open('', '_blank');
    if (!win) {
      showToast(t('tpl.popup'), t('tpl.popupText'), 'warn');
      return;
    }
    win.document.write(`<!DOCTYPE html><html lang="${i18n.lang}"><head><meta charset="utf-8"><title>${escapeHTML(this.template().title)}</title>
      <style>body{font-family:'Times New Roman',serif;font-size:14pt;line-height:1.5;margin:2cm;white-space:pre-wrap}</style>
      </head><body>${escapeHTML(this.text())}</body></html>`);
    win.document.close();
    win.focus();
    win.print();
  }
};

/* ---------- 12. Карта Казахстана ---------- */
/* Названия и административные центры — реальные сведения (тексты в раздел «Переводы», data.*.regions).
   Показатели в блоке «Демо-показатели» — условные, для демонстрации интерфейса. */
const REGIONS = [
  { id: 'astana', type: 'city', lon: 71.43, lat: 51.13, dx: 10, dy: 18 },
  { id: 'almaty-city', type: 'city', lon: 76.95, lat: 43.24, dx: -14, dy: 20, anchor: 'end' },
  { id: 'shymkent', type: 'city', lon: 69.59, lat: 42.32, dx: 12, dy: 16 },
  { id: 'akmola', type: 'oblast', lon: 69.6, lat: 52.6, dx: -12, dy: -12, anchor: 'end' },
  { id: 'aktobe', type: 'oblast', lon: 58.4, lat: 48.6 },
  { id: 'almaty', type: 'oblast', lon: 77.6, lat: 44.5, dx: -14, dy: -8, anchor: 'end' },
  { id: 'atyrau', type: 'oblast', lon: 52.4, lat: 47.3 },
  { id: 'abai', type: 'oblast', lon: 79.8, lat: 48.6, new2022: true },
  { id: 'vko', type: 'oblast', lon: 83.8, lat: 49.4, dy: -16 },
  { id: 'zhambyl', type: 'oblast', lon: 72.3, lat: 44.4 },
  { id: 'zhetisu', type: 'oblast', lon: 79.6, lat: 45.6, new2022: true },
  { id: 'zko', type: 'oblast', lon: 50.9, lat: 50.3, dy: -16 },
  { id: 'karaganda', type: 'oblast', lon: 74.6, lat: 48.4 },
  { id: 'kostanay', type: 'oblast', lon: 63.6, lat: 51.4 },
  { id: 'kyzylorda', type: 'oblast', lon: 63.6, lat: 44.9 },
  { id: 'mangystau', type: 'oblast', lon: 54.0, lat: 43.9 },
  { id: 'pavlodar', type: 'oblast', lon: 76.4, lat: 52.0 },
  { id: 'sko', type: 'oblast', lon: 69.4, lat: 54.4, dy: -14 },
  { id: 'turkestan', type: 'oblast', lon: 67.4, lat: 43.7, dx: -12, anchor: 'end' },
  { id: 'ulytau', type: 'oblast', lon: 67.71, lat: 47.78, new2022: true, college: true }
];

/* Упрощённый контур границы Казахстана (долгота, широта) */
const KZ_OUTLINE = [
  [46.6, 48.5], [46.9, 49.4], [47.5, 50.4], [48.7, 50.6], [48.7, 51.6], [50.5, 51.7], [52.5, 51.6],
  [54.5, 51.0], [55.7, 50.6], [57.5, 51.1], [58.6, 51.0], [59.9, 50.8], [61.4, 50.9], [61.6, 51.9],
  [61.0, 52.6], [61.0, 53.6], [62.5, 54.0], [65.2, 54.6], [67.5, 54.9], [69.2, 55.4], [70.8, 55.1],
  [71.2, 54.2], [73.4, 53.8], [73.7, 54.1], [76.2, 54.3], [76.6, 53.2], [78.0, 52.9], [79.9, 50.8],
  [80.6, 51.2], [82.7, 50.9], [83.6, 51.0], [84.9, 50.1], [86.0, 49.6], [87.3, 49.1], [86.6, 48.6],
  [85.6, 48.0], [85.5, 47.1], [83.0, 47.2], [82.3, 45.5], [80.0, 45.0], [80.4, 44.0], [80.2, 42.9],
  [80.2, 42.2], [79.1, 42.8], [76.9, 42.9], [75.6, 42.8], [74.2, 43.2], [73.4, 42.5], [71.2, 42.8],
  [70.9, 42.3], [69.1, 41.4], [68.4, 40.6], [67.9, 41.1], [66.7, 41.2], [66.0, 42.0], [66.0, 43.0],
  [64.9, 43.7], [62.0, 43.5], [61.0, 44.4], [58.6, 45.6], [56.0, 45.0], [56.0, 41.3], [55.4, 41.3],
  [53.9, 42.1], [52.5, 41.9], [52.6, 42.8], [51.3, 43.2], [50.3, 44.5], [50.9, 44.9], [51.2, 45.3],
  [52.9, 45.3], [53.1, 46.0], [53.0, 46.8], [51.2, 47.1], [49.3, 46.5], [48.6, 46.6], [48.0, 47.8]
];

/** Детерминированные демо-значения: одинаковые при каждой загрузке */
function demoValue(seed, min, max) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 100000;
  return min + (hash % (max - min + 1));
}

const kzMap = {
  svg: null,
  activeId: null,

  project(lon, lat) {
    return { x: 20 + (lon - 46) * (860 / 42), y: 20 + (56 - lat) * 30 };
  },

  points(list) {
    return list.map(([lon, lat]) => {
      const p = this.project(lon, lat);
      return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }).join(' ');
  },

  init() {
    this.svg = $('#kzMap');
    const NS = 'http://www.w3.org/2000/svg';
    const astana = this.project(71.43, 51.13);

    let html = '';
    for (let lat = 42; lat <= 54; lat += 4) {
      const y = this.project(46, lat).y;
      html += `<line class="grid-line" x1="0" y1="${y}" x2="900" y2="${y}" />`;
    }
    for (let lon = 50; lon <= 86; lon += 6) {
      const x = this.project(lon, 50).x;
      html += `<line class="grid-line" x1="${x}" y1="0" x2="${x}" y2="520" />`;
    }
    const caspian = [[46.6, 48.5], [48.0, 47.8], [48.6, 46.6], [49.3, 46.5], [51.2, 47.1], [53.0, 46.8], [53.1, 46.0],
      [52.9, 45.3], [51.2, 45.3], [50.9, 44.9], [50.3, 44.5], [51.3, 43.2], [52.6, 42.8], [52.5, 41.9], [52.8, 40.0],
      [50.0, 40.0], [48.6, 41.8], [47.0, 43.5], [46.6, 45.5]];
    html += `<polygon class="caspian" points="${this.points(caspian)}" />`;
    const sea = this.project(49.2, 43.0);
    html += `<text class="sea-label" id="seaLabel1" x="${sea.x}" y="${sea.y}" text-anchor="middle"></text>`;
    html += `<text class="sea-label" id="seaLabel2" x="${sea.x}" y="${sea.y + 15}" text-anchor="middle"></text>`;
    html += `<polygon class="land" points="${this.points(KZ_OUTLINE)}" />`;

    REGIONS.filter((r) => r.id !== 'astana').forEach((r) => {
      const p = this.project(r.lon, r.lat);
      html += `<line class="link-line" x1="${astana.x}" y1="${astana.y}" x2="${p.x}" y2="${p.y}" />`;
    });
    this.svg.innerHTML = html;

    REGIONS.forEach((r) => {
      const p = this.project(r.lon, r.lat);
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', `region-dot${r.type === 'city' ? ' city' : ''}${r.college ? ' college' : ''}`);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.dataset.id = r.id;
      const radius = r.type === 'city' ? 8 : 7;
      g.innerHTML = `
        <circle class="halo" cx="${p.x}" cy="${p.y}" r="${radius * 2.4}" />
        ${r.college ? `<circle class="college-ring" cx="${p.x}" cy="${p.y}" r="${radius + 7}" />` : ''}
        <circle class="core" cx="${p.x}" cy="${p.y}" r="${radius}" />
        <text x="${p.x + (r.dx !== undefined ? r.dx : 0)}" y="${p.y + (r.dy !== undefined ? r.dy : 24)}" text-anchor="${r.anchor || 'middle'}"></text>`;
      g.addEventListener('click', () => this.select(r.id));
      g.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.select(r.id);
        }
      });
      this.svg.appendChild(g);
    });

    $('#regionSelect').addEventListener('change', (event) => {
      if (event.target.value) this.select(event.target.value, false);
    });

    this.applyTexts();
    i18n.onChange(() => this.applyTexts());
  },

  /** Подписи карты, список и карточка региона на текущем языке */
  applyTexts() {
    const names = i18n.d().regions;
    $('#seaLabel1').textContent = t('map.sea1');
    $('#seaLabel2').textContent = t('map.sea2');
    $$('.region-dot', this.svg).forEach((dot) => {
      const info = names[dot.dataset.id];
      $('text', dot).textContent = info.short;
      dot.setAttribute('aria-label', info.name);
    });

    const select = $('#regionSelect');
    const sorted = REGIONS.slice().sort((a, b) => names[a.id].name.localeCompare(names[b.id].name, i18n.locale()));
    select.innerHTML = `<option value="">${escapeHTML(t('map.choose'))}</option>` +
      sorted.map((r) => `<option value="${r.id}">${escapeHTML(names[r.id].name)}</option>`).join('');
    select.value = this.activeId || '';

    if (this.activeId) this.select(this.activeId, false, false);
  },

  select(id, scroll = true, animate = true) {
    const r = REGIONS.find((item) => item.id === id);
    if (!r) return;
    const info = i18n.d().regions[id];
    this.activeId = id;
    $$('.region-dot', this.svg).forEach((dot) => dot.classList.toggle('active', dot.dataset.id === id));
    $('#regionSelect').value = id;

    const transparency = demoValue(`${r.id}t`, 48, 86);
    const online = demoValue(`${r.id}o`, 55, 95);
    const response = demoValue(`${r.id}r`, 60, 97);
    const reports = demoValue(`${r.id}n`, 40, 420);

    const card = $('#regionCard');
    card.classList.add('has-region');
    const box = $('#regionInfo');
    box.classList.remove('hidden');
    if (animate) {
      box.style.animation = 'none';
      void box.offsetWidth;
      box.style.animation = '';
    }
    const facts = [
      [r.type === 'city' ? t('map.status') : t('map.center'), info.center],
      r.new2022 ? [t('map.note'), t('map.new2022')] : null,
      r.college ? [t('map.college'), t('map.collegeVal')] : null,
      [t('map.report'), t('map.reportVal')]
    ].filter(Boolean);

    box.innerHTML = `
      <h3>${escapeHTML(info.name)}</h3>
      <div class="region-type">${escapeHTML(r.type === 'city' ? t('map.typeCity') : t('map.typeOblast'))}</div>
      <div class="facts">
        ${facts.map(([label, value]) => `<div class="fact"><span>${escapeHTML(label)}</span><b>${escapeHTML(value)}</b></div>`).join('')}
      </div>
      <div class="demo-block">
        <div class="demo-title"><span>${escapeHTML(t('map.demo'))}</span><span class="tag tag-demo">${escapeHTML(t('map.notReal'))}</span></div>
        ${[[t('map.m1'), transparency], [t('map.m2'), online], [t('map.m3'), response]].map(([label, value]) => `
          <div class="meter">
            <div class="meter-top"><span>${escapeHTML(label)}</span><b>${value}%</b></div>
            <div class="meter-bar"><i data-w="${value}" style="${animate ? '' : `width:${value}%`}"></i></div>
          </div>`).join('')}
        <div class="meter-top" style="margin-top:12px"><span>${escapeHTML(t('map.reports'))}</span><b>${formatNumber(reports)}</b></div>
      </div>
      <p class="source-note">${escapeHTML(t('map.source'))}</p>`;
    if (animate) {
      requestAnimationFrame(() => {
        $$('.meter-bar i', box).forEach((bar) => { bar.style.width = `${bar.dataset.w}%`; });
      });
    }

    if (scroll && window.innerWidth < 1025) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

/* ---------- 13. Стена честности ---------- */
const WALL_META = [
  { category: 'procurement', icon: 'shopping-cart', gradient: 'linear-gradient(135deg,#22d3ee,#3b82f6)', kind: 'real', link: 'https://goszakup.gov.kz', label: 'goszakup.gov.kz' },
  { category: 'procurement', icon: 'monitor-check', gradient: 'linear-gradient(135deg,#60a5fa,#6366f1)', kind: 'real', link: 'https://goszakup.gov.kz' },
  { category: 'savings', icon: 'piggy-bank', gradient: 'linear-gradient(135deg,#34d399,#10b981)', kind: 'demo' },
  { category: 'savings', icon: 'smartphone', gradient: 'linear-gradient(135deg,#2dd4bf,#0ea5e9)', kind: 'real', link: 'https://egov.kz', label: 'egov.kz' },
  { category: 'control', icon: 'messages-square', gradient: 'linear-gradient(135deg,#a78bfa,#6366f1)', kind: 'real', link: 'https://dialog.egov.kz', label: 'dialog.egov.kz' },
  { category: 'control', icon: 'scroll-text', gradient: 'linear-gradient(135deg,#fbbf24,#f97316)', kind: 'real', link: 'https://legalacts.egov.kz', label: 'legalacts.egov.kz' },
  { category: 'initiative', icon: 'database', gradient: 'linear-gradient(135deg,#22d3ee,#2dd4bf)', kind: 'real', link: 'https://data.egov.kz', label: 'data.egov.kz' },
  { category: 'initiative', icon: 'graduation-cap', gradient: 'linear-gradient(135deg,#f472b6,#a78bfa)', kind: 'demo' },
  { category: 'control', icon: 'clipboard-check', gradient: 'linear-gradient(135deg,#60a5fa,#22d3ee)', kind: 'demo' }
];

const wall = {
  filter: 'all',
  likes: {},

  init() {
    this.likes = storage.get('cf-wall-likes', {});
    $$('#wallFilter .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('#wallFilter .chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        this.filter = chip.dataset.filter;
        this.render();
      });
    });
    this.render();
    i18n.onChange(() => this.render(false));
  },

  render(animate = true) {
    const texts = i18n.d().wall;
    const items = WALL_META.map((meta, index) => ({ ...meta, ...texts[index], index }))
      .filter((item) => this.filter === 'all' || item.category === this.filter);
    $('#wallGrid').innerHTML = items.map((item, i) => {
      const liked = Boolean(this.likes[item.index]);
      return `
        <article class="wall-card${animate ? '' : ' no-anim'}" style="animation-delay:${i * 70}ms">
          <div class="wall-top">
            <div class="wall-icon" style="background:${item.gradient}"><i data-lucide="${item.icon}"></i></div>
            <span class="tag ${item.kind === 'real' ? 'tag-real' : 'tag-demo'}">${escapeHTML(item.kind === 'real' ? t('wall.real') : t('wall.demo'))}</span>
          </div>
          <h4>${escapeHTML(item.title)}</h4>
          <p>${escapeHTML(item.text)}</p>
          <div class="wall-foot">
            ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">${escapeHTML(item.label || t('wall.more'))}<i data-lucide="arrow-up-right"></i></a>` : `<span class="source-note" style="margin:0">${escapeHTML(t('wall.cond'))}</span>`}
            <button class="like-btn${liked ? ' liked' : ''}" data-index="${item.index}" aria-pressed="${liked}">
              <i data-lucide="heart"></i><span>${escapeHTML(liked ? t('wall.supported') : t('wall.support'))}</span>
            </button>
          </div>
        </article>`;
    }).join('');
    refreshIcons();

    $$('.like-btn', $('#wallGrid')).forEach((button) => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        this.likes[index] = !this.likes[index];
        storage.set('cf-wall-likes', this.likes);
        if (this.likes[index]) showToast(t('wall.thanks'), t('wall.thanksText'), 'success', 2500);
        this.render(false);
      });
    });
  }
};

/* ---------- 14. Графики Chart.js ---------- */
const charts = {
  instances: [],
  built: false,

  themeColors() {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    return {
      text: light ? '#4b5f86' : '#9fb2d4',
      grid: light ? 'rgba(15,40,90,0.08)' : 'rgba(255,255,255,0.08)',
      heading: light ? '#071633' : '#ffffff',
      tooltipBg: light ? 'rgba(255,255,255,0.97)' : 'rgba(7,22,51,0.95)'
    };
  },

  baseOptions() {
    const c = this.themeColors();
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: c.text, font: { family: 'Manrope', weight: '600' }, usePointStyle: true, padding: 16 } },
        tooltip: {
          backgroundColor: c.tooltipBg,
          titleColor: c.heading,
          bodyColor: c.text,
          borderColor: 'rgba(34,211,238,0.4)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 12,
          titleFont: { family: 'Manrope', weight: '700' },
          bodyFont: { family: 'Manrope' }
        }
      }
    };
  },

  init() {
    if (!window.Chart) {
      $$('#analytics .chart-box').forEach((box) => {
        box.innerHTML = `<div class="chart-fallback">${escapeHTML(t('charts.fallback'))}</div>`;
      });
      i18n.onChange(() => {
        $$('#analytics .chart-fallback').forEach((el) => { el.textContent = t('charts.fallback'); });
      });
      return;
    }
    Chart.defaults.font.family = 'Manrope, sans-serif';

    const section = $('#analytics');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.buildAll();
          observer.disconnect();
        }
      }, { rootMargin: '0px 0px -30% 0px' });
      observer.observe($('.charts-grid', section));
    } else {
      this.buildAll();
    }
    i18n.onChange(() => this.rebuildAll());
  },

  buildAll() {
    this.instances.forEach((chart) => chart.destroy());
    this.instances = [];
    this.buildCpi();
    this.buildCompare();
    this.buildTopics();
    this.built = true;
  },

  rebuildAll() {
    if (this.built) this.buildAll();
    calculator.rebuild();
  },

  /* Реальные данные: Transparency International, CPI (баллы Казахстана) */
  buildCpi() {
    const c = this.themeColors();
    const labels = i18n.d().charts;
    const ctx = $('#cpiChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(34,211,238,0.35)');
    gradient.addColorStop(1, 'rgba(34,211,238,0)');
    const base = this.baseOptions();
    this.instances.push(new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: labels.cpiSeries,
            data: [31, 31, 34, 38, 37, 36, 39, 40, 38],
            borderColor: '#22d3ee',
            backgroundColor: gradient,
            fill: true,
            tension: 0.35,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointBackgroundColor: '#22d3ee',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          },
          {
            label: labels.cpiTarget,
            data: Array(9).fill(47),
            borderColor: '#fbbf24',
            borderDash: [6, 6],
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        ...base,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: { min: 25, max: 50, grid: { color: c.grid }, ticks: { color: c.text } },
          x: { grid: { display: false }, ticks: { color: c.text } }
        }
      }
    }));
  },

  /* Реальные данные: CPI 2025 */
  buildCompare() {
    const c = this.themeColors();
    const labels = i18n.d().charts;
    const base = this.baseOptions();
    this.instances.push(new Chart($('#compareChart'), {
      type: 'bar',
      data: {
        labels: labels.cmpLabels,
        datasets: [{
          label: labels.cmpSeries,
          data: [38, 42, 46, 89],
          backgroundColor: ['#22d3ee', 'rgba(148,163,184,0.6)', '#60a5fa', '#2dd4bf'],
          borderRadius: 12,
          borderSkipped: false,
          maxBarThickness: 56
        }]
      },
      options: {
        ...base,
        plugins: { ...base.plugins, legend: { display: false } },
        scales: {
          y: { min: 0, max: 100, grid: { color: c.grid }, ticks: { color: c.text } },
          x: { grid: { display: false }, ticks: { color: c.text, font: { weight: '700' } } }
        }
      }
    }));
  },

  /* Демо-данные: круговая диаграмма */
  buildTopics() {
    const c = this.themeColors();
    const labels = i18n.d().charts;
    const base = this.baseOptions();
    this.instances.push(new Chart($('#topicsChart'), {
      type: 'doughnut',
      data: {
        labels: labels.topicsLabels,
        datasets: [{
          data: [28, 24, 20, 16, 12],
          backgroundColor: ['#22d3ee', '#60a5fa', '#818cf8', '#2dd4bf', '#fbbf24'],
          borderColor: document.documentElement.getAttribute('data-theme') === 'light' ? '#ffffff' : '#071633',
          borderWidth: 3,
          hoverOffset: 12
        }]
      },
      options: {
        ...base,
        cutout: '62%',
        plugins: {
          ...base.plugins,
          legend: { position: 'bottom', labels: { color: c.text, usePointStyle: true, padding: 14, font: { family: 'Manrope', weight: '600' } } },
          tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${item.label}: ${item.raw}% ${labels.demo}` } }
        }
      }
    }));
  }
};

/* ---------- 15. Формы, FAQ, волонтёрство ---------- */
function setFieldError(field, message) {
  const wrapper = field.closest('.field') || field.closest('.consent');
  if (!wrapper) return;
  wrapper.classList.toggle('invalid', Boolean(message));
  let error = $('.error-text', wrapper);
  if (message) {
    if (!error) {
      error = document.createElement('small');
      error.className = 'error-text';
      wrapper.appendChild(error);
    }
    error.textContent = message;
  } else if (error) {
    error.remove();
  }
}

/** При смене языка убираем старые сообщения об ошибках, чтобы не смешивать языки */
function clearFormErrors(form) {
  $$('.invalid', form).forEach((el) => el.classList.remove('invalid'));
  $$('.error-text', form).forEach((el) => el.remove());
}

function initFeedbackForm() {
  const form = $('#feedbackForm');
  const message = form.elements.message;
  const counter = $('#msgCount');
  const button = $('button[type="submit"]', form);

  message.addEventListener('input', () => {
    counter.textContent = message.value.length;
    if (message.value.trim().length >= 10) setFieldError(message, '');
  });
  form.elements.category.addEventListener('change', () => setFieldError(form.elements.category, ''));
  i18n.onChange(() => clearFormErrors(form));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    if (!form.elements.category.value) {
      setFieldError(form.elements.category, t('form.catErr'));
      valid = false;
    }
    if (message.value.trim().length < 10) {
      setFieldError(message, t('form.msgErr'));
      valid = false;
    }
    if (!valid) {
      showToast(t('form.check'), t('form.checkText'), 'error');
      return;
    }

    const label = $('span', button);
    button.disabled = true;
    label.textContent = t('form.processing');

    /* Имитация обработки: данные НИКУДА не отправляются */
    setTimeout(() => {
      const name = form.elements.name.value.trim();
      form.reset();
      counter.textContent = '0';
      button.disabled = false;
      label.textContent = t('form.send');
      showToast(name ? t('form.thanks', { name }) : t('form.thanksAnon'), t('form.demoSent'), 'info', 6000);
    }, 900);
  });
}

const faq = {
  openIndex: -1,

  init() {
    this.render();
    i18n.onChange(() => this.render());
  },

  render() {
    const list = $('#faqList');
    const items = i18n.d().faq;
    list.innerHTML = items.map((item, i) => `
      <div class="faq-item${i === this.openIndex ? ' open' : ''}">
        <button class="faq-q" aria-expanded="${i === this.openIndex}" aria-controls="faq-a-${i}" id="faq-q-${i}">
          <span>${escapeHTML(item.q)}</span><span class="faq-ic"><i data-lucide="plus"></i></span>
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${escapeHTML(item.a)}</p></div></div>
      </div>`).join('');
    refreshIcons();

    $$('.faq-q', list).forEach((button, i) => {
      button.addEventListener('click', () => {
        this.openIndex = this.openIndex === i ? -1 : i;
        $$('.faq-item', list).forEach((item, j) => {
          const open = j === this.openIndex;
          item.classList.toggle('open', open);
          $('.faq-q', item).setAttribute('aria-expanded', String(open));
        });
      });
    });
  }
};

function initVolunteerForm() {
  const form = $('#volunteerForm');
  const countEl = $('#volCount');
  countEl.textContent = storage.get('cf-volunteers', []).length;

  ['vname', 'vemail', 'vage'].forEach((name) => {
    form.elements[name].addEventListener('input', () => setFieldError(form.elements[name], ''));
  });
  form.elements.vconsent.addEventListener('change', () => setFieldError(form.elements.vconsent, ''));
  i18n.onChange(() => clearFormErrors(form));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.vname.value.trim();
    const email = form.elements.vemail.value.trim();
    const age = form.elements.vage.value ? Number(form.elements.vage.value) : null;
    const checked = $$('input[name="vdir"]:checked', form);
    /* Названия направлений берём из подписей — они уже на текущем языке */
    const directionLabels = checked.map((input) => input.nextElementSibling.textContent.trim());
    let valid = true;

    if (name.length < 2) {
      setFieldError(form.elements.vname, t('vol.nameErr'));
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setFieldError(form.elements.vemail, t('vol.emailErr'));
      valid = false;
    }
    if (age !== null && (age < 14 || age > 99)) {
      setFieldError(form.elements.vage, t('vol.ageErr'));
      valid = false;
    }
    if (!form.elements.vconsent.checked) {
      setFieldError(form.elements.vconsent, t('vol.consentErr'));
      valid = false;
    }
    if (!valid) {
      showToast(t('form.check'), t('vol.checkText'), 'error');
      return;
    }
    if (checked.length === 0) {
      showToast(t('vol.dirTitle'), t('vol.dirText'), 'warn');
      return;
    }

    const list = storage.get('cf-volunteers', []);
    list.push({
      name,
      email,
      city: form.elements.vcity.value.trim(),
      age,
      directions: checked.map((input) => input.value),
      lang: i18n.lang,
      date: new Date().toISOString()
    });
    storage.set('cf-volunteers', list);
    animateNumber(countEl, list.length, { plain: true, duration: 600 });
    form.reset();
    showToast(t('vol.welcome', { name }), t('vol.welcomeText', { dirs: directionLabels.join(', ') }), 'success', 6000);
  });
}

/* ---------- 15б. ИИ-помощник ---------- */
/* На опубликованной странице claude.ai помощник отвечает через Claude (возможность `sample`,
   расход идёт с аккаунта посетителя, первый вопрос требует его согласия).
   Если ИИ недоступен (файл открыт локально, посетитель не вошёл, отказ) — базовый режим:
   готовые ответы по ключевым словам из раздела «Переводы» (data.*.kb). */
const AI_SECTION_LABEL = {
  calculator: 'nav.calc', school: 'nav.schoolFull', comic: 'nav.comic', video: 'nav.videoFull',
  help: 'nav.helpFull', otinish: 'tpl.sectionAppeal', report: 'ot.tabReport', templates: 'nav.templatesFull', analytics: 'nav.analyticsFull'
};

/** Переключить вкладку по её data-tab */
function activateTab(name) {
  const tab = $(`.tab[data-tab="${name}"]`);
  if (tab && !tab.classList.contains('active')) tab.click();
}

/** Перейти к разделу сайта (otinish — шаблон «Обращение» в разделе шаблонов) */
function goSection(id) {
  if (id === 'otinish') {
    templates.select(APPEAL_TEMPLATE);
    id = 'templates';
  }
  const el = $(`#${id}`);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Безопасное форматирование ответа: экранирование, **жирный**, переносы строк */
function formatAi(text) {
  return escapeHTML(text)
    .replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>')
    .replace(/\n/g, '<br>');
}

/** Метки разделов вида [[help]] в конце ответа превращаются в кнопки */
function extractLinks(text) {
  const links = [];
  const clean = String(text || '').replace(/\[\[([a-z]+)\]\]/g, (m, id) => {
    if (AI_SECTION_LABEL[id] && !links.includes(id)) links.push(id);
    return '';
  }).replace(/\[\[[a-z]*\]?$/, '').trim();
  return { text: clean, links };
}

/** Языки, на которых может быть вопрос (первый — основной) */
function detectLangs(text) {
  if (/[әғқңөұүһі]/i.test(text)) return ['kk'];
  if (/[a-z]/i.test(text) && !/[а-яё]/i.test(text)) return ['en'];
  if (/[а-яё]/i.test(text)) return i18n.lang === 'kk' ? ['kk', 'ru'] : ['ru', 'kk'];
  return [i18n.lang];
}

/** Базовый режим: выбор готового ответа по совпадению ключевых слов.
    Казахский вопрос без казахских букв (ә, қ, ұ…) похож на русский, поэтому для кириллицы сравниваются обе базы. */
function offlineAnswer(text) {
  const langs = detectLangs(text);
  const norm = ` ${text.toLowerCase().replace(/ё/g, 'е').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ')} `;
  let best = null;
  let bestScore = 0;
  langs.forEach((lang) => {
    window.I18N.data[lang].kb.intents.forEach((intent) => {
      const score = intent.k.reduce((n, key) => n + (norm.includes(key.replace(/ё/g, 'е')) ? 1 : 0), 0);
      if (score > bestScore) {
        best = intent;
        bestScore = score;
      }
    });
  });
  const kb = window.I18N.data[langs[0]].kb;
  return best ? { text: best.a, links: best.links || [] } : { text: kb.fallback, links: [] };
}

/** Постоянные инструкции и проверенные факты для Claude (первая реплика каждого запроса) */
function aiRules() {
  const siteLang = { ru: 'Russian', en: 'English', kk: 'Kazakh' }[i18n.lang];
  return `You are the assistant on "Чистое будущее начинается с нас" ("A Clean Future Starts With Us"), a student anti-corruption education website made by group P-11 of Zhezkazgan Industrial and Humanitarian College (Kazakhstan). Most visitors are college students.

Answer in the language of the visitor's latest message (Russian, Kazakh or English); if unclear, use ${siteLang}.
Keep answers short: 2-6 sentences or a short list, plain text, no headings or tables. You may use **bold** sparingly.
Stay on topic: corruption and how to act lawfully, citizens' rights in Kazakhstan, filing appeals, and using this site. Politely bring other topics back.
Never help anyone give, hide or negotiate a bribe; refuse briefly and point to lawful options.
Do not invent phone numbers, laws, article numbers, deadlines or statistics. Use only the facts below; if something is not covered, say you are not sure and suggest checking with 1424 or official sites (egov.kz, adilet.zan.kz). You are not a lawyer; for serious cases recommend an official consultation.
If someone may be in danger, tell them to call 112 first.

Verified facts:
- 1424: free call centre of the Anti-Corruption Service of the National Security Committee (KNB) of Kazakhstan. The former Anti-Corruption Agency joined the KNB in July 2025.
- 115: Prosecutor General's Office call centre (violations of citizens' rights), free.
- 1414: Unified contact centre: advice on public services, eGov, eOtinish, mandatory health insurance (OSMS) and free medical care (GOBMP).
- 102 police, 112 emergency.
- Since 1 April 2026 complaints about the quality of medical care are filed online on the Social Health Insurance Fund site (fms.kz) and in the Qoldau 24/7 app; 1414 gives advice only.
- eOtinish (eotinish.kz, eGov.kz, eGov Mobile): official online appeals; sign-in via EDS, QR or Face ID. A regular appeal is usually considered within 15 working days, a complaint within 20.
- The WhatsApp chatbot 8 777 000 1424 (launched February 2025) and the Telegram bot @antikorkz_bot were launched by the former Anti-Corruption Agency; advise confirming they still work via 1424.
- People who report corruption are protected by the state and may be rewarded (Law "On Combating Corruption"). Giving a bribe is a criminal offence, like taking one or acting as an intermediary.
- Kazakhstan scored 38/100 in Transparency International's CPI 2025 (96th of 182); 40 in 2024. Target of the 2022-2026 Anti-Corruption Policy Concept: 47.

Site sections. When useful, end your answer with the matching tag(s) on a separate last line: [[calculator]] cost-of-corruption calculator; [[school]] "Bribe or gift" game, rights quiz and key concepts; [[comic]] comic; [[video]] video; [[help]] step-by-step guides "What to do if..."; [[otinish]] Өтініш wizard (Document templates → Appeal) that drafts an official appeal for eOtinish; [[report]] report with photos (removes geotags, sent via an official channel); [[templates]] document templates; [[analytics]] map and statistics.`;
}

const assistant = {
  open: false,
  mode: 'check',
  sample: null,
  turns: [],
  log: [],
  busy: false,
  ctl: null,

  init() {
    this.panel = $('#aiPanel');
    this.logEl = $('#aiLog');
    this.input = $('#aiInput');
    $('#aiFab').addEventListener('click', () => this.toggle(!this.open));
    $('#aiClose').addEventListener('click', () => this.toggle(false));
    $('#aiClear').addEventListener('click', () => this.clear());
    $('#aiForm').addEventListener('submit', (event) => {
      event.preventDefault();
      this.send(this.input.value);
    });
    this.input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.send(this.input.value);
      }
    });
    this.input.addEventListener('input', () => this.autosize());
    $('#aiStop').addEventListener('click', () => {
      if (this.ctl) this.ctl.abort();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.open && !modal.isOpen()) this.toggle(false);
    });
    this.renderChips();
    this.renderStatus();
    this.renderLog();
    this.detect();
    i18n.onChange(() => {
      this.renderChips();
      this.renderStatus();
      this.renderLog();
    });
  },

  async detect() {
    if (!host.inViewer) {
      this.mode = 'basic';
    } else {
      try {
        this.sample = await window.claude.use('sample');
      } catch (error) {
        this.sample = null;
      }
      this.mode = this.sample ? 'ai' : 'basic';
    }
    this.renderStatus();
    this.renderLog();
  },

  toggle(open) {
    this.open = open;
    this.panel.classList.toggle('open', open);
    this.panel.setAttribute('aria-hidden', String(!open));
    $('#aiFab').setAttribute('aria-expanded', String(open));
    $('#aiFab').classList.toggle('active', open);
    document.body.classList.toggle('ai-open', open);
    if (open) {
      setTimeout(() => this.input.focus(), 160);
      this.scrollDown();
    } else {
      $('#aiFab').focus();
    }
  },

  autosize() {
    this.input.style.height = 'auto';
    this.input.style.height = `${Math.min(this.input.scrollHeight, 120)}px`;
  },

  renderStatus() {
    const key = { ai: 'ai.statusAi', basic: 'ai.statusBasic' }[this.mode] || 'ai.statusCheck';
    $('#aiStatus span').textContent = t(key);
    $('#aiStatus').dataset.mode = this.mode;
  },

  renderChips() {
    const kb = (window.I18N.data[i18n.lang] || window.I18N.data.ru).kb;
    $('#aiChips').innerHTML = kb.chips.map((chip) => `<button type="button" class="ai-chip">${escapeHTML(chip)}</button>`).join('');
    $$('#aiChips .ai-chip').forEach((button) => button.addEventListener('click', () => this.send(button.textContent)));
  },

  bubble(m) {
    if (m.role === 'note') return `<div class="ai-msg note">${escapeHTML(m.text)}</div>`;
    const isUser = m.role === 'user';
    let body;
    if (isUser) body = escapeHTML(m.text);
    else if (m.pending && !m.text) body = `<span class="ai-typing" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr-only">${escapeHTML(t('ai.thinking'))}</span>`;
    else body = formatAi(extractLinks(m.text).text);
    const links = (m.links || []).map((id) => `<button type="button" class="ai-link" data-go="${id}">${escapeHTML(AI_SECTION_LABEL[id].startsWith('tpl.') ? t(AI_SECTION_LABEL[id]) : uiText(AI_SECTION_LABEL[id]))}<i data-lucide="arrow-right"></i></button>`).join('');
    return `<div class="ai-msg ${isUser ? 'user' : 'bot'}" ${m.id ? `id="${m.id}"` : ''}><div class="ai-bubble">${body}</div>${links ? `<div class="ai-links">${links}</div>` : ''}</div>`;
  },

  renderLog() {
    const items = [{ role: 'bot', text: t('ai.welcome') }];
    if (this.mode === 'basic') items.push({ role: 'note', text: t('ai.basicHint') });
    items.push(...this.log);
    this.logEl.innerHTML = items.map((m) => this.bubble(m)).join('');
    refreshIcons();
    $$('.ai-link', this.logEl).forEach((button) => {
      button.addEventListener('click', () => {
        goSection(button.dataset.go);
        if (window.innerWidth < 721) this.toggle(false);
      });
    });
    this.scrollDown();
  },

  updateMsg(msg) {
    const el = document.getElementById(msg.id);
    if (!el) return;
    $('.ai-bubble', el).innerHTML = formatAi(extractLinks(msg.text).text);
    this.scrollDown();
  },

  scrollDown() {
    this.logEl.scrollTop = this.logEl.scrollHeight;
  },

  setBusy(busy) {
    this.busy = busy;
    $('#aiSend').classList.toggle('hidden', busy);
    $('#aiStop').classList.toggle('hidden', !busy);
    $$('#aiChips .ai-chip').forEach((chip) => { chip.disabled = busy; });
  },

  clear() {
    if (this.ctl) this.ctl.abort();
    this.log = [];
    this.turns = [];
    this.renderLog();
    this.input.focus();
  },

  async send(raw) {
    const text = String(raw || '').trim().slice(0, 800);
    if (!text || this.busy) return;
    this.input.value = '';
    this.autosize();
    this.log.push({ role: 'user', text });
    if (this.mode === 'ai' && this.sample) {
      await this.askAi(text);
    } else {
      this.answerBasic(text);
    }
  },

  answerBasic(text, note) {
    const answer = offlineAnswer(text);
    if (note) this.log.push({ role: 'note', text: note });
    this.log.push({ role: 'bot', text: answer.text, links: answer.links });
    this.renderLog();
  },

  async askAi(text) {
    this.setBusy(true);
    const msg = { role: 'bot', text: '', pending: true, id: `ai-${Date.now()}` };
    this.log.push(msg);
    this.renderLog();
    this.turns.push({ role: 'user', content: text });
    const input = [{ role: 'user', content: aiRules() }, ...this.turns.slice(-12)];
    this.ctl = new AbortController();
    let fellBack = false;
    try {
      const result = await this.sample(input, {
        modelTier: 'quick',
        cache: false,
        signal: this.ctl.signal,
        onText: ({ text: partial }) => {
          msg.text = partial;
          this.updateMsg(msg);
        }
      });
      const parsed = extractLinks(result.text);
      msg.text = parsed.text;
      msg.links = parsed.links;
      this.turns.push({ role: 'assistant', content: parsed.text });
    } catch (error) {
      const code = error && error.code;
      const partial = error && error.text ? extractLinks(error.text).text : '';
      if (code === 'cancelled') {
        msg.text = partial ? `${partial} ${t('ai.stopped')}` : t('ai.stopped');
        if (partial) this.turns.push({ role: 'assistant', content: partial });
        else this.turns.pop();
      } else if (['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed', 'invalid_request', 'transform_error', 'queue_overflow'].includes(code)) {
        /* ИИ недоступен для этого посетителя — до конца визита работает базовый режим */
        fellBack = true;
        this.mode = 'basic';
        this.log = this.log.filter((m) => m !== msg);
        this.turns.pop();
      } else {
        const keyByCode = { rate_limited: 'ai.errRate', session_expired: 'ai.errSession', refused: 'ai.errRefused' };
        const message = t(keyByCode[code] || 'ai.errUpstream');
        msg.text = partial && code !== 'refused' ? `${partial}\n\n${message}` : message;
        this.turns.pop();
      }
    } finally {
      msg.pending = false;
      this.ctl = null;
      this.setBusy(false);
      if (fellBack) {
        this.renderStatus();
        this.answerBasic(text, t('ai.fallbackNote'));
      } else {
        this.renderLog();
      }
    }
  }
};

/* ---------- 15в. Специальные возможности (версия для людей с ОВЗ) ----------
   Настройки хранятся в localStorage ('cf-a11y') и применяются атрибутами data-a11y-* и классами a11y-* на <html>.
   Те же атрибуты ставит маленький скрипт в <head> до отрисовки страницы, поэтому нет «мигания». */
const A11Y_DEFAULTS = {
  text: '100', font: 'default', spacing: '0', contrast: 'default',
  gray: false, motion: false, simple: false, noimg: false, links: false, targets: false, cursor: false, guide: false, speak: false
};
const A11Y_SETS = ['text', 'font', 'spacing', 'contrast'];
const A11Y_TOGGLES = ['gray', 'motion', 'simple', 'noimg', 'links', 'targets', 'cursor', 'guide', 'speak'];
const A11Y_PROFILES = {
  vision: { text: '130', contrast: 'high', font: 'readable', links: true, cursor: true },
  blind: { speak: true, text: '130', contrast: 'high', motion: true, links: true },
  dyslexia: { font: 'easy', spacing: '2', guide: true },
  epilepsy: { motion: true, simple: true, gray: true },
  focus: { motion: true, simple: true, noimg: true, guide: true },
  motor: { targets: true, cursor: true, links: true, text: '115' }
};
const A11Y_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Noto+Sans:wght@400;600;700;800&display=swap';
const A11Y_SPEAK_SEL = 'p, h1, h2, h3, h4, h5, li, label, button, a, td, th, figcaption, blockquote, summary, dt, dd, pre, small, .tag, .stat-value, .stat-label, .section-text';

const a11y = {
  state: { ...A11Y_DEFAULTS },
  panel: null,
  lastFocus: null,
  voices: [],
  kkWarned: false,
  readingEl: null,
  speakQueue: [],

  init() {
    this.panel = $('#a11yPanel');
    this.state = { ...A11Y_DEFAULTS, ...this.load() };
    this.canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    if (!this.canSpeak) {
      const sw = $('.a11y-switch[data-toggle="speak"]');
      if (sw) sw.setAttribute('aria-disabled', 'true');
      this.state.speak = false;
    } else {
      const loadVoices = () => { this.voices = window.speechSynthesis.getVoices() || []; };
      loadVoices();
      window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
    }

    $('#a11yToggle').addEventListener('click', () => this.open());
    $$('[data-a11y-open]').forEach((btn) => btn.addEventListener('click', () => {
      mobileMenu.setOpen(false);
      this.open();
    }));
    $('#a11yClose').addEventListener('click', () => this.close());
    $('#a11yOverlay').addEventListener('click', () => this.close());
    this.panel.addEventListener('keydown', (event) => this.onPanelKey(event));

    $$('.a11y-opt', this.panel).forEach((btn) => btn.addEventListener('click', () => {
      this.set(btn.dataset.set, btn.dataset.value);
    }));
    $$('.a11y-switch', this.panel).forEach((btn) => btn.addEventListener('click', () => {
      const key = btn.dataset.toggle;
      if (btn.getAttribute('aria-disabled') === 'true') {
        showToast(t('a11y.noSpeech'), '', 'error');
        return;
      }
      this.set(key, !this.state[key]);
      if (key === 'speak' && this.state.speak) this.say(t('a11y.speakOn'));
      if (key === 'speak' && !this.state.speak) this.stopSpeaking();
    }));
    $$('.a11y-profile', this.panel).forEach((btn) => btn.addEventListener('click', () => this.applyProfile(btn.dataset.profile)));
    $('#a11yReset').addEventListener('click', () => {
      this.stopSpeaking();
      this.state = { ...A11Y_DEFAULTS };
      this.apply();
      showToast(t('a11y.resetDone'), '', 'info');
    });

    /* Чтение вслух по нажатию на текст */
    document.addEventListener('click', (event) => this.onSpeakClick(event), true);
    $('#a11yStop').addEventListener('click', () => this.stopSpeaking());

    /* Маска для чтения следует за курсором, пальцем и фокусом клавиатуры */
    let frame = 0;
    const moveGuide = (y) => {
      if (!this.state.guide) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => document.documentElement.style.setProperty('--guide-y', `${Math.round(y)}px`));
    };
    window.addEventListener('pointermove', (event) => moveGuide(event.clientY), { passive: true });
    window.addEventListener('touchmove', (event) => event.touches[0] && moveGuide(event.touches[0].clientY), { passive: true });
    document.addEventListener('focusin', (event) => {
      if (!this.state.guide || this.panel.contains(event.target)) return;
      const rect = event.target.getBoundingClientRect();
      moveGuide(rect.top + rect.height / 2);
    });

    i18n.onChange(() => this.stopSpeaking());
    this.apply(false);
  },

  load() {
    try {
      const saved = JSON.parse(localStorage.getItem('cf-a11y') || 'null');
      if (!saved || typeof saved !== 'object') return {};
      const clean = {};
      Object.keys(A11Y_DEFAULTS).forEach((key) => {
        if (key in saved && typeof saved[key] === typeof A11Y_DEFAULTS[key]) clean[key] = saved[key];
      });
      return clean;
    } catch (error) {
      return {};
    }
  },

  save() {
    try {
      localStorage.setItem('cf-a11y', JSON.stringify(this.state));
    } catch (error) {
      /* настройки просто не запомнятся */
    }
  },

  set(key, value) {
    this.state[key] = value;
    this.apply();
  },

  /** Профиль заменяет текущие настройки; повторное нажатие на активный профиль выключает его */
  applyProfile(name) {
    const profile = A11Y_PROFILES[name];
    if (!profile) return;
    const wasActive = this.matches(profile);
    this.stopSpeaking();
    this.state = wasActive ? { ...A11Y_DEFAULTS } : { ...A11Y_DEFAULTS, ...profile };
    this.apply();
    if (wasActive) {
      showToast(t('a11y.profileOff'), '', 'info');
    } else {
      const label = uiText(`a11y.p.${name}`);
      showToast(t('a11y.profileOn', { name: label }), '', 'success');
      if (this.state.speak) this.say(`${label}. ${t('a11y.speakOn')}`);
    }
  },

  matches(profile) {
    const target = { ...A11Y_DEFAULTS, ...profile };
    return Object.keys(A11Y_DEFAULTS).every((key) => this.state[key] === target[key]);
  },

  apply(persist = true) {
    const root = document.documentElement;
    A11Y_SETS.forEach((key) => {
      if (this.state[key] === A11Y_DEFAULTS[key]) root.removeAttribute(`data-a11y-${key}`);
      else root.setAttribute(`data-a11y-${key}`, this.state[key]);
    });
    A11Y_TOGGLES.forEach((key) => root.classList.toggle(`a11y-${key}`, !!this.state[key]));
    if (this.state.font !== 'default') this.loadFonts();
    if (!this.state.speak) this.stopSpeaking();

    $$('.a11y-opt', this.panel).forEach((btn) => {
      btn.setAttribute('aria-pressed', String(this.state[btn.dataset.set] === btn.dataset.value));
    });
    $$('.a11y-switch', this.panel).forEach((btn) => {
      btn.setAttribute('aria-checked', String(!!this.state[btn.dataset.toggle]));
    });
    $$('.a11y-profile', this.panel).forEach((btn) => {
      btn.setAttribute('aria-pressed', String(this.matches(A11Y_PROFILES[btn.dataset.profile])));
    });
    const changed = Object.keys(A11Y_DEFAULTS).some((key) => this.state[key] !== A11Y_DEFAULTS[key]);
    $('#a11yToggle').classList.toggle('is-on', changed);
    if (persist) this.save();
  },

  loadFonts() {
    if ($('#a11yFonts')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'a11yFonts';
    link.href = A11Y_FONTS_URL;
    document.head.appendChild(link);
  },

  open() {
    this.lastFocus = document.activeElement;
    this.loadFonts(); /* чтобы кнопки шрифтов сразу показывали, как он выглядит */
    $('#a11yOverlay').hidden = false;
    this.panel.hidden = false;
    $('#a11yToggle').setAttribute('aria-expanded', 'true');
    document.body.classList.add('a11y-open');
    refreshIcons();
    requestAnimationFrame(() => $('#a11yClose').focus());
  },

  close() {
    if (this.panel.hidden) return;
    this.panel.hidden = true;
    $('#a11yOverlay').hidden = true;
    $('#a11yToggle').setAttribute('aria-expanded', 'false');
    document.body.classList.remove('a11y-open');
    if (this.lastFocus && document.contains(this.lastFocus)) this.lastFocus.focus();
  },

  /** Esc закрывает панель, Tab не выходит за её пределы */
  onPanelKey(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = $$('button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])', this.panel)
      .filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  },

  /* ----- Чтение вслух (Web Speech API, голоса берутся из системы устройства) ----- */
  onSpeakClick(event) {
    if (!this.state.speak || !this.canSpeak) return;
    if (event.target.closest('#a11yStop, .a11y-switch[data-toggle="speak"]')) return;
    const el = event.target.closest(A11Y_SPEAK_SEL);
    if (!el) return;
    let text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) text = el.getAttribute('aria-label') || el.getAttribute('title') || '';
    if (!text) return;
    this.say(text, el);
  },

  pickVoice() {
    const want = { ru: 'ru', en: 'en', kk: 'kk' }[i18n.lang] || 'ru';
    const find = (code) => this.voices.find((v) => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(code));
    let voice = find(want);
    let lang = { ru: 'ru-RU', en: 'en-US', kk: 'kk-KZ' }[want];
    if (!voice && want === 'kk') {
      voice = find('ru');
      if (voice) {
        lang = 'ru-RU';
        if (!this.kkWarned) {
          this.kkWarned = true;
          showToast(t('a11y.kkVoice'), '', 'info');
        }
      }
    }
    return { voice, lang };
  },

  /** Длинный текст делится на части: некоторые браузеры обрывают длинные фразы */
  chunks(text) {
    const parts = text.slice(0, 5000).match(/[^.!?…;:]+[.!?…;:]*\s*/g) || [text];
    const out = [];
    let current = '';
    parts.forEach((part) => {
      if ((current + part).length > 220 && current) {
        out.push(current.trim());
        current = '';
      }
      current += part;
    });
    if (current.trim()) out.push(current.trim());
    return out;
  },

  say(text, el = null) {
    if (!this.canSpeak) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    this.markReading(el);
    const { voice, lang } = this.pickVoice();
    const list = this.chunks(text);
    $('#a11yStop').hidden = false;
    list.forEach((piece, index) => {
      const utter = new SpeechSynthesisUtterance(piece);
      utter.lang = lang;
      try {
        if (voice) utter.voice = voice;
      } catch (error) {
        /* голос недоступен — остаётся язык по умолчанию */
      }
      utter.rate = 0.95;
      if (index === list.length - 1) {
        utter.onend = () => this.finishSpeaking();
        utter.onerror = () => this.finishSpeaking();
      }
      synth.speak(utter);
    });
  },

  markReading(el) {
    if (this.readingEl) this.readingEl.classList.remove('a11y-reading');
    this.readingEl = el;
    if (el) el.classList.add('a11y-reading');
  },

  finishSpeaking() {
    if (this.canSpeak && window.speechSynthesis.speaking) return;
    this.markReading(null);
    $('#a11yStop').hidden = true;
  },

  stopSpeaking() {
    if (this.canSpeak) window.speechSynthesis.cancel();
    this.markReading(null);
    const stop = $('#a11yStop');
    if (stop) stop.hidden = true;
  }
};

/* ---------- 16. Инициализация ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();

  /* Язык инициализируется первым: модули ниже подписываются на его смену */
  i18n.init();

  modal.init();
  initTheme();
  initHeader();
  mobileMenu.init();
  initRipple();
  initReveal();
  initCounters();

  essays.init();
  calculator.init();
  initTabs();
  game.init();
  quiz.init();
  concepts.init();
  comic.init();
  promo.init();
  helpSection.init();
  wizard.init();
  report.init();
  templates.init();
  kzMap.init();
  wall.init();
  charts.init();

  initFeedbackForm();
  faq.init();
  initVolunteerForm();
  assistant.init();
  a11y.init();

  /* Применяем сохранённый язык ко всему сайту сразу */
  i18n.start();
  game.render();

  if (!window.lucide) {
    console.warn('Lucide Icons не загружены — проверьте подключение к интернету.');
  }
});
