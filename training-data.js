// Training leaderboard data layer.
// Live source: SharePoint › Power BI - PG › Training — one workbook per brand, Sheet1 is the raw LMS export.
// SNAPSHOT is the last known-good read of that same data, used before sign-in or if Graph is unreachable.

export const SITE = { hostname: "meridiangroupza.sharepoint.com", path: "/sites/PowerBI9-PowerBI-PG" };
export const SHEET = "Sheet1";
// One entry per client. Adding a client is one line here — discovery, the sidebar,
// the overview cards and the rollups all follow automatically.
export const CLIENTS = [
  { key: "pg", name: "P&G", root: "Power BI - PG/Training" }
];
export const ROOT = CLIENTS[0].root;

// Turn "Oral B Training Leaderboard.xlsx" into "Oral B".
export function brandNameFromFile(fileName) {
  return fileName
    .replace(/\.xlsx?$/i, "")
    .replace(/\s*[-–]?\s*training\s*(leaderboard|program(me)?|tracker)?\s*$/i, "")
    .replace(/\s{2,}/g, " ")
    .trim() || fileName.replace(/\.xlsx?$/i, "");
}
export function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const BRANDS = [
 {
  "key": "vicks",
  "name": "Vicks",
  "eyebrow": "VICKS",
  "file": "Power BI - PG/Training/Vicks/Vicks Training Leaderboard.xlsx",
  "client": "P&G",
  "clientKey": "pg"
 },
 {
  "key": "oral-b",
  "name": "Oral B",
  "eyebrow": "ORAL CARE",
  "file": "Power BI - PG/Training/Oral care/Oral B Training Leaderboard.xlsx",
  "client": "P&G",
  "clientKey": "pg"
 },
 {
  "key": "slow-mag",
  "name": "Slow Mag",
  "eyebrow": "SLOW MAG",
  "file": "Power BI - PG/Training/Slow Mag/Slow Mag Training Leaderboard.xlsx",
  "client": "P&G",
  "clientKey": "pg"
 },
 {
  "key": "pampers",
  "name": "Pampers",
  "eyebrow": "PAMPERS",
  "file": "Power BI - PG/Training/Pampers/Pampers Training Leaderboard.xlsx",
  "client": "P&G",
  "clientKey": "pg"
 }
];

