// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

const FLAG_CODES = {"Mexique":"mx","Afrique du Sud":"za","Rép. de Corée":"kr","Rép. Tchèque":"cz","Canada":"ca","Bosnie-Herzég.":"ba","Qatar":"qa","Suisse":"ch","Brésil":"br","Maroc":"ma","Haïti":"ht","Écosse":"gb-sct","USA":"us","Paraguay":"py","Australie":"au","Turquie":"tr","Allemagne":"de","Curaçao":"cw","Côte d'Ivoire":"ci","Équateur":"ec","Pays-Bas":"nl","Japon":"jp","Suède":"se","Tunisie":"tn","Belgique":"be","Egypte":"eg","RI Iran":"ir","Nouv.-Zélande":"nz","Espagne":"es","Cap-Vert":"cv","Arabie Saoudite":"sa","Uruguay":"uy","France":"fr","Sénégal":"sn","Irak":"iq","Norvège":"no","Argentine":"ar","Algérie":"dz","Autriche":"at","Jordanie":"jo","Portugal":"pt","RD Congo":"cd","Ouzbékistan":"uz","Colombie":"co","Angleterre":"gb-eng","Croatie":"hr","Ghana":"gh","Panama":"pa"};

function FLAGS(team) {
  const code = FLAG_CODES[team];
  if (!code) return '<span style="width:20px;display:inline-block"></span>';
  return `<img src="https://flagcdn.com/${code}.svg" width="20" height="14" style="border-radius:2px;object-fit:cover;vertical-align:middle;flex-shrink:0" alt="${team}">`;
}

const GROUPS = {
  A:["Mexique","Afrique du Sud","Rép. de Corée","Rép. Tchèque"],
  B:["Canada","Bosnie-Herzég.","Qatar","Suisse"],
  C:["Brésil","Maroc","Haïti","Écosse"],
  D:["USA","Paraguay","Australie","Turquie"],
  E:["Allemagne","Curaçao","Côte d'Ivoire","Équateur"],
  F:["Pays-Bas","Japon","Suède","Tunisie"],
  G:["Belgique","Egypte","RI Iran","Nouv.-Zélande"],
  H:["Espagne","Cap-Vert","Arabie Saoudite","Uruguay"],
  I:["France","Sénégal","Irak","Norvège"],
  J:["Argentine","Algérie","Autriche","Jordanie"],
  K:["Portugal","RD Congo","Ouzbékistan","Colombie"],
  L:["Angleterre","Croatie","Ghana","Panama"]
};

