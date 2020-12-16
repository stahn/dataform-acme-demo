/* 
 * The function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function ageBucket(age) {
  const age_clean = `cast(${age} as int64)`;
  return `case
            when ${age_clean} between 0 and 18 then "Under 18"
            when ${age_clean} between 19 and 35 then "19 to 35"
            when ${age_clean} between 36 and 50 then "36 to 50"
            else "50+"
          end`;
}

module.exports = {
  ageBucket
};
