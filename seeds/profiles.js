exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        {user_id: 99901, age: getRandomAge(18, 85) , website_url: 'aardvark.example.org'},
        {user_id: 99902, age: getRandomAge(18, 85) , website_url: 'baboon.example.org'},
        {user_id: 99903, age: getRandomAge(18, 85) , website_url: 'capybara.example.org'},
        {user_id: 99904, age: getRandomAge(18, 85) , website_url: 'duck.example.org'},
        {user_id: 99905, age: getRandomAge(18, 85) , website_url: 'elephant.example.org'},
        {user_id: 99906, age: getRandomAge(18, 85) , website_url: 'flying.fox.example.org'},
        {user_id: 99907, age: getRandomAge(18, 85) , website_url: 'gila.monster.example.org'},
        {user_id: 99908, age: getRandomAge(18, 85) , website_url: 'heron.example.org'},
        {user_id: 99909, age: getRandomAge(18, 85) , website_url: 'impala.example.org'},
        {user_id: 99910, age: getRandomAge(18, 85) , website_url: 'jerboa.example.org'},
        {user_id: 99911, age: getRandomAge(18, 85) , website_url: 'kinkajou.example.org'},
        {user_id: 99912, age: getRandomAge(18, 85) , website_url: 'lemur.example.org'},
        {user_id: 99913, age: getRandomAge(18, 85) , website_url: 'mongoose.example.org'},
        {user_id: 99914, age: getRandomAge(18, 85) , website_url: 'nyala.example.org'},
        {user_id: 99915, age: getRandomAge(18, 85) , website_url: 'ocelot.example.org'},
        {user_id: 99916, age: getRandomAge(18, 85) , website_url: 'panda.example.org'},
        {user_id: 99917, age: getRandomAge(18, 85) , website_url: 'quokka.example.org'},
        {user_id: 99918, age: getRandomAge(18, 85) , website_url: 'rail.example.org'},
        {user_id: 99919, age: getRandomAge(18, 85) , website_url: 'sloth.example.org'},
        {user_id: 99920, age: getRandomAge(18, 85) , website_url: 'terrapin.example.org'},
        {user_id: 99921, age: getRandomAge(18, 85) , website_url: 'urial.example.org'},
        {user_id: 99922, age: getRandomAge(18, 85) , website_url: 'viscacha.example.org'},
        {user_id: 99923, age: getRandomAge(18, 85) , website_url: 'wombat.example.org'},
        {user_id: 99924, age: getRandomAge(18, 85) , website_url: 'xerus.example.org'},
        {user_id: 99925, age: getRandomAge(18, 85) , website_url: 'yak.example.org'},
        {user_id: 99926, age: getRandomAge(18, 85) , website_url: 'zebu.example.org'}
      ])
    })
}

function getRandomAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/* function randomLocation() {

}
 */