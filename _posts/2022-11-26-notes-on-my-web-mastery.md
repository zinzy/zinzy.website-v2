---
layout: post
title: "Notes on my web mastery"
date: 2022-11-26
excerpt: "Recently, I've been making some great progress with my personal website. While I normally don't engage in technical ballets on the goings-on of this website, I feel it's relevant to document what I've learnt and done, if only for posterity."
tags:
- indieweb
- meta
---
Recently, I've been making some great progress with my personal website. While I normally don't engage in technical ballets on the goings-on of this website, I feel it's relevant to document what I've learnt and done, if only for posterity.

### Tools
- [Jekyll](https://jekyllrb.com/): as is often the case for me, this site is built using my favorite flat-file content management system
- [Github](https://github.com/): hosts the code for this website
- [Netlify](https://www.netlify.com/): serves the content to my website
- [Obsidian](https://obsidian.md/): I write in a single Obsidian vault
- [obsidian-git](https://github.com/denolehov/obsidian-git): helps me manage  the version control of my Obsidian content
- [Push git subdirectory as branch](https://github.com/marketplace/actions/push-git-subdirectory-as-branch): a Github action that lets me publish a part of the content of my Obsidian vault to a separate repository
- [Git submodule](https://mtsknn.fi/blog/netlify-updating-private-git-submodule/): my separate repository is pulled into my website's code base
- [Netlify build hook](https://mtsknn.fi/blog/how-to-trigger-daily-netlify-builds-using-github-actions/): every day, Netlify looks for new content and publishes it to my website

### Why this is great
- I hold the strong belief that tools don't matter. This means, among other things, that I don't like to be limited to using particular platforms or apps to write. I want to see my files in a folder that I can move around. Jekyll allows me to do just this.
- My website is a text-heavy space: most of what you'll find on here is written content. As a knowledge worker, writing is an integral part of my daily life. Many of the things I write are not for public consumption, but they are closely linked to things that *are*. To avoid duplicate content and awkward linking, it was important for me to manage my text files in a single space, one Obsidian vault.
- I have a tendency to tinker a lot on my website. This can make it so that I spend more time trying out new things and changing the design than I do writing. Having my code base and content separated helps me focus more on writing things that are meaningful to me.

### Some things I haven't figured out yet
- Is it worthwhile for me to publish more granular IndieWeb post types such as notes and likes? Do I care about them? Am I making them only to show them? What's their value if I cannot automate this process? Does the technical implementation change if I push said content to a git repository that consists of only notes?
- What does a proper dark mode look like?
- Do I want to continue my barebones experiment and document the discomfort of vanity? Or am I ready for something more modern?
- How in the world do I even go about Micropub and Webmentions?