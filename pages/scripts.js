import { useState } from 'react'

const scripts = [
  {
    id: 1,
    day: 1,
    title: 'Seedance 2.0 — The AI Video Tool That Just Changed Everything',
    pillar: 'Tutorial + News',
    priority: 'URGENT',
    bestDay: 'Mon/Tue',
    duration: '55-65 sec',
    thumbnail: 'Bold text overlay: "THIS AI VIDEO TOOL IS FREE" with jaw-drop still frame from Seedance 2.0 output. Vaibhav-style colored text blocks.',
    hook: "ByteDance just dropped an AI video generator that makes Hollywood-quality videos with SOUND — and it's completely free right now.",
    sections: [
      { label: 'HOOK (0-3s)', content: '[Direct to camera, energetic]\n"ByteDance just dropped an AI video generator that makes Hollywood-quality videos with SOUND — and it\'s completely free right now."\n[Show a 2-second Seedance 2.0 output clip]' },
      { label: 'CONTEXT (3-8s)', content: '"While everyone\'s been arguing about Sora, this tool quietly launched and it blows everything else away. It\'s called Seedance 2.0."' },
      { label: 'DEMO (8-40s)', content: '[Screen recording]\n"Watch this. I type a simple prompt…"\n[Show typing: \'A cinematic drone shot over Tokyo at sunset with ambient city sounds\']\n"And look at what it generates."\n[Show the output — pause 3 seconds on the result]\n"That\'s AI-generated video AND audio together. No editing. One click."\n[Show the reference system: uploading an image and tagging it]\n"You can even upload your own photos as references — it keeps your character consistent across scenes."' },
      { label: 'MIND-BLOW (40-50s)', content: '"This is free. Right now. No waitlist. But ByteDance won\'t keep it free forever — they never do."' },
      { label: 'CTA (50-60s)', content: '"Save this before it gets buried. Tag a content creator who NEEDS to see this. Link to access it is in my bio."\n[Point up to bio]' },
    ],
    psychology: 'Curiosity gap ("quietly launched"), Scarcity ("won\'t keep it free forever"), FOMO ("while everyone was arguing"), Reciprocity (free tutorial)',
    keywords: 'Seedance 2.0, AI video generator, free AI tool, ByteDance AI, AI video with sound, text to video AI',
    hashtags: '#AITools #Seedance #AIVideo #FreeAI #ContentCreator',
  },
  {
    id: 2,
    day: 2,
    title: 'Claude Sonnet 4.6 — The AI That Just Beat the $200 Model (For Free)',
    pillar: 'News + Tutorial',
    priority: 'URGENT',
    bestDay: 'Tue/Wed',
    duration: '50-60 sec',
    thumbnail: 'Split comparison visual with price crossed out. Ishan Sharma style — bold colorful text, your face showing surprise.',
    hook: "Anthropic just released an AI that performs at 99% of their $200 model — and it's completely free. This changes everything.",
    sections: [
      { label: 'HOOK (0-3s)', content: '[Direct to camera, serious tone]\n"Anthropic just released an AI that performs at 99% of their $200 model — and it\'s completely free. This changes everything."' },
      { label: 'WHAT (3-12s)', content: '"It\'s called Claude Sonnet 4.6. It launched February 17th and in blind tests, developers preferred it over the previous flagship model 59% of the time. It has a million-token context window — that means it can read an entire book in one go."' },
      { label: 'DEMO (12-40s)', content: '[Screen recording of claude.ai]\n"Watch what it does. I\'m going to paste an entire 50-page business plan and ask it to find every weakness."\n[Show pasting]\n"In 8 seconds…"\n[Show the detailed analysis]\n"It found 7 critical gaps I missed. This would have cost me $500 from a consultant."' },
      { label: 'WHY CARE (40-50s)', content: '"If you\'re a student, a business owner, or anyone who writes — you just got a $200/month tool for free. This is the biggest AI upgrade of February and nobody is covering it."' },
      { label: 'CTA (50-60s)', content: '"Follow me — I break down every AI update so you never miss what matters. Save this and try it today."' },
    ],
    psychology: 'Loss aversion ("$200 for free"), Authority (citing benchmarks), FOMO ("nobody is covering it"), Reciprocity (free value)',
    keywords: 'Claude Sonnet 4.6, free AI, Anthropic, AI writing tool, best AI 2026, AI for business, AI for students',
    hashtags: '#ClaudeAI #AIUpdate #FreeAITool #Anthropic #AIForBusiness',
  },
  {
    id: 3,
    day: 3,
    title: 'Vibe Coding — Build a Full App Without Writing ONE Line of Code',
    pillar: 'Tutorial',
    priority: 'HIGH',
    bestDay: 'Mon/Thu',
    duration: '60-75 sec',
    thumbnail: 'Show the finished app on screen with "BUILT IN 5 MIN — NO CODE" text overlay. Numbered steps (1, 2, 3) like Ishan Sharma\'s thumbnails.',
    hook: "I just built a fully working app in 5 minutes. I didn't write a single line of code. This is the biggest tech trend of 2026 and it's called vibe coding.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"I just built a fully working app in 5 minutes. I didn\'t write a single line of code. This is the biggest tech trend of 2026 and it\'s called vibe coding."\n[Show the finished app for 1 second]' },
      { label: 'WHAT (3-10s)', content: '"MIT Technology Review named it a top 10 breakthrough technology. You describe what you want in plain English — and AI builds it. 75% of people using these tools have never coded in their life."' },
      { label: 'DEMO (10-50s)', content: '[Screen recording of Lovable or Replit]\n"Watch. I\'m typing: \'Build me a habit tracker app with a clean dashboard and weekly stats.\'"\n[Show the AI generating the app in real-time]\n"Step 1: It builds the interface." [Text overlay: STEP 1]\n"Step 2: It adds the logic." [Text overlay: STEP 2]\n"Step 3: It deploys it — live on the internet." [Text overlay: STEP 3]\n[Show the working app]\n"That\'s a real app. Working. Live. Zero code."' },
      { label: 'TOOLS (50-58s)', content: '"Three tools to start: Lovable for beginners — it\'s free. Replit for more control. Cursor if you want to go pro. All free tiers available."' },
      { label: 'CTA (58-65s)', content: '"Save this — you\'ll want to try it this weekend. And share it with someone who\'s always had an app idea but thought they couldn\'t build it."' },
    ],
    psychology: 'Social proof (MIT, 75% stat), Curiosity gap ("vibe coding"), Empowerment ("you can do this"), Reciprocity (3 free tools)',
    keywords: 'vibe coding, build app no code, AI app builder, Lovable AI, Replit AI, Cursor AI, no code 2026',
    hashtags: '#VibeCoding #NoCode #AIAppBuilder #BuildWithAI #TechTrend2026',
  },
  {
    id: 4,
    day: 4,
    title: "Nvidia Just Revealed Vera Rubin — And It's 10x More Powerful",
    pillar: 'News',
    priority: 'HIGH',
    bestDay: 'Tue',
    duration: '45-55 sec',
    thumbnail: 'Nvidia Vera Rubin visual with "10x" in huge bold text. Jensen Huang or chip imagery.',
    hook: "Nvidia just showed the world their next AI system and it's 10 times more powerful than anything that exists. Here's what this means for you.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"Nvidia just showed the world their next AI system and it\'s 10 times more powerful than anything that exists. Here\'s what this means for you."\n[Show Vera Rubin visual]' },
      { label: 'WHAT (3-15s)', content: '"It\'s called Vera Rubin. 72 next-gen GPUs, 36 CPUs, 100% liquid cooled. It ships later this year and it will power the next wave of AI that makes everything we have now look like a toy."' },
      { label: 'SO WHAT (15-35s)', content: '"Here\'s why you should care even if you\'re not technical: Every AI tool you use — ChatGPT, Claude, Gemini — runs on chips like these. More power means faster responses, better quality, and AI that can do things we literally can\'t imagine yet. The AI tools you\'ll use in 2027 will be 10x better than today. And the people who learn AI now will have a massive head start."' },
      { label: 'PERSPECTIVE (35-45s)', content: '"Just to put this in perspective: the AI that wrote your last email? That\'s running on last year\'s chips. Imagine what happens when it\'s running on this."\n[Point to Vera Rubin image]' },
      { label: 'CTA (45-55s)', content: '"Follow for daily AI updates. Share this with someone who thinks AI has peaked — it hasn\'t even started."' },
    ],
    psychology: 'FOMO ("head start"), Curiosity ("can\'t imagine yet"), Authority (technical specs), Future-pacing ("what happens when")',
    keywords: 'Nvidia Vera Rubin, AI chips, AI hardware 2026, future of AI, Nvidia GPU, AI computing power',
    hashtags: '#Nvidia #VeraRubin #AIHardware #FutureOfAI #AIUpdate',
  },
  {
    id: 5,
    day: 5,
    title: 'The Perfect Prompt Formula That Works on ANY AI Tool',
    pillar: 'Evergreen',
    priority: 'MEDIUM',
    bestDay: 'Wed/Thu',
    duration: '50-60 sec',
    thumbnail: 'Clean formula visual: R + C + T + F = Perfect Output. Use bold contrasting colors on each letter.',
    hook: "90% of people use AI wrong because they don't know this one formula. Memorize it and every AI tool will give you 10x better results.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"90% of people use AI wrong because they don\'t know this one formula. Memorize it and every AI tool will give you 10x better results."\n[Hold up 4 fingers]' },
      { label: 'FORMULA (3-12s)', content: '"Four letters. R-C-T-F."\n[Text overlay appears letter by letter]\n"Role. Context. Task. Format. That\'s it. This works on ChatGPT, Claude, Gemini — any AI, forever."' },
      { label: 'DEMO (12-45s)', content: '[Screen recording]\n"Watch. Bad prompt: \'Write me a marketing email.\'"\n[Show mediocre output]\n"Now the RCTF formula: \'You are an expert email copywriter [ROLE]. I run a fitness studio launching a summer program [CONTEXT]. Write a promotional email that creates urgency [TASK]. Use short paragraphs, one clear CTA, and a subject line [FORMAT].\'"\n[Show dramatically better output]\n"See the difference? Night and day."' },
      { label: 'RULE (45-52s)', content: '"The more specific each letter is, the better your output. Think of it like ordering food — \'give me food\' vs. \'give me a medium-rare ribeye with garlic butter.\' Same AI, completely different results."' },
      { label: 'CTA (52-60s)', content: '"Save this formula. Screenshot it. Use it every single day. You\'ll never write a bad prompt again."' },
    ],
    psychology: 'Authority ("formula"), Reciprocity (free framework), Social proof ("90% of people"), Loss aversion ("using AI wrong")',
    keywords: 'AI prompt formula, how to prompt AI, ChatGPT prompts, prompt engineering, better AI results, RCTF method',
    hashtags: '#PromptEngineering #AITips #ChatGPTHacks #AIForBeginners #PromptFormula',
  },
  {
    id: 6,
    day: 6,
    title: "OpenAI Just Retired GPT-4o — Here's What Replaced It",
    pillar: 'News',
    priority: 'URGENT',
    bestDay: 'Tue',
    duration: '45-55 sec',
    thumbnail: 'Dramatic "RETIRED" stamp over GPT-4o logo. Arrow to new model name. Red/black color scheme.',
    hook: "OpenAI just killed GPT-4o, GPT-4.1, and GPT-5. Three models gone in one week. Here's what replaced them and why it matters.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"OpenAI just killed GPT-4o, GPT-4.1, and GPT-5. Three models gone in one week. Here\'s what replaced them and why it matters."\n[Show models being crossed out]' },
      { label: 'WHAT (3-15s)', content: '"They launched GPT-5.3-Codex-Spark — a coding model that generates over 1,000 tokens per second. That\'s faster than you can read. And they dropped Lockdown Mode for high-security users."' },
      { label: 'IMPACT (15-35s)', content: '"What this means for you: If you were using GPT-4o, you\'re automatically on the new model now. It\'s faster, smarter, and specifically optimized for coding and real-time tasks. OpenAI is moving FAST — they\'re at $20 billion in annual revenue and they\'re not slowing down."' },
      { label: 'TAKE (35-45s)', content: '"My take: This is the new normal. AI models now have a shelf life of months, not years. If you\'re not keeping up with these updates, you\'re using outdated tools while your competition upgrades."' },
      { label: 'CTA (45-55s)', content: '"That\'s why you follow me — I track every update so you don\'t have to. Share this with someone still using old models."' },
    ],
    psychology: 'FOMO ("competition upgrades"), Urgency ("shelf life of months"), Authority (insider knowledge), Loss aversion ("outdated tools")',
    keywords: 'OpenAI update, GPT-4o retired, GPT-5.3, ChatGPT update February 2026, AI model changes, OpenAI news',
    hashtags: '#OpenAI #GPT5 #AINews #ChatGPTUpdate #AIModels',
  },
  {
    id: 7,
    day: 7,
    title: 'Google AI Mode Now Has 75 Million Users — And Shopping Ads Inside AI',
    pillar: 'News + Business',
    priority: 'HIGH',
    bestDay: 'Wed/Fri',
    duration: '45-55 sec',
    thumbnail: 'Google AI Mode screenshot with "75 MILLION USERS" and shopping ad callout. Business-owner targeted.',
    hook: "Google just put shopping ads inside AI search results. 75 million people use this daily. If you sell anything online, this is the biggest shift since Google Shopping.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"Google just put shopping ads inside AI search results. 75 million people use this daily. If you sell anything online, this is the biggest shift since Google Shopping."\n[Show AI Mode interface]' },
      { label: 'WHAT (3-12s)', content: '"Google AI Mode is their conversational search — think ChatGPT but inside Google. And now, when someone asks \'best running shoes for flat feet,\' they\'ll see sponsored product placements right inside the AI answer."' },
      { label: 'WHY CARE (12-32s)', content: '"If you\'re a business owner, this is massive. Your products can now show up INSIDE AI-generated answers, not just in regular search results. This is where shopping is heading — people asking AI what to buy and getting recommendations with buy links right there."' },
      { label: 'ACTION (32-45s)', content: '"What to do right now: Make sure your Google Merchant Center is set up. Optimize your product descriptions with conversational keywords — not just SEO keywords, but the way people actually talk. \'Best budget laptop for students\' not just \'cheap laptop.\'"' },
      { label: 'CTA (45-55s)', content: '"Save this if you run a business. The e-commerce game just changed and most business owners don\'t know yet. Share this with an entrepreneur."' },
    ],
    psychology: 'Scarcity (early-mover advantage), Authority (75M stat), FOMO ("most don\'t know yet"), Loss aversion ("biggest shift")',
    keywords: 'Google AI Mode, AI shopping ads, Google shopping 2026, AI search marketing, business AI strategy',
    hashtags: '#GoogleAI #AIMarketing #EcommerceTips #AIForBusiness #DigitalMarketing',
  },
  {
    id: 8,
    day: 8,
    title: "AI Writes 41% of All Code Now — Here's What That Means For Jobs",
    pillar: 'Myth-Bust',
    priority: 'HIGH',
    bestDay: 'Sat',
    duration: '50-60 sec',
    thumbnail: '"41% OF CODE IS NOW AI" in massive bold text. Split face: worried vs. confident. Contrarian thumbnail.',
    hook: "41% of all code written globally is now AI-generated. Microsoft, Google, Amazon — all of them. Before you panic, let me tell you why this is actually the best news for your career.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"41% of all code written globally is now AI-generated. Microsoft, Google, Amazon — all of them. Before you panic, let me tell you why this is actually the best news for your career."\n[Show 41% stat on screen]' },
      { label: 'FEAR (3-10s)', content: '"I know what you\'re thinking: \'Developers are done.\' That\'s what everyone said about accountants when Excel launched. And about designers when Canva came out. Here\'s what actually happened."' },
      { label: 'TRUTH (10-35s)', content: '"The demand for both went UP, not down. Why? Because tools that make things easier create MORE demand for the work. When Excel made spreadsheets easy, every company needed more financial analysis, not less. Same thing is happening with AI and coding. Vibe coding isn\'t replacing developers — it\'s creating millions of new builders who need developers to take their prototypes to production."' },
      { label: 'OPPORTUNITY (35-50s)', content: '"The real opportunity: Learn to WORK WITH AI, not compete against it. The developers earning the most right now are the ones using AI to ship 10x faster. The marketers winning are the ones using AI to test 50 ideas instead of 5. AI doesn\'t replace humans — it replaces humans who don\'t use AI."' },
      { label: 'CTA (50-60s)', content: '"Drop \'agree\' or \'disagree\' in the comments. And share this with someone who\'s worried about AI taking their job."' },
    ],
    psychology: 'Loss aversion + reframe, Social proof (companies named), Authority (data-backed), Comment bait (agree/disagree)',
    keywords: 'AI replacing jobs, AI coding statistics, future of work AI, will AI take my job, AI career advice, vibe coding jobs',
    hashtags: '#AIJobs #FutureOfWork #AICareer #VibeCoding #AIMyth',
  },
  {
    id: 9,
    day: 9,
    title: '5 AI Tools That Replace $500/Month in Software (All Free)',
    pillar: 'Evergreen + Tutorial',
    priority: 'MEDIUM',
    bestDay: 'Mon/Thu',
    duration: '60-75 sec',
    thumbnail: 'Grid of 5 tool icons with "$500/mo → $0" in bold green text. Numbered 1-5. Ishan Sharma style.',
    hook: "5 free AI tools that replace $500 a month in paid software. I use all 5 every single day. The last one saved me the most money.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"5 free AI tools that replace $500 a month in paid software. I use all 5 every single day. The last one saved me the most money."\n[Hold up 5 fingers]' },
      { label: 'TOOL 1 (3-15s)', content: '"Number 1: ChatGPT free tier replaces Grammarly, Jasper, and Copy.ai for writing. Custom instructions make it sound exactly like you."\n[Quick screen demo — 3 seconds]' },
      { label: 'TOOL 2 (15-25s)', content: '"Number 2: Canva AI replaces Adobe Express and Photoshop for 90% of design tasks. Background removal, Magic Write, AI image generation — all free."\n[Quick demo]' },
      { label: 'TOOL 3 (25-35s)', content: '"Number 3: CapCut replaces Premiere Pro for short-form video editing. Auto-captions, trending templates, AI effects. Completely free."\n[Quick demo]' },
      { label: 'TOOL 4 (35-45s)', content: '"Number 4: Notion AI replaces Trello, Asana, and your notes app. Project management, meeting notes, knowledge base — one place."\n[Quick demo]' },
      { label: 'TOOL 5 (45-58s)', content: '"Number 5 — the one that saved me the most: Claude.ai. Free tier gives you Sonnet 4.6 — which just tested better than the $200 model. I use it for business analysis, content strategy, and research. Replaced my virtual assistant."\n[Show Claude interface]' },
      { label: 'CTA (58-65s)', content: '"That\'s $500 a month saved. Screenshot this. Save this. Try one today. Which tool are you downloading first? Comment below."' },
    ],
    psychology: 'Curiosity loop ("last one saved the most"), Reciprocity (5 free tools), Loss aversion ($500/month wasted), Social engagement',
    keywords: 'free AI tools, AI tools replace software, save money AI, best free AI 2026, AI productivity tools',
    hashtags: '#FreeAITools #SaveMoney #AIProductivity #BestAITools #AIForEveryone',
  },
  {
    id: 10,
    day: 10,
    title: "Apple's New Siri is Coming — Powered by Google's Gemini AI",
    pillar: 'News',
    priority: 'HIGH',
    bestDay: 'Tue',
    duration: '45-55 sec',
    thumbnail: 'Apple logo + Google logo mashup. "SIRI IS GETTING A BRAIN" text. Dramatic merge visual.',
    hook: "Apple just did something nobody expected — they're putting Google's AI brain inside Siri. Coming March 2026. This changes iPhones forever.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"Apple just did something nobody expected — they\'re putting Google\'s AI brain inside Siri. Coming March 2026. This changes iPhones forever."\n[Show Apple + Google visual]' },
      { label: 'WHAT (3-15s)', content: '"Apple announced a completely redesigned, AI-powered Siri using Google\'s 1.2 trillion parameter Gemini model. It will have on-screen awareness — meaning Siri can see what\'s on your screen and act on it. Cross-app integration — it can do things ACROSS your apps, not just within one."' },
      { label: 'DEMO VISION (15-35s)', content: '"Imagine this: You\'re looking at a restaurant on Google Maps. You say \'Siri, book a table for two tonight.\' It sees the restaurant on your screen, checks OpenTable, books the reservation, and adds it to your calendar. All without you touching your phone."' },
      { label: 'BIGGER PICTURE (35-45s)', content: '"This is Apple admitting their AI wasn\'t good enough. And Google getting their AI on 1.5 billion iPhones. The two biggest tech companies in the world just teamed up on AI. That should tell you how serious this is getting."' },
      { label: 'CTA (45-55s)', content: '"Are you excited or scared? Comment below. And share this with every iPhone user you know."' },
    ],
    psychology: 'FOMO ("changes iPhones forever"), Curiosity (unexpected partnership), Social proof (two biggest companies), Comment bait',
    keywords: 'Apple Siri AI, Google Gemini Siri, new Siri 2026, iPhone AI update, Apple Google partnership, iOS 26',
    hashtags: '#Apple #Siri #GoogleGemini #iPhoneAI #TechNews2026',
  },
  {
    id: 11,
    day: 11,
    title: 'Gemini 3.1 Pro vs Claude Sonnet 4.6 vs GPT-5.3 — Honest Comparison',
    pillar: 'Evergreen',
    priority: 'MEDIUM',
    bestDay: 'Wed/Thu',
    duration: '60-75 sec',
    thumbnail: 'Three-way split with Google, Anthropic, OpenAI logos. "VS" in red. "HONEST TEST" stamp. Vaibhav\'s comparison style.',
    hook: "Three AI giants dropped new models in the same week. I tested all three with the EXACT same tasks. One of them absolutely destroyed the others.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"Three AI giants dropped new models in the same week. I tested all three with the EXACT same tasks. One of them absolutely destroyed the others."\n[Show three logos]' },
      { label: 'TEST 1 (3-18s)', content: '"Test 1: Business email. Same brief to all three."\n[Show side-by-side outputs]\n"GPT-5.3: Professional but generic. Gemini 3.1 Pro: Good structure, slightly robotic. Claude Sonnet 4.6: Reads like a human wrote it. Round 1 goes to Claude."\n[Text overlay: CLAUDE WINS]' },
      { label: 'TEST 2 (18-33s)', content: '"Test 2: Code generation. \'Build a working calculator app.\'"\n[Show outputs]\n"GPT-5.3 Codex: Lightning fast, clean code. Claude: Great but slower. Gemini: Solid but missed edge cases. Round 2 goes to GPT."\n[Text overlay: GPT WINS]' },
      { label: 'TEST 3 (33-48s)', content: '"Test 3: Analyze a 30-page document and find the top 5 insights."\n[Show outputs]\n"This is where Claude\'s million-token context window shines. It caught nuances the other two completely missed. Gemini was close. GPT summarized well but missed depth. Round 3: Claude."\n[Text overlay: CLAUDE WINS]' },
      { label: 'VERDICT (48-58s)', content: '"My honest verdict: Claude for writing and research. GPT for coding speed. Gemini for Google integration and multimodal. There\'s no single best AI anymore — it depends on YOUR use case."' },
      { label: 'CTA (58-65s)', content: '"Which one do YOU use most? Comment below. Save this comparison — you\'ll reference it."' },
    ],
    psychology: 'Curiosity ("who won?"), Competition instinct, Authority (tested all three), Comment bait ("which do YOU use")',
    keywords: 'Claude vs GPT vs Gemini, best AI 2026, AI comparison, Claude Sonnet 4.6, GPT 5.3, Gemini 3.1 Pro',
    hashtags: '#AIComparison #BestAI2026 #ClaudeVsGPT #AIBattle #AIReview',
  },
  {
    id: 12,
    day: 12,
    title: "Anthropic's $30 BILLION Funding Round — Why This Matters For You",
    pillar: 'News',
    priority: 'HIGH',
    bestDay: 'Tue',
    duration: '40-50 sec',
    thumbnail: '"$30 BILLION" in huge gold text over Anthropic logo. Shock value thumbnail.',
    hook: "Anthropic — the company behind Claude AI — just raised 30 billion dollars. Their valuation doubled in 5 months to $380 billion. Here's why this matters to YOU.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"Anthropic — the company behind Claude AI — just raised 30 billion dollars. Their valuation doubled in 5 months to $380 billion. Here\'s why this matters to YOU."\n[Show $30B number]' },
      { label: 'CONTEXT (3-12s)', content: '"To put that in perspective: that\'s more than the GDP of most countries. This is the biggest private AI funding round in history. And it happened while their FREE model is outperforming everyone else\'s paid models."' },
      { label: 'WHY YOU CARE (12-30s)', content: '"Here\'s what $30 billion means for you: Better free tools. Faster models. More features. When an AI company gets this much money, they invest it in making their product insanely good to acquire users. Right now, Claude Sonnet 4.6 is free because they WANT you using it. This won\'t last forever."' },
      { label: 'PREDICTION (30-40s)', content: '"My prediction: Within 6 months, features that are free today will move behind a paywall. The window to learn these tools for free is RIGHT NOW. Don\'t waste it."' },
      { label: 'CTA (40-50s)', content: '"Follow for daily AI updates. Share this with someone who\'s still on the fence about learning AI."' },
    ],
    psychology: 'Scarcity ("won\'t last forever"), FOMO ("window is RIGHT NOW"), Authority (financial data), Urgency',
    keywords: 'Anthropic funding, AI investment 2026, Claude AI free, AI industry news, biggest AI deal',
    hashtags: '#Anthropic #AIFunding #ClaudeAI #AINews #TechInvesting',
  },
  {
    id: 13,
    day: 13,
    title: 'The AI Morning Routine That Saves Me 2 Hours Every Day',
    pillar: 'Evergreen + Business',
    priority: 'MEDIUM',
    bestDay: 'Mon/Wed',
    duration: '60-70 sec',
    thumbnail: 'Split: messy desk (BEFORE) vs clean AI dashboard (AFTER). "2 HOURS SAVED" in bold. Productivity thumbnail.',
    hook: "This AI morning routine saves me 2 hours before most people wake up. I've done it every day for 6 months and I'm never going back.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"This AI morning routine saves me 2 hours before most people wake up. I\'ve done it every day for 6 months and I\'m never going back."\n[Show clock/morning visual]' },
      { label: 'STEP 1 (3-15s)', content: '"6:00 AM — AI Email Triage. I open Claude and paste my inbox summary. Prompt: \'Categorize these by urgency. Draft replies for the top 3. Skip anything that\'s just FYI.\' 15 minutes of email done in 2."\n[Text overlay: STEP 1 — EMAIL]' },
      { label: 'STEP 2 (15-25s)', content: '"6:10 AM — AI News Briefing. I ask: \'Give me the 5 most important things that happened in [my industry] in the last 24 hours with one-line summaries.\' I\'m caught up on news in 60 seconds, not 30 minutes."\n[Text overlay: STEP 2 — NEWS]' },
      { label: 'STEP 3 (25-38s)', content: '"6:15 AM — AI Task Planning. I paste yesterday\'s to-do list and today\'s calendar. Prompt: \'Based on my meetings and deadlines, prioritize today\'s tasks and block time for deep work.\' It builds my entire day plan in seconds."\n[Text overlay: STEP 3 — PLANNING]' },
      { label: 'STEP 4 (38-50s)', content: '"6:20 AM — AI Content Draft. While I eat breakfast, AI drafts my social media post, newsletter outline, or meeting prep based on templates I\'ve saved. By 6:30, I\'ve done what used to take until 8:00."\n[Text overlay: STEP 4 — CONTENT]' },
      { label: 'CTA (50-60s)', content: '"That\'s 2 hours saved. Every day. For free. Save this routine and try it tomorrow morning. Comment which step you\'ll start with."' },
    ],
    psychology: 'Social proof ("6 months"), Reciprocity (free system), Loss aversion ("2 hours wasted"), Specificity (exact times)',
    keywords: 'AI morning routine, AI productivity, save time with AI, AI daily workflow, ChatGPT morning routine',
    hashtags: '#AIProductivity #MorningRoutine #AIWorkflow #SaveTime #ProductivityHacks',
  },
  {
    id: 14,
    day: 14,
    title: 'EU Just Passed the AI Act — Every Creator Needs to Know This',
    pillar: 'News',
    priority: 'HIGH',
    bestDay: 'Fri/Sat',
    duration: '45-55 sec',
    thumbnail: 'EU flag with "AI ACT" stamp. Warning triangle. "AFFECTS YOU" callout. News-style urgent thumbnail.',
    hook: "The European Union just dropped the first-ever AI law. If you create content, use AI tools, or run a business — this affects you. Here's what you need to know in 60 seconds.",
    sections: [
      { label: 'HOOK (0-3s)', content: '"The European Union just dropped the first-ever AI law. If you create content, use AI tools, or run a business — this affects you. Here\'s what you need to know in 60 seconds."\n[Show EU AI Act visual]' },
      { label: 'WHAT (3-15s)', content: '"The EU AI Act now requires every piece of AI-generated content to be labeled. Deepfakes, AI-written text, AI images — all of it must be marked in machine-readable formats. This goes into full effect August 2026."' },
      { label: 'IMPACT (15-35s)', content: '"What this means: If you use AI to create social media content, blog posts, or marketing materials and your audience includes anyone in Europe — you\'ll need to disclose it. AI tool providers like OpenAI and Anthropic will need to build watermarking directly into their tools. And high-risk AI uses like hiring, healthcare, and law enforcement face strict requirements."' },
      { label: 'TAKE (35-45s)', content: '"My take: This is coming everywhere, not just Europe. The US, India, and others are watching. Start building the habit of disclosing AI use now. It\'s better to be early than to scramble later."' },
      { label: 'CTA (45-55s)', content: '"Save this — you\'ll need to reference it. Share with anyone who uses AI in their work. Follow for updates as this rolls out."' },
    ],
    psychology: 'Urgency ("August 2026"), Authority (EU legislation), FOMO ("affects you"), Loss aversion ("scramble later")',
    keywords: 'EU AI Act, AI regulation 2026, AI content labeling, AI law, deepfake regulation, AI disclosure',
    hashtags: '#EUAIAct #AIRegulation #AILaw #ContentCreators #AIPolicy',
  },
  {
    id: 15,
    day: 15,
    title: 'AI vs Human: Who Writes a Better Instagram Caption? (Honest Test)',
    pillar: 'Evergreen',
    priority: 'MEDIUM',
    bestDay: 'Sat',
    duration: '55-65 sec',
    thumbnail: 'Split screen battle visual. "WHO WINS?" text. Instagram post mockup in background. High-share potential.',
    hook: "I gave AI and a professional copywriter the EXACT same brief: write an Instagram caption for a coffee brand. One of them absolutely crushed the other. Can you guess which?",
    sections: [
      { label: 'HOOK (0-3s)', content: '"I gave AI and a professional copywriter the EXACT same brief: write an Instagram caption for a coffee brand. One of them absolutely crushed the other. Can you guess which?"\n[Show split screen]' },
      { label: 'SETUP (3-10s)', content: '"Same brief: \'Write an engaging Instagram caption for a specialty coffee brand launching a new cold brew. Target: millennials. Tone: playful but premium. Include a CTA.\' Let\'s see what happened."' },
      { label: 'HUMAN (10-25s)', content: '"The human copywriter took 25 minutes and wrote this:"\n[Show caption on screen — pause 4 seconds]\n"Solid hook, clever wordplay, strong CTA. This is what $150 gets you from a freelancer."' },
      { label: 'AI (25-40s)', content: '"Claude took 8 seconds and wrote this:"\n[Show AI caption on screen — pause 4 seconds]\n"Different angle. More emotional. The CTA is actually stronger. And I generated 5 variations to choose from."' },
      { label: 'VERDICT (40-52s)', content: '"Honestly? The AI caption was 80% as creative but 10x faster and free. But here\'s the real insight most people miss: the BEST result was when I took the AI draft and added my personal touch in 2 minutes. AI + Human beats both. Every time."' },
      { label: 'CTA (52-60s)', content: '"Who do you think won — AI or Human? Drop your answer in the comments. And save this — I do these showdowns every week."' },
    ],
    psychology: 'Curiosity ("can you guess?"), Competition instinct, Comment bait (binary choice), Authority (fair test), Watch time',
    keywords: 'AI vs human, AI copywriting test, AI Instagram captions, AI writing quality, ChatGPT vs human writer',
    hashtags: '#AIvsHuman #AIWriting #InstagramCaption #AITest #CopywritingAI',
  },
]