const GROUP_MATCHES = [
  {no:1,g:'A',s1:'A1',s2:'A2',d:'11 juin',v:'Mexico City'},
  {no:2,g:'A',s1:'A3',s2:'A4',d:'11 juin',v:'Guadalajara'},
  {no:3,g:'B',s1:'B1',s2:'B2',d:'12 juin',v:'Toronto'},
  {no:4,g:'D',s1:'D1',s2:'D2',d:'12 juin',v:'Los Angeles'},
  {no:5,g:'C',s1:'C3',s2:'C4',d:'13 juin',v:'Boston'},
  {no:6,g:'D',s1:'D3',s2:'D4',d:'14 juin',v:'Vancouver'},
  {no:7,g:'C',s1:'C1',s2:'C2',d:'13 juin',v:'New York'},
  {no:8,g:'B',s1:'B3',s2:'B4',d:'13 juin',v:'San Francisco'},
  {no:9,g:'E',s1:'E3',s2:'E4',d:'14 juin',v:'Philadelphia'},
  {no:10,g:'E',s1:'E1',s2:'E2',d:'14 juin',v:'Houston'},
  {no:11,g:'F',s1:'F1',s2:'F2',d:'14 juin',v:'Dallas'},
  {no:12,g:'F',s1:'F3',s2:'F4',d:'14 juin',v:'Monterrey'},
  {no:13,g:'H',s1:'H3',s2:'H4',d:'15 juin',v:'Miami'},
  {no:14,g:'H',s1:'H1',s2:'H2',d:'15 juin',v:'Atlanta'},
  {no:15,g:'G',s1:'G3',s2:'G4',d:'15 juin',v:'Los Angeles'},
  {no:16,g:'G',s1:'G1',s2:'G2',d:'15 juin',v:'Seattle'},
  {no:17,g:'I',s1:'I1',s2:'I2',d:'16 juin',v:'New York'},
  {no:18,g:'I',s1:'I3',s2:'I4',d:'16 juin',v:'Boston'},
  {no:19,g:'J',s1:'J1',s2:'J2',d:'16 juin',v:'Kansas City'},
  {no:20,g:'J',s1:'J3',s2:'J4',d:'17 juin',v:'San Francisco'},
  {no:21,g:'L',s1:'L3',s2:'L4',d:'17 juin',v:'Toronto'},
  {no:22,g:'L',s1:'L1',s2:'L2',d:'17 juin',v:'Dallas'},
  {no:23,g:'K',s1:'K1',s2:'K2',d:'17 juin',v:'Houston'},
  {no:24,g:'K',s1:'K3',s2:'K4',d:'17 juin',v:'Mexico City'},
  {no:25,g:'A',s1:'A4',s2:'A2',d:'18 juin',v:'Atlanta'},
  {no:26,g:'B',s1:'B4',s2:'B2',d:'18 juin',v:'Los Angeles'},
  {no:27,g:'B',s1:'B1',s2:'B3',d:'18 juin',v:'Vancouver'},
  {no:28,g:'A',s1:'A1',s2:'A3',d:'18 juin',v:'Guadalajara'},
  {no:29,g:'C',s1:'C1',s2:'C3',d:'19 juin',v:'Philadelphia'},
  {no:30,g:'C',s1:'C4',s2:'C2',d:'19 juin',v:'Boston'},
  {no:31,g:'D',s1:'D4',s2:'D2',d:'20 juin',v:'San Francisco'},
  {no:32,g:'D',s1:'D1',s2:'D3',d:'19 juin',v:'Seattle'},
  {no:33,g:'E',s1:'E1',s2:'E3',d:'20 juin',v:'Toronto'},
  {no:34,g:'E',s1:'E4',s2:'E2',d:'20 juin',v:'Kansas City'},
  {no:35,g:'F',s1:'F1',s2:'F3',d:'20 juin',v:'Houston'},
  {no:36,g:'F',s1:'F4',s2:'F2',d:'21 juin',v:'Monterrey'},
  {no:37,g:'H',s1:'H4',s2:'H2',d:'21 juin',v:'Miami'},
  {no:38,g:'H',s1:'H1',s2:'H3',d:'21 juin',v:'Atlanta'},
  {no:39,g:'G',s1:'G1',s2:'G3',d:'21 juin',v:'Los Angeles'},
  {no:40,g:'G',s1:'G4',s2:'G2',d:'21 juin',v:'Vancouver'},
  {no:41,g:'I',s1:'I4',s2:'I2',d:'22 juin',v:'New York'},
  {no:42,g:'I',s1:'I1',s2:'I3',d:'22 juin',v:'Philadelphia'},
  {no:43,g:'J',s1:'J1',s2:'J3',d:'22 juin',v:'Dallas'},
  {no:44,g:'J',s1:'J4',s2:'J2',d:'22 juin',v:'San Francisco'},
  {no:45,g:'L',s1:'L1',s2:'L3',d:'23 juin',v:'Boston'},
  {no:46,g:'L',s1:'L4',s2:'L2',d:'23 juin',v:'Toronto'},
  {no:47,g:'K',s1:'K1',s2:'K3',d:'23 juin',v:'Houston'},
  {no:48,g:'K',s1:'K4',s2:'K2',d:'23 juin',v:'Guadalajara'},
  {no:49,g:'C',s1:'C4',s2:'C1',d:'24 juin',v:'Miami'},
  {no:50,g:'C',s1:'C2',s2:'C3',d:'24 juin',v:'Atlanta'},
  {no:51,g:'B',s1:'B4',s2:'B1',d:'24 juin',v:'Vancouver'},
  {no:52,g:'B',s1:'B2',s2:'B3',d:'24 juin',v:'Seattle'},
  {no:53,g:'A',s1:'A4',s2:'A1',d:'24 juin',v:'Mexico City'},
  {no:54,g:'A',s1:'A2',s2:'A3',d:'24 juin',v:'Monterrey'},
  {no:55,g:'E',s1:'E2',s2:'E3',d:'25 juin',v:'Philadelphia'},
  {no:56,g:'E',s1:'E4',s2:'E1',d:'25 juin',v:'New York'},
  {no:57,g:'F',s1:'F2',s2:'F3',d:'25 juin',v:'Dallas'},
  {no:58,g:'F',s1:'F4',s2:'F1',d:'25 juin',v:'Kansas City'},
  {no:59,g:'D',s1:'D4',s2:'D1',d:'25 juin',v:'Los Angeles'},
  {no:60,g:'D',s1:'D2',s2:'D3',d:'25 juin',v:'San Francisco'},
  {no:61,g:'I',s1:'I4',s2:'I1',d:'26 juin',v:'Boston'},
  {no:62,g:'I',s1:'I2',s2:'I3',d:'26 juin',v:'Toronto'},
  {no:63,g:'G',s1:'G2',s2:'G3',d:'26 juin',v:'Seattle'},
  {no:64,g:'G',s1:'G4',s2:'G1',d:'26 juin',v:'Vancouver'},
  {no:65,g:'H',s1:'H2',s2:'H3',d:'26 juin',v:'Houston'},
  {no:66,g:'H',s1:'H4',s2:'H1',d:'26 juin',v:'Guadalajara'},
  {no:67,g:'L',s1:'L4',s2:'L1',d:'27 juin',v:'New York'},
  {no:68,g:'L',s1:'L2',s2:'L3',d:'27 juin',v:'Philadelphia'},
  {no:69,g:'J',s1:'J2',s2:'J3',d:'27 juin',v:'Kansas City'},
  {no:70,g:'J',s1:'J4',s2:'J1',d:'27 juin',v:'Dallas'},
  {no:71,g:'K',s1:'K4',s2:'K1',d:'27 juin',v:'Miami'},
  {no:72,g:'K',s1:'K2',s2:'K3',d:'27 juin',v:'Atlanta'}
];

