export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  pageNumber: string;
}

export enum SectionType {
  COVER = 'COVER',
  NEWS = 'NEWS',
  LANGUAGE = 'LANGUAGE',
  CULTURE = 'CULTURE',
  SOCIETY = 'SOCIETY',
  EDUCATION = 'EDUCATION'
}