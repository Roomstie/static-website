export interface ITeamMember {
  name: string;
  role: string;
  description: string | JSX.Element;
  image: typeof import("*.png");
}