const KO_ROUNDS = [
  {name:'16es de finale', ids:[73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]},
  {name:'8es de finale',  ids:[89,90,91,92,93,94,95,96]},
  {name:'Quarts',         ids:[97,98,99,100]},
  {name:'Demi-finales',   ids:[101,102]},
  {name:'Finale',         ids:[104]}
];

const KO_DEFS = {
  73:{s1:'2A',s2:'2B',d:'28 juin',v:'Los Angeles'},
  74:{s1:'1E',s2:'3ABCDF',d:'29 juin',v:'Boston'},
  75:{s1:'1F',s2:'2C',d:'29 juin',v:'Monterrey'},
  76:{s1:'1C',s2:'2F',d:'29 juin',v:'Houston'},
  77:{s1:'1I',s2:'3CDFGH',d:'30 juin',v:'New York'},
  78:{s1:'2E',s2:'2I',d:'30 juin',v:'Dallas'},
  79:{s1:'1A',s2:'3CEFHI',d:'30 juin',v:'Mexico City'},
  80:{s1:'1L',s2:'3EHIJK',d:'1 juil.',v:'Atlanta'},
  81:{s1:'1D',s2:'3BEFIJ',d:'1 juil.',v:'San Francisco'},
  82:{s1:'1G',s2:'3AEHIJ',d:'1 juil.',v:'Seattle'},
  83:{s1:'2K',s2:'2L',d:'2 juil.',v:'Toronto'},
  84:{s1:'1H',s2:'2J',d:'2 juil.',v:'Los Angeles'},
  85:{s1:'1B',s2:'3EFGIJ',d:'2 juil.',v:'Vancouver'},
  86:{s1:'1J',s2:'2H',d:'3 juil.',v:'Miami'},
  87:{s1:'1K',s2:'3DEIJL',d:'3 juil.',v:'Kansas City'},
  88:{s1:'2D',s2:'2G',d:'3 juil.',v:'Dallas'},
  89:{f1:74,f2:77,d:'4 juil.',v:'Philadelphia'},
  90:{f1:73,f2:75,d:'4 juil.',v:'Houston'},
  91:{f1:76,f2:78,d:'5 juil.',v:'New York'},
  92:{f1:79,f2:80,d:'5 juil.',v:'Mexico City'},
  93:{f1:83,f2:84,d:'6 juil.',v:'Dallas'},
  94:{f1:81,f2:82,d:'6 juil.',v:'Seattle'},
  95:{f1:86,f2:88,d:'7 juil.',v:'Atlanta'},
  96:{f1:85,f2:87,d:'7 juil.',v:'Vancouver'},
  97:{f1:89,f2:90,d:'9 juil.',v:'Boston'},
  98:{f1:93,f2:94,d:'10 juil.',v:'Los Angeles'},
  99:{f1:91,f2:92,d:'11 juil.',v:'Miami'},
  100:{f1:95,f2:96,d:'11 juil.',v:'Kansas City'},
  101:{f1:97,f2:98,d:'14 juil.',v:'Dallas'},
  102:{f1:99,f2:100,d:'15 juil.',v:'Atlanta'},
  103:{f1:101,f2:102,isLoser:true,d:'18 juil.',v:'Miami'},
  104:{f1:101,f2:102,d:'19 juil.',v:'New York'}
};

