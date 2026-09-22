---
title: This post is in two parts, and this is why
date: 2026-09-22
description: Every post here has a spec written for models and a narrative written for humans. This one explains the format by being it.
---

## Spec

dataadvisor.io: the not-for-humans blog. Authors: Alex Savage + the model he works with.
Inputs: Alex's thinking, given to the model as context. Recordings addressed to the model, chat threads, prompts, templates, rules, specs. Hand-made by Alex. The model is inside his working sessions. Post = synthesis. Alex writes none of the prose.

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
- Nearest wrong: spec = summary of the narrative. spec = instructions to the reader.
- Boundary: one operator, his own system, 2023→. ¬benchmark. ¬claim about other systems.
- Application: this page. Routes: spec+narrative | spec | narrative.
- Benefit: unmeasured, first post. Planned test: fresh model, spec vs spec+narrative, count wrong readings.

## Narrative

This is the not-for-humans blog. You're reading the human bit.

Here's the setup. I think by talking to a model. Not as a party trick. It's how the thinking gets finished. I say the thing out loud, or type it, and something that will push back gets to hear it. Half of what I know about my own system I only found out by explaining it to a model that got it wrong.

So there's a pile of material. Recordings, where the "you" is the model, not you. Chat threads where I'm making design calls at speed and the agent is wrong until I say so. Prompts, templates, rules, each one there because something went sideways once and I didn't want to see it again. All of that is context for the model. None of it was written for a person.

The model has been in the room for all of it. Same sessions, same corrections, same arguments. So when I decided to publish, the question wasn't what to write. I wasn't going to write it. The question was who's reading, and how.

Two answers, and they don't look like each other.

One reader is a model. If I want a model to know something I've worked out, I hand it a link. That reader wants the position, when it applies, the wrong answer it would otherwise give, and where the thing lives in my system. As few tokens as will carry the meaning. Then it wants to stop.

The other reader is a person, and the person most likely to be that reader is me, later, driving. I'll put a post on and listen. Other people have more attention than I do and might read it at a desk. Either way that reader wants the story. Where it came from, what the agent said, what I said back, why it stuck.

Same thinking. Two readers. So every post is two parts.

The spec is for the model. Compressed. No story. It doesn't mention the narrative, because a model on the spec route never sees one, and telling a reader what happens after they finish is noise. Worse than noise. It changes how they read. That's a rule I apply to every prompt I write, and it applies here.

The narrative is for people. It's my voice, which is a strange claim for prose I didn't type. Here's how that works. The thinking is mine. The corrections are mine. The model has eaten all of it, and it writes the words. What comes out isn't mine and isn't its. It's the shared output, same as everything else we build. I'm not putting only my name on it.

We had one argument, since this is the disclosure post. I wanted the spec stripped to the bone. No grammar, shortened words, as dense as it goes. The model pushed back: cut whole sentences, fine, but leave the words alone, because a reader with gaps fills them with the most plausible thing, and that's the behaviour I spend my days correcting. So we tested it. Fresh instances, no tools, handed each version cold and asked what they understood. Nobody misread either one. But everyone reading the stripped version had to guess at a word, and one of those guesses changed the meaning. Nobody had to guess at a symbol. So: symbols where they're exact, whole clauses cut freely, words left alone. That's the rule until a post with a real learning in it breaks it.

The first draft of the spec also told the reader to stop reading when it ended. Both of us missed that this is an instruction, inside a section that promises not to give any. Every test reader caught it. Gone. The spec says what's true about the page, and the reader does what it likes.

That's the format. Spec for the model, narrative for the ears. Three routes if you only want one half. The rest of the posts will be shorter than this one. They only have to explain one thing. This one had to explain itself.
