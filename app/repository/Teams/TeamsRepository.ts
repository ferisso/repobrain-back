import { teams } from "@prisma/client";
import { prisma } from "../../prisma";
import { ITeam } from "../../types/interfaces";

const TeamsRepository = {
  list: async function (id: string) {
    return await prisma.teams.findMany({
      where: {
        members: {
          some: {
            user_id: id
          }
        }
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
      },
    });
  },
  create: async function (team: ITeam) {
    const newTeam = await prisma.teams.create({
      data: {
        name: team.name,
        description: team.description,
        user_id: team.user_id,
      },
    });

    await prisma.team_members.create({
      data: {
        team_id: newTeam.id,
        user_id: newTeam.user_id,
      },
    });

    return newTeam;
  },
  update: async function (team: ITeam) {
    return await prisma.teams.update({
      data: {
        name: team.name,
        description: team.description,
      },
      where: {
        id: team.id,
      },
    });
  },
  delete: async function (id: string) {
    return await prisma.teams.delete({
      where: {
        id: id,
      },
      include: {
        projects: true,
      },
    });
  },
};

export default TeamsRepository;