const THIRD_ASSIGN = {"EFGHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"F","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"DFGHIJKL":{"3CEFHI":"H","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"DEGHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"DEFHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"DEFGIJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"DEFGHJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"DEFGHIKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"DEFGHIJL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"DEFGHIJK":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CFGHIJKL":{"3CEFHI":"H","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CEGHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"CEFHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CEFGIJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CEFGHJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CEFGHIKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CEFGHIJL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"CEFGHIJK":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CDGHIJKL":{"3CEFHI":"H","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"J","3CDFGH":"D","3DEIJL":"L","3EHIJK":"K"},"CDFHIJKL":{"3CEFHI":"C","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDFGIJKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDFGHJKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDFGHIKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDFGHIJL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"CDFGHIJK":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CDEHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"D","3DEIJL":"L","3EHIJK":"K"},"CDEGIJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"J","3CDFGH":"D","3DEIJL":"L","3EHIJK":"K"},"CDEGHJKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"D","3DEIJL":"L","3EHIJK":"K"},"CDEGHIKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"I","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"D","3DEIJL":"L","3EHIJK":"K"},"CDEGHIJL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"D","3DEIJL":"L","3EHIJK":"I"},"CDEGHIJK":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"C","3AEHIJ":"H","3CDFGH":"D","3DEIJL":"I","3EHIJK":"K"},"CDEFIJKL":{"3CEFHI":"C","3EFGIJ":"J","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"I","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFHJKL":{"3CEFHI":"C","3EFGIJ":"J","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFHIKL":{"3CEFHI":"C","3EFGIJ":"E","3BEFIJ":"I","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFHIJL":{"3CEFHI":"C","3EFGIJ":"J","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"CDEFHIJK":{"3CEFHI":"C","3EFGIJ":"J","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CDEFGJKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFGIKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"I","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFGIJL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"CDEFGIJK":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"J","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CDEFGHKL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"K"},"CDEFGHJL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"E"},"CDEFGHJK":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"E","3EHIJK":"K"},"CDEFGHIL":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"L","3EHIJK":"I"},"CDEFGHIK":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"E","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"I","3EHIJK":"K"},"CDEFGHIJ":{"3CEFHI":"C","3EFGIJ":"G","3BEFIJ":"J","3ABCDF":"D","3AEHIJ":"H","3CDFGH":"F","3DEIJL":"E","3EHIJK":"I"},"BFGHIJKL":{"3CEFHI":"H","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"I","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"BEGHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"I","3ABCDF":"B","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"BEFHIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"I","3CDFGH":"H","3DEIJL":"L","3EHIJK":"K"},"BEFGIJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"I","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"BEFGHJKL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"K"},"BEFGHIKL":{"3CEFHI":"E","3EFGIJ":"G","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"I","3CDFGH":"H","3DEIJL":"L","3EHIJK":"K"},"BEFGHIJL":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"L","3EHIJK":"I"},"BEFGHIJK":{"3CEFHI":"E","3EFGIJ":"J","3BEFIJ":"B","3ABCDF":"F","3AEHIJ":"H","3CDFGH":"G","3DEIJL":"I","3EHIJK":"K"},"BCEFGHIJ":{"3CEFHI":"H","3EFGIJ":"G","3BEFIJ":"B","3ABCDF":"C","3AEHIJ":"A","3CDFGH":"F","3DEIJL":"E","3EHIJK":"I"},"ABCDEFGH":{"3CEFHI":"H","3EFGIJ":"G","3BEFIJ":"B","3ABCDF":"C","3AEHIJ":"A","3CDFGH":"F","3DEIJL":"D","3EHIJK":"E"}};

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let ST = { scores:{}, ko:{} };
let activeGroup = 'all'; // group filter state
let darkMode = true;

function load() {
  try {
    const s = localStorage.getItem('wc2026');
    if (s) ST = JSON.parse(s);
    const theme = localStorage.getItem('wc2026_theme');
    if (theme === 'light') { darkMode = false; document.body.classList.add('light'); }
  } catch(e) {}
}
function save() { localStorage.setItem('wc2026', JSON.stringify(ST)); }

// ═══════════════════════════════════════════════════════════
// ENGINE
// ═══════════════════════════════════════════════════════════
function teamOf(slot) { return GROUPS[slot[0]][parseInt(slot[1])-1]; }
function getScore(no) { return ST.scores[no] || {g1:null,g2:null}; }
function hasScore(no) { const s=getScore(no); return s.g1!==null && s.g2!==null; }
function hasPartial(no) { const s=getScore(no); return (s.g1!==null) !== (s.g2!==null); }

function computeStandings(grp) {
  const teams = GROUPS[grp];
  const stats = {};
  teams.forEach(t => stats[t]={pts:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,mp:0});
  GROUP_MATCHES.filter(m=>m.g===grp).forEach(m=>{
    if (!hasScore(m.no)) return;
    const s=getScore(m.no), t1=teamOf(m.s1), t2=teamOf(m.s2), g1=s.g1, g2=s.g2;
    stats[t1].mp++; stats[t2].mp++;
    stats[t1].gf+=g1; stats[t1].ga+=g2; stats[t1].gd+=g1-g2;
    stats[t2].gf+=g2; stats[t2].ga+=g1; stats[t2].gd+=g2-g1;
    if(g1>g2){ stats[t1].pts+=3; stats[t1].w++; stats[t2].l++; }
    else if(g1===g2){ stats[t1].pts++; stats[t1].d++; stats[t2].pts++; stats[t2].d++; }
    else { stats[t2].pts+=3; stats[t2].w++; stats[t1].l++; }
  });
  return teams.map(t=>({name:t,...stats[t]}))
    .sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.name.localeCompare(b.name));
}

function getTeamByPos(grp,pos) { return computeStandings(grp)[pos-1]?.name||null; }

function getBest8Thirds() {
  const thirds=[];
  Object.keys(GROUPS).forEach(g=>{
    const s=computeStandings(g);
    if(s[2]&&s[2].mp>=3) thirds.push({grp:g,...s[2]});
  });
  thirds.sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.name.localeCompare(b.name));
  return thirds.slice(0,8);
}

function getThirdFor(slot) {
  const best8=getBest8Thirds();
  if(best8.length<8) return null;
  const combo=best8.map(t=>t.grp).sort().join('');
  const assign=THIRD_ASSIGN[combo];
  if(!assign) return null;
  const grp=assign[slot];
  const found=best8.find(t=>t.grp===grp);
  return found?found.name:null;
}

