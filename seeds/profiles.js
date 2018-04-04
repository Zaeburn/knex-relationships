exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        {user_id: 99901, website_url: 'aardvark.example.org'},
        {user_id: 99902, website_url: 'baboon.example.org'},
        {user_id: 99903, website_url: 'capybara.example.org'},
        {user_id: 99904, website_url: 'duck.example.org'},
        {user_id: 99905, website_url: 'elephant.example.org'},
        {user_id: 99906, website_url: 'flying.fox.example.org'},
        {user_id: 99907, website_url: 'gila.monster.example.org'},
        {user_id: 99908, website_url: 'heron.example.org'},
        {user_id: 99909, website_url: 'impala.example.org'},
        {user_id: 99910, website_url: 'jerboa.example.org'},
        {user_id: 99911, website_url: 'kinkajou.example.org'},
        {user_id: 99912, website_url: 'lemur.example.org'},
        {user_id: 99913, website_url: 'mongoose.example.org'},
        {user_id: 99914, website_url: 'nyala.example.org'},
        {user_id: 99915, website_url: 'ocelot.example.org'},
        {user_id: 99916, website_url: 'panda.example.org'},
        {user_id: 99917, website_url: 'quokka.example.org'},
        {user_id: 99918, website_url: 'rail.example.org'},
        {user_id: 99919, website_url: 'sloth.example.org'},
        {user_id: 99920, website_url: 'terrapin.example.org'},
        {user_id: 99921, website_url: 'urial.example.org'},
        {user_id: 99922, website_url: 'viscacha.example.org'},
        {user_id: 99923, website_url: 'wombat.example.org'},
        {user_id: 99924, website_url: 'xerus.example.org'},
        {user_id: 99925, website_url: 'yak.example.org'},
        {user_id: 99926, website_url: 'zebu.example.org'}
      ])
    })
}
