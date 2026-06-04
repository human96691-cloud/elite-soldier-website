# Elite Soldiers Website

Modern static website for Elite Soldiers Tech and Solutions.

## Files to upload

Upload the contents of this folder to your GitHub repository:

- `index.html`
- `style.css`
- `script.js`
- `logo.png`
- `README.md`

Do not upload only the zip file. GitHub and Cloudflare need the actual files.

## Recommended deployment: Cloudflare Pages connected to GitHub

This is the cleanest option because your domain is already with Cloudflare.

1. Create a new GitHub repository.
2. Upload these website files to the root of the repository.
3. Go to Cloudflare Dashboard > Workers & Pages.
4. Create a Pages project and connect it to your GitHub repository.
5. Use these build settings:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy the project.
7. In the Cloudflare Pages project, open Custom domains.
8. Select Set up a domain, enter your purchased domain, and follow Cloudflare's prompts.

If the domain is already managed in the same Cloudflare account, Cloudflare can create the needed DNS record for the Pages project during custom-domain setup.

## Alternative deployment: GitHub Pages with Cloudflare DNS

Use this if you specifically want GitHub Pages hosting instead of Cloudflare Pages.

1. Upload the files to a GitHub repository.
2. Go to repository Settings > Pages.
3. Set the source to deploy from the `main` branch and the root folder.
4. Add your custom domain in GitHub Pages settings.
5. In Cloudflare DNS:
   - For an apex domain like `example.com`, add GitHub Pages `A` records.
   - For `www.example.com`, add a `CNAME` record pointing to `<your-github-username>.github.io`.
6. Enable HTTPS in GitHub Pages after DNS finishes verifying.

Do not use wildcard DNS records for this site.

## Custom domain file

If you use GitHub Pages, copy `CNAME.example` to a file named `CNAME` and replace `example.com` with your real domain.

If you use Cloudflare Pages, you usually do not need a `CNAME` file in the repo. Add the custom domain from the Cloudflare Pages dashboard instead.

## Contact form

This is a static site. The contact form opens a prefilled email to:

`farisghumman@gmail.com`

For a production lead form that stores submissions, connect a form backend later, such as Cloudflare Workers, HubSpot, Formspree, or another CRM.

## Official docs

- Cloudflare Pages GitHub integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- GitHub Pages custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
