# Change Log

## [1.0.3] - 2024-5-29

### Refactored

- Fixed some **Accessibility** issues
- Optimized some content for faster performance

## [1.0.4] - 2024-5-30

### Refactored

- Optimized some content, score **395**
- Updated README

## [1.1.0] - 2024-6-2

### Features

- Added `ProjectCard`
- Improved Project page

### Refactored

- Removed lazy loading for header images, removed unnecessary br tags

## [1.1.1] - 2024-6-2

### Refactored

- Optimized link styles, achieved 400 score on `pagespeed.web`

## [1.1.2] - 2024-6-12

### Features

- Added `busuanzi` counter

## [1.2.0] - 2024-6-16

### Features

- Changed `css` to `scss`
- Customized `waline` styles
- Improved `Footnotes` styles
- Added icons

## [1.2.1] - 2024-6-28

### Features

- Completely rewrote `scss` files, mostly converted to `Tailwind`
- Modified `footer` styles

### Refactored

- Fine-tuned some component styles
- Fine-tuned article styles
- Removed unnecessary friend links

## [2.0.0] - 2024-7-8

### Features

- `Lighthouse` 400
- Text compression... activated!!
- Footer modification... back to basics

### Refactored

- Removed `busuanzi` counter

### Fix

- Fixed tag navigation issues within articles

## [2.1.0] - 2024-7-9

### Features

- Added search functionality

### Refactored

- Fine-tuned footer
- Fine-tuned navigation bar

## [2.1.1] - 2024-7-9

### Fix

- Fixed navigation issue (unknown cause)

## [2.1.2] - 2024-7-10

### Features

- (Work in progress) Added `twikoo` comments
- Some components, will be summarized in 2.2.0

### Refactored

- Improved dark mode for search

## [2.2.0] - 2024-7-13

### Features

- Added table of contents feature! (Finally added)
- Added a guide article
- Added new components

### Refactored

- Modified line spacing

### Fix

- Fixed footer display issue on mobile screens

## [2.3.0] - 2024-7-18

### Features

- Added line numbers to code blocks
- Submitted tutorial on how to modify code block themes

### Refactored

- Modified `astro.config.mjs`, code block styles are now complete

## [2.3.1] - 2024-7-19

### Fix

- Fixed issue in `astro.config.mjs` (I filled in the wrong position)
- Improved light mode code block styles

## [2.4.0] - 2024-7-21

### Refactored

- Changed `<main>` position, now it only contains cards and not footer
- Rewrote `.astro` files related to **social links**, **menu**, **navigation bar**, and **comments**, now they generate content through `consts.ts`
- Separated **social links** SVG from configuration file
- Removed unnecessary files and `import` statements

### Fix

- Fixed a bunch of errors in original JS files, now they all have null checks and won't error
- Specified data structures for page and post, now won't report never errors
- Fixed several errors, project now passes `npx astro check`

## [2.5.0-alpha] - 2024-7-22

### Features

- Added scroll to top button
- Added tablet-friendly interface styles
- Added article and repository card styles
- Added navigation bar icons, adapted for tablet styles
- Now you can customize auxiliary text content in themes through `consts.ts`

### Refactored

- Completely rewrote pages, changed from element-internal scrolling to grid-based pages, solved issues with smooth navigation and scrollbar jumping. The entire page is now a more tightly integrated whole
- Rewrote sidebar, using sticky positioning, added icons
- Rewrote article and repository card styles, article titles and descriptions are no longer hidden but automatically adapt
- Rewrote article and repository card styles for small screens
- Rewrote button styles, now integrated into sidebar instead of separate from main page
- Rewrote table of contents styles, now automatically generated in sidebar

### Fix

- Fixed variable naming issues in original tag files
- Unified Astro.props format (using assertions)
- Fixed overflow issues caused by overly long article titles and descriptions

## [2.5.0-alpha.2] - 2024-7-22

### Features

- Cleaned up global.scss
- Automatically added non-clickable uncategorized tag for articles without tags, visually more unified
- Added m-2 to collapse and diff, now they won't stick out

### Refactored

- Completely converted to Tailwind

### Fix

- Fixed issue where previous/next page buttons stuck to footer

## [2.5.0-alpha.3] - 2024-7-23

