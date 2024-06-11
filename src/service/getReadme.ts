async function getReadme(url: string) {
  try {
    const res = await fetch(url);
    return res.text();
  } catch (error) {
    console.error(error);
  }
}

export default getReadme;
