export const getMarvelDetail = async (id: string | number) => {
  const res = await fetch(`/api/marvel/${id}`);
  return res.json();
};

export const getMarvel = async (type: string) => {
  const matrixPath: { [x: string]: string } = {
    show: '',
    movie: '?type=movie',
    tvShow: '?type=tvShow',
  };

  const path = matrixPath[type] || '';

  const res = await fetch(`/api/marvel${path}`);
  return res.json();
};