### Fix

- Fixed navigation bar disappearing issue in mobile view

## [2.5.0-alpha.4] - 2024-7-24

### Fix

- Fixed issue where project cards couldn't fetch information
- Fixed table of contents navigation issues on blog and project pages

## [2.5.0-alpha.5] - 2024-7-26

### Fix

- Fixed incorrect style classes in project cards
- Fixed type-related issues, now passes check 0.8.2

## [2.5.0-beta] - 2024-7-29

### Features

- Line numbers and top bar are now separated from code and fixed
- Added code block language display feature

### Refactored

- Rewrote code block structure (using shiki transformer)

### Fix

- Fixed issue where cards appeared too small in mobile view

## [2.5.0-beta.2] - 2024-7-29

### Refactored

- Adjusted code block top bar, elements are now vertically centered
- Adjusted card padding in mobile view

### Fix

- Fixed article navigation target error (why was this serious issue only discovered now)

## [2.5.0-beta.3] - 2024-7-30

### Features

- `consts.ts` added tab configuration, this is the main name
- `BaseLayout.astro` added tab configuration, now you can add your own tab name for each page

### Refactored

- Assertions defined element types in JS to avoid TS errors
- Adjusted code block structure, code now has spacing on the right side of the code block
- Adjusted blog and project page structure, unified `mt-8` `mb-8`

### Fix

- Fixed issue where theme toggle button's actual operation area didn't match display area
- Fixed theme toggle button synchronization issue, now both buttons match their actual theme

## [2.5.0-rc] - 2024-8-1

### Features

- Made previous/next page buttons persistent, now everyone knows my blog actually has pagination
- Added pagination buttons, finally don't have to jump page by page

### Refactored

- Changed single page to ten articles per page
- Removed layout title

## [2.5.0] - 2024-8-2

### Features

- Added category functionality, now you can add two independent indices to your articles: categories and tags
- Added pagination to category and tag article list pages, no longer a single page
- Integrated category functionality into sidebar, from issue #10

### Refactored

- Now if an article has no image, its article info will fill the space
- Modified pagination button styles
- Fine-tuned styles, from issue #9

### Fix

- Fixed pagination failure when there are too many articles
- Fixed issues mentioned in issue #11

## [2.5.1] - 2024-8-4

### Features

- Updated README
- Added Vercel Web Analytics (users not using Vercel should note this)

### Refactored

- Improved overall typography, paragraphs are now clearer
- Fixed some strange centering issues in footer
- Changed Footnotes card color
- Removed shadow from bottom copyright info card
- Added dividers for each table row
- Slightly increased `<code>` font size

## [2.5.2] - 2024-8-7

### Features

- Improved `TimeLine` format, much more convenient than before
- Added category and tag cards to sidebar, removed original category page

### Refactored

- Modified card styles
- Modified link styles
- Cleaned up unnecessary code from original comment system

### Fix

- Fixed issue where some mobile navigation bars couldn't navigate

## [2.5.3] - 2024-8-12

### Features

- Added page transition animations

### Fix

- Fixed non-standard navigation bar text
- Fixed flickering issue when navigating pages under different themes
- Removed `astro:transition` and changed to `swup` to fix mouse pointer flickering issue

## [2.5.4] - 2024-8-12

### Fix

- Fixed issue where table of contents wasn't updated correctly
- Fixed issue where article search box wasn't displayed correctly
- Fixed issue where code copy button was missing in articles

## [2.5.4-hotfix.1] - 2024-8-13

### Fix

- Fixed issue where search component couldn't load properly

## [2.5.5] - 2024-8-18

### Features

- Added pinning functionality, now you can set article badge property to `Pin` to pin your articles

### Refactored

- Cleaned up project code
- Modified sidebar card styles
- Modified original DaisyUI built-in logic, changed to click button to collapse instead of clicking outside

## [2.5.6] - 2024-8-22

### Features

- Added image zoom functionality (only effective for images in BaseCard)

### Refactored

- Reverted mobile navigation bar logic based on user feedback
- Modified tag bar title on blog page

## [2.5.7] - 2024-9-7

### Features

- Added support for robots.txt
- Added icons for external links
- Added word count and reading time statistics

### Refactored

