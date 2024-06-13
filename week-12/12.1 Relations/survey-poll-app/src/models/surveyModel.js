const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SurveyModel {
  static async getAllSurveys() {
    return await prisma.survey.findMany();
  }

  static async getSurveysById(id) {
    return await prisma.survey.findUnique({ where: { id: parseInt(id, 10) } });
  }

  static async createSurvey(data) {
    return await prisma.survey.create({ data });
  }

  static async updateSurvey(id, data) {
    return await prisma.survey.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  }

  static async deleteSurvey(id) {
    return await prisma.survey.delete({ where: { id: parseInt(id, 10) } });
  }
}

module.exports = SurveyModel;
