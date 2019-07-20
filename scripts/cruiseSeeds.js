const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONOGDB_URI || "mongodb://localhost/tripsdb");

const cruiseSeed = [
    {
        secluded: [
            {
                Scotland: [
                    {
                        Norwegian: [
                            {
                                leaving: "London (Southampton), England",
                                visiting: ["London, England", "Paris (Le Havre), France",
                                    "Brussels/Burges(Zeebrugge), Belgium", "Amsterdam, Netherlands",
                                    "Inverness (Invergordon), Scotland", "Edinburgh (Newhaven), Scotland",
                                    "Kirkwall, Orkney Isles, Scotland", "Glasgow (Greenock), Scotland",
                                    "Belfast, Northern Ireland", "Dublin, Ireland", "Holyhead, Wales, United Kingdon",
                                    "Cork, Island", "Portland, England", "London, England"],
                                pricing: ["Inside: $1,499",
                                    "Oceanview: $2,049",
                                    "Balcony: $3,349",
                                    "Mini-suit: $3,699",
                                    "Suite: 5,799"],
                                date: "Sunday May 3, 2020 to Sunday May 17, 2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Amsterdam, Netherlands",
                                visiting: ["Amsterdam, Netherlands", "Dover, England", "Belfast, Northern Ireland",
                                            "Glasglow (Greenock), Scotland", "Holyhead, Wales", "Cork (Cobh), Ireland",
                                            "Paris/Normandy (Le Havre), France", "Amsterdam, Netherlands"],
                                pricing: ["Interior: $1,729",
                                        "Outsideview: $1,825",
                                        "Balcony: $2,881",
                                        "Suites: $4,222"],
                                date: "Friday June 12, 2020 to Monday June 22, 2020"
                            }
                        ]
                    }
                ],
                Norway: [
                    {
                        Norwegian: [
                            {
                                leaving: "Amsterdam, Netherlands",
                                visiting: ["Amsterdam, Netherlands", "Edinburgh (Newhaven), Scotland", 
                                    "Inverness (Invergordon), Scotland", "Bergen, Norway", 
                                    "Ålesund, Norway", "Hellesylt, Norway", "Geiranger, Norway", 
                                    "Belfast, Northern Ireland", "Dublin, Ireland", "Paris (Le Havre), France",
                                    "London (Tilbury), England", "Brussels/Bruges (Zeebrugge), Belgium", 
                                    "Amsterdam, Netherlands"],
                                pricing: ["Inside: $1,679",
                                    "Oceanview: $2,199",
                                    "Balcony: $3,379",
                                    "Mini-suit: $4,029",
                                    "Suite: $6,999",
                                    "The Haven: $10,099"],
                                date: "Sunday May 16, 2020 to Saturday May 30, 2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Copenhagen, Denmark",
                                visiting: ["Copenhagen, Denmark", "Geiranger, Norway", "Bergen, Norway", "Stavanger, Norway",
                                        "Kristiansand, Norway", "Copenhagen, Norway"],
                                pricing: ["Interior: $798",
                                        "Outsideview: $962",
                                        "Balcony: $1,342",
                                        "Suites: $2,349"],
                                date: "Sunday May 31, 2020 to Sunday June 7, 2020"
                            }
                        ]
                    }
                ],
            }
        ]
    }
]