- Modified TimeLine styles
- Updated comment system styles
- Modified comment system positioning id to prevent being overwritten

### Fix

- Fixed issue where comment system reaction emojis couldn't load (image hosting failed)
- Fixed incorrect "applt" spelling in `global.scss`

## [2.6.0] - 2024-9-15

### Features

- Added navigation bar logic, now clicking button can also collapse (🚧 This content may have issues, need to collect more information 🚧)
- Added buttons to every heading, you can hover over the heading and click the button to navigate
- Added navigation style to card images, hovering will show a zoom animation and arrow
- Added new styles to links, now they are more vivid and eye-catching
- Added word count and reading time calculation functionality, you can see their statistics in the blog
- Added sharing functionality, now you can directly share articles to social media through the button at the end of articles
- Added i18n, removed old `infoTest`, now all languages are in the `public/locales` folder

    This means you can add multiple languages and switch at any time, tutorial as follows:

    1. Add your language file in the `public/locales` folder, first add a folder named with the language code, then add a json file inside, the file name must be `translation.json`
    2. Copy the existing `translation.json` file, then modify its content, for example:

        ```json
        {
        "label": {
          "noTag": "No tags assigned",
          "tagCard": "Tags",
          "tagPage": "Tag - ",
          "noCategory": "No categories assigned",
          "categoryCard": "Categories",
          "categoryPage": "Category - ",
          "link": "Link: ",
          "prevPage": "Recent posts",
          "nextPage": "Older posts",
          "wordCount": "words",
          "readTime": "minutes"
          }
        }
        ```

    3. Add your language code in `astro-i18next.config.mjs`, for example:

        ```mjs
        export default {
        defaultLocale: "en",
        locales: ['en', 'zh', 'xx'] // Add your language code here
        };
        ```
    
    4. Change to your language code in 'BaseLayout.astro', for example:

        ```astro
        ...
        import i18next, { t, changeLanguage } from "i18next";

        changeLanguage("xx");
        ...
        ```

> [!NOTE]
> Welcome everyone to add language support for the theme!

### Refactored

- Added docs folder
- Modified blockquote padding
- Modified tab title, content first, changed `${SITE_TAB} - ${title}` to `${title} - ${SITE_TAB}`

### Fix

- Fixed incorrect external link svg styles in headings and alerts
- Fixed issue where toc incorrectly retrieved #
- Fixed navigation bar logic

## [2.6.1] - 2024-9-21

### Features

- Added `USER_SITE` in `consts.ts` to generate links for bottom card of website
- Added progress bar when website loads

### Refactored

- Modified swup configuration

### Fix

