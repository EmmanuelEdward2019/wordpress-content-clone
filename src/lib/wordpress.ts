// WordPress REST API configuration
const WP_API_BASE = 'https://akinolaolujobi.com/wp-json/wp/v2';

// Types for WordPress data
export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
    'wp:term'?: WPTerm[][];
  };
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  parent: number;
  menu_order: number;
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
}

export interface WPMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: { rendered: string };
  alt_text: string;
  media_type: string;
  mime_type: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
}

export interface PostsResponse {
  posts: WPPost[];
  totalPages: number;
  totalPosts: number;
}

// Fetch posts with pagination
export async function fetchPosts(page = 1, perPage = 10): Promise<PostsResponse> {
  const response = await fetch(
    `${WP_API_BASE}/posts?page=${page}&per_page=${perPage}&_embed`,
    { headers: { 'Accept': 'application/json' } }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }
  
  const posts = await response.json();
  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
  const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10);
  
  return { posts, totalPages, totalPosts };
}

// Fetch single post by slug
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const response = await fetch(
    `${WP_API_BASE}/posts?slug=${slug}&_embed`,
    { headers: { 'Accept': 'application/json' } }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }
  
  const posts = await response.json();
  return posts.length > 0 ? posts[0] : null;
}

// Fetch all pages
export async function fetchPages(): Promise<WPPage[]> {
  const response = await fetch(
    `${WP_API_BASE}/pages?per_page=100&_embed`,
    { headers: { 'Accept': 'application/json' } }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch pages: ${response.statusText}`);
  }
  
  return response.json();
}

// Fetch single page by slug
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  const response = await fetch(
    `${WP_API_BASE}/pages?slug=${slug}&_embed`,
    { headers: { 'Accept': 'application/json' } }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch page: ${response.statusText}`);
  }
  
  const pages = await response.json();
  return pages.length > 0 ? pages[0] : null;
}

// Fetch media by ID
export async function fetchMedia(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  
  const response = await fetch(
    `${WP_API_BASE}/media/${id}`,
    { headers: { 'Accept': 'application/json' } }
  );
  
  if (!response.ok) {
    return null;
  }
  
  return response.json();
}

// Get featured image URL from post/page
export function getFeaturedImageUrl(item: WPPost | WPPage, size: string = 'full'): string | null {
  if (item._embedded?.['wp:featuredmedia']?.[0]) {
    const media = item._embedded['wp:featuredmedia'][0];
    if (media.media_details?.sizes?.[size]) {
      return media.media_details.sizes[size].source_url;
    }
    return media.source_url;
  }
  return null;
}

// Strip HTML tags from content
export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Format date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
