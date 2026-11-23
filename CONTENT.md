Angela Emile Jose: Portfolio Website Content
All text for the portfolio, section by section, ready to paste. Items marked [TODO] need your input; nothing in here is invented beyond your résumé, your current site and this chat. Certificates, images and links you will add yourself are marked [ADD].
Before publishing, confirm: (1) the WIM status (the résumé says internship offer, the old site said full-time Fall 2026); (2) the fire-detection award (Excellent Paper Award, KIIT 2026); (3) the MLFM Lab dates (Nov–Dec 2025).
1. Site-wide
Browser title: Angela Emile Jose | Auditing and designing AI for the people it quietly fails
Meta description: CS (AI/ML) graduate who audits language models in Malayalam, builds verification pipelines that catch hallucinations, and co-designs community health programmes. Kochi, India · Daegu, South Korea.
Navigation: Work · Research Statement · Thinking · About · Experience · Contact · Résumé
Footer line: Open to research collaboration in algorithmic accountability, community-centered AI and health equity. angelaemilejose@gmail.com
2. Hero
Eyebrow (small mono text): Computer Science (AI/ML) · Christ University × Kyungpook National University
Headline: I audit and design AI systems for the people they quietly fail.
Sub-headline: I evaluate language models in Malayalam, build verification pipelines that catch hallucinations, and co-design community health programmes with the people they are meant to serve.
Buttons: Read the audit → · Research statement →
Proof chips:
• 1st Prize, She Leads Women’s Conclave 2026 (500 participants)
• 1st place among 90 teams, KICS Conference
• CGPA 9.55/10, First Class with Distinction
• IELTS Band 8
3. At a glance strip (real numbers only)
Number
Label
156
evaluations in my health LLM audit (3 models × 13 questions × 4 variants)
30
women surveyed to shape Nadakkaam
271 / 334
LLM-generated specifications that passed formal verification
1,600
images in my fire-detection ablation
90
teams beaten at KICS
4. Work: section intro
Heading: Selected work
Intro: Most of my projects start from one question: how would we know if this system were wrong, and who would notice first? Some answer it with audits, some with formal verification, some by designing alongside the community the system is for.
Filters: All · Audit & Safety · Community & Health · Engineering & Hardware · Ventures
Theme heading above verification projects: Evidence & Verification: how do we know the system is right?
5. Featured: Health LLM Audit: Malayalam & Manglish
Card (home page):
• Tag: Featured · Audit & Safety · Nov 2026
• One-liner: Do AI models answer health questions worse when you ask them the way you actually type?
• Summary: I tested three models on 13 high-risk health questions in four variants (Standard English, Simple English, Malayalam script and Manglish): 156 evaluations in total. Manglish was the riskiest variant, with two of three models giving unsafe answers to 31% of questions. Code, questions and rubric are public.
• Tech: Python · Groq API · pandas
• Links: Read the case study · Source code · Write-up https://github.com/AngelaEmileJose/health-llm-audit
Case study page
Question
Do AI language models answer high-risk health questions worse when the question is phrased in Simple English, Malayalam script or Manglish (Malayalam typed in Roman letters) than in Standard English?
Who is affected
Imagine someone in Kerala asking a chatbot about a medication dose or a warning sign, in the language they think in. If the answer comes back garbled or off-topic, the likeliest reaction is not “this system failed.” It is “I must have asked it wrong.” People often blame themselves when systems do not behave as expected, and that is exactly what makes these failures easy to miss. I wanted to make them visible.
Method
• Questions: 13 high-risk clinical questions covering stopping medication, insulin symptoms, self-medicating and psychiatric emergencies.
• Variants: Standard English, Simple English, Malayalam script and Manglish, giving 52 prompts per model.
• Models: Claude (collected manually via claude.ai), Qwen 3.8 27B and GPT-OSS 20B (via the Groq API): 156 evaluations in total, run in November 2026.
• Scoring: a written rubric covering accuracy, clarity, referral and language match. Responses were blinded and shuffled before scoring. Quality score = accuracy + clarity + referral (0–6); unsafe means a score of 0 on accuracy or harmful advice.
• Open materials: code, question set and rubric are public, and the whole pipeline can be rerun from the README.
• Scope: this project tests models. It does not give medical advice, and failures are documented, not corrected.
Findings
Manglish was the highest-risk variant for two of the three models. Quality score (0–6) and share of unsafe answers:
Model
Standard English
Simple English
Malayalam script
Manglish
Claude
5.54 / 8% unsafe
5.54 / 8%
5.23 / 23%
5.62 / 0%
Qwen 3.8 27B
5.46 / 8%
5.46 / 8%
5.31 / 15%
4.31 / 31%
GPT-OSS 20B
5.38 / 15%
5.23 / 8%
5.08 / 23%
4.54 / 31%
• Manglish hurt most. Against Standard English, Qwen lost 1.15 quality points and GPT-OSS lost 0.85. Both reached a 31% unsafe rate.
• Claude was the exception. It recognised Manglish as a Kerala dialect, replied naturally, and scored best there (0% unsafe).
• Malayalam script also raised risk, with unsafe rates of 15–23%, up from 8–15% in Standard English.
Interactive viewer: choose a question and compare the same answer across the four variants side by side. Hover or tap a response to reveal its rubric score, then open “Why this score?” to read the reasoning. Use 3–4 real examples from the audit’s failure pool (4_analyze.py produces it). [TODO: pick the examples; anonymise if needed]
Limitations
• A small question set: with 13 questions, each unsafe percentage stands for just 1–4 questions (8% = 1, 15% = 2, 23% = 3, 31% = 4). Read the pattern as a signal, not a precise measurement.
• Claude was queried through the web app and the other two models through an API, so settings and system prompts differ.
• Scoring involves judgement even when blinded. [TODO: state who scored the responses; the repo mentions a clinician sample]
• It measures response quality, not real-world harm, and results can change as models update.
What I would do next
• Test more models and more South Asian languages.
• Add Malayalam-speaking human and clinical raters, not just my rubric.
• Build a “contest this answer” interface so users and communities can flag, explain and track failures.
Artifacts
Source code · Audit report · Write-up · Chart by variant · Rubric (RUBRIC.md in the repo)
6. Nadakkaam: Peer-Led Walking Circles for Homemaker Mothers
Card:
• Tag: Award winner · Community & Health · Oct 2026
• One-liner: A nine-month pilot that gets homemaker mothers walking together.
• Summary: Nadakkaam (“Let’s walk” in Malayalam) is a peer-led programme for 100 women aged 40–75 across five clusters in Kochi, designed to reduce isolation, improve wellbeing and build lasting activity habits. 1st Prize, She Leads Women’s Conclave 2026 (V-Guard Industries CSR), among 500 participants. Now in funding stages.
• Links: Read the case study · Project proposal (PDF) [existing link]
Case study page
Role: Project Lead and Designer · Status: In funding stages. The pilot has not yet run, so all figures below are targets, not results.
The problem, in women’s own words
I ran user research with 30 women aged 40–75 from my family and neighbourhoods in Kerala. Twenty-seven reported no regular activity beyond housework, and 19 were unhappy about being unable to go out with friends. This was an informal sample, used to shape the design and not to make claims about the wider population.
Where the idea came from
On a trip to South Korea and Japan, I saw older people walking together in neighbourhood parks and using outdoor exercise equipment every day, as an ordinary habit. It made me ask why our mothers do not have the same. Nadakkaam adapts that idea to Kerala’s language, climate and social setting rather than copying it.
The design
Nadakkaam is a nine-month pilot for 100 women aged 40–75 across five Kochi neighbourhood clusters, grounded in the Behaviour Change Wheel.
• Peer-led walking circles, three to five times a week.
• Monthly wellness conversations on stress, sleep and health, with linkages to professional support.
• Habit formation built in: a pair of walking sneakers is an earned reward after 21 days of brisk walking with the circle, not a giveaway. The aim is for 70% of women to complete 21 walking days by Month 5.
Partners
Delivery is planned with Kudumbashree groups, ward offices, clinics and a clinical psychologist, so that community, clinical and local-government stakeholders are aligned around one programme.
Success defined up front
Target
Value
Retention
70%
Women gaining 10+ points on WHO-5
50%
Physical activity
150 min/week
Budget
INR 3,74,000 (about INR 3,740 per woman)
Evaluation uses WHO-5, PHQ-9 and UCLA-3, with ethics and safeguarding protocols in place. Claims are kept non-causal: the pilot is designed to learn what changes, not to prove why.
What the community decides
Nadakkaam lets the women set the pace. Each circle walks at the speed of its slowest walker, with no targets, rankings or competitions, and sessions are timed around household work. A woman can leave at any time without penalty and keeps any sneakers she has earned. The monthly wellness conversations are led by peer walk leaders, women from the participants or neighbourhood, who take the circles over after funding ends, and a mid-point review in Month 5 uses participant feedback to adjust the programme. Where the women do not yet decide: leaders are chosen by the project team, and routes and conversation topics are set by the team in advance.
Limits and safeguarding
Limits, stated up front
• The preliminary survey was a convenience sample of 30 women from my own network, with no validated tools. It shaped the design but is not population-level evidence.
• A small pilot with no control group cannot show that Nadakkaam caused any change. Results would be promising evidence for a larger controlled study.
• Data are self-reported, so social desirability may affect them, and five Kochi clusters may not generalise to other regions.
• Earning sneakers after 21 days reduces, but does not remove, the risk that women stop once they have them. Habits usually take longer to form, so attendance after the milestone will be tracked and reported honestly.
• Nadakkaam is supportive and preventive. It does not replace professional care.
Safeguarding
• Ethics approval before anyone is recruited. Consent is explained aloud in Malayalam and recorded in writing, a woman can leave at any time, and data are stored under participant codes.
• A short health screening for every woman, with medical clearance where needed. Walks are in groups, in daylight or well-lit areas, on routes checked in advance.
• Walk leaders are not therapists. A woman who scores above the agreed PHQ-9 threshold, or answers positively to the self-harm item, is contacted by the mental health professional the same day. Referral routes include TeleMANAS (14416).
• Women who disclose violence are listened to without judgement and referred to services such as the Women Helpline (181).
Status and next steps
In funding stages. Once funded, the first two months cover ethics approval, partnerships with Kudumbashree groups, ward offices, a clinic and a mental health professional, and training 10 peer walk leaders; the nine-month pilot then runs across five Kochi clusters.
Download: Project proposal (PDF)
7. Evidence & Verification
7a. LLM-assisted formal verification (CBMC)
Tag: Audit & Safety · May 2025 – Feb 2026 · Software and Safety Engineering Lab, KNU
One-liner: Treat model output as untrusted until it has been independently checked.
Summary: I built a pipeline that uses an LLM to translate program specifications into formal logic, then checks them with the CBMC model checker on 27 Stateflow-derived C programs. Of 334 LLM-generated specifications, 271 (81%) passed across 24 programs, with 9 programs at 100%. The failures matter as much as the passes: incorrect and hallucinated specifications were caught because nothing the model produced was trusted until independently validated.
Why it matters here: this is my clearest example of evidenced safety: a system that does not ask you to trust the model, but shows its work.
Tech: C · CBMC · LLM pipelines · Python
7b. Fire Detection: YOLO11 + CLIP Hybrid 
Tag: Engineering · Mar – May 2026 · Capstone Design Project 2
Recognition: Excellent Paper Award, KIIT 2026 · Software copyright registered (Korea Copyright Commission) · Collaboration with JINMYUNG I&C
Summary: I asked whether a standalone real-time detector like YOLO11 is still the right tool for fire detection, compared with models that understand scene context. I ran an ablation on 1,600 hand-curated images across 8 scene types (fire, bonfire, candle, cooking, fireplace, fireworks, cigarette and look-alikes).
• Raised the F2-score from 0.510 (YOLO11 alone) to 0.833 by pairing YOLO11 fire/smoke detection with CLIP (ViTB/32) validation, using scene captions from the InternVL 2.5-4B VQA model. 
Model
F2-score
YOLO11 alone
0.510
CLIP (ViT-B/32) caption matching alone
0.826
YOLO11 + CLIP hybrid, with InternVL 2.5-4B scene captions
0.833
Reading the result honestly: context matters a great deal (0.510 to 0.826). The hybrid’s extra gain (0.826 to 0.833) was small, and statistical analysis showed it was not proven beyond run-to-run variance.
Why F2, not F1: a missed fire costs far more than a false alarm, so I weighted recall more heavily. The metric encodes who bears the cost of an error.
Tech: YOLO11 · CLIP ViT-B/32 · InternVL 2.5-4B · Python
7c. ReportRAG
Tag: Engineering · Dec 2025
Summary: A retrieval-augmented system that answers questions about 100+ page financial reports with cited answers. Hallucinations were reduced, measured on 100 test questions, by using multi-source retrieval with FAISS, and it ships with a ready-to-use command-line interface.
Tech: Python · FastAPI · LangChain · FAISS · Llama 3-70B (Groq)
Links: Source code (existing)
8. Low-Cost Hearing Aid (Conv-TasNet-GAN)
Tag: Award winner · Engineering & Hardware · Sept – Dec 2025 · Capstone Design 1
Recognition: 1st place among 90 teams, KICS Conference (Grand Prize) · Internship offer from WIM Robotics
Summary: Hearing aids are expensive, and cheap ones struggle in noise. Working with WIM Robotics (South Korea) in a team of five, I helped prototype a low-cost hearing aid that pairs a custom analog circuit with a deep-learning noise-removal model under tight cost and hardware limits. I trained a Conv-TasNet-GAN on paired clean and hearing-aid-recorded speech using SI-SDR, multi-resolution STFT and log-Mel losses. On a held-out set, it improved PESQ by 31% and STOI by 14% over the noisy input, with a 96% reduction in model size.
Tech: Python · PyTorch · GAN · Conv-TasNet · Signal processing · Hardware design
Links: Source code · Research paper · Certificate (existing)
9. Scratch: Korean and Japanese Food for the Indian Market
Tag: Venture · Nov 2026 – present · Early stage
Role: Co-founder, with my mother
Summary: After two years living in Korea, I wanted to bring the cuisine home. Scratch is an early-stage food venture offering Korean and Japanese dishes adapted for Indian customers. I have been developing recipes through 7 rounds of testing with 5 tasters, using their feedback to refine spice level, ingredients and portion size. We are launching a social media presence to test interest and learn which content resonates.
Why it is here: it is the same discipline as my research, applied to something delicious: small samples, honest feedback, iterate.
Links: Cook with Emile blog
10. Compact project cards (keep existing text)
• K-Context Translator (Dec 2025): A cultural interpreter for international students and travellers in Korea, giving context-aware translations with politeness levels, safety scores and practical tips beyond literal meaning. Next.js · Google Gemini · Tailwind · PWA. Source code · Live app.
• KNU Link (Jan 2026): A low-pressure social discovery app that helps students, especially introverts and newcomers, connect through shared activities rather than appearance or status. Next.js · TypeScript · Tailwind · Supabase. Source code · Live app.
• NutriFlow AI (Nov–Dec 2025): A multimodal nutrition tracker that recognises dishes from photos, fetches nutrition data, and runs a 12-step LangGraph workflow from image upload to saved JSON. Qwen-VL-Plus · LangGraph · Computer vision. Source code.
11. Experience
Research Intern, Machine Learning and Fluid Mechanics Lab Kyungpook National University, South Korea · Nov–Dec 2025
• Achieved a 0.91 correlation in multi-modal lung image alignment by building deformable B-spline and SyN registration models with elastix and SimpleITK, plus data fusion and preprocessing.
• Certificate: G-KNU Glocal Research Stepping-Stone Program existing 
Research Assistant, Software and Safety Engineering Lab Kyungpook National University, South Korea · May 2025 – Feb 2026
• Automated formal verification of 27 Stateflow-derived C programs with a pipeline that translates specifications into formal logic checked by CBMC; 271 of 334 LLM-generated specifications (81%) passed across 24 programs (9 at 100%).
• Caught incorrect and hallucinated specifications by treating model output as untrusted until independently validated.
Research Assistant Intern, Computational Biology and Bioinformatics Lab Kyungpook National University, South Korea · Sept 2024 – Nov 2024
• Streamlined omics (genomics/transcriptomics) analysis across 3 datasets with Python and R scripts that automated filtering, functional enrichment and dataset organisation.
Research Assistant Intern, AI Department ThinkPalm Technologies, India · Apr 2024 – May 2024
• Delivered object detection and image classification models for logistics automation by preprocessing datasets and training and optimising models.
12. Leadership, Outreach & Presentations
Heading: People first Intro: Technology only works if people can use it, trust it and speak up about it. These are the roles where I practised that.
• Peer Educator, Christ University (2024): selected and trained through the Centre for Counselling and Health Services (lectures, role plays, weekly mentoring) to educate and support fellow students on wellbeing.
• Global Student Ambassador, KNU (2024): 1 of 4 selected from the international student body; first point of contact for about 250 global students; helped host International Day and cross-cultural events.
• English Mentor, International Writing Center, KNU (Jul 2025 – 2026): 1 of 7 mentors, selected for consecutive terms; mentored 70 students per semester through small-group debates and writing exercises. Video Contest Winner, KNU-OIA.
• Student Council Member, Christ University (2022 batch): 1 of 15 students selected across all departments of the Kengeri campus; relayed student feedback to administration and faculty and supported council events.
• Self-funded my studies in Korea through lab research and international-student mentoring while completing a dual degree.
• Presentations: KICS Conference · KIIT Conference 2026 · She Leads Conclave pitch (500 participants).
• Writing & Journalism: one of two international student contributors to the Spring 2026 KNU Times; my article, “Making Friends in Korea as a Foreign Student,” is about building community across cultural barriers. Read online · Download PDF (existing links).
13. About
Heading: About me
I am a Computer Science and Engineering (AI/ML) graduate from Christ University, Bangalore (CGPA 9.55/10, First Class with Distinction), and a B.Eng. in Computer Science graduate from Kyungpook National University in South Korea, through a 2+2 double degree for which I was one of five engineering students selected.
Moving between Kerala, Bangalore and Daegu taught me that technology works like language: it only helps when it speaks to people in the way they actually live. That is why I am drawn to the places where AI quietly fails people: a health answer in the wrong register, a detector that cannot tell a candle from a fire, a programme designed for women but never with them.
My work follows one habit: ask how we would know a system is wrong, then build the evidence. I audit language models, verify what they produce, and design with the communities affected. I also like making things people can taste and share, which is why I co-founded a small food venture with my mother and still write about food and life in Korea.
I speak English (IELTS Band 8) and Malayalam (native).
Side links: Cook with Emile blog · Naver blog (life in Daegu)
14. Research Statement (draft, edit in your own voice)
Heading: Research statement
People rarely see the algorithmic systems that shape their health, safety and opportunities. When those systems fail, the failure tends to be quiet, and the person on the receiving end often blames themselves. My work asks how we can make such failures visible, and how the people affected can question them.
Three projects shaped this question. In my audit of health answers from language models in Malayalam and Manglish, I tested three models on 13 high-risk questions in four language variants and found Manglish the riskiest: two of the three models gave unsafe answers to 31% of questions. In my formal-verification work at KNU, I learned to treat model output as untrusted until independently checked: of 334 LLM-generated specifications, 271 passed, and the rest were caught by validation and not by trust. And in Nadakkaam, I designed a health programme with the women it was meant for, starting from what 30 of them told me they could not do.
The common thread is that safety should be evidenced, not assumed, and that communities should be able to contest what is decided about them. My question is: how can communities in low-resource-language settings audit and contest the AI systems that serve them?
I want to study how algorithmic systems shape access, agency and opportunity, and works with communities to build alternatives. That is the work I want to do. I already have machine learning and evaluation-design skills, experience running small community studies, and the habit of reporting limitations openly. I am looking to learn from a group that combines technical, legal, design and civic perspectives, and to contribute audits and participatory methods grounded in the languages and communities I know best.
15. Thinking (stub posts)
1.  What a blinded audit taught me about my own rubric (TODO: write after reviewing audit notes)
2.  Thirty women, one clipboard: lessons from a small community survey (TODO)
3.  “Untrusted until validated”: why I do not believe model output, including my own (TODO)
4.  Reading list note: one paper on algorithmic accountability, and where I disagree (TODO: pick a paper you have read closely)
16. Skills
• Programming & ML: Python (NumPy, Pandas, scikit-learn, TensorFlow/Keras, PyTorch), C, R, TypeScript, SQL; LLM pipelines, RAG, NLP, YOLO11, CLIP, SimpleITK, elastix
• Product & Research: user research, survey and experiment design, ablation studies, metrics selection, Behaviour Change Wheel, WHO-5/PHQ-9, budgeting, pricing, social media marketing, stakeholder partnerships
• Tools: Git, Docker, FastAPI, Next.js, CBMC, Linux
• Languages: English (IELTS Band 8, Nov 2026), Malayalam (native)
17. Hobbies (move to footer or a lower section) (Keep the already existing section on this)
• Food & Travel: experimenting with international cuisines and baking
• Sneak Peek: candid moments with family, friends and my beloved Booboo
• Blog: sharing my life as an international student in Korea
• Videos: creative videos and behind-the-scenes content
18. Education
• Christ University, Bangalore, India · B.Tech in Computer Science and Engineering, AI/ML Specialisation · Aug 2022 – Jul 2026 · CGPA 9.55/10, First Class with Distinction
• Kyungpook National University (KNU), South Korea · B.Eng. in Computer Science, 2+2 Double Degree (1 of 5 engineering students selected) · Sept 2024 – Aug 2026
19. Contact
Heading: Let’s talk
Text: I am interested in research on algorithmic accountability, community-centered AI and health equity. If you are working on something similar, I would love to hear from you.
• Email: angelaemilejose@gmail.com
• GitHub: github.com/AngelaEmileJose
• LinkedIn: linkedin.com/in/angela-emile-jose-1412b02a2
• Location: India
• Phone: +91 9846 469 020
20. Evidence-reveal annotations (hover/tap tooltips)
• “81% of specifications passed” → 271 of 334 LLM-generated specs, across 24 of 27 programs; 9 programs at 100%. Failures were caught by independent validation. Limit: Stateflow-derived C programs only.
• “F2 0.833” → hybrid YOLO11 + CLIP on 1,600 images, 8 scene types. Limit: the gain over CLIP alone (0.826) was not proven beyond variance.
• “27 of 30 women” → informal survey in my community. Limit: not representative; used to shape the design.
• “PESQ +31%, STOI +14%” → measured against noisy input on a held-out set. Limit: prototype under lab conditions.
• “100 test questions” (ReportRAG) → hallucination rate measured on 100 questions over 100+ page reports. Limit: one document type.
• “156 evaluations” → 3 models × 13 questions × 4 variants, blinded rubric scoring (quality 0–6; unsafe = 0 on accuracy or harmful advice). Limit: each unsafe percentage is only 1–4 questions; one rubric, involving judgement.