- Fixed button overflow issue when articles have too many tags and categories
- Fixed a bunch of spelling errors (existed in 2.6.0 release)
- Removed inappropriate image zoom functionality in LinkCard
- Removed `transition.scss`, replaced with swup default theme (I don't know if this helps improve crash issues)

## [2.7.0] - 2024-10-12

### Features

- Added day/night transition
- Customized heading `ID` in blog, current naming format is `heading-${headingCount}`, avoiding navigation issues with duplicate heading names
- Added "focus" functionality to blog table of contents, now TOC will automatically scroll based on the section you're currently reading
- Added sequential entry styles to cards in blog `main`, made with `sass`:

    ```scss
    .fade-in-up {
      opacity: 0;
      transform: translateY(50px);
      animation: fadeInUp 0.5s ease forwards;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    ```

### Refactored

- Modified original website icon
- Modified original non-standard file naming
- Modified original unreasonable layout
- Modified sidebar button styles, using `join` to combine elements
- Fine-tuned `padding`

### Fix

- Fixed navigation issue with duplicate `ID` names

## [2.7.1] - 2024-10-19

### Refactored

- Changed parts related to event listeners

### Fix

- Fixed scrolling issues
- Fixed issue where `active` in table of contents persisted when navigating within site

## [2.8.0-rc] - 2024-11-3

### Features

- Learned usage of custom elements in Astro, now two interactive buttons are separated as reusable widgets
- Added `SITE_LANG` in `consts.ts` as website language configuration
- Added `DAIYSUI_THEME` in `consts.ts` as DaisyUI theme configuration, see https://daisyui.com/docs/themes/ (this content needs more adaptation)
- Added `CODE_THEME` in `consts.ts` as shiki theme configuration

#### preview

### Refactored

- Modified sidebar and navigation bar
- Removed unnecessary tools
- Modified active styles (selective)

### Fix

- Fixed console errors
- Added missing color transition for `ProjectCard`

## [2.8.0] - 2024-11-9

### Features

- Added actions to Navbar: scroll down to collapse, scroll up to expand
- Redesigned code copy button, reduced client-side code, see demo for specific styles

### Refactored

- Overall page adjustments (previously felt "too close to the screen", now much better) including width and font size

### Fix

- Fixed several issues

## [2.8.1] - 2024-12-5

### Features

- Added `sitmap.xml` to replace auto-generated `sitmap-0.xml`
- Rewrote `rss.xml.ts` improved format and added full content to RSS
- Added reusable component `GithubInfo` path:src\widget\GithubInfo.astro
- Added card layouts including `Aside` / `Horizontal` / `Vertical`
- Added fade-in effect to blog article content
- Added manual toggle for comment system

### Refactored

- Unified and modified component layouts
- Rewrote blog bottom License component styles
- Cleaned up global ClassName to simplify code
- Renamed `tag` route to `tags`

### Fix

- Accessibility fixes: added `aria-label` to necessary components and text wrapped by `sr-only`
- Added random unique `id` and form links to copy buttons in code blocks
- Fixed style error when pagination buttons appear on single page
- Fixed issue where word count and reading time weren't displayed on tag and category pages

### Chore

- Used `iconify` instead of local SVG storage

## [2.9.0] - 2024-12-28

### Features

- Added `mdx/TocCopllapse.astro` component for adding collapsible table of contents in articles (only appears when sidebar can't display on small screens)
  - Added `remark-heading-extractor.mjs` to extract headings on server side and store in `frontmatter`
  > [!NOTE]
  > Originally wanted to generate all TOC on server side through this component, but found that sidebar is not in `Swup`'s on-demand rendering scope, so can only keep client-side TOC generation
- Added `TocCard.astro` (split from `Tool.astro`)

### Refactored

- Removed day/night color transition animation
- Modified sidebar structure, removed redundant components merged into `ProfileCard.astro` and optimized styles
  - Added small animation when hovering over icons
  - Fine-tuned spacing between menu and submenu
- Completely rewrote `License.astro` component styles and build logic
  - Added 'Thanks for reading!' at end of article (balance page)
  - Moved CC icon to top left
  - Added article info in License such as: author\publication date\word count\reading time\permanent link\category\tags
  - Rewrote original share component
- Style optimization for all `MDX` components
  - Used unified format for all `alert`
  - Modified `Kbd.astro` added size `size` option
  - Rewrote `Collapse.astro` component using custom format instead of DaisyUI provided
  - Added `rightAlt` and other options for `Diff.astro` component
  - Modified `TimeLine.astro` component styles and added animations
  - Modified `LinkCard.astro` component structure and styles
  - Added `TocCopllapse.astro` component
- Typography: modified line spacing
- Rewrote `badge` styles instead of using DaisyUI default styles
  - Used new `badge` styles in `TagCard.astro` and `CategoryCard.astro`
- Rewrote `EnvelopeCard.astro` component styles
  - Modified article info display
    - Removed original stacked DaisyUI styles
    - Moved article publication date and word count to top
    - Used new `badge` styles for article category and tag info
    - Removed original small arrow style when pointer hovers over image
  - Similarly modified article info styles in `BaseCard.astro` component
- Modified `ProjectCard.astro` component styles and logic
  - Moved logic to `utils/github.ts` and other files
  - Added formatting for fetched data
  - Moved code language to left, repository info to right
  - Removed data statistics for `Watch`
- Modified `Navbar.astro` component styles and logic
  - Redesigned top menu button using swap
  - Added top menu slide in/out animation
- Made pagination into new reusable component `Pagination.astro`
- Hidden `TocCard` scrollbar
- Modified `code` styles
- Fine-tuned layout files

### Fix

- Fixed incorrect variable naming in original `CategoryCard.astro` component
- Fixed page touch failure issue caused by image zoom

### Chore

- Most variables now have `interface` definitions
- Most icons now use icons provided by `iconify`

## [2.9.1] - 2025-1-7

### Features

- Replaced `astro-i18next` with its upstream library `i18next` to fix compatibility issues in Node.js v22.12.0
  _(Resolved critical issue causing i18n functionality to not work properly in latest Node.js version.)_

### Fix

- Fixed package import in original `tailwind.config.js`
- Fixed link styles

### Chore

- Switched to stricter ESLint as code formatting and checking tool  
- Minor optimization to i18n configuration 
- Removed unnecessary node_modules dependencies

## [3.0.0] - 2025-3-23

Congratulations! Frosti v3 officially released! 🎉

### Features

1. **Main Card Modifications**
   - **Card Layout Modifications**
     
     Added new components `Card.astro` and `CardGroup.astro`. When the latter wraps the former, they will merge into one card on mobile. Example code:
     
     ```astro
     <CardGroup>
       <Card>
         <img src="https://picsum.photos/200/300" alt="">
         <div>
           <h3>Card 1</h3>
         </div>
       </Card>
       <Card>
         <!-- More photos -->
       </Card>
     </CardGroup>
     ```
     
     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![image](https://github.com/user-attachments/assets/00945d87-29f7-4ff3-9272-98108773d0c5) | ![image](https://github.com/user-attachments/assets/0d180ed9-8f1f-446f-b2f6-844bce389f44) |

   - **Card Style Modifications**
     
     If there's an image, the title will float above the image. There's also a customizable button in the bottom right corner, displaying description or more information.
     
     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![image](https://github.com/user-attachments/assets/14de47ce-3889-474e-84ec-605e40dd38d4) | ![image](https://github.com/user-attachments/assets/e422f969-9a19-4ffb-85fc-2d92789b1ff7) |

2. **Sidebar Modifications**
   - `Profile.astro`
     
     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![image](https://github.com/user-attachments/assets/25c344a3-4485-4c97-a447-e1fb6e4c88b1) | ![image](https://github.com/user-attachments/assets/3f2eb595-d517-4a3c-b4d7-e36c3b2ad417) |
   - **Added New Sidebar Components**
     - Search bar
     - Tags, categories, and archive buttons

       **Demo:**

       | version 3 | version 2 |
       | :---: | :---: |
       | ![image](https://github.com/user-attachments/assets/aeb85e5d-d6cd-428e-9000-ac5aeadfebe7) | ![image](https://github.com/user-attachments/assets/8e35bce0-587a-4116-8788-2d51cad634d6) |

   - **Modified Table of Contents Styles and Motion Effects**
     
     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![Peek 2025-03-23 16-06](https://github.com/user-attachments/assets/d9ba2e3d-5f56-4504-a2f9-5cdb4b2b53cd) | ![Peek 2025-03-23 16-07](https://github.com/user-attachments/assets/0d4ef32c-0962-40df-af7e-85c6c1a4415f) |

3. **Added New Pages**
   - Archive page

     ![image](https://github.com/user-attachments/assets/1938ee40-c2ff-4610-a0bb-2509039b1c86)
   - Tags page

     ![image](https://github.com/user-attachments/assets/449604e3-e65b-478c-ba18-0cf488c51015)
   - Categories page

     ![image](https://github.com/user-attachments/assets/5758c9bc-dcd5-4372-9dc1-8a067c47c7c1)
   - Search page

     ![image](https://github.com/user-attachments/assets/44ce7175-64a5-4890-8ef1-33b359cacf94)

4. **Modified Original Page Styles**
   - Added toolbar-like content

     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![image](https://github.com/user-attachments/assets/1c2ab392-8bfe-44fe-a208-ea7deef7f10d) | None |
   - And more:

     **Demo:**

     | version 3 | version 2 |
     | :---: | :---: |
     | ![image](https://github.com/user-attachments/assets/e93390c7-1331-4606-aa05-8cb4e4a6678d) | None |

5. **New MDX Components**
   - `GitHubStats.astro`
   
     ```astro
     <GitHubStats username="frosti-team" />
     <GitHubStats username="frosti-team" repositoryName="frosti" />
     ```
   - `RepositoryCard.astro`
     
     ```astro
     <RepositoryCard repo="frosti-team/frosti" />
     <RepositoryCard
       repo="frosti-team/frosti"
       image={import("../../assets/images/repo-cover.png")}
       isPinned={true}
     />
     ```
   - `FeatureCard.astro`
     
     ```astro
     <FeatureCard
       title="Responsive Design"
       description="Perfect adaptation to various screen sizes, from mobile to desktop devices."
       icon="lucide:layout"
       color="oklch(0.7 0.2 140)"
     />
     ```
  - `FriendCard.astro`
    
    ```astro
    <FriendCard
      name=""
      avatar={import("../../assets/images/avatars/avatar.png")}
      description=""
      url=""
      type="contributor"
    />
    ```

6. **Added 404 Page**
![image](https://github.com/user-attachments/assets/b1df378b-751f-42c1-b6ca-b902c463dc53)


### Refactored

- Fixed pagination button style issues
- Modified tag and category button styles
- Modified article image hover effects
- Rewrote code blocks to adapt to Astro v5:

  **Demo:**

  | version 3 | version 2 |
  | :---: | :---: |
  | ![image](https://github.com/user-attachments/assets/d925d150-6af1-4075-8672-e84dc1293566) | ![image](https://github.com/user-attachments/assets/a4c60c34-0df8-495f-a633-7e95cc33dc16) |


### Fix

- Fixed incorrect day/night toggle logic (why did no one discover this?)
- Fixed code block style errors in clean readers or RSS readers

### Chore

- Removed Waline comment system
- Removed image zoom on click functionality

## [3.1.0] - 2025-3-29

### Features

- Added mobile-exclusive table of contents `MobileTOC`
- Added code block line number styles
- Added page footnote styles

### Refactored

- Modified timeline component on About page
- Modified responsive sizes of several buttons
- Modified search box style design
- Hide default table of contents on small screens

### Fix

- Fixed issue where website title displayed incorrectly in tab bar
- Fixed style errors when articles are missing images

### Chore

- Removed unnecessary imports

## [3.1.1] - 2025-3-30

### Features

- Added configuration for number of articles per page in `frosti.config.yaml`
- Added i18n configuration for dates and months
- Added extensive language configurations

### Refactored

- Centralized reusable code to `/utils`
- Reduced `hints` to 0

### Fix

- Fixed issue where draft articles were still displayed in RSS

## [3.1.2] - 2025-4-19

### Features

- Added a tutorial on how to configure comment system

### Refactored

- Removed unnecessary `title` attribute from sidebar

### Fix

- Fixed issue where Chrome's automatic dark theme wasn't adapted #78

## [3.1.3] - 2025-5-24

### Chore

- Updated dependencies
- Added new contributors
- Removed unnecessary css files (previous remnants)

### Fix

- Fixed expand animation styles on category page
- Fixed missing transition effects for `post` on category page

## [3.1.4] - 2025-5-31

### Chore

- Added a mathematical formula example article

### Fix

- Fixed mathematical formula rendering issues (previously missing necessary CSS files)

## [3.1.5] - 2025-6-21

### Refactored

- Modified page structure, now footer will be fixed at bottom even when page content is minimal

### Fix

- Fixed issue where sidebar buttons had inconsistent sizes
- Fixed issue where 404 page was included in search index
  - **Now you can customize whether each page is search indexed**
- Fixed accessibility issues: forms without associated elements, buttons without accessible names
- Fixed spacing inconsistency between blog list page and entire site
- Fixed incorrect border colors in dark mode

## [3.2.0] - 2025-7-13

### Features

- Now when running dev server, updating `frosti.config.yaml` will also restart dev server to apply changes
- Now you can use `frosti.update.sh` to quickly update the project
- Now you can add your own website on the `friend` page

### Refactored

- Fine-tuned page structure and article content

### Fixed

- Fixed issue where title style overlapped with `MainCard` border when `title` is too long, now automatically adapts

## [3.2.1] - 2025-7-28

### Chore

- Now if accessing non-existent tags or categories, will return specific 404 page
- Modified Issue question template

### Refactored

- Changed word count and time statistics plugin from `.mjs` to `.ts`

### Fixed

- Fixed issue where multiple searches in `SearchBar` caused multiple search boxes to appear