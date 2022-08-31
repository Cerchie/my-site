---
slug: javascript-frameworks-and-how-to-pick-one
title: JavaScript Frameworks and How To Pick One - A Twitter Space Summary
tags: [plants, developer advocacy, javascript]
---

[Dan Ott](https://www.dtott.com/), [Nick Taylor](https://www.twitch.tv/nickytonline), [Ben Holmes](https://bholmes.dev/) and I got together recently on a [Twitter space](https://twitter.com/CerchieLucia/status/1562506344363483138) to talk about JavaScript frameworks. It was a well-rounded conversation summarizing how to choose a framework, and the pros and cons of some of the more popular options. Below is a summary of what we shared.

## My Summary of Our Conversation

### What are some considerations to keep in mind when you’re choosing a JS framework?

It depends!

**It’s important to keep in mind the end goal**, apart from technology. If you have a client with a deadline, you’re going to need to use the solution at hand instead of spending lots of time exploring new solutions.

**You have to provide reasons for the business value of your choices.** If you’re working on a personal side project, however, you have more time to learn things for the sake of learning.

The other thing to keep in mind is **what kind of website you’re building.**

Content-heavy sites work best with a static site generator, whereas something like Spotify with a lot of client-side code might require a different type of framework.

It’s also important to keep in mind the **goals of the project over time.** Some people just pick the frameworks with the biggest applications to stay ‘safe’, while it might be smarter to start with the smallest functionality and build from there, to keep your website more performant.

This might look like, say, choosing Astro over a monolithic solution. It can also look like using an SSG like 11ty or Astro if you’re considering where you’re running JS as part of your considerations – they run on the client side. Or, you can start with Remix, which generates at runtime but is set up to do caching incredibly well.

**Note:** it’s not a community expectation that a frontend engineer knows the ins and outs of every single framework out there– for example, in an interview, it should be ‘good enough’ just to articulate the advantages and disadvantages of a few.

**Note 2:** The number of frameworks can become overwhelming if you’re new. Stick to learning one at a time, have patience, and eventually you’ll get a feel for where things have landed at your moment in time.

### Why are we seeing JS frameworks encroach on more and more of the stack?

First of all, JS bundles are large and static and not easy to handle at scale.

Secondly, developers are beginning to request building routes partly statically, and partly dynamically, rather than building all routes statically. By moving JS to the server, you can stop shipping it and pass it to the client from the server instead.

For example, if you worked at a newspaper, perhaps you don’t want to statically deploy every single article from the last several decades every time you deploy routes. Caching the pages makes sense.

### What is island architecture?

Island architecture allows the developer to ship less JS by volume. It’s as if static content were like oceans and content that requires shipping JS were islands.

For example, say you had a page with a banner and a carousel. You can load the banner statically, and ‘turn on’ animation and shipping JS for that carousel component only.

In Astro, nothing is turned on by default. That way, you only pay the cost of shipping the components that really need to ship JS.

One thing to note: since the advent of new technologies besides webpack (which is still powerful in its own right), it’s become a lot easier to create these new frameworks, which contributes to the recent burgeoning of them.

On hype: it’s fun, but also, some of the above questions about the purpose of your project are more important than just using the latest framework.

### Another trend: edge computing

In edge computing, JS is shipping closer (literally, on a closer server) to the user, so that it becomes faster and more performant. With Netlify, it’s cheaper monetarily to use edge computing than not!

### Framework vs libraries vs metaframeworks

Classically, a framework is fairly opinionated, while a library is a less opinionated set of features. A metaframework would be a framework built in some way off a framework. With respect to Vue, Astro is a metaframework, while with respect to React, Astro is a framework.

## Resources:

[Netlify Page Props in Next.js Resource](https://www.netlify.com/blog/rewrite-html-transform-page-props-in-nextjs/?utm_campaign=devex-san&utm_source=whitep4nth3r-blog&utm_term=nextjs-advanced-middleware&utm_content=link-to-original)

[Anthony Campolo on Partial Hydration](https://ajcwebdev.com/what-is-partial-hydration-and-why-is-everyone-talking-about-it)

[Jason Format Application Holotypes Resource](https://jasonformat.com/application-holotypes/)

[Jason Format Islands Architecture Resource](https://jasonformat.com/islands-architecture/)

[Patterns Islands Architecture Resource](https://www.patterns.dev/posts/islands-architecture/)

[Island boy song](https://www.youtube.com/watch?v=e_Cv9TMZW2U)

[Astro.js](https://astro.build/)
