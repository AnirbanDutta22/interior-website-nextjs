import React from "react";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  return <div>Category Page no. {params.category}</div>;
};

export default CategoryPage;
