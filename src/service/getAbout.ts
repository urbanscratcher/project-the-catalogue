async function getAbout(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.text();
  } catch (error) {
    throw error;
  }
}

export default getAbout;
