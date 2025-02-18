export interface YouTubeVideoListResponse {
  kind: string;
  etag: string;
  items: YouTubeVideoItem[];
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubeVideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: YouTubeThumbnails;
      channelTitle: string;
      tags?: string[];
      categoryId: string;
      liveBroadcastContent: string;
      localized: {
          title: string;
          description: string;
      };
      defaultAudioLanguage?: string;
      defaultLanguage?: string;
  };
  contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      licensedContent: boolean;
      contentRating: object;
      projection: string;
  };
  statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
  };
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}
