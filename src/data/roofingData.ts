export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  badge: string;
}

export interface CountyItem {
  name: string;
  region: string;
  cities: string;
  description: string;
  zipPrefixes: string[];
  permitNotes: string;
}

export interface WarningSign {
  id: string;
  title: string;
  description: string;
  risk: string;
  icon: string;
}

export interface CostRow {
  roofType: string;
  pricePerSqFt: string;
  lifespan: string;
  notes: string;
  fireRating: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_DETAILS = {
  name: "Bay Area Roof Master",
  tagline: "Bay Area Roofing Services. Repair, Replacement & Leak Fixes.",
  address: "4411 Geary Blvd, Suite 301, San Francisco, CA 94118",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=4411+Geary+Blvd+Suite+301+San+Francisco+CA+94118",
  cslbUrl: "https://www.cslb.ca.gov/",
  licenseNumber: "1014432",
  licenseType: "C-39 Roofing Contractor (CA)",
  serviceCounties: "All Nine Bay Area Counties",
  primaryCtaText: "Get Free Roof Bids",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "replacement",
    title: "Roof Replacement",
    subtitle: "Complete tear-off & modern roofing system",
    description: "A complete roof replacement, from tear-off to the new roofing system. We inspect the decking, account for damaged boards, and outline underlayment, flashing, materials, and permit costs in your written estimate.",
    image: "/src/assets/images/roof_installation_work_1792187145771.jpg",
    features: [
      "Full substrate & plywood decking inspection",
      "Itemized tear-off and haul-away cleanup",
      "High-grade synthetic underlayment & ice/water shields",
      "City permit coordination included",
      "Full written manufacturer & workmanship warranty"
    ],
    badge: "Full Replacement"
  },
  {
    id: "repair",
    title: "Roof Repair",
    subtitle: "Targeted fixes for shingles & flashing",
    description: "Address damaged shingles, flashing problems, and other localized roofing issues. We'll inspect the affected area and explain whether a repair is appropriate or if broader attention is needed.",
    image: "/src/assets/images/hero_roof_inspection_1792187127203.jpg",
    features: [
      "Cracked, wind-lifted or missing shingle replacement",
      "Valley, chimney & vent pipe re-flashing",
      "Skylight perimeter re-sealing & collar replacement",
      "Structural wood evaluation around leak spots",
      "Photo documentation of completed repair"
    ],
    badge: "Localized Repair"
  },
  {
    id: "leak-repair",
    title: "Roof Leak Repair",
    subtitle: "Trace & eliminate moisture penetration",
    description: "Water stains and active leaks can have several causes. We investigate likely entry points—including penetrations, valleys, and concealed flashing—and explain the recommended repair before work begins.",
    image: "/src/assets/images/hero_roof_inspection_1792187127203.jpg",
    features: [
      "Water path & attic intrusion tracing",
      "Valley seam and side-wall junction rebuilding",
      "Emergency moisture tarping & temporary stabilization",
      "Internal water damage mitigation check",
      "Written cause-and-solution breakdown"
    ],
    badge: "Active Leaks"
  },
  {
    id: "inspection",
    title: "Roof Inspection",
    subtitle: "Thorough multi-point condition assessment",
    description: "Get a clearer picture of your roof's condition, including visible wear, flashing, vents, decking concerns, and potential maintenance needs before storm season or real estate milestones.",
    image: "/src/assets/images/hero_roof_inspection_1792187127203.jpg",
    features: [
      "Surface shingle wear & granule loss review",
      "Penetration seals, boots, vents & flashing audit",
      "Attic ventilation & moisture check",
      "Gutter drainage and fascia edge check",
      "Comprehensive written inspection report"
    ],
    badge: "Inspection & Audit"
  },
  {
    id: "fire-resistant",
    title: "Fire-Resistant Roofing",
    subtitle: "Class A systems for WUI hazard zones",
    description: "Explore suitable roofing materials and details for homes in mapped fire zones, subject to applicable local requirements and California Wildland-Urban Interface standards.",
    image: "/src/assets/images/modern_california_dusk_1792187146460.jpg",
    features: [
      "Class A fire-rated asphalt shingles & standing seam metal",
      "Fire-resistant underlayment combinations",
      "Spark arrestor and ember-resistant roof vent details",
      "Coordination with hillside WUI local requirements",
      "Clear specification documentation for insurers & HOAs"
    ],
    badge: "WUI & Fire Zones"
  },
  {
    id: "gutters",
    title: "Gutters and Drainage",
    subtitle: "Protect eaves, siding & foundation",
    description: "Address drainage concerns and roofing details that can contribute to water intrusion, gutter overflow, fascia rot, or hillside foundation moisture problems.",
    image: "/src/assets/images/sf_victorian_architecture_1792187146875.jpg",
    features: [
      "Seamless aluminum & copper gutter installation",
      "Drip edge and gutter apron flashing alignment",
      "Fascia board repair & preservative priming",
      "Downspout sizing and discharge optimization",
      "Leaf guard and debris deflection options"
    ],
    badge: "Water Management"
  }
];

