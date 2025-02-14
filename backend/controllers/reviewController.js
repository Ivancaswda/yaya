
let reviews = []
const getReviews = (req, res) => {
    const { productId } = req.query;
    const productReviews = reviews.filter(review => review.productId === productId);
    res.json(productReviews);
}
const postReview  = (req, res) => {
    const { author, content, productId } = req.body;
    const newReview = { id: reviews.length + 1, author, content, productId };
    reviews.push(newReview);
    res.json(newReview);
}
export {getReviews, postReview}