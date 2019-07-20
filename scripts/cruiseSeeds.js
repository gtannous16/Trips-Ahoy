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
                                date: "Sunday 5/3/2020 to Sunday 5/17/2020"
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
                                date: "Friday 6/12/2020 to Monday 6/22/2020"
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
                                date: "Sunday 5/16/2020 to Saturday 5/30/2020"
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
                                date: "Sunday 5/31/2020 to Sunday 6/7/2020"
                            }
                        ]
                    }
                ],
                Australia: [
                    {
                        Norwegian: [
                            {
                                leaving: "Sydney, Australia",
                                visiting: ["Sydney, Australia", "Eden, Australia", "Melbourne, Australia",
                                    "Burnia (Tasmania), Australia", "Dunedin (Port Chalmers), New Zealand",
                                    "Akaroa, New Zealand", "Marlborough (Picton), New Zealand", "Napier, New Zealand",
                                    "Tauranga, New Zealand", "Auckland, New Zealand"],
                                pricing: ["Inside: $1,249",
                                    "Oceanview: $1,629",
                                    "Balcony: $3,649",
                                    "Mini-suit: $3,949",
                                    "Suite: $7,299",
                                    "The Haven: $8,499"],
                                date: "Thursday 1/23/2020 to Tuesday 2/4/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Sydney, Australia",
                                visiting: ["Sydney, Australia", "Melbourne, Australia", "Hobart, Australia",
                                    "Sydney, Australia"],
                                pricing: ["Interior: $532",
                                    "Outsideview: $644",
                                    "Balcony: $914",
                                    "Suites: $1,132"],
                                date: "Thursday 2/25/2021 to Wednesday 3/3/2021"
                            }
                        ]
                    }
                ],
                Uruguay: [
                    {
                        Norwegian: [
                            {
                                leaving: "Buenos Aires, Argentina",
                                visiting: ["Buenos Aires, Argentina", "Montevideo, Uruguay", 
                                    "Punta del Este, Uruguay", "Puerto Madryn, Argentina",
                                    "Stanley, Falkland Island", "Cape Horn, Chile", "Puerto Montt, Chile",
                                    "Santiago (San Antonio), Chile"],
                                pricing: ["Inside: $1,899",
                                    "Oceanview: $2,399",
                                    "Balcony: $3,099",
                                    "Mini-suit: $4,099",
                                    "Suite: 7,149"],
                                date: "Saturday 1/16/2021 to Saturday 1/30/2021"
                            }
                        ],
                        Princess: [
                            {
                                leaving: "Buenos Aires, Argentina",
                                visiting: ["Buenos Aires, Argentina", "Montevideo, Uruguay", 
                                    "Rio de Janeiro, Brazil", "Salvador, Brazil", "Martinique", "St.Kitts", 
                                    "Ft. Lauderdale, Florida"],
                                pricing: "Interior: $1,608",
                                date: "Thursday 3/19/2020 to Sunday 4/5/2020"
                            }
                        ]
                    }
                ],
            }
        ]
    }
]


