async function getMarkdown(url: string, revalidate?: number) {
  try {
    const res = await fetch(url, { next: { revalidate: revalidate || 60 } });
    return res.text();
  } catch (error) {
    console.error(error);
  }
}

export default getMarkdown;