export const LOCAL_ARCHITECTURES = [
  {
    title: "Eichler & Midcentury Flat Roofs",
    tagline: "Low-slope single-ply and modified bitumen systems",
    description: "Flat and low-slope roofs need systems engineered for their slope rather than conventional shingles. Depending on the roof deck and building conditions, options may include modified bitumen, suitable single-ply systems (such as TPO), or compatible multi-ply low-slope materials. We evaluate insulation layers and existing roof assemblies to determine whether a complete tear-off is necessary.",
    badge: "Silicon Valley & Marin Midcenturies"
  },
  {
    title: "San Francisco Victorians & Row Houses",
    tagline: "Steep pitches, zero lot lines & delicate access",
    description: "Steep streets, narrow parcels, shared party walls, and limited staging space make San Francisco projects uniquely demanding. Older assemblies often feature skip-sheathing or historic decking that requires careful inspection. We coordinate pedestrian permits, crane or conveyor staging, and neighbor protection to ensure flawless execution.",
    badge: "San Francisco City Neighborhoods"
  },
  {
    title: "Hillside Homes in Fire Zones",
    tagline: "Class A assemblies & ember-resistant vent engineering",
    description: "The Oakland & Berkeley Hills, Marin coastal ridges, Napa, and Sonoma feature residences where wildfire exposure affects roofing materials and installation details. We verify applicable Wildland-Urban Interface (WUI) standards, check Class A assembly compliance, and install ember-resistant ventilation before finalizing your estimate.",
    badge: "East Bay Hills & North Bay Ridges"
  }
];

export const WEATHER_CONDITIONS = [
  {
    title: "Winter Rain & Coastal Fog",
    description: "Pacific storm fronts and dense summer marine layers keep coastal roofs damp. Leaks often reveal themselves during the first November rains. If you suspect an issue, scheduling an inspection before winter storms prevent safe roof walking is essential."
  },
  {
    title: "Summer Heat Inland",
    description: "Interior valleys across Concord, Pleasanton, Livermore, and San Jose experience prolonged high summer temperatures that cook attic spaces. Suitable reflective cool-roof materials help moderate attic heat gain and comply with California Title 24."
  }
];

export const WHY_CHOOSE_US_REASONS = [
  {
    number: "01",
    title: "Licensed & Experienced",
    description: "California contractor license #1014432. We specialize exclusively in residential and commercial roofing across the nine Bay Area counties."
  },
  {
    number: "02",
    title: "Permit & Code Awareness",
    description: "We account for applicable city building permits, Title 24 cool-roof requirements, and local fire-zone rules before hammering the first nail."
  },
  {
    number: "03",
    title: "Written Warranty",
    description: "Every qualifying project includes a written warranty describing both manufacturer material coverage and contractor workmanship guarantees."
  },
  {
    number: "04",
    title: "Itemized Written Estimates",
    description: "We inspect your roof in person and explain the cost of tear-off, underlayment, shingles, flashing, decking, and permits with total transparency."
  },
  {
    number: "05",
    title: "One Point of Contact",
    description: "You have a single direct contractor for all project communications from initial inspection and scheduling through the final walkthrough."
  },
  {
    number: "06",
    title: "Meticulous Cleanup Included",
    description: "All roofing debris, old nails, and materials are safely removed. Magnetic sweeps protect driveways and landscaping before final sign-off."
  }
];

