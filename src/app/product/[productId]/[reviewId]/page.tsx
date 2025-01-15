export default async  function ProductReview({
    params,
  }: {
    params: Promise<{ productId: string, reviewId: string }>
  }) {
    const { productId, reviewId } = await params;
    return <div>My Review: {reviewId},for Product {productId}</div>
  }

// nested Dynamic routing