export interface Author {
  name: string;
  affiliations: string[];
  is_corresponding: boolean;
}

export interface AuthorDetails {
  authors: Author[];
  affiliations: { [key: string]: string };
  corresponding_author: { email: string; name: string } | null;
}

export interface Article {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string;
  url: string;
  significance?: string;
  summary?: string;
  author_details?: AuthorDetails;
  journal?: string | null;
  volume?: string;
  issue?: string;
  pages?: string;
  type: string;
  submitted_date?: string;
  revised_date?: string;
  accepted_date?: string;
  citation?: string;
}

export interface Volume {
  volumeName: string;
  researchArticles: Article[];
}

export interface Journal {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  volumes: Volume[];
  articles: Article[];
}
