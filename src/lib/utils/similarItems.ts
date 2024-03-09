// similar products
const similarItems = (currentItem: any, allItems: any[]) => {
  let categories: string[] = [];

  // set categories
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.data.categories.includes(category)),
  );

  // filter by slug
  const filterBySlug = filterByCategories.filter(
    (product) => product.slug !== currentItem.slug,
  );

  return filterBySlug;
};

export default similarItems;