export const THREE_PHASE_PROCESS = [
  {
    phase: "Phase 1",
    title: "Before the Work",
    steps: [
      { name: "In-Person Inspection", detail: "We physically climb and examine your roof, decking, flashing, penetrations, and ventilation." },
      { name: "Itemized Written Estimate", detail: "You receive a clear breakdown of materials, labor, permits, and repair options." },
      { name: "Code & Fire Verification", detail: "We confirm specific municipal energy codes, Title 24 requirements, and fire hazard zone standards." },
      { name: "Permit Coordination", detail: "We pull the official building permit with your local city or county building department." }
    ]
  },
  {
    phase: "Phase 2",
    title: "During the Work",
    steps: [
      { name: "One Point of Contact", detail: "Direct contractor communication every day—no dealing with detached subcontractors or call centers." },
      { name: "Property Protection", detail: "Tarps, plywood shields, and gutter protection safeguard your siding, landscaping, and patios." },
      { name: "Tear-off & Decking Inspection", detail: "Old layers are stripped to inspect the wood substrate; damaged boards are documented before replacement." },
      { name: "Daily Site Cleanup", detail: "Debris bins, magnetic nail sweeps, and tarped work areas ensure your property remains clean every evening." }
    ]
  },
  {
    phase: "Phase 3",
    title: "After the Work",
    steps: [
      { name: "Joint Final Walkthrough", detail: "We review the completed roof, flashing details, and ground perimeter with you in person." },
      { name: "Final Site Debris Sweep", detail: "Thorough magnetic ground sweep ensures no stray roofing nails remain in driveways or garden beds." },
      { name: "Written Warranty Package", detail: "Receive formal written documentation for manufacturer material and contractor labor coverage." },
      { name: "Lien Releases & Final Payment", detail: "Standard statutory lien-release documentation is provided upon project completion." }
    ]
  }
];

export const PROJECT_JOURNEY_STEPS = [
  {
    step: "1",
    title: "Tell Us About Your Roof",
    description: "Enter your ZIP code, describe your concern (leak, aging shingles, insurance notice), and leave your contact info."
  },
  {
    step: "2",
    title: "We Inspect In Person",
    description: "Our licensed roofing contractor visits your home, inspects roof pitch, decking integrity, vents, and problem areas."
  },
  {
    step: "3",
    title: "Review Your Written Bid",
    description: "Receive an itemized written estimate specifying materials, permit fees, wood repair rates, and transparent timeline."
  },
  {
    step: "4",
    title: "We Complete the Work",
    description: "Our dedicated crew executes the installation, keeps the site clean, completes a final walkthrough, and delivers your warranty."
  }
];

export const WARNING_SIGNS: WarningSign[] = [
  {
    id: "ceiling-stains",
    title: "Stains on the Ceiling",
    description: "Brown rings, peeling paint, or damp drywall patches indicate active water intrusion. Water frequently travels along rafters, meaning the leak entry point may be several feet from the visible ceiling stain.",
    risk: "Concealed insulation mold & rafter rot",
    icon: "droplet"
  },
  {
    id: "missing-shingles",
    title: "Missing or Curling Shingles",
    description: "Shingles with curled edges, cupping, or sections torn off by coastal winds expose the underlying wood decking directly to rain and moisture penetration.",
    risk: "Direct wood deck exposure",
    icon: "alert-triangle"
  },
  {
    id: "granules-gutters",
    title: "Granules in the Gutters",
    description: "Dark sand-like sediment accumulating in gutters indicates the asphalt protective coating is wearing away, leaving the fiberglass mat vulnerable to UV breakdown.",
    risk: "Accelerated asphalt aging",
    icon: "layers"
  },
  {
    id: "daylight-attic",
    title: "Daylight in the Attic",
    description: "Visible light filtering through roof boards when standing in your dark attic indicates gaps, rotted wood, or compromised flashing that rain will penetrate.",
    risk: "Immediate water penetration",
    icon: "sun"
  },
  {
    id: "moss-damp",
    title: "Moss and Damp Patches",
    description: "Persistent coastal fog encourages thick moss growth, which holds moisture against shingles like a sponge and lifts shingle edges over time.",
    risk: "Moisture retention & shingle lifting",
    icon: "cloud-rain"
  },
  {
    id: "age-20-plus",
    title: "A Roof Past 20 Years",
    description: "Many asphalt shingle roofs reach the end of their design life between 20 and 25 years. Granule loss, brittleness, and outdated flashings make timely proactive evaluation wise.",
    risk: "Sudden failure during winter storms",
    icon: "clock"
  }
];

