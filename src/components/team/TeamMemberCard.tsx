import { ITeamMember } from "types";

interface TeamMemberCardProps {
  member: ITeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps): JSX.Element => (
  <div className="flex flex-col space-y-4 bg-gray-200 rounded-lg shadow-lg border border-gray-800 p-4">
    <h3 className="text-xl">{member.name}</h3>
    <img src={member.image.default} className="w-full" />
    <h4 className="text-lg">{member.role}</h4>
    <p>{member.description}</p>
  </div>
);
