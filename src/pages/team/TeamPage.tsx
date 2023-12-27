import { TeamMemberCard } from "components/team";
import { TEAM_MEMBERS } from "config/data";
import { ITeamMember } from "types";

export const TeamPage = (): JSX.Element => (
  <div className="max-w-container flex flex-col landing-spacing space-y-6">
    <h1 className="text-4xl font-bold">Meet the team</h1>
    <hr className="my-8 border-2" />

    <h3 className="text-3xl">Core team</h3>
    <div className="grid grid-cols-4 gap-8">
      {
        TEAM_MEMBERS.main.map((teamMember: ITeamMember) => (
          <TeamMemberCard
            key={teamMember.name}
            member={teamMember}
          />
        ))
      }
    </div>

    <hr className="my-8 border-2" />

    <h3 className="text-3xl">With help from</h3>
    <div className="grid grid-cols-4 gap-8">
      {
        TEAM_MEMBERS.other.map((teamMember: ITeamMember) => (
          <TeamMemberCard
            key={teamMember.name}
            member={teamMember}
          />
        ))
      }
    </div>
  </div >
);