export const SNAPSHOT = {"vicks":{"course":"Vicks Acta Plus Xtra Soothing","code":"Vicks0826","start":"2026-08-08","end":"2026-09-26","reps":[{"name":"Lebohang Molefi","code":"17757","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Dineshan Moodley","code":"12302","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lucinda Mdlatu","code":"14006","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Cynthia Dinabantu","code":"1354","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Kabelo Phiri","code":"CMR0493","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Mashudu Mudau","code":"CMR0582","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Mawethu Ntuli","code":"CMR0612","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Roy Ntuli","code":"CMR0522","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Mpho Ramahleka","code":"CMR0634","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lusito Nyambi","code":"CMR0542","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Thembi Mahlangu","code":"CMR0623","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Thato Molefe","code":"CMR0558","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Athenkosi Mbovu","code":"CMR0610","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Gift Malavi","code":"CMR0540","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Gerrit Viljoen","code":"CMR0601","total":7,"done":0,"score":0.0,"status":"Not Started"},{"name":"Ennie Majaja","code":"CMR0647","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Sibulele Magibisela","code":"CMR0548","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Gail Shankland","code":"CMR0519","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Marianthe Christolis","code":"CMR0517","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Zean Steenkamp","code":"CMR0682","total":7,"done":0,"score":0.0,"status":"Not Started"},{"name":"Torquil Macniel","code":"14628","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Kaveshan Moodley","code":"16015","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lerato Titisi","code":"10078","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Jason Abrahams","code":"8826","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Brian Gontsana","code":"14270","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Michael Eksteen","code":"15078","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Ashraf Cronje","code":"19834","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Michael Choffinal","code":"18461","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Sabelo Zulu","code":"16910","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Caroline Malan","code":"9534","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lebogang Isaac Zuma","code":"15858","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Marque September","code":"9468","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Nereen Manohar","code":"10447","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Thabani Langazane","code":"14603","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Zeka Mpolokeng","code":"10586","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Eric Nyoni","code":"15857","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Linda Ronnie Nkosi","code":"16561","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Ernst Boeta Botha","code":"17594","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Leandri Glossop","code":"10419","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Norman Selwane","code":"19748","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Tshepo Mothoagae","code":"18220","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lindiwe Ngubeni","code":"18935","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lenox Mzulongile Mgolwa","code":"19258","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Dalin Dennis Wyngaard","code":"9484","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Fagriyah Van Der Schyff","code":"9116","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Louis Mbele","code":"12025","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Happy Zama Lwandle","code":"15882","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Lucrezia Motlokoa","code":"12549","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Godwin Kabelo Mokopanele","code":"18310","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Nombuso Cindy Kubheka","code":"17209","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Freederick Roodt","code":"16804","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Mthobisi Mngoma","code":"10258","total":7,"done":7,"score":100.0,"status":"Passed"},{"name":"Tshepo Moima","code":"19850","total":7,"done":7,"score":100.0,"status":"Passed"}],"roster":{"Lebohang Molefi":{"manager":"Duane Nell","region":"East London"},"Dineshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucinda Mdlatu":{"manager":"Duane Nell","region":"Port Elizabeth"},"Cynthia Dinabantu":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kabelo Phiri":{"manager":"Taylor Wilson","region":"North West"},"Mashudu Mudau":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mawethu Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Roy Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mpho Ramahleka":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Lusito Nyambi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thembi Mahlangu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thato Molefe":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Athenkosi Mbovu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gift Malavi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gerrit Viljoen":{"manager":"Morgan Davey","region":"Gauteng"},"Ennie Majaja":{"manager":"Morgan Davey","region":"Gauteng"},"Sibulele Magibisela":{"manager":"Morgan Davey","region":"Gauteng"},"Gail Shankland":{"manager":"Johan Kleinhans","region":"Gauteng"},"Marianthe Christolis":{"manager":"Johan Kleinhans","region":"Gauteng"},"Zean Steenkamp":{"manager":"Johan Kleinhans","region":"Gauteng"},"Torquil Macniel":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kaveshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lerato Titisi":{"manager":"Danie Louw","region":"Free State"},"Jason Abrahams":{"manager":"Andre Erasmus","region":"Western Cape"},"Brian Gontsana":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Eksteen":{"manager":"Andre Erasmus","region":"Western Cape"},"Ashraf Cronje":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Choffinal":{"manager":"Andre Erasmus","region":"Western Cape"},"Sabelo Zulu":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Caroline Malan":{"manager":"Stefan Villoen","region":"Limpopo"},"Lebogang Isaac Zuma":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Marque September":{"manager":"Andre Erasmus","region":"Western Cape"},"Nereen Manohar":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Thabani Langazane":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Zeka Mpolokeng":{"manager":"Andre Erasmus","region":"Western Cape"},"Eric Nyoni":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Linda Ronnie Nkosi":{"manager":"Johan Kleinhans","region":"Gauteng"},"Ernst Boeta Botha":{"manager":"Taylor Wilson","region":"North West"},"Leandri Glossop":{"manager":"Andre Erasmus","region":"Western Cape"},"Norman Selwane":{"manager":"Johan Kleinhans","region":"Gauteng"},"Tshepo Mothoagae":{"manager":"Morgan Davey","region":"Gauteng"},"Lindiwe Ngubeni":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Lenox Mzulongile Mgolwa":{"manager":"Morgan Davey","region":"Gauteng"},"Dalin Dennis Wyngaard":{"manager":"Andre Erasmus","region":"Western Cape"},"Fagriyah Van Der Schyff":{"manager":"Andre Erasmus","region":"Western Cape"},"Louis Mbele":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Happy Zama Lwandle":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucrezia Motlokoa":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Godwin Kabelo Mokopanele":{"manager":"Danie Louw","region":"Free State"},"Nombuso Cindy Kubheka":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Freederick Roodt":{"manager":"Stefan Villoen","region":"Limpopo"},"Mthobisi Mngoma":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Tshepo Moima":{"manager":"Siyanda Magibisela","region":"Gauteng"}},"regions":{"East London":[7,7,100.0],"Kwazulu Natal":[77,77,100.0],"Port Elizabeth":[7,7,100.0],"North West":[14,14,100.0],"Gauteng":[168,154,100.0],"Free State":[14,14,100.0],"Western Cape":[70,70,100.0],"Limpopo":[14,14,100.0]},"managers":{"Duane Nell":[14,14,100.0],"Yugen Thaver":[77,77,100.0],"Taylor Wilson":[14,14,100.0],"Mlungisi Nkosi":[49,49,100.0],"Siyanda Magibisela":[49,49,100.0],"Morgan Davey":[35,28,100.0],"Johan Kleinhans":[35,28,100.0],"Danie Louw":[14,14,100.0],"Andre Erasmus":[70,70,100.0],"Stefan Villoen":[14,14,100.0]},"aveScore":100.0},"oral-b":{"course":"Oral-B iO Product Training","code":"ORALBIO26","start":"2026-07-29","end":"2026-08-31","reps":[{"name":"Lebohang Molefi","code":"17757","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Dineshan Moodley","code":"12302","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lucinda Mdlatu","code":"14006","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Cynthia Dinabantu","code":"1354","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Kabelo Phiri","code":"CMR0493","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Mashudu Mudau","code":"CMR0582","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Mawethu Ntuli","code":"CMR0612","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Roy Ntuli","code":"CMR0522","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Mpho Ramahleka","code":"CMR0634","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lusito Nyambi","code":"CMR0542","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Thembi Mahlangu","code":"CMR0623","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Thato Molefe","code":"CMR0558","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Athenkosi Mbovu","code":"CMR0610","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Gift Malavi","code":"CMR0540","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Gerrit Viljoen","code":"CMR0601","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Ennie Majaja","code":"CMR0647","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Sibulele Magibisela","code":"CMR0548","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Gail Shankland","code":"CMR0519","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Marianthe Christolis","code":"CMR0517","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Zean Steenkamp","code":"CMR0682","total":13,"done":0,"score":0.0,"status":"Not Started"},{"name":"Torquil Macniel","code":"14628","total":13,"done":0,"score":0.0,"status":"Not Started"},{"name":"Kaveshan Moodley","code":"16015","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lerato Titisi","code":"10078","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Jason Abrahams","code":"8826","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Brian Gontsana","code":"14270","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Michael Eksteen","code":"15078","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Ashraf Cronje","code":"19834","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Michael Choffinal","code":"18461","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Sabelo Zulu","code":"16910","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Caroline Malan","code":"9534","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lebogang Isaac Zuma","code":"15858","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Marque September","code":"9468","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Nereen Manohar","code":"10447","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Thabani Langazane","code":"14603","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Zeka Mpolokeng","code":"10586","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Eric Nyoni","code":"15857","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Linda Nkosi","code":"16561","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Ernst Boeta Botha","code":"17594","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Leandri Glossop","code":"10419","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Norman Selwane","code":"19748","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Tshepo Mothoagae","code":"18220","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lindiwe Ngubeni","code":"18935","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lenox Mzulongile Mgolwa","code":"19258","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Dalin Dennis Wyngaard","code":"9484","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Fagriyah Van Der Schyff","code":"9116","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Louis Mbele","code":"12025","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Happy Zama Lwandle","code":"15882","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Lucrezia Motlokoa","code":"12549","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Godwin Kabelo Mokopanele","code":"18310","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Nombuso Cindy Kubheka","code":"17209","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Freederick Roodt","code":"16804","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Mthobisi Mngoma","code":"10258","total":13,"done":13,"score":100.0,"status":"Passed"},{"name":"Tshepo Moima","code":"19850","total":13,"done":13,"score":100.0,"status":"Passed"}],"roster":{"Lebohang Molefi":{"manager":"Duane Nell","region":"East London"},"Dineshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucinda Mdlatu":{"manager":"Duane Nell","region":"Port Elizabeth"},"Cynthia Dinabantu":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kabelo Phiri":{"manager":"Taylor Wilson","region":"North West"},"Mashudu Mudau":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mawethu Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Roy Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mpho Ramahleka":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Lusito Nyambi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thembi Mahlangu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thato Molefe":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Athenkosi Mbovu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gift Malavi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gerrit Viljoen":{"manager":"Morgan Davey","region":"Gauteng"},"Ennie Majaja":{"manager":"Morgan Davey","region":"Gauteng"},"Sibulele Magibisela":{"manager":"Morgan Davey","region":"Gauteng"},"Gail Shankland":{"manager":"Johan Kleinhans","region":"Gauteng"},"Marianthe Christolis":{"manager":"Johan Kleinhans","region":"Gauteng"},"Zean Steenkamp":{"manager":"Johan Kleinhans","region":"Gauteng"},"Torquil Macniel":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kaveshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lerato Titisi":{"manager":"Danie Louw","region":"Free State"},"Jason Abrahams":{"manager":"Andre Erasmus","region":"Western Cape"},"Brian Gontsana":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Eksteen":{"manager":"Andre Erasmus","region":"Western Cape"},"Ashraf Cronje":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Choffinal":{"manager":"Andre Erasmus","region":"Western Cape"},"Sabelo Zulu":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Caroline Malan":{"manager":"Stefan Villoen","region":"Limpopo"},"Lebogang Isaac Zuma":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Marque September":{"manager":"Andre Erasmus","region":"Western Cape"},"Nereen Manohar":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Thabani Langazane":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Zeka Mpolokeng":{"manager":"Andre Erasmus","region":"Western Cape"},"Eric Nyoni":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Linda Nkosi":{"manager":"Johan Kleinhans","region":"Gauteng"},"Ernst Boeta Botha":{"manager":"Taylor Wilson","region":"North West"},"Leandri Glossop":{"manager":"Andre Erasmus","region":"Western Cape"},"Norman Selwane":{"manager":"Johan Kleinhans","region":"Gauteng"},"Tshepo Mothoagae":{"manager":"Morgan Davey","region":"Gauteng"},"Lindiwe Ngubeni":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Lenox Mzulongile Mgolwa":{"manager":"Morgan Davey","region":"Gauteng"},"Dalin Dennis Wyngaard":{"manager":"Andre Erasmus","region":"Western Cape"},"Fagriyah Van Der Schyff":{"manager":"Andre Erasmus","region":"Western Cape"},"Louis Mbele":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Happy Zama Lwandle":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucrezia Motlokoa":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Godwin Kabelo Mokopanele":{"manager":"Danie Louw","region":"Free State"},"Nombuso Cindy Kubheka":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Freederick Roodt":{"manager":"Stefan Villoen","region":"Limpopo"},"Mthobisi Mngoma":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Tshepo Moima":{"manager":"Siyanda Magibisela","region":"Gauteng"}},"regions":{"East London":[13,13,100.0],"Kwazulu Natal":[143,130,100.0],"Port Elizabeth":[13,13,100.0],"North West":[26,26,100.0],"Gauteng":[312,299,100.0],"Free State":[26,26,100.0],"Western Cape":[130,130,100.0],"Limpopo":[26,26,100.0]},"managers":{"Duane Nell":[26,26,100.0],"Yugen Thaver":[143,130,100.0],"Taylor Wilson":[26,26,100.0],"Mlungisi Nkosi":[91,91,100.0],"Siyanda Magibisela":[91,91,100.0],"Morgan Davey":[65,65,100.0],"Johan Kleinhans":[65,52,100.0],"Danie Louw":[26,26,100.0],"Andre Erasmus":[130,130,100.0],"Stefan Villoen":[26,26,100.0]},"aveScore":100.0},"slow-mag":{"course":"Slow Mag - Packaging Refresh Training","code":"PG02","start":"2026-06-13","end":"2026-07-12","reps":[{"name":"Lebohang Molefi","code":"17757","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Dineshan Moodley","code":"12302","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lucinda Mdlatu","code":"14006","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Cynthia Dinabantu","code":"1354","total":10,"done":10,"score":84.0,"status":"Failed"},{"name":"Kabelo Phiri","code":"CMR0493","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Mashudu Mudau","code":"CMR0582","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Mawethu Ntuli","code":"CMR0612","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Roy Ntuli","code":"CMR0522","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Mpho Ramahleka","code":"CMR0634","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lusito Nyambi","code":"CMR0542","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Thembi Mahlangu","code":"CMR0623","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Thato Molefe","code":"CMR0558","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Athenkosi Mbovu","code":"CMR0610","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Gift Malavi","code":"CMR0540","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Gerrit Viljoen","code":"CMR0601","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Ennie Majaja","code":"CMR0647","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Sibulele Magibisela","code":"CMR0548","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Gail Shankland","code":"CMR0519","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Marianthe Christolis","code":"CMR0517","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Zean Steenkamp","code":"CMR0682","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Torquil Macniel","code":"14628","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Kaveshan Moodley","code":"16015","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lerato Titisi","code":"10078","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Jason Abrahams","code":"8826","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Brian Gontsana","code":"14270","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Michael Eksteen","code":"15078","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Ashraf Cronje","code":"19834","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Michael Choffinal","code":"18461","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Sabelo Zulu","code":"16910","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Caroline Malan","code":"9534","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lebogang Isaac Zuma","code":"15858","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Marque September","code":"9468","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Nereen Manohar","code":"10447","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Thabani Langazane","code":"14603","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Zeka Mpolokeng","code":"10586","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Eric Nyoni","code":"15857","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Linda Nkosi","code":"16561","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Ernst Boeta Botha","code":"17594","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Leandri Glossop","code":"10419","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Norman Selwane","code":"19748","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Tshepo Mothoagae","code":"18220","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lindiwe Ngubeni","code":"18935","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lenox Mzulongile Mgolwa","code":"19258","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Dalin Dennis Wyngaard","code":"9484","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Fagriyah Van Der Schyff","code":"9116","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Louis Mbele","code":"12025","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Happy Zama Lwandle","code":"15882","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Lucrezia Motlokoa","code":"12549","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Godwin Kabelo Mokopanele","code":"18310","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Nombuso Cindy Kubheka","code":"17209","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Freederick Roodt","code":"16804","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Mthobisi Mngoma","code":"10258","total":10,"done":10,"score":100.0,"status":"Passed"},{"name":"Tshepo Moima","code":"19850","total":10,"done":10,"score":100.0,"status":"Passed"}],"roster":{"Lebohang Molefi":{"manager":"Duane Nell","region":"East London"},"Dineshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucinda Mdlatu":{"manager":"Duane Nell","region":"Port Elizabeth"},"Cynthia Dinabantu":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kabelo Phiri":{"manager":"Taylor Wilson","region":"North West"},"Mashudu Mudau":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mawethu Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Roy Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mpho Ramahleka":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Lusito Nyambi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thembi Mahlangu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thato Molefe":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Athenkosi Mbovu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gift Malavi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gerrit Viljoen":{"manager":"Morgan Davey","region":"Gauteng"},"Ennie Majaja":{"manager":"Morgan Davey","region":"Gauteng"},"Sibulele Magibisela":{"manager":"Morgan Davey","region":"Gauteng"},"Gail Shankland":{"manager":"Johan Kleinhans","region":"Gauteng"},"Marianthe Christolis":{"manager":"Johan Kleinhans","region":"Gauteng"},"Zean Steenkamp":{"manager":"Johan Kleinhans","region":"Gauteng"},"Torquil Macniel":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kaveshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lerato Titisi":{"manager":"Danie Louw","region":"Free State"},"Jason Abrahams":{"manager":"Andre Erasmus","region":"Western Cape"},"Brian Gontsana":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Eksteen":{"manager":"Andre Erasmus","region":"Western Cape"},"Ashraf Cronje":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Choffinal":{"manager":"Andre Erasmus","region":"Western Cape"},"Sabelo Zulu":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Caroline Malan":{"manager":"Stefan Villoen","region":"Limpopo"},"Lebogang Isaac Zuma":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Marque September":{"manager":"Andre Erasmus","region":"Western Cape"},"Nereen Manohar":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Thabani Langazane":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Zeka Mpolokeng":{"manager":"Andre Erasmus","region":"Western Cape"},"Eric Nyoni":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Linda Nkosi":{"manager":"Johan Kleinhans","region":"Gauteng"},"Ernst Boeta Botha":{"manager":"Taylor Wilson","region":"North West"},"Leandri Glossop":{"manager":"Andre Erasmus","region":"Western Cape"},"Norman Selwane":{"manager":"Johan Kleinhans","region":"Gauteng"},"Tshepo Mothoagae":{"manager":"Morgan Davey","region":"Gauteng"},"Lindiwe Ngubeni":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Lenox Mzulongile Mgolwa":{"manager":"Morgan Davey","region":"Gauteng"},"Dalin Dennis Wyngaard":{"manager":"Andre Erasmus","region":"Western Cape"},"Fagriyah Van Der Schyff":{"manager":"Andre Erasmus","region":"Western Cape"},"Louis Mbele":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Happy Zama Lwandle":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucrezia Motlokoa":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Godwin Kabelo Mokopanele":{"manager":"Danie Louw","region":"Free State"},"Nombuso Cindy Kubheka":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Freederick Roodt":{"manager":"Stefan Villoen","region":"Limpopo"},"Mthobisi Mngoma":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Tshepo Moima":{"manager":"Siyanda Magibisela","region":"Gauteng"}},"regions":{"East London":[10,10,100.0],"Kwazulu Natal":[110,110,98.5],"Port Elizabeth":[10,10,100.0],"North West":[20,20,100.0],"Gauteng":[240,240,100.0],"Free State":[20,20,100.0],"Western Cape":[100,100,100.0],"Limpopo":[20,20,100.0]},"managers":{"Duane Nell":[20,20,100.0],"Yugen Thaver":[110,110,98.5],"Taylor Wilson":[20,20,100.0],"Mlungisi Nkosi":[70,70,100.0],"Siyanda Magibisela":[70,70,100.0],"Morgan Davey":[50,50,100.0],"Johan Kleinhans":[50,50,100.0],"Danie Louw":[20,20,100.0],"Andre Erasmus":[100,100,100.0],"Stefan Villoen":[20,20,100.0]},"aveScore":99.7},"pampers":{"course":"Pampers Training Program","code":"Baby01","start":"2026-05-01","end":"2026-06-10","reps":[{"name":"Lebohang Molefi","code":"17757","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Dineshan Moodley","code":"12302","total":26,"done":25,"score":80.0,"status":"Failed"},{"name":"Lucinda Mdlatu","code":"14006","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Cynthia Dinabantu","code":"1354","total":26,"done":25,"score":90.0,"status":"Failed"},{"name":"Kabelo Phiri","code":"CMR0493","total":26,"done":25,"score":90.0,"status":"Failed"},{"name":"Mashudu Mudau","code":"CMR0582","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Mawethu Ntuli","code":"CMR0612","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Roy Ntuli","code":"CMR0522","total":26,"done":25,"score":90.0,"status":"Failed"},{"name":"Mpho Ramahleka","code":"CMR0634","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Lusito Nyambi","code":"CMR0542","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Thembi Mahlangu","code":"CMR0623","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Thato Molefe","code":"CMR0558","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Athenkosi Mbovu","code":"CMR0610","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Gift Malavi","code":"CMR0540","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Gerrit Viljoen","code":"CMR0601","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Ennie Majaja","code":"CMR0647","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Sibulele Magibisela","code":"CMR0548","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Gail Shankland","code":"CMR0519","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Marianthe Christolis","code":"CMR0517","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Zean Steenkamp","code":"CMR0682","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Torquil Macniel","code":"14628","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Kaveshan Moodley","code":"16015","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Lerato Titisi","code":"10078","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Jason Abrahams","code":"8826","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Brian Gontsana","code":"14270","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Michael Eksteen","code":"15078","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Ashraf Cronje","code":"19834","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Michael Choffinal","code":"18461","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Sabelo Zulu","code":"16910","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Caroline Malan","code":"9534","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Lebogang Isaac Zuma","code":"15858","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Marque September","code":"9468","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Nereen Manohar","code":"10447","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Thabani Langazane","code":"14603","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Zeka Mpolokeng","code":"10586","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Eric Nyoni","code":"15857","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Linda Nkosi","code":"16561","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Ernst Boeta Botha","code":"17594","total":26,"done":26,"score":40.0,"status":"Failed"},{"name":"Leandri Glossop","code":"10419","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Norman Selwane","code":"19748","total":26,"done":25,"score":70.0,"status":"Failed"},{"name":"Tshepo Mothoagae","code":"18220","total":26,"done":26,"score":90.0,"status":"Failed"},{"name":"Lindiwe Ngubeni","code":"18935","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Lenox Mzulongile Mgolwa","code":"19258","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Dalin Dennis Wyngaard","code":"9484","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Fagriyah Van Der Schyff","code":"9116","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Louis Mbele","code":"12025","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Happy Zama Lwandle","code":"15882","total":26,"done":0,"score":0.0,"status":"Not Started"},{"name":"Lucrezia Motlokoa","code":"12549","total":26,"done":25,"score":100.0,"status":"Passed"},{"name":"Godwin Kabelo Mokopanele","code":"18310","total":26,"done":25,"score":90.0,"status":"Failed"},{"name":"Nombuso Cindy Kubheka","code":"17209","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Freederick Roodt","code":"16804","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Mthobisi Mngoma","code":"10258","total":26,"done":26,"score":100.0,"status":"Passed"},{"name":"Tshepo Moima","code":"19850","total":26,"done":26,"score":100.0,"status":"Passed"}],"roster":{"Lebohang Molefi":{"manager":"Duane Nell","region":"East London"},"Dineshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucinda Mdlatu":{"manager":"Duane Nell","region":"Port Elizabeth"},"Cynthia Dinabantu":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kabelo Phiri":{"manager":"Taylor Wilson","region":"North West"},"Mashudu Mudau":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mawethu Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Roy Ntuli":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Mpho Ramahleka":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Lusito Nyambi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thembi Mahlangu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Thato Molefe":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Athenkosi Mbovu":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gift Malavi":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Gerrit Viljoen":{"manager":"Morgan Davey","region":"Gauteng"},"Ennie Majaja":{"manager":"Morgan Davey","region":"Gauteng"},"Sibulele Magibisela":{"manager":"Morgan Davey","region":"Gauteng"},"Gail Shankland":{"manager":"Johan Kleinhans","region":"Gauteng"},"Marianthe Christolis":{"manager":"Johan Kleinhans","region":"Gauteng"},"Zean Steenkamp":{"manager":"Johan Kleinhans","region":"Gauteng"},"Torquil Macniel":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Kaveshan Moodley":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lerato Titisi":{"manager":"Danie Louw","region":"Free State"},"Jason Abrahams":{"manager":"Andre Erasmus","region":"Western Cape"},"Brian Gontsana":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Eksteen":{"manager":"Andre Erasmus","region":"Western Cape"},"Ashraf Cronje":{"manager":"Andre Erasmus","region":"Western Cape"},"Michael Choffinal":{"manager":"Andre Erasmus","region":"Western Cape"},"Sabelo Zulu":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Caroline Malan":{"manager":"Stefan Villoen","region":"Limpopo"},"Lebogang Isaac Zuma":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Marque September":{"manager":"Andre Erasmus","region":"Western Cape"},"Nereen Manohar":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Thabani Langazane":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Zeka Mpolokeng":{"manager":"Andre Erasmus","region":"Western Cape"},"Eric Nyoni":{"manager":"Mlungisi Nkosi","region":"Gauteng"},"Linda Nkosi":{"manager":"Johan Kleinhans","region":"Gauteng"},"Ernst Boeta Botha":{"manager":"Taylor Wilson","region":"North West"},"Leandri Glossop":{"manager":"Andre Erasmus","region":"Western Cape"},"Norman Selwane":{"manager":"Johan Kleinhans","region":"Gauteng"},"Tshepo Mothoagae":{"manager":"Morgan Davey","region":"Gauteng"},"Lindiwe Ngubeni":{"manager":"Siyanda Magibisela","region":"Gauteng"},"Lenox Mzulongile Mgolwa":{"manager":"Morgan Davey","region":"Gauteng"},"Dalin Dennis Wyngaard":{"manager":"Andre Erasmus","region":"Western Cape"},"Fagriyah Van Der Schyff":{"manager":"Andre Erasmus","region":"Western Cape"},"Louis Mbele":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Happy Zama Lwandle":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Lucrezia Motlokoa":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Godwin Kabelo Mokopanele":{"manager":"Danie Louw","region":"Free State"},"Nombuso Cindy Kubheka":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Freederick Roodt":{"manager":"Stefan Villoen","region":"Limpopo"},"Mthobisi Mngoma":{"manager":"Yugen Thaver","region":"Kwazulu Natal"},"Tshepo Moima":{"manager":"Siyanda Magibisela","region":"Gauteng"}},"regions":{"East London":[26,26,100.0],"Kwazulu Natal":[286,255,97.1],"Port Elizabeth":[26,26,100.0],"North West":[52,51,64.5],"Gauteng":[624,613,97.9],"Free State":[52,51,95.1],"Western Cape":[260,255,100.0],"Limpopo":[52,52,100.0]},"managers":{"Duane Nell":[52,52,100.0],"Yugen Thaver":[286,255,97.1],"Taylor Wilson":[52,51,64.5],"Mlungisi Nkosi":[182,178,98.6],"Siyanda Magibisela":[182,180,100.0],"Morgan Davey":[130,127,98.0],"Johan Kleinhans":[130,128,94.1],"Danie Louw":[52,51,95.1],"Andre Erasmus":[260,255,100.0],"Stefan Villoen":[52,52,100.0]},"aveScore":96.9}};

