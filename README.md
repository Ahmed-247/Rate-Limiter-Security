 Rate Limiting & Security Best Practices
 Protect APIs from abuse and add essential security.

Key Implementations

- Added express-rate-limit middleware for APIs (100 requests per IP/hour)

Used as a middleware

- helmet (for protecting http headers)

- xss-clean (to prevent Cross-Site Scripting (XSS) attacks)

- express-mongo-sanitize (to prevent NoSQL injection attacks)

- Block HTTP parameter pollution attacks ( to block HTTP Parameter Pollution (HPP) attacks)