function resolveKOTeam(matchId,side) {
  const def=KO_DEFS[matchId];
  const src=side===1?def.s1:def.s2;
  if(src) {
    if(/^[12][A-L]$/.test(src)) return getTeamByPos(src[1],parseInt(src[0]));
    if(src.startsWith('3')) return getThirdFor(src);
  }
  const fid=side===1?def.f1:def.f2;
  if(fid) {
    const fdef=KO_DEFS[fid];
    if(fdef&&fdef.isLoser) {
      const sfId=side===1?fdef.f1:fdef.f2;
      const sfWin=ST.ko[sfId];
      if(!sfWin) return null;
      const t1=resolveKOTeam(sfId,1),t2=resolveKOTeam(sfId,2);
      return t1===sfWin?t2:t1;
    }
    return ST.ko[fid]||null;
  }
  return null;
}

// ── Next unscored match ──
function getNextMatch() {
  return GROUP_MATCHES.find(m=>!hasScore(m.no))||null;
}

function updateNextMatch() {
  const m=getNextMatch();
  const el=document.getElementById('hdr-next');
  if(!el) return;
  if(!m) { el.innerHTML='<span class="hdr-next-badge">✓</span> Tous les matchs saisis'; return; }
  const t1=teamOf(m.s1),t2=teamOf(m.s2);
  el.innerHTML=`<span class="hdr-next-badge">Prochain</span>${FLAGS(t1)} ${t1} <span style="color:var(--txd);font-size:10px">vs</span> ${FLAGS(t2)} ${t2} <span style="color:var(--txd)">· ${m.d} · ${m.v}</span>`;
}

// ═══════════════════════════════════════════════════════════
// RENDER: GROUPS
// ═══════════════════════════════════════════════════════════
function renderGroups() {
  const el=document.getElementById('sec-groupes');
  const done=GROUP_MATCHES.filter(m=>hasScore(m.no)).length;
  const pct=Math.round(done/72*100);
  const grpKeys=Object.keys(GROUPS);

  let html=`<div class="sec-head"><div><div class="sec-title">Phase de groupes</div><div class="sec-sub">Saisissez les 72 scores · les classements se calculent automatiquement</div></div></div>`;
  html+=`<div class="pbar"><span class="pbar-label">Scores saisis</span><div class="pbar-track"><div class="pbar-fill" style="width:${pct}%"></div></div><span class="pbar-val">${done}/72</span></div>`;

  // Group filter
  html+=`<div class="group-filter"><span class="gf-label">Groupe</span>`;
  html+=`<button class="gf-pill all ${activeGroup==='all'?'on':''}" onclick="setFilter('all')">Tous</button>`;
  grpKeys.forEach(g=>{
    const allDone=GROUP_MATCHES.filter(m=>m.g===g).every(m=>hasScore(m.no));
    html+=`<button class="gf-pill ${activeGroup===g?'on':''}" onclick="setFilter('${g}')">${g}${allDone?' ✓':''}</button>`;
  });
  html+=`</div>`;

  // Groups grid
  html+=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(540px,1fr));gap:1.2rem">`;
  grpKeys.forEach(grp=>{
    if(activeGroup!=='all'&&activeGroup!==grp) return;
    const standings=computeStandings(grp);
    const gmatches=GROUP_MATCHES.filter(m=>m.g===grp);

    html+=`<div>`;
    // Mini standings
    html+=`<div class="gc" style="margin-bottom:8px"><div class="gc-head"><span class="gc-label">Groupe ${grp}</span></div><ul class="gc-teams">`;
    standings.forEach((t,i)=>{
      const badge=i===0?`<span class="gc-badge badge-1">1er</span>`:i===1?`<span class="gc-badge badge-2">2e</span>`:'';
      const rankStyle=i<2?`background:var(--${i===0?'gold':'blue'}-dim);color:var(--${i===0?'gold':'blue'})`:'';
      html+=`<li class="gc-team">
        <div class="gc-rank" style="${rankStyle}">${i+1}</div>
        <span class="gc-flag">${FLAGS(t.name)}</span>
        <span class="gc-name">${t.name}</span>
        <span style="font-size:11px;color:var(--txm);margin-left:auto;padding-right:6px">${t.mp>0?`${t.pts}pts ${t.gf}:${t.ga}`:''}</span>
        ${badge}
      </li>`;
    });
    html+=`</ul></div>`;

    // Match score inputs
    html+=`<div class="match-list">`;
    gmatches.forEach(m=>{
      const t1=teamOf(m.s1),t2=teamOf(m.s2),sc=getScore(m.no);
      const rowCls=hasScore(m.no)?'scored':hasPartial(m.no)?'partial':'';
      html+=`<div class="match-row ${rowCls}" id="mr-${m.no}">
        <span class="mr-num">M${m.no}</span>
        <div class="mr-team">${FLAGS(t1)}<span class="mr-name">${t1}</span></div>
        <div class="mr-score">
          <input class="score-inp" type="number" min="0" max="20" value="${sc.g1??''}" placeholder="–" data-m="${m.no}" data-s="1" oninput="onScore(this)" onkeydown="tabScore(event,this)">
          <span class="score-sep">:</span>
          <input class="score-inp" type="number" min="0" max="20" value="${sc.g2??''}" placeholder="–" data-m="${m.no}" data-s="2" oninput="onScore(this)" onkeydown="tabScore(event,this)">
        </div>
        <div class="mr-team right"><span class="mr-name">${t2}</span>${FLAGS(t2)}</div>
        <span class="mr-date">${m.d}</span>
        ${oddsHtml(t1,t2)}
      </div>`;
    });
    html+=`</div></div>`;
  });
  html+=`</div>`;
  el.innerHTML=html;
  updateNextMatch();
}