const norm = s => String(s == null ? "" : s).replace(/\s+/g, " ").trim();

// Graph usedRange payload (Sheet1, header row first) → the shape the dashboard renders.
export function parseUsedRange(values) {
  if (!values || values.length < 2) return null;
  const head = values[0].map(h => norm(h).toLowerCase());
  const at = n => head.indexOf(n);
  const iName = at("user name"), iMgr = at("manager"), iRegion = at("region"), iType = at("rep type"),
        iTotal = at("total lessons"), iDone = at("lessons completed"), iScore = at("quiz score"),
        iStatus = at("course session status"), iCourse = at("course name"), iCode = at("course code"),
        iUserCode = at("user code"),
        iStart = at("course start date"), iEnd = at("course end date");
  if (iName < 0 || iDone < 0) return null;

  const reps = [], roster = {};
  let course = "", code = "", start = "", end = "";
  for (let r = 1; r < values.length; r++) {
    const row = values[r], name = norm(row[iName]);
    if (!name) continue;
    if (!course) { course = norm(row[iCourse]); code = norm(row[iCode]); start = norm(row[iStart]); end = norm(row[iEnd]); }
    reps.push({ name: name, code: iUserCode > -1 ? norm(row[iUserCode]) : "",
      total: Number(row[iTotal]) || 0, done: Number(row[iDone]) || 0,
      score: Number(row[iScore]) || 0, status: iStatus > -1 ? norm(row[iStatus]) : "" });
    roster[name] = { manager: iMgr > -1 ? norm(row[iMgr]) : "", region: iRegion > -1 ? norm(row[iRegion]) : "", type: iType > -1 ? norm(row[iType]) : "" };
  }
  if (!reps.length) return null;

  const roll = function (field) {
    const out = {};
    reps.forEach(function (rep) {
      const k = roster[rep.name] && roster[rep.name][field];
      if (!k) return;
      const o = out[k] || (out[k] = [0, 0, 0, 0]);
      o[0] += rep.total; o[1] += rep.done;
      if (rep.done > 0) { o[2] += rep.score * rep.done; o[3] += rep.done; }
    });
    Object.keys(out).forEach(function (k) {
      out[k] = [out[k][0], out[k][1], out[k][3] ? Math.round((out[k][2] / out[k][3]) * 10) / 10 : 0];
    });
    return out;
  };

  const doneTot = reps.reduce(function (s, r) { return s + r.done; }, 0);
  const wScore = reps.reduce(function (s, r) { return s + (r.done > 0 ? r.score * r.done : 0); }, 0);
  return { course: course, code: code, start: start, end: end, reps: reps, roster: roster,
    regions: roll("region"), managers: roll("manager"),
    aveScore: doneTot ? Math.round((wScore / doneTot) * 10) / 10 : 0 };
}

