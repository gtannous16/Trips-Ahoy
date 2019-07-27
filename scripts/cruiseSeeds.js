const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tripsdb");

const cruiseSeed = [
    {
        Independent: [
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
                Alaska: [
                    {
                        Norwegian: [
                            {
                                leaving: "Seattle, Washington",
                                visiting: ["Seattle, Washington", "Juneau, Alaska", "Skagway, Alaska",
                                    "Galcier Bay", "Ketchikan, Alaska", "Victoria, British Columbia",
                                    "Seattle, Washington"],
                                pricing: ["Inside: $649",
                                    "Oceanview: $799",
                                    "Balcony: $799",
                                    "Mini-Suite: $999",
                                    "Concierge: $1,999",
                                    "The Haven: $3.099"],
                                date: "Saturday 9/28/2019 to Saturday 10/5/2019"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Seward, Alaska",
                                visiting: ["Seward. Alaska", "Hubbard Glacier, Alaska", "Juneau, Alaska",
                                    "Skagway, Alaska", "Icy Straight Point, Alaska", "Ketchikan, Alaska",
                                    "Vancouver, British Columbia"],
                                pricing: ["Interior: $530",
                                    "Outsideview: $780",
                                    "Balcony: $1,462",
                                    "Suites: $2,643"],
                                date: "Friday 8/30/2019 to Friday 9/6/2019"
                            }
                        ]
                    }
                ],
                NewZealand: [
                    {
                        Norwegian: [
                            {
                                leaving: "Sydney, Australia",
                                visiting: ["Sydney, Australia", "Milford Sound, New Zealand", 
                                    "Dunedin (Port Chalmers), New Zealand", "Lyttelton, New Zealand", 
                                    "Marlborough (Picton), New Zealand", "Wellingto, New Zealand", 
                                    "Napier, New Zealand", "Tauranga, New Zealand", "Whangarei, New Zealand", 
                                    "Auckland, New Zealand", "Sydney, Australia"], 
                                pricing: ["Inside: $1,649",
                                    "Oceanview: $1,869",
                                    "Balcony: $2,479",
                                    "Mini-Suite: $2,879",
                                    "Suite: $5,999",
                                    "The Haven: $9,899"],
                                date: "Sunday 11/22/2020 to Sunday 12/6/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Sydney, Australia",
                                visiting: ["Sydney, Australia", "Milford Sound, New Zealand", "Dunedin, New Zealand",
                                    "Akaroa, New Zealand", "Wellington, New Zealand", "Picton, New Zealand", 
                                    "Sydney, Australia"],
                                pricing: ["Interior: $925",
                                    "Outsideview: $1,158",
                                    "Balcony: $1,334",
                                    "Suites: $2,219"],
                                date: "Sunday 1/31/2021 to Wednesday 2/10/2021"
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
            }
        ],
        Historical: [
            {
                Peru: [
                    {
                        Norwegian: [
                            {
                                leaving: "Santiago (San Antonio), Chile",
                                visiting: ["Santiago (San Antonio, Chile", "Coquimbo, Chile", "Arica, Chile",
                                    "Pisco, Peru", "Lima (Callao), Peru", "Trujillo (Salaverry), Peru",
                                    "Puerto Limon, Costa Rica", "Great Stirrup Cay, Bahamas", 
                                    "Orlando (Port Canaveral), Florida"], 
                                pricing: ["Inside: $799",
                                    "Oceanview: $949",
                                    "Balcony: $1,799",
                                    "Mini-Suite: $2,099",
                                    "Suite: $3,499"],
                                date: "Saturday 3/14/2020 to Sunday 3/29/2020"
                            }
                        ],
                        Princess: [
                            {
                                leaving: "Los Angeles, California, US",
                                visiting: ["Los Angeles, California, US", "Cabo San Lucas, Mexico", 
                                    "Puntarenas, Costa Rica", "Manta, Ecuador", "Lima (Calleo), Peru",
                                    "Pisco (General San Martin), Peru", "La Serena (Coquimbo), Chili",
                                    "Santiago (San Antonio), Chile"],
                                pricing: "Interior: $1,999",
                                date: "Sunday 11/15/2020 to Wednesday 12/2/2020"
                            }
                        ]
                    }
                ],
                Guatemala: [
                    {
                        Norwegian: [
                            {
                                leaving: "New York, New York",
                                visiting: ["New York, New York",  "Willemstad, Curaçao", "Oranjestad, Auba",
                                    "Santa Marta, Colombia", "Cartagena, Colombia", "Puntarenas, Costa Rica",
                                    "Corinto, Nicaragua", "Puerto Quetzal, Guatemala", 
                                    "Zihuatanejo/Ixtapa, Guerrero Mexico", "Puerto Vallarta, Mexico", 
                                    "Cabo San Lucas, Mexico", "Los Angeles, California", "Santa Barbara, California",
                                    "San Francisco, California"], 
                                pricing: ["Inside: $1,549",
                                    "Oceanview: $1,749",
                                    "Balcony: $2,799",
                                    "Mini-Suite: $3.199",
                                    "Suite: $6,099",
                                    "The Haven: $9,499"],
                                date: "Saturday 1/4/2020 to Friday 1/24/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Los Angeles, California",
                                visiting: ["Los Angeles, Clifornia", "Cabo San Lucas, Mexico", 
                                    "Puerto Vallarta, Mexico", "Puerto Quetzal, Guatemala",
                                    "Puntarenas, Costa Rica", "Panama Canal, Panama", 
                                    "Cartagena, Columbia", "Kralendijk, Bonaire", "San Juan, Puerto Rico"],
                                pricing: ["Interior: $1,007",
                                    "Outsideview: $1,042",
                                    "Balcony: $2,536",
                                    "Suites: $3,092"],
                                date: "Sunday 12/1/2019 to Monday 12/16/2019"
                            }
                        ]
                    }
                ],
                Bermuda: [
                    {
                        Norwegian: [
                            {
                                leaving: "New York, New York",
                                visiting: ["New York, New York", "Royal Naval Dockyard, Bermuda", 
                                    "Great Stirrup Cay, Bahamas", "Nassau, Bahamas", "Orlando (Port Canaveral), Florida",
                                    "Norfolk, Virgina", "New York, New York"], 
                                pricing: ["Inside: $799",
                                    "Oceanview: $949",
                                    "Balcony: $1,349",
                                    "Mini-Suite: $1,799",
                                    "Suite: $3,349"],
                                date: "Thursday 4/9/2020 to Sunday 4/19/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Cape Liberty, New Jersey",
                                visiting: ["Cape Liberty, New Jersey", "King's Wharf, Bermuda", 
                                    "Cape Liberty, New Jersey"],
                                pricing: ["Interior: $447",
                                    "Outsideview: $562",
                                    "Balcony: $720",
                                    "Suites: $1,115"],
                                date: "Saturday 10/17/2020 to Thurday 10/22/2020"
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
                ]
            }
        ],
        Social: [
            {
                Greece: [
                    {
                        Norwegian: [
                            {
                                leaving: "Venice, Italy",
                                visiting: ["Venice, Italy", "Kotor, Montenegro", "Corfu, Greece",
                                    "Santorini, Greece", "Mykonons, Greece", "Argostoli, Kefalonia, Greece",
                                    "Dubrovnik, Croatia", "Venice, Italy"], 
                                pricing: ["Inside: $1,349",
                                    "Oceanview: $1,499",
                                    "Balcony: $2,099",
                                    "Mini-Suite: $2,949",
                                    "Suite: SOLD OUT"],
                                date: "Sunday 9/8/19 to Sunday 9/15/19"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Venice, Italy",
                                visiting: ["Venice, Italy", "Venice, Italy", "Kotor, Montenegro",
                                    "Corfu, Greece", "Athens (Piraeus), Greece", "Mykonos, Greece",
                                    "Argostoli, Greece", "Venice, Italy"],
<<<<<<< HEAD
                                pricing: ["Interior: $720", "Outside: $870", "Balcony: $1,290",
=======
                                pricing: ["Interior: $720", 
                                    "Outside: $870", 
                                    "Balcony: $1,290",
>>>>>>> 9b0dc27d6059f64387e48cd855c0ef278f2536ad
                                    "Suites: $1,914"],
                                date: "Saturday 8/8/2020 to Saturday 8/15/2020"
                            }
                        ]
                    }
                ],
                Netherlands: [
                    {
                        Norwegian: [
                            {
                                leaving: "London (Southampton), England",
                                visiting: ["London (Southampton), England", "Paris (Le Havre), France",
                                    "Brussels/Bruges (Zeebrugge), Belgium", "Amsterdam, Netherlands",
                                    "Berlin (Warnemünde), Germany", "Tallinn, Estonia", "St. Petersburg, Russia",
                                    "Helsinki, Finland", "Stockholm (Nynashamn), Sweden", "Copenhagen, Denmark"], 
                                pricing: ["Inside: $1,699",
                                    "Oceanview: $2,079",
                                    "Balcony: $2,329",
                                    "Spa: $3,199",
                                    "Mini-Suite: $2,579",
                                    "The Haven: $7,499"],
                                date: "Friday 5/15/2020 to Friday 5/29/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Amsterdam, Netherlands",
                                visiting: ["Amsterdam, Netherlands", "Dover, England", 
                                    "Belfast, Northern Ireland", "Glasgow (Greenock), Scotland",
                                    "Holyhead, Wales", "Cork (Cobh), Ireland", 
                                    "Paris/Normandy (Le Havre), France", "Amsterdam, Netherlands"],
                                pricing: ["Interior: $1,554",
                                    "Outsideview: $1,844",
                                    "Balcony: $2,893",
                                    "Suites: $4,297"],
                                date: "Friday 6/12/2020 to Monday 6/22/2020"
                            }
                        ]
                    }
                ],
                Spain: [
                    {
                        Norwegian: [
                            {
                                leaving: "Miami, Florida",
                                visiting: ["Miami, Florida", "Ponta Delgado, Azores",
                                    "Lisbon, Portugal", "Seville (Cádiz), Spain", 
                                    "Granada (Malaga), Spain", "Cartagena, Spain", "Palma, Majorca, Spain",
                                    "Barcelona, Spain"], 
                                pricing: ["Inside: $829",
                                    "Balcony: $1,379",
                                    "Mini-Suite: $1,679",
                                    "Suite: $4,849"],
                                date: "Saturday 4/18/2020 to Sunday 5/3/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Southampton, England",
                                visiting: ["Southampton, England", "Lisbon, Portugal", "Vigo, Spain",
                                    "La Coruna, Spain", "Bilbao, Spain", "Southampton, England"],
                                pricing: ["Interior: $1,271",
                                    "Outsideview: $1,368",
                                    "Balcony: $1,614",
                                    "Suites: $2,144"],
                                date: "Friday 5/15/2020 to Saturday 5/23/2020"
                            }
                        ]
                    }
                ],
                California: [
                    {
                        Norwegian: [
                            {
                                leaving: "Vancouver, British Columbia",
                                visiting: ["Vancouver, British Columbia", "Victoria, British Columbia", 
                                    "Seattle, Wshington", "San Francisco, California", "Los Angeles, California"],
                                pricing: ["Inside: $549",
                                    "Oceanview: $629",
                                    "Balcony: $779",
                                    "Spa: $1,199",
                                    "Mini-Suite: $829",
                                    "Suite: $2,599"],
                                date: "Monday 10/12/2020 to Sunday 10/18/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "San Diago, California",
                                visiting: ["San Diago, California", "San Francisco, California", 
                                    "Astoria, Oregon", "Seattle, Washington", "Vancouver, British Columbia"],
                                pricing: ["Interior: $874",
                                    "Outsideview: $930",
                                    "Balcony: $1,412",
                                    "Suites: SOLD OUT"],
                                date: "Tuesday 5/19/2020 to Monday 5/25/2020"
                            }
                        ]
                    }
                ],
            }
        ],
        Relaxing: [
            {
                Greece: [
                    {
                        Norwegian: [
                            {
                                leaving: "Venice, Italy",
                                visiting: ["Venice, Italy", "Kotor, Montenegro", "Corfu, Greece",
                                    "Santorini, Greece", "Mykonons, Greece", "Argostoli, Kefalonia, Greece",
                                    "Dubrovnik, Croatia", "Venice, Italy"], 
                                pricing: ["Inside: $1,349",
                                    "Oceanview: $1,499",
                                    "Balcony: $2,099",
                                    "Mini-Suite: $2,949",
                                    "Suite: SOLD OUT"],
                                date: "Sunday 9/8/19 to Sunday 9/15/19"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Venice, Italy",
                                visiting: ["Venice, Italy", "Venice, Italy", "Kotor, Montenegro",
                                    "Corfu, Greece", "Athens (Piraeus), Greece", "Mykonos, Greece",
                                    "Argostoli, Greece", "Venice, Italy"],
<<<<<<< HEAD
                                pricing: ["Interior: $720", "Outside: $870", "Balcony: $1,290",
=======
                                pricing: ["Interior: $720", 
                                    "Outside: $870", 
                                    "Balcony: $1,290",
>>>>>>> 9b0dc27d6059f64387e48cd855c0ef278f2536ad
                                    "Suites: $1,914"],
                                date: "Saturday 8/8/2020 to Saturday 8/15/2020"
                            }
                        ]
                    }
                ],
<<<<<<< HEAD
=======
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
                Mexico: [
                    {
                        Norwegian: [
                            {
                                leaving: "Los Angeles, California",
                                visiting: ["Los Angeles, California", "Puerto Vallarta, Maxico",
                                    "Mazatlán, Mexico", "Cabo San Lucas, Mexico", "Los Angeles, California"], 
                                pricing: ["Inside: $599",
                                    "Oceanview: $649",
                                    "Balcony: $699",
                                    "Mini-Suite: $949",
                                    "The Haven: $3,299"],
                                date: "Sunday 10/27/2019 to Sunday 11/3/2019"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Miami, Florida",
                                visiting: ["Miami, Florida", "Puerto Costa Maya, Mexico", 
                                "Cozumel, Mexico", "Miami, Florida"],
                                pricing: ["Interior: $229", 
                                    "Outside: $249", 
                                    "Suites: $849"],
                                date: "Saturday 11/30/2019 to Thursday 12/5/2019"
                            }
                        ]
                    }
                ],
                Malaysia: [
                    {
                        Norwegian: [
                            {
                                leaving: "Singapore, Singapore",
                                visiting: ["Singapore, Singapore", "Phuket, Thailand", "Langkawi, Malaysia",
                                    "Penang, Malaysia", "Singapore, Singapore"], 
                                pricing: ["Inside: $529",
                                    "Oceanview: $549",
                                    "Balcony: $749",
                                    "Mini-Suite: $849",
                                    "Suite: $1,449",
                                    "The Haven: 2,749"],
                                date: "Sunday 12/15/2019 to Saturday 12/21/2019"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Singapore, Singapore",
                                visiting: ["Singapore, Singapore", "Malacca, Malaysia", 
                                    "Kuala Lumpur (Port Klang), Malaysia", "Penang, Malaysia",
                                    "Phuket, Thailand", "Sinagpore, Singapore"],
                                pricing: ["Interior: $899", 
                                    "Outside: $1,028", 
                                    "Balcony: $1,192",
                                    "Suites: $1,522"],
                                date: "Thursday 2/4/2021 to Thursday 2/11/2021"
                            }
                        ]
                    }
                ],
            }
        ],
        Foodie: [
            {
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
                Spain: [
                    {
                        Norwegian: [
                            {
                                leaving: "Miami, Florida",
                                visiting: ["Miami, Florida", "Ponta Delgado, Azores",
                                    "Lisbon, Portugal", "Seville (Cádiz), Spain", 
                                    "Granada (Malaga), Spain", "Cartagena, Spain", "Palma, Majorca, Spain",
                                    "Barcelona, Spain"], 
                                pricing: ["Inside: $829",
                                    "Balcony: $1,379",
                                    "Mini-Suite: $1,679",
                                    "Suite: $4,849"],
                                date: "Saturday 4/18/2020 to Sunday 5/3/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Southampton, England",
                                visiting: ["Southampton, England", "Lisbon, Portugal", "Vigo, Spain",
                                    "La Coruna, Spain", "Bilbao, Spain", "Southampton, England"],
                                pricing: ["Interior: $1,271",
                                    "Outsideview: $1,368",
                                    "Balcony: $1,614",
                                    "Suites: $2,144"],
                                date: "Friday 5/15/2020 to Saturday 5/23/2020"
                            }
                        ]
                    }
                ],
                Vietnam: [
                    {
                        Norwegian: [
                            {
                                leaving: "Singapore, Singapore",
                                visiting: ["Singapore, Singapore", "Bangkok (Laem Chabang), Thailand",
                                    "Sihanoukville, Cambodia", "Ho Chi Minh City (Phu My), Vietnam",
                                    "Nha Trang, Vietnam", "Hue/Da Nang (Chan May), Vietnam", 
                                    "Hanoi (Ha Long Bay), Vietnam", "Hong Kong, China"],
                                pricing: ["Inside: $1,279",
                                    "Oceanview: $1,599",
                                    "Balcony: $2,329",
                                    "Mini-Suite: $2,699",
                                    "Suite: $4,399",
                                    "The Haven: $8,199"],
                                date: "Monday 1/13/2020 to Saturday 1/25/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Hong Kong, China",
                                visiting: ["Hong Kong, China", "Hue/Da Nang (Chan May), Vietnam",
                                    "Nha Trang, Vietnam", "Hong Kong, China"],
                                pricing: ["Interior: $655",
                                    "Outsideview: $809",
                                    "Balcony: $878",
                                    "Suites: $934"],
                                date: "Friday 8/28/2020 to Wednesday 9/2/2020"
                            }
                        ]
                    }
                ],
                Japan: [
                    {
                        Norwegian: [
                            {
                                leaving: "Hong Kong, China",
                                visiting: ["Hong Kong, China", "Naha, Okinawa, Japan",
                                    "Hong Kong, China"], 
                                pricing: ["Inside: $949",
                                    "Oceanview: $1.109",
                                    "Balcony: $1,229",
                                    "Mini-Suite: $1,379",
                                    "Suite: $3,799",
                                    "The Haven: $5,849"],
                                date: "Saturday 1/25/2020 to Thursday 1/30/2020"
                            }
                        ],
                        Caribbean: [
                            {
                                leaving: "Bejing (Tianjin), China",
                                visiting: ["Bejing (Tianjin), China", "Kyoto (Maizuru), Japan",
                                    "Sakaiminato, Japan", "Fukuota, Japan", "Bejing (Tianjin), China"],
                                pricing: ["Interior: $679",
                                    "Outsideview: $759",
                                    "Balcony: $869",
                                    "Suites: $1,279"],
                                date: "Sunday 5/31/2020 to Sunday 6/7/2020"
                            }
                        ]
                    }
                ],
>>>>>>> 9b0dc27d6059f64387e48cd855c0ef278f2536ad
            }
        ]
    }
]


