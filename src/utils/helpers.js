export function slugify(string) {
  return (
    string &&
    string
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+[ơ]/g)
      .map((x) => x.toLowerCase())
      .join('-')
  );
}

export function unslugify(slug) {
  const result = slug.replace(/\-/g, ' ');
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
