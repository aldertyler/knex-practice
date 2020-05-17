require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

//
//
// function searchByName(searchTerm) {
//   knexInstance
//     .select("name", "price", "category")
//     .from("shopping_list")
//     .where("name", "ILIKE", `%${searchTerm}%`)
//     .then((result) => {
//       console.log(result);
//     });
// }

// searchByName('tofurkey');

// function paginateItems(pageNumber) {
//   const itemsPerPage = 6;
//   const offset = itemsPerPage * (pageNumber - 1);
//   knexInstance
//     .select("name", "price", "category")
//     .from("shopping_list")
//     .limit(itemsPerPage)
//     .offset(offset)
//     .then((result) => {
//       console.log(result);
//     });
// }

// paginateItems(3);

// function productsAddedDaysAgo(daysAgo) {
//   knexInstance
//     .select("id", "name", "price", "date_added", "category")
//     .from("shopping_list")
//     .where(
//       "date_added",
//       ">",
//       knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
//     )
//     .then((results) => {
//       console.log(results);
//     });
// }

// productsAddedDaysAgo(4);

function pricePerCategory() {
  knexInstance
    .select("category")
    .sum("price as total")
    .from("shopping_list")
    .groupBy("category")
    .then((result) => {
      console.log(result);
    });
}

pricePerCategory();
