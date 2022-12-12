var fs = require('fs');

db = db.getSiblingDB('lockedin');


db.createUser(
    {
        user:'user1',
        pwd:'user1',
        roles:[
            {
                role:'readWrite',
                db:'lockedin'
            }
        ]
    }
);

db.createCollection('prison');
var data = fs.readFileSync('./seeddata/prisons.json')
var docs = JSON.parse(data.toString())
db.prison.insertMany(docs)
console.log('\nCHECKPOINT -> prisons done')

db.createCollection('warden');
var data = fs.readFileSync('./seeddata/wardens.json')
var docs = JSON.parse(data.toString())
db.warden.insertMany(docs)
console.log('\nCHECKPOINT -> wardens done')

db.createCollection('guard');
var data = fs.readFileSync('./seeddata/guards.json')
var docs = JSON.parse(data.toString())
db.guard.insertMany(docs)
console.log('\nCHECKPOINT -> guards done')

db.createCollection('area');
var data = fs.readFileSync('./seeddata/areas.json')
var docs = JSON.parse(data.toString())
db.area.insertMany(docs)
console.log('\nCHECKPOINT -> areas done')

db.createCollection('moveSensor');
var data = fs.readFileSync('./seeddata/moveSensors.json')
var docs = JSON.parse(data.toString())
db.moveSensor.insertMany(docs)
console.log('\nCHECKPOINT -> moveSensors done')

db.createCollection('workStation');
var data = fs.readFileSync('./seeddata/workstations.json')
var docs = JSON.parse(data.toString())
db.workStation.insertMany(docs)
console.log('\nCHECKPOINT -> workstations done')

db.createCollection('inmate');
var data = fs.readFileSync('./seeddata/inmates.json')
var docs = JSON.parse(data.toString())
db.inmate.insertMany(docs)
console.log('\nCHECKPOINT -> inmates done')

db.createCollection('moveSensorLog', { capped: true, size: 2000000, max: 10000 });