export const COST_COMPARISON_TABLE: CostRow[] = [
  {
    roofType: "Architectural Asphalt Shingle",
    pricePerSqFt: "$7 – $12",
    lifespan: "25 – 30 Years",
    notes: "Most popular Bay Area residential choice; Class A fire-rated options readily available.",
    fireRating: "Class A Available"
  },
  {
    roofType: "Standing Seam Metal",
    pricePerSqFt: "$11 – $20",
    lifespan: "50+ Years",
    notes: "Exceptional wind and fire resistance; highly durable modern aesthetic for hillside and contemporary homes.",
    fireRating: "Class A Non-Combustible"
  },
  {
    roofType: "Concrete / Clay Tile",
    pricePerSqFt: "$13 – $20",
    lifespan: "40 – 50+ Years",
    notes: "Heavy architectural material; requires structural roof truss evaluation and specialized underlayment.",
    fireRating: "Class A"
  },
  {
    roofType: "Flat Roof Systems (TPO / Mod-Bit)",
    pricePerSqFt: "$6 – $11",
    lifespan: "20 – 30 Years",
    notes: "Heat-welded single-ply or multi-ply for low-slope midcentury, Eichler, and row house roofs.",
    fireRating: "Class A Rated Assemblies"
  }
];

export const COST_FACTORS = [
  {
    title: "Decking Condition",
    description: "Concealed dry rot, termite damage, or delaminated plywood can only be confirmed once old shingles are removed. Your written bid specifies a clear per-sheet price for replacement plywood."
  },
  {
    title: "Permit & Jurisdiction Fees",
    description: "Permit fees are assessed individually by each city and county building department (e.g. SF DBI, Oakland, San Jose). We list required permit fees directly in your written estimate."
  },
  {
    title: "Fire-Zone Requirements",
    description: "Properties in mapped California State or Local High Fire Hazard Severity Zones require Class A rated assemblies, non-combustible valley metal, and ember-resistant roof vents."
  },
  {
    title: "Solar Panel Coordination",
    description: "If solar arrays are present, panels must be detached and remounted. We coordinate timelines smoothly with your certified solar contractor."
  }
];

export const ESTIMATE_CHECKLIST = [
  {
    number: "01",
    title: "Written and Itemized",
    description: "Every major line item—materials, labor, disposal, and permits—is clearly listed rather than hidden behind a single lump-sum figure."
  },
  {
    number: "02",
    title: "Exact Materials Named",
    description: "The estimate identifies specific manufacturer product lines, shingle styles, weights, and color options."
  },
  {
    number: "03",
    title: "Decking Repair Rates Priced",
    description: "Clear per-sheet or per-linear-foot pricing is specified in advance for replacing any rotted or damaged roof boards found during tear-off."
  },
  {
    number: "04",
    title: "Flashing and Vents Listed",
    description: "All valley metal, chimney flashing, plumbing pipe boots, ridge vents, and attic exhaust details are explicitly itemized."
  },
  {
    number: "05",
    title: "Permit and City Fees Shown",
    description: "Applicable municipal reroof permit costs are identified so there are no unexpected bureaucratic charges later."
  },
  {
    number: "06",
    title: "Full Cleanup & Disposal Included",
    description: "The contract clearly states that old roofing materials, nails, and construction trash are completely hauled away."
  },
  {
    number: "07",
    title: "Warranty Documented in Writing",
    description: "Manufacturer material warranties and contractor workmanship guarantees are stated in plain, unambiguous terms."
  },
  {
    number: "08",
    title: "Compliant Deposit & Payment Schedule",
    description: "Payment milestones align with California home improvement statutory guidelines (e.g., maximum deposit limits and progress payments linked to completed work)."
  }
];