export async function resolveDrive(token) {
  const res = await fetch("https://graph.microsoft.com/v1.0/sites/" + SITE.hostname + ":" + SITE.path + "?$expand=drive",
    { headers: { Authorization: "Bearer " + token } });
  if (!res.ok) throw new Error("Site lookup failed (" + res.status + ")");
  const site = await res.json();
  if (!site.drive || !site.drive.id) throw new Error("No document library on site");
  return site.drive.id;
}

export async function fetchBrand(token, driveId, brand) {
  const url = "https://graph.microsoft.com/v1.0/drives/" + driveId + "/root:/" + brand.file +
    ":/workbook/worksheets('" + SHEET + "')/usedRange(valuesOnly=true)?$select=values";
  const res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  if (!res.ok) throw new Error(brand.name + ": Graph " + res.status);
  const parsed = parseUsedRange((await res.json()).values);
  if (!parsed) throw new Error(brand.name + ": Sheet1 columns not recognised");
  return parsed;
}

// Walk the Training folder and return one brand per workbook found — so a new
// brand folder dropped into SharePoint shows up on the next load with no code change.
// "Oral-B-logo.png" / "Pampers_Logo_2013.png" → "oralb" / "pampers", so a logo
// dropped anywhere in the tree can be matched to the module it belongs to.
function logoKey(fileName) {
  return String(fileName)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/logo|brand|mark|transparent|final|\d{4}|[-_\s.]/gi, "")
    .toLowerCase();
}

