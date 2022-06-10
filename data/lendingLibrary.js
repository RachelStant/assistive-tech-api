const lendingLibraryData = [
    {
        state: 'Alabama',
        name: "Alabama's AT 4 All",
        website: 'https://al.at4all.com/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '560 South Lawrence St.Montgomery, AL 36104'

    },
    {
        state: 'Alaska',
        name: "Alaska Center for Children and Adults",
        website: 'http://www.alaskacenter.org',
        hasAAC: false,
        hasAT: false,
        hasTraining: false,
        address: '1020 Barnette St, Fairbanks, AK 99701'
    },
    {
        state: 'Alaska',
        name: "Assistive Technology of Alaska (ATLA)",
        website: 'https://www.atlaak.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '1500 W 33rd Ave., STE 120 Anchorage, AK 99503'
    },
    {
        state: 'Arizona',
        name: "Arizona Technology Access Program",
        website: 'http://aztap.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: 'Northern Arizona University 300 W. Clarendon Ave, Suite 475 Phoenix, AZ 85013'
    },
    {
        state: 'Arkansas',
        name: "iCAN Tools for Life",
        website: 'https://equipment.ar-ican.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '900 W.7th Street Little Rock, Arkansas 72201'
    },
    {
        state: 'California',
        name: "Ability Tools",
        website: 'https://abilitytools.org/services/natads-public-access.php',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '1000 G Street, #100 Sacramento, CA 95814'
    },
    {
        state: 'California',
        name: "ILRCF - Nick Feldman Device Lending Library",
        website: 'https://www.ilrcsf.org/get-support/nick-feldman-device-lending-library/',
        hasAAC: true,
        hasAT: false,
        hasTraining: false,
        address: '825 Howard Street, SF, CA 94103'
    },
    {
        state: 'California',
        name: "DRC: Disabled Resource Center",
        website: 'https://drcinc.org/programs/assistive-technology/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '2750 E. Spring Street, Ste #100 Long Beach, CA 90806'
    },
    {
        state: 'California',
        name: "CA Department of Rehab",
        website: 'https://www.dor.ca.gov/Home/AssistiveTechnology',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '1 College Drive PE Bldg Blythe, CA 92225'
    },
    {
        state: 'Colorado',
        name: "SWAAC",
        website: 'http://www.swaaac.org/LoanBank.html',
        hasAAC: true,
        hasAT: false,
        hasTraining: true,
        address: '1201 5th St Suite 240, Campus Box 180 Denver, CO 80204'
    },
    {
        state: 'Connecticut',
        name: "CT TECH ACT Project",
        website: 'http://cttechact.com/#sthash.5SE2lBvc.dpbs',
        hasAAC: false,
        hasAT: true,
        hasTraining: false,
        address: '55 Farmington Avenue, 12th Floor Hartford, CT 06105'
    },
    {
        state: 'Connecticut',
        name: "UCP of Eastern Connecticut",
        website: 'https://ucpect.org/assistive-technology-at/at-lending-library/',
        hasAAC: false,
        hasAT: false,
        hasTraining: false,
        address: '42 Norwich Road, Quaker Hill, CT 06375'
    },
    {
        state: 'Connecticut',
        name: "Oak Hill AT Lending Library",
        website: 'https://assistivetechnology.oakhillct.org/lending-library/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '120 Holcomb Street Hartford, CT 06112'
    },
    {
        state: 'Delaware',
        name: "Delaware Assistive Technology Initiative (DATI)",
        website: 'https://www.cds.udel.edu/at/dati/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '461 Wyoming Road Newark, Del. 19716'
    },
    {
        state: 'District of Columbia',
        name: "Assistive Technology Program for the District of Columbia",
        website: 'https://www.atpdc.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '220 I St. NE, Suite 130 Washington DC  20002'
    },
    {
        state: 'Florida',
        name: "Florida Alliance for Assistive Services and Technology",
        website: 'https://faast.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '820 E Park Ave, D-200 Tallahassee, FL 32301'
    },
    {
        state: 'Florida',
        name: "Assistive Technology & Universal Design for Learning Loan Library",
        website: 'https://www.at-udl.net/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '1909 Tyler Street Suite 505, Hollywood, FL 33020'
    },
    {
        state: 'Georgia',
        name: "Pass ot on Center",
        website: 'https://pioc.gatech.edu/pioc/',
        hasAAC: false,
        hasAT: true,
        hasTraining: false,
        address: '512 Means Street, Suite 250 Atlanta, GA 30318'
    },
    {
        state: 'Georgia',
        name: "Georgia Tech Tools for Life Assistive Technology Program",
        website: 'https://gatfl.gatech.edu/index.php',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '512 Means Street, Suite 250 Atlanta, GA 30318'
    },
    {
        state: 'Hawaii',
        name: "Assistive Technology Resource Centers of Hawaii",
        website: 'https://www.atrc.org/device-lending',
        hasAAC: false,
        hasAT: true,
        hasTraining: false,
        address: '200 N Vineyard Blvd., Suite 430 Honolulu HI 96817'
    },
    {
        state: 'Idaho',
        name: "Idaho Assistive Technology Project",
        website: 'https://idahoat.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '1187 Alturas Drive Moscow, Idaho 83843'
    },
    {
        state: 'Illinois',
        name: "Illinois Assistive Technology Program",
        website: 'https://iltech.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '1020 South Spring Street Springfield, IL 62704'
    },
    {
        state: 'Iowa',
        name: "Easterseals Iowa",
        website: 'https://www.easterseals.com/ia/our-programs/assistive-technology-center/',
        hasAAC: false,
        hasAT: false,
        hasTraining: true,
        address: '401 N.E. 66th Avenue, Des Moines, IA 50313'
    },
    {
        state: 'Iowa',
        name: "Easterseals Iowa",
        website: 'https://www.easterseals.com/ia/our-programs/assistive-technology-center/',
        hasAAC: false,
        hasAT: true,
        hasTraining: true,
        address: '401 N.E. 66th Avenue, Des Moines, IA 50313'
    },
    {
        state: 'Iowa',
        name: "Iowa Compas Center for Disabilities & Development",
        website: 'https://search.iowacompass.org/',
        hasAAC: false,
        hasAT: false,
        hasTraining: false,
        address: '100 Hawkins Drive #221 Iowa City, IA 52242'
    },
    {
        state: 'Kansas',
        name: "Assistive Technology for Kansas",
        website: 'http://atk-kee.org/loan/search_inventory.php',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: ''
    },
    {
        state: 'Kentucky',
        name: "KATS Network",
        website: 'https://katsnet.at4all.com/',
        hasAAC: false,
        hasAT: false,
        hasTraining: false,
        address: '8412 Westport Road Louisville, KY 40242'
    },
    {
        state: 'Kentucky',
        name: "Redwood Assistive Technology Resource Center",
        website: 'https://www.redwoodnky.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '71 Orphanage Rd Fort Mitchell KY 41017'
    },
    {
        state: 'Louisiana',
        name: "LATAN (Louisiana Assistive Technology Access Network)",
        website: 'https://www.latan.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '10988 N. Harrells Ferry Rd., Ste. 5Baton Rouge, LA 70816'
    },
    {
        state: 'Maine',
        name: "Maine CITE",
        website: 'https://mainecite.org/devices-for-loan/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '46 University Drive Augusta, ME 04330'
    },
    {
        state: 'Maryland',
        name: "Maryland Technology Assistance Program",
        website: 'https://mdod.maryland.gov/mdtap/Pages/MDTAP-Home.aspx',
        hasAAC: true,
        hasAT: true,
        hasTraining: true,
        address: '2301 Argonne Drive, Rm T-17 Baltimore, Maryland 21218'
    },
    {
        state: 'Maryland',
        name: "Lollipop Kids Foundation",
        website: 'https://www.lollipopkidsfoundation.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '7901 Beechcraft Avenue, Unit V Gaithersburg, MD 20879'
    },
    {
        state: 'Maryland',
        name: "Equipment Connections for Children",
        website: 'https://www.equipforchildren.org/',
        hasAAC: true,
        hasAT: true,
        hasTraining: false,
        address: '7125 Riverwood Drive, Suite D1 Columbia MD 21046'
    },

]


export default lendingLibraryData;