function setFilter(g) {
  activeGroup=g;
  renderGroups();
}

function onScore(inp) {
  const no=parseInt(inp.dataset.m),side=parseInt(inp.dataset.s);
  const val=inp.value===''?null:Math.max(0,parseInt(inp.value)||0);
  if(!ST.scores[no]) ST.scores[no]={g1:null,g2:null};
  ST.scores[no][side===1?'g1':'g2']=val;
  save();
  // Update just this row's class without re-rendering
  const row=document.getElementById('mr-'+no);
  if(row){
    row.classList.remove('scored','partial');
    if(hasScore(no)) row.classList.add('scored');
    else if(hasPartial(no)) row.classList.add('partial');
  }
  // Update standings for this group inline
  refreshGroupStandings(GROUP_MATCHES.find(m=>m.no===no)?.g);
  updateNextMatch();
  if(document.getElementById('sec-classement').classList.contains('on')) renderStandings();
  if(document.getElementById('sec-bracket').classList.contains('on')) renderBracket();
}

// Tab between score inputs (left→right→next match left)
function tabScore(e, inp) {
  if(e.key!=='Tab') return;
  e.preventDefault();
  const no=parseInt(inp.dataset.m),side=parseInt(inp.dataset.s);
  if(side===1){
    // move to right input of same match
    document.querySelector(`.score-inp[data-m="${no}"][data-s="2"]`)?.focus();
  } else {
    // move to next match's left input
    const allInps=Array.from(document.querySelectorAll('.score-inp[data-s="1"]'));
    const idx=allInps.findIndex(i=>parseInt(i.dataset.m)===no);
    const next=allInps[idx+1];
    if(next) next.focus(); else allInps[0]?.focus();
  }
}

function refreshGroupStandings(grp) {
  if(!grp) return;
  const standings=computeStandings(grp);
  const listEl=document.querySelector(`#sec-groupes .gc-teams`);
  // Simpler: just re-render the mini standings for all visible groups
  document.querySelectorAll('.gc').forEach(card=>{
    const label=card.querySelector('.gc-label')?.textContent;
    if(!label) return;
    const g=label.replace('Groupe ','').trim();
    if(!GROUPS[g]) return;
    const s=computeStandings(g);
    const items=card.querySelectorAll('.gc-team');
    items.forEach((li,i)=>{
      const t=s[i];
      if(!t) return;
      const statsSpan=li.querySelector('span[style*="txm"]');
      if(statsSpan) statsSpan.textContent=t.mp>0?`${t.pts}pts ${t.gf}:${t.ga}`:'';
    });
  });
}

// ═══════════════════════════════════════════════════════════
// RENDER: STANDINGS
// ═══════════════════════════════════════════════════════════
function renderStandings() {
  const el=document.getElementById('sec-classement');
  const best8=getBest8Thirds();
  const best8groups=best8.map(t=>t.grp);
  let html=`<div class="sec-head"><div><div class="sec-title">Classements</div><div class="sec-sub">Calculés depuis vos scores · barre or = qualifié, bleue = 2e qualifié</div></div></div>`;
  html+=`<div class="standings-grid">`;
  Object.keys(GROUPS).forEach(grp=>{
    const s=computeStandings(grp);
    const b8=best8groups.includes(grp);
    html+=`<div class="standing-card"><div class="standing-head"><span class="standing-glabel">Groupe ${grp}</span></div>
      <table class="standing-table"><thead><tr><th>Équipe</th><th>J</th><th>G</th><th>N</th><th>D</th><th>BP</th><th>BC</th><th>DB</th><th class="pts">Pts</th></tr></thead><tbody>`;
    s.forEach((t,i)=>{
      const cls=i===0?'q1':i===1?'q2':(i===2&&b8)?'q2':'q3';
      html+=`<tr class="${cls}"><td>${FLAGS(t.name)} ${t.name}</td><td>${t.mp}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td>${t.gd>=0?'+':''}${t.gd}</td><td class="pts">${t.pts}</td></tr>`;
    });
    html+=`</tbody></table></div>`;
  });
  html+=`</div>`;
  html+=`<div class="thirds-info"><div class="thirds-info-title">8 meilleurs 3es qualifiés pour les 16es</div><div class="thirds-grid">`;
  if(!best8.length) html+=`<span style="font-size:12px;color:var(--txd)">Entrez les scores pour voir les meilleurs 3es</span>`;
  else best8.forEach((t,i)=>{
    html+=`<div class="third-pill"><span class="third-pos">${i+1}.</span>${FLAGS(t.name)}<span style="font-size:12px;font-weight:500">${t.name}</span><span style="font-size:10px;color:var(--gold);font-weight:600">${t.pts}pts</span><span class="third-pts">(Gr.${t.grp})</span></div>`;
  });
  html+=`</div></div>`;
  el.innerHTML=html;
}

