export const getGifs = async (category) => {
  const apiKey = 'mZGJwiJYGuUUdHZWJgFj0Cplhay1Egno';
  const query = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;
}
