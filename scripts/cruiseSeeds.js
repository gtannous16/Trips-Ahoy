const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONOGDB_URI || "mongodb://localhost/tripsdb");

const cruiseSeed = [
    {
        Secluded: [
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
                                    "Suite: $5,799"],
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
                                    "Suite: $7,149"],
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
                ]
            }
        ],
        Touristic: [
            {
                France: [
                    {
                        Norwegian: [
                            {
                                leaving: "London (Southampton), England",
                                visiting: ["London (Southampton), England", "Paris (Le Havre), France", 
                                    "Barcelona, Spain", "Cannes, France", "Florence/Pisa (Livorno), Italy",
                                    "Rome (Civitavecchia), Italy", "Naples, Italy", "Santorini, Greece",
                                    "Athens (Piraeus), Greece", "Split, Croatia", "Venice, Italy"],
                                pricing: ["Inside: $1,199",
                                    "Oceanview: $1,499",
                                    "Balcony: $1,749",
                                    "Suite: $4,599"],
                                date: "Friday 10/11/2019 to Saturday 10/26/2019"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Southampton, England",
                                visiting: ["Southampton, England", "Paris/Normandy (Le Havre), France", 
                                    "Vigo, Spain","Libson, Portugal", "Southampton, England"],
                                pricing: ["Interior: $849",
                                    "Outsideview: $1,099",
                                    "Balcony: $1,369",
                                    "Suites: $1,849"],
                                date: "Saturday 10/19/2019 to Saturday 10/26/2019"
                            }
                        ]
                    }
                ],
                Hawaii: [
                    {
                        Norwegian: [
                            {
                                leaving: "Honolulu, Oahu",
                                visiting: ["Honolulu, Oahu", "Kahului, Maui", "Hilo, Hawaii",
                                    "Kona, Hawaii", "Nāwiliwili, Kauài", "Honolulu, Oahu"],
                                pricing: ["Inside: $1,249",
                                    "Oceanview: $1,499",
                                    "Balcony: $1,949",
                                    "Suite: $3,349"],
                                date: "Saturday 9/7/2019 to Saturday 9/14/2019"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Oahu (Honolulu), Hawaii",
                                visiting: ["Oahu (Honolulu), Hawaii", "Maui (Lahaina), Hawaii",
                                    "Kailua Kona, Hawaii", "Hilo, Hawaii", "Nāwiliwili, Kauài, Hawaii",
                                    "Vancouver, British Columbia"],
                                pricing: ["Interior: $1,080",
                                    "Outsideview: $1,250",
                                    "Balcony: $2,041",
                                    "Suites: $3,622"],
                                date: "Tuesday 5/5/2020 to Thursday 5/14/2020"
                            }
                        ]
                    }
                ],
                Italy: [
                    {
                        Norwegian: [
                            {
                                leaving: "Rome (Civitaveccia), Italy",
                                visiting: ["Rome (Civitaveccia), Italy", "Venice, Italy", "Dubrovnik, Croatia",
                                    "Kotor, Montenegro", "Florence/Pisa (Livorno), Italy", "Monte Carlo, Monaco", 
                                    "Barcelona, Spain", "Palma, Majorca, Spain", "Rome (Civitaveccia), Italy"],
                                pricing: ["Inside: $1,649",
                                    "Oceanview: $1,649",
                                    "Balcony: $2,399",
                                    "Suite: $6,099"],
                                date: "Sunday 12/22.2019 to Friday 1/3/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Rome (Civitaveccia), Italy",
                                visiting: ["Rome (Civitaveccia), Italy", "Valencia, Spain", 
                                    "Palma de Mallorca, Spain", "Barcelona, Spain", 
                                    "Nice (Villefranche), France", "Florence/Pisa (La Spezia), Italy",
                                    "Rome (Civitaveccia), Italy"],
                                pricing: ["Interior: $734",
                                    "Outsideview: $1,126",
                                    "Balcony: $1,255",
                                    "Suites: $2,189"],
                                date: "Sunday 6/21/2020 to Sunday 6/28/2020"
                            }
                        ]
                    }
                ],
                England: [
                    {
                        Norwegian: [
                            {
                                leaving: "London (Southampton), England",
                                visiting: ["London (Southampton), England", "Paris (Le Havre), France",
                                    "Brussels/Bruges (Zeebrugge), Belgium", "Amsterdam, Netherlands",
                                    "Edinburgh (Newhaven), Scotland", "Inverness (invergordon), Scotland",
                                    "Kirkwall, Orkney Isles, Scotland", "Glasgow (Greenock), Scotland", 
                                    "Belfast, Northern Ireland", "Liverpool, United Kingdom", 
                                    "Dublin (DunLaoghaire), Ireland", "Cork (Cobb), Ireland", "Potland, England",
                                    "London (Southampton), England"],
                                pricing: ["Inside: $1,599",
                                    "Oceanview: $2,049",
                                    "Balcony: $3,349",
                                    "Mini-Suite: $3,799",
                                    "Suite: $5,099"],
                                date: "Sunday 5/17/2020 to Sunday 5/31/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Amsterdam, Netherlands",
                                visiting: ["Amsterdam, Netherlands", "Dover, England", "Belfast, Northern Ireland",
                                    "Glasgow, (Greeknock), Scotland", "Holyhead, Wales", "Cork (Cobh), Ireland",
                                    "Paris/Normandy (Le Havre), France", "Amsterdam, Netherlands"],
                                pricing: ["Interior: $1,741",
                                    "Outsideview: $1,844",
                                    "Balcony: $2,893",
                                    "Suites: $4,297"],
                                date: "Friday 6/12/2020 to Monday 6/22/2020"
                            }
                        ]
                    }
                ],
            }
        ],
        Outdoors: [
            {
                Canada: [
                    {
                        Norwegian: [
                            {
                                leaving: "Bosoton, Massachusetts",
                                visiting: ["Boston, Massachusetts", "Bar Harbor, Maine", "Halifax,Nova Scotia",
                                    "Sydney, Cape Breton Island, Nova Scotia", "Charlottetown, Prince Edward Island",
                                    "Saguenay (La Baie), Quēbec", "Quēbec City, Quēbec"],
                                pricing: ["Inside: $849",
                                    "Oceanview: $1,249",
                                    "Balcony: $1,739",
                                    "Mini-Suite: $1,959",
                                    "Suite: $3,549",
                                    "The Haven: $5,249"],
                                date: "Friday 9/4/2020 to Friday 9/11/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Cape Liberty, New Jersey",
                                visiting: ["Cape Liberty, New Jersey", "Bar Harbor, Maine", 
                                    "Saint John, New Brunswick (Bay of Fundy)", "Halifax, Nova Scotia", 
                                    "Cape Liberty, New Jersey"],
                                pricing: ["Interior: $620",
                                    "Outsideview: $856",
                                    "Balcony: $1,127",
                                    "Suites: $1,577"],
                                date: "Friday 5/15/2020 to Thursday 5/21/2020"
                            }
                        ]
                    }
                ],
            }
        ]
    }
]


