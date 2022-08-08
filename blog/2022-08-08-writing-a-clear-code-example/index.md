---
slug: writing-a-clear-code-example
title: Writing A Clear Code Example
tags: [sprouts, developer advocacy]
---

## Writing A Clear Code Example

If you're a developer advocate, you've probably written a code example or two. The purpose of writing a code example is completely different from the purpose of writing production code. "It's messy, but it works," doesn't fly. It has to work _and_ teach other developers. At the same time, you might not show the extension of an app to the fullest degree, for modularity's sake. In my time at a small startup, I've lost count of the number of code examples I've created. I've made some mistakes and learned a few things along the way. Here are some lessons that I can share with you.

### Keep the Visual Impact In Mind

Keep it clean-looking. Running [prettier](https://prettier.io/) before pushing is important, but that's not the only thing to consider here. Say I were writing a sample to show how to retrieve information from a certain API. How can I improve the readability of this codeblock?

```javascript
fetch('https://api.sample.com/v3/endpoint',
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'KEY'
        },
    body: JSON.stringify({ body: 'data' }),)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
```

Well, I could pull out `headers` and `options`, make them variables, and pass them into the fetch call.

```javascript
const headers = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'KEY',
    },
}

const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ body: 'data' }),
}

fetch(
    'https://api.sample.com/v3/endpoint',
    options
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
)
```

As you can see, that makes it a lot easier to see what options you need to pass to the API endpoint to receive a response.

### Comment Wisely

Let's say I was working on the same block of code. Even though this is a code sample, it shouldn't be necessary to comment on a lot of lines.

```javascript
// these are the headers to be sent in the request
const headers = {
    headers: {
        // default is application/json
        Accept: 'application/json',
        //content-type is application/json
        'Content-Type': 'application/json',
        // send authorization from your account here
        Authorization: 'KEY',
    },
}
```

The comments are starting to make this hard to read and I haven't even gotten to the `options` variable yet.

If you know your audience well enough, you might know that they're familiar with sending headers to an API. I'm a fan of short documentation links in templates, just in case:

```javascript
// https://www.linktoapidocumentation.com
const headers = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'KEY',
    },
}
```

Otherwise, I try to keep comments out of the template, unless I'm doing something that interrupts a well-known coding paradigm.

### Know The Limits Of Your Sample

It's important to keep your sample clear by illustrating one concept at a time (unless, say, it's a sample for a livestream and you want to show multiple aspects of your product, then-- time to go all out!).

This modularity is something that I have seen clearly illustrated in Next.js sample code. In Next.js's [form example](https://github.com/vercel/next.js/blob/canary/examples/next-forms/pages/js-form.js), you can see on [line 34](https://github.com/vercel/next.js/blob/canary/examples/next-forms/pages/js-form.js#L34) that the information on a form is displayed in an alert.

Now, an alert box is often considered bad form (haha) in production. However, the authors of this code sample have wisely used it as a way to keep the modularity of their sample repository intact. Sure, they could have gone on and shown how to use `useRouter()` and query params to pass this information on to a new page, but they decided to focus on showing how to use forms in Next.js, so they ended the functionality on this page with an alert box.

### In Conclusion

What have we learned? Well, the style of your code sample is determined by your scope and audience. Whether or not you need to comment to explain your code depends on your audience's understanding of the general concepts you're illustrating an instance of. Also, how much functionality you highlight depends on whether you're writing an example for documentation or a codebase to walk through a livestream. No matter what though, keep your code neatly formatted and organized. The need for clarity never changes. 😉
