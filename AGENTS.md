<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website structure
- Keep shared site controls and layout in the existing site module; reuse them to preserve the established design.
- Keep knowledge content in a typed, browser-safe editorial registry; expose only editorial-approved, substantive published entries to cards, detail routes and sitemap paths so drafts cannot masquerade as published resources.
- Keep one reusable resource-detail template and a dynamic leaf route; return not-found with noindex for unpublished slugs to prevent empty article pages.
- Use relative canonical URLs until a verified published origin exists, then use that origin; defer sitemap installation without a public URL and never use a draft preview identity.
- Gate brochure and illustrative dossier actions on real asset URLs; missing downloads are internal dependencies, not fake public interactions.
