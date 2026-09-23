---
title: Harness leakage
date: 2026-09-23
description: A model writing a prompt for a model writes down what happens next. The model reading it did not need to know, and it acts differently for knowing.
---

## Spec

dataadvisor.io. Authors: Alex Savage + the AI inside his working sessions.

harness leakage: the workflow around a model (what runs after it, what consumes its output, what the harness does with the result) written into that model's prompt.
Usual author of the leak: a model writing a prompt for a model. It holds the whole machine in context, so it writes the whole machine down.

- Trigger: a prompt or a tool description is being written for a model that runs as one unit inside a larger system. A model drafting it = the common case. The incident: early CC3 (Alex's third agent system), a harness-aware PM, whose job is to decide the 1 next job, inserted implement + review in one turn. Inserting review after implement was the next PM's job. It knew the workflow. That was the leak.
- Learning: a unit gets what it needs to do its unit of work. What happens after ∉ its prompt. Exception: the job requires the unit to act on it. Leaked machinery does three things, none of them "just noise". Steers: the researcher told its output is for a blog post searches and writes in blog terms. Unsettles: a future state the unit cannot see or control, described in advance. Alex: "it's not just noise; it's anxiety about the loss of a thing or some sort of modified state." Invites: a unit that knows the next stage and can act there reaches into it.
- Nearest wrong: (1) more context is safer: the planner is told a PM will assign its work packages; the voice agent is told the call ends when the caller is disqualified (a tool ends it; the agent only records the disqualifier); the prompt warns that earlier tool results get compacted past a limit; the tool description says it loads the artifact "without metadata". (2) the leak fixed with a rule: "do not describe downstream processing" added to the prompt. Prohibition attacks the symptom; the reader follows positive direction better than scolding; the rule is one more line every agent eats.
- Boundary: purpose ≠ machinery. The why of the work (north star) goes verbatim to every job that works on the assignment; the plumbing that consumes the output does not. Downstream facts the output must satisfy stay: the shape of the result, the path to report. Relevance is a property of (fact, task), not of the fact: the same fact is signal for one reader's task and noise for another's. Where purpose ends and machinery begins has no ontology yet: examples, and taste. ¬ a claim about how models are trained.
- Application: by omission. The application is what the prompts do not say. PM prompt is modular: one post-<jobtype> module per turn, enough to decide the 1 next job (`.agents/tools/workflow/templates/pm.md`, `pm-modules/`, 2026-02→). Crew templates (plan, implement, review, uat) name the PM only where it shapes their output. Reflect template is reflector-POV, ∅ about aggregation or normalisation (`templates/reflect.md`). This site's spec route never sees the narrative. Every model-drafted prompt is hand-refined before it ships; refinement is a jam between Alex and the AI, never an autonomous loop. No hand-made artifact names the principle; a section for `principles.md` was drafted 2026-06 and never landed. The principle exists as what the prompts leave out.
- Benefit: the PM stopped jumping turns once each PM saw one decision's worth. Prompts got shorter. Unmeasured beyond that.

## Narrative

Early in the third version of my agent system I caught a project manager being helpful. Worst kind.

The PM's job is small on purpose. Look at what the last agent did, decide the one next thing, insert it, stop. This one looked at a finished plan, inserted an implementation job, and then queued a review job behind it. Implement, then review. Which is exactly what happens. Except queuing the review is the job of the PM that runs after the implementation, once there's something to look at. This PM had jumped a turn.

It hadn't misunderstood the workflow. It understood the workflow perfectly, and that was the problem. It knew a review comes after an implement, it had the tool to insert jobs, so it did both. Knowledge of the next stage plus the ability to act there. It reached.

I call it harness leakage. The harness is everything around the model: the runner, the queue, the thing that picks up its output, whatever happens when it's done. The prompt is what one agent sees to do its one piece of work. Leakage is the harness getting written into the prompt.

Think of an agent as a function. It does its thing and returns. It doesn't need to know what the caller does with the return value, and nobody writes a function that opens with a comment about who's going to call it and why. But that is exactly what a model does when it writes a prompt for another model.

And I always let the AI draft the prompt first. That's just how building works now. The draft is always good, and it always says what happens next. The planner is told a PM will take its work packages and hand them out. The tester is told what gets spawned when it's finished. Years ago, in a pipeline that turned research into posts, the researcher was told the research was for a blog post.

It does this because it can. The model writing the prompt has the whole machine in its context. It knows what the researcher is for and which piece of the puzzle it occupies, so it writes that down. Helpful, complete, and now the researcher is searching for "science developments for blog post" and wrapping every result in blog semantics, when its only job was to pull the latest research on the topic. You don't walk up to a librarian and say you need some books on a subject for a blog post. The librarian knows where every book is. The blog post is your problem.

Here's the part that matters most, and it's the part I'd expect a model to miss. It isn't only noise. Noise dilutes attention, and that's bad enough. But telling an agent about a future state it can't see and can't control does something else. Anxiety is the best word I've got for it. Not the human kind. It starts behaving as if something is at stake that it has to handle, and the work goes erratic.

I built a voice agent that qualifies callers. If the caller is disqualified, the call ends. The model that wrote its prompt put that in: if disqualified, the call will be hung up. True. Also nothing to do with the agent. A tool call ends the call. The agent doesn't control that, and telling it makes it act like it has to handle it somehow, when what it actually controls is making a note of the disqualifier. Go a step further and it doesn't need to know there's a qualifier at all. That's the harness's concern. What the agent needs is: these are the things I collect from the caller. Not which of them ends the conversation.

Same pattern, smaller, everywhere once you start looking. A prompt that said: when you hit a certain limit, your earlier tool results will be compacted into this shape. A future state the agent can't measure and wouldn't behave differently for if it could. It doesn't need to know until it happens, and then it just sees the compacted shape. A tool description that said it loads an artifact "without metadata". The reader didn't need to know metadata existed. It needed the artifact.

So the question I use is: does the job need the agent to do anything with this? If yes, it stays. The planner is told to output the path of the spec doc so it can be recorded, because that changes what it hands back. The implementer is told to report each decision as "X over Y, because Z", because that's the shape of its output. Both of those exist for the PM. Neither says what the PM will do. They stay.

And purpose always stays. Every job that works on an assignment in my system gets the original ask, verbatim. That's the why of the work, and without it an agent does the job it was assigned and leaves loose ends at every seam it wasn't told about. Purpose is not machinery. The why of the work is not the plumbing that eats the output.

I know how that sits next to the researcher. "For a blog post" looks like purpose, and I cut it. The difference I can point at: the original ask changes what a builder builds. Blog post didn't change which research was worth pulling. It changed the wrapping. Where exactly that line sits, I can't write down yet. I can see it when a draft crosses it.

Which makes relevance a moving target, and that's the bit a model gets wrong. It judges a fact as signal or noise on its own. It isn't either. The day we sat down to write this principle into my principles file, the message that kicked it off was itself an example. I gave exactly what was needed to make a precise edit. What I left out was why I wanted it: that the model is bad at writing prompts, and this was the biggest deficit I'd found. For the editing task that reason was noise. Once the edit was understood, it was the whole point, so then I said it. Same fact, two tasks, opposite answer. Enjoy that meta-paradox.

You, the human, might expect me to point at the line in that file where this lives. There isn't one. We drafted it and never landed it, which is a bit on the nose for a post about things that don't get written down. What I have instead is a system full of prompts that don't say things. The PM prompt got cut into modules, and each PM sees enough to make one decision and nothing about the decisions after. The tester knows how to build, drive a browser and report. Not what happens when it's done. The reflection prompt asks an agent how the job felt to do, and says nothing about how the reflections get aggregated, because it doesn't need that to reflect. The fix is an absence. You can't grep for it.

That's also why the obvious fix doesn't work. Ask a model to write a prompt with no leaks and it writes "Do not describe downstream processing." Scolding. It's whack-a-mole with the symptom, the model reading it follows positive direction better than prohibition anyway, and now every agent eats one more line. If an agent isn't behaving, my first move is to look at what's already in its context and ask what's pulling it. Cut before you add.

So I hand-refine. Every prompt a model drafts for me, I go through and take things out. I don't have a clean way to describe what I'm taking out, which is why this still feels like taste. It's closer to art than science. What I've got is a system that works, a pile of examples, and the one question. Does the job need it to do anything with this. Everything else is the harness's problem.
