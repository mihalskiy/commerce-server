'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Portfolios', [
      {
        bgImage: 'https://picsum.photos/900/180',
        title: 'Christen',
        url: 'nascetur.ridiculus.mus@nec.org',
        type: 'lending',
        description: 'Consectetuer Adipiscing Elit LLC',
        content:  'ew wev wrrg rgr rhgr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/720/360',
        title: 'Christen',
        type: 'business_card',
        url: 'nascetur.ridiculus.mus@nec.org',
        //photoURL: 'photo.jpg',
        description: 'Consectetuer Adipiscing Elit LLC',
        content:  'ew wev wrrg rgr rhgr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/1020',
        title: 'Christen',
        //type: 'Fiona',
        url: 'nascetur.ridiculus.mus@nec.org',
        //photoURL: 'photo.jpg',
        description: 'Consectetuer Adipiscing Elit LLC',
        content:  'ew wev wrrg rgr rhgr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/768',
        title: 'Jerome',
        type: 'store',
        url: 'amet.consectetuer@urnanec.com',
        //photoURL: 'Morgan',
        description: 'Phasellus Vitae Ltd',
        content: '26668298599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/760',
        title: 'Stacey',
        type: 'business_card',
        url: 'convallis.ligula@magnaPraesent.ca',
        //photoURL: 'Ima',
        description: 'Sem Limited',
        content: '05501306299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/769',
        title: 'Tate',
        type: 'Bertha',
        url: 'lacinia@commodoauctorvelit.edu',
        //photoURL: 'Wylie',
        description: 'Amet Risus LLP',
        content: '80873550299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/740',
        title: 'Ulla',
        type: 'Sonia',
        url: 'sollicitudin@arcuCurabitur.org',
        //photoURL: 'Wendy',
        description: 'Dis Parturient Montes Foundation',
        content: '89891008699',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/749',
        title: 'Fulton',
        type: 'store',
        url: 'dapibus.ligula.Aliquam@velsapienimperdiet.ca',
        //photoURL: 'Cherokee',
        description: 'Integer Urna Vivamus description',
        content: '79867949899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/741',
        title: 'Hakeem',
        type: 'Nichole',
        url: 'Sed.diam@nectellusNunc.org',
        //photoURL: 'Amethyst',
        description: 'Quam Vel Industries',
        content: '57514003099',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/850',
        title: 'Cara',
        type: 'business_card',
        url: 'enim.nec.tempus@rutrumFusce.com',
        //photoURL: 'Vanna',
        description: 'Lorem Ipsum Dolor Inc.',
        content: '80371621899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/859',
        title: 'Myra',
        type: 'store',
        url: 'lobortis@fermentum.com',
        //photoURL: 'Amery',
        description: 'Cras Corporation',
        content: '99893881199',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/870',
        title: 'Walker',
        type: 'Tamekah',
        url: 'Integer@lacusCras.ca',
        //photoURL: 'Myra',
        description: 'Dui Suspendisse Ac PC',
        content: '35818405499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/810',
        title: 'Carlos',
        type: 'business_card',
        url: 'et@Pellentesquehabitant.ca',
        //photoURL: 'Lionel',
        description: 'Ac Mattis Associates',
        content: '71645260499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/830',
        title: 'Elizabeth',
        type: 'Clare',
        url: 'aliquet.sem@dapibusligulaAliquam.net',
        //photoURL: 'Yeo',
        description: 'Ac Risus Foundation',
        content: '78452048299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/880',
        title: 'Uta',
        type: 'business_card',
        url: 'tortor.dictum.eu@eu.com',
        //photoURL: 'Jacqueline',
        description: 'Dui Corp.',
        content: '62541914299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/890',
        title: 'Ray',
        type: 'business_card',
        url: 'mauris@blanditcongueIn.edu',
        //photoURL: 'Lavinia',
        description: 'Sapien Aenean Associates',
        content: '39933470799',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/870',
        title: 'TaShya',
        type: 'Callie',
        url: 'Curae.Phasellus@duiCras.net',
        //photoURL: 'Ima',
        description: 'Interdum Sed Auctor Inc.',
        content: '97420859899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/810',
        title: 'Oprah',
        type: 'business_card',
        url: 'lectus.sit@vestibulum.org',
        //photoURL: 'Barclay',
        description: 'Diam Pellentesque Corp.',
        content: '59504180099',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/830',
        title: 'Upton',
        type: 'business_card',
        url: 'pharetra.ut.pharetra@scelerisqueloremipsum.edu',
        //photoURL: 'Winter',
        description: 'Et Libero Proin Consulting',
        content: '16520705499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/750',
        title: 'Kirsten',
        type: 'ew wev wrrg rgr rhgr',
        url: 'Quisque@adipiscing.net',
        //photoURL: 'Astra',
        description: 'Leo Elementum Sem Consulting',
        content: '04954489199',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/850',
        title: 'Destiny',
        type: 'Candice',
        url: 'arcu.et@pharetranibhAliquam.org',
        //photoURL: 'Winifred',
        description: 'Sed Dictum Incorporated',
        content: '33973045899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/950',
        title: 'Georgia',
        type: 'business_card',
        url: 'feugiat@dapibusligula.ca',
        //photoURL: 'Courtney',
        description: 'Ante Maecenas Mi Corporation',
        content: '43218079299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/450',
        title: 'Troy',
        type: 'lending',
        url: 'sapien.Nunc@aliquet.co.uk',
        //photoURL: 'Roanna',
        description: 'Parturient Montes Nascetur Corp.',
        content: '02302464599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/350',
        title: 'Cain',
        type: 'lending',
        url: 'Duis.risus.odio@nulla.ca',
        //photoURL: 'Duncan',
        description: 'Ornare In Faucibus Limited',
        content: '07534620699',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/250',
        title: 'Kessie',
        type: 'business_card',
        url: 'iaculis.enim@acipsum.edu',
        //photoURL: 'Ali',
        description: 'Urna Nunc description',
        content: '47242579599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/550',
        title: 'Samuel',
        type: 'lending',
        url: 'nec@eratVivamusnisi.com',
        //photoURL: 'Steven',
        description: 'Et Corporation',
        content: '31618342399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/950',
        title: 'Xerxes',
        type: 'lending',
        url: 'per.conubia.nostra@commodoat.co.uk',
        //photoURL: 'Aline',
        description: 'Morbi Inc.',
        content: '81783671999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/910',
        title: 'Jordan',
        type: 'lending',
        url: 'vitae.mauris.sit@quispede.ca',
        //photoURL: 'Ruth',
        description: 'Nonummy Limited',
        content: '24251156899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/920',
        title: 'Kadeem',
        type: 'Claire',
        url: 'ut@utdolor.ca',
        //photoURL: 'Florence',
        description: 'Ullamcorper Eu Euismod Foundation',
        content: '93354101099',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/930',
        title: 'Hilel',
        type: 'business_card',
        url: 'dictum.ultricies@feugiat.co.uk',
        //photoURL: 'Howard',
        description: 'Neque Tellus Imperdiet PC',
        content: '62566069299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/940',
        title: 'Oleg',
        type: 'business_card',
        url: 'consequat.lectus@nullamagna.co.uk',
        //photoURL: 'Amal',
        description: 'Elementum Lorem Limited',
        content: '52996631399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/960',
        title: 'Urielle',
        type: 'lending',
        url: 'luctus@nislsemconsequat.edu',
        //photoURL: 'Felicia',
        description: 'A Sollicitudin Associates',
        content: '00555371199',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage:'https://picsum.photos/900/990',
        title: 'Silas',
        type: 'lending',
        url: 'dolor.dapibus@egestasblandit.com',
        //photoURL: 'Karleigh',
        description: 'Erat Vivamus Nisi Foundation',
        content: '24981186999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/980',
        title: 'Cara',
        type: 'business_card',
        url: 'posuere.at@Vestibulumanteipsum.co.uk',
        //photoURL: 'Rafael',
        description: 'Nec Limited',
        content: '86331320599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/580',
        title: 'Amery',
        type: 'lending',
        url: 'ultricies@lectusNullamsuscipit.com',
        //photoURL: 'Cherokee',
        description: 'Ullamcorper Duis Associates',
        content: '45856020499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/530',
        title: 'James',
        type: 'lending',
        url: 'tincidunt.nunc@Seddiam.org',
        //photoURL: 'Lunea',
        description: 'Ligula LLP',
        content: '54351878899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/520',
        title: 'Nicole',
        type: 'business_card',
        url: 'amet.massa.Quisque@feugiat.net',
        //photoURL: 'Gray',
        description: 'Dui Nec LLC',
        content: '23475673399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/510',
        title: 'Alyssa',
        type: 'business_card',
        url: 'Maecenas.malesuada@elit.ca',
        //photoURL: 'Quincy',
        description: 'Pharetra Felis Associates',
        content: '05614203499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/550',
        title: 'Rhoda',
        type: 'business_card',
        url: 'sit.amet@luctus.co.uk',
        //photoURL: 'Chester',
        description: 'Elementum PC',
        content: '33443754399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/590',
        title: 'Colleen',
        type: 'business_card',
        url: 'urna.suscipit@lectusCumsociis.edu',
        //photoURL: 'Hasad',
        description: 'Malesuada Consulting',
        content: '63761424999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/570',
        title: 'Octavia',
        type: 'Karleigh',
        url: 'nec@etlibero.com',
        //photoURL: 'Demetrius',
        description: 'Dui Semper description',
        content: '38397716699',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: '(922) 671-4762',
        title: 'Aretha',
        type: 'Gretchen',
        url: 'Cras.interdum@pedePraesent.co.uk',
        //photoURL: 'Beverly',
        description: 'Hendrerit description',
        content: '60878005199',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/530',
        title: 'Mason',
        type: 'lending',
        url: 'vitae@a.net',
        //photoURL: 'Cailin',
        description: 'Accumsan Sed Facilisis LLC',
        content: '97419420899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/410',
        title: 'Emi',
        type: 'lending',
        url: 'diam.Sed@gravidanuncsed.org',
        //photoURL: 'Emi',
        description: 'Interdum Libero LLP',
        content: '77618699999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/420',
        title: 'Keelie',
        type: 'store',
        url: 'amet.consectetuer@aliquetdiamSed.edu',
        //photoURL: 'Abra',
        description: 'Scelerisque Sed description',
        content: '05710673799',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/430',
        title: 'August',
        type: 'store',
        url: 'elit@Pellentesque.com',
        //photoURL: 'Lane',
        description: 'Quisque Tincidunt Pede Inc.',
        content: '06546512899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/440',
        title: 'Chiquita',
        type: 'store',
        url: 'Curabitur.ut@Morbinequetellus.ca',
        //photoURL: 'Jasmine',
        description: 'Nec Ligula Consectetuer LLP',
        content: '29365804299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/450',
        title: 'Kaitlin',
        type: 'store',
        url: 'ipsum@gravida.org',
        //photoURL: 'Uma',
        description: 'Enim Mi Consulting',
        content: '09744826499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/460',
        title: 'Malik',
        type: 'store',
        url: 'morbi.tristique.senectus@eleifendegestasSed.org',
        //photoURL: 'Melyssa',
        description: 'Ultricies Institute',
        content: '57869361399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/470',
        title: 'Indigo',
        type: 'lending',
        url: 'enim.nec@consectetueradipiscing.ca',
        //photoURL: 'Gillian',
        description: 'Blandit Congue In Inc.',
        content: '82672037299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/480',
        title: 'Zorita',
        type: 'store',
        url: 'elit.Curabitur@nunc.ca',
        //photoURL: 'Orlando',
        description: 'Hendrerit Limited',
        content: '43458244299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/490',
        title: 'Nomlanga',
        type: 'store',
        url: 'ipsum.Donec@ipsumnunc.co.uk',
        //photoURL: 'Mannix',
        description: 'Iaculis Nec LLP',
        content: '37625732099',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: '(171) 246-6253',
        title: 'Montana',
        type: 'store',
        url: 'nulla@maurisidsapien.com',
        //photoURL: 'Cheryl',
        description: 'Ridiculus LLP',
        content: '67263926199',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/400',
        title: 'Alma',
        type: 'store',
        url: 'nunc@dui.com',
        //photoURL: 'Jocelyn',
        description: 'At Associates',
        content: '14604424299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/300',
        title: 'lending',
        type: 'business_card',
        url: 'mauris.a@Suspendisse.co.uk',
        //photoURL: 'Victoria',
        description: 'Iaculis Institute',
        content: '09586894999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/310',
        title: 'lending',
        type: 'business_card',
        url: 'lobortis.Class.aptent@duiCraspellentesque.co.uk',
        //photoURL: 'Tyrone',
        description: 'Ac Sem Ut Corp.',
        content: '24322989299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/320',
        title: 'lending',
        type: 'business_card',
        url: 'leo@metusVivamus.org',
        //photoURL: 'Casey',
        description: 'Nunc Ac description',
        content: '30976826999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/330',
        title: 'Xavier',
        type: 'business_card',
        url: 'Aenean.sed.pede@nequeIn.ca',
        //photoURL: 'Raymond',
        description: 'Netus Et LLP',
        content: '22584535899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/340',
        title: 'Yvonne',
        type: 'Vielka',
        url: 'magna.a@turpis.net',
        //photoURL: 'Illiana',
        description: 'Eu Arcu LLP',
        content: '50997809499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/350',
        title: 'Bradley',
        type: 'business_card',
        url: 'ac@estNunclaoreet.edu',
        //photoURL: 'Silas',
        description: 'Eget Ipsum Suspendisse Institute',
        content: '02793533799',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: '(848) 417-5513',
        title: 'Brandon',
        type: 'Bethany',
        url: 'ipsum.non@non.com',
        //photoURL: 'Shelby',
        description: 'Aliquam Tincidunt Consulting',
        content: '34384324799',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/360',
        title: 'Carter',
        type: 'Camille',
        url: 'enim@orci.net',
        //photoURL: 'TaShya',
        description: 'Phasellus Industries',
        content: '99543073899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: '(160) 662-5385',
        title: 'Kevyn',
        type: 'business_card',
        url: 'elit.sed.consequat@lacusEtiam.edu',
        //photoURL: 'Tanisha',
        description: 'Lectus A Incorporated',
        content: '86205926999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/900/370',
        title: 'Rhona',
        type: 'business_card',
        url: 'primis@elit.co.uk',
        //photoURL: 'Talon',
        description: 'Et Institute',
        content: '30584825599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bgImage: 'https://picsum.photos/700/180',
        title: 'Wayne',
        type: 'Claire',
        url: 'nibh@enim.co.uk',
        //photoURL: 'Yolanda',
        description: 'Metus Aenean LLC',
        content: '32269822099',
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Portfolios', null, {});
  },
};
