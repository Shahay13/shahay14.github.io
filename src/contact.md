---
layout: base
title: Contact
---

# Contact

<form id="contactForm" class="my-3">
  <div class="mb-3">
    <label for="name" class="form-label">Your Name</label>
    <input type="text" class="form-control" id="name" required>
  </div>
  <div class="mb-3">
    <label for="phone" class="form-label">Phone Number</label>
    <input type="tel" class="form-control" id="phone" required>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">E-mail Address</label>
    <input type="email" class="form-control" id="email" required>
  </div>
  <div class="mb-3">
    <label for="subject" class="form-label">Subject</label>
    <input type="text" class="form-control" id="subject" required>
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" rows="3" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div id="spinner" style="display:none;">
  <i class="fas fa-spinner fa-spin"></i> Loading...
</div>
<div id="responseMessage" style="display:none;"></div>
