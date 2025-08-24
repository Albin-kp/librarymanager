'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d48eb287f09805ce7724c8e879675d99",
".git/config": "c7bd8736981a7401fddcc37f5105e24c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6999f4c034528bf7f156efa125c23c14",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "98830023e39921232203d0c24ae2b4df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad49ba4dcab24d21399c922293751618",
".git/logs/refs/heads/gh-pages": "a9d9d658b6abe3e489d9bebb6da647f9",
".git/logs/refs/remotes/origin/gh-pages": "6c63a46b596dfa1e8ad980852fef882b",
".git/objects/01/805ab8fce1177e88ee060b67a83656eacb4214": "d0a186013a5445dede0971c0f1413356",
".git/objects/02/341255703fcd86f764ea55ccbac1cb32529f72": "cd40c2aa191a38048127b2cb6fa6446e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/037a17c851486c749fda51fa4357757c074cce": "4a17f68b435f866e285264228e69147d",
".git/objects/09/78a9a135b5708146e81612cc9a51239266ce90": "6884e6859aaceef6bb5840d4bfa7a848",
".git/objects/0b/565748e318b7860aea4c8f11ce635a0da33bf5": "b47cd886fcb05b49e6451a59029b1f5f",
".git/objects/0c/0b6c65d5973bd776482f3bae99a5cf14751fd4": "1a0f5b93649e0d1d53391a952f39fbee",
".git/objects/0c/787290fadb29dc4e2207ce2e912b4821284048": "da55e2111b934c41a37b3e2d48aeab25",
".git/objects/10/d55563dc7a4cf805a5046c6063fd2d79e9d946": "9f6456d15f754ded220f81ed9a77f66f",
".git/objects/11/7eb1753bfbf298122e14895a0f95105a18889b": "813c69cc87c2c582c6d66597b20701e8",
".git/objects/15/b49759b0e5a77eed240ea76e5e21e3f95eec72": "abc61e457b6527a10459e186e1a7db39",
".git/objects/17/b64186818ac90a96bc95bf189299c4975b6baf": "059d673c01d214aca52da4beba7697b0",
".git/objects/19/353dfcb74f08c775cf16aa31978861835a1b00": "4ea1bbcc9bd5ad4cc59e14073ea0b30c",
".git/objects/19/702a5763f9afb75d93c5b2d4484e5ab65352ee": "a302536aec7861276fbce1c88aa89274",
".git/objects/1a/207670e6ca090324678ea2f2e314d95adbbdf3": "2b4ee84579f893e2a7ec165148190351",
".git/objects/1e/d36b5c8ebb1bb3906ed7d309ab43202d166e31": "5c5775d1fc58a70baa8c939e0add9350",
".git/objects/1e/ed29a35e6bb1e1ce2a12c9d3905ad806961d75": "8bc356e61479de8d37f245f078387113",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/d2db0ef19b355e2af82993dcf390c10bd22e41": "de2f17e6777e0e15b4b441fba6fab0ba",
".git/objects/24/5d6b10b4865d19208ddcc4173be632b25e0512": "063aed0bf2be6263a383592c452286e5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/08da818a6bfc35d1be90c6de6cce0a15ec8b69": "fbfc39d1b6294967fe800ac050b8d618",
".git/objects/2e/8e5b78abf8634d8c37fbbe2ae7dece5d891adc": "cb9a2bdccd08d972c06ff4107be13217",
".git/objects/2f/0cac50ac0ccaa5f9b1a4c9f588f02b3800e9df": "9689cf0083c698aa2f9d32ccd68c3b7e",
".git/objects/33/e71117c6ac612f60fa1ca27eb0ba25d3495d1b": "cbcc8726ad9c7cc07c207d86f3ec3153",
".git/objects/3a/a2b1fa296b987500c50c40f1ffbd7445185dc8": "29f0e1a7d6a599d3476bce53d164ac74",
".git/objects/3c/abab493b6a0191b7d9978736aa1e0917deacdf": "9df241b88fd6ae4fec6f202215bfd3b9",
".git/objects/3d/5ae33a552bb2b42a1d1d0ef9d8a10c0b226579": "a6230a609ef32cbfc5184220450067ef",
".git/objects/40/40b8fbcca4fb1dcaee738987ba6b00b34ff1cb": "b4600c711aac9759e7abdd78fb6d5f0e",
".git/objects/40/e59e37f51daf35f7bdd49a4c3bbbc76bf98f40": "49c73d6c9cedd2d9fb67b0be4b0d6208",
".git/objects/41/3b84f4ab7f3d95bf3af530e4cf3f1ab6c6dbff": "8d6c8288d264314b6b90cb3c070019eb",
".git/objects/42/1d8a30541b28501afea35f8d33de68f00a461e": "4f17d3b1ad23bb428908a4a15c4f9001",
".git/objects/42/419a2ba749c640e93b4060fb5957b8f3a05ca3": "948b536ec6bb73c5940b5ce96aca3d91",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b3b64f7e35580520f17306c0824b2f87383d47": "749b4122794ed33a9d32c0ab688fee68",
".git/objects/4a/2a97e53d6cd81f9b47a44564d74446d50d5fbc": "362848d9e4e83f4cc667de4676184fb2",
".git/objects/4a/7d0fbef51f93ea6d1d49c21e50f870ef2baf6d": "d488da9dfb4057cc0f025c4c72117687",
".git/objects/4a/8d1a7bd55ad9d12178ff20941cfc2ed3bb407b": "1aac8abaa4c07ab55e829dfb539a291a",
".git/objects/4a/8de2676ae941131609b66047c3567754c8ce15": "7f575d67d6bc4e88693736af2de10744",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/f6b0b011d189617ddd3cd0407c6abe12061632": "8e9ebb7a08f959811e7f6855a55c3240",
".git/objects/4e/cf25141b24d16c7ba6871016fdbc0b0f675420": "30245b00d90d0c2a9f06e5063f3d9857",
".git/objects/50/a1ca0768a193bfd25b80d426c4f8332514a988": "fabbd159c42e30957c6ce71d289bc486",
".git/objects/54/3b74a8d2f92dd12a8d5cdcc87466c6845329c6": "2fcfdb9389fbe09ed5cbd66612a18f5b",
".git/objects/58/8cdd3973a0ee42fe51a9859adc4068e1f2b270": "9b567c437f6ab7db9b3f9efa36d6fd90",
".git/objects/5c/bda0e15dd255b3559a6f36453119f5672ec40b": "26a8ee2ff0d433bb90ce90fc6e984e09",
".git/objects/61/87a0f2c387d2d0e9edec4885a551f781ef494b": "fa1be5f4750420bdf5657de8fb617478",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/6b4af169472bdcc502ffa103d16e421fe49365": "55b0e13225a5d0f9295390657cfa9287",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/2658766b9e7737c76ebfb119aa0bf7a2714ba5": "69f218692275a7ec62c6f80dce930da3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/b1cc2e74e1c25932a2b79ee1affcde2a69d193": "65b5e37d226363e4b8a66ed0dea120b8",
".git/objects/6e/1125480e11460f5a35d5194a02d0af5ef6e125": "e1f7870e70e7a02cdc6d001d034c3dcd",
".git/objects/6e/8b595de8f3b0e993a64fb9e21f7aedb5f4a1e0": "cd7e58ef5063f853aa1d56ea75ef3ec0",
".git/objects/71/a9259bdcbe16f91b1199eafd3f81ad19a3af96": "8586a435722f98466b241531bcf9fb92",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/de1478a4de5b46086227cdf00687966d76cffc": "1737f35755f54de75b77f57a3908e937",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/7a/adac35c542fd7d047397ecde61ad45cd3205d8": "a464beb0debf25e0656b22cc8aca2f1a",
".git/objects/7d/84da096c7b4336ce85da0ccd3f1e5502385ca8": "efcdb11ffe0f734a7484f4d0f1822a7b",
".git/objects/84/39b0228708065d0e5a1de8ab9ce678e7aadfd8": "3305af4705448e71cd8a5f6d3059b8fa",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/84/7ba2771ba318ae370d0716c697f6e0c4fa2c71": "90ddba649926af49642de885ce1b7d88",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/c2b0b2a5e210ff66fba803c18350b430827520": "5b173ce427f92e080f895dc0de9d6b40",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e938eff446f41aae48629007ef376f95cab07c": "b204ae023a70cb05cef94000e151db09",
".git/objects/89/99e420f87a2aecd3410a24939e134b3a8502ab": "0dc1e5e2ac1e9c81e761c9058c88609b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/48a708944c97cf298e655e3284af45ebb9b13f": "0a78dc25b5eac1c10e5a7c8964ba51bd",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/ab964b13570acd691a7ebfb812b7bf272a6f40": "e8f56a74d76c6ddeaf4bb8e2419743c8",
".git/objects/92/58f3b292ba6800c8a43c4255714bdf54dff6b9": "71703b089cedc2b01d1de0adce8ce2b7",
".git/objects/92/c0ba0109e93c907e80cb3ce3776286d0b186e2": "8a70a6ce6cf336701d6b5db0107642e9",
".git/objects/93/c734e4706ebbd17922dc22866b3b629c743cc5": "b46b639425705622c98f36de0bb032ab",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/ac8b72604168e84d99e53c00c0b70b58cfabc8": "e800d6bd6afda69716e4706081ee6ad0",
".git/objects/9b/dd461ea1c971b073e7ef05b77e3d3a65f4f4e6": "33fcef976ba05b7205a5d944bc4d4210",
".git/objects/9f/3d69c16d852f96eeabd91ada238ab302cd1fe9": "d5fc24b1e88dacbcab0be29a505ad21d",
".git/objects/a3/3694dfc6b9e51c01bbbd26048943bf4af8cb3f": "7cc0c501dae2e60b965f04fa0028d450",
".git/objects/a3/410af11fcb36336be82bf4d06ede4c07ada110": "c0a332040f25d8bacfe7edc5ecb772c4",
".git/objects/a3/ffd3d6a296974e4c020a8395bb0c23f7cc97d9": "9d58112677a126cdfc9818bd4b34cada",
".git/objects/a8/d5e867112b048e8fa6875a2d3c40b9facd7f86": "1b74e4f2efaf122a390752d13f7c5fa8",
".git/objects/aa/7978917eb45ef106a7210226e9b5d44b350a6e": "4ad951c794e0232cb00b42f5b5f947b8",
".git/objects/ab/8ed23d5de587878cf96a35a0e78a50ae90b159": "573603c4f33fdc2d3ae8f8f67ffcd71b",
".git/objects/ac/ba601ff65dff81afc7229b01b58a03e880bb15": "16f897cfb5264cda3270aa4685126c57",
".git/objects/ae/730c99bdfc09daf777d15cae36aaeb00f17561": "8bf84ebded7f58e9578481dc9debf76a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/58b9382b189ffa09e32145e1f4f5ff17f3de1e": "2e6c9b03238f0248cc54bd598ab9c8a0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/bfab05e0af75f66d230bc647f69ce88804f1e8": "440f32214abd7c0774d4061a1b567fa1",
".git/objects/b6/62e47fba79fbdeeb1426fcbf3ce36f37b9a6bf": "0ad84c7b8dafc72b1ad56fd6d136832e",
".git/objects/b6/ea07ab872d4a48b49a8b57cac75a90c167ffea": "525df4ddfa38ee21614f457c3c47cc1c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/95ed18366ce88bd7a243c89d610c33e388ef05": "5ed1a9595cb046e15cfc5dade8ac90be",
".git/objects/be/592a5043560b64256b4799f628a4947936dfee": "7ccb395e7f63da73bed12d3a3c78c5ba",
".git/objects/bf/27194c3c1fe7fdc86a871ff1a7413eb984f701": "87445dc1669a4c5682c00eebf9035ff8",
".git/objects/c0/f63852f2b2d10937418f67fa12de8eaa382227": "cac7890666fe80a4023dc43f4b1d5450",
".git/objects/c0/fab3e8dcdd22d8e41c6cf3a7febf46ea5e138b": "c34c90e0765fe7a935ae50b9a99f74a7",
".git/objects/c2/29a2f6edb86097734f585c95238743ffbab7c1": "f585ff1ab2be6d96d21de09c00de65bf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/f147fd0097692524ab115e44d88fae3f7f5513": "069b3ef9e2f2c062f7f907007a773a77",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/3b8cad44e254583392f0dbb134b7133ccd1856": "94506a160ac674d16a3793db9c9636c1",
".git/objects/c6/7d59d275bae8ed24bd77520b9445111d21c3a8": "3e2d1e092a0ff282ae1be40ca3a60cb6",
".git/objects/c9/edaf0f1ea1ffca7fd0a9298c70db33bb1fa31e": "75395dedc3a6b4cd1cd373fe87852e5b",
".git/objects/cf/a71010a8b149f026690a0dab3b26c6860ca245": "fa5e00137246840e8a782dc0fda957a3",
".git/objects/cf/f40b2049379ffd3bb608abeb4aace12c440c17": "72c10ea13bf85a7cc423c2b951562719",
".git/objects/d3/e0f67baef268f64415585c4ab5d082e9689578": "58acd1118af95b3b9c43e748670d8bf6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7acdb5eb4d27f29bcefd526c5fd97fca6ab471": "5b01283957722a4e08717dc212bab4bc",
".git/objects/d5/4cb0f0f55d3e536f703bd1bcd26c0723185eb1": "303d98c0a0fa889f67a3f4813506f64b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/cbc9bb7b91ab514fdcca7a598c0763eec1bf00": "67fbe3e0bbe6ccc1635a04cdf4e15076",
".git/objects/d8/758bacbd305dd8e92a7cc96178dcc2cfa5b605": "0b0a0239fc42706795915df89530f4c4",
".git/objects/da/2e2dcb3bc8f1ff336a44bd82b6a2cf74385660": "58325fd18b10e46f6472282f5d9c78b1",
".git/objects/da/a436aee500cc5d0f95e488c29e3f8dd7b13162": "c5f8d26b4492482122cf0ec1b05cae44",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/0603a05911b4dfb80ce480b87bbc7dea92a96b": "e72dac0bab418056e8390883b5be8e01",
".git/objects/df/541313d0599fab391b0976bfed7942d04d3743": "e7e15898bd6267c16c53cf5952c61de4",
".git/objects/e2/81a52160c4f1e5fbf7fe1705210a705ea1e2c0": "5c8e24b24082d3cc032e403a3d43fe7e",
".git/objects/e4/ee47b8b13f86096f08627049d98a039643a8b9": "5e8280e864175e9b4c7c6391d50159a0",
".git/objects/e7/f08aee50acb2799d56c7f1c46df0434b03dc9e": "9f3d7cac1277e35c42852be1dde7eedf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/28fb1a8eb02822d2ad1f32dbdb9be3b518f273": "fd99fe5b1d972bb629b2f670fe021b6b",
".git/objects/f4/2bec9029badb266879ccb8321ca68f07c1cde3": "f85623c0f4db34359d826f793ee37230",
".git/objects/fa/af437e53a09c87ced7e5c56a8d1fec08be6857": "761379444461ff26ebf80dc4f9772dc9",
".git/objects/fa/b5f3190884c1fd7d2d4009fb73ca975df97548": "650a2a39bc080ae70baa838b27e21811",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/b316794ace1cb99c4a3d81cc771d2bf9495718": "91529833d4440936f73a62f4364a0832",
".git/objects/fe/9526186e788ea6e18d5affee8704a0a1975b70": "e3349067ffceffe355c442e0387e6021",
".git/ORIG_HEAD": "a407fe6cbee40fd45054933032af7a26",
".git/refs/heads/gh-pages": "bed2115a90f7ca1e4f48fdc6ba8c2fa7",
".git/refs/remotes/origin/gh-pages": "bed2115a90f7ca1e4f48fdc6ba8c2fa7",
"assets/AssetManifest.bin": "044756f08fcea837dc0a77e8f7598cc8",
"assets/AssetManifest.bin.json": "5c2048b49a167aa54aaeb1e7a9d205d7",
"assets/AssetManifest.json": "995cc32dabd6a512175070d5c6f3f9f9",
"assets/assets/smcya_logo.png": "9c4ef2b230e4541ca865d0f52c5e5a6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "198830b47b5a14ba2d5e7d836874e0cd",
"assets/NOTICES": "522cbefd01deac802e4368c825abb251",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "cb41f3704c1e081ea44dab552b6559cd",
"favicon.png": "9c4ef2b230e4541ca865d0f52c5e5a6a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e7bffcfa4e9ceec9c49d8cba7b8f8d3c",
"icons/android-chrome-192x192.png": "058c5c78a33ff9b162c8c7841727e46a",
"icons/android-chrome-512x512.png": "6f75f78f9071a3e86096a69dadc5a5a6",
"icons/apple-touch-icon.png": "4704b22fd62fe967afb8afeb9be3584e",
"icons/Icon-192.png": "058c5c78a33ff9b162c8c7841727e46a",
"icons/Icon-512.png": "6f75f78f9071a3e86096a69dadc5a5a6",
"icons/Icon-maskable-192.png": "058c5c78a33ff9b162c8c7841727e46a",
"icons/Icon-maskable-512.png": "6f75f78f9071a3e86096a69dadc5a5a6",
"index.html": "ee58a43d25aedd745bda9b004dd6ea6d",
"/": "ee58a43d25aedd745bda9b004dd6ea6d",
"main.dart.js": "c9fe83d74c726836fdc941589c618821",
"manifest.json": "b6f95f4045d86091976d4e87caf3f290",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
