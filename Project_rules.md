# Project Structure Rules

## Directory Organization

### Components
- **Location**: `vietfutureclone/src/components`
- All reusable React components must be placed in this directory
- Organize components in subdirectories by feature or domain when applicable

### Pages
- **Location**: `vietfutureclone/src/pages`
- All page-level components must be placed in this directory
- Each page component represents a distinct route in the application
- **Subpages**: If a page has subpages, create a subfolder within `pages` to group them together (e.g., `pages/dashboard/`)
- **Category Pages**: If a page belongs to a specific category, create a subfolder for that category (e.g., `pages/products/`)

### Assets
- **Location**: `vietfutureclone/public`
- All static assets (images, fonts, icons, etc.) must be placed in this directory
- Organize assets in subdirectories by type (e.g., `images/`, `fonts/`)

### Routing
- **Location**: `vietfutureclone/src/routes.tsx`
- All route definitions must be updated in this file
- Follow the existing `RouteConfig` interface pattern
- Add new routes to the `routes` array with corresponding path and element

## Workflow

1. Create component → Place in `vietfutureclone/src/components`
2. Create page → Place in `vietfutureclone/src/pages`
2.1 if the page is a subpage, a in-category pages, create a subfolder in `pages` and place the page there
3. Add route → Update `vietfutureclone/src/routes.tsx`
4. Add assets → Place in `vietfutureclone/public`