export async function discoverBrands(token, driveId, client) {
  const client0 = client || CLIENTS[0];
  const found = [];
  const logos = [];
  const seen = {};

  async function children(path) {
    const url = "https://graph.microsoft.com/v1.0/drives/" + driveId + "/root:/" + path +
      ":/children?$select=name,folder,file,lastModifiedDateTime,webUrl&$top=200";
    const res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
    if (!res.ok) throw new Error("Cannot list " + path + " (" + res.status + ")");
    return (await res.json()).value || [];
  }

  async function walk(path, label, depth) {
    const items = await children(path);
    for (const item of items) {
      if (item.folder) {
        if (depth < 3) await walk(path + "/" + item.name, item.name, depth + 1);
        continue;
      }
      if (/\.(png|jpe?g|svg|webp)$/i.test(item.name)) {
        logos.push({ key: logoKey(item.name), path: path + "/" + item.name, folder: path });
        continue;
      }
      if (!/\.xlsx$/i.test(item.name) || /^~\$/.test(item.name)) continue;
      const name = brandNameFromFile(item.name);
      const key = slug(name);
      if (seen[key]) continue;
      seen[key] = true;
      found.push({
        key: client0.key + ":" + key,
        name: name,
        client: client0.name,
        clientKey: client0.key,
        eyebrow: (label || "TRAINING").toUpperCase(),
        file: path + "/" + item.name,
        modified: item.lastModifiedDateTime || "",
        webUrl: item.webUrl || ""
      });
    }
  }

  await walk(client0.root, "", 0);

  // Match each module to a logo: same folder first, then anywhere in the tree.
  found.forEach(function (brand) {
    const want = logoKey(brand.name);
    if (!want) return;
    const hit = logos.filter(function (l) {
      return l.key === want || l.key.indexOf(want) > -1 || want.indexOf(l.key) > -1;
    }).sort(function (a, b) {
      const af = brand.file.indexOf(a.folder) === 0 ? 0 : 1;
      const bf = brand.file.indexOf(b.folder) === 0 ? 0 : 1;
      return af - bf || a.key.length - b.key.length;
    })[0];
    if (hit) brand.logo = hit.path;
  });

  found.sort(function (a, b) { return (b.modified || "").localeCompare(a.modified || ""); });
  return found;
}

