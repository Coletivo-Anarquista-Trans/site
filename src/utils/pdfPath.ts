import { getAssetPath } from './assetPath';

/**
 * Get the correct path for PDF files in both development and production.
 * For static sites, we serve PDFs directly from the public folder.
 * This uses the getAssetPath utility to handle basePath correctly.
 */
export function getPdfPath(pdfPath: string): string {
  const pathWithSlash = pdfPath.startsWith('/') ? pdfPath : `/${pdfPath}`;
  
  return getAssetPath(pathWithSlash);
} 
