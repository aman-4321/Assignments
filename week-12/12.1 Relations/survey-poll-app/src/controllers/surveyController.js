const SurveyModel = require("../models/surveyModel");

class SurveyController {
  async getAllSurveys(req, res) {
    try {
      const surveys = await SurveyModel.getAllSurveys();
      res.status(200).json(surveys);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getSurveyById(req, res) {
    try {
      const survey = await SurveyModel.getSurveysById(req.params.id);
      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }
      res.status(200).json(survey);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createSurvey(req, res) {
    try {
      const newSurvey = await SurveyModel.createSurvey(req.body);
      res.status(201).json(newSurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateSurvey(req, res) {
    try {
      const updatedSurvey = await SurveyModel.updateSurvey(
        req.params.id,
        req.body,
      );
      res.status(200).json(updatedSurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteSurvey(req, res) {
    try {
      await SurveyModel.deleteSurvey(req.params.id);
      res.status(200).json({ message: "Survey deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SurveyController;
