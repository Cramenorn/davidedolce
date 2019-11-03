# Davide Dolce web site

This repository contains the source code of [Davide Dolce](https://www.ddolce.com) web site.

The web site is built using the following technologies:

- Ruby 2.6.3p62
- [Jekyll](https://jekyllrb.com/)
- [Bootstrap](http://getbootstrap.com/) for HTML, CSS and JS
- [Formspree.io](https://www.formspree.io/) for delivery service email and contact validation

## Installation & Setup

1. [Download](https://github.com/Cramenorn/davidedolce/archive/master.zip) or Clone the repository.
2. Update the following configuration settings in your `_config.yml` file:
   - `baseurl`
   - `url`
   - `title`
   - `email` (after setting this setting to a working email address, fill out the form on the contact page and send it - then check your email and verify the address and the form will send you messages when used)
   - `description`
   - `author`
   - `twitter_username` (Optional)
   - `github_username` (Optional)
   - `linkedin_username` (Optional)
   - `youtube_username` (Optional)
3. Build your site: `bundle exec jekyll serve`

Assuming there are no errors and the site is building properly, follow these steps next:

1. Configure the `index.html` front matter. Example:
```
---
layout: home
background: '/PATH_TO_IMAGE'
---
```
2. Configure the `about.html`, `contact.html`, and `posts/index.html` front matter. Example:
```
---
layout: page
title: Page Title
description: This is the page description.
background: '/PATH_TO_IMAGE'
---
```
3. For each post in the `_posts` directory, update the front matter. Example:
```
---
layout: post
title: "Post Title"
subtitle: "This is the post subtitle."
date: YYYY-MM-DD HH:MM:SS
background: '/PATH_TO_IMAGE'
---
```

4. Add the form to the `contact.html` page. Add the following code to your `contact.html` page:
```
<form name="sentMessage" id="contactForm" novalidate>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Email Address</label>
      <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Message</label>
      <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <br>
  <div id="success"></div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
  </div>
</form>
```

Make sure you have the `email` setting in your `_config.yml` file set to a working email address! Once this is set, fill out the form and then check your email, verify the email address using the link sent to you by Formspree, and then the form will be working!

5. Build your site: `bundle exec jekyll serve`

## Copyright and License

Copyright (c) 2019, [Davide Dolce](https://www.ddolce.com).