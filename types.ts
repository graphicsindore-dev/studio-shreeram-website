
export interface ServiceTab {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  detailsImage: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
  image: string;
}