const priorityColors = {
  'URGENT': '#ef4444',
  'HIGH': '#f59e0b',
  'MEDIUM': '#3b82f6',
}

export default function Scripts() {
  const [selectedId, setSelectedId] = useState(1)
  const script = scripts.find(s => s.id === selectedId) || scripts[0]
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text.replace(/\n/g, '\n'))
    alert('Copied to clipboard!')
  }
  
  return (
    <div className="container">
      <h1 style={{ marginBottom: '10px' }}>📝 15 Shoot-Ready Reel Scripts</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        Based on latest AI news • Modeled after @vaibhavsisinty, @thevarunmayya, @ishansharma7390
      </p>
      
      {/* Script Selector */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '30px' }}>
        {scripts.map(s => (
          <button
            key={s.id}
            className={`btn ${selectedId === s.id ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setSelectedId(s.id)}
            style={{ 
              borderLeft: `3px solid ${priorityColors[s.priority]}`,
            }}
          >
            #{s.id}
          </button>
        ))}
      </div>
      
      {/* Script Card */}
      <div className="script-card">
        <div className="script-header">
          <div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
              <span className="script-day">Reel #{script.id}</span>
              <span style={{ 
                background: `${priorityColors[script.priority]}20`,
                color: priorityColors[script.priority],
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {script.priority}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Best: {script.bestDay}
              </span>
            </div>
            <div className="script-title">{script.title}</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>
              {script.pillar} • {script.duration}
            </div>
          </div>
        </div>
        
        {/* Thumbnail Idea */}
        <div style={{ marginBottom: '25px' }}>
          <label>🖼️ Thumbnail/Cover</label>
          <div style={{ 
            background: 'var(--bg-secondary)',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '8px',
            fontSize: '0.95rem'
          }}>
            {script.thumbnail}
          </div>
        </div>
        
        {/* Hook */}
        <div style={{ marginBottom: '25px' }}>
          <label>🎣 The Hook</label>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--accent), #a78bfa)',
            padding: '20px',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: '600',
            marginTop: '10px',
          }}>
            "{script.hook}"
            <button 
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: '15px' }}
              onClick={() => copyToClipboard(script.hook)}
            >
              Copy
            </button>
          </div>
        </div>
        
        {/* Script Sections */}
        <div style={{ marginBottom: '25px' }}>
          <label>📜 Full Script</label>
          <div style={{ marginTop: '10px' }}>
            {script.sections.map((section, i) => (
              <div key={i} className="script-section">
                <div className="script-section-label">{section.label}</div>
                <div className="script-content">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Psychology Triggers */}
        <div style={{ marginBottom: '20px' }}>
          <label>🧠 Psychology Triggers</label>
          <div style={{ 
            background: 'var(--bg-secondary)',
            padding: '12px 15px',
            borderRadius: '8px',
            marginTop: '8px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            {script.psychology}
          </div>
        </div>
        
        {/* Caption Keywords */}
        <div style={{ marginBottom: '20px' }}>
          <label>🔍 Caption Keywords</label>
          <div style={{ 
            background: 'var(--bg-secondary)',
            padding: '12px 15px',
            borderRadius: '8px',
            marginTop: '8px',
            fontSize: '0.9rem'
          }}>
            {script.keywords}
          </div>
        </div>
        
        {/* Hashtags */}
        <div style={{ marginBottom: '25px' }}>
          <label>📌 Hashtags</label>
          <div style={{ 
            background: 'var(--bg-secondary)',
            padding: '12px 15px',
            borderRadius: '8px',
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: 'var(--accent)' }}>{script.hashtags}</span>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => copyToClipboard(script.hashtags)}
            >
              Copy
            </button>
          </div>
        </div>
        
        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const fullScript = script.sections.map(s => `${s.label}\n${s.content}`).join('\n\n')
              copyToClipboard(fullScript)
            }}
          >
            📋 Copy Full Script
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => copyToClipboard(`${script.hook}\n\n${script.keywords}\n\n${script.hashtags}`)}
          >
            📝 Copy Caption + Hashtags
          </button>
        </div>
      </div>
      
      {/* Priority Legend */}
      <div className="card" style={{ marginTop: '30px' }}>
        <div className="card-title" style={{ marginBottom: '15px' }}>📊 Shooting Priority Guide</div>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
            <span><strong>URGENT</strong> — Post within 48 hours (news will go stale)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
            <span><strong>HIGH</strong> — Post within 1-2 weeks</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6' }}></div>
            <span><strong>MEDIUM</strong> — Evergreen, post any time</span>
          </div>
        </div>
      </div>
    </div>
  )
}
