$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "BMW",
        "Any Model",
        "ACT - All",
        "$15,000"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Cherokee",
        "Any Location",
        "$20,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Hyundai",
        "Any Model",
        "NSW - All",
        "$30,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "SA - All",
        "$20,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "A-Class",
        "ACT - All",
        "$50,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Nissan",
        "LEAF",
        "Any Location",
        "$30,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10394940300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 156178000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2346484200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 1200754300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 107200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 623134600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 71756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 388175000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 335527600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23060761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 46122700,
  "status": "passed"
});
formatter.after({
  "duration": 2115392000,
  "status": "passed"
});
formatter.before({
  "duration": 7583653700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Cherokee\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2324071200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 2366201700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 115600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 575809500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cherokee",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 369291000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 56137400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 285241000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 24516646800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 43324600,
  "status": "passed"
});
formatter.after({
  "duration": 2004779800,
  "status": "passed"
});
formatter.before({
  "duration": 7442369800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2288845400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 2783697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 92200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 491621500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 132374900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 349686300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 318409000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23892871400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 38834700,
  "status": "passed"
});
formatter.after({
  "duration": 2091770400,
  "status": "passed"
});
formatter.before({
  "duration": 8545498300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"SA - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2270910100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 2509993900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 439033800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 398326900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 289973700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 277948200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23276741300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40985000,
  "status": "passed"
});
formatter.after({
  "duration": 2194212300,
  "status": "passed"
});
formatter.before({
  "duration": 7379985600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"A-Class\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2377308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 2753100400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 572671000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-Class",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 321762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 328257300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 288602900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 23416341200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 41140900,
  "status": "passed"
});
formatter.after({
  "duration": 2039552200,
  "status": "passed"
});
formatter.before({
  "duration": 8793734000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"LEAF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2258414700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyCarStep.iClickLink(String)"
});
formatter.result({
  "duration": 2625485200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iNavigateToPage(String)"
});
formatter.result({
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyCarStep.iSelectMake(String)"
});
formatter.result({
  "duration": 460401700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEAF",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectModel(String)"
});
formatter.result({
  "duration": 327731600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuyCarStep.iSelectLocation(String)"
});
formatter.result({
  "duration": 106584100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyCarStep.iSelectPrice(String)"
});
formatter.result({
  "duration": 278667100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarStep.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 24576406300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyCarStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 33430100,
  "status": "passed"
});
formatter.after({
  "duration": 2089079600,
  "status": "passed"
});
});