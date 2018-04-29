exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("oedoline")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("oedoline").insert([
        { name: "Shinjuku-nishiguchi", train_id: 1 },
        { name: "Higashi-shinjuku", train_id: 2 },
        { name: "Wakamatsu-kawada", train_id: 3 },
        { name: "Ushigome-yanagicho", train_id: 1 },
        { name: "Ushigome-kagurazaka", train_id: 1 },
        { name: "Iidabashi", train_id: 1 },
        { name: "Kasuga", train_id: 1 },
        { name: "Hongo-sanchome", train_id: 1 },
        { name: "Ueno-okachimachi", train_id: 1 },
        { name: "Shin-okachimachi", train_id: 1 },
        { name: "Kuramae", train_id: 1 },
        { name: "Ryogoku", train_id: 1 },
        { name: "Morishita", train_id: 1 },
        { name: "Kiyosumi-shirakawa", train_id: 1 },
        { name: "Monzen-nakacho", train_id: 2 },
        { name: "Tsukishima", train_id: 2 },
        { name: "Kachidoki", train_id: 2 },
        { name: "Tsukijishijo", train_id: 2 },
        { name: "Shiodome", train_id: 2 },
        { name: "Daimon", train_id: 2 },
        { name: "Akabanebashi", train_id: 2 },
        { name: "Azabu-juban", train_id: 2 },
        { name: "Roppongi", train_id: 2 },
        { name: "Aoyama-itchome", train_id: 2 },
        { name: "Kokuritsu-kyogijo", train_id: 2 },
        { name: "Yoyogi", train_id: 2 },
        { name: "Shinjuku", train_id: 2 },
        { name: "Tochomae", train_id: 3 },
        { name: "Nishi-shinjuku-gochome", train_id: 3 },
        { name: "Nakano-sakaue", train_id: 3 },
        { name: "Higashi-nakano", train_id: 3 },
        { name: "Nakai", train_id: 3 },
        { name: "Ochiai-minami-nagasaki", train_id: 3 },
        { name: "Shin-egota", train_id: 3 },
        { name: "Nerima", train_id: 3 },
        { name: "Toshimaen", train_id: 3 },
        { name: "Nerima-kasugacho", train_id: 3 },
        { name: "Hikarigaoka", train_id: 3 }
      ]);
    });
};
