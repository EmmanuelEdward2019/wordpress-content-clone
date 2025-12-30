import { useQuery } from '@tanstack/react-query';
import { 
  fetchPosts, 
  fetchPostBySlug, 
  fetchPages, 
  fetchPageBySlug,
  fetchMedia,
  WPPost,
  WPPage,
  WPMedia,
  PostsResponse
} from '@/lib/wordpress';

// Hook to fetch posts with pagination
export function usePosts(page = 1, perPage = 10) {
  return useQuery<PostsResponse>({
    queryKey: ['posts', page, perPage],
    queryFn: () => fetchPosts(page, perPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Hook to fetch a single post by slug
export function usePost(slug: string) {
  return useQuery<WPPost | null>({
    queryKey: ['post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

// Hook to fetch all pages
export function usePages() {
  return useQuery<WPPage[]>({
    queryKey: ['pages'],
    queryFn: fetchPages,
    staleTime: 5 * 60 * 1000,
  });
}

// Hook to fetch a single page by slug
export function usePage(slug: string) {
  return useQuery<WPPage | null>({
    queryKey: ['page', slug],
    queryFn: () => fetchPageBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

// Hook to fetch media by ID
export function useMedia(id: number) {
  return useQuery<WPMedia | null>({
    queryKey: ['media', id],
    queryFn: () => fetchMedia(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}
