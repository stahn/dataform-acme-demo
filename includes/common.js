/* 
 * The function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function ageBucket(age) {
  const age_clean = `cast(${age} as int64)`;
  return age_clean;
}

module.exports = {
  ageBucket
};
