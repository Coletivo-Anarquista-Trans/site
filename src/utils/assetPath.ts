/**
 * We were facing a problem with static assets not loading in the production environment.
 * This function is a workaround to add the basePath to static files when in production
 * in GitHub Pages. Next.js does not add the basePath automatically for static assets
 * when using direct paths.
 */
export function getAssetPath(src: string): string {
  // If the src is an absolute path or an external URL, return it as is
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  
  // Detect if we are in GitHub Pages by checking if the URL contains /site/
  // This works both on the server and the client
  if (typeof window !== 'undefined') {
    // Client: check the current URL
    const isGitHubPages = window.location.pathname.startsWith('/site/');
    if (isGitHubPages && src.startsWith('/')) {
      return `/site${src}`;
    }
  } else {
    // Server: use the environment variable
    const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
    if (isGitHubPages && src.startsWith('/')) {
      return `/site${src}`;
    }
  }
  
  return src;
} 