// ═══════════════════════════════════════════════════════════
// RENDER: BRACKET
// ═══════════════════════════════════════════════════════════
function renderBracket() {
  const el=document.getElementById('sec-bracket');
  const allKO=KO_ROUNDS.flatMap(r=>r.ids);
  const done=allKO.filter(id=>ST.ko[id]).length;
  const total=allKO.length;
  const pct=Math.round(done/total*100);
  let html=`<div class="sec-head"><div><div class="sec-title">Tableau éliminatoire</div><div class="sec-sub">Cliquez sur une équipe pour la qualifier au tour suivant</div></div></div>`;
  html+=`<div class="pbar"><span class="pbar-label">Matchs pronostiqués</span><div class="pbar-track"><div class="pbar-fill" style="width:${pct}%"></div></div><span class="pbar-val">${done}/${total}</span></div>`;
  html+=`<div class="bracket-container"><div class="bracket">`;

  KO_ROUNDS.forEach(round=>{
    const matchCount=round.ids.length;
    const gap=16/matchCount;
    const itemH=60,spacerH=(gap-1)*itemH;
    html+=`<div class="br-round"><div class="br-rhead">${round.name}</div><div class="br-matches">`;
    round.ids.forEach((id,mi)=>{
      const def=KO_DEFS[id],t1=resolveKOTeam(id,1),t2=resolveKOTeam(id,2),win=ST.ko[id];
      const t1w=win&&win===t1&&t1,t2w=win&&win===t2&&t2;
      const t1l=win&&t1&&win!==t1,t2l=win&&t2&&win!==t2;
      const spacer=mi>0?`style="padding-top:${spacerH}px"`:'';
      const esc=s=>s?s.replace(/'/g,"\\'"):s;
      html+=`<div class="br-slot" ${spacer}>
        <div class="br-card">
          <div class="br-team ${t1w?'win':''} ${t1l?'lose':''} ${!t1?'empty':''}" onclick="${t1?`koClick(${id},'${esc(t1)}',this)`:'void(0)'}">
            <span class="br-flag">${t1?FLAGS(t1):''}</span>
            <span class="br-tname ${!t1?'ph':''}">${t1||'À déterm.'}</span>
            <span class="br-dot"></span>
          </div>
          <div class="br-team ${t2w?'win':''} ${t2l?'lose':''} ${!t2?'empty':''}" onclick="${t2?`koClick(${id},'${esc(t2)}',this)`:'void(0)'}">
            <span class="br-flag">${t2?FLAGS(t2):''}</span>
            <span class="br-tname ${!t2?'ph':''}">${t2||'À déterm.'}</span>
            <span class="br-dot"></span>
          </div>
        </div>
        <div class="br-meta">M${id} · ${def.d}</div>
      </div>`;
    });
    html+=`</div></div>`;
  });

  const champ=ST.ko[104];
  html+=`<div class="champ-col">
    <div class="champ-trophy">🏆</div>
    <div class="champ-label">Champion</div>
    ${champ?`<div class="champ-name">${FLAGS(champ)} ${champ}</div>`:`<div class="champ-ph">En attente…</div>`}
  </div>`;
  html+=`</div></div>`;
  el.innerHTML=html;
}

function koClick(matchId,team,el) {
  const cur=ST.ko[matchId];
  if(cur===team){ delete ST.ko[matchId]; cascadeClear(matchId); }
  else { if(cur) cascadeClear(matchId); ST.ko[matchId]=team; }
  save();
  renderBracket();
  // Flash animation on the newly winning team
  if(ST.ko[matchId]) {
    setTimeout(()=>{
      document.querySelectorAll('.br-team.win').forEach(t=>{
        const name=t.querySelector('.br-tname')?.textContent;
        if(name===team) t.classList.add('win-new');
      });
    },10);
  }
}

function cascadeClear(matchId) {
  Object.keys(KO_DEFS).forEach(idStr=>{
    const id=parseInt(idStr),def=KO_DEFS[id];
    if(def.f1===matchId||def.f2===matchId){ if(ST.ko[id]){ delete ST.ko[id]; cascadeClear(id); } }
  });
}

// ═══════════════════════════════════════════════════════════
// RENDER: RESUME
// ═══════════════════════════════════════════════════════════
function renderResume() {
  const el=document.getElementById('sec-resume');
  const champ=ST.ko[104];
  const finalist=(()=>{
    const t1=resolveKOTeam(104,1),t2=resolveKOTeam(104,2);
    if(champ&&t1&&t2) return t1===champ?t2:t1;
    return null;
  })();
  let html=`<div class="sec-head"><div class="sec-title">Mon Pronostic</div></div>`;
  html+=`<div class="resume-card"><div class="resume-card-title">Podium</div><div class="podium-grid">
    ${pod('🥇','Champion',champ)}${pod('🥈','Finaliste',finalist)}${pod('🥉','3e place',ST.ko[103])}
  </div></div>`;
  html+=`<div class="resume-card"><div class="resume-card-title">Qualifiés par groupe</div><div class="qualifs-grid">`;
  Object.keys(GROUPS).forEach(g=>{
    const s=computeStandings(g);
    const q1=s[0]?.mp>=3?s[0]?.name:null,q2=s[1]?.mp>=3?s[1]?.name:null;
    html+=`<div class="qualif-item"><span class="qualif-grp">G.${g}</span><div class="qualif-teams">
      <div>${q1?`${FLAGS(q1)} ${q1}`:'<span style="color:var(--txd)">—</span>'}</div>
      <div style="color:var(--txm)">${q2?`${FLAGS(q2)} ${q2}`:'<span style="color:var(--txd)">—</span>'}</div>
    </div></div>`;
  });
  html+=`</div></div>`;
  el.innerHTML=html;
}

function pod(medal,lbl,team) {
  return `<div class="podium-item">
    <div class="podium-medal">${medal}</div>
    <div class="podium-rlabel">${lbl}</div>
    ${team?`<div class="podium-flag">${FLAGS(team)}</div><div class="podium-team">${team}</div>`:`<div class="podium-flag" style="font-size:20px;display:flex;justify-content:center">—</div><div class="podium-empty">À déterm.</div>`}
  </div>`;
}

// ═══════════════════════════════════════════════════════════
// NAV + ACTIONS
// ═══════════════════════════════════════════════════════════
function switchTab(name,btn) {
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('sec-'+name).classList.add('on');
  btn.classList.add('on');
  if(name==='groupes') renderGroups();
  else if(name==='classement') renderStandings();
  else if(name==='bracket') renderBracket();
  else if(name==='resume') renderResume();
}

function toggleTheme() {
  darkMode=!darkMode;
  document.body.classList.toggle('light',!darkMode);
  localStorage.setItem('wc2026_theme',darkMode?'dark':'light');
  document.getElementById('theme-btn').textContent=darkMode?'☀':'🌙';
}

function doSave(){ save(); toast('✓ Sauvegardé'); }
function exportJSON(){
  const b=new Blob([JSON.stringify(ST,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='wc2026.json'; a.click();
  toast('⬇ Export téléchargé');
}
function showConfirm(){ document.getElementById('confirm-overlay').classList.add('on'); }
function hideConfirm(){ document.getElementById('confirm-overlay').classList.remove('on'); }
function doReset(){ ST={scores:{},ko:{}}; save(); hideConfirm(); activeGroup='all'; renderGroups(); toast('↺ Réinitialisé'); }
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('on'); setTimeout(()=>t.classList.remove('on'),2200); }

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
load();
renderGroups();

// ═══════════════════════════════════════════════════════════
// COTES
// ═══════════════════════════════════════════════════════════

// ⚠️ Remplace par ton URL Vercel après déploiement
const ODDS_PROXY = 'https://ton-projet.vercel.app/api/odds';

let oddsCache = null; // { matchKey: {home, draw, away, bk} }

async function fetchOdds() {
  if (oddsCache) return oddsCache;
  try {
    const res = await fetch(ODDS_PROXY);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    oddsCache = {};
    data.forEach(match => {
      const bk = match.bookmakers[0];
      if (!bk) return;
      const mkt = bk.markets.find(m => m.key === 'h2h');
      if (!mkt) return;
      const home = mkt.outcomes.find(o => o.name === match.home);
      const away = mkt.outcomes.find(o => o.name === match.away);
      const draw = mkt.outcomes.find(o => o.name === 'Draw');
      // clé = "TeamA vs TeamB" (les deux ordres)
      const key = `${match.home}|${match.away}`;
      oddsCache[key] = {
        home: home?.price, draw: draw?.price, away: away?.price,
        bk: bk.name, commence: match.commence
      };
    });
    return oddsCache;
  } catch(e) {
    console.warn('Cotes indisponibles:', e.message);
    return {};
  }
}

function getOddsForMatch(t1, t2) {
  if (!oddsCache) return null;
  return oddsCache[`${t1}|${t2}`] || oddsCache[`${t2}|${t1}`] || null;
}

function oddsHtml(t1, t2) {
  const o = getOddsForMatch(t1, t2);
  if (!o) return '';
  const fmt = v => v ? v.toFixed(2) : '—';
  return `<div class="match-odds">
    <span class="odd-val" title="${t1}">${fmt(o.home)}</span>
    <span class="odd-lbl">N</span><span class="odd-val">${fmt(o.draw)}</span>
    <span class="odd-val" title="${t2}">${fmt(o.away)}</span>
    <span class="odd-src">${o.bk}</span>
  </div>`;
}

// Charge les cotes au démarrage puis rafraîchit l'affichage
fetchOdds().then(() => {
  if (document.getElementById('sec-groupes').classList.contains('on')) renderGroups();
});
