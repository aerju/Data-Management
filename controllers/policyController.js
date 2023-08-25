import Policy from "../models/PolicyModel.js";

export const addPolicyInfo = async (req, res) => {
  try {
    const policyData = req.body;
    const policy = new Policy(policyData);
    const result = await policy.save();
    res.json({ message: "Policy details saved " });
  } catch (error) {
    res.status(400).json({ error: "Failed to save policy details" });
  }
};

export const getPolicyInfo = async (req, res) => {
  try {
    const PolicyInfo = await Policy.find({});
    res.json({ PolicyInfo: PolicyInfo });
  } catch (error) {
    res.status(400).json({ error: "Failed to get policy details" });
  }
};

export const EditPolicyInfo = async (req, res) => {
  try {
    const policyID = req.params.id;
    const policyData = req.body;
    const result = await Policy.updateOne({ _id: policyID }, policyData);
    res.json({ message: "Policy details updated " });
  } catch (error) {
    res.status(400).json({ error: "Failed to edit policy details" });
  }
};

export const deletePolicyInfo = async (req, res) => {
  try {
    const policyID = req.params.id;
    const result = await Policy.deleteOne({ _id: policyID });
    res.json({ message: "Policy details deleted " });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete policy details" });
  }
};
