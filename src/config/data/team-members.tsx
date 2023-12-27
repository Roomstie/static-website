import { teamMemberNico } from "assets";
import { ITeamMemberType } from "types/team/team-member-groups.type";

export const TEAM_MEMBERS: ITeamMemberType = {
  /**
   * MAIN team members
   */
  main: [
    // Add your own members here
  ],
  /**
   * Other members you want to mention
   */
  other: [
    {
      name: "Nico Kupfer",
      role: "Advisor & Prototyper",
      description: <>Supporting the team wherever I can. <a href="https://kupfer.es" target="_blank" rel="noreferrer">Website</a></>,
      image: teamMemberNico,
    },
  ],
};
