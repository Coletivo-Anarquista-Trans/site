/**
 * Função utilitária para adicionar o basePath às imagens quando em produção
 * no GitHub Pages. O Next.js não adiciona automaticamente o basePath
 * para imagens estáticas quando usando o componente Image.
 */
export function getImagePath(src: string): string {
  // Se já tem um caminho absoluto completo ou é uma URL externa, retornar como está
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  
  // Detectar se estamos no GitHub Pages verificando se a URL contém /site/
  // Isso funciona tanto no servidor quanto no cliente
  if (typeof window !== 'undefined') {
    // Cliente: verificar a URL atual
    const isGitHubPages = window.location.pathname.startsWith('/site/');
    if (isGitHubPages && src.startsWith('/')) {
      return `/site${src}`;
    }
  } else {
    // Servidor: usar a variável de ambiente
    const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
    if (isGitHubPages && src.startsWith('/')) {
      return `/site${src}`;
    }
  }
  
  return src;
} 