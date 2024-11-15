import { program } from "commander";
import inquirer from "inquirer";
import fs from "node:fs";

const questions = [
  {
    type: "input",
    name: "programming_Language",
    message: "What's your favourite programming language?",
  },
  {
    type: "input",
    name: "programming_Language2",
    message: "What's your second favourite programming language?",
  },
];

program
  .command("add")
  .alias("a")
  .description("Add a course")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      let content = [];
      if (fs.existsSync("answers.json")) {
        const data = fs.readFileSync("answers.json", "utf8");
        content = JSON.parse(data);
      }
      content.push(answers);
      fs.writeFile("answers.json", JSON.stringify(content), (err) => {
        if (err) {
          console.log("Error saving answers:", err);
        } else {
          console.log("Answers saved successfully");
        }
      });
    });
  });

program
  .command("list")
  .alias("l")
  .description("List all languages")
  .action(() => {
    if (fs.existsSync("answers.json")) {
      fs.readFile("answers.json", "utf8", (err, data) => {
        if (err) {
          console.log("Error reading file:", err);
          process.exit();
        }
        console.table(JSON.parse(data));
      });
    } else {
      console.log("No data available. Please add a course first.");
    }
  });

program.parse(process.argv);