export const COUNTY_DATA: CountyItem[] = [
  {
    name: "San Francisco County",
    region: "San Francisco",
    cities: "San Francisco, Sunset, Richmond, Marina, Mission, Pacific Heights, Noe Valley",
    description: "Victorian homes, historical row houses, steep hill grades, dense zero-lot lines, and coastal fog belts require meticulous staging and historic architectural consideration.",
    zipPrefixes: ["941"],
    permitNotes: "San Francisco Department of Building Inspection (DBI) reroof permit coordination."
  },
  {
    name: "San Mateo County",
    region: "Peninsula",
    cities: "San Mateo, Daly City, Burlingame, Redwood City, San Carlos, Menlo Park, Foster City, Pacifica",
    description: "Covers coastal fog-belt communities along the ocean and sunny Peninsula neighborhoods with ranch, Spanish tile, and flat-roof midcentury properties.",
    zipPrefixes: ["940", "944"],
    permitNotes: "City-by-city reroof permits & Title 24 cool roof compliance."
  },
  {
    name: "Santa Clara County",
    region: "South Bay",
    cities: "San Jose, Sunnyvale, Santa Clara, Mountain View, Palo Alto, Cupertino, Los Gatos, Campbell",
    description: "Diverse home styles including iconic Eichler flat roofs, tile roof Mediterranean estates, and warm inland valley climates benefiting from Title 24 reflective roofs.",
    zipPrefixes: ["950", "951"],
    permitNotes: "City of San Jose, Sunnyvale, and Santa Clara building division permits."
  },
  {
    name: "Alameda County",
    region: "East Bay",
    cities: "Oakland, Berkeley, Fremont, Alameda, Hayward, San Leandro, Pleasanton, Livermore",
    description: "Historic Craftsman homes, steep Oakland and Berkeley hillside properties subject to fire-zone regulations, and warm inland suburban residences.",
    zipPrefixes: ["945", "946", "947"],
    permitNotes: "Alameda County & Oakland Planning/Building department permit coordination."
  },
  {
    name: "Contra Costa County",
    region: "East Bay",
    cities: "Walnut Creek, Concord, Richmond, Lafayette, Orinda, Moraga, San Ramon, Danville, Antioch",
    description: "From foothill communities near Mount Diablo with high summer heat to Lamorinda hillside zones with heightened wildfire exposure considerations.",
    zipPrefixes: ["945", "948"],
    permitNotes: "Contra Costa County building inspection division permits."
  },
  {
    name: "Marin County",
    region: "North Bay",
    cities: "San Rafael, Novato, Mill Valley, Sausalito, Corte Madera, San Anselmo, Tiburon, Fairfax",
    description: "Coastal weather, redwood moisture shade, hillside residences, and mapped wildfire hazard severity zones that mandate Class A non-combustible roofing systems.",
    zipPrefixes: ["949"],
    permitNotes: "Marin County Community Development Agency & local fire district coordination."
  },
  {
    name: "Sonoma County",
    region: "North Bay / Wine Country",
    cities: "Santa Rosa, Petaluma, Rohnert Park, Sonoma, Healdsburg, Windsor, Sebastopol",
    description: "Suburban, rural, and hillside residential properties where local fire safety ordinances and wind-driven weather factors heavily into material selection.",
    zipPrefixes: ["954"],
    permitNotes: "Permit Sonoma & municipal building division coordination."
  },
  {
    name: "Napa County",
    region: "North Bay / Wine Country",
    cities: "Napa, American Canyon, St. Helena, Calistoga, Yountville",
    description: "Vineyard valley homes and hillside properties requiring compliance with local wildfire mitigation standards, metal roofs, and clay tile assemblies.",
    zipPrefixes: ["945"],
    permitNotes: "Napa County Planning, Building & Environmental Services coordination."
  },
  {
    name: "Solano County",
    region: "North / East Bay",
    cities: "Vallejo, Fairfield, Vacaville, Benicia, Suisun City, Dixon",
    description: "Residential communities facing wind corridor exposures and warm interior valley sun. Estimates reflect actual site slope, wind rating, and local codes.",
    zipPrefixes: ["945", "956"],
    permitNotes: "City of Vallejo, Fairfield, and Vacaville building department permit coordination."
  }
];