db.createCollection('healthLog', { capped: true, size: 1000000, max: 5000 });
// db.healthLog.insertOne({_id:1,inmateId:1298,heartBeat:72,stress:70,glicose:57,uricAcid:5.2,cholesterol:183,toxicScreen:2})
// db.healthLog.insertOne({_id:2,inmateId:1134,heartBeat:82,stress:69,glicose:99,uricAcid:5.4,cholesterol:187,toxicScreen:2})
// db.healthLog.insertOne({_id:3,inmateId:1120,heartBeat:69,stress:46,glicose:17,uricAcid:5.4,cholesterol:199,toxicScreen:2})
// db.healthLog.insertOne({_id:4,inmateId:1431,heartBeat:77,stress:58,glicose:9,uricAcid:6.2,cholesterol:164,toxicScreen:1})
// db.healthLog.insertOne({_id:5,inmateId:1420,heartBeat:88,stress:58,glicose:19,uricAcid:4.8,cholesterol:154,toxicScreen:2})
// db.healthLog.insertOne({_id:6,inmateId:1264,heartBeat:80,stress:70,glicose:61,uricAcid:6.9,cholesterol:137,toxicScreen:2})
// db.healthLog.insertOne({_id:7,inmateId:1181,heartBeat:71,stress:43,glicose:20,uricAcid:4.1,cholesterol:146,toxicScreen:2})
// db.healthLog.insertOne({_id:8,inmateId:1209,heartBeat:74,stress:43,glicose:60,uricAcid:6.0,cholesterol:172,toxicScreen:1})
// db.healthLog.insertOne({_id:9,inmateId:1242,heartBeat:90,stress:60,glicose:12,uricAcid:5.6,cholesterol:175,toxicScreen:1})
// db.healthLog.insertOne({_id:10,inmateId:1246,heartBeat:85,stress:27,glicose:34,uricAcid:6.8,cholesterol:166,toxicScreen:0})
// db.healthLog.insertOne({_id:11,inmateId:1156,heartBeat:69,stress:48,glicose:88,uricAcid:6.9,cholesterol:133,toxicScreen:1})
// db.healthLog.insertOne({_id:12,inmateId:1161,heartBeat:80,stress:71,glicose:45,uricAcid:6.7,cholesterol:145,toxicScreen:1})
// db.healthLog.insertOne({_id:13,inmateId:1182,heartBeat:75,stress:35,glicose:55,uricAcid:4.6,cholesterol:159,toxicScreen:0})
// db.healthLog.insertOne({_id:14,inmateId:1211,heartBeat:72,stress:72,glicose:49,uricAcid:6.9,cholesterol:133,toxicScreen:1})
// db.healthLog.insertOne({_id:15,inmateId:1017,heartBeat:78,stress:29,glicose:80,uricAcid:4.8,cholesterol:189,toxicScreen:2})
// db.healthLog.insertOne({_id:16,inmateId:1198,heartBeat:94,stress:37,glicose:91,uricAcid:5.7,cholesterol:181,toxicScreen:2})
// db.healthLog.insertOne({_id:17,inmateId:1171,heartBeat:89,stress:63,glicose:98,uricAcid:4.1,cholesterol:191,toxicScreen:1})
// db.healthLog.insertOne({_id:18,inmateId:1151,heartBeat:87,stress:28,glicose:56,uricAcid:5.7,cholesterol:198,toxicScreen:1})
// db.healthLog.insertOne({_id:19,inmateId:1354,heartBeat:66,stress:46,glicose:44,uricAcid:6.1,cholesterol:183,toxicScreen:1})
// db.healthLog.insertOne({_id:20,inmateId:1284,heartBeat:74,stress:57,glicose:5,uricAcid:5.6,cholesterol:144,toxicScreen:2})
// db.healthLog.insertOne({_id:21,inmateId:1121,heartBeat:91,stress:59,glicose:110,uricAcid:4.5,cholesterol:177,toxicScreen:2})
// db.healthLog.insertOne({_id:22,inmateId:1183,heartBeat:91,stress:72,glicose:54,uricAcid:6.6,cholesterol:189,toxicScreen:1})
// db.healthLog.insertOne({_id:23,inmateId:1172,heartBeat:98,stress:36,glicose:10,uricAcid:5.1,cholesterol:158,toxicScreen:2})
// db.healthLog.insertOne({_id:24,inmateId:1089,heartBeat:92,stress:58,glicose:62,uricAcid:4.9,cholesterol:138,toxicScreen:1})
// db.healthLog.insertOne({_id:25,inmateId:1386,heartBeat:93,stress:32,glicose:84,uricAcid:4.7,cholesterol:160,toxicScreen:2})
// db.healthLog.insertOne({_id:26,inmateId:1146,heartBeat:86,stress:64,glicose:42,uricAcid:4.6,cholesterol:166,toxicScreen:2})
// db.healthLog.insertOne({_id:27,inmateId:1170,heartBeat:92,stress:57,glicose:110,uricAcid:6.6,cholesterol:146,toxicScreen:2})
// db.healthLog.insertOne({_id:28,inmateId:1105,heartBeat:64,stress:26,glicose:23,uricAcid:4.2,cholesterol:154,toxicScreen:1})
// db.healthLog.insertOne({_id:29,inmateId:1206,heartBeat:62,stress:41,glicose:72,uricAcid:5.3,cholesterol:191,toxicScreen:0})
// db.healthLog.insertOne({_id:30,inmateId:1057,heartBeat:93,stress:34,glicose:117,uricAcid:5.5,cholesterol:178,toxicScreen:0})
// db.healthLog.insertOne({_id:31,inmateId:1374,heartBeat:68,stress:37,glicose:14,uricAcid:4.7,cholesterol:148,toxicScreen:2})
// db.healthLog.insertOne({_id:32,inmateId:1210,heartBeat:70,stress:27,glicose:63,uricAcid:6.4,cholesterol:125,toxicScreen:2})
// db.healthLog.insertOne({_id:33,inmateId:1345,heartBeat:77,stress:37,glicose:101,uricAcid:6.7,cholesterol:172,toxicScreen:0})
// db.healthLog.insertOne({_id:34,inmateId:1417,heartBeat:99,stress:44,glicose:60,uricAcid:5.1,cholesterol:196,toxicScreen:0})
// db.healthLog.insertOne({_id:35,inmateId:1278,heartBeat:67,stress:65,glicose:12,uricAcid:6.9,cholesterol:128,toxicScreen:2})
// db.healthLog.insertOne({_id:36,inmateId:1117,heartBeat:76,stress:70,glicose:2,uricAcid:4.7,cholesterol:172,toxicScreen:0})
// db.healthLog.insertOne({_id:37,inmateId:1237,heartBeat:72,stress:75,glicose:119,uricAcid:5.6,cholesterol:141,toxicScreen:1})
// db.healthLog.insertOne({_id:38,inmateId:1421,heartBeat:69,stress:31,glicose:104,uricAcid:6.1,cholesterol:194,toxicScreen:0})
// db.healthLog.insertOne({_id:39,inmateId:1326,heartBeat:60,stress:56,glicose:103,uricAcid:5.7,cholesterol:183,toxicScreen:1})
// db.healthLog.insertOne({_id:40,inmateId:1329,heartBeat:60,stress:72,glicose:7,uricAcid:6.1,cholesterol:139,toxicScreen:1})
// db.healthLog.insertOne({_id:41,inmateId:1142,heartBeat:65,stress:34,glicose:87,uricAcid:5.2,cholesterol:152,toxicScreen:0})
// db.healthLog.insertOne({_id:42,inmateId:1062,heartBeat:91,stress:28,glicose:108,uricAcid:6.3,cholesterol:184,toxicScreen:2})
// db.healthLog.insertOne({_id:43,inmateId:1193,heartBeat:62,stress:60,glicose:17,uricAcid:4.6,cholesterol:136,toxicScreen:2})
// db.healthLog.insertOne({_id:44,inmateId:1435,heartBeat:88,stress:71,glicose:123,uricAcid:4.0,cholesterol:166,toxicScreen:1})
// db.healthLog.insertOne({_id:45,inmateId:1109,heartBeat:65,stress:57,glicose:14,uricAcid:6.9,cholesterol:164,toxicScreen:1})
// db.healthLog.insertOne({_id:46,inmateId:1019,heartBeat:85,stress:42,glicose:104,uricAcid:6.8,cholesterol:134,toxicScreen:1})
// db.healthLog.insertOne({_id:47,inmateId:1041,heartBeat:75,stress:57,glicose:15,uricAcid:6.2,cholesterol:153,toxicScreen:2})
// db.healthLog.insertOne({_id:48,inmateId:1394,heartBeat:79,stress:46,glicose:52,uricAcid:5.8,cholesterol:170,toxicScreen:0})
// db.healthLog.insertOne({_id:49,inmateId:1013,heartBeat:63,stress:65,glicose:122,uricAcid:4.2,cholesterol:144,toxicScreen:0})
// db.healthLog.insertOne({_id:50,inmateId:1143,heartBeat:88,stress:36,glicose:58,uricAcid:5.1,cholesterol:146,toxicScreen:0})
// db.healthLog.insertOne({_id:51,inmateId:1251,heartBeat:82,stress:36,glicose:36,uricAcid:4.6,cholesterol:142,toxicScreen:2})
// db.healthLog.insertOne({_id:52,inmateId:1059,heartBeat:92,stress:43,glicose:110,uricAcid:4.1,cholesterol:164,toxicScreen:2})
// db.healthLog.insertOne({_id:53,inmateId:1189,heartBeat:88,stress:46,glicose:120,uricAcid:6.9,cholesterol:134,toxicScreen:1})
// db.healthLog.insertOne({_id:54,inmateId:1073,heartBeat:86,stress:29,glicose:67,uricAcid:5.4,cholesterol:169,toxicScreen:1})
// db.healthLog.insertOne({_id:55,inmateId:1203,heartBeat:98,stress:54,glicose:16,uricAcid:6.2,cholesterol:150,toxicScreen:1})
// db.healthLog.insertOne({_id:56,inmateId:1362,heartBeat:89,stress:29,glicose:77,uricAcid:4.4,cholesterol:159,toxicScreen:1})
// db.healthLog.insertOne({_id:57,inmateId:1140,heartBeat:63,stress:73,glicose:75,uricAcid:4.1,cholesterol:158,toxicScreen:0})
// db.healthLog.insertOne({_id:58,inmateId:1184,heartBeat:66,stress:41,glicose:103,uricAcid:5.0,cholesterol:181,toxicScreen:1})
// db.healthLog.insertOne({_id:59,inmateId:1436,heartBeat:85,stress:71,glicose:86,uricAcid:5.6,cholesterol:184,toxicScreen:0})
// db.healthLog.insertOne({_id:60,inmateId:1058,heartBeat:80,stress:52,glicose:116,uricAcid:5.8,cholesterol:131,toxicScreen:2})
// db.healthLog.insertOne({_id:61,inmateId:1311,heartBeat:69,stress:41,glicose:50,uricAcid:6.9,cholesterol:138,toxicScreen:0})
// db.healthLog.insertOne({_id:62,inmateId:1299,heartBeat:79,stress:73,glicose:50,uricAcid:6.9,cholesterol:173,toxicScreen:2})
// db.healthLog.insertOne({_id:63,inmateId:1077,heartBeat:61,stress:61,glicose:83,uricAcid:6.8,cholesterol:175,toxicScreen:1})
// db.healthLog.insertOne({_id:64,inmateId:1153,heartBeat:66,stress:60,glicose:110,uricAcid:5.3,cholesterol:127,toxicScreen:1})
// db.healthLog.insertOne({_id:65,inmateId:1030,heartBeat:92,stress:72,glicose:21,uricAcid:4.4,cholesterol:140,toxicScreen:0})
// db.healthLog.insertOne({_id:66,inmateId:1043,heartBeat:100,stress:49,glicose:7,uricAcid:4.9,cholesterol:184,toxicScreen:1})
// db.healthLog.insertOne({_id:67,inmateId:1084,heartBeat:86,stress:61,glicose:115,uricAcid:5.0,cholesterol:176,toxicScreen:2})
// db.healthLog.insertOne({_id:68,inmateId:1357,heartBeat:69,stress:58,glicose:77,uricAcid:6.6,cholesterol:136,toxicScreen:1})
// db.healthLog.insertOne({_id:69,inmateId:1263,heartBeat:87,stress:47,glicose:101,uricAcid:6.1,cholesterol:198,toxicScreen:0})
// db.healthLog.insertOne({_id:70,inmateId:1102,heartBeat:62,stress:27,glicose:122,uricAcid:4.9,cholesterol:153,toxicScreen:1})
// db.healthLog.insertOne({_id:71,inmateId:1192,heartBeat:87,stress:60,glicose:104,uricAcid:5.1,cholesterol:194,toxicScreen:1})
// db.healthLog.insertOne({_id:72,inmateId:1235,heartBeat:70,stress:44,glicose:36,uricAcid:4.4,cholesterol:194,toxicScreen:0})
// db.healthLog.insertOne({_id:73,inmateId:1217,heartBeat:92,stress:69,glicose:85,uricAcid:5.0,cholesterol:126,toxicScreen:2})
// db.healthLog.insertOne({_id:74,inmateId:1290,heartBeat:74,stress:27,glicose:72,uricAcid:6.4,cholesterol:154,toxicScreen:2})
// db.healthLog.insertOne({_id:75,inmateId:1033,heartBeat:65,stress:35,glicose:9,uricAcid:5.2,cholesterol:132,toxicScreen:0})
// db.healthLog.insertOne({_id:76,inmateId:1133,heartBeat:77,stress:55,glicose:65,uricAcid:4.3,cholesterol:181,toxicScreen:2})
// db.healthLog.insertOne({_id:77,inmateId:1096,heartBeat:81,stress:37,glicose:105,uricAcid:6.3,cholesterol:167,toxicScreen:2})
// db.healthLog.insertOne({_id:78,inmateId:1216,heartBeat:69,stress:39,glicose:32,uricAcid:5.8,cholesterol:160,toxicScreen:1})
// db.healthLog.insertOne({_id:79,inmateId:1353,heartBeat:93,stress:34,glicose:78,uricAcid:4.7,cholesterol:190,toxicScreen:0})
// db.healthLog.insertOne({_id:80,inmateId:1014,heartBeat:74,stress:61,glicose:115,uricAcid:6.3,cholesterol:197,toxicScreen:1})
// db.healthLog.insertOne({_id:81,inmateId:1158,heartBeat:71,stress:31,glicose:106,uricAcid:4.2,cholesterol:162,toxicScreen:2})
// db.healthLog.insertOne({_id:82,inmateId:1413,heartBeat:82,stress:34,glicose:44,uricAcid:5.4,cholesterol:132,toxicScreen:0})
// db.healthLog.insertOne({_id:83,inmateId:1400,heartBeat:92,stress:38,glicose:78,uricAcid:5.0,cholesterol:139,toxicScreen:0})
// db.healthLog.insertOne({_id:84,inmateId:1115,heartBeat:74,stress:56,glicose:13,uricAcid:6.4,cholesterol:170,toxicScreen:1})
// db.healthLog.insertOne({_id:85,inmateId:1194,heartBeat:92,stress:66,glicose:31,uricAcid:6.9,cholesterol:128,toxicScreen:1})
// db.healthLog.insertOne({_id:86,inmateId:1168,heartBeat:70,stress:47,glicose:27,uricAcid:5.8,cholesterol:187,toxicScreen:2})
// db.healthLog.insertOne({_id:87,inmateId:1028,heartBeat:85,stress:34,glicose:113,uricAcid:4.3,cholesterol:195,toxicScreen:0})
// db.healthLog.insertOne({_id:89,inmateId:1393,heartBeat:65,stress:70,glicose:111,uricAcid:5.4,cholesterol:141,toxicScreen:2})
// db.healthLog.insertOne({_id:90,inmateId:1010,heartBeat:99,stress:75,glicose:14,uricAcid:5.9,cholesterol:136,toxicScreen:2})
// db.healthLog.insertOne({_id:91,inmateId:1026,heartBeat:92,stress:30,glicose:42,uricAcid:6.4,cholesterol:161,toxicScreen:2})
// db.healthLog.insertOne({_id:92,inmateId:1425,heartBeat:85,stress:48,glicose:44,uricAcid:6.4,cholesterol:171,toxicScreen:1})
// db.healthLog.insertOne({_id:93,inmateId:1441,heartBeat:74,stress:46,glicose:25,uricAcid:6.4,cholesterol:189,toxicScreen:1})
// db.healthLog.insertOne({_id:94,inmateId:1403,heartBeat:86,stress:41,glicose:46,uricAcid:6.1,cholesterol:128,toxicScreen:0})
// db.healthLog.insertOne({_id:95,inmateId:1144,heartBeat:96,stress:45,glicose:0,uricAcid:5.4,cholesterol:150,toxicScreen:1})