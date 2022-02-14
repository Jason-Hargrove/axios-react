const axios = require("axios");

export default function PersonList() {
  console.log(
    axios({
      url: "https://dog.ceo/api/breeds/list/all",
    })
  );
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
