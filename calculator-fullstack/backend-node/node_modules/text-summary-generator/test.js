const { generateSummary } = require('./index');

const longText = `
Project SmartHub launched in April 2025. The aim was to simplify student-teacher communication using technology.
Teachers were trained in using online tools. Feedback was collected every two weeks to track progress.
Over 85% of students reported improved clarity in assignments. Challenges included internet connectivity in rural zones.
Solutions like offline support and local data sync were proposed.
`;

console.log(generateSummary(longText));