// Logos need an authorised fetch, so they come back as blob URLs.
export async function fetchLogo(token, driveId, path) {
  const url = "https://graph.microsoft.com/v1.0/drives/" + driveId + "/root:/" + path + ":/content";
  const res = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  if (!res.ok) throw new Error("logo " + res.status);
  return URL.createObjectURL(await res.blob());
}

// Full refresh: discover every workbook under the Training folder and read each one.
// Returns { brands, data, errors } — errors are per-brand so one bad workbook
// never blanks the dashboard.
export async function loadAll(token) {
  const driveId = await resolveDrive(token);
  const errors = [];
  let brands = [];
  for (const client of CLIENTS) {
    try {
      brands = brands.concat(await discoverBrands(token, driveId, client));
    } catch (e) {
      errors.push(client.name + " — " + (e && e.message ? e.message : "folder unreadable"));
    }
  }
  const data = {};
  const results = await Promise.all(brands.map(function (b) {
    return fetchBrand(token, driveId, b).then(
      function (parsed) { return { b: b, parsed: parsed }; },
      function (err) { return { b: b, err: err }; }
    );
  }));
  results.forEach(function (r) {
    if (r.parsed) data[r.b.key] = r.parsed;
    else errors.push(r.b.client + " " + r.b.name + " — " + (r.err && r.err.message ? r.err.message : "unreadable"));
  });
  const live = brands.filter(function (b) { return data[b.key]; });

  const logoUrls = {};
  await Promise.all(live.filter(function (b) { return b.logo; }).map(function (b) {
    return fetchLogo(token, driveId, b.logo).then(
      function (url) { logoUrls[b.key] = url; },
      function () { /* a missing logo is cosmetic — fall back to the monogram */ }
    );
  }));

  return { brands: live, data: data, errors: errors, logos: logoUrls, driveId: driveId };
}