export const SAFETY_STANDARDS = [
  {
    id: "fire-code",
    title: "Fire Code & Class A Roofing",
    subtitle: "Wildland-Urban Interface (WUI) Compliance",
    description: "Properties situated in designated High or Very High Fire Hazard Severity Zones are subject to enhanced roofing material standards under California building codes. Class A fire assemblies are designed to withstand severe fire exposure and prevent exterior flame spread. We install non-combustible materials, fire-resistant underlayments, and ember-resistant ridge and soffit vents, and recommend verifying specific local requirements with your municipal fire marshal.",
    legalNote: "California building standards and local amendments vary by city and fire protection district."
  },
  {
    id: "state-fire-hoa",
    title: "State Fire Regulations & HOA Architectural Rules",
    subtitle: "Balancing Community Guidelines & Fire Safety",
    description: "Homeowners in planned communities or common-interest developments must often navigate Homeowners Association (HOA) architectural review. Under California Civil Code provisions regarding fire-retardant roof coverings, associations cannot restrict roofing materials that are required by state or local fire safety laws. We provide detailed material spec sheets to expedite architectural committee approvals.",
    legalNote: "Always consult your association's CC&Rs and local building authority for current requirements."
  },
  {
    id: "cool-roof",
    title: "California Title 24 Cool-Roof Rules",
    subtitle: "Energy Efficiency & Reflective Standards",
    description: "Under California Energy Code (Title 24, Part 6), certain roof replacement projects in designated climate zones must meet minimum Solar Reflectance and Thermal Emittance thresholds. These cool-roof standards help reduce attic heat transfer and regional grid strain. Applicability depends on your specific climate zone, roof slope (low-slope vs. steep-slope), and project scope.",
    legalNote: "Cool roof exemptions exist for specific insulation levels and climate zones; we verify rules with your city."
  },
  {
    id: "permits",
    title: "Municipal Reroof Permits",
    subtitle: "City Inspections & Code Enforcement",
    description: "Nearly all Bay Area municipalities require an official building permit prior to reroofing to verify deck condition, underlayment, flashing, and ventilation. Working with an unlicensed handyman who skips permits risks uninspected defects, future real estate disclosure problems, and potential insurance claim denials. We handle permit applications and schedule required city inspections.",
    legalNote: "Permit fees are established by municipal fee schedules and itemized in our written estimates."
  }
];

