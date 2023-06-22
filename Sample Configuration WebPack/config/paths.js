const path = require("path");

const RootSrc = "./src/";

const PATHS = {
  dist: path.resolve(__dirname, "../src/Web/wwwroot/dist"),
  node_modules: RootSrc + "Web/node_modules/",
  typeScriptLibs: RootSrc + "TypeScriptLibs/",
  contentCss: RootSrc + "Web/Content/",
  area: RootSrc + "Web/Areas/",
  scripts: RootSrc + "Web/Scripts/",
  tools: "./tools/",
  shared: RootSrc + "Web/Views/Shared/",
  bowtie: RootSrc + "Web/Scripts/bowtie/",
};

prefixFolder = (base, filesLocations) => filesLocations.map(r => base + r);
postfixMin = files => files.map(r => r.replace(".js", ".min.js"));

// -----------------------------------------------Scripts-----------------------------------------------
const JQuery = PATHS.node_modules + "jquery/dist/jquery.js";
const JQueryMin = PATHS.node_modules + "jquery/dist/jquery.min.js";

const JQueryVal = prefixFolder(PATHS.node_modules, [
  "jquery-validation/dist/jquery.validate.js",
  "jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js"
]);

const JQueryValMin = postfixMin(JQueryVal);

const inshelp = "Web/Scripts/inshelp.js";

const bootstrapJs = prefixFolder(PATHS.node_modules, [
  "bootstrap/dist/js/bootstrap.js",
  "bootstrap-datepicker/dist/js/bootstrap-datepicker.js"
]);
const Bootstrap = [...bootstrapJs, inshelp];
const BootstrapMin = [...postfixMin(bootstrapJs), inshelp];

const AreaScripts = [
  "Audits/Scripts/audits.ts",
  "Bowties/Scripts/bowtie_editor.ts",
  "Reports/Scripts/systree.ts",
  "Observations/Scripts/sir.ts",
  "Observations/Scripts/sir_bb.ts",
  "Observations/Scripts/observations.ts",
  "Wiki/Scripts/wiki.ts"
];

const SharedScripts = [
  "DisplayTemplates/BowTieViewerVM.ts",
  "DisplayTemplates/IncidentDiagramVM.ts"
];

const BowtieScripts = ["bowtie/form.ts", "bowtie/treelist.ts"];

const Scripts = [
  ...prefixFolder(PATHS.scripts, BowtieScripts),
  ...prefixFolder(PATHS.area, AreaScripts),
  ...prefixFolder(PATHS.shared, SharedScripts)
];

const Mithril = PATHS.node_modules + "mithril/mithril.js";
const MithrilMin = PATHS.node_modules + "mithril/mithril.min.js";

// -----------------------------------------------Styles-----------------------------------------------

const TypeScriptLibsCss = [
  "diagram/dist/diagram.css",
  "bowtie/css/bowtie.css",
  "plotplan/css/plotplan.css",
  "select/css/select.css",
  "timeline/dist/timeline.css",
  "treelist/css/treelist.css",
  "wvedit/css/wvedit.css"
];

const Css = [
  "Site.css",
  "mui-reset.css",
  "flipswitch.css",
  "glyphicons-halflings.css",
  "glyphicons.css",
  "shapes.css"
];

const ExternalCss = [
  "bootstrap-datepicker/dist/css/bootstrap-datepicker3.css",
  "bootstrap-slider/dist/css/bootstrap-slider.css",
  "leaflet/dist/leaflet.css",
  "leaflet.markercluster/dist/MarkerCluster.css"
];

const bootstrapCss = "CompileLess/dist/bootstrap.css";
const observationCss = "Observations/Styles/observation.css";
const SirCss = prefixFolder(PATHS.area, [
  observationCss,
  "/Observations/Styles/sir.css"
]);

const Styles = [
  ...prefixFolder(PATHS.tools, [bootstrapCss]),
  ...prefixFolder(PATHS.area, [observationCss]),
  ...prefixFolder(PATHS.node_modules, ExternalCss),
  ...prefixFolder(PATHS.contentCss, Css),
  ...prefixFolder(PATHS.typeScriptLibs, TypeScriptLibsCss)
];

module.exports = {
  PATHS,
  Scripts,
  Styles,
  RootSrc,
  JQuery,
  JQueryMin,
  JQueryVal,
  JQueryValMin,
  Bootstrap,
  BootstrapMin,
  SirCss,
  Mithril,
  MithrilMin
};
