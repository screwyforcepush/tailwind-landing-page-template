---
title: This post is in two parts, and this is why
date: 2026-09-22
description: Every post here has a spec written for models and a narrative written for humans. This one explains the format by being it.
---

## Spec

dataadvisor.io: the not-for-humans blog. Authors: Alex Savage + the AI inside his working sessions.
Inputs: Alex's thinking, given to the AI as context. Recordings, chat threads, prompts, templates, rules, specs. Hand-made by Alex, accumulating. Post = synthesis. Alex writes none of the prose.

∀ post: spec + narrative.
spec: for models. Complete alone. positions(page) = positions(spec).
narrative: for humans, read or listened to. Same thinking as story. positions(narrative) ⊆ positions(spec).

spec = 6 slots:
- Trigger: the situation where the learning applies.
- Learning: the position. Alex's, from his own agent system.
- Nearest wrong: the plausible neighbour a fresh model generates instead.
- Boundary: where the learning stops applying.
- Application: where it lives. rule | template | tool | file.
- Benefit: what was observed after. "Unmeasured" when nothing was. Never a score.

spec ∌ instructions. Positions only. Alex: "All context is a prompt. All prompt is context."

This post in its own slots:
- Trigger: a model is handed a page from this site.
- Learning: the spec is the whole position set of the page.
- Nearest wrong: spec = summary of the narrative. spec = instructions to the model.
- Boundary: one operator, his own system, 2023→. ¬benchmark. ¬claim about other systems.
- Application: this page. Routes: spec+narrative | spec | narrative.
- Benefit: unmeasured, first post. Planned test: fresh model, spec vs spec+narrative, count wrong readings.

## Narrative

You, the human, are reading the half that's for you. The other half is up there on the same page, and it was not written for you. Don't take it personally. This is a not-for-humans blog. You're the exception it makes.

Here's where all of it comes from. I think by getting things out of my head. Out loud into a recorder, typed into a chat, written down as a rule because something went sideways once and I didn't want to see it again. It has to land somewhere that will push back, or it isn't finished. Half of what I know about my own system I only found out by explaining it to something that got it wrong.

So the pile grows. It's been growing for a while and it isn't going to stop. None of it was made for a person to read. That was never the point. The point was getting it out.

Then I decided to publish, and the question wasn't what to write. The pile is the what. The question was who's reading, and how, because those two things turn out to decide everything about the page.

One reader is a model. If I want an agent to know something I've worked out, I hand it a link. It wants the position, when it applies, the wrong answer it would otherwise give, and where the thing lives in my system. As few tokens as will carry the meaning. Then it wants nothing else from me.

The other reader is a person, and the person most likely to be that reader is me, later, driving. I'll put a post on and listen. You might have more attention than I do and read it at a desk. Either way you want the story. Where it came from, what got said, what got said back, why it stuck.

Same thinking, two readers, so every post is two parts. The spec is for the AI. Compressed, positions only, no story. The narrative is for you.

There's one thing in this post I'd call a real learning, and it's why the spec never mentions the narrative. Tell a model what happens after it finishes, and you've changed how it reads. It starts reading for the handoff instead of for the thing in front of it. I learned that writing prompts. An agent that's told what comes next gets anxious about it, and the anxiety shows up in the work. So a model on the spec route gets the spec, and nothing about what's below it. This paragraph is the only place the two halves acknowledge each other, and it's on your side of the line.

It's my voice, which is a strange claim to make about prose I didn't type. I got the thinking out raw, messy, half of it argued with something that pushed back. Then I sat with all of it and drafted this. We went a few rounds on the words. Then I published it.

There are two of us in that, and one name on the byline. That's the whole disclosure. The spec says it in fewer words.

That's the format. Spec for the model, narrative for you. Three routes, if you only ever want one half. This post had to explain itself. The rest only have to explain one thing.