export const INSURANCE_TOPICS = [
  {
    id: "roof-age",
    title: "Roof Age & Underwriting Guidelines",
    description: "Many homeowners insurance carriers in California have tightened underwriting guidelines regarding roof age. In some wildfire-adjacent areas, policies may require roofs to be under 15–20 years old for renewal, or mandate an inspection when nearing the 20-year mark. Contact your insurance agent to learn your carrier's specific guidelines."
  },
  {
    id: "rcv-vs-acv",
    title: "Replacement Cost Value (RCV) vs. Actual Cash Value (ACV)",
    description: "Review your policy declarations page to determine whether roof damage is covered under Replacement Cost Value (the full cost to replace today without depreciation) or Actual Cash Value (which deducts significant depreciation based on the age of the roof). Knowing your coverage type prevents unexpected out-of-pocket gaps."
  },
  {
    id: "condition-risk",
    title: "Material Condition & High-Risk Factors",
    description: "Unmaintained wood shake shingles, visible granular loss, unsealed chimney saddles, and heavy moss accumulation are frequent triggers for insurance non-renewal letters. Proactive repairs and written contractor inspection reports can help satisfy carrier underwriting requests."
  },
  {
    id: "fair-plan",
    title: "California FAIR Plan Considerations",
    description: "Homeowners unable to secure traditional admitted carrier coverage who turn to the California FAIR Plan must meet specific property maintenance guidelines. While the FAIR Plan provides basic fire coverage, maintaining an intact, documented roof is critical to eligibility and smooth claims processing."
  },
  {
    id: "aerial-inspections",
    title: "Remote Aerial & Drone Underwriting Audits",
    description: "Insurers increasingly deploy high-resolution satellite, airplane, and drone imagery to evaluate roof conditions remotely. If you receive an insurance inquiry or notice based on an aerial scan, an in-person licensed contractor inspection with detailed photographic ground truth can provide necessary documentation for appeal."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How much does a roof replacement cost in the Bay Area?",
    answer: "Supplied 2026 guide figures put a typical residential shingle roof replacement at approximately $15,000 to $35,000 for an average Bay Area home. Your actual price depends on roof square footage, pitch and slope, choice of materials (asphalt shingle, standing seam metal, tile, or TPO), plywood decking condition, city permit fees, and any applicable fire-zone requirements. Your free written estimate will provide an exact, itemized figure."
  },
  {
    question: "Do I need a permit to replace my roof in the Bay Area?",
    answer: "Yes, virtually all nine Bay Area counties and incorporated cities require a building permit for complete reroofing projects. Permits ensure the work complies with California building codes, energy standards (Title 24), and fire safety codes. As a licensed California contractor, Bay Area Roof Master coordinates the permit application and schedules city inspections directly."
  },
  {
    question: "Do I need a Class A fire-rated roof?",
    answer: "Properties located within mapped State or Local High Fire Hazard Severity Zones (such as hillside areas in Marin, Oakland/Berkeley hills, Napa, Sonoma, and San Mateo) typically mandate a Class A fire-rated assembly. Even outside mandatory zones, Class A fire-rated asphalt shingles or metal roofing provide superior peace of mind and are preferred by California insurance carriers."
  },
  {
    question: "Does California require a cool roof?",
    answer: "California Energy Code (Title 24, Part 6) sets solar reflectance and thermal emittance standards for certain reroofing projects depending on your local climate zone, roof slope, and whether the home has existing ceiling insulation. We evaluate your specific property location and select qualifying materials to ensure complete compliance."
  },
  {
    question: "Could my insurer restrict coverage because of my roof's age?",
    answer: "Some insurance carriers operating in California have established stricter underwriting rules regarding roofs older than 15 to 20 years, particularly in designated fire zones. Insurers may use aerial photography to evaluate condition or require proof of inspection. We encourage reviewing your policy declarations and consulting your insurance representative to verify current rules."
  },
  {
    question: "Should I repair my roof or replace it?",
    answer: "A localized repair is usually appropriate when damage is confined to a specific section (such as a few blown-off shingles, a cracked vent pipe boot, or worn chimney flashing) and the remaining roof covering is in sound condition. If the roof is over 20 years old, experiencing widespread granule loss, or leaking in multiple unrelated areas, a replacement is often more cost-effective long-term."
  },
  {
    question: "How much deposit do you ask for?",
    answer: "Under California law (Business & Professions Code § 7159), the maximum initial deposit a home improvement contractor can legally request is 10% of the contract price or $1,000, whichever is less. All subsequent progress payments are tied to milestones of completed work and delivered materials, never collected prematurely."
  },
  {
    question: "Do you serve my city and county?",
    answer: "We serve homeowners across all nine Bay Area counties: San Francisco, San Mateo, Santa Clara, Alameda, Contra Costa, Marin, Sonoma, Napa, and Solano counties. Enter your ZIP code into our service area checker or request form to confirm rapid scheduling for your address."
  }
];
