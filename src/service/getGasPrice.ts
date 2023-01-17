export async function getGasPrice() {
  //{fast: string, instant: string, standard: string}
  return fetch("https://ethgasstation.info/api/ethgasAPI.json")
    .then((res: any) => {
      return res.json();
    })
    .then((data) => {
      return { fast: data.fast, standard: data.average, slow: data.slow };
    });
}
