(this.webpackJsonplabex=this.webpackJsonplabex||[]).push([[0],{118:function(e,a,o){"use strict";o.r(a);var n=o(0),i=o.n(n),l=o(6),t=o.n(l),r=(o(93),o(94),o(22)),g=o(12),c=o(16),s=o(9),m=o(36),d=o.n(m),u=o(10),p=o(147),E=o(81);function f(){var e=Object(s.a)(["\nheight: 6vh;\nposition: relative; \nbottom: 0;\nbackground-color: #334661;\n"]);return f=function(){return e},e}function h(){var e=Object(s.a)(["\nposition: relative; \ntop: 0;\nborder: 1px solid;\n"]);return h=function(){return e},e}function b(){var e=Object(s.a)(["\ndisplay: flex;\nflex-grow: 1;\n"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\nbackground-color: #3D5A80;\ncolor: white;\n"]);return v=function(){return e},e}function M(){var e=Object(s.a)(["\nwidth: 100%;\nflex-grow: 1;\n"]);return M=function(){return e},e}function C(){var e=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nmin-height: 100vh;\nwidth: 100vw;\nmax-width:100%;\nbackground-image: url('https://wallpaperaccess.com/full/1683774.jpg');\nbackground-attachment: fixed;\n"]);return C=function(){return e},e}var S=Object(E.a)({palette:{primary:{main:"#FF5F00"},secondary:{main:"#FF0000"},default:{color:"white"}}}),A=u.a.div(C()),I=u.a.div(M()),T=u.a.div(v()),N=u.a.div(b()),O=(u.a.div(h()),u.a.div(f()),o(146));function G(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: transparent;\n  padding: 20px 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n  img {\n      width: 130px;\n      cursor: pointer;\n\n      :hover {\n        opacity: 0.8;\n      }\n  }\n\n  button {\n      margin: 0;\n      color: white;\n      border-color: white;\n      cursor: pointer;\n\n      :hover {\n        opacity: 0.8;\n      }\n  }\n"]);return G=function(){return e},e}var B=u.a.div(G());var R=function(e){var a=Object(g.f)();return i.a.createElement(B,null,i.a.createElement(O.a,{theme:S},i.a.createElement("img",{alt:"LabeX",onClick:function(){a.push("/")},src:d.a}),i.a.createElement(p.a,{variant:"outlined",color:"primary",onClick:function(){a.push("/login")}},"Login")))},x=o(154);function L(){var e=Object(s.a)(["\n  color: #293241;\n  margin-top: 10px;\n"]);return L=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 80%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: initial;\n  text-align: left;\n"]);return P=function(){return e},e}function j(){var e=Object(s.a)(["\n  width: 90%;\n  max-width: 400px;\n  background-color: rgba(224, 251, 252, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 10px;\n\n  h2 {\n    margin-bottom: 0;\n    padding: 0 20px;\n    font-weight: 300;\n  }\n\n  button {\n    margin: 10px 0 20px;\n  }\n"]);return j=function(){return e},e}function y(){var e=Object(s.a)(["\n  min-width: 200px;\n"]);return y=function(){return e},e}var w=Object(u.a)(x.a)(y()),D=u.a.form(j()),V=u.a.div(P()),U=u.a.label(L()),k=o(155),F=o(156),K=o(151),H=o(17),Z=o.n(H);var Y=function(){var e=Object(g.f)(),a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],t=o[1],r=Object(n.useState)(""),s=Object(c.a)(r,2),m=s[0],d=s[1];Object(n.useEffect)((function(){Z.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips").then((function(e){t(e.data.trips)})).catch((function(e){window.alert("Listar viagens falhou")}))}),[t]);var u=l.map((function(e,a){return i.a.createElement(k.a,{key:a,value:e.name},e.name," - ",e.planet)})),E=l.filter((function(e){if(e.name===m)return e}));return i.a.createElement(A,null,i.a.createElement(R,null),i.a.createElement(N,null,i.a.createElement(T,null),i.a.createElement(I,null,i.a.createElement(D,null,i.a.createElement(O.a,{theme:S},i.a.createElement(K.a,{variant:"filled"},i.a.createElement(F.a,{id:"select-label",color:"primary"},"Viagem"),i.a.createElement(w,{labelId:"select-label",onChange:function(e){d(e.target.value)},value:m},u)),l.filter((function(e){if(e.name===m)return e})).map((function(e,a){return i.a.createElement("div",{key:a},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,i.a.createElement("b",null,"Planeta:")," ",e.planet),i.a.createElement("p",null,i.a.createElement("b",null,"Data:")," ",e.date),i.a.createElement("p",null,i.a.createElement("b",null,"Dura\xe7\xe3o em dias:")," ",e.durationInDays),i.a.createElement("p",null,i.a.createElement("b",null,"Descri\xe7\xe3o:")," ",e.description))})),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){E.length&&e.push("/formulario/".concat(E[0].name,"/").concat(E[0].id))}},"Aplicar para Viagem"))))))},W=o(51),J=o(56),q=function(e){var a=Object(n.useState)(e),o=Object(c.a)(a,2),i=o[0],l=o[1];return{form:i,onChange:function(e,a){var o=Object(J.a)(Object(J.a)({},i),{},Object(W.a)({},e,a));l(o)},resetValues:function(){l(e)}}},X=o(150),z=["Merc\xfario","V\xeanus","Terra","Marte","J\xfapiter","Saturno","Urano","Netuno","Plut\xe3o"],Q=[{ordem:1,nome:"Afeganist\xe3o",sigla2:"AF",sigla3:"AFG",codigo:"004"},{ordem:2,nome:"\xc1frica do Sul",sigla2:"ZA",sigla3:"ZAF",codigo:"710"},{ordem:3,nome:"Alb\xe2nia",sigla2:"AL",sigla3:"ALB",codigo:"008"},{ordem:4,nome:"Alemanha",sigla2:"DE",sigla3:"DEU",codigo:"276"},{ordem:5,nome:"Andorra",sigla2:"AD",sigla3:"AND",codigo:"020"},{ordem:6,nome:"Angola",sigla2:"AO",sigla3:"AGO",codigo:"024"},{ordem:7,nome:"Anguilla",sigla2:"AI",sigla3:"AIA",codigo:"660"},{ordem:8,nome:"Ant\xe1rtida",sigla2:"AQ",sigla3:"ATA",codigo:"010"},{ordem:9,nome:"Ant\xedgua e Barbuda",sigla2:"AG",sigla3:"ATG",codigo:"028"},{ordem:10,nome:"Antilhas Holandesas",sigla2:"AN",sigla3:"ANT",codigo:"530"},{ordem:11,nome:"Ar\xe1bia Saudita",sigla2:"SA",sigla3:"SAU",codigo:"682"},{ordem:12,nome:"Arg\xe9lia",sigla2:"DZ",sigla3:"DZA",codigo:"012"},{ordem:13,nome:"Argentina",sigla2:"AR",sigla3:"ARG",codigo:"032"},{ordem:14,nome:"Arm\xeania",sigla2:"AM",sigla3:"ARM",codigo:"51"},{ordem:15,nome:"Aruba",sigla2:"AW",sigla3:"ABW",codigo:"533"},{ordem:16,nome:"Austr\xe1lia",sigla2:"AU",sigla3:"AUS",codigo:"036"},{ordem:17,nome:"\xc1ustria",sigla2:"AT",sigla3:"AUT",codigo:"040"},{ordem:18,nome:"Azerbaij\xe3o",sigla2:"AZ  ",sigla3:"AZE",codigo:"31"},{ordem:19,nome:"Bahamas",sigla2:"BS",sigla3:"BHS",codigo:"044"},{ordem:20,nome:"Bahrein",sigla2:"BH",sigla3:"BHR",codigo:"048"},{ordem:21,nome:"Bangladesh",sigla2:"BD",sigla3:"BGD",codigo:"050"},{ordem:22,nome:"Barbados",sigla2:"BB",sigla3:"BRB",codigo:"052"},{ordem:23,nome:"Belarus",sigla2:"BY",sigla3:"BLR",codigo:"112"},{ordem:24,nome:"B\xe9lgica",sigla2:"BE",sigla3:"BEL",codigo:"056"},{ordem:25,nome:"Belize",sigla2:"BZ",sigla3:"BLZ",codigo:"084"},{ordem:26,nome:"Benin",sigla2:"BJ",sigla3:"BEN",codigo:"204"},{ordem:27,nome:"Bermudas",sigla2:"BM",sigla3:"BMU",codigo:"060"},{ordem:28,nome:"Bol\xedvia",sigla2:"BO",sigla3:"BOL",codigo:"068"},{ordem:29,nome:"B\xf3snia-Herzeg\xf3vina",sigla2:"BA",sigla3:"BIH",codigo:"070"},{ordem:30,nome:"Botsuana",sigla2:"BW",sigla3:"BWA",codigo:"072"},{ordem:31,nome:"Brasil",sigla2:"BR",sigla3:"BRA",codigo:"076"},{ordem:32,nome:"Brunei",sigla2:"BN",sigla3:"BRN",codigo:"096"},{ordem:33,nome:"Bulg\xe1ria",sigla2:"BG",sigla3:"BGR",codigo:"100"},{ordem:34,nome:"Burkina Fasso",sigla2:"BF",sigla3:"BFA",codigo:"854"},{ordem:35,nome:"Burundi",sigla2:"BI",sigla3:"BDI",codigo:"108"},{ordem:36,nome:"But\xe3o",sigla2:"BT",sigla3:"BTN",codigo:"064"},{ordem:37,nome:"Cabo Verde",sigla2:"CV",sigla3:"CPV",codigo:"132"},{ordem:38,nome:"Camar\xf5es",sigla2:"CM",sigla3:"CMR",codigo:"120"},{ordem:39,nome:"Camboja",sigla2:"KH",sigla3:"KHM",codigo:"116"},{ordem:40,nome:"Canad\xe1",sigla2:"CA",sigla3:"CAN",codigo:"124"},{ordem:41,nome:"Cazaquist\xe3o",sigla2:"KZ",sigla3:"KAZ",codigo:"398"},{ordem:42,nome:"Chade",sigla2:"TD",sigla3:"TCD",codigo:"148"},{ordem:43,nome:"Chile",sigla2:"CL",sigla3:"CHL",codigo:"152"},{ordem:44,nome:"China",sigla2:"CN",sigla3:"CHN",codigo:"156"},{ordem:45,nome:"Chipre",sigla2:"CY",sigla3:"CYP",codigo:"196"},{ordem:46,nome:"Cingapura",sigla2:"SG",sigla3:"SGP",codigo:"702"},{ordem:47,nome:"Col\xf4mbia",sigla2:"CO",sigla3:"COL",codigo:"170"},{ordem:48,nome:"Congo",sigla2:"CG",sigla3:"COG",codigo:"178"},{ordem:49,nome:"Cor\xe9ia do Norte",sigla2:"KP",sigla3:"PRK",codigo:"408"},{ordem:50,nome:"Cor\xe9ia do Sul",sigla2:"KR",sigla3:"KOR",codigo:"410"},{ordem:51,nome:"Costa do Marfim",sigla2:"CI",sigla3:"CIV",codigo:"384"},{ordem:52,nome:"Costa Rica",sigla2:"CR",sigla3:"CRI",codigo:"188"},{ordem:53,nome:"Cro\xe1cia (Hrvatska)",sigla2:"HR",sigla3:"HRV",codigo:"191"},{ordem:54,nome:"Cuba",sigla2:"CU",sigla3:"CUB",codigo:"192"},{ordem:55,nome:"Dinamarca",sigla2:"DK",sigla3:"DNK",codigo:"208"},{ordem:56,nome:"Djibuti",sigla2:"DJ",sigla3:"DJI",codigo:"262"},{ordem:57,nome:"Dominica",sigla2:"DM",sigla3:"DMA",codigo:"212"},{ordem:58,nome:"Egito",sigla2:"EG",sigla3:"EGY",codigo:"818"},{ordem:59,nome:"El Salvador",sigla2:"SV",sigla3:"SLV",codigo:"222"},{ordem:60,nome:"Emirados \xc1rabes Unidos",sigla2:"AE",sigla3:"ARE",codigo:"784"},{ordem:61,nome:"Equador",sigla2:"EC",sigla3:"ECU",codigo:"218"},{ordem:62,nome:"Eritr\xe9ia",sigla2:"ER",sigla3:"ERI",codigo:"232"},{ordem:63,nome:"Eslov\xe1quia",sigla2:"SK",sigla3:"SVK",codigo:"703"},{ordem:64,nome:"Eslov\xeania",sigla2:"SI",sigla3:"SVN",codigo:"705"},{ordem:65,nome:"Espanha",sigla2:"ES",sigla3:"ESP",codigo:"724"},{ordem:66,nome:"Estados Unidos",sigla2:"US",sigla3:"USA",codigo:"840"},{ordem:67,nome:"Est\xf4nia",sigla2:"EE",sigla3:"EST",codigo:"233"},{ordem:68,nome:"Eti\xf3pia",sigla2:"ET",sigla3:"ETH",codigo:"231"},{ordem:69,nome:"Fiji",sigla2:"FJ",sigla3:"FJI",codigo:"242"},{ordem:70,nome:"Filipinas",sigla2:"PH",sigla3:"PHL",codigo:"608"},{ordem:71,nome:"Finl\xe2ndia",sigla2:"FI",sigla3:"FIN",codigo:"246"},{ordem:72,nome:"Fran\xe7a",sigla2:"FR",sigla3:"FRA",codigo:"250"},{ordem:73,nome:"Gab\xe3o",sigla2:"GA",sigla3:"GAB",codigo:"266"},{ordem:74,nome:"G\xe2mbia",sigla2:"GM",sigla3:"GMB",codigo:"270"},{ordem:75,nome:"Gana",sigla2:"GH",sigla3:"GHA",codigo:"288"},{ordem:76,nome:"Ge\xf3rgia",sigla2:"GE",sigla3:"GEO",codigo:"268"},{ordem:77,nome:"Gibraltar",sigla2:"GI",sigla3:"GIB",codigo:"292"},{ordem:78,nome:"Gr\xe3-Bretanha (Reino Unido, UK)",sigla2:"GB",sigla3:"GBR",codigo:"826"},{ordem:79,nome:"Granada",sigla2:"GD",sigla3:"GRD",codigo:"308"},{ordem:80,nome:"Gr\xe9cia",sigla2:"GR",sigla3:"GRC",codigo:"300"},{ordem:81,nome:"Groel\xe2ndia",sigla2:"GL",sigla3:"GRL",codigo:"304"},{ordem:82,nome:"Guadalupe",sigla2:"GP",sigla3:"GLP",codigo:"312"},{ordem:83,nome:"Guam (Territ\xf3rio dos Estados Unidos)",sigla2:"GU",sigla3:"GUM",codigo:"316"},{ordem:84,nome:"Guatemala",sigla2:"GT",sigla3:"GTM",codigo:"320"},{ordem:85,nome:"Guernsey",sigla2:"G",sigla3:"GGY",codigo:"832"},{ordem:86,nome:"Guiana",sigla2:"GY",sigla3:"GUY",codigo:"328"},{ordem:87,nome:"Guiana Francesa",sigla2:"GF",sigla3:"GUF",codigo:"254"},{ordem:88,nome:"Guin\xe9",sigla2:"GN",sigla3:"GIN",codigo:"324"},{ordem:89,nome:"Guin\xe9 Equatorial",sigla2:"GQ",sigla3:"GNQ",codigo:"226"},{ordem:90,nome:"Guin\xe9-Bissau",sigla2:"GW",sigla3:"GNB",codigo:"624"},{ordem:91,nome:"Haiti",sigla2:"HT",sigla3:"HTI",codigo:"332"},{ordem:92,nome:"Holanda",sigla2:"NL",sigla3:"NLD",codigo:"528"},{ordem:93,nome:"Honduras",sigla2:"HN",sigla3:"HND",codigo:"340"},{ordem:94,nome:"Hong Kong",sigla2:"HK",sigla3:"HKG",codigo:"344"},{ordem:95,nome:"Hungria",sigla2:"HU",sigla3:"HUN",codigo:"348"},{ordem:96,nome:"I\xeamen",sigla2:"YE",sigla3:"YEM",codigo:"887"},{ordem:97,nome:"Ilha Bouvet (Territ\xf3rio da Noruega)",sigla2:"BV",sigla3:"BVT",codigo:"074"},{ordem:98,nome:"Ilha do Homem",sigla2:"IM",sigla3:"IMN",codigo:"833"},{ordem:99,nome:"Ilha Natal",sigla2:"CX",sigla3:"CXR",codigo:"162"},{ordem:100,nome:"Ilha Pitcairn",sigla2:"PN",sigla3:"PCN",codigo:"612"},{ordem:101,nome:"Ilha Reuni\xe3o",sigla2:"RE",sigla3:"REU",codigo:"638"},{ordem:102,nome:"Ilhas Aland",sigla2:"AX",sigla3:"ALA",codigo:"248"},{ordem:103,nome:"Ilhas Cayman",sigla2:"KY",sigla3:"CYM",codigo:"136"},{ordem:104,nome:"Ilhas Cocos",sigla2:"CC",sigla3:"CCK",codigo:"166"},{ordem:105,nome:"Ilhas Comores",sigla2:"KM",sigla3:"COM",codigo:"174"},{ordem:106,nome:"Ilhas Cook",sigla2:"CK",sigla3:"COK",codigo:"184"},{ordem:107,nome:"Ilhas Faroes",sigla2:"FO",sigla3:"FRO",codigo:"234"},{ordem:108,nome:"Ilhas Falkland (Malvinas)",sigla2:"FK",sigla3:"FLK",codigo:"238"},{ordem:109,nome:"Ilhas Ge\xf3rgia do Sul e Sandwich do Sul",sigla2:"GS",sigla3:"SGS",codigo:"239"},{ordem:110,nome:"Ilhas Heard e McDonald (Territ\xf3rio da Austr\xe1lia)",sigla2:"HM",sigla3:"HMD",codigo:"334"},{ordem:111,nome:"Ilhas Marianas do Norte",sigla2:"MP",sigla3:"MNP",codigo:"580"},{ordem:112,nome:"Ilhas Marshall",sigla2:"MH",sigla3:"MHL",codigo:"584"},{ordem:113,nome:"Ilhas Menores dos Estados Unidos",sigla2:"UM",sigla3:"UMI",codigo:"581"},{ordem:114,nome:"Ilhas Norfolk",sigla2:"NF",sigla3:"NFK",codigo:"574"},{ordem:115,nome:"Ilhas Seychelles",sigla2:"SC",sigla3:"SYC",codigo:"690"},{ordem:116,nome:"Ilhas Solom\xe3o",sigla2:"SB",sigla3:"SLB",codigo:"090"},{ordem:117,nome:"Ilhas Svalbard e Jan Mayen",sigla2:"SJ",sigla3:"SJM",codigo:"744"},{ordem:118,nome:"Ilhas Tokelau",sigla2:"TK",sigla3:"TKL",codigo:"772"},{ordem:119,nome:"Ilhas Turks e Caicos",sigla2:"TC",sigla3:"TCA",codigo:"796"},{ordem:120,nome:"Ilhas Virgens (Estados Unidos)",sigla2:"VI",sigla3:"VIR",codigo:"850"},{ordem:121,nome:"Ilhas Virgens (Inglaterra)",sigla2:"VG",sigla3:"VGB",codigo:"092"},{ordem:122,nome:"Ilhas Wallis e Futuna",sigla2:"WF",sigla3:"WLF",codigo:"876"},{ordem:123,nome:"\xedndia",sigla2:"IN",sigla3:"IND",codigo:"356"},{ordem:124,nome:"Indon\xe9sia",sigla2:"ID",sigla3:"IDN",codigo:"360"},{ordem:125,nome:"Ir\xe3",sigla2:"IR",sigla3:"IRN",codigo:"364"},{ordem:126,nome:"Iraque",sigla2:"IQ",sigla3:"IRQ",codigo:"368"},{ordem:127,nome:"Irlanda",sigla2:"IE",sigla3:"IRL",codigo:"372"},{ordem:128,nome:"Isl\xe2ndia",sigla2:"IS",sigla3:"ISL",codigo:"352"},{ordem:129,nome:"Israel",sigla2:"IL",sigla3:"ISR",codigo:"376"},{ordem:130,nome:"It\xe1lia",sigla2:"IT",sigla3:"ITA",codigo:"380"},{ordem:131,nome:"Jamaica",sigla2:"JM",sigla3:"JAM",codigo:"388"},{ordem:132,nome:"Jap\xe3o",sigla2:"JP",sigla3:"JPN",codigo:"392"},{ordem:133,nome:"Jersey",sigla2:"JE",sigla3:"JEY",codigo:"832"},{ordem:134,nome:"Jord\xe2nia",sigla2:"JO",sigla3:"JOR",codigo:"400"},{ordem:135,nome:"K\xeania",sigla2:"KE",sigla3:"KEN",codigo:"404"},{ordem:136,nome:"Kiribati",sigla2:"KI",sigla3:"KIR",codigo:"296"},{ordem:137,nome:"Kuait",sigla2:"KW",sigla3:"KWT",codigo:"414"},{ordem:138,nome:"Laos",sigla2:"LA",sigla3:"LAO",codigo:"418"},{ordem:139,nome:"L\xe1tvia",sigla2:"LV",sigla3:"LVA",codigo:"428"},{ordem:140,nome:"Lesoto",sigla2:"LS",sigla3:"LSO",codigo:"426"},{ordem:141,nome:"L\xedbano",sigla2:"LB",sigla3:"LBN",codigo:"422"},{ordem:142,nome:"Lib\xe9ria",sigla2:"LR",sigla3:"LBR",codigo:"430"},{ordem:143,nome:"L\xedbia",sigla2:"LY",sigla3:"LBY",codigo:"434"},{ordem:144,nome:"Liechtenstein",sigla2:"LI",sigla3:"LIE",codigo:"438"},{ordem:145,nome:"Litu\xe2nia",sigla2:"LT",sigla3:"LTU",codigo:"440"},{ordem:146,nome:"Luxemburgo",sigla2:"LU",sigla3:"LUX",codigo:"442"},{ordem:147,nome:"Macau",sigla2:"MO",sigla3:"MAC",codigo:"446"},{ordem:148,nome:"Maced\xf4nia (Rep\xfablica Yugoslava)",sigla2:"MK",sigla3:"MKD",codigo:"807"},{ordem:149,nome:"Madagascar",sigla2:"MG",sigla3:"MDG",codigo:"450"},{ordem:150,nome:"Mal\xe1sia",sigla2:"MY",sigla3:"MYS",codigo:"458"},{ordem:151,nome:"Malaui",sigla2:"MW",sigla3:"MWI",codigo:"454"},{ordem:152,nome:"Maldivas",sigla2:"MV",sigla3:"MDV",codigo:"462"},{ordem:153,nome:"Mali",sigla2:"ML",sigla3:"MLI",codigo:"466"},{ordem:154,nome:"Malta",sigla2:"MT",sigla3:"MLT",codigo:"470"},{ordem:155,nome:"Marrocos",sigla2:"MA",sigla3:"MAR",codigo:"504"},{ordem:156,nome:"Martinica",sigla2:"MQ",sigla3:"MTQ",codigo:"474"},{ordem:157,nome:"Maur\xedcio",sigla2:"MU",sigla3:"MUS",codigo:"480"},{ordem:158,nome:"Maurit\xe2nia",sigla2:"MR",sigla3:"MRT",codigo:"478"},{ordem:159,nome:"Mayotte",sigla2:"YT",sigla3:"MYT",codigo:"175"},{ordem:160,nome:"M\xe9xico",sigla2:"MX",sigla3:"MEX",codigo:"484"},{ordem:161,nome:"Micron\xe9sia",sigla2:"FM",sigla3:"FSM",codigo:"583"},{ordem:162,nome:"Mo\xe7ambique",sigla2:"MZ",sigla3:"MOZ",codigo:"508"},{ordem:163,nome:"Moldova",sigla2:"MD",sigla3:"MDA",codigo:"498"},{ordem:164,nome:"M\xf4naco",sigla2:"MC",sigla3:"MCO",codigo:"492"},{ordem:165,nome:"Mong\xf3lia",sigla2:"MN",sigla3:"MNG",codigo:"496"},{ordem:166,nome:"Montenegro",sigla2:"ME",sigla3:"MNE",codigo:"499"},{ordem:167,nome:"Montserrat",sigla2:"MS",sigla3:"MSR",codigo:"500"},{ordem:168,nome:"Myanma",sigla2:"MM",sigla3:"MMR",codigo:"104"},{ordem:169,nome:"Nam\xedbia",sigla2:"NA",sigla3:"NAM",codigo:"516"},{ordem:170,nome:"Nauru",sigla2:"NR",sigla3:"NRU",codigo:"520"},{ordem:171,nome:"Nepal",sigla2:"NP",sigla3:"NPL",codigo:"524"},{ordem:172,nome:"Nicar\xe1gua",sigla2:"NI",sigla3:"NIC",codigo:"558"},{ordem:173,nome:"N\xedger",sigla2:"NE",sigla3:"NER",codigo:"562"},{ordem:174,nome:"Nig\xe9ria",sigla2:"NG",sigla3:"NGA",codigo:"566"},{ordem:175,nome:"Niue",sigla2:"NU",sigla3:"NIU",codigo:"570"},{ordem:176,nome:"Noruega",sigla2:"NO",sigla3:"NOR",codigo:"578"},{ordem:177,nome:"Nova Caled\xf4nia",sigla2:"NC",sigla3:"NCL",codigo:"540"},{ordem:178,nome:"Nova Zel\xe2ndia",sigla2:"NZ",sigla3:"NZL",codigo:"554"},{ordem:179,nome:"Om\xe3",sigla2:"OM",sigla3:"OMN",codigo:"512"},{ordem:180,nome:"Palau",sigla2:"PW",sigla3:"PLW",codigo:"585"},{ordem:181,nome:"Panam\xe1",sigla2:"PA",sigla3:"PAN",codigo:"591"},{ordem:182,nome:"Papua-Nova Guin\xe9",sigla2:"PG",sigla3:"PNG",codigo:"598"},{ordem:183,nome:"Paquist\xe3o",sigla2:"PK",sigla3:"PAK",codigo:"586"},{ordem:184,nome:"Paraguai",sigla2:"PY",sigla3:"PRY",codigo:"600"},{ordem:185,nome:"Peru",sigla2:"PE",sigla3:"PER",codigo:"604"},{ordem:186,nome:"Polin\xe9sia Francesa",sigla2:"PF",sigla3:"PYF",codigo:"258"},{ordem:187,nome:"Pol\xf4nia",sigla2:"PL",sigla3:"POL",codigo:"616"},{ordem:188,nome:"Porto Rico",sigla2:"PR",sigla3:"PRI",codigo:"630"},{ordem:189,nome:"Portugal",sigla2:"PT",sigla3:"PRT",codigo:"620"},{ordem:190,nome:"Qatar",sigla2:"QA",sigla3:"QAT",codigo:"634"},{ordem:191,nome:"Quirguist\xe3o",sigla2:"KG",sigla3:"KGZ",codigo:"417"},{ordem:192,nome:"Rep\xfablica Centro-Africana",sigla2:"CF",sigla3:"CAF",codigo:"140"},{ordem:193,nome:"Rep\xfablica Democr\xe1tica do Congo",sigla2:"CD",sigla3:"COD",codigo:"180"},{ordem:194,nome:"Rep\xfablica Dominicana",sigla2:"DO",sigla3:"DOM",codigo:"214"},{ordem:195,nome:"Rep\xfablica Tcheca",sigla2:"CZ",sigla3:"CZE",codigo:"203"},{ordem:196,nome:"Rom\xeania",sigla2:"RO",sigla3:"ROM",codigo:"642"},{ordem:197,nome:"Ruanda",sigla2:"RW",sigla3:"RWA",codigo:"646"},{ordem:198,nome:"R\xfassia (antiga URSS) - Federa\xe7\xe3o Russa",sigla2:"RU",sigla3:"RUS",codigo:"643"},{ordem:199,nome:"Saara Ocidental",sigla2:"EH",sigla3:"ESH",codigo:"732"},{ordem:200,nome:"Saint Vincente e Granadinas",sigla2:"VC",sigla3:"VCT",codigo:"670"},{ordem:201,nome:"Samoa Americana",sigla2:"AS",sigla3:"ASM",codigo:"016"},{ordem:202,nome:"Samoa Ocidental",sigla2:"WS",sigla3:"WSM",codigo:"882"},{ordem:203,nome:"San Marino",sigla2:"SM",sigla3:"SMR",codigo:"674"},{ordem:204,nome:"Santa Helena",sigla2:"SH",sigla3:"SHN",codigo:"654"},{ordem:205,nome:"Santa L\xfacia",sigla2:"LC",sigla3:"LCA",codigo:"662"},{ordem:206,nome:"S\xe3o Bartolomeu",sigla2:"BL",sigla3:"BLM",codigo:"652"},{ordem:207,nome:"S\xe3o Crist\xf3v\xe3o e N\xe9vis",sigla2:"KN",sigla3:"KNA",codigo:"659"},{ordem:208,nome:"S\xe3o Martim",sigla2:"MF",sigla3:"MAF",codigo:"663"},{ordem:209,nome:"S\xe3o Tom\xe9 e Pr\xedncipe",sigla2:"ST",sigla3:"STP",codigo:"678"},{ordem:210,nome:"Senegal",sigla2:"SN",sigla3:"SEN",codigo:"686"},{ordem:211,nome:"Serra Leoa",sigla2:"SL",sigla3:"SLE",codigo:"694"},{ordem:212,nome:"S\xe9rvia",sigla2:"RS",sigla3:"SRB",codigo:"688"},{ordem:213,nome:"S\xedria",sigla2:"SY",sigla3:"SYR",codigo:"760"},{ordem:214,nome:"Som\xe1lia",sigla2:"SO",sigla3:"SOM",codigo:"706"},{ordem:215,nome:"Sri Lanka",sigla2:"LK",sigla3:"LKA",codigo:"144"},{ordem:216,nome:"St. Pierre and Miquelon",sigla2:"PM",sigla3:"SPM",codigo:"666"},{ordem:217,nome:"Suazil\xe2ndia",sigla2:"SZ",sigla3:"SWZ",codigo:"748"},{ordem:218,nome:"Sud\xe3o",sigla2:"SD",sigla3:"SDN",codigo:"736"},{ordem:219,nome:"Su\xe9cia",sigla2:"SE",sigla3:"SWE",codigo:"752"},{ordem:220,nome:"Su\xed\xe7a",sigla2:"CH",sigla3:"CHE",codigo:"756"},{ordem:221,nome:"Suriname",sigla2:"SR",sigla3:"SUR",codigo:"740"},{ordem:222,nome:"Tadjiquist\xe3o",sigla2:"TJ",sigla3:"TJK",codigo:"762"},{ordem:223,nome:"Tail\xe2ndia",sigla2:"TH",sigla3:"THA",codigo:"764"},{ordem:224,nome:"Taiwan",sigla2:"TW",sigla3:"TWN",codigo:"158"},{ordem:225,nome:"Tanz\xe2nia",sigla2:"TZ",sigla3:"TZA",codigo:"834"},{ordem:226,nome:"Territ\xf3rio Brit\xe2nico do Oceano \xedndico",sigla2:"IO",sigla3:"IOT",codigo:"086"},{ordem:227,nome:"Territ\xf3rios do Sul da Fran\xe7a",sigla2:"TF",sigla3:"ATF",codigo:"260"},{ordem:228,nome:"Territ\xf3rios Palestinos Ocupados",sigla2:"PS",sigla3:"PSE",codigo:"275"},{ordem:229,nome:"Timor Leste",sigla2:"TP",sigla3:"TMP",codigo:"626"},{ordem:230,nome:"Togo",sigla2:"TG",sigla3:"TGO",codigo:"768"},{ordem:231,nome:"Tonga",sigla2:"TO",sigla3:"TON",codigo:"776"},{ordem:232,nome:"Trinidad and Tobago",sigla2:"TT",sigla3:"TTO",codigo:"780"},{ordem:233,nome:"Tun\xedsia",sigla2:"TN",sigla3:"TUN",codigo:"788"},{ordem:234,nome:"Turcomenist\xe3o",sigla2:"TM",sigla3:"TKM",codigo:"795"},{ordem:235,nome:"Turquia",sigla2:"TR",sigla3:"TUR",codigo:"792"},{ordem:236,nome:"Tuvalu",sigla2:"TV",sigla3:"TUV",codigo:"798"},{ordem:237,nome:"Ucr\xe2nia",sigla2:"UA",sigla3:"UKR",codigo:"804"},{ordem:238,nome:"Uganda",sigla2:"UG",sigla3:"UGA",codigo:"800"},{ordem:239,nome:"Uruguai",sigla2:"UY",sigla3:"URY",codigo:"858"},{ordem:240,nome:"Uzbequist\xe3o",sigla2:"UZ",sigla3:"UZB",codigo:"860"},{ordem:241,nome:"Vanuatu",sigla2:"VU",sigla3:"VUT",codigo:"548"},{ordem:242,nome:"Vaticano",sigla2:"VA",sigla3:"VAT",codigo:"336"},{ordem:243,nome:"Venezuela",sigla2:"VE",sigla3:"VEN",codigo:"862"},{ordem:244,nome:"Vietn\xe3",sigla2:"VN",sigla3:"VNM",codigo:"704"},{ordem:245,nome:"Z\xe2mbia",sigla2:"ZM",sigla3:"ZMB",codigo:"894"},{ordem:246,nome:"Zimb\xe1bue",sigla2:"ZW",sigla3:"ZWE",codigo:"716"}];var $=function(){var e=Object(g.g)(),a=q({name:"",age:"",applicationText:"",profession:"",country:""}),o=a.form,n=a.onChange,l=a.resetValues,t=function(e){var a=e.target,o=a.value,i=a.name;n(i,o)},r=function(){Z.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/".concat(e.id,"/apply"),o).then((function(e){window.alert("Formul\xe1rio enviado com sucesso!"),l()})).catch((function(e){window.alert("Envio do formul\xe1rio falhou")}))};return i.a.createElement(A,null,i.a.createElement(R,null),i.a.createElement(I,null,i.a.createElement(D,{onSubmit:function(e){e.preventDefault(),r()}},i.a.createElement(O.a,{theme:S},i.a.createElement("h2",null,"Formul\xe1rio de Aplica\xe7\xe3o"),i.a.createElement(V,null,i.a.createElement(U,null,"Nome:"),i.a.createElement(X.a,{onChange:t,value:o.name,name:"name",type:"text",inputProps:{pattern:"[A-Za-z\xc0-\xfa ]{3,}",title:"O nome deve conter 3 letras no m\xednimo."},required:!0}),i.a.createElement(U,null,"Idade:"),i.a.createElement(X.a,{onChange:t,value:o.age,name:"age",type:"Number",inputProps:{min:"18"},required:!0}),i.a.createElement(U,null,"Profiss\xe3o:"),i.a.createElement(X.a,{onChange:t,value:o.profession,name:"profession",type:"text",inputProps:{pattern:".{10,}",title:"A profiss\xe3o deve conter no m\xednimo 10 caracteres."},required:!0}),i.a.createElement(U,null,"Pa\xeds:"),i.a.createElement(w,{onChange:t,value:o.country,name:"country",type:"text",required:!0},Q.map((function(e){return i.a.createElement(k.a,{key:e.ordem,value:e.nome},e.nome)}))),i.a.createElement(U,null,"Texto de Aplica\xe7\xe3o:"),i.a.createElement(X.a,{onChange:t,value:o.applicationText,name:"applicationText",type:"text",inputProps:{pattern:".{30,}",title:"O texto deve conter no m\xednimo 30 caracteres."},required:!0}),i.a.createElement(U,null,"Viagem:"),i.a.createElement(X.a,{value:e.viagem,disabled:!0})),i.a.createElement(p.a,{type:"submit",color:"primary",variant:"contained"},"Enviar")))))};function _(){var e=Object(s.a)(["\n  height: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: transparent;\n  padding: 20px 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n  img {\n      width: 130px;\n      cursor: pointer;\n\n      :hover {\n        opacity: 0.8;\n      }\n  }\n"]);return _=function(){return e},e}var ee=u.a.div(_());var ae=function(){var e=Object(g.f)();return i.a.createElement(ee,null,i.a.createElement("img",{alt:"LabeX",onClick:function(){e.push("/")},src:d.a}))},oe=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),o=a[0],i=a[1];return[o,i,function(e){i(e.target.value)}]};var ne=function(){var e=Object(g.f)(),a=oe(),o=Object(c.a)(a,3),n=o[0],l=(o[1],o[2]),t=oe(),r=Object(c.a)(t,3),s=r[0],m=(r[1],r[2]),d=function(){var a={email:n,password:s};Z.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/login",a).then((function(a){localStorage.setItem("token",a.data.token),e.push("/lista-viagens/")})).catch((function(e){window.alert("Login falhou")}))};return i.a.createElement(A,null,i.a.createElement(ae,null),i.a.createElement(I,null,i.a.createElement(D,null,i.a.createElement(O.a,{theme:S},i.a.createElement("h2",null,"Login"),i.a.createElement(V,null,i.a.createElement(U,null,"Email:"),i.a.createElement(X.a,{onChange:l,value:n}),i.a.createElement(U,null,"Senha:"),i.a.createElement(X.a,{type:"password",onChange:m,value:s})),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:d},"Entrar"),i.a.createElement("h2",null,"Cadastre-se"),i.a.createElement(V,null,i.a.createElement(U,null,"Email:"),i.a.createElement(X.a,{disabled:!0}),i.a.createElement(U,null,"Senha:"),i.a.createElement(X.a,{disabled:!0})),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:d,disabled:!0},"Cadastrar")))))};function ie(){var e=Object(s.a)(["\nbackground-color: transparent;\npadding: 5px 5px;\ncolor: white;\nborder: none;\nborder-radius: 7px;\nfont-size: 17px;\nmargin-left: 50px;\n"]);return ie=function(){return e},e}function le(){var e=Object(s.a)(["\npadding: 5px 5px;\nbackground-color: transparent;\ncolor: #FF5F00;\nborder: none;\nborder-radius: 7px;\nfont-size: 17px;\ncursor: pointer;\nmargin-left: 20px;\n\n:hover {\n  opacity: 0.8;\n}\n"]);return le=function(){return e},e}function te(){var e=Object(s.a)(["\nbackground-color: transparent;\ntext-align: right;\npadding: 2px 20px;\nborder-bottom: 1px solid rgba(255, 255, 255, 0.2);\n"]);return te=function(){return e},e}var re=u.a.div(te()),ge=u.a.button(le()),ce=u.a.button(ie());function se(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: transparent;\n  padding: 20px 20px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n\n  img {\n      width: 130px;\n      cursor: pointer;\n\n      :hover {\n        opacity: 0.8;\n      }\n  }\n\n  button {\n      color: white;\n      border-color: white;\n      cursor: pointer;\n\n      :hover {\n        opacity: 0.8;\n      }\n  }\n"]);return se=function(){return e},e}var me=u.a.div(se());var de=function(e){var a=Object(g.f)(),o=function(){localStorage.clear(),a.push("/")};return i.a.createElement(me,null,i.a.createElement(O.a,{theme:S},i.a.createElement("img",{alt:"LabeX",onClick:o,src:d.a}),i.a.createElement(p.a,{variant:"outlined",color:"primary",onClick:o},"Logout")))},ue=o(152);var pe=function(){var e=Object(g.f)(),a=q({name:"",planet:"",date:"",description:"",durationInDays:""}),o=a.form,l=a.onChange,t=a.resetValues,r=function(e){var a=e.target,o=a.value,n=a.name;l(n,o)};Object(n.useEffect)((function(){null===localStorage.getItem("token")&&e.push("/")}),[e]);var c=function(){Z.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips",o,{headers:{auth:localStorage.getItem("token")}}).then((function(e){window.alert("Viagem ".concat(e.data.trip.name," criada com sucesso!")),t()})).catch((function(e){window.alert("Cadastrar viagem falhou")}))},s=new Date,m=s.getDate(),d=s.getMonth()+1,u=s.getFullYear();return m<10&&(m="0"+m),d<10&&(d="0"+d),s=u+"-"+d+"-"+m,i.a.createElement(A,null,i.a.createElement(de,null),i.a.createElement(re,null,i.a.createElement(ge,{onClick:function(){e.push("/lista-viagens")}},"Lista de Viagens"),i.a.createElement(ce,null,"Criar Viagem")),i.a.createElement(I,null,i.a.createElement(D,{onSubmit:function(e){e.preventDefault(),console.log("form",o),c()}},i.a.createElement(O.a,{theme:S},i.a.createElement("h2",null,"Criar Viagem"),i.a.createElement(V,null,i.a.createElement(U,null,"Nome:"),i.a.createElement(X.a,{onChange:r,value:o.name,name:"name",type:"text",inputProps:{pattern:"[A-Za-z\xc0-\xfa ]{5,}",title:"O nome deve conter no m\xednimo 5 letras."},required:!0}),i.a.createElement(U,null,"Planeta:"),i.a.createElement(w,{onChange:r,value:o.planet,name:"planet",type:"text"},z.map((function(e,a){return i.a.createElement(k.a,{key:a,value:e},e)}))),!o.planet&&i.a.createElement(ue.a,null,"Campo obrigat\xf3rio!"),i.a.createElement(U,null,"Dura\xe7\xe3o:"),i.a.createElement(X.a,{onChange:r,value:o.durationInDays,name:"durationInDays",type:"Number",inputProps:{min:"50"},required:!0}),i.a.createElement(U,null,"Data:"),i.a.createElement(X.a,{onChange:r,value:o.date,name:"date",type:"date",inputProps:{min:s},required:!0}),i.a.createElement(U,null,"Descri\xe7\xe3o:"),i.a.createElement(X.a,{onChange:r,value:o.description,name:"description",type:"text",inputProps:{pattern:"[A-Za-z\xc0-\xfa,.?!0-9 ]{30,}",title:"A descri\xe7\xe3o deve conter no m\xednimo 50 letras."},required:!0}),i.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Enviar"))))))};var Ee=function(){var e,a=Object(g.f)(),o=Object(g.g)(),l=oe(),t=Object(c.a)(l,2),r=t[0],s=t[1];Object(n.useEffect)((function(){null===localStorage.getItem("token")&&a.push("/"),m()}),[s,a]);var m=function(){Z.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trip/".concat(o.id),{headers:{auth:localStorage.getItem("token")}}).then((function(e){s(e.data.trip)})).catch((function(e){window.alert("Buscar candidatos falhou.")}))},d=function(e,a){var n={approve:a};Z.a.put("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/".concat(o.id,"/candidates/").concat(e,"/decide"),n,{headers:{auth:localStorage.getItem("token")}}).then((function(e){a?window.alert("Candidato aprovado com sucesso!"):window.alert("Candidato rejeitado."),m()})).catch((function(e){a?window.alert("Aprovar cadidato falhou."):window.alert("Rejeitar cadidato falhou.")}))};return r&&(e=r.candidates.map((function(e,a){return i.a.createElement("div",{key:a},i.a.createElement("p",null,i.a.createElement("b",null,"Nome:")," ",e.name),i.a.createElement("p",null,i.a.createElement("b",null,"Idade:")," ",e.age),i.a.createElement("p",null,i.a.createElement("b",null,"Profiss\xe3o:")," ",e.profession),i.a.createElement("p",null,i.a.createElement("b",null,"Pa\xeds:")," ",e.country),i.a.createElement("p",null,i.a.createElement("b",null,"Texto de Aplica\xe7\xe3o:")," ",e.applicationText),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return d(e.id,!0)}},"Aprovar"),i.a.createElement("label",null," "),i.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:function(){return d(e.id,!1)}},"Rejeitar"),i.a.createElement("hr",null))}))),i.a.createElement(A,null,i.a.createElement(de,null),i.a.createElement(O.a,{theme:S},i.a.createElement(re,null,i.a.createElement(ge,{onClick:function(){a.push("/lista-viagens")}},"Lista de Viagens"),i.a.createElement(ge,{onClick:function(){a.push("/criar-viagem")}},"Criar Viagem")),i.a.createElement(I,null,i.a.createElement(D,null,i.a.createElement("h2",null,o.viagem),i.a.createElement("h2",null,"Candidatos"),e))))},fe=o(80),he=o.n(fe),be=o(153);function ve(){var e=Object(s.a)(["\n  width: 200px;\n"]);return ve=function(){return e},e}var Me=Object(u.a)(x.a)(ve());var Ce=function(){var e=Object(g.f)(),a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],t=o[1],r=Object(n.useState)(""),s=Object(c.a)(r,2),m=s[0],d=s[1],u=function(){Z.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips").then((function(e){t(e.data.trips)})).catch((function(e){window.alert("Listar Viagens falhou")}))};Object(n.useEffect)((function(){null===localStorage.getItem("token")&&e.push("/"),u()}),[t,e]);var E=function(){h&&Z.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/".concat(h[0].id)).then((function(e){window.alert("Viagem ".concat(h[0].name," deletada com sucesso!")),u()})).catch((function(e){console.log("Erro em Delete Trip: ",e)}))},f=l.map((function(e,a){return i.a.createElement(k.a,{key:a,value:e.name},e.name)})),h=l.filter((function(e){if(e.name===m)return e}));return i.a.createElement(A,null,i.a.createElement(de,null),i.a.createElement(re,null,i.a.createElement(ce,null,"Lista de Viagens"),i.a.createElement(ge,{onClick:function(){e.push("/criar-viagem")}},"Criar Viagem")),i.a.createElement(I,null,i.a.createElement(D,null,i.a.createElement(O.a,{theme:S},i.a.createElement(K.a,{variant:"filled"},i.a.createElement(F.a,{id:"select-label"},"Viagem"),i.a.createElement(Me,{labelId:"select-label",onChange:function(e){d(e.target.value)},value:m},f)),l.filter((function(e){if(e.name===m)return e})).map((function(e,a){return i.a.createElement("div",{key:a},i.a.createElement("h2",null,e.name),i.a.createElement("p",null,i.a.createElement("b",null,"Planeta:")," ",e.planet),i.a.createElement("p",null,i.a.createElement("b",null,"Data:")," ",e.date),i.a.createElement("p",null,i.a.createElement("b",null,"Dura\xe7\xe3o em dias:")," ",e.durationInDays),i.a.createElement("p",null,i.a.createElement("b",null,"Descri\xe7\xe3o:")," ",e.description))})),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){h.length&&e.push("/detalhes-viagem/".concat(h[0].name,"/").concat(h[0].id))}},"Ver Detalhes da Viagem"),i.a.createElement(be.a,{onClick:function(){window.confirm("Tem certeza que deseja deletar a viagem ".concat(m,"?"))&&E()}},i.a.createElement(he.a,null))))))};var Se=function(){return i.a.createElement(r.a,null,i.a.createElement(g.c,null,i.a.createElement(g.a,{exact:!0,path:"/detalhes-viagem/:viagem/:id"},i.a.createElement(Ee,null)),i.a.createElement(g.a,{exact:!0,path:"/criar-viagem"},i.a.createElement(pe,null)),i.a.createElement(g.a,{exact:!0,path:"/lista-viagens"},i.a.createElement(Ce,null)),i.a.createElement(g.a,{exact:!0,path:"/login"},i.a.createElement(ne,null)),i.a.createElement(g.a,{exact:!0,path:"/formulario/:viagem/:id"},i.a.createElement($,null)),i.a.createElement(g.a,{exact:!0,path:"/"},i.a.createElement(Y,null))))};var Ae=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,a,o){e.exports=o.p+"static/media/labex.efe07d92.png"},88:function(e,a,o){e.exports=o(118)},93:function(e,a,o){},94:function(e,a,o){}},[[88,1,2]]]);
//# sourceMappingURL=main.32501ab8.chunk.js.map