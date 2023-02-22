---
title: "Propeller Design System"
subtitle: "A democratized multi-brand design system built for an industry leader in travel technology"
date: 2018-04-27
thumb: https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-flight-card_imc3sh.png
hero: https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-flight-card_imc3sh.png
tags: 
- project lead
- UI design 
- front-end
- project management 
- interaction design 
---

<!-- 
WAT NOG MIST
- Mijn rol
- Tijdbestek

 -->

###### A little context
### Airtrade offers a suite of consumer and enterprise travel technology products

Over the course of twenty years, the company had established a strong name for itself with award-winning products, working with major players like KLM, Transavia, and D-reizen. Many of these products are white label, some B2B and others B2C.

Twenty years of software development (often sans designers) meant twenty years of choices, business rules, interaction patterns, color schemes, and code bases. When I joined the company as their first designer, I saw we had a great challenge ahead of us:

<div class="hero">
<div class="row">
    <div class="col-md-6 mb-3">
        <div class="card">
            <div class="card-body">
                <h6>Stubbornness</h6>
                <p class="mb-0 small">Without any guidelines to foster collaboration, everyone relied on their gut feelings and personal preferences.</p>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h6>A mountain of debt</h6>
                <p class="mb-0 small">Both in code and design, there were hundreds of things to refactor</p>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h6>No reusable design</h6>
                <p class="mb-0 small">Both in code and design, there were hundreds of things to refactor</p>
            </div>
        </div> 
    </div>
    <div class="col-md-6 mb-3"> 
        <div class="card">
            <div class="card-body">
                <h6>User doubts</h6>
                <p class="mb-0 small">User research demonstrated that users looked at the interface and wondered if our KLM white label was really a KLM product</p>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h6>Reinventing the wheel</h6>
                <p class="mb-0 small">Well-intentioned teams starting new projects were looking to create better interfaces, resulting in many different design patterns.</p>
            </div>
        </div>
    </div>
</div>
</div>

###### Challenge
### Build a flexible, democratized design system for 17 brand identities 

---

###### Inventory
### Taking stock of all the visuals

While creating an inventory of the things we'd be eager to solve, I ran into all sorts of challenges: there were thousands of hard-coded color and size declarations, often the result of an incorrect application of the Bootstrap grid. Brand colors weren't used consistently, and component variants seemed to be applied randomly. In short: the clear pattern was that there _was_ no pattern.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-specificity_ptufc2.png" alt=""> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-hard-coded-colors_uwx76e.png" alt="" class="mt-5"> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-antipatterns_g3vtmm.png" alt="" class="mt-5"> 
</div>

#### Going rogue on existing styleguides
Research uncovered doubts among some users about the legitimacy of our white label products. Users would see one coherent style on a brand's website, and then be directed to us and wonder out loud if they had landed on a dodgy website.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055075/Portfolio/Propeller%20Design%20System/prp-us-vs-them_p1sobb.png" alt=""> 
</div>

###### Definitions
### Creating a matrix of styles that honored each brand

Before we made any architectural decisions, I created a sturdy color palette, clear typographic definitions, and component bases to be used across all of our products. Keeping stakeholders in the loop helped me get early buy-in, helping them understand what results our choices would have for our products.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-color-variables_emltnr.png" alt=""> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-typography_llgt4k.png" alt="" class="mt-5"> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677066941/Portfolio/Propeller%20Design%20System/prp-component-base_1_xiukkw.png" alt="" class="mt-5"> 
</div>
 
###### Architecture
### A design system built to last
While we were initially curious to see what [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) and [Pattern Lab](https://patternlab.io/) could do for our design system, we soon learned that neither was meeting our needs. Our concerns had less to do with the granularity of interface elements and more with a growing number of brand identities.

With its limited theming capacities at the time, [Storybook](https://storybook.js.org/) didn't make the cut either, even though we loved it. We placed a lot of value on the idea of centralized, democratized documentation available to anyone interested, and so on we went, like many developers before us, to create our own framework built in Angular.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055073/Portfolio/Propeller%20Design%20System/prp-architecture_jkvtql.png" alt=""> 
</div>
 
###### Build stage
### Crafting definitions
Hoping to use this project as a way to migrate from Sketch to Figma, I collaborated closely with developers to define variables and design tokens that both Figma and our code base understood. 

#### Component blueprints
For each of the components in our library I created high-fidelity blueprints per affiliate brand. While I wasn't planning on delivering high-fidelity designs each time I worked on a feature, I wanted to have them at hand for changes our developers were going to carry out. <mark>For everyday design, we began to rely much more heavily on our wireframe library</mark>.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-themed-components_vvoxr3.png" alt=""> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-flight-card_imc3sh.png" class="mt-5" alt=""> 
</div> 

###### Documentation
### Facilitating design language
The central part of this entire endeavor was the fact that, at Airtrade, design had always been a joint effort, and that we should facilitate this accordingly. I hand-built a documentation system that was available to our designers, developers, internal stakeholders, and our clients alike. <mark>From the level of customization allowed for each component to best practices and interaction patterns, this documentation covered it all.</mark>

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-docs-welcome_swroyy.png" class="border" alt=""> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055073/Portfolio/Propeller%20Design%20System/prp-docs-colors_k4lhsh.png" alt="" class="mt-5 border"> 
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055073/Portfolio/Propeller%20Design%20System/prp-docs-design-tokens_ktbxmu.png" alt="" class="mt-5 border"> 
</div>

###### Changing patterns
### A process to update the design system sustainably
Borrowing from the work León Persson and the Canonical web team had been doing on their [Vanilla framework](https://vanillaframework.io/), we made sure that new ideas for patterns checked all the boxes before they were incorporated into Propeller.

<div class="hero">
    <img src="https://res.cloudinary.com/dbi2zounq/image/upload/v1677055074/Portfolio/Propeller%20Design%20System/prp-vanilla_ie3jo2.png" class="border" alt=""> 
</div>

###### What changed
### Propeller helped us launch Airtrade's design department as a force for good
Drastically reducing design cycle time, Propeller Design System gave designers and stakeholders the tools to have the right conversations. What's more, the number of deliverables required to get a feature ready for sign-off went from 15+ to two or three. The artefacts I and eventually other designers used to do our work were well-documented, reusable, and proved valuable years down the line.

---

###### What I learned
### How to think holistically about a product suite while managing opinionated stakeholders
My time at Airtrade in general, and this project specifically taught me volumes on how to be effective at stakeholder management, and how to coach my coworkers in design thinking. Propeller showed me how to remain on-brand without neglecting design priorities. I also learned that frameworks are great, but only if you know how to use them to your advantage.