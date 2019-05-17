export const paginationData = (count, limit, offset) => ({
  pageSize: parseInt(limit, 10),
  totalCount: count,
  page: Math.ceil(offset / limit) + 1,
  pageCount: Math.ceil(count / limit),
});
