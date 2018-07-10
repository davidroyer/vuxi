const vuedoc = require("@vuedoc/parser");
var fs = require("fs");
let mdDocContent = ``;

const options = {
  filename: "src/components/VTextarea.vue"
};

function propsIterator(propsArray) {
  let propsContent = ``;
  propsArray.forEach(function(prop) {
    propsContent += `### \`${prop.name}\`
${prop.description}

`;
  });
  return propsContent;
}

function createJsonFile(content) {
  // console.log(content);
  try {
    fs.writeFileSync("OUTPUT.json", JSON.stringify(content), "utf8");
  } catch (e) {
    console.log("Cannot write file ", e);
  }
}

function createMarkdownFile(mdContent) {
  // console.log(content);
  try {
    fs.writeFileSync("OUTPUT.md", mdContent, "utf8");
  } catch (e) {
    console.log("Cannot write file ", e);
  }
}

function createMarkdownContent(content) {
  let { name, description, props, events, methods, slots } = content;
  mdDocContent = `# ${name}
**${description}**

## Props

${propsIterator(props)}

## Events

${propsIterator(events)}

## Slots

${propsIterator(slots)}
`;
  return mdDocContent;
}

// fs.writeFile("output.json", jsonContent, "utf8", function(err) {
//   if (err) {
//     console.log("An error occured while writing JSON Object to File.");
//     return console.log(err);
//   }
//   console.log("JSON file has been saved.");
// });

vuedoc
  .parse(options)
  .then(component => {
    let mdContent = createMarkdownContent(component);
    createMarkdownFile(mdContent);
  })
  .catch(err => console.error(err));
