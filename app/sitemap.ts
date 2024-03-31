import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://test.sovanra.me',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://test.sovanra.me/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://test.sovanra.me/service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
  ]